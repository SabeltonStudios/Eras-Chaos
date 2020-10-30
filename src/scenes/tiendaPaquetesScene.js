class tiendaPaquetesScene extends Phaser.Scene{
    constructor(){
        super("TiendaPaquetesScene");
    }
    preload(){
        //Assets español
        this.load.image('tituloPaquetes', 'assets/Interfaz/Tienda/Paquetes/tituloPaquetes.png');

        //Assets ingles
        this.load.image('tituloPaquetesi', 'assets/Interfaz/Tienda/Paquetes/tituloPaquetesi.png');
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloPaquetes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloPaquetes');
        }else{
            this.spriteTituloPaquetes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloPaquetesi');
        }

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }
}