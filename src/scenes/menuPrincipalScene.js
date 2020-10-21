var espanol = new Boolean(true);
class menuPrincipalScene extends Phaser.Scene{
    
    constructor(){
        super("MenuPrincipalScene");
    }
    
    preload(){
        this.load.image('botonHistoria', 'assets/images/botonHistoria.png');
        this.load.image('boton2Jugadores', 'assets/images/boton2Jugadores.png');
        this.load.image('botonTienda', 'assets/images/botonTienda.png');
        this.load.image('botonCreditos', 'assets/images/botonCreditos.png');
        this.load.image('botonSalir', 'assets/images/botonSalir.png');
        this.load.image('botonIdiomaEspanol', 'assets/images/espanol.png');
        this.load.image('botonIdiomaEnglish', 'assets/images/english.png');
    }

    create(){
        var titulo = this.add.text(350,100,'ERAS CHAOS', { fill: '#0f0' })

        this.spriteHistoria = this.add.sprite(400,200,'botonHistoria').setScale(0.1);
        this.spriteHistoria.setInteractive().on('pointerdown', () => this.scene.start("PrehistoriaScene"));
            
        this.spriteMultijugadorSeleccion = this.add.sprite(400,250,'boton2Jugadores').setScale(0.1);
        this.spriteMultijugadorSeleccion.setInteractive().on('pointerdown', () => this.scene.start("MultijugadorSeleccionScene"));

        this.spriteTienda = this.add.sprite(400,300,'botonTienda').setScale(0.1);
        this.spriteTienda.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));

        this.spriteCreditos = this.add.sprite(400,350,'botonCreditos').setScale(0.1);
        this.spriteCreditos.setInteractive().on('pointerdown', () => this.scene.start("CreditosScene"));

        this.spriteIdioma = this.add.sprite(750,30,'botonIdiomaEspanol').setScale(0.1);
        this.spriteIdioma.setInteractive().on('pointerdown', () =>this.cambiarIdioma());
    }
    
    update(){

    }
    
    cambiarIdioma() {
        if(espanol){
            this.spriteIdioma = this.add.sprite(750,30,'botonIdiomaEnglish').setScale(0.05);
            //Cambiar los demás sprites del menu
            espanol = false;
        }else{
            this.spriteIdioma = this.add.sprite(750,30,'botonIdiomaEspanol').setScale(0.1);
            //Cambiar los demás sprites del menu
            espanol = true;
        }
    }
}
