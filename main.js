noseX = 0;
noseY = 0;

function preload() {
    cat_nose = loadImage('https://i.postimg.cc/HW6vTy51/pinpng-com-cat-nose-png-6552666.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(cat_nose, noseX, noseY, 55,25);
}

function take_snapshot() {
    save('MyFilter.png')
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 30;
        noseY = results[0].pose.nose.y - 10;
        console.log("Nose x =" + noseX );
        console.log("Nose y =" + noseY );
    }
}