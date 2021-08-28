/**
 *
 *	BUBBLE|JS
 * 	-------------------
 *	DESC | Define main bubble class
 *	LOCATION | scripts > js > bubble.class.js
 *
 */

/*---------- CLASS -----------*/

var Bubble;

// An array of shapes. The conditions to make the bubble works its :
// If you want to change Shapes, you will need to make them with illustrator and with the same number of points.
// Here there is 32 points in each pathes. If this conditions its not respected. The code will crash
var pathes = [
  "M186.917 78.124C152.544 128.353 145.079 200 93.458 200 41.839 200 0 145.44 0 78.124 0 10.81 41.839 0 93.459 0c51.62 0 139.928 10.173 93.458 78.124z",
  "M186.917 78.124C152.544 128.353 145.079 200 93.458 200 41.839 200 0 145.44 0 78.124 0 10.81 41.839 0 93.459 0c51.62 0 139.928 10.173 93.458 78.124z",
  "M186.917 78.124C152.544 128.353 145.079 200 93.458 200 41.839 200 0 145.44 0 78.124 0 10.81 41.839 0 93.459 0c51.62 0 139.928 10.173 93.458 78.124z",
  "M186.917 78.124C152.544 128.353 145.079 200 93.458 200 41.839 200 0 145.44 0 78.124 0 10.81 41.839 0 93.459 0c51.62 0 139.928 10.173 93.458 78.124z",
];

// If the amount of image is not equal to the length of the pathes array
// You will not be able to use image insides at all
var imgs = [
  "portfolio-redchillies.png",
  "portfolio-redchillies.png",
  "portfolio-redchillies.png",
  "portfolio-redchillies.png",
];

/*  NOTE  */
/*  I uses those two arrays but you can easily call a Json file where you will store all this datas */
/**********/

Bubble = function () {
  // Settings for the physics creation
  this.settings = {
    pointSize: 10,
    centerSize: 30,
    cursorSize: 50,
    radiusStiffness: 0.04,
    anchorStifness: 0.01,
    neighboorStiffness: 1,
    spiderStiffness: 0.3,
    distantNeighboorStiffness: 0.4,
    spiderGap: 400,
  };
};

// Init the class
Bubble.prototype.init = function (dom) {
  this.dom = dom;
  this.anim = true;

  // Change to false if you dont want images inside shapes
  this.allowImgs = true;
  this.current = 0;
  this.rasters = [];
  this.initPaper();

  return this;
};

// Check if the pathes used have sthe same amount of segements
Bubble.prototype.checkPathes = function () {
  var tmp = null;

  for (var i = 0; i < pathes.length; i++) {
    var p = new paper.Path(pathes[i]);

    if (!tmp) tmp = p.segments.length;

    if (p.segments.length === tmp) {
      p.remove();
    } else {
      return false;
    }
  }

  return true;
};

// Init Paper JS Environment
Bubble.prototype.initPaper = function () {
  // Initialize Paper JS
  this.project = new paper.Project(this.dom);
  this.view = this.project.view;
  this.tool = new paper.Tool();
  this.project.activate();

  var check = this.checkPathes();

  if (check) {
    // Launch the Image loading
    this.loadRasters(this.current);
  } else {
    throw new Error("The shapes have not the same amount of segments");
  }

  return this;
};

// Create an array of images to put inside shapes
Bubble.prototype.loadRasters = function (id) {
  if (imgs.length != pathes.length) {
    this.allowImgs = false;
    this.initMatter();
    return false;
  }

  const that = this;

  let image = new Image();

  image.onload = function () {
    that.rasters[id] = new paper.Raster({ source: this.src, opacity: 0 });

    if (id === pathes.length - 1) {
      that.initMatter();
    } else {
      that.loadRasters(id + 1);
    }
  };

  // The path depend of the project
  image.src = "./assets/images/home-page/work/" + imgs[id];
};

// Initialize MatterJs Component
Bubble.prototype.initMatter = function () {
  (this.Engine = Matter.Engine),
    (this.World = Matter.World),
    (this.Bodies = Matter.Bodies),
    (this.Body = Matter.Body),
    (this.Constraint = Matter.Constraint),
    (this.MouseConstraint = Matter.MouseConstraint);

  this.engine = this.Engine.create(
    document.getElementById("app-container"),
    null
  );

  this.engine.world.gravity.x = 0;
  this.engine.world.gravity.y = 0;
  this.engine.render.canvas.id = "physics";
  // Set to 1 to see how matter works
  this.engine.render.canvas.style.opacity = 0;

  this.mouse = this.MouseConstraint.create(this.engine, {
    constraint: { stiffness: 5 },
  });

  this.Engine.run(this.engine);

  this.launch();
};

// Launch the Bubble creation
Bubble.prototype.launch = function () {
  // methods
  this.onResize();
  this.listen();
  this.view.on({ frame: this.onFrame.bind(this) });
};

