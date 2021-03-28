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
        area: "frente-colision.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#5467b5",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            hf2c429: { cmd: "enter", room: "hall", label: "Entrar a BIOS", point: [100, 84], enterPoint: [104, 98], obstacle: false },
        }
    },

    hall: {
        bg: "hall-bg.png",
        area: "hall-colision.png",
        avatarScale: 2,
        pageBg: "#fef4d8",
        spawn: [14, 84, 119, 92],
        areaColors: {
            h313a91: { cmd: "enter", room: "sala1", label: "Sala 1", point: [100, 84], enterPoint: [104, 98], obstacle: false },
            h06ba0a: { cmd: "enter", room: "sala2", label: "Sala 2", point: [100, 84], enterPoint: [104, 98], obstacle: false },
            h7655a2: { cmd: "enter", room: "sala3", label: "Sala 3", point: [100, 84], enterPoint: [104, 98], obstacle: false },
            h92562b: { cmd: "enter", room: "proyeccion", label: "Sala de proyección", point: [100, 84], enterPoint: [104, 98], obstacle: false },
            hde3f1e: { cmd: "enter", room: "patio", label: "Patio", point: [100, 84], enterPoint: [104, 98], obstacle: false },
        }
    },

    sala1: {
        bg: "sala1-bg.png",
        area: "sala1-colision.png",
        avatarScale: 2,
        pageBg: "#f9f4e3",
        spawn: [14, 84, 119, 92],
    },

    sala2: {
        bg: "sala2-bg.png",
        area: "sala2-colision.png",
        avatarScale: 2,
        pageBg: "#a6dbab",
        spawn: [14, 84, 119, 92],
    },

    sala3: {
        bg: "sala3-bg.png",
        area: "sala3-colision.png",
        avatarScale: 2,
        pageBg: "#fae8e1",
        spawn: [14, 84, 119, 92],
    },

    proyeccion: {
        bg: "proyeccion-bg.png",
        area: "proyeccion-colision.png",
        avatarScale: 2,
        pageBg: "#fef4d8",
        spawn: [14, 84, 119, 92],
    },

    patio: {
        bg: "patio-bg.png",
        area: "patio-colision.png",
        avatarScale: 2,
        pageBg: "#5467b5",
        spawn: [14, 84, 119, 92],
    },
};