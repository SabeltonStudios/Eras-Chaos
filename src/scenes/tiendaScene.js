var coins = 600;

class tiendaScene extends Phaser.Scene{
    constructor(){
        super("TiendaScene");
    }

    preload(){
    }

    create(){
        //Si no se está reproduciendo la música, se reproduce la música del menú
        if (!MenuMusic.isPlaying) {
            MenuMusic.play();
        }

        //Añade el fondo de la tienda
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        //Añade el titulo, botones de mapas, personajes, armas, paquetes y recargar en inglés o en español
        if(espanol){
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloTienda').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMapas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*2/5,'botonMapas').setScale(gameConfig.scale.height / 600);
            this.spritePersonajes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*2/5,'botonPersonajes').setScale(gameConfig.scale.height / 600);
            this.spriteArmas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*3.5/5,'botonArmas').setScale(gameConfig.scale.height / 600);
            this.spritePaquetes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*3.5/5,'botonPaquetes').setScale(gameConfig.scale.height / 600);
            this.spriteRecargar = this.add.sprite((gameConfig.scale.width / 10)*8.7,(gameConfig.scale.height/8)*7.5,'botonRecargar').setScale(0.9*gameConfig.scale.height / 600);
        }else{
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloTiendai').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMapas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*2/5,'botonMapasi').setScale(gameConfig.scale.height / 600);
            this.spritePersonajes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*2/5,'botonPersonajesi').setScale(gameConfig.scale.height / 600);
            this.spriteArmas = this.add.sprite(gameConfig.scale.width*1.2 / 4,gameConfig.scale.height*3.5/5,'botonArmasi').setScale(gameConfig.scale.height / 600);
            this.spritePaquetes = this.add.sprite((gameConfig.scale.width / 4)*2.8,gameConfig.scale.height*3.5/5,'botonPaquetesi').setScale(gameConfig.scale.height / 600);
            this.spriteRecargar = this.add.sprite((gameConfig.scale.width / 10)*8.7,(gameConfig.scale.height/8)*7.5,'botonRecargari').setScale(0.9*gameConfig.scale.height / 600);
        }

        //Setea la interactividad de cada botón con su correspondiente función
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.15*gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("MenuPrincipalScene")});
        this.spritePersonajes.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaPersonajesScene")});
        this.spriteMapas.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaMapasScene")});
        this.spriteArmas.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaArmasScene")});
        this.spritePaquetes.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 });this.scene.start("TiendaPaquetesScene")});
        this.spriteRecargar.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 });this.scene.start("TiendaRecargarScene")});

    }
}