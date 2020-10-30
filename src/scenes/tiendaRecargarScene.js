class tiendaRecargarScene extends Phaser.Scene{
    constructor(){
        super("TiendaRecargarScene");
    }
    preload(){
        //Assets español
        this.load.image('tituloRecargar', 'assets/Interfaz/Tienda/Recargar/tituloRecargar.png');

        //Assets ingles
        this.load.image('tituloRecargari', 'assets/Interfaz/Tienda/Recargar/tituloRecargar.png');
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloRecargar');
        }else{
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloRecargari');
        }

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }
}