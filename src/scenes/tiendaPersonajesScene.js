class tiendaPersonajesScene extends Phaser.Scene{
    constructor(){
        super("TiendaPersonajesScene");
    }
    preload(){
        //Assets español
        this.load.image('tituloPersonajes', 'assets/Interfaz/Tienda/Personajes/tituloPersonajes.png');

        //Assets ingles
        this.load.image('tituloPersonajesi', 'assets/Interfaz/Tienda/Personajes/tituloPersonajesi.png');
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloPersonajes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloPersonajes');
        }else{
            this.spriteTituloPersonajes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloPersonajesi');
        }

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }
}