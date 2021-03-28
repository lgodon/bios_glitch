//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "frente",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Hacé click/tap hacia donde quieras moverte"
};

//miscellaneous assets to preload
module.exports.IMAGES = [
];

//miscellaneous sounds to preload
module.exports.SOUNDS = [
    ["beat1", "beat1.ogg"], //credit https://www.youtube.com/watch?v=ugLVpZm69DE
    ["beat2", "beat2.ogg"], // credit https://www.youtube.com/watch?v=dPdoxIz0w24
    ["beat3", "beat3.ogg"], //credit https://www.youtube.com/watch?v=XShEWT4MwJs
    ["DJStop", "DJStop.mp3"]
];

module.exports.ROOMS = {

    frente: {
        bg: "frente-bg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#ab5236",
        area: "frente-colision.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            //h will be replaced by #
            hf2c429: { cmd: "enter", room: "hall", label: "Entrar a BIOS", point: [100, 84], enterPoint: [104, 98], obstacle: false },
        }
    },
};