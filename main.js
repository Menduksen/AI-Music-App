mario_theme = "";
naruto_theme = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
songRight = "";
songLeft = "";

mario_theme = "mario_theme.mp3";
naruto_theme = "Naruto_Theme.mp3";

function preload(){
    mario_theme = LoadSound("mario_theme_song.mp3");
    naruto_theme = LoadSound("naruto_theme.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 600, 500);

    function isPlaying(){
        naruto_theme.isPlaying()
        }

        songLeft = naruto_theme.leftWrist.status;
    
        if(scoreLeftWrist > 0.2){
    
            leftWristX.circle();
            leftWristY.circle();
            mario_theme.stop();
        }
    
        if(songLeft = false){
            naruto_theme.play();
            console.log(song_name = Naruto_Theme);
        }
    
    function isPlaying(){
    mario_theme.isPlaying()
    }

    if(scoreRightWrist > 0.2){

        rightWristX.circle();
        rightWristY.circle();
        naruto_theme.stop();
    }

    if(songRight = false){
        mario_theme.play();
        console.log(song_name = Mario_Theme);
    }
    
}

gotPoses(){
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);

        results[0].pose.keypoints[9].score;

        scoreRightWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist);

    }
}