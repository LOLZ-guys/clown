function preload() {
    clown_nose = loadImage('https://i.postimg.cc/9MZ6nV1k/th-1.jpg');
 }

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}






function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}



function take_snapshot() {
    save('MyWebapp.png');
}
noseX=0;
noseY=0;


