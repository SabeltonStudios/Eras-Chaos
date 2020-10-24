class tiendaArmasScene extends Phaser.Scene{
    constructor(){
        super("TiendaArmasScene");
    }
    preload(){
        this.load.image('botonSalirTienda', 'assets/images/botonSalirTienda.png');
    }

    create(){
        var titulo = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/10,'ARMAS', { fill: '#0f0' })

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 8,(gameConfig.scale.height/8)*6.5,'botonSalirTienda').setScale(0.8);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }
}