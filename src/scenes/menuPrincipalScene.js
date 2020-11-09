
class menuPrincipalScene extends Phaser.Scene{
    
    constructor(){
        super("MenuPrincipalScene");
    }
    
    preload(){
        
    }

    create(){

        this.Fondo = this.add.image(0, 0, 'fondo').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);

        this.spriteFondoBlanco = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/2,'fondoBlanco').setScale(gameConfig.scale.height / 600);

        this.spriteTitulo = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4,'titulo').setScale(gameConfig.scale.height / 600);

        //Si el idioma es español se cargan los botones en español
        if(espanol){
            this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*4,'botonHistoria').setScale(gameConfig.scale.height / 600);
            this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*5,'boton2Jugadores').setScale(gameConfig.scale.height / 600);
            this.spritePuntuaciones = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*6,'botonPuntuaciones').setScale(gameConfig.scale.height / 600);
            this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*7,'botonTienda').setScale(gameConfig.scale.height / 600);
            this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*8,'botonCreditos').setScale(gameConfig.scale.height / 600);
            this.spriteEspanol = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*2/14,'botonEspanolOn').setScale(gameConfig.scale.height / 600);
            this.spriteIngles = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*3/14,'botonInglesOff').setScale(gameConfig.scale.height / 600);

        //Si el idioma es ingles se cargan los botones en ingles
        }else{
            this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*4,'botonHistoriai').setScale(gameConfig.scale.height / 600);
            this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*5,'boton2Jugadoresi').setScale(gameConfig.scale.height / 600);
            this.spritePuntuaciones = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*6,'botonPuntuaciones').setScale(gameConfig.scale.height / 600);
            this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*7,'botonTiendai').setScale(gameConfig.scale.height / 600);
            this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/10)*8,'botonCreditosi').setScale(gameConfig.scale.height / 600);
            this.spriteEspanol = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*2/14,'botonEspanolOff').setScale(gameConfig.scale.height / 600);
            this.spriteIngles = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*3/14,'botonInglesOn').setScale(gameConfig.scale.height / 600);
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
                this.spriteIngles.setTexture('botonInglesOn').setScale(gameConfig.scale.height / 600);
                this.spriteIngles.setInteractive(OffscreenCanvas);

                this.spriteEspanol.setTexture('botonEspanolOff').setScale(gameConfig.scale.height / 600);
                this.spriteEspanol.setInteractive().on('pointerdown', () =>this.cambiarIdiomaEspanol());

                //Cambiar los demás sprites del menu

                this.spriteHistoria.setTexture('botonHistoriai').setScale(gameConfig.scale.height / 600);
                this.spritePuntuaciones.setTexture('botonPuntuacionesi').setScale(gameConfig.scale.height / 600);
                this.spriteMultijugadorSeleccion.setTexture('boton2Jugadoresi').setScale(gameConfig.scale.height / 600);
                this.spriteTienda.setTexture('botonTiendai').setScale(gameConfig.scale.height / 600);
                this.spriteCreditos.setTexture('botonCreditosi').setScale(gameConfig.scale.height / 600);
                espanol = false;
            }
    }

    cambiarIdiomaEspanol(){
        if(!espanol){
            this.spriteEspanol.setTexture('botonEspanolOn').setScale(gameConfig.scale.height / 600);
            this.spriteEspanol.setInteractive(OffscreenCanvas);
                
            this.spriteIngles.setTexture('botonInglesOff').setScale(gameConfig.scale.height / 600);
            this.spriteIngles.setInteractive().on('pointerdown', () =>this.cambiarIdiomaIngles());

            //Cambiar los demás sprites del menu
            this.spriteHistoria.setTexture('botonHistoria').setScale(gameConfig.scale.height / 600);
            this.spritePuntuaciones.setTexture('botonPuntuaciones').setScale(gameConfig.scale.height / 600);
            this.spriteMultijugadorSeleccion.setTexture('boton2Jugadores').setScale(gameConfig.scale.height / 600);
            this.spriteTienda.setTexture('botonTienda').setScale(gameConfig.scale.height / 600);
            this.spriteCreditos.setTexture('botonCreditos').setScale(gameConfig.scale.height / 600);
            
            espanol = true;
        }
        
    }
}
