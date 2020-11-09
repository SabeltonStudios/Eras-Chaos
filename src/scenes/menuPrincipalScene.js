
class menuPrincipalScene extends Phaser.Scene{
    
    constructor(){
        super("MenuPrincipalScene");
    }
    
    preload(){
        
    }

    create(){

        this.Fondo = this.add.image(0, 0, 'fondo').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);

        this.spriteFondoBlanco = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/2,'fondoBlanco');

        this.spriteTitulo = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4,'titulo');

        //Si el idioma es español se cargan los botones en español
        if(espanol){
            this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*4,'botonHistoria');
            this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*5,'boton2Jugadores');
            this.spritePuntuaciones = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*6,'botonPuntuaciones');
            this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*7,'botonTienda');
            this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*8,'botonCreditos');
            this.spriteEspanol = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*2/14,'botonEspanolOn');
            this.spriteIngles = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*3/14,'botonInglesOff');

        //Si el idioma es ingles se cargan los botones en ingles
        }else{
            this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*4,'botonHistoriai');
            this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*5,'boton2Jugadoresi');
            this.spritePuntuaciones = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*6,'botonPuntuaciones');
            this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*7,'botonTiendai');
            this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*8,'botonCreditosi');
            this.spriteEspanol = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*2/14,'botonEspanolOff');
            this.spriteIngles = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*3/14,'botonInglesOn');
        }
        
        //Interactividad de los botones
        this.spriteHistoria.setInteractive().on('pointerdown', () => this.scene.start("SelectNivelHistoria"))
        this.spriteMultijugadorSeleccion.setInteractive().on('pointerdown', () => this.scene.start("MultijugadorSeleccionScene"))
        this.spritePuntuaciones.setInteractive().on('pointerdown',() => this.scene.start("PuntuacionesScene"))
        this.spriteTienda.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
        this.spriteCreditos.setInteractive().on('pointerdown', () => this.scene.start("CreditosScene"));
        this.spriteIngles.setInteractive().on('pointerdown', () =>this.cambiarIdiomaIngles());
        this.spriteEspanol.setInteractive().on('pointerdown', () =>this.cambiarIdiomaEspanol());
    }
    
    update(){

    }
    
    cambiarIdiomaIngles() {
            if(espanol){
                this.spriteIngles.setTexture('botonInglesOn');
                this.spriteIngles.setInteractive(OffscreenCanvas);

                this.spriteEspanol.setTexture('botonEspanolOff');
                this.spriteEspanol.setInteractive().on('pointerdown', () =>this.cambiarIdiomaEspanol());

                //Cambiar los demás sprites del menu

                this.spriteHistoria.setTexture('botonHistoriai');
                this.spriteMultijugadorSeleccion.setTexture('boton2Jugadoresi');
                this.spriteTienda.setTexture('botonTiendai');
                this.spriteCreditos.setTexture('botonCreditosi');
                espanol = false;
            }
    }

    cambiarIdiomaEspanol(){
        if(!espanol){
            this.spriteEspanol.setTexture('botonEspanolOn');
            this.spriteEspanol.setInteractive(OffscreenCanvas);
                
            this.spriteIngles.setTexture('botonInglesOff');
            this.spriteIngles.setInteractive().on('pointerdown', () =>this.cambiarIdiomaIngles());

            //Cambiar los demás sprites del menu
            this.spriteHistoria.setTexture('botonHistoria');
            this.spriteMultijugadorSeleccion.setTexture('boton2Jugadores');
            this.spriteTienda.setTexture('botonTienda');
            this.spriteCreditos.setTexture('botonCreditos');
            
            espanol = true;
        }
        
    }
}
