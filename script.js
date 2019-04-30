class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  
  block(itemX, itemY) {
    if (((itemX >= this.x) && (itemX <= (this.x + this.width))) && ((itemY >= this.y) && (itemY <= (this.y + this.height)))) {
      return true;
    } else {
      return false;
    }
  }
}

function listen(key) {
  let fakeX = itemX;
  let fakeY = itemY;
  if (key == 37) {
    fakeX -= 10;
  } else if (key == 38) {
    fakeY -= 10;
  } else if (key == 39) {
    fakeX += 10;
  } else if (key == 40) {
    fakeY += 10;
  } else {

  }
  
  if (((fakeX >= 0) && (fakeX <= (window.innerWidth - 50))) && ((fakeY >= 0) && (fakeY <= (window.innerHeight - 50)))) {
    itemX = fakeX;
    itemY = fakeY;
    redraw();
  }
}

document.addEventListener("keydown", function(event) {
  console.log(event.which);
});
document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
      case 37: // left  
      case 38: // up
      case 39: // right
      case 40: // down
        listen(e.which || e.keyCode);
        break;
      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};
var itemX = 50;
var itemY = 50;
function redraw () {
  c = document.getElementById("can");
  can = c.getContext("2d");
  can.canvas.width = window.innerWidth;
  can.canvas.height = window.innerHeight;
  can.beginPath;
  can.rect(itemX, itemY, 50, 50);
  can.stroke();
}

{
  const x = new Obstacle(10, 20, 30, 40);
  window.alert(x.block(20, 30))
}
redraw();
