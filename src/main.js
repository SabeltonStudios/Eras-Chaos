    //To adjust the screen on mobile, on progress
    // Check using this.sys.game.device.os.desktop, returns true if we are desktop, else if mobile
    const DEFAULT_HEIGHT = 600
    // adjust the width dynamically based on the device screen ratio
    const DEFAULT_WIDTH = (window.innerWidth / window.innerHeight) * DEFAULT_HEIGHT
    var espanol = new Boolean(true);
    var Game = {};
    var gameConfig = {
        type: Phaser.AUTO,

        //Comment to not fill completely the screen, for desktop purposes, or uncomment the max values↑
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: DEFAULT_WIDTH,
            height: DEFAULT_HEIGHT
        },
        input: {
            activePointers: 5,
            // ...
        },
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity: { y: 200 }
            }
        },
        backgroudColor: 0x000000,
        autoCenter: 1,
        scaleMode: 3,
        scene: [loadingScene,bootScene, menuPrincipalScene, selectNivelHistoria, prehistoriaScene, egiptoScene, 
             mediaScene, industrialScene, contempScene,
             multijugadorSeleccionScene, multijugadorPartidaScene,
             tiendaScene,tiendaMapasScene,tiendaPersonajesScene,tiendaArmasScene,
             tiendaPaquetesScene,tiendaRecargarScene, creditosScene,puntuacionesScene,tutorialScene]
    }

window.onload = function () {
    var game = new Phaser.Game(gameConfig);
    game.sound.pauseOnBlur = false;
    window.focus();
}

Game.saveFile = function(){
    var file = {
        coins: coins,
        mapas: mapas,
        armas: armas,
        personajes: personajes,
        results: results,
        espanol: espanol,
        completedLevel: completedLevel,
    };
    localStorage.setItem('saveFile',JSON.stringify(file));
};

Game.loadFile = function(){
    var file = JSON.parse(localStorage.getItem('saveFile'));
    if(file != null){
        coins = file.coins;
        mapas = file.mapas;
        armas = file.armas;
        personajes = file.personajes;
        results = file.results;
        espanol = file.espanol;
        completedLevel = file.completedLevel;
    }
};

