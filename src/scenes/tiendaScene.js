var coins = 600;

class tiendaScene extends Phaser.Scene{
    constructor(){
        super("TiendaScene");
    }

    preload(){
        this.load.image('fondoTienda','assets/Interfaz/Tienda/fondoTienda.png');
        this.load.image('tituloTienda','assets/Interfaz/Tienda/tituloTienda.png');
        this.load.image('botonMapas', 'assets/Interfaz/Tienda/botonMapas.png');
        this.load.image('botonPersonajes', 'assets/Interfaz/Tienda/botonPersonajes.png');
        this.load.image('botonArmas', 'assets/Interfaz/Tienda/botonArmas.png');
        this.load.image('botonPaquetes', 'assets/Interfaz/Tienda/botonPaquetes.png');

        this.load.image('botonSalir', 'assets/Interfaz/Tienda/botonSalir.png');
        this.load.image('botonRecargar', 'assets/Interfaz/Tienda/botonRecargar.png');

        this.load.image('tituloTiendai','assets/Interfaz/Tienda/tituloTiendai.png');
        this.load.image('botonMapasi', 'assets/Interfaz/Tienda/botonMapasi.png');
        this.load.image('botonPersonajesi', 'assets/Interfaz/Tienda/botonPersonajesi.png');
        this.load.image('botonArmasi', 'assets/Interfaz/Tienda/botonArmasi.png');
        this.load.image('botonPaquetesi', 'assets/Interfaz/Tienda/botonPaquetesi.png');
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloTienda');
            this.spriteMapas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*2/5,'botonMapas');
            this.spritePersonajes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*2/5,'botonPersonajes');
            this.spriteArmas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*3.5/5,'botonArmas');
            this.spritePaquetes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*3.5/5,'botonPaquetes');
        }else{
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloTiendai');
            this.spriteMapas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*2/5,'botonMapasi');
            this.spritePersonajes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*2/5,'botonPersonajesi');
            this.spriteArmas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*3.5/5,'botonArmasi');
            this.spritePaquetes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*3.5/5,'botonPaquetesi');
        }

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 10,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteRecargar = this.add.sprite((gameConfig.scale.width / 10)*9,(gameConfig.scale.height/8)*7.5,'botonRecargar').setScale(0.75);
        this.spritePersonajes.setInteractive().on('pointerdown', () => this.scene.start("TiendaPersonajesScene"));

        this.spriteMapas.setInteractive().on('pointerdown', () => this.scene.start("TiendaMapasScene"));
        this.spriteArmas.setInteractive().on('pointerdown', () => this.scene.start("TiendaArmasScene"));
        this.spritePaquetes.setInteractive().on('pointerdown', () => this.scene.start("TiendaPaquetesScene"));
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));
        this.spriteRecargar.setInteractive().on('pointerdown', () => this.scene.start("TiendaRecargarScene"));

    }
}