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

    this.document.getElementById("hello").onclick = sayHello;
    this.document.getElementById("rectangle").onclick = drawRectangle;
    this.document.getElementById("color").onclick = drawColoredRectangle;
    this.document.getElementById("triangle").onclick = drawTriangle;
    this.document.getElementById("face").onclick = drawFace;
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
// Something is wrong
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
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1024, 512);

    let sideOne = prompt("Side 1: ");
    let sideTwo = prompt("Side 2: ");
    let sideThree = prompt("Side 3: ");

    while ( isNaN(sideOne) || sideOne > 1024 || sideOne < 1 || isNaN(sideTwo) ||  sideTwo > 1024 || sideTwo< 1 || isNaN(sideThree) || sideThree > 1024 || sideThree< 1){

        if (sideOne == null || sideTwo == null || sideThree == null) {
          ctx.clearRect(0, 0, 1024, 512);
          return;
        }
        if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)){
          alert("One of your sides is not a number.")
        } else {
          alert("One of your sides is invalid.")
        }
        sideOne = prompt("Side 1: ");
        sideTwo = prompt("Side 2: ");
        sideThree = prompt("Side 3: ");
      }

   let hypotenuse = Math.max(sideOne , sideTwo , sideThree);
   let height = Math.min(sideOne , sideTwo , sideThree);
   let base = Math.sqrt((hypotenuse * hypotenuse) - (height * height))

    if ( base > 1024 || height > 512 || hypotenuse > 1144 ){
      alert("Your triangle won't fit on the canvas")
    }
    if ((height ** 2) + (base ** 2) == (hypotenuse ** 2)) {
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(25, height + 25);
      ctx.lineTo(base + 25, height + 25);
      ctx.closePath();
      ctx.stroke();
    } else {
      alert("That's not a valid right triangle.")
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
    // write your exercise 5 code here
};
