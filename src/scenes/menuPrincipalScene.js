
class menuPrincipalScene extends Phaser.Scene{
    
    constructor(){
        super("MenuPrincipalScene");
    }
    
    preload(){
        //Assets en general
        this.load.image('botonEspanolOn', 'assets/Interfaz/Menu/botonEspanolOn.png');
        this.load.image('botonInglesOn', 'assets/Interfaz/Menu/botonInglesOn.png');
        this.load.image('botonEspanolOff', 'assets/Interfaz/Menu/botonEspanolOff.png');
        this.load.image('botonInglesOff', 'assets/Interfaz/Menu/botonInglesOff.png');
        this.load.image('fondo', 'assets/Interfaz/Menu/fondoMenuPrincipal.png')
        this.load.image('fondoBlanco', 'assets/Interfaz/Menu/fondoBlanco.png')
        this.load.image('titulo','assets/Interfaz/Menu/titulo.png')

        //Assets en español
        this.load.image('botonHistoria', 'assets/Interfaz/Menu/botonHistoria.png');
        this.load.image('boton2Jugadores', 'assets/Interfaz/Menu/boton2Jugadores.png');
        this.load.image('botonTienda', 'assets/Interfaz/Menu/botonTienda.png');
        this.load.image('botonCreditos', 'assets/Interfaz/Menu/botonCreditos.png');
        //this.load.image('botonSalir', 'assets/Interfaz/Menu/botonSalir.png');


        //Assets en ingles
        this.load.image('botonHistoriai','assets/Interfaz/Menu/botonHistoriai.png');
        this.load.image('boton2Jugadoresi','assets/Interfaz/Menu/boton2Jugadoresi.png');
        this.load.image('botonTiendai','assets/Interfaz/Menu/botonTiendai.png');
        this.load.image('botonCreditosi','assets/Interfaz/Menu/botonCreditosi.png');
    }

    create(){

        this.Fondo = this.add.image(0, 0, 'fondo').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);

        this.spriteFondoBlanco = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/2,'fondoBlanco');

        this.spriteTitulo = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4,'titulo');

        //Si el idioma es español se cargan los botones en español
        if(espanol){
            this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/9)*4,'botonHistoria');
            this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/9)*5,'boton2Jugadores');
            this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/9)*6,'botonTienda');
            this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/9)*7,'botonCreditos');
            this.spriteEspanol = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*2/14,'botonEspanolOn');
            this.spriteIngles = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*3/14,'botonInglesOff');

        //Si el idioma es ingles se cargan los botones en ingles
        }else{
            this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/9)*4,'botonHistoriai');
            this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/9)*5,'boton2Jugadoresi');
            this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/9)*6,'botonTiendai');
            this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/9)*7,'botonCreditosi');
            this.spriteEspanol = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*2/14,'botonEspanolOff');
            this.spriteIngles = this.add.sprite(gameConfig.scale.width*14/16,gameConfig.scale.height*3/14,'botonInglesOn');
        }
        
        //Interactividad de los botones
        this.spriteHistoria.setInteractive().on('pointerdown', () => this.scene.start("PrehistoriaScene"));
        this.spriteMultijugadorSeleccion.setInteractive().on('pointerdown', () => this.scene.start("MultijugadorSeleccionScene"));
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
