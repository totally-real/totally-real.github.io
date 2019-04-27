c = document.getElementById("can");
can = c.getContext("2d");
can.canvas.width = window.innerWidth;
can.canvas.height = window.innerHeight;
can.beginPath;
can.rect(50, 50, 50, 50);
can.stroke();

{
  const x = new obstacle(10, 20, 30, 40);
  x.xp =1
  window.alert(x.xp)
}
