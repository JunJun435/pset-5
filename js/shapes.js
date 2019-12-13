window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("color").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("face").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;

}

/*
 * Exercise 1.
 */
const sayHello = function() {
  let canvas = document.getElementById("student-canvas-1");
  let ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, 1024, 128);
  let message = prompt("Message: ");
  while (message.length > 50){
    alert("Your message is too long. Keep it under 50 characters.");
    message = prompt("Message: ");
  }
   ctx.font = '48px sans-serif';
   ctx.strokeText(message, 30, 70, 994);
};
/*
 * Exercise 2.
 */
const drawRectangle = function() {
  let canvas = document.getElementById("student-canvas-2");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);
  let width = prompt("Width: ");
  let height = prompt("Height: ");
  let x = prompt("X: ");
  let y = prompt("Y: ");

  while (isNaN(width) || width < 1 || width > 1024 || isNaN(height) || height < 1 || height > 512 || isNaN(x) || x < 1 || x >= 1024 || isNaN(y) || y < 1 || y >= 512 ||  x > 1024 - width || y > 512 -  height) {
    if (x == null || y == null || width == null || height == null) {
      ctx.clearRect(0, 0, 1024, 512);
      return;
    }
    if (isNaN(width) || width < 1 || width > 1024){
      alert("Your width must be between 1 and 1024.");
    }
    if (isNaN(height) || height < 1 || height > 512){
      alert("Your height must be between 1 and 512.");
    }
    if (isNaN(x) || x < 1 || x > 1024){
      alert("Your X is invaid.");
    }
    if (isNaN(y) || y < 1 || y > 512){
      alert("Your Y is invaid.");
    }
    if ( x > 1024 - width || y > 512 -  height){
      alert("Your rectangle is out of the bounds of the canvas.");
    }

   width = prompt("Width: ");
   height = prompt("Height: ");
   x = prompt("X: ");
   y = prompt("Y: ");
 }
  ctx.strokeRect( x, y, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let canvas = document.getElementById("student-canvas-3");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let color = prompt("Color: ");
  color = color.toLowerCase();
  color = color.trim();

    if (color == null) {
      ctx.clearRect(0, 0, 1024, 512);
      return;
    }
  while (color !== "black" && color !== "blue" && color !== "green" && color !== "orange" && color !== "purple" && color !== "red" && color !== "yellow"){
    alert("Your color is not valid.");
    color = prompt("Color: ");
  }
  ctx.fillStyle = color
   ctx.fillRect(10, 10, 100, 50);
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  let canvas = document.getElementById("student-canvas-4");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let side1 = 0;
  let side2 = 0;
  let side3 = 0;
  let height = 0;
  let hypotenuse = 0;
  let base = 0;
  let check = 0;
  let status;
  do {
    side1 = Number(window.prompt("Side 1:"));
    side2 = Number(window.prompt("Side 2:"));
    side3 = Number(window.prompt("Side 3:"));
    status;
    let test1 = Boolean(side1);
    let test2 = Boolean(side2);
    let test3 = Boolean(side3);
    if (test1 == false && test2 == false && test3 == false) {
      status = true;
      context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      status = true;
      if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) {
        window.alert("One of your sides is not a number.");
        status = false;
      }
      hypotenuse = Math.max(side1, side2, side3);
      height = Math.min(side1, side2, side3);
      if ((side1 == hypotenuse && side2 == height) || (side1 == height && side2 == hypotenuse)) {
        base = side3
      }
      if ((side2 == hypotenuse && side3 == height) || (side2 == height && side3 == hypotenuse)) {
        base = side1
      }
      if ((side1 == hypotenuse && side3 == height) || (side1 == height && side3 == hypotenuse)) {
        base = side2
      }
      check = Math.hypot(height, base);
      if (check !== hypotenuse && status == true) {
        window.alert("That's not a valid right triangle.");
        status = false;
      } else if (height > canvas.height || base > canvas.width && status == true) {
        window.alert("Your triangle won't fit on the canvas.");
      } else {
        status = true;
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  } while (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3) || check !== hypotenuse || height > canvas.height || base > canvas.width || status == false);
  let heightPoint = height + 25;
  let basePoint = base + 25;
  let test1 = Boolean(side1);
  let test2 = Boolean(side2);
  let test3 = Boolean(side3);
  if (test1 == false && test2 == false && test3 == false) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.moveTo(25, 25);
    context.lineTo(25, heightPoint);
    context.lineTo(basePoint, heightPoint);
    context.closePath();
    context.stroke();
  }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  let canvas = document.getElementById("student-canvas-5");
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let radius = prompt("Radius: ");

  while(radius < 32 || isNaN(radius) || radius > (canvas.width / 2)){
    if (radius == null) {
      ctx.clearRect(0, 0, 1024, 512);
      return;
    }
    if(radius < 32){
      alert("Your radius must be at least 32.")
    }
    if(isNaN(radius)){
      alert("Your radius is not a number.")
    }
    if(radius > (canvas.width / 2)){
      alert("Your smiley face won't fit on the canvas.")
    }
    radius = prompt("Radius: ");
  }
  let eyes = 0.15 * radius
  let mouth = 0.7 * radius


  ctx.beginPath();
    ctx.arc(512, 256, radius, 0, (2 * Math.PI));
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512, 256, mouth, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512 - (0.4 * radius), 256 - (0.4 * radius), eyes, 0, (2 * Math.PI));
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(512 + (0.4 * radius), 256 - (0.4 * radius), eyes, 0, (2 * Math.PI));
    ctx.stroke();
    ctx.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  let canvas = document.getElementById("student-canvas-6");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let sideLength;
  let status;
  let test;
  do {
    sideLength = Number(window.prompt("Side:"));
    test = Boolean(sideLength);
    if (test == false) {
      status = true;
    } else if (isNaN(sideLength)) {
      window.alert("Your block size is not a number.");
      status = false;
    } else if (sideLength < 1) {
      window.alert("Your block size must be at least 1.");
      status = false;
    } else if (sideLength > 100) {
      window.alert("Your pyramid won't fit on the canvas.");
      status = false;
    } else {
      status = true;
    }
  } while (status !== true)
  if (test == false) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    let bottomX = 10;
    let bottomY = 402;
    let blocks = 0;
    let newRow = 0;
    for (row = 5; row > 0; row = row - 1) {
      blocks = row;
      while (blocks >= 1) {
        context.beginPath();
        context.rect(bottomX, bottomY, sideLength, sideLength);
        context.stroke();
        context.closePath();

        bottomX = bottomX + sideLength;
        blocks = blocks - 1;
      }
      bottomY = bottomY - sideLength;
      newRow = newRow + 1
      bottomX = newRow * (sideLength / 2);
    }
  }
};
