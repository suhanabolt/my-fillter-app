noseX=0
noseY=0
function preload() 
{
joker = loadImage("https://i.postimg.cc/Nfk56c6J/istockphoto-115348012-612x612-removebg-preview.png")
}
function setup() 
{
    canvas=createCanvas(400,400)
    canvas.position(500,200);
    video=createCapture (VIDEO)
    video.size(400,400)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoded)
    poseNet.on('pose',gotposes)
}
function modelLoded() 
{
    console.log("poseNet is initialized")
}

function gotposes(results)
{
    if (results.length>0)
     {
        console.log(results)
        noseX=results[0].pose.nose.x-65
        noseY=results[0].pose.nose.y-95
        console.log("nosex="+results[0].pose.nose.x)
        console.log("nosey="+results[0].pose.nose.y)
    }
}


function draw() 
{
    image(video,0,0,400,400)
    image(joker,noseX,noseY,130,150)
}
function take_snapshot() 
{
    save('myFunnyImage.png')
}