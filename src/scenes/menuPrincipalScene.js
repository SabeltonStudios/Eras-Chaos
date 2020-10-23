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
        var totalWidth = this.cameras.main.width;
        var totalHeight = this.cameras.main.height;

        var titulo = this.add.text(totalWidth*7.35/16,totalHeight/6,'ERAS CHAOS', { fill: '#0f0' })

        this.spriteHistoria = this.add.sprite(totalWidth / 2,totalHeight/3,'botonHistoria').setScale(0.1);
        this.spriteHistoria.setInteractive().on('pointerdown', () => this.scene.start("PrehistoriaScene"));
            
        this.spriteMultijugadorSeleccion = this.add.sprite(totalWidth / 2,totalHeight*5/12,'boton2Jugadores').setScale(0.1);
        this.spriteMultijugadorSeleccion.setInteractive().on('pointerdown', () => this.scene.start("MultijugadorSeleccionScene"));

        this.spriteTienda = this.add.sprite(totalWidth / 2,totalHeight/2,'botonTienda').setScale(0.1);
        this.spriteTienda.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));

        this.spriteCreditos = this.add.sprite(totalWidth / 2,totalHeight*7/12,'botonCreditos').setScale(0.1);
        this.spriteCreditos.setInteractive().on('pointerdown', () => this.scene.start("CreditosScene"));

        this.spriteIdioma = this.add.sprite(totalWidth*15/16,totalHeight/20,'botonIdiomaEspanol').setScale(0.1);
        this.spriteIdioma.setInteractive().on('pointerdown', () =>this.cambiarIdioma(totalWidth,totalHeight));
    }
    
    update(){

    }
    
    cambiarIdioma(w, h) {
        if(espanol){
            this.spriteIdioma = this.add.sprite(w*15/16,h/20,'botonIdiomaEnglish').setScale(0.05);
            //Cambiar los demás sprites del menu
            espanol = false;
        }else{
            this.spriteIdioma = this.add.sprite(w*15/16,totalHeight/20,'botonIdiomaEspanol').setScale(0.1);
            //Cambiar los demás sprites del menu
            espanol = true;
        }
    }
}