// Create the first Shape selected
Bubble.prototype.createShape = function () {
  if (this.polygon) this.polygon.remove();

  // Set all object to null
  this.polygon = this.center = this.cursor = null;
  this.mouseTarget = { x: 0, y: 0 };

  // Create a new Shape with the first path
  this.polygon = new paper.Path(pathes[this.current]);
  this.polygon.position = {
    x: this.view.center.x,
    y: this.view.center.y,
  };
  this.polygon.fillColor = "#ff00ff";

  // Methods
  this.createMask(this.current);
  this.createPhysics();
};

// Create a Mask between shapes and images
Bubble.prototype.createMask = function (id) {
  // Check if the images array length fit the shapes array length
  if (!this.allowImgs) return false;

  // Remove all existing raster
  if (this.raster) {
    this.raster.remove();
  }

  // Create a group will be used as a mask for the image
  this.group = new paper.Group([this.polygon]);

  // Set all images opacity to 0 and add them in the group
  for (var i = 0; i < this.rasters.length; i++) {
    TweenMax.to(this.rasters[i], 0.99, { opacity: 0 });
    this.group.addChild(this.rasters[i]);
    this.rasters[i].fitBounds(this.view.bounds, true);
  }

  // Display the first Image
  TweenMax.to(this.rasters[id], 0.99, { opacity: 0.99 });

  // Create a mask between the active shape and images
  this.group.clipped = true;
  this.group.opacity = 1;
};

// Update the the current Shpae to the new shape
Bubble.prototype.updateShape = function (id) {
  var that = this;

  // get the new path
  var newPath = new paper.Path(pathes[id]);
  newPath.position = {
    x: this.view.center.x,
    y: this.view.center.y,
  };
  newPath.visible = false;
  this.anim = false;
  this.World.clear(this.engine.world);

  // Fade images in
  this.updateRasters(id);

  for (var i = 0; i < this.polygon.segments.length; i++) {
    TweenMax.to(this.polygon.segments[i].point, 1, {
      x: newPath.segments[i].point.x,
      y: newPath.segments[i].point.y,
      ease: Circ.easeInOut,
      onComplete: function () {
        if (i === that.polygon.segments.length) {
          that.createPhysics();
        }
      },
    });
  }

  this.current = id;
};

// Update the Image inside the bubble
Bubble.prototype.updateRasters = function (id) {
  if (this.allowImgs) {
    TweenMax.to(this.rasters[this.current], 1.2, {
      opacity: 0,
      ease: Power4.easeInOut,
    });
    TweenMax.to(this.rasters[id], 1.2, {
      opacity: 0.99,
      ease: Power4.easeInOut,
    });
  }
};

// Create Matter Js Physics
Bubble.prototype.createPhysics = function () {
  this.World.clear(this.engine.world);

  this.circles = [];
  this.anchors = [];
  this.links = [];

  var i = this.polygon.segments.length;

  // Create the center anchor
  this.center = this.Bodies.circle(
    this.view.center.x,
    this.view.center.y,
    this.settings.centerSize,
    { density: 0.005, isStatic: false }
  );

  // Create four anchor to keep the center anchor to the center
  this.center1 = this.Bodies.circle(
    this.view.center.x - this.settings.spiderGap,
    this.view.center.y - this.settings.spiderGap,
    4,
    { density: 1, isStatic: true }
  );
  this.center2 = this.Bodies.circle(
    this.view.center.x + this.settings.spiderGap,
    this.view.center.y - this.settings.spiderGap,
    4,
    { density: 1, isStatic: true }
  );
  this.center3 = this.Bodies.circle(
    this.view.center.x - this.settings.spiderGap,
    this.view.center.y + this.settings.spiderGap,
    4,
    { density: 1, isStatic: true }
  );
  this.center4 = this.Bodies.circle(
    this.view.center.x + this.settings.spiderGap,
    this.view.center.y + this.settings.spiderGap,
    4,
    { density: 1, isStatic: true }
  );

  // Create the physic mouse
  this.cursor = this.Bodies.circle(300, 300, this.settings.cursorSize, {
    isStatic: false,
    restitution: 0,
  });

  for (let t = 0; t < i; t++) {
    this.circles.push(
      this.Bodies.circle(
        this.polygon.segments[t].point.x,
        this.polygon.segments[t].point.y,
        this.settings.pointSize,
        { density: 0.005, restitution: 0 }
      )
    );
    this.anchors.push(
      this.Bodies.circle(
        this.polygon.segments[t].point.x,
        this.polygon.segments[t].point.y,
        this.settings.pointSize,
        { density: 0.005, restitution: 0 }
      )
    );
  }

  let j, k;

  j = k = this.circles.length;

  for (let t = 0; t < j; t++) {
    // create link between points

    var bodyB;

    if (this.circles[t + 1]) {
      bodyB = this.circles[t + 1];
    } else {
      bodyB = this.circles[0];
    }

    this.links.push(
      this.Constraint.create({
        bodyA: this.circles[t],
        bodyB: bodyB,
        stiffness: this.settings.neighboorStiffness,
      })
    );

    this.links.push(
      this.Constraint.create({
        bodyA: this.circles[t],
        bodyB: this.anchors[t],
        stiffness: this.settings.anchorStifness,
      })
    );

    // create sub-link between points

    var bodyB2;

    if (this.circles[t + 2]) {
      bodyB2 = this.circles[t + 2];
    } else if (this.circles[t]) {
      bodyB2 = this.circles[0];
    } else {
      bodyB2 = this.circles[1];
    }

    this.links.push(
      this.Constraint.create({
        bodyA: this.circles[t],
        bodyB: bodyB2,
        stiffness: this.settings.distantNeighboorStiffness,
      })
    );

    // create link to center

    this.links.push(
      this.Constraint.create({
        bodyA: this.circles[t],
        bodyB: this.center,
        stiffness: this.settings.radiusStiffness - 0.0001,
      })
    );
  }

  this.links.push(
    this.Constraint.create({
      bodyA: this.center1,
      bodyB: this.center,
      stiffness: this.settings.spiderStiffness,
    })
  );

  this.links.push(
    this.Constraint.create({
      bodyA: this.center2,
      bodyB: this.center,
      stiffness: this.settings.spiderStiffness,
    })
  );

  this.links.push(
    this.Constraint.create({
      bodyA: this.center3,
      bodyB: this.center,
      stiffness: this.settings.spiderStiffness,
    })
  );

  this.links.push(
    this.Constraint.create({
      bodyA: this.center4,
      bodyB: this.center,
      stiffness: this.settings.spiderStiffness,
    })
  );

  this.World.add(this.engine.world, this.center);
  this.World.add(this.engine.world, this.center1);
  this.World.add(this.engine.world, this.center2);
  this.World.add(this.engine.world, this.center3);
  this.World.add(this.engine.world, this.center4);
  this.World.add(this.engine.world, this.circles);
  this.World.add(this.engine.world, this.links);
  this.World.add(this.engine.world, this.cursor);

  this.anim = true;

  this.resizePhysics(this.view.size.width, this.view.size.height);
};

