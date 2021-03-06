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
        bubblesY: 44,
        spawn: [20, 72, 100, 80],
        areaColors: {
            h313a91: { cmd: "enter", room: "sala1", label: "Sala 1", point: [34, 75], enterPoint: [110, 94], obstacle: false },
            h06ba0a: { cmd: "enter", room: "sala2", label: "Sala 2", point: [64, 72], enterPoint: [110, 94], obstacle: false },
            h7655a2: { cmd: "enter", room: "sala3", label: "Sala 3", point: [94, 75], enterPoint: [110, 94], obstacle: false },
            h92562b: { cmd: "enter", room: "proyeccion", label: "Sala de proyección", point: [114, 82], enterPoint: [18, 94], obstacle: false },
            hde3f1e: { cmd: "enter", room: "patio", label: "Patio", point: [14, 82], enterPoint: [110, 84], obstacle: false },
            h1a00fb: { cmd: "enter", room: "frente", label: "Afuera", point: [64, 96], enterPoint: [40, 90], obstacle: false },
        },
        things: {
            flores: { file: "flores.png", frames: 1, frameDelay: 0, position: [19, 78], label: "" },
            mesa: { file: "mesa.png", frames: 1, frameDelay: 0, position: [92, 86], label: "" },
            mesita: { file: "mesitadete.png", frames: 2, frameDelay: 20, position: [56, 78], label: "Mesa de té",
                command: { cmd: "text", txt: "*Tienes un poco de frío*\n*Tomas un té calentito*",
                    align: "center", lines: 2, label: "", point: [60, 90]
                }
            },
        }
    },

    sala1: {
        bg: "sala1-bg.png",
        area: "sala1-colision.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#f9f4e3",
        bubblesY: 30,
        spawn: [20, 76, 100, 90],
        areaColors: {
            h8e24d9: { cmd: "enter", room: "hall", label: "Hall", point: [64, 96], enterPoint: [34, 75], obstacle: false },
        },
        things: {
            tubo1: { file: "tubo-1.png", frames: 2, frameDelay: 20, position: [22, 55], label: "Inhalaciones territoriales",
                command: { cmd: "text", txt: "Inhalaciones territoriales\nde Ana Laura Cantera",
                    align: "center", lines: 2, url: "https://www.analauracantera.com.ar/inhalaciones", label: "", point: [25, 92]
                }
            },
            tubo2: { file: "tubo-2.png", frames: 2, frameDelay: 20, position: [40, 48], label: "Espacio de bioarte",
                command: { cmd: "text", txt: "Espacio de bioarte\nde Joaquín Fargas",
                    align: "center", lines: 2, url: "https://www.joaquinfargas.com/sala1/", label: "", point: [43, 80]
                }
            },
            tubo3: { file: "tubo-3.png", frames: 2, frameDelay: 20, position: [58, 55], label: "Cellular seeds",
                command: { cmd: "text", txt: "Cellular seeds de Alejandra Marinaro",
                    align: "center", lines: 2, url: "https://www.cellularseeds.com/", label: "", point: [61, 92]
                }
            },
            tubo4: { file: "tubo-4.png", frames: 2, frameDelay: 20, position: [76, 48], label: "Agar Art",
                command: { cmd: "text", txt: "Agar Art",
                    align: "center", lines: 2, url: "https://bioarte-preview.netlify.app/artistas/agarart#header", label: "", point: [79, 80]
                }
            },
            tubo5: { file: "tubo-5.png", frames: 2, frameDelay: 20, position: [94, 55], label: "Gabinete biológico",
                command: { cmd: "text", txt: "Gabinete biológico de Pablo Lapadula",
                    align: "center", lines: 2, url: "https://bioarte-preview.netlify.app/artistas/pablo-lapadula#header", label: "", point: [97, 92]
                }
            },
        }
    },

    sala2: {
        bg: "sala2-bg.png",
        area: "sala2-colision.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#a6dbab",
        bubblesY: 30,
        spawn: [14, 84, 119, 92],
        areaColors: {
            h8e24d9: { cmd: "enter", room: "hall", label: "Hall", point: [64, 96], enterPoint: [64, 72], obstacle: false },
        },
        things: {
            tubo1: { file: "tubo-1.png", frames: 2, frameDelay: 20, position: [22, 55], label: "Vínculos empáticos",
                command: { cmd: "text", txt: "Vínculos empáticos\nde Demián Ferrari",
                    align: "center", lines: 2, url: "https://demiansferrari.wixsite.com/misitio/procesos", label: "", point: [25, 92]
                }
            },
            tubo2: { file: "tubo-2.png", frames: 2, frameDelay: 20, position: [40, 48], label: "Omphalos",
                command: { cmd: "text", txt: "Omphalos\nde Oliverio Duhalde",
                    align: "center", lines: 2, url: "https://www.oliverioduhalde.me/omphalos", label: "", point: [43, 80]
                }
            },
            tubo3: { file: "tubo-3.png", frames: 2, frameDelay: 20, position: [58, 55], label: "Biomateriales",
                command: { cmd: "text", txt: "Biomateriales\nde Verónica Bergottini y Ana Paula Hall",
                    align: "center", lines: 3, url: "https://bioarte-preview.netlify.app/artistas/biomateriales#header", label: "", point: [61, 92]
                }
            },
            tubo4: { file: "tubo-4.png", frames: 2, frameDelay: 20, position: [76, 48], label: "Biopigmentos",
                command: { cmd: "text", txt: "Biopigmentos\nde Luciana Paoletti",
                    align: "center", lines: 2, url: "https://bioarte-preview.netlify.app/artistas/luciana-paoletti/#header", label: "", point: [79, 80]
                }
            },
            tubo5: { file: "tubo-5.png", frames: 2, frameDelay: 20, position: [94, 55], label: "Colonia",
                command: { cmd: "text", txt: "Colonia\nde Darío Sacco",
                    align: "center", lines: 2, url: "https://bioarte-preview.netlify.app/artistas/dario-sacco#header", label: "", point: [97, 92]
                }
            },
        }
    },

    sala3: {
        bg: "sala3-bg.png",
        area: "sala3-colision.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 3,
        pageBg: "#fae8e1",
        bubblesY: 30,
        spawn: [14, 84, 119, 92],
        areaColors: {
            h8e24d9: { cmd: "enter", room: "hall", label: "Hall", point: [64, 96], enterPoint: [94, 75], obstacle: false },
        },
        things: {
            tubo1: { file: "tubo-1.png", frames: 2, frameDelay: 20, position: [22, 55], label: "Con pan y con trabajo",
                command: { cmd: "text", txt: "Con pan y con trabajo\nde Daniel Alvarez Olmedo",
                    align: "center", lines: 2, url: "https://bioarte-preview.netlify.app/artistas/daniel-alvarez-olmedo#header", label: "", point: [25, 92]
                }
            },
            tubo2: { file: "tubo-2.png", frames: 2, frameDelay: 20, position: [40, 48], label: "Namiki",
                command: { cmd: "text", txt: "Namiki\nde Muru",
                    align: "center", lines: 2, url: "https://namiki-universo-digital.netlify.app/", label: "", point: [43, 80]
                }
            },
            tubo3: { file: "tubo-3.png", frames: 2, frameDelay: 20, position: [58, 55], label: "Terrafonías",
                command: { cmd: "text", txt: "Terrafonías\nde Colectivo Electrobiota",
                    align: "center", lines: 2, url: "https://youtu.be/ISXYyUg8tHc", label: "", point: [61, 92]
                }
            },
            tubo4: { file: "tubo-4.png", frames: 2, frameDelay: 20, position: [76, 48], label: "El desafío de la vida",
                command: { cmd: "text", txt: "El desafío de la vida\nde Ariel Wilner",
                    align: "center", lines: 2, url: "https://bioarte-preview.netlify.app/artistas/ariel-wilner#header", label: "", point: [79, 80]
                }
            },
            tubo5: { file: "tubo-5.png", frames: 2, frameDelay: 20, position: [94, 55], label: "Modelado Molecular",
                command: { cmd: "text", txt: "Modelado Molecular\nde Federico Coscio y Pablo Power",
                    align: "center", lines: 2, url: "https://bioarte-preview.netlify.app/artistas/modelado-molecular#header", label: "", point: [97, 92]
                }
            },
        }
    },

    proyeccion: {
        bg: "proyeccion-bg.png",
        area: "proyeccion-colision.png",
        avatarScale: 3,
        pageBg: "#fef4d8",
        bubblesY: 30,
        spawn: [14, 84, 119, 92],
        areaColors: {
            he62121: { cmd: "enter", room: "hall", label: "Hall", point: [64, 96], enterPoint: [104, 98], obstacle: false },
        }
    },

    patio: {
        bg: "patio-bg.png",
        area: "patio-colision.png",
        avatarScale: 3,
        pageBg: "#5467b5",
        bubblesY: 36,
        spawn: [16, 40, 100, 80],
        areaColors: {
            he62121: { cmd: "enter", room: "hall", label: "Volver adentro", point: [120, 70], enterPoint: [14, 82], obstacle: false },
        },
        things: {
            mesa: { file: "patio-mesa.png", frames: 1, frameDelay: 0, position: [26, 67], label: "" },
            rosa: { file: "patio-formula-rosa.png", frames: 2, frameDelay: 30, position: [28, 51], label: "Trago molecular",
                command: {
                    cmd: "action", actionId: "TragoRosaInteract", label: "", point: [36, 70], obstacle: false
                } },
            naranja: { file: "patio-formula-naranja.png", frames: 2, frameDelay: 30, position: [35, 53], label: "Tubo de ensayo",
                command: {
                    cmd: "action", actionId: "TragoNaranjaInteract", label: "", point: [36, 70], obstacle: false
                } },
            marron: { file: "patio-formula-marron.png", frames: 2, frameDelay: 30, position: [40, 50], label: "Cultivo",
                command: {
                    cmd: "action", actionId: "TragoDoradoInteract", label: "", point: [36, 70], obstacle: false
                } },
            alga1: { file: "patio-alga.png", frames: 2, frameDelay: 30, position: [7, 38], label: "" },
            alga2: { file: "patio-alga.png", frames: 2, frameDelay: 30, position: [13, 53], label: "" },
            alga3: { file: "patio-alga.png", frames: 2, frameDelay: 30, position: [9, 72], label: "" },
            alga4: { file: "patio-alga.png", frames: 2, frameDelay: 30, position: [82, 12], label: "" },
            alga5: { file: "patio-alga.png", frames: 2, frameDelay: 30, position: [117, 19], label: "" },
            alga6: { file: "patio-alga.png", frames: 2, frameDelay: 30, position: [114, 73], label: "" },
        }
    },
};
