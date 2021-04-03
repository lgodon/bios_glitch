/*
WARNING: THIS IS STILL EXPERIMENTAL STUFF
I want to have the ability to assign specific behaviors to each room without messing with the main engine
So I'm creating a module for server-side modifications (mods). There is one also for the client.
Their naming convention is roomIdFunction.
The functions are called by the engine at crucial points, only if they exist.
*/


//called at the beginning
module.exports.initMod = function (io, gameState, DATA) {
    console.log("MOD: Initialized");

    global.io = io;
}

module.exports.onTragoRosaInteract = function (pId) {
    io.sockets.emit("tragoRosaInteracted", {
        id: pId,
    });
};

module.exports.onTragoNaranjaInteract = function (pId) {
    io.sockets.emit("tragoNaranjaInteracted", {
        id: pId,
    });
};

module.exports.onTragoDoradoInteract = function (pId) {
    io.sockets.emit("tragoDoradoInteracted", {
        id: pId,
    });
};

module.exports.onUpsideDownFinished = function (pId) {
    io.sockets.emit("upsideDownFinished", {
      id: pId,
    });
  };