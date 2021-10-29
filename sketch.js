var poster,posterImg,logo,gameState,bg,bgm,profile;

function preload() {
    logo = loadImage("logo.png");
    posterImg = loadImage("poster.jpg");
    bg = loadImage("bg.jpg");
    bgm = loadSound("bgm.m4a");
}

function setup() {
    createCanvas(1500,700);
    poster = createSprite(990,350,10,10);
    poster.addImage(posterImg);
    poster.scale = 0.15;
    poster.visible = false;
    gameState = 1;
    profile = createInput("https://community.whitehatjr.com/project/9ac76715-f93d-4255-a5c0-96b549f4fa1d");
    profile.position(30,640);
}

function draw() {
    if(gameState === 2) {
        profile.show();
    }
    else {
        profile.hide();
    }

    if(gameState === 1) {
        background(bg);
        fill("white");
        textFont("forte");
        textSize(35);
        textAlign(CENTER);
        text("Click anywhere to continue",730,600);

        if(mouseWentDown("leftButton")) {
            gameState = 2;
            bgm.play();
        }
    }
    
    if(gameState === 2) {
        background("black");
        image(logo,-25,5);
        poster.visible = true;

        fill("white");
        textAlign(LEFT);
        textStyle(BOLD);
        textSize(20);
        textFont("georgia");
        text("[PART I]",185,240);
        fill("lightBlue");
        textStyle(NORMAL);
        textFont("cursive");
        text("Releasing on 29th October, 2021 at 7:30 pm",30,280);
        fill("red");
        text("Story By:",20,330);
        text("Developed By:",20,360);
        text("Soundtracks taken from:",20,400);
        textSize(18);
        text("Play Batman: The Joker Rises:",20,625);
        fill("white");
        textFont("segoe print");
        textSize(17);
        text("Saaransh Saxena",120,328);
        text("Saaransh Saxena",160,358);
        textSize(16);
        text("Zack Snyder's Justice League (2021)",20,430);
        text("The Dark Knight (2008)",20,460);
        text("Batman V Superman: Dawn Of Justice (2016)",20,490);
        fill("lightGreen");
        text("(The story of this game is inspired from various",20,530);
        text("movies, games and comic books related to Batman",20,560);
        text("and its characters created by DC Comics)",20,590);
        text("(Copy & Paste this link on your browser to play",20,675);
        text('"Batman: The Joker Rises")',20,695);
    }

    drawSprites();
}