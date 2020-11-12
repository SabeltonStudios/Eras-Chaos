class bootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        //Assets menu principal
        this.load.image('botonPuntuaciones','assets/Interfaz/Menu/BotonPuntuaciones.png');
        this.load.image('botonPuntuacionesi','assets/Interfaz/Menu/BotonPuntuacionesi.png');
        this.load.image('botonEspanolOn', 'assets/Interfaz/Menu/botonEspanolOn.png');
        this.load.image('botonInglesOn', 'assets/Interfaz/Menu/botonInglesOn.png');
        this.load.image('botonEspanolOff', 'assets/Interfaz/Menu/botonEspanolOff.png');
        this.load.image('botonInglesOff', 'assets/Interfaz/Menu/botonInglesOff.png');
        this.load.image('fondo', 'assets/Interfaz/Menu/fondoMenuPrincipal.png');
        this.load.image('fondoBlanco', 'assets/Interfaz/Menu/fondoBlanco.png');
        this.load.image('titulo','assets/Interfaz/Menu/titulo.png');
        this.load.image('botonPlay','assets/Interfaz/SeleccionNivel/play.png');
        this.load.image('fondoMarron','assets/Interfaz/fondoMarron.png');
        this.load.image('titlePuntuaciones','assets/Interfaz/titlePuntuaciones.png');
        this.load.image('titlePuntuacionesi','assets/Interfaz/titlePuntuacionesi.png');

        //Assets en español
        this.load.image('botonHistoria', 'assets/Interfaz/Menu/botonHistoria.png');
        this.load.image('boton2Jugadores', 'assets/Interfaz/Menu/boton2Jugadores.png');
        this.load.image('botonTienda', 'assets/Interfaz/Menu/botonTienda.png');
        this.load.image('botonCreditos', 'assets/Interfaz/Menu/botonCreditos.png');
        this.load.image('botonPuntuaciones', 'assets/Interfaz/Menu/botonPuntuaciones.png');

        //Assets en ingles
        this.load.image('botonHistoriai','assets/Interfaz/Menu/botonHistoriai.png');
        this.load.image('boton2Jugadoresi','assets/Interfaz/Menu/boton2Jugadoresi.png');
        this.load.image('botonTiendai','assets/Interfaz/Menu/botonTiendai.png');
        this.load.image('botonCreditosi','assets/Interfaz/Menu/botonCreditosi.png');
        this.load.image('botonPuntuacionesi', 'assets/Interfaz/Menu/botonPuntuacionesi.png');

        //Selección nivel
        this.load.image('niveles','assets/Interfaz/SeleccionNivel/Niveles.png');
        this.load.image('nivelesi','assets/Interfaz/SeleccionNivel/Nivelesi.png');
        this.load.image('tutorialHistoria', 'assets/Interfaz/SeleccionNivel/tutorialHistoria.png');
        this.load.image('tutorialHistoriai', 'assets/Interfaz/SeleccionNivel/tutorialHistoriai.png');
        this.load.image('egiSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaEgiptoB.png');
        this.load.image('egiSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaEgiptoBi.png');
        this.load.image('medSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaEdadMediaB.png');
        this.load.image('medSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaEdadMediaBi.png');
        this.load.image('revSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaRevIndustrialB.png');
        this.load.image('revSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaRevIndustrialBi.png');

        //Assets Prehistoria
        this.load.image('preMap', 'assets/Fondos/1.Prehistoria/Background.png');
        this.load.image('preLog', 'assets/Objetos/1.Prehistoria/object_log.png');
        this.load.image('preSkull', 'assets/Objetos/1.Prehistoria/object_skull.png');
        this.load.image('preStone', 'assets/Objetos/1.Prehistoria/object_stone.png');
        this.load.audio('preMusic', ['assets/Música/PrehistoriaFinal.mp3', 'assets/Música/PrehistoriaFinal.ogg']);
        this.load.image('preWeapon', 'assets/Armas/ArmaPrehistoria.png');
        this.load.spritesheet('prePlayer','assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Honda/prehistoria_basico_honda_idle_moving_spritesheet.png',
        {frameWidth: 373, frameHeight: 541});
        this.load.spritesheet('prePlayerIdle','assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Honda/prehistoria_basico_honda_idle_static_spritesheet.png',
        {frameWidth: 373, frameHeight: 541});
        this.load.spritesheet('prePlayerAttack','assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Honda/prehistoria_basic_honda_attack_moving_spritesheet.png',
        {frameWidth: 837 , frameHeight: 557});
        this.load.spritesheet('prePlayerAttackIdle','assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Honda/prehistoria_basic_honda_attack_static_spritesheet.png',
        {frameWidth: 837 , frameHeight: 541});

        this.load.spritesheet('preEnemy', 'assets/Animaciones/Spritesheets/Prehistoria/Enemigo/enemigo_prehistoria_honda_idle_moving_spritesheet.png',
        { frameWidth: 736, frameHeight: 1039 });
        this.load.spritesheet('preEnemyAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Enemigo/enemigo_prehistoria_honda_attack_static_spritesheet.png',
        { frameWidth: 1654, frameHeight: 1021 });
        this.load.spritesheet('preEnemyDie','assets/Animaciones/Spritesheets/Prehistoria/Enemigo/prehistoria_enemigo_game_over_spritesheet.png',
        { frameWidth: 1228, frameHeight: 1136 })

        //Assets Egipto
        this.load.image('egiMap', 'assets/Fondos/2.AntiguoEgipto/BackgroundNoColumns.png');
        this.load.image('rectanguloEgipto', 'assets/Fondos/2.AntiguoEgipto/RectanguloCentral.png');
        this.load.image('columnaC', 'assets/Fondos/2.AntiguoEgipto/ColumnUp.png');
        this.load.image('columnaD', 'assets/Fondos/2.AntiguoEgipto/ColumnRight.png');
        this.load.image('egiCat', 'assets/Objetos/2.AntiguoEgipto/object_cats.png');
        this.load.image('egiCup', 'assets/Objetos/2.AntiguoEgipto/object_cup.png');
        this.load.image('egiPyr', 'assets/Objetos/2.AntiguoEgipto/object_pyramid.png');
        this.load.audio('egiMusic', ['assets/Música/Egipto.mp3', 'assets/Música/Egipto.ogg']);
        //this.load.spritesheet('dude', 'assets/Interfaz/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('egiPlayer', 'assets/Personajes/2.AntiguoEgipto/BasicoEgipto.png');
        //this.load.image('bullet', 'assets/Interfaz/Bullet.png');
        this.load.spritesheet('egiWeapon', 'assets/Armas/ArmaEgipto.png', { frameWidth: 235, frameHeight: 235 });
        
        //Assets Edad Media
        this.load.image('mapaMed', 'assets/Fondos/3.EdadMedia/Background.png');
        this.load.image('medApl', 'assets/Objetos/3.EdadMedia/object_apples.png');
        this.load.image('medBar', 'assets/Objetos/3.EdadMedia/object_barrel.png');
        this.load.image('medVas', 'assets/Objetos/3.EdadMedia/object_vase.png');
        this.load.audio('medMusic', ['assets/Música/PrehistoriaFinal.mp3', 'assets/Música/PrehistoriaFinal.ogg']);
        this.load.image('medPlayer','assets/Personajes/3.EdadMedia/BasicoEdadMedia.png');
        
        //Assets Revolución Industrial
        this.load.image('mapaInd', 'assets/Fondos/4.RevolucionIndustrial/Background.png');
        this.load.image('indGear', 'assets/Objetos/4.RevolucionIndustrial/object_gear.png');
        this.load.image('indTool', 'assets/Objetos/4.RevolucionIndustrial/object_toolbox.png');
        this.load.image('indWheel', 'assets/Objetos/4.RevolucionIndustrial/object_wheel.png');
        this.load.audio('indMusic', ['assets/Música/PrehistoriaFinal.mp3', 'assets/Música/PrehistoriaFinal.ogg']);
        this.load.image('indPlayer','assets/Personajes/4.RevIndustrial/BasicoRevIndustrial.png');
        
        //Assets Juego
        this.load.image('MuertesUI','assets/Interfaz/ContadorMuertes.png')
        this.load.image('CloseB','assets/Interfaz/CloseButton.png')
        this.load.image('FreezeBON', 'assets/Interfaz/FreezeButton.png');
        this.load.image('FreezeBOFF', 'assets/Interfaz/FreezeButtonOFF.png');
        this.load.image('Enhorabuena', 'assets/Interfaz/NivelSuperadoTexto.png');
        this.load.image('Enhorabuenai', 'assets/Interfaz/NivelSuperadoTextoi.png');
        this.load.image('ContinuarB', 'assets/Interfaz/ContinuarButton.png');
        this.load.image('ContinuarBi', 'assets/Interfaz/ContinuarButtoni.png');
        this.load.image('Lastima', 'assets/Interfaz/RendidoTexto.png');
        this.load.image('Lastimai', 'assets/Interfaz/RendidoTextoi.png');

        this.load.image('ShootBON', 'assets/Interfaz/ShootButton.png');
        this.load.image('ShootBOFF', 'assets/Interfaz/ShootButtonOFF.png');

        this.load.image('PauseBON', 'assets/Interfaz/PauseButton.png');
        this.load.image('PauseBOFF', 'assets/Interfaz/PauseButtonOFF.png');

        this.load.image('PauseMenu', 'assets/Interfaz/Menu/fondoBlanco.png');
        this.load.image('PauseTitle', 'assets/Interfaz/Menu/tituloPaused.png');
        this.load.image('PauseTitlei', 'assets/Interfaz/Menu/tituloPausedi.png');
        this.load.image('botonRendirse', 'assets/Interfaz//Menu/MainMenu.png');
        this.load.image('botonRendirsei', 'assets/Interfaz//Menu/MainMenui.png');
        this.load.image('confirmarRendirse', 'assets/Interfaz/ConfirmarRendir.png');
        this.load.image('confirmarRendirsei', 'assets/Interfaz/ConfirmarRendiri.png');
        this.load.image('botonTienda', 'assets/Interfaz/Menu/botonTienda.png');
        this.load.image('botonTiendai', 'assets/Interfaz/Menu/botonTiendai.png');

        //Assets tienda
        this.load.image('fondoTienda','assets/Interfaz/Tienda/fondoTienda.png');
        this.load.image('botonSalir', 'assets/Interfaz/Tienda/botonSalir.png');
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');
        this.load.image('coins', 'assets/Interfaz/Tienda/coins.png');
        //Assets español
        this.load.image('tituloMapas', 'assets/Interfaz/Tienda/Mapas/tituloMapas.png');
        
        this.load.image('prehistoriaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueado.png');
        this.load.image('egiptoBloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueado.png');
        this.load.image('egiptoDesbloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueado.png');
        this.load.image('edadMediaBloqueado', 'assets/Interfaz/Tienda/Mapas/edadMediaBloqueado.png');
        this.load.image('edadMediaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/edadMediaDesbloqueado.png');
        this.load.image('revIndustrialBloqueado', 'assets/Interfaz/Tienda/Mapas/revIndustrialBloqueado.png');
        this.load.image('revIndustrialDesbloqueado', 'assets/Interfaz/Tienda/Mapas/revIndustrialDesbloqueado.png');

        //Assets ingles
        this.load.image('tituloMapasi', 'assets/Interfaz/Tienda/Mapas/tituloMapasi.png');

        this.load.image('prehistoriaDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueadoi.png');
        this.load.image('egiptoBloqueadoi', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueadoi.png');
        this.load.image('egiptoDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueadoi.png');
        this.load.image('edadMediaBloqueadoi', 'assets/Interfaz/Tienda/Mapas/edadMediaBloqueadoi.png');
        this.load.image('edadMediaDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/edadMediaDesbloqueadoi.png');
        this.load.image('revIndustrialBloqueadoi', 'assets/Interfaz/Tienda/Mapas/revIndustrialBloqueadoi.png');
        this.load.image('revIndustrialDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/revIndustrialDesbloqueadoi.png');

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

        this.load.image('UnvaarS', 'assets/Interfaz/SeleccionNivel/Unvaar.png');
        this.load.image('GaardS', 'assets/Interfaz/SeleccionNivel/Gaard.png');
        this.load.image('GaardBS', 'assets/Interfaz/SeleccionNivel/GaardB.png');
        this.load.image('NahibS', 'assets/Interfaz/SeleccionNivel/Nahib.png');
        this.load.image('NahibBS', 'assets/Interfaz/SeleccionNivel/NahibB.png');
        this.load.image('CleopatraS', 'assets/Interfaz/SeleccionNivel/Cleopatra.png');
        this.load.image('CleopatraBS', 'assets/Interfaz/SeleccionNivel/CleopatraB.png');
        this.load.image('LamberS', 'assets/Interfaz/SeleccionNivel/Lamber.png');
        this.load.image('LamberBS', 'assets/Interfaz/SeleccionNivel/LamberB.png');
        this.load.image('SirRodrickS', 'assets/Interfaz/SeleccionNivel/SirRodrick.png');
        this.load.image('SirRodrickBS', 'assets/Interfaz/SeleccionNivel/SirRodrickB.png');
        this.load.image('ThomasS', 'assets/Interfaz/SeleccionNivel/Thomas.png');
        this.load.image('ThomasBS', 'assets/Interfaz/SeleccionNivel/ThomasB.png');
        //Assets español
        this.load.image('tituloPersonajes', 'assets/Interfaz/Tienda/Personajes/tituloPersonajes.png');
        this.load.image('mensajeDesbloquear', 'assets/Interfaz/Tienda/mensajeDesbloquear.png');

        //Assets ingles
        this.load.image('tituloPersonajesi', 'assets/Interfaz/Tienda/Personajes/tituloPersonajesi.png');
        this.load.image('mensajeDesbloqueari', 'assets/Interfaz/Tienda/mensajeDesbloqueari.png');

        this.load.image('jugador1', 'assets/Interfaz/SeleccionNivel/Jugador1.png');
        this.load.image('jugador1i', 'assets/Interfaz/SeleccionNivel/Jugador1i.png');
        this.load.image('jugador2', 'assets/Interfaz/SeleccionNivel/Jugador2.png');
        this.load.image('jugador2i', 'assets/Interfaz/SeleccionNivel/Jugador2.png');

    }

    create() {
        if (this.sys.game.device.os.desktop) {
            //this.game.Scale = Phaser.Scale.RESIZE;
            this.game.scale.setGameSize(1920, 1920*3/4);
            //this.game.scale.setGameSize(800, 600);
            this.game.scale.scaleMode = Phaser.Scale.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.scale.refresh();
            gameConfig.scale.width=this.cameras.main.width;
            gameConfig.scale.height=this.cameras.main.height;
            this.add.text(0,0,"",{font:"20px euphorigenic"});

        }
        //console.log("Se ha creado el juego");
        this.scene.start("MenuPrincipalScene");
    }

    update() {

    }

}