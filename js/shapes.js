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
    document.getElementById("color").onClick = drawColoredRectangle;
    document.getElementById("triangle").onClick = drawTriangle;
    document.getElementById("smile").onClick = drawFace;
    document.getElementById("pyramid").onClick = drawPyramid;
}

 //Exercise 1.

const sayHello = function() {
  const canvas = document.getElementById('student-canvas-1');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var message = prompt("Message: ");

    if (message.length > 50) {
      alert("Your message is too long. Keep it under 50 characters.");
    }

  } while (message.length > 50);

  ctx.font = '48px sans-serif';
  ctx.strokeText(message, 30, 70);
};

//Exercise 2

const drawRectangle = function() {
  let canvas = document.getElementById("student-canvas-2");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let width = 0;
  let height = 0;
  let x = 0;
  let y = 0;
  let status;
  do {
    status = true;
    width = Number(window.prompt("Width:"));
    height = Number(window.prompt("Height:"));
    x = Number(window.prompt("X:"));
    y = Number(window.prompt("Y:"));
    let test1 = Boolean(width);
    let test2 = Boolean(height);
    let test3 = Boolean(x);
    let test4 = Boolean(y)
    if (test1 == false && test2 == false && test3 == false && test4 == false) {
      status = true;
    } else if ((!Number.NaN && width < 1) || (!Number.NaN && width > canvas.width)) {
      window.alert("Your width must be between 1 and 1024.");
      status = false;
    } else if ((!Number.isNaN && !(height >= 1)) || (!Number.isNaN && !(height <= canvas.height))) {
      window.alert("Your height must be between 1 and 512.");
      status = false;
    } else if ((!Number.isNaN && !(x >= 1)) || (!Number.isNaN && !(x <= canvas.width))) {
      window.alert("Your x coordinate must be between 1 and 1024.");
      status = false;
    } else if ((!Number.isNaN && !(y >= 1)) || (!Number.isNaN && !(y <= canvas.height))) {
      window.alert("Your y coordinate must be between 1 and 512.");
      status = false;
    } else {
      status = true;
    }
  } while (status == false);
  let test1 = Boolean(width);
  let test2 = Boolean(height);
  let test3 = Boolean(x);
  let test4 = Boolean(y);
  if (test1 == false && test2 == false && test3 == false && test4 == false) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    context.strokeRect(x, y, width, height);
  }
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
  const canvas = document.getElementById('student-canvas-6');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var distance = 0
  var height = 0
  var row = 0
  var column = 0
  var counter = 5

  do {
    var block = prompt("Side: ");

    if (block < 1) {
      alert("Your block size must be at least 1.");
    } else if (block > canvas.height || block > canvas.width){
      alert("Your pyramid won't fit on canvas.");
    } else if (isNaN(block)){
      alert("Your block size is not a number.");
    }

  } while (block < 1 || block > canvas.height || block > canvas.width || isNaN(block));

  for (i = 5; i > 0; i--) {
    counter = i
    while(counter >= 1) {
      ctx.beginPath();
      ctx.rect(10 + Number(distance), (502 - block) - Number(height), Number(block), Number(block));
      ctx.stroke();
      ctx.closePath();
      distance = Number(distance) + Number(block);
      counter--;
    }
    row++;
    distance = row * (1/2 * block);
    column++;
    height = column * block;
  }

};
