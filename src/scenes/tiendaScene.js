var coins = 600;

class tiendaScene extends Phaser.Scene{
    constructor(){
        super("TiendaScene");
    }

    preload(){
        
        this.load.image('tituloTienda','assets/Interfaz/Tienda/tituloTienda.png');
        this.load.image('botonMapas', 'assets/Interfaz/Tienda/botonMapas.png');
        this.load.image('botonPersonajes', 'assets/Interfaz/Tienda/botonPersonajes.png');
        this.load.image('botonArmas', 'assets/Interfaz/Tienda/botonArmas.png');
        this.load.image('botonPaquetes', 'assets/Interfaz/Tienda/botonPaquetes.png');
        this.load.image('botonRecargar', 'assets/Interfaz/Tienda/botonRecargar.png');
        this.load.image('mensajeDesbloquear', 'assets/Interfaz/Tienda/mensajeDesbloquear.png');
        
        this.load.image('botonDesbloquearNo', 'assets/Interfaz/Tienda/botonDesbloquearNo.png');
        this.load.image('botonDesbloquearSi', 'assets/Interfaz/Tienda/botonDesbloquearSi.png');
        this.load.image('botonSalir', 'assets/Interfaz/Tienda/botonSalir.png');
        
        this.load.image('tituloTiendai','assets/Interfaz/Tienda/tituloTiendai.png');
        this.load.image('botonMapasi', 'assets/Interfaz/Tienda/botonMapasi.png');
        this.load.image('botonPersonajesi', 'assets/Interfaz/Tienda/botonPersonajesi.png');
        this.load.image('botonArmasi', 'assets/Interfaz/Tienda/botonArmasi.png');
        this.load.image('botonPaquetesi', 'assets/Interfaz/Tienda/botonPaquetesi.png');
        this.load.image('botonRecargari', 'assets/Interfaz/Tienda/botonRecargari.png');
        this.load.image('mensajeDesbloqueari', 'assets/Interfaz/Tienda/mensajeDesbloqueari.png');
        
        
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloTienda').setScale(gameConfig.scale.height / 600);
            this.spriteMapas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*2/5,'botonMapas').setScale(gameConfig.scale.height / 600);
            this.spritePersonajes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*2/5,'botonPersonajes').setScale(gameConfig.scale.height / 600);
            this.spriteArmas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*3.5/5,'botonArmas').setScale(gameConfig.scale.height / 600);
            this.spritePaquetes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*3.5/5,'botonPaquetes').setScale(gameConfig.scale.height / 600);
            this.spriteRecargar = this.add.sprite((gameConfig.scale.width / 10)*8.7,(gameConfig.scale.height/8)*7.5,'botonRecargar').setScale(0.9*gameConfig.scale.height / 600);
        }else{
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloTiendai').setScale(gameConfig.scale.height / 600);
            this.spriteMapas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*2/5,'botonMapasi').setScale(gameConfig.scale.height / 600);
            this.spritePersonajes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*2/5,'botonPersonajesi').setScale(gameConfig.scale.height / 600);
            this.spriteArmas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*3.5/5,'botonArmasi').setScale(gameConfig.scale.height / 600);
            this.spritePaquetes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*3.5/5,'botonPaquetesi').setScale(gameConfig.scale.height / 600);
            this.spriteRecargar = this.add.sprite((gameConfig.scale.width / 10)*8.7,(gameConfig.scale.height/8)*7.5,'botonRecargari').setScale(0.9*gameConfig.scale.height / 600);
        }

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1*gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));
        this.spritePersonajes.setInteractive().on('pointerdown', () => this.scene.start("TiendaPersonajesScene"));
        this.spriteMapas.setInteractive().on('pointerdown', () => this.scene.start("TiendaMapasScene"));
        this.spriteArmas.setInteractive().on('pointerdown', () => this.scene.start("TiendaArmasScene"));
        this.spritePaquetes.setInteractive().on('pointerdown', () => this.scene.start("TiendaPaquetesScene"));
        this.spriteRecargar.setInteractive().on('pointerdown', () => this.scene.start("TiendaRecargarScene"));

    }
}