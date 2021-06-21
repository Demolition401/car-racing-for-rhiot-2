var button 
var inp
var heading

function setup(){
  var canvas=createCanvas(window.innerWidth,window.innerHeight);
  button = createButton("button")
  button.position(100,100)

  inp=createInput().attribute("placeholder", "something")
  inp.position(200,200)

  heading=createElement("h2")
  heading.html("something 2.0")
  heading.position(window.innerWidth/2,window.innerHeight/2)

}
function draw()
{
  background(100);
  
}
