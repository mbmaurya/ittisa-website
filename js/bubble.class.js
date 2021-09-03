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
  "M372.272167,349.094287 C393.953103,345.525965 411.450762,336.314557 425.036921,323.084786 C437.157614,311.282039 446.165122,296.281055 452.252425,279.235476 C457.528127,264.462529 460.610396,248.153841 461.624856,231.060408 C462.560522,215.294659 461.737125,198.861336 459.253234,182.34968 C456.834604,166.271853 452.841589,150.119755 447.365187,134.437392 C441.775313,118.430087 434.639944,102.912184 426.055853,88.4622128 C416.871187,73.0012667 406.027992,58.7629114 393.644809,46.4557956 C379.869395,32.765002 364.188248,21.4641145 346.764554,13.5286795 C332.95943,7.24128346 320.163691,3.35874416 308.194938,1.44637373 C293.205201,-0.948690149 279.512608,-0.253504058 266.758848,2.67802067 C253.699065,5.6798862 241.623709,11.0266981 230.148052,17.8015905 C219.540415,24.0640292 209.445184,31.5466787 199.558499,39.5253882 C190.094453,47.1630208 180.821503,55.2552083 171.473113,63.1667553 C161.956616,71.2205717 152.361941,79.0871925 142.407915,86.096535 C131.711894,93.6283687 120.60095,100.170354 108.726227,104.891112 C96.3027791,109.830015 83.0433332,112.775486 68.5484026,112.775486 C55.3826033,112.775486 44.1390555,115.152749 34.7955992,119.238507 C24.4169235,123.776951 16.3827102,130.423452 10.6625871,138.261412 C5.09648676,145.888323 1.72153382,154.643394 0.509744082,163.682093 C-0.675130002,172.520029 0.208132145,181.629133 3.13336996,190.219908 C6.12160682,198.995698 11.24072,207.230592 18.462822,214.082979 C25.7096512,220.958827 35.0738944,226.442684 46.5273769,229.684265 C56.5100091,232.509563 68.0797373,233.631509 81.217907,232.48713 C91.5229711,231.589524 102.792974,229.297626 115.018915,225.339769 C130.533505,220.317291 144.047677,218.435277 156.033272,218.996688 C170.874453,219.691856 183.371918,224.133446 194.421493,230.998079 C204.61515,237.330967 213.576541,245.72605 222.009023,255.144278 C229.641399,263.668869 236.840475,273.031656 244.127792,282.462179 C251.289054,291.729574 258.535531,301.062381 266.362166,309.729434 C274.624813,318.879319 283.534059,327.287207 293.672257,334.0928 C304.332912,341.249109 316.352449,346.633724 330.407972,349.246373 C342.6648,351.524679 356.469864,351.695084 372.272167,349.094287 Z",
  "M158.670013,390.160097 C166.295912,389.535757 173.412307,388.380467 180.021905,386.734081 C187.668711,384.829337 194.637182,382.267271 200.931508,379.109596 C208.422778,375.35145 214.95913,370.749632 220.547631,365.408176 C227.275782,358.977448 232.630076,351.47466 236.622841,343.081356 C241.072257,333.728113 243.830899,323.26901 244.915829,311.955278 C245.933016,301.347985 245.47898,289.989459 243.567783,278.086746 C241.935732,267.922526 239.241097,257.361476 235.492631,246.532526 C232.281117,237.254777 228.296062,227.780382 223.542973,218.190422 C219.059649,209.144748 216.017103,200.076627 214.075041,191.048426 C211.856702,180.735879 211.074227,170.475417 211.22045,160.359989 C211.371529,149.908615 212.514018,139.612069 214.088525,129.572869 C215.698799,119.305619 217.760941,109.30754 219.676565,99.6882989 C221.777322,89.1394212 223.701873,79.046144 224.661036,69.5531013 C225.780567,58.4728619 225.584904,48.2103495 222.819151,38.9955498 C220.422957,31.0120317 216.097616,23.8149417 209.027046,17.5538435 C204.276777,13.3474078 198.287409,9.56344557 190.81147,6.24731112 C180.813278,1.81237024 170.338418,-0.154435044 159.661629,0.00943311039 C149.36629,0.167446726 138.883194,2.30660774 128.458669,6.1243468 C118.360878,9.82242763 108.318045,15.0955132 98.5540586,21.6686017 C88.8967563,28.1698706 79.5122399,35.9428893 70.6171382,44.7215721 C61.5760702,53.6443109 53.0406109,63.60599 45.2382295,74.3272085 C37.0473397,85.5822747 29.6643504,97.674404 23.3524304,110.280345 C16.4828915,123.999943 10.8820257,138.328148 6.88909278,152.848245 C2.45158589,168.985013 0,185.358784 0,201.397579 C0,216.285934 1.35183378,230.800201 3.91353308,244.740675 C6.48274838,258.72205 10.2689391,272.12626 15.1288837,284.751836 C19.8497025,297.015981 25.5836785,308.545433 32.1995413,319.155538 C38.5371077,329.319329 45.6839283,338.63949 53.5246114,346.9537 C61.0067112,354.887671 69.120659,361.9056 77.7661819,367.866433 C86.019758,373.55703 94.7578036,378.284207 103.893075,381.925237 C112.620216,385.4036 121.709882,387.890699 131.086008,389.279534 C140.041439,390.606053 149.258201,390.930652 158.670013,390.160097 Z",
  "M199.387128,359 C209.4241,359 217.81066,356.981119 225.041208,353.277617 C232.897937,349.253383 239.389759,343.240109 245.150968,335.666634 C250.236178,328.981804 254.752171,321.081429 259.135139,312.260413 C262.947852,304.587076 266.659902,296.217077 270.558418,287.344539 C274.066628,279.360291 277.725835,270.969093 281.745273,262.312404 C285.451607,254.330052 289.464237,246.12196 293.947209,237.79904 C298.128041,230.037061 302.717954,222.175211 307.85001,214.303452 C312.649871,206.941227 317.923961,199.570335 323.781142,192.264375 C333.40423,180.261008 339.448969,167.012146 342.218992,153.251038 C345.081842,139.028778 344.446817,124.259364 340.649109,109.752259 C337.1142,96.2490398 330.839175,82.9730823 322.094343,70.5771673 C314.177315,59.3546764 304.235944,48.8535004 292.47081,39.5580335 C281.801362,31.1282521 269.632028,23.6900621 256.112406,17.6047354 C243.809519,12.0670739 230.388453,7.64972433 215.961942,4.62493274 C202.826378,1.87081244 188.857261,0.271176881 174.139689,0.0315318641 C160.746664,-0.18654566 146.733841,0.721590757 132.165347,2.91080552 C118.796341,4.9197726 106.528467,7.79295581 95.3230605,11.3909376 C82.3273892,15.5637618 70.760803,20.7114848 60.562988,26.6166211 C48.6582947,33.5101407 38.61892,41.4358394 30.3489127,50.0477268 C20.8092722,59.9817337 13.6239775,70.8287933 8.64575344,82.0578471 C3.1183212,94.5257138 0.311799107,107.464509 0.0245937916,120.147308 C-0.277797671,133.500717 2.21259189,146.570343 7.26047034,158.507746 C12.2700282,170.354528 19.7983924,181.086213 29.6155888,189.873538 C38.6946502,198.000162 49.7312978,204.46382 62.5436288,208.608589 C71.4889873,211.502398 79.3678694,215.238306 86.3620974,219.626828 C94.1808777,224.532714 100.894124,230.254158 106.755844,236.526449 C112.956683,243.161613 118.204617,250.413203 122.800338,257.967858 C127.528081,265.739536 131.565601,273.831941 135.240253,281.90392 C139.081085,290.340938 142.525487,298.755642 145.947269,306.75847 C149.70378,315.544161 153.433028,323.833453 157.629603,331.110912 C162.459699,339.486986 167.908867,346.522674 174.731208,351.432099 C181.402014,356.232478 189.385668,359 199.387128,359 Z",
  "M250.015857,349 C263.45666,349 276.370159,346.718988 288.579244,342.589565 C300.675585,338.498275 312.080461,332.592556 322.621626,325.293135 C332.74039,318.286213 342.063275,309.995047 350.437922,300.791787 C358.558853,291.867346 365.78813,282.085238 371.986825,271.784805 C378.150733,261.542179 383.295594,250.787028 387.284807,239.853013 C391.374613,228.643282 394.249753,217.245551 395.763029,206.019363 C397.362876,194.150959 397.440585,182.474286 395.822223,171.414187 C394.079972,159.50741 390.372034,148.315222 384.481393,138.367695 C378.190325,127.743966 371.618391,119.950658 364.559775,114.065 C355.680083,106.660883 346.030194,102.275714 335.200367,99.0724152 C325.237083,96.125427 314.27513,94.1787426 301.995461,91.8019184 C291.900787,89.8480167 280.915615,87.6034313 268.862701,84.2734904 C258.973953,81.5414586 248.366478,78.0788424 236.942388,73.4467723 C227.467384,69.6049884 217.430644,64.9587551 206.776322,59.2576871 C197.777992,54.4427313 188.33914,48.8753619 178.426124,42.4047389 C169.8871,36.8309757 160.996245,30.5869969 151.732056,23.5763919 C137.225572,12.5987201 123.26093,5.81506442 110.074044,2.48889162 C92.822224,-1.86259339 76.9015605,-0.296481164 62.8402971,5.5380392 C48.9832963,11.2878037 36.9320663,21.1828661 27.1921626,33.6448695 C18.4751404,44.7981176 11.6094668,58.0074593 6.95755967,72.141418 C2.51814206,85.6297664 0.0948691559,99.9601917 0.00272901556,114.149293 C-0.0911826138,128.611195 2.23653706,142.926286 7.31939555,156.053348 C12.6049462,169.703886 20.8697536,182.069754 32.4888359,191.980136 C43.3930669,201.280792 57.2515332,208.418811 74.3742064,212.426451 C85.4849694,215.026977 95.3063019,218.035824 104.018511,221.374766 C114.642638,225.446449 123.617426,230.009003 131.269844,234.92057 C140.51378,240.853624 147.828108,247.295961 153.789172,253.997527 C160.608279,261.663727 165.656502,269.669155 169.796608,277.639494 C174.347151,286.399987 177.800595,295.118088 181.302582,303.296751 C185.228942,312.46651 189.216323,320.958171 194.879362,328.071207 C200.66114,335.333384 208.189581,341.15852 219.183032,344.801094 C227.326502,347.499355 237.371292,349 250.015857,349 Z",
];

// If the amount of image is not equal to the length of the pathes array
// You will not be able to use image insides at all
var imgs = ["red-chilly.png", "vijaya-bank.png", "flip.png", "yippee.png"];

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
  image.src = "./assets/images/home-page/gel-effect/" + imgs[id];
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
