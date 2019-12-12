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
  const canvas = document.getElementById('student-canvas-2');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {

    var width = prompt("Width: ");
    var height = prompt("Height: ");
    var x = prompt("X-coordinate: ");
    var y = prompt("Y-coordinate: ");

    if (width > 1024 || width < 1) {
        if (width == null) {
          break;
        }
        alert("Your width must be between 1 and 1024.");
      } else if (height > 512 || height < 1) {
        if (height == null) {
           break;
         }
        alert("Your height must be between 1 and 512.");
      } else if (x > 1024 || x < 1) {
        if (x == null) {
           break;
        }
        alert("Your x-coordinate must be between 1 and 1024.");
      } else if (y > 512 || y < 1) {
        if (y == null) {
          break;
        }
        alert("Your y-coordinate must be between 1 and 512.");
      } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)){
        alert("One of your values is not a number.");
      } else if (x + width > 1024 || y + height > 512) {
        alert("Your rectangle won't fit on canvas.")
      }

  } while(width < 1 || width > 1024 || height < 1 || height > 512 || x < 1 || y < 1 || x > 1024 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || x + width > 1024 || y + height > 512);

  ctx.strokeRect(x, y, width, height);
};
/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  const canvas = document.getElementById('student-canvas-3');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let color = prompt("Color: ");
  color = color.toLowerCase().trim();

  while (color != "black" && color != "blue" && color != "green" && color != "orange" && color != "purple" && color != "red" && color != "yellow") {
    if (color == null) {
      break;
    }
    alert(color + " is not a supported color.");
    color = prompt("Color: ");
  }

  ctx.fillStyle = color;
  ctx.fillRect(10, 10, 100, 50);
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  const canvas = document.getElementById('student-canvas-4');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let side1 = Number(prompt("Side 1: "));
  let side2 = Number(prompt("Side 2: "));
  let side3 = Number(prompt("Side 3: "));

  let height = Math.min(side1, side2, side3);
  let hypotenuse = Math.max(side1, side2, side3);
  let base = Math.sqrt((hypotenuse*hypotenuse) - (height*height));

  while (((height*height) != (hypotenuse*hypotenuse) - (base*base)) || height > 512 || height < 1 || base > 1024 || base < 1 || hypotenuse < 1 || isNaN(side1) || isNaN(side2) || isNaN(side3)) {

    if (side1 == 0 && side2 == 0 && side3 == 0) {
      break;
    }

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("One of your sides is not a number.");
    } else if (base > 1024 || height > 512 || hypotenuse > 1144) {
      alert("Your triangle won't fit on the canvas.");
    } else if ((hypotenuse*hypotenuse) != (height*height) + (base*base) || base == 0 || height == 0 || hypotenuse == 0  || side1 + side2 + side3 - hypotenuse - height != base) {
      alert("That's not a valid right triangle.");
    }

    side1 = Number(prompt("Side 1: "));
    side2 = Number(prompt("Side 2: "));
    side3 = Number(prompt("Side 3: "));

  }

  if (((height*height) == (hypotenuse*hypotenuse) - (base*base)) && base <= 1024 && height <= 512 && hypotenuse <= 1144 && height > 0 && base > 0 && hypotenuse > 0) {
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, height + 25);
    ctx.lineTo(base + 25, height + 25);
    ctx.closePath();
    ctx.stroke();
  }

};


/*
 * Exercise 5.
 */

const drawFace = function() {
  const canvas = document.getElementById('student-canvas-5');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let head = prompt("Radius: ");

  while (head < 32 || head > (canvas.height / 2) || isNaN(head)) {

    if (head == null) {
      break;
    }

    if (isNaN(head)) {
      alert("Your radius is not a number.");
    }

    head = Number(head);

    if (head < 32) {
      alert("Your radius must be at least 32.");
    }

    if (head > (canvas.height / 2)) {
      alert("Your smiley face won't fit on canvas.");
    }

    head = prompt("Radius: ");
  }

  head = Number(head);
  let eyes = Number(head * 0.15);
  let mouth = Number(head * 0.7);

  ctx.beginPath();
  ctx.arc(512, 256, head, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(512, 256, mouth, 0, Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc((head * 0.4) + 512, 256 - (head * 0.4), eyes, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(512 - (head * 0.4), 256 - (head * 0.4), eyes, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  const canvas = document.getElementById('student-canvas-3');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var block = prompt("Side: ");
    if (block < 1) {
      alert("Your block size must be at least 1.");
    } else if (block > canvas.height || block > canvas.width){
      alert("Your pyramid won't fit on canvas.");
    } else {
      alert("Your block size is not a number.")
    }

  } while (block < 1 || block > canvas.height || block > canvas.width || isNaN(block));

};
