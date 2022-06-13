function setup(){
    video=createCapture(VIDEO);
    video.size(550,520);

    canvas=createCanvas(550,450);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}
function draw(){
    background("#e2e612");
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
    }
}