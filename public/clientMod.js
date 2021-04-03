/*
WARNING: THIS IS STILL EXPERIMENTAL STUFF
I want to have the ability to assign specific behaviors to each room without messing with the main engine
So this is a file for client-side modifications (mods). There is one for the server side as well.
Their naming convention is roomIdFunction.
The functions are called by the engine at crucial points, only if they exist. 
*/

var isPsychedelic = false;
var psychFrameCount = 0;
var isUpsideDown = false;
var upsideDownFrameCount = 0;
var isFlashing = false;
var flashingFrameCount = 0;
var upsideDownPlayers = [];

function initMod(playerId, roomId) {
    print("Mod: " + players[playerId].nickName + " (you) joined the game at " + roomId);

    if (!socket.hasListeners("tragoRosaInteracted")) {
        socket.on("tragoRosaInteracted", function(player) {
            if (player.id == me.id) {
                isFlashing = true;
                flashingFrameCount = frameCount;
            }
        });
    }

    if (!socket.hasListeners("tragoNaranjaInteracted")) {
        socket.on("tragoNaranjaInteracted", function(player) {
            upsideDownPlayers.push(player.id);
            handStand(player.id, -1);
            if (player.id == me.id) {
                isUpsideDown = true;
                upsideDownFrameCount = frameCount;
            }
        });
    }

    if (!socket.hasListeners("tragoDoradoInteracted")) {
        socket.on("tragoDoradoInteracted", function(player) {
            if (player.id == me.id) {
                isPsychedelic = true;
                psychFrameCount = frameCount;
            }
        });
    }

    if (!socket.hasListeners("upsideDownFinished")) {
        socket.on("upsideDownFinished", function(p) {
          upsideDownPlayers = upsideDownPlayers.filter(playerId => playerId !== p.id);
          handStand(p.id, 1);
        });
      }
    

    //prevent duplicate listeners
    if (!socket.hasListeners('musicOn')) {

        socket.on('musicOn', function (beat) {

            SOUNDS["beat" + beat].loop();
            bg.play();
        });

        //music is playing
        socket.on('musicEnter', function (beat) {
            //start from random
            SOUNDS["beat" + beat].loop();
            bg.play();
        });

        socket.on('musicOff', function (beat) {
            print("The MOD module communicates with a custom socket event: music off");
            //just to be sure I stop all the beats
            SOUNDS["beat1"].stop();
            SOUNDS["beat2"].stop();
            SOUNDS["beat3"].stop();
            SOUNDS.DJStop.play();
            bg.rewind();
            bg.stop();
        });


        //music is playing stop all bit without record scratch
        socket.on('musicExit', function (beat) {
            SOUNDS["beat1"].stop();
            SOUNDS["beat2"].stop();
            SOUNDS["beat3"].stop();
        });
    }
}

function patioUpdate() {
    if (isPsychedelic) {
        colorMode(HSB);
        tint((frameCount * 2) % 255, 40, 50);
        drawSprites();
        colorMode(RGB);

        if (frameCount - psychFrameCount >= 60 * 5) {
            isPsychedelic = false;
        }
    }

    if (isFlashing) {
        if (frameCount - flashingFrameCount >= 60 * 5) {
            isFlashing = false;
        }
    }

    if (isUpsideDown) {
        if (frameCount - upsideDownFrameCount >= 60 * 15) {
            isUpsideDown = false;
            socket.emit("action", "UpsideDownFinished");
        }
    }
}
  
//called when I receive data from a player already in the room
function patioIntro(playerId, roomId) {
    if (upsideDownPlayers.includes(playerId)) {
        handStand(playerId, -1);
    }
}

function patioDrawBackground(drawingFunction) {
    if (isFlashing) {
        if (frameCount % 30 < 15) {
            fill(0);
            rect(0, 0, 200, 180);
        } else {
            drawingFunction();
        }
    } else {
        drawingFunction();
    }
}

function proyeccionEnter(playerId, roomId) {
    if (playerId == me.id) {
        video = document.getElementById("iframe_video");
        video.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1";
        e = document.getElementById("video-container");
        if (e != null) e.style.display = "block";
    }
}

function hallEnter(playerId, roomId) {
    if (playerId == me.id) {
        video = document.getElementById("iframe_video");
        video.src = "";
        e = document.getElementById("video-container");
        if (e != null) e.style.display = "none";
    }
}

function handStand(playerId, multiplier) {
    var p = players[playerId];
    p.sprite.scale = multiplier * ASSET_SCALE;
}