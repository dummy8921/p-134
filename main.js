img="";
status="";
object=[];
function preload()
{
    img=loadImage('baby.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        object=results;

    }
}
function draw()
{
    image(img,0,0,640,420);
    if(status !="")
    {
        for(i=0; i<object.length; i++)
        {
            document.getElementById("status").innerHTML="status-objectDetector";
            fill("red");
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            stroke("black");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}