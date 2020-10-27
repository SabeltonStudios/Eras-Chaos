var espanol = new Boolean(true);
class menuPrincipalScene extends Phaser.Scene{
    
    constructor(){
        super("MenuPrincipalScene");
    }
    
    preload(){
        this.load.image('botonHistoria', 'assets/Interfaz/botonHistoria.png');
        this.load.image('boton2Jugadores', 'assets/Interfaz/boton2Jugadores.png');
        this.load.image('botonTienda', 'assets/Interfaz/botonTienda.png');
        this.load.image('botonCreditos', 'assets/Interfaz/botonCreditos.png');
        this.load.image('botonSalir', 'assets/Interfaz/botonSalir.png');
        this.load.image('botonIdiomaEspanol', 'assets/Interfaz/espanol.png');
        this.load.image('botonIdiomaEnglish', 'assets/Interfaz/english.png');
        
    }

    create(){

        var titulo = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/6,'ERAS CHAOS', { fill: '#0f0' })

        this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2,gameConfig.scale.height/3,'botonHistoria').setScale(0.1);
        this.spriteHistoria.setInteractive().on('pointerdown', () => this.scene.start("PrehistoriaScene"));
            
        this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2,gameConfig.scale.height*5/12,'boton2Jugadores').setScale(0.1);
        this.spriteMultijugadorSeleccion.setInteractive().on('pointerdown', () => this.scene.start("MultijugadorSeleccionScene"));

        this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2,gameConfig.scale.height/2,'botonTienda').setScale(0.1);
        this.spriteTienda.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));

        this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2,gameConfig.scale.height*7/12,'botonCreditos').setScale(0.1);
        this.spriteCreditos.setInteractive().on('pointerdown', () => this.scene.start("CreditosScene"));

        this.spriteIdioma = this.add.sprite(gameConfig.scale.width*15/16,gameConfig.scale.height/20,'botonIdiomaEspanol').setScale(0.1);
        this.spriteIdioma.setInteractive().on('pointerdown', () =>this.cambiarIdioma());
    }
    
    update(){

    }
    
    cambiarIdioma() {
        if(espanol){
            this.spriteIdioma = this.add.sprite(gameConfig.scale.width*15/16,gameConfig.scale.height/20,'botonIdiomaEnglish').setScale(0.05);
            //Cambiar los demás sprites del menu
            espanol = false;
        }else{
            this.spriteIdioma = this.add.sprite(gameConfig.scale.width*15/16,gameConfig.scale.height/20,'botonIdiomaEspanol').setScale(0.1);
            //Cambiar los demás sprites del menu
            espanol = true;
        }
    }
}
