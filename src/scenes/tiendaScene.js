var coins = 600;

class tiendaScene extends Phaser.Scene{
    constructor(){
        super("TiendaScene");
    }

    preload(){
        this.load.image('botonMapas', 'assets/images/botonMapas.png');
        this.load.image('botonPersonajes', 'assets/images/botonPersonajes.png');
        this.load.image('botonArmas', 'assets/images/botonArmas.png');
        this.load.image('botonPaquetes', 'assets/images/botonPaquetes.png');
        this.load.image('botonSalirTienda', 'assets/images/botonSalirTienda.png');
        this.load.image('botonRecargar', 'assets/images/botonRecargar.png');
    }

    create(){
        var titulo = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/10,'TIENDA', { fill: '#0f0' })

        this.spriteMapas = this.add.sprite(gameConfig.scale.width / 3,gameConfig.scale.height/3,'botonMapas').setScale(0.8);
        this.spriteMapas.setInteractive().on('pointerdown', () => this.scene.start("TiendaMapasScene"));

        this.spritePersonajes = this.add.sprite((gameConfig.scale.width / 3)*2,gameConfig.scale.height/3,'botonPersonajes').setScale(0.8);
        this.spritePersonajes.setInteractive().on('pointerdown', () => this.scene.start("TiendaPersonajesScene"));

        this.spriteArmas = this.add.sprite(gameConfig.scale.width / 3,(gameConfig.scale.height/3)*2,'botonArmas').setScale(0.8);
        this.spriteArmas.setInteractive().on('pointerdown', () => this.scene.start("TiendaArmasScene"));

        this.spritePaquetes = this.add.sprite((gameConfig.scale.width / 3)*2,(gameConfig.scale.height/3)*2,'botonPaquetes').setScale(0.8);
        this.spritePaquetes.setInteractive().on('pointerdown', () => this.scene.start("TiendaPaquetesScene"));

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 10,(gameConfig.scale.height/8)*7.5,'botonSalirTienda').setScale(0.8);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));

        this.spriteRecargar = this.add.sprite((gameConfig.scale.width / 10)*9,(gameConfig.scale.height/8)*7.5,'botonRecargar').setScale(0.8);
        this.spriteRecargar.setInteractive().on('pointerdown', () => this.scene.start("TiendaRecargarScene"));

    }
}