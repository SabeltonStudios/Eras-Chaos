class bootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        //Selección nivel
        this.load.image('niveles','assets/Interfaz/SeleccionNivel/Niveles.png');
        this.load.image('nivelesi','assets/Interfaz/SeleccionNivel/Nivelesi.png');
        this.load.image('tutorialHistoria', 'assets/Interfaz/SeleccionNivel/tutorialHistoria.png');
        this.load.image('tutorialHistoriai', 'assets/Interfaz/SeleccionNivel/tutorialHistoriai.png');
        this.load.image('egiSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaEgiptoB.png');
        this.load.image('egiSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaEgiptoBi.png');
        this.load.image('medSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaEdadMediaB.png');
        this.load.image('medSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaEdadMediaBi.png');
        //Assets Prehistoria
        this.load.image('preMap', 'assets/Fondos/1.Prehistoria/Background.png');
        this.load.image('preLog', 'assets/Objetos/1.Prehistoria/object_log.png');
        this.load.image('preSkull', 'assets/Objetos/1.Prehistoria/object_skull.png');
        this.load.image('preStone', 'assets/Objetos/1.Prehistoria/object_stone.png');
        this.load.audio('preMusic', ['assets/Música/PrehistoriaFinal.mp3']);//, 'assets/Música/PrehistoriaFinal.ogg']);
        this.load.image('preWeapon', 'assets/Armas/ArmaPrehistoria.png');
        //this.load.spritesheet('dude', 'assets/Interfaz/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('prePlayer','assets/Personajes/1.Prehistoria/BasicoPrehistoria.png');
        
        //Assets Egipto
        this.load.image('egiMap', 'assets/Fondos/2.AntiguoEgipto/BackgroundNoColumns.png');
        this.load.image('rectanguloEgipto', 'assets/Fondos/2.AntiguoEgipto/RectanguloCentral.png');
        this.load.image('columnaC', 'assets/Fondos/2.AntiguoEgipto/ColumnUp.png');
        this.load.image('columnaD', 'assets/Fondos/2.AntiguoEgipto/ColumnRight.png');
        this.load.image('egiCat', 'assets/Objetos/2.AntiguoEgipto/object_cats.png');
        this.load.image('egiCup', 'assets/Objetos/2.AntiguoEgipto/object_cup.png');
        this.load.image('egiPyr', 'assets/Objetos/2.AntiguoEgipto/object_pyramid.png');
        this.load.audio('egiMusic', ['assets/Música/PrehistoriaFinal.mp3']);//, 'assets/Música/PrehistoriaFinal.ogg']);
        //this.load.spritesheet('dude', 'assets/Interfaz/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('egiPlayer', 'assets/Personajes/2.AntiguoEgipto/BasicoEgipto.png');
        //this.load.image('bullet', 'assets/Interfaz/Bullet.png');
        this.load.spritesheet('egiWeapon', 'assets/Armas/ArmaEgipto.png', { frameWidth: 235, frameHeight: 235 });
        //Assets Juego
        this.load.image('CloseB','assets/Interfaz/CloseButton.png')
        this.load.image('FreezeBON', 'assets/Interfaz/FreezeButton.png');
        this.load.image('FreezeBOFF', 'assets/Interfaz/FreezeButtonOFF.png');

        this.load.image('ShootBON', 'assets/Interfaz/ShootButton.png');
        this.load.image('ShootBOFF', 'assets/Interfaz/ShootButtonOFF.png');

        this.load.image('PauseBON', 'assets/Interfaz/PauseButton.png');
        this.load.image('PauseBOFF', 'assets/Interfaz/PauseButtonOFF.png');

        this.load.image('PauseMenu', 'assets/Interfaz/Menu/fondoBlanco.png');
        this.load.image('PauseTitle', 'assets/Interfaz/Menu/tituloPaused.png');
        this.load.image('PauseTitlei', 'assets/Interfaz/Menu/tituloPausedi.png');
        this.load.image('botonMenuPral', 'assets/Interfaz/Menu/MainMenu.png');
        this.load.image('botonMenuPrali', 'assets/Interfaz/Menu/MainMenui.png');
        this.load.image('botonTienda', 'assets/Interfaz/Menu/botonTienda.png');
        this.load.image('botonTiendai', 'assets/Interfaz/Menu/botonTiendai.png');

        //Assets tienda
        this.load.image('fondoTienda','assets/Interfaz/Tienda/fondoTienda.png');
        this.load.image('botonSalir', 'assets/Interfaz/Tienda/botonSalir.png');
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');
        
        //Assets español
        this.load.image('tituloMapas', 'assets/Interfaz/Tienda/Mapas/tituloMapas.png');
        
        this.load.image('prehistoriaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueado.png');
        this.load.image('egiptoBloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueado.png');
        this.load.image('egiptoDesbloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueado.png');
        this.load.image('edadMediaBloqueado', 'assets/Interfaz/Tienda/Mapas/edadMediaBloqueado.png');
        this.load.image('edadMediaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/edadMediaDesbloqueado.png');

        //Assets ingles
        this.load.image('tituloMapasi', 'assets/Interfaz/Tienda/Mapas/tituloMapasi.png');

        this.load.image('prehistoriaDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueado.png');
        this.load.image('egiptoBloqueadoi', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueadoi.png');
        this.load.image('egiptoDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueadoi.png');
        this.load.image('edadMediaBloqueadoi', 'assets/Interfaz/Tienda/Mapas/edadMediaBloqueadoi.png');
        this.load.image('edadMediaDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/edadMediaDesbloqueadoi.png');

        //Personajes
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');
        this.load.image('botonDesbloquearNo', 'assets/Interfaz/Tienda/botonDesbloquearNo.png');
        this.load.image('botonDesbloquearSi', 'assets/Interfaz/Tienda/botonDesbloquearSi.png');

        //Assets personajes
        this.load.image('Unvaar', 'assets/Interfaz/Tienda/Personajes/Unvaar.png');
        this.load.image('Gaard', 'assets/Interfaz/Tienda/Personajes/Gaard.png');
        this.load.image('GaardB', 'assets/Interfaz/Tienda/Personajes/GaardB.png');
        this.load.image('Nahib', 'assets/Interfaz/Tienda/Personajes/Nahib.png');
        this.load.image('NahibB', 'assets/Interfaz/Tienda/Personajes/NahibB.png');
        this.load.image('Cleopatra', 'assets/Interfaz/Tienda/Personajes/Cleopatra.png');
        this.load.image('CleopatraB', 'assets/Interfaz/Tienda/Personajes/CleopatraB.png');
        this.load.image('Lamber', 'assets/Interfaz/Tienda/Personajes/Lamber.png');
        this.load.image('LamberB', 'assets/Interfaz/Tienda/Personajes/LamberB.png');
        this.load.image('SirRodrick', 'assets/Interfaz/Tienda/Personajes/SirRodrick.png');
        this.load.image('SirRodrickB', 'assets/Interfaz/Tienda/Personajes/SirRodrickB.png');
        this.load.image('Thomas', 'assets/Interfaz/Tienda/Personajes/Thomas.png');
        this.load.image('ThomasB', 'assets/Interfaz/Tienda/Personajes/ThomasB.png');

        //Assets español
        this.load.image('tituloPersonajes', 'assets/Interfaz/Tienda/Personajes/tituloPersonajes.png');
        this.load.image('mensajeDesbloquear', 'assets/Interfaz/Tienda/mensajeDesbloquear.png');

        //Assets ingles
        this.load.image('tituloPersonajesi', 'assets/Interfaz/Tienda/Personajes/tituloPersonajesi.png');
        this.load.image('mensajeDesbloqueari', 'assets/Interfaz/Tienda/mensajeDesbloqueari.png');
    }

    create() {
        if (this.sys.game.device.os.desktop) {
            //this.game.Scale = Phaser.Scale.RESIZE;
            this.game.scale.setGameSize(800, 600);
            this.game.scale.scaleMode = Phaser.Scale.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.scale.refresh();
            gameConfig.scale.width=this.cameras.main.width;
            gameConfig.scale.height=this.cameras.main.height;

        }
        //console.log("Se ha creado el juego");
        this.scene.start("MenuPrincipalScene");
    }

    update() {

    }
}