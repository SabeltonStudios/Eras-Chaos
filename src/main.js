    const DEFAULT_HEIGHT = 600
    // adjust the width dynamically based on the device screen ratio
    const DEFAULT_WIDTH = (window.innerWidth / window.innerHeight) * DEFAULT_HEIGHT

    var gameConfig = {
        type: Phaser.AUTO,
        /*maxWidth: 800,
        maxHeight: 600,*/

        //Comment to not fill completely the screen, for desktop purposes, or uncomment the max values↑
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: DEFAULT_WIDTH,
            height: DEFAULT_HEIGHT
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        backgroudColor: 0x000000,
        autoCenter: 1,
        scaleMode: 3,
        scene: [bootScene, menuPrincipalScene, prehistoriaScene, multijugadorSeleccionScene,
             tiendaScene,tiendaMapasScene,tiendaPersonajesScene,tiendaArmasScene,
             tiendaPaquetesScene,tiendaRecargarScene, creditosScene]
    }

window.onload = function () {

    //To adjust the screen on mobile, on progress
    // Check using this.sys.game.device.os.desktop, returns true if we are desktop, else if mobile
    
    var game = new Phaser.Game(gameConfig);
    window.focus();
}


