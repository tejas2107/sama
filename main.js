function setup(){
    canvas=createCanvas(500,550);
    canvas.position(560,150);
    vedio=createCapture(VIDEO)
    vedio.size(500,550)
    posenet=ml5.poseNet(vedio,modelLoaded)
    posenet.on("pose",gotpose)
}
function modelLoaded(){
    console.log("model is loaded")
}
function draw(){
    background("darkblue")
}
function gotpose(resullts){
  if(resullts.length>0){
      console.log(results)
  }
  
}