// Next slider function
Bubble.prototype.next = function () {
  var next = this.current + 1 > pathes.length - 1 ? 0 : this.current + 1;
  this.updateShape(next);
};

// Prev slider function
Bubble.prototype.prev = function () {
  var prev = this.current - 1 < 0 ? pathes.length - 1 : this.current - 1;
  this.updateShape(prev);
};

// Init Events
Bubble.prototype.listen = function () {
  window.addEventListener("resize", this.onResize.bind(this));
  window.addEventListener("mousemove", this.onMouseMove.bind(this));
  document
    .getElementById("ctrlRight")
    .addEventListener("click", this.next.bind(this));
  document
    .getElementById("ctrlLeft")
    .addEventListener("click", this.prev.bind(this));
};

// Remove Events
Bubble.prototype.unlisten = function () {
  window.removeEventListener("resize", this.onResize.bind(this));
  window.removeEventListener("mousemove", this.onMouseMove.bind(this));
  document
    .getElementById("ctrlRight")
    .removeEventListener("click", this.next.bind(this));
  document
    .getElementById("ctrlLeft")
    .removeEventListener("click", this.prev.bind(this));
};

// Resizethe view
Bubble.prototype.onResize = function () {
  this.view.size.width = window.innerWidth;
  this.view.size.height = window.innerHeight;

  // Recreate the shape at each resize
  this.createShape();
};

// Mouse Move Event
Bubble.prototype.onMouseMove = function (e) {
  this.mouseTarget.x = e.clientX;
  this.mouseTarget.y = e.clientY;
};

// Paper request animation frame
Bubble.prototype.onFrame = function (event) {
  // Smooth the shape
  this.polygon.smooth();

  if (!this.anim) return;

  // Move the point in function of the mouse position
  if (this.polygon.segments && this.engine.world.bodies) {
    var i = this.circles.length;

    while (i--) {
      this.polygon.segments[i].point.x = this.circles[i].position.x;
      this.polygon.segments[i].point.y = this.circles[i].position.y;
    }

    let x = this.mouseTarget.x - this.cursor.positionPrev.x;
    let y = this.mouseTarget.y - this.cursor.positionPrev.y;

    this.Body.translate(this.cursor, { x: x, y: y });
  }

  // Make the bubble moving by herself
  for (var i = 0; i < this.anchors.length; i++) {
    this.anchors[i].position.x +=
      Math.cos(this.anchors[i].position.y * 0.009 + event.time) * 0.3;
    this.anchors[i].position.y +=
      Math.sin(this.anchors[i].position.x * 0.009 + event.time) * 0.3;
  }
};

// Resize the physics canvas
Bubble.prototype.resizePhysics = function (w, h) {
  // update bound area
  this.engine.world.bounds.max = { x: w, y: h };

  // update canvas size
  this.engine.render.canvas.width = w;
  this.engine.render.canvas.height = h;
  this.engine.render.canvas.style.width = w + "px";
  this.engine.render.canvas.style.height = h + "px";
};
