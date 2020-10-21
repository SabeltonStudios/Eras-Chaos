
window.onload = function(){
    var gameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        backgroudColor: 0x000000,
        autoCenter: 1,
        scaleMode: 3,
        scene:  [bootScene,menuPrincipalScene,prehistoriaScene,multijugadorSeleccionScene,tiendaScene,creditosScene]
    }

    var game = new Phaser.Game(gameConfig);
    window.focus();
}


