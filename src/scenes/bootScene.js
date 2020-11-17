let MenuMusic;
class bootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");

    }

    preload() {

        this.Fondo = this.add.image(0, 0, 'fondoLoading').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        this.TextLoading = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'textLoading').setScale(gameConfig.scale.height / 600);
        this.reloj = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 3, '').setScale(0.8 * gameConfig.scale.height / 600);
        this.reloj.anims.play('loading', true);
        //Assets menu principal
        this.load.image('fondo', 'assets/Interfaz/Menu/fondoMenuPrincipal.png');
        this.load.image('botonPuntuaciones', 'assets/Interfaz/Menu/BotonPuntuaciones.png');
        this.load.image('botonPuntuacionesi', 'assets/Interfaz/Menu/BotonPuntuacionesi.png');
        this.load.image('botonEspanolOn', 'assets/Interfaz/Menu/BotonEspanolOn.png');
        this.load.image('botonInglesOn', 'assets/Interfaz/Menu/BotonInglesOn.png');
        this.load.image('botonEspanolOff', 'assets/Interfaz/Menu/BotonEspanolOff.png');
        this.load.image('botonInglesOff', 'assets/Interfaz/Menu/BotonInglesOff.png');

        this.load.image('fondoBlanco', 'assets/Interfaz/Menu/fondoBlanco.png');
        this.load.image('titulo', 'assets/Interfaz/Menu/titulo.png');
        this.load.image('botonPlay', 'assets/Interfaz/SeleccionNivel/play.png');
        this.load.image('fondoMarron', 'assets/Interfaz/fondoMarron.png');
        this.load.image('titlePuntuaciones', 'assets/Interfaz/titlePuntuaciones.png');
        this.load.image('titlePuntuacionesi', 'assets/Interfaz/titlePuntuacionesi.png');

        //Assets en español
        this.load.image('botonHistoria', 'assets/Interfaz/Menu/botonHistoria.png');
        this.load.image('boton2Jugadores', 'assets/Interfaz/Menu/Boton2Jugadores.png');
        this.load.image('botonTienda', 'assets/Interfaz/Menu/botonTienda.png');
        this.load.image('botonCreditos', 'assets/Interfaz/Menu/BotonCreditos.png');
        this.load.image('botonPuntuaciones', 'assets/Interfaz/Menu/botonPuntuaciones.png');

        //Assets en ingles
        this.load.image('botonHistoriai', 'assets/Interfaz/Menu/botonHistoriai.png');
        this.load.image('boton2Jugadoresi', 'assets/Interfaz/Menu/boton2Jugadoresi.png');
        this.load.image('botonTiendai', 'assets/Interfaz/Menu/botonTiendai.png');
        this.load.image('botonCreditosi', 'assets/Interfaz/Menu/botonCreditosi.png');
        this.load.image('botonPuntuacionesi', 'assets/Interfaz/Menu/botonPuntuacionesi.png');

        //Selección nivel
        this.load.image('niveles', 'assets/Interfaz/SeleccionNivel/Niveles.png');
        this.load.image('nivelesi', 'assets/Interfaz/SeleccionNivel/Nivelesi.png');
        this.load.image('tutorialHistoria', 'assets/Interfaz/SeleccionNivel/tutorialHistoria.png');
        this.load.image('tutorialHistoriai', 'assets/Interfaz/SeleccionNivel/tutorialHistoriai.png');
        this.load.image('egiSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaEgiptoB.png');
        this.load.image('egiSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaEgiptoBi.png');
        this.load.image('medSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaEdadMediaB.png');
        this.load.image('medSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaEdadMediaBi.png');
        this.load.image('revSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaRevIndustrialB.png');
        this.load.image('revSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaRevIndustrialBi.png');
        this.load.image('actSelectBloq', 'assets/Interfaz/SeleccionNivel/mapaActualidadB.png');
        this.load.image('actSelectBloqi', 'assets/Interfaz/SeleccionNivel/mapaActualidadBi.png');

        this.load.image('honda', 'assets/Interfaz/SeleccionNivel/honda.png');
        this.load.image('hacha', 'assets/Interfaz/SeleccionNivel/hacha.png');
        this.load.image('hachaB', 'assets/Interfaz/SeleccionNivel/hachaB.png');
        this.load.image('ballesta', 'assets/Interfaz/SeleccionNivel/ballesta.png');
        this.load.image('ballestaB', 'assets/Interfaz/SeleccionNivel/ballestaB.png');
        this.load.image('mosquete', 'assets/Interfaz/SeleccionNivel/mosquete.png');
        this.load.image('mosqueteB', 'assets/Interfaz/SeleccionNivel/mosqueteB.png');
        this.load.image('fusil', 'assets/Interfaz/SeleccionNivel/fusil.png');
        this.load.image('fusilB', 'assets/Interfaz/SeleccionNivel/fusilB.png');

        //Assets Prehistoria
        this.load.image('preMap', 'assets/Fondos/1.Prehistoria/Background.png');
        this.load.image('preObj1', 'assets/Objetos/1.Prehistoria/object_log.png');
        this.load.image('preObj2', 'assets/Objetos/1.Prehistoria/object_skull.png');
        this.load.image('preObj3', 'assets/Objetos/1.Prehistoria/object_stone.png');
        this.load.audio('preMusic', ['assets/Música/PrehistoriaFinal.mp3', 'assets/Música/PrehistoriaFinal.ogg']);
        this.load.audio('preFire', ['assets/EfectosSonido/Honda.mp3', 'assets/EfectosSonido/Honda.ogg']);
        this.load.image('preWeapon', 'assets/Armas/ArmaPrehistoria.png');
        this.load.spritesheet('prePlayerHonda', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Honda/prehistoria_basico_honda_idle_moving_spritesheet.png',
            { frameWidth: 373, frameHeight: 541 });
        this.load.spritesheet('prePlayerHondaIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Honda/prehistoria_basico_honda_idle_static_spritesheet.png',
            { frameWidth: 373, frameHeight: 541 });
        this.load.spritesheet('prePlayerHondaAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Honda/prehistoria_basic_honda_attack_moving_spritesheet.png',
            { frameWidth: 837, frameHeight: 557 });
        this.load.spritesheet('prePlayerHondaAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Honda/prehistoria_basic_honda_attack_static_spritesheet.png',
            { frameWidth: 837, frameHeight: 541 });
        this.load.spritesheet('preEnemy', 'assets/Animaciones/Spritesheets/Prehistoria/Enemigo/enemigo_prehistoria_honda_idle_moving_spritesheet.png',
            { frameWidth: 736, frameHeight: 1039 });
        //cambiar↓
        this.load.spritesheet('preEnemyAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Enemigo/enemigo_prehistoria_honda_idle_moving_spritesheet.png',
            { frameWidth: 736, frameHeight: 1039 });
        this.load.spritesheet('preEnemyDie', 'assets/Animaciones/Spritesheets/Prehistoria/Enemigo/prehistoria_enemigo_game_over_spritesheet.png',
            { frameWidth: 1228, frameHeight: 1136 })


        //Assets Egipto
        this.load.image('egiMap', 'assets/Fondos/2.AntiguoEgipto/Background.png');
        this.load.image('rectanguloEgipto', 'assets/Fondos/2.AntiguoEgipto/RectanguloCentral.png');
        this.load.image('egiObj1', 'assets/Objetos/2.AntiguoEgipto/object_cats.png');
        this.load.image('egiObj2', 'assets/Objetos/2.AntiguoEgipto/object_cup.png');
        this.load.image('egiObj3', 'assets/Objetos/2.AntiguoEgipto/object_pyramid.png');
        this.load.audio('egiMusic', ['assets/Música/Egipto.mp3', 'assets/Música/Egipto.ogg']);
        this.load.audio('egiFire', ['assets/EfectosSonido/Hacha.mp3', 'assets/EfectosSonido/Hacha.ogg']);
        this.load.image('egiPlayer', 'assets/Personajes/2.AntiguoEgipto/BasicoEgipto.png');
        this.load.spritesheet('egiWeapon', 'assets/Armas/ArmaEgipto.png', { frameWidth: 235, frameHeight: 235 });
        this.load.spritesheet('egiPlayerHacha', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Hacha/egipto_basic_axe_idle_moving_spritesheet.png',
            { frameWidth: 370, frameHeight: 541 });
        this.load.image('egiPlayerHachaIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Hacha/egipto_basic_axe_idle_static_spritesheet.png')
        this.load.spritesheet('egiPlayerHachaAttack', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Hacha/egipto_basic_axe_attack_moving_spritesheet.png',
            { frameWidth: 510, frameHeight: 570 });
        this.load.spritesheet('egiPlayerHachaAttackIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Hacha/egipto_basic_axe_attack_static_spritesheet.png',
            { frameWidth: 510, frameHeight: 570 });

        this.load.spritesheet('egiEnemy', 'assets/Animaciones/Spritesheets/Egipto/Enemigo/Hacha/egipto_enemigo_axe_idle_moving_spritesheet.png',
            { frameWidth: 370, frameHeight: 545 });
        this.load.spritesheet('egiEnemyAttack', 'assets/Animaciones/Spritesheets/Egipto/Enemigo/Hacha/egipto_enemigo_axe_attack_moving_spritesheet.png',
            { frameWidth: 510, frameHeight: 589 });
        this.load.spritesheet('egiEnemyDie', 'assets/Animaciones/Spritesheets/Egipto/Enemigo/Game over/egipto_enemigo_gameover_spritesheet.png',
            { frameWidth: 534, frameHeight: 526 })
        //Assets Edad Media
        this.load.image('medMap', 'assets/Fondos/3.EdadMedia/Background.png');
        this.load.image('medObj1', 'assets/Objetos/3.EdadMedia/object_apples.png');
        this.load.image('medObj2', 'assets/Objetos/3.EdadMedia/object_barrel.png');
        this.load.image('medObj3', 'assets/Objetos/3.EdadMedia/object_vase.png');
        this.load.audio('medMusic', ['assets/Música/Medieval.mp3', 'assets/Música/Medieval.ogg']);
        this.load.audio('medFire', ['assets/EfectosSonido/Ballesta.mp3', 'assets/EfectosSonido/Ballesta.ogg']);
        this.load.image('medPlayer', 'assets/Personajes/3.EdadMedia/BasicoEdadMedia.png');
        this.load.image('medWeapon', 'assets/Armas/ballesta-saeta.png')
        this.load.spritesheet('medPlayerBall', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Ballesta/medieval_basic_ballesta_idle_moving_spritesheet.png',
            { frameWidth: 461, frameHeight: 516 });
        this.load.image('medPlayerBallIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Ballesta/medieval_basic_ballesta_idle_static_spritesheet.png');
        this.load.spritesheet('medPlayerBallAttack', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Ballesta/medieval_basic_ballesta_attack_moving_spritesheet.png',
            { frameWidth: 479, frameHeight: 521 });
        this.load.spritesheet('medPlayerBallAttackIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Ballesta/medieval_basic_ballesta_attack_static_spritesheet.png',
            { frameWidth: 377, frameHeight: 521 });

        this.load.spritesheet('medEnemy', 'assets/Animaciones/Spritesheets/Edad Media/Enemigo/Ballesta/medieval_enemigo_ballesta_idle_moving_spritesheet.png',
            { frameWidth: 454, frameHeight: 541 });
        this.load.spritesheet('medEnemyAttack', 'assets/Animaciones/Spritesheets/Edad Media/Enemigo/Ballesta/medieval_enemigo_ballesta_attack_moving_spritesheet.png',
            { frameWidth: 470, frameHeight: 541 });
        this.load.spritesheet('medEnemyDie', 'assets/Animaciones/Spritesheets/Edad Media/Enemigo/Game Over/medieval_enemigo_gameover_spritesheet.png',
            { frameWidth: 594, frameHeight: 553 })
        //Assets Revolución Industrial
        this.load.image('indMap', 'assets/Fondos/4.RevolucionIndustrial/Background.png');
        this.load.image('indObj1', 'assets/Objetos/4.RevolucionIndustrial/object_gear.png');
        this.load.image('indObj2', 'assets/Objetos/4.RevolucionIndustrial/object_toolbox.png');
        this.load.image('indObj3', 'assets/Objetos/4.RevolucionIndustrial/object_wheel.png');
        this.load.audio('indMusic', ['assets/Música/RevInds.mp3', 'assets/Música/RevInds.ogg']);
        this.load.audio('indFire', ['assets/EfectosSonido/mosqueton.mp3', 'assets/EfectosSonido/mosqueton.ogg']);
        this.load.image('indWeapon', 'assets/Armas/mosquete-bala.png');

        this.load.spritesheet('indPlayerMos', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Mosquete/industrial_basic_mosquete_idle_moving_spritesheet.png',
            { frameWidth: 585, frameHeight: 525 });
        this.load.image('indPlayerMosIdle', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Mosquete/industrial_basic_mosquete_idle_static_spritesheet.png');
        this.load.spritesheet('indPlayerMosAttack', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Mosquete/industrial_basic_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 745, frameHeight: 525 });
        this.load.spritesheet('indPlayerMosAttackIdle', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Mosquete/industrial_basic_mosquete_attack_static_spritesheet.png',
            { frameWidth: 650, frameHeight: 510 });

        this.load.spritesheet('indEnemy', 'assets/Animaciones/Spritesheets/Rev Industrial/Enemigo/Mosquete/industrial_enemy_mosquete_idle_moving_spritesheet_after.png',
            { frameWidth: 585, frameHeight: 515 });
        this.load.spritesheet('indEnemyAttack', 'assets/Animaciones/Spritesheets/Rev Industrial/Enemigo/Mosquete/industrial_enemy_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 745, frameHeight: 515 });
        this.load.spritesheet('indEnemyDie', 'assets/Animaciones/Spritesheets/Rev Industrial/Enemigo/Game Over/industrial_enemy_gameover_spritesheet.png',
            { frameWidth: 550, frameHeight: 540 })

        //Assets Contemporánea
        this.load.image('conMapa', 'assets/Fondos/5.Actualidad/Background.png');
        this.load.image('conTaxiUp', 'assets/Objetos/5.Actualidad/TaxiUp.png');
        this.load.image('conTaxiDown', 'assets/Objetos/5.Actualidad/TaxiDown.png');
        this.load.image('conObj1', 'assets/Objetos/5.Actualidad/object_cone.png');
        this.load.image('conObj2', 'assets/Objetos/5.Actualidad/object_manhole.png');
        this.load.image('conObj3', 'assets/Objetos/5.Actualidad/object_tire.png');

        this.load.audio('conMusic', ['assets/Música/actualidad.mp3', 'assets/Música/actualidad.ogg']);
        this.load.audio('conFire', ['assets/EfectosSonido/Ak.mp3', 'assets/EfectosSonido/Ak.ogg']);
        this.load.image('conWeapon', 'assets/Armas/fusil-bala.png');

        this.load.spritesheet('conPlayerAK', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Fusil/actualidad_basic_fusil_idle_moving_spritesheet.png',
            { frameWidth: 459, frameHeight: 512 });
        this.load.image('conPlayerAKIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Fusil/actualidad_basic_fusil_idle_static_spritesheet.png');
        this.load.spritesheet('conPlayerAKAttack', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Fusil/actualidad_basic_fusil_attack_moving_spritesheet.png',
            { frameWidth: 462, frameHeight: 512 });
        this.load.spritesheet('conPlayerAKAttackIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Fusil/actualidad_basic_fusil_attack_static_spritesheet.png',
            { frameWidth: 360, frameHeight: 512 });

        this.load.spritesheet('conEnemy', 'assets/Animaciones/Spritesheets/Actualidad/Enemigo/Fusil/actualidad_enemy_fusil_idle_moving_spritesheet.png',
            { frameWidth: 455, frameHeight: 510 });
        this.load.spritesheet('conEnemyAttack', 'assets/Animaciones/Spritesheets/Actualidad/Enemigo/Fusil/actualidad_enemy_fusil_attack_moving_spritesheet.png',
            { frameWidth: 455, frameHeight: 510 });
        this.load.spritesheet('conEnemyDie', 'assets/Animaciones/Spritesheets/Actualidad/Enemigo/Game Over/actualidad_enemy_gameover_spritesheet.png',
            { frameWidth: 545, frameHeight: 530 })
        //Assets Juego
        this.load.image('MuertesUI', 'assets/Interfaz/ContadorMuertes.png')
        this.load.image('CloseB', 'assets/Interfaz/CloseButton.png')
        this.load.image('FreezeBON', 'assets/Interfaz/FreezeButton.png');
        this.load.image('FreezeBOFF', 'assets/Interfaz/FreezeButtonOFF.png');
        this.load.image('Enhorabuena', 'assets/Interfaz/NivelSuperadoTexto.png');
        this.load.image('Enhorabuenai', 'assets/Interfaz/NivelSuperadoTextoi.png');
        this.load.image('EnhorabuenaFinal', 'assets/Interfaz/EnhorabuenaFinal.png');
        this.load.image('EnhorabuenaFinali', 'assets/Interfaz/EnhorabuenaFinali.png');
        this.load.image('ContinuarB', 'assets/Interfaz/ContinuarButton.png');
        this.load.image('ContinuarBi', 'assets/Interfaz/ContinuarButtoni.png');
        this.load.image('Lastima', 'assets/Interfaz/RendidoTexto.png');
        this.load.image('Lastimai', 'assets/Interfaz/RendidoTextoi.png');

        this.load.audio('buttonSound', ['assets/EfectosSonido/boton3.mp3', 'assets/EfectosSonido/boton3.ogg']);
        this.load.audio('menuMusic', ['assets/Música/Menu.mp3', 'assets/Música/Menu.ogg']);

        this.load.image('ShootBON', 'assets/Interfaz/ShootButton.png');
        this.load.image('ShootBOFF', 'assets/Interfaz/ShootButtonOFF.png');

        this.load.image('PauseBON', 'assets/Interfaz/PauseButton.png');
        this.load.image('PauseBOFF', 'assets/Interfaz/PauseButtonOFF.png');

        this.load.image('PauseMenu', 'assets/Interfaz/Menu/fondoBlanco.png');
        this.load.image('PauseTitle', 'assets/Interfaz/Menu/tituloPaused.png');
        this.load.image('PauseTitlei', 'assets/Interfaz/Menu/tituloPausedi.png');
        this.load.image('botonRendirse', 'assets/Interfaz/Menu/MainMenu.png');
        this.load.image('botonRendirsei', 'assets/Interfaz/Menu/MainMenui.png');
        this.load.image('confirmarRendirse', 'assets/Interfaz/ConfirmarRendir.png');
        this.load.image('confirmarRendirsei', 'assets/Interfaz/ConfirmarRendiri.png');
        this.load.image('botonTienda', 'assets/Interfaz/Menu/botonTienda.png');
        this.load.image('botonTiendai', 'assets/Interfaz/Menu/botonTiendai.png');

        //Multijugador
        this.load.image('confirmarAbandonar', 'assets/Interfaz/ConfirmarAbandonar.png');
        this.load.image('confirmarAbandonari', 'assets/Interfaz/ConfirmarAbandonari.png');
        this.load.image('Abandono', 'assets/Interfaz/AbandonadoText.png');
        this.load.image('Abandonoi', 'assets/Interfaz/AbandonadoTexti.png');
        this.load.image('Gana1', 'assets/Interfaz/GanaP1.png');
        this.load.image('Gana1i', 'assets/Interfaz/GanaP1i.png');
        this.load.image('Gana2', 'assets/Interfaz/GanaP2.png');
        this.load.image('Gana2i', 'assets/Interfaz/GanaP2i.png');
        //Assets tienda
        this.load.image('fondoTienda', 'assets/Interfaz/Tienda/fondoTienda.png');
        this.load.image('botonSalir', 'assets/Interfaz/Tienda/botonSalir.png');
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');
        this.load.image('coins', 'assets/Interfaz/Tienda/coins.png');
        //Español
        this.load.image('tituloTienda', 'assets/Interfaz/Tienda/tituloTienda.png');
        this.load.image('botonMapas', 'assets/Interfaz/Tienda/botonMapas.png');
        this.load.image('botonPersonajes', 'assets/Interfaz/Tienda/botonPersonajes.png');
        this.load.image('botonArmas', 'assets/Interfaz/Tienda/botonArmas.png');
        this.load.image('botonPaquetes', 'assets/Interfaz/Tienda/botonPaquetes.png');
        this.load.image('botonRecargar', 'assets/Interfaz/Tienda/botonRecargar.png');
        this.load.image('mensajeDesbloquear', 'assets/Interfaz/Tienda/mensajeDesbloquear.png');
        this.load.image('mensajeModoMultijugador', 'assets/Interfaz/Tienda/mensajeModoMultijugador.png');

        this.load.image('botonDesbloquearNo', 'assets/Interfaz/Tienda/botonDesbloquearNo.png');
        this.load.image('botonDesbloquearSi', 'assets/Interfaz/Tienda/botonDesbloquearSi.png');
        this.load.image('botonSalir', 'assets/Interfaz/Tienda/botonSalir.png');

        //Ingles
        this.load.image('tituloTiendai', 'assets/Interfaz/Tienda/tituloTiendaI.png');
        this.load.image('botonMapasi', 'assets/Interfaz/Tienda/botonMapasi.png');
        this.load.image('botonPersonajesi', 'assets/Interfaz/Tienda/botonPersonajesi.png');
        this.load.image('botonArmasi', 'assets/Interfaz/Tienda/botonArmasi.png');
        this.load.image('botonPaquetesi', 'assets/Interfaz/Tienda/botonPaquetesi.png');
        this.load.image('botonRecargari', 'assets/Interfaz/Tienda/botonRecargari.png');
        this.load.image('mensajeDesbloqueari', 'assets/Interfaz/Tienda/mensajeDesbloqueari.png');
        this.load.image('mensajeModoMultijugadori', 'assets/Interfaz/Tienda/mensajeModoMultijugadori.png');

        //Assets español
        this.load.image('tituloMapas', 'assets/Interfaz/Tienda/Mapas/tituloMapas.png');

        this.load.image('prehistoriaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueado.png');
        this.load.image('egiptoBloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueado.png');
        this.load.image('egiptoDesbloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueado.png');
        this.load.image('edadMediaBloqueado', 'assets/Interfaz/Tienda/Mapas/edadMediaBloqueado.png');
        this.load.image('edadMediaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/edadMediaDesbloqueado.png');
        this.load.image('revIndustrialBloqueado', 'assets/Interfaz/Tienda/Mapas/revIndustrialBloqueado.png');
        this.load.image('revIndustrialDesbloqueado', 'assets/Interfaz/Tienda/Mapas/revIndustrialDesbloqueado.png');
        this.load.image('actualidadBloqueado', 'assets/Interfaz/Tienda/Mapas/actualidadBloqueado.png');
        this.load.image('actualidadDesbloqueado', 'assets/Interfaz/Tienda/Mapas/actualidadDesbloqueado.png');
        //Assets ingles
        this.load.image('tituloMapasi', 'assets/Interfaz/Tienda/Mapas/tituloMapasi.png');

        this.load.image('prehistoriaDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueadoi.png');
        this.load.image('egiptoBloqueadoi', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueadoi.png');
        this.load.image('egiptoDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueadoi.png');
        this.load.image('edadMediaBloqueadoi', 'assets/Interfaz/Tienda/Mapas/edadMediaBloqueadoi.png');
        this.load.image('edadMediaDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/edadMediaDesbloqueadoi.png');
        this.load.image('revIndustrialBloqueadoi', 'assets/Interfaz/Tienda/Mapas/revIndustrialBloqueadoi.png');
        this.load.image('revIndustrialDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/revIndustrialDesbloqueadoi.png');
        this.load.image('actualidadBloqueadoi', 'assets/Interfaz/Tienda/Mapas/actualidadBloqueadoi.png');
        this.load.image('actualidadDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/actualidadDesbloqueadoi.png');

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
        this.load.image('Eveline', 'assets/Interfaz/Tienda/Personajes/Eveline.png');
        this.load.image('EvelineB', 'assets/Interfaz/Tienda/Personajes/EvelineB.png');
        this.load.image('Pillie', 'assets/Interfaz/Tienda/Personajes/Pillie.png');
        this.load.image('PillieB', 'assets/Interfaz/Tienda/Personajes/PillieB.png');

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
        this.load.image('EvelineS', 'assets/Interfaz/SeleccionNivel/Eveline.png');
        this.load.image('EvelineBS', 'assets/Interfaz/SeleccionNivel/EvelineB.png');
        this.load.image('PillieS', 'assets/Interfaz/SeleccionNivel/Pillie.png');
        this.load.image('PillieBS', 'assets/Interfaz/SeleccionNivel/PillieB.png');

        this.load.image('itemBl', 'assets/Interfaz/SeleccionNivel/itemBloqueado.png');
        this.load.image('itemBli', 'assets/Interfaz/SeleccionNivel/itemBloqueadoi.png');

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

        //Assets armas
        //Assets español
        this.load.image('tituloArmas', 'assets/Interfaz/Tienda/Armas/tituloArmas.png');
        this.load.image('hondaDesbloqueado', 'assets/Interfaz/Tienda/Armas/hondaDesbloqueado.png');
        this.load.image('hachaDesbloqueado', 'assets/Interfaz/Tienda/Armas/hachaDesbloqueado.png');
        this.load.image('hachaBloqueado', 'assets/Interfaz/Tienda/Armas/hachaBloqueado.png');
        this.load.image('ballestaDesbloqueado', 'assets/Interfaz/Tienda/Armas/ballestaDesbloqueado.png');
        this.load.image('ballestaBloqueado', 'assets/Interfaz/Tienda/Armas/ballestaBloqueado.png');
        this.load.image('mosqueteDesbloqueado', 'assets/Interfaz/Tienda/Armas/mosqueteDesbloqueado.png');
        this.load.image('mosqueteBloqueado', 'assets/Interfaz/Tienda/Armas/mosqueteBloqueado.png');
        this.load.image('fusilDesbloqueado', 'assets/Interfaz/Tienda/Armas/fusilDesbloqueado.png');
        this.load.image('fusilBloqueado', 'assets/Interfaz/Tienda/Armas/fusilBloqueado.png');
        //Assets ingles
        this.load.image('tituloArmasi', 'assets/Interfaz/Tienda/Armas/tituloArmasi.png');
        this.load.image('hondaDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/hondaDesbloqueadoi.png');
        this.load.image('hachaDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/hachaDesbloqueadoi.png');
        this.load.image('hachaBloqueadoi', 'assets/Interfaz/Tienda/Armas/hachaBloqueadoi.png');
        this.load.image('ballestaDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/ballestaDesbloqueadoi.png');
        this.load.image('ballestaBloqueadoi', 'assets/Interfaz/Tienda/Armas/ballestaBloqueadoi.png');
        this.load.image('mosqueteDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/mosqueteDesbloqueadoi.png');
        this.load.image('mosqueteBloqueadoi', 'assets/Interfaz/Tienda/Armas/mosqueteBloqueadoi.png');
        this.load.image('fusilDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/fusilDesbloqueadoi.png');
        this.load.image('fusilBloqueadoi', 'assets/Interfaz/Tienda/Armas/fusilBloqueadoi.png');


        //Assets paquetes
        //Assets español
        this.load.image('tituloPaquetes', 'assets/Interfaz/Tienda/Paquetes/tituloPaquetes.png');
        this.load.image('bundleEgipto', 'assets/Interfaz/Tienda/Paquetes/bundleEgipto.png');
        this.load.image('bundleEgipto+', 'assets/Interfaz/Tienda/Paquetes/bundleEgipto+.png');
        this.load.image('bundleEdadMedia', 'assets/Interfaz/Tienda/Paquetes/bundleEdadMedia.png');
        this.load.image('bundleEdadMedia+', 'assets/Interfaz/Tienda/Paquetes/bundleEdadMedia+.png');
        this.load.image('bundleRevIndustrial', 'assets/Interfaz/Tienda/Paquetes/bundleRevIndustrial.png');
        this.load.image('bundleActualidad', 'assets/Interfaz/Tienda/Paquetes/bundleActualidad.png');
        this.load.image('bundleActualidad+', 'assets/Interfaz/Tienda/Paquetes/bundleActualidad+.png');
        //Assets ingles
        this.load.image('tituloPaquetesi', 'assets/Interfaz/Tienda/Paquetes/tituloPaquetesi.png');
        this.load.image('bundleEgiptoi', 'assets/Interfaz/Tienda/Paquetes/bundleEgiptoi.png');
        this.load.image('bundleEgipto+i', 'assets/Interfaz/Tienda/Paquetes/bundleEgipto+i.png');
        this.load.image('bundleEdadMediai', 'assets/Interfaz/Tienda/Paquetes/bundleEdadMediai.png');
        this.load.image('bundleEdadMedia+i', 'assets/Interfaz/Tienda/Paquetes/bundleEdadMedia+i.png');
        this.load.image('bundleRevIndustriali', 'assets/Interfaz/Tienda/Paquetes/bundleRevIndustriali.png');
        this.load.image('bundleActualidadi', 'assets/Interfaz/Tienda/Paquetes/bundleActualidadi.png');
        this.load.image('bundleActualidad+i', 'assets/Interfaz/Tienda/Paquetes/bundleActualidad+i.png');

        //Assets recargar
        //Assets español
        this.load.image('tituloRecargar', 'assets/Interfaz/Tienda/Recargar/tituloRecargar.png');
        this.load.image('500monedas', 'assets/Interfaz/Tienda/Recargar/500monedas.png');
        this.load.image('1100monedas', 'assets/Interfaz/Tienda/Recargar/1100monedas.png');
        this.load.image('1725monedas', 'assets/Interfaz/Tienda/Recargar/1725monedas.png');
        this.load.image('3250monedas', 'assets/Interfaz/Tienda/Recargar/3250monedas.png');

        //Assets ingles
        this.load.image('tituloRecargari', 'assets/Interfaz/Tienda/Recargar/tituloRecargari.png');
        this.load.image('500monedasi', 'assets/Interfaz/Tienda/Recargar/500monedasi.png');
        this.load.image('1100monedasi', 'assets/Interfaz/Tienda/Recargar/1100monedasi.png');
        this.load.image('1725monedasi', 'assets/Interfaz/Tienda/Recargar/1725monedasi.png');
        this.load.image('3250monedasi', 'assets/Interfaz/Tienda/Recargar/3250monedasi.png');


        //Assets Creditos
        //Assets español
        this.load.image('tituloCreditos', 'assets/Interfaz/Creditos/tituloCreditos.png');
        this.load.image('desarrolladores', 'assets/Interfaz/Creditos/desarrolladores.png');
        this.load.image('contacto', 'assets/Interfaz/Creditos/contacto.png');

        //Assets ingles
        this.load.image('tituloCreditosi', 'assets/Interfaz/Creditos/tituloCreditosi.png');
        this.load.image('desarrolladoresi', 'assets/Interfaz/Creditos/desarrolladoresi.png');
        this.load.image('contactoi', 'assets/Interfaz/Creditos/contactoi.png');
        this.load.image('twitter', 'assets/Interfaz/Creditos/twitter.png');
        this.load.image('instagram', 'assets/Interfaz/Creditos/instagram.png');
        this.load.image('youtube', 'assets/Interfaz/Creditos/youtube.png');
        this.load.image('itchio', 'assets/Interfaz/Creditos/itchio.png');
        this.load.image('github', 'assets/Interfaz/Creditos/github.png');
        this.load.image('gmail', 'assets/Interfaz/Creditos/gmail.png');

        //Assets multijugador
        this.load.image('tutorialMultijugador', 'assets/Interfaz/tutorialMultijugador.png');
        this.load.image('tutorialMultijugadori', 'assets/Interfaz/tutorialMultijugadori.png');
        //PersonajePrehistoria
        //Hacha
        this.load.spritesheet('prePlayerHacha', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Hacha/prehistoria_basico_axe_idle_moving_spritesheet.png',
            { frameWidth: 370, frameHeight: 545 });
        this.load.image('prePlayerHachaIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Hacha/prehistoria_basico_axe_idle_static_spritesheet.png');

        //FALTAN 2
        //Ballesta
        this.load.spritesheet('prePlayerBall', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Ballesta/prehistoria_basico_ballesta_idle_moving_spritesheet.png',
            { frameWidth: 454, frameHeight: 541 });
        this.load.image('prePlayerBallIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Ballesta/prehistoria_basico_ballesta_idle_static_spritesheet.png');

        this.load.spritesheet('prePlayerBallAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Ballesta/prehistoria_basico_ballesta_attack_moving_spritesheet.png',
            { frameWidth: 470, frameHeight: 541 });
        this.load.spritesheet('prePlayerBallAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Ballesta/prehistoria_basico_ballesta_attack_static_spritesheet_after.png',
            { frameWidth: 383, frameHeight: 541 });
        //Mosquete
        this.load.spritesheet('prePlayerMos', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Mosquete/prehistoria_basico_mosquete_idle_moving_spritesheet.png',
            { frameWidth: 596, frameHeight: 541 });
        this.load.image('prePlayerMosIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Mosquete/prehistoria_basico_mosquete_idle_static_spritesheet.png');

        this.load.spritesheet('prePlayerMosAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Mosquete/prehistoria_basico_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 760, frameHeight: 541 });
        this.load.spritesheet('prePlayerMosAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Mosquete/prehistoria_basico_mosquete_attack_static_spritesheet.png',
            { frameWidth: 670, frameHeight: 541 });
        //AK-47
        this.load.spritesheet('prePlayerAK', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Fusil/prehistoria_basico_fusil_idle_moving_spritesheet.png',
            { frameWidth: 467, frameHeight: 541 });
        this.load.image('prePlayerAKIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Fusil/prehistoria_basico_fusil_idle_static_spritesheet.png');

        this.load.spritesheet('prePlayerAKAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Fusil/prehistoria_basico_fusil_attack_moving_spritesheet_after.png',
            { frameWidth: 467, frameHeight: 541 });
        this.load.spritesheet('prePlayerAKAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje basico/Fusil/prehistoria_basico_fusil_attack_static_spritesheet.png',
            { frameWidth: 368, frameHeight: 541 });
        //HeroePrehistoria
        //Honda
        this.load.spritesheet('preHeroeHonda', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Honda/prehistoria_basico_honda_idle_moving_spritesheet.png',
            { frameWidth: 373, frameHeight: 541 });
        this.load.spritesheet('preHeroeHondaIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Honda/prehistoria_basico_honda_idle_static_spritesheet.png',
            { frameWidth: 373, frameHeight: 541 });
        this.load.spritesheet('preHeroeHondaAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Honda/prehistoria_basico_honda_attack_moving_spritesheet.png',
            { frameWidth: 837, frameHeight: 541 });
        this.load.spritesheet('preHeroeHondaAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Honda/prehistoria_basico_honda_attack_static_spritesheet_after.png',
            { frameWidth: 837, frameHeight: 541 });
        //Hacha
        this.load.spritesheet('preHeroeHacha', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Hacha/prehistoria_hero_hacha_idle_moving_spritesheet.png',
            { frameWidth: 370, frameHeight: 545 });
        this.load.image('preHeroeHachaIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Hacha/prehistoria_hero_hacha_idle_static_spritesheet.png');
        //{ frameWidth: 330, frameHeight: 545 });
        this.load.spritesheet('preHeroeHachaAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Hacha/prehistoria_hero_hacha_attack_moving_spritesheet.png',
            { frameWidth: 510, frameHeight: 589 });
        this.load.spritesheet('preHeroeHachaAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Hacha/prehistoria_hero_hacha_attack_static_spritesheet.png',
            { frameWidth: 510, frameHeight: 589 });
        //Ballesta
        this.load.spritesheet('preHeroeBall', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Ballesta/prehistoria_hero_ballesta_idle_moving_spritesheet.png',
            { frameWidth: 454, frameHeight: 541 });
        this.load.image('preHeroeBallIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Ballesta/prehistoria_hero_ballesta_idle_static_spritesheet.png');
        //{ frameWidth: 370, frameHeight: 541 });
        this.load.spritesheet('preHeroeBallAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Ballesta/prehistoria_hero_ballesta_attack_moving_spritesheet.png',
            { frameWidth: 510, frameHeight: 589 });
        this.load.spritesheet('preHeroeBallAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Ballesta/prehistoria_hero_ballesta_attack_static_spritesheet.png',
            { frameWidth: 510, frameHeight: 589 });
        //Mosquete
        this.load.spritesheet('preHeroeMos', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Mosquete/prehistoria_hero_mosquete_idle_moving_spritesheet.png',
            { frameWidth: 596, frameHeight: 541 });
        this.load.image('preHeroeMosIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Mosquete/prehistoria_hero_mosquete_idle_static_spritesheet.png');
        //{ frameWidth: 506, frameHeight: 541 });
        this.load.spritesheet('preHeroeMosAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Mosquete/prehistoria_hero_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 760, frameHeight: 541 });
        this.load.spritesheet('preHeroeMosAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Mosquete/prehistoria_hero_mosquete_attack_static_spritesheet.png',
            { frameWidth: 670, frameHeight: 541 });
        //AK
        this.load.spritesheet('preHeroeAK', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Fusil/prehistoria_basico_fusil_idle_moving_spritesheet.png',
            { frameWidth: 467, frameHeight: 541 });
        this.load.image('preHeroeAKIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Fusil/prehistoria_basico_fusil_idle_static_spritesheet.png');
        //{ frameWidth: 370, frameHeight: 541 });
        this.load.spritesheet('preHeroeAKAttack', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Fusil/prehistoria_basico_fusil_attack_moving_spritesheet.png',
            { frameWidth: 467, frameHeight: 541 });
        this.load.spritesheet('preHeroeAKAttackIdle', 'assets/Animaciones/Spritesheets/Prehistoria/Personaje heroe/Fusil/prehistoria_basico_fusil_attack_static_spritesheet.png',
            { frameWidth: 368, frameHeight: 541 });
        //PersonajeEgipto
        //Honda
        this.load.spritesheet('egiPlayerHonda', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Honda/egipto_basic_honda_idle_moving_spritesheet.png',
            { frameWidth: 373, frameHeight: 514 });
        this.load.spritesheet('egiPlayerHondaIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Honda/egipto_basic_honda_idle_static_spritesheet.png',
            { frameWidth: 373, frameHeight: 514 });
        this.load.spritesheet('egiPlayerHondaAttack', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Honda/egipto_basic_honda_attack_moving_spritesheet.png',
            { frameWidth: 837, frameHeight: 500 });
        this.load.spritesheet('egiPlayerHondaAttackIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Honda/egipto_basic_honda_attack_static_spritesheet.png',
            { frameWidth: 837, frameHeight: 500 });
        //Ballesta
        this.load.spritesheet('egiPlayerBall', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Ballesta/egipto_basic_ballesta_idle_moving_spritesheet.png',
            { frameWidth: 454, frameHeight: 500 });
        this.load.image('egiPlayerBallIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Ballesta/egipto_basic_ballesta_idle_static_spritesheet.png');
        //{ frameWidth: 370, frameHeight: 500 });
        this.load.spritesheet('egiPlayerBallAttack', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Ballesta/egipto_basic_ballesta_attack_moving_spritesheet.png',
            { frameWidth: 465, frameHeight: 500 });
        this.load.spritesheet('egiPlayerBallAttackIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Ballesta/egipto_basic_ballesta_attack_static_spritesheet.png',
            { frameWidth: 370, frameHeight: 500 });
        //Mosquete
        this.load.spritesheet('egiPlayerMos', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Mosquete/egipto_basic_mosquete_idle_moving_spritesheet.png',
            { frameWidth: 596, frameHeight: 510 });
        this.load.image('egiPlayerMosIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Mosquete/egipto_basic_mosquete_idle_static_spritesheet.png');
        //{ frameWidth: 650, frameHeight: 510 });
        this.load.spritesheet('egiPlayerMosAttack', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Mosquete/egipto_basic_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 750, frameHeight: 510 });
        this.load.spritesheet('egiPlayerMosAttackIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Mosquete/egipto_basic_mosquete_attack_static_spritesheet.png',
            { frameWidth: 650, frameHeight: 510 });
        //AK
        this.load.spritesheet('egiPlayerAK', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Fusil/egipto_basic_fusil_idle_moving_spritesheet.png',
            { frameWidth: 450, frameHeight: 500 });
        this.load.image('egiPlayerAKIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Fusil/egipto_basic_fusil_idle_static_spritesheet_after.png');
        //{ frameWidth: 350, frameHeight: 500 });
        this.load.spritesheet('egiPlayerAKAttack', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Fusil/egipto_basic_fusil_attack_moving_spritesheet.png',
            { frameWidth: 450, frameHeight: 500 });
        this.load.spritesheet('egiPlayerAKAttackIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Basico/Fusil/egipto_basic_fusil_attack_static_spritesheet.png',
            { frameWidth: 350, frameHeight: 500 });
        //HeroeEgipto
        //Honda
        this.load.spritesheet('egiHeroeHonda', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Honda/egipto_hero_honda_idle_moving_spritesheet.png',
            { frameWidth: 373, frameHeight: 514 });
        this.load.spritesheet('egiHeroeHondaIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Honda/egipto_hero_honda_idle_static_spritesheet.png',
            { frameWidth: 373, frameHeight: 514 });
        //FALTAN 2
        //Hacha
        this.load.spritesheet('egiHeroeHacha', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Hacha/egipto_hero_axe_idle_moving_spritesheet.png',
            { frameWidth: 370, frameHeight: 550 });
        this.load.image('egiHeroeHachaIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Hacha/egipto_hero_axe_idle_static_spritsheet.png');
        //{ frameWidth: 330, frameHeight: 550 });
        this.load.spritesheet('egiHeroeHachaAttack', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Hacha/egipto_hero_axe_attack_moving_spritesheet.png',
            { frameWidth: 510, frameHeight: 589 });
        this.load.spritesheet('egiHeroeHachaAttackIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Hacha/egipto_hero_axe_attack_static_spritesheet.png',
            { frameWidth: 510, frameHeight: 589 });
        //Ballesta
        this.load.spritesheet('egiHeroeBall', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Ballesta/egipto_hero_ballesta_idle_moving_spritsheet.png',
            { frameWidth: 454, frameHeight: 545 });
        this.load.image('egiHeroeBallIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Ballesta/egipto_hero_ballesta_idle_static_spritsheet.png');
        //{ frameWidth: 370, frameHeight: 545 });
        //FALTAN 2
        //Mosquete
        this.load.spritesheet('egiHeroeMos', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Mosquete/egipto_hero_mosquete_idle_moving_spritesheet.png',
            { frameWidth: 596, frameHeight: 550 });
        this.load.image('egiHeroeMosIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Mosquete/egipto_hero_mosquete_idle_static_spritesheet.png');
        //{ frameWidth: 506, frameHeight: 550 });
        this.load.spritesheet('egiHeroeMosAttack', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Mosquete/egipto_hero_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 760, frameHeight: 550 });
        this.load.spritesheet('egiHeroeMosAttackIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Mosquete/egipto_hero_mosquete_attack_static_spritesheet.png',
            { frameWidth: 670, frameHeight: 550 });
        //Fusil
        this.load.spritesheet('egiHeroeAK', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Fusil/egipto_hero_fusil_idle_moving_spritesheet.png',
            { frameWidth: 467, frameHeight: 550 });
        this.load.image('egiHeroeAKIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Fusil/egipto_hero_fusil_idle_static_spritesheet.png');
        //{ frameWidth: 370, frameHeight: 550 });
        this.load.spritesheet('egiHeroeAKAttack', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Fusil/egipto_hero_fusil_attack_moving_spritesheet.png',
            { frameWidth: 467, frameHeight: 541 });
        this.load.spritesheet('egiHeroeAKAttackIdle', 'assets/Animaciones/Spritesheets/Egipto/Personaje Heroe/Fusil/egipto_hero_fusil_attack_static_spritesheet.png',
            { frameWidth: 368, frameHeight: 541 });
        //PersonajeEdadMedia
        //Honda
        //FALTAN 4
        //Hacha
        this.load.spritesheet('medPlayerHacha', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Hacha/medieval_basic_hacha_idle_moving_spritesheet.png',
            { frameWidth: 370, frameHeight: 540 });
        this.load.image('medPlayerHachaIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Hacha/medieval_basic_hacha_idle_static_spritesheet.png');
        this.load.spritesheet('medPlayerHachaAttack', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Hacha/medieval_basic_hacha_attack_moving_spritesheet.png',
            { frameWidth: 510, frameHeight: 580 });
        this.load.spritesheet('medPlayerHachaAttackIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Hacha/medieval_basic_hacha_attack_static_spritesheet.png',
            { frameWidth: 510, frameHeight: 580 });
        //Mosquete
        this.load.spritesheet('medPlayerMos', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Mosquete/medieval_basic_mosquete_idle_moving_spritesheet.png',
            { frameWidth: 585, frameHeight: 510 });
        this.load.image('medPlayerMosIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Mosquete/medieval_basic_mosquete_idle_spritesheet.png');
        this.load.spritesheet('medPlayerMosAttack', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Mosquete/medieval_basic_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 745, frameHeight: 510 });
        this.load.spritesheet('medPlayerMosAttackIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Mosquete/medieval_basic_mosquete_attack_static_spritesheet.png',
            { frameWidth: 650, frameHeight: 510 });
        //Fusil
        this.load.spritesheet('medPlayerAK', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Fusil/medieval_basic_fusil_idle_moving_spritesheet.png',
            { frameWidth: 445, frameHeight: 515 });
        this.load.image('medPlayerAKIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Fusil/medieval_basic_fusil_idle_static_spritesheet.png');
        this.load.spritesheet('medPlayerAKAttack', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Fusil/medieval_basic_fusil_attack_moving_spritesheet.png',
            { frameWidth: 445, frameHeight: 515 });
        this.load.spritesheet('medPlayerAKAttackIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Basico/Fusil/medieval_basic_fusil_attack_static_spritesheet.png',
            { frameWidth: 350, frameHeight: 515 });
        //HeroeEdadMedia*/
        //Honda
        //FALTAN 4
        //Hacha
        this.load.spritesheet('medHeroeHacha', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Hacha/medieval_hero_axe_idle_moving_spritesheet.png',
            { frameWidth: 103, frameHeight: 153 });
        this.load.image('medHeroeHachaIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Hacha/medieval_hero_axe_idle_static_spritesheet.png');
        this.load.spritesheet('medHeroeHachaAttack', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Hacha/medieval_hero_axe_attack_moving_spritesheet.png',
            { frameWidth: 143, frameHeight: 161 });
        this.load.spritesheet('medHeroeHachaAttackIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Hacha/medieval_hero_axe_attack_static_spritesheet.png',
            { frameWidth: 143, frameHeight: 161 });
        //Ballesta
        //FALTAN 4
        //Mosquete
        this.load.spritesheet('medHeroeMos', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Mosquete/medieval_hero_mosquete_idle_moving_spritesheet.png',
            { frameWidth: 592, frameHeight: 541 });
        this.load.image('medHeroeMosIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Mosquete/medieval_hero_mosquete_idle_static_spritesheet.png');
        this.load.spritesheet('medHeroeMosAttack', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Mosquete/medieval_hero_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 749, frameHeight: 537 });
        this.load.spritesheet('medHeroeMosAttackIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Mosquete/medieval_hero_mosquete_attack_static_spritesheet.png',
            { frameWidth: 654, frameHeight: 537 });
        //Fusil
        this.load.spritesheet('medHeroeAK', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Fusil/medieval_hero_fusil_idle_moving_spritesheet14.png',
            { frameWidth: 63, frameHeight: 75 });
        this.load.image('medHeroeAKIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Fusil/medieval_hero_fusil_idle_static_spritesheet14.png');
        this.load.spritesheet('medHeroeAKAttack', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Fusil/medieval_hero_fusil_attack_moving_spritesheet14.png',
            { frameWidth: 64, frameHeight: 75 });
        this.load.spritesheet('medHeroeAKAttackIdle', 'assets/Animaciones/Spritesheets/Edad Media/Personaje Heroe/Fusil/medieval_hero_fusil_attack_static_spritesheet14.png',
            { frameWidth: 50, frameHeight: 75 });
        //PersonajeRevIndustrial
        //Honda
        //FALTAN 4
        //Hacha
        this.load.spritesheet('indPlayerHacha', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Hacha/industrial_basic_hacha_idle_moving_spritesheet.png',
            { frameWidth: 360, frameHeight: 545 });
        this.load.image('indPlayerHachaIdle', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Hacha/industrial_basic_axe_idle_static_spritesheet.png');
        this.load.spritesheet('indPlayerHachaAttack', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Hacha/industrial_basic_hacha_attack_moving_spritesheet.png',
            { frameWidth: 505, frameHeight: 580 });
        this.load.spritesheet('indPlayerHachaAttackIdle', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Hacha/industrial_basic_axe_attack_static_spritesheet.png',
            { frameWidth: 505, frameHeight: 580 });
        //Ballesta
        //FALTAN 4
        //Fusil
        this.load.spritesheet('indPlayerAK', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Fusil/industrial_basic_fusil_idle_moving_spritesheet.png',
            { frameWidth: 445, frameHeight: 525 });
        this.load.image('indPlayerAKIdle', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Fusil/industrial_basic_fusil_idle_static_spritesheet.png');
        this.load.spritesheet('indPlayerAKAttack', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Fusil/industrial_basic_fusil_attack_moving_spritesheet.png',
            { frameWidth: 445, frameHeight: 525 });
        this.load.spritesheet('indPlayerAKAttackIdle', 'assets/Animaciones/Spritesheets/Rev Industrial/Personaje Basico/Fusil/industrial_basic_fusil_attack_static_spritesheet.png',
            { frameWidth: 350, frameHeight: 525 });
        //HeroeRevIndustrial
        //Personaje Contemporanea
        //Honda
        this.load.spritesheet('conPlayerHonda', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Honda/actualidad_basic_honda_idle_moving_spritesheet.png',
            { frameWidth: 365, frameHeight: 517 });
        this.load.spritesheet('conPlayerHondaIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Honda/actualidad_basic_honda_idle_static_spritesheet.png',
            { frameWidth: 365, frameHeight: 500 });
        this.load.spritesheet('conPlayerHondaAttack', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Honda/actualidad_basic_honda_attack_moving_spritesheet.png',
            { frameWidth: 830, frameHeight: 517 });
        this.load.spritesheet('conPlayerHondaAttackIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Honda/actualidad_basic_honda_attack_static_spritesheet.png',
            { frameWidth: 830, frameHeight: 517 });
        //Hacha
        this.load.spritesheet('conPlayerHacha', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Hacha/actualidad_basic_axe_idle_moving_spritesheet.png',
            { frameWidth: 363, frameHeight: 546 });
        this.load.image('conPlayerHachaIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Hacha/actualidad_basic_axe_idle_static_spritesheet.png');
        this.load.spritesheet('conPlayerHachaAttack', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Hacha/actualidad_basic_axe_attack_moving_spritesheet.png',
            { frameWidth: 510, frameHeight: 583 });
        this.load.spritesheet('conPlayerHachaAttackIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Hacha/actualidad_basic_axe_attack_static_spritesheet.png',
            { frameWidth: 510, frameHeight: 583 });
        //Ballesta
        this.load.spritesheet('conPlayerBall', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Ballesta/actualidad_basic_ballesta_idle_moving_spritesheet.png',
            { frameWidth: 466, frameHeight: 512 });
        this.load.image('conPlayerBallIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Ballesta/actualidad_basic_ballesta_idle_static_spritesheet.png');
        this.load.spritesheet('conPlayerBallAttack', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Ballesta/actualidad_basic_ballesta_attack_moving_spritesheet.png',
            { frameWidth: 464, frameHeight: 512 });
        this.load.spritesheet('conPlayerBallAttackIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Ballesta/actualidad_basic_ballesta_attack_static_spritesheet.png',
            { frameWidth: 380, frameHeight: 512 });
        //Mosquete
        this.load.spritesheet('conPlayerMos', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Mosquete/actualidad_basic_mosquete_idle_moving_spritesheet.png',
            { frameWidth: 600, frameHeight: 517 });
        this.load.image('conPlayerMosIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Mosquete/actualidad_basic_mosquete_idle_static_spritesheet.png');
        this.load.spritesheet('conPlayerMosAttack', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Mosquete/actualidad_basic_mosquete_attack_moving_spritesheet.png',
            { frameWidth: 757, frameHeight: 517 });
        this.load.spritesheet('conPlayerMosAttackIdle', 'assets/Animaciones/Spritesheets/Actualidad/Personaje Basico/Mosquete/actualidad_basic_mosquete_attack_static_spritesheet.png',
            { frameWidth: 656, frameHeight: 517 });
        //Heroe Contemporanea
        //Honda
        //Hacha
        //Ballesta
        //Mosquete
        //Fusil
    }

    create() {
        //Creación de animaciones
        //Nivel Prehistoria
        this.anims.create({
            key: 'prePlayerHondaMoving',
            frames: this.anims.generateFrameNumbers('prePlayerHonda', { start: 0, end: 20 }),
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'prePlayerHondaIdle',
            frames: this.anims.generateFrameNumbers('prePlayerHondaIdle', { start: 0, end: 9 }),
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'prePlayerHondaAttack',
            frames: this.anims.generateFrameNumbers('prePlayerHondaAttack', { start: 0, end: 37 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'prePlayerHondaAttackIdle',
            frames: this.anims.generateFrameNumbers('prePlayerHondaAttackIdle', { start: 0, end: 37 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'enemyMoving',
            frames: this.anims.generateFrameNumbers('preEnemy', { start: 0, end: 20 }),
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'enemyAttacking',
            frames: this.anims.generateFrameNumbers('preEnemyAttack', { start: 0, end: 37 }),
            frameRate: 45,
            repeat: 0
        });
        this.anims.create({
            key: 'enemyDying',
            frames: this.anims.generateFrameNumbers('preEnemyDie', { start: 0, end: 48 }),
            frameRate: 45,
            repeat: 0
        });
        //Nivel Egipto
        this.anims.create({
            key: 'egiPlayerHachaMoving',
            frames: this.anims.generateFrameNumbers('egiPlayerHacha', { start: 0, end: 19 }),
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'egiPlayerHachaAttack',
            frames: this.anims.generateFrameNumbers('egiPlayerHachaAttack', { start: 0, end: 52 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'egiPlayerHachaAttackIdle',
            frames: this.anims.generateFrameNumbers('egiPlayerHachaAttackIdle', { start: 0, end: 52 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'egishoot',
            frames: this.anims.generateFrameNumbers('egiWeapon', { start: 0, end: 7 }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'egienemyMoving',
            frames: this.anims.generateFrameNumbers('egiEnemy', { start: 0, end: 19 }),
            frameRate: 45,
            repeat: -1
        });
        this.anims.create({
            key: 'egienemyAttacking',
            frames: this.anims.generateFrameNumbers('egiEnemyAttack', { start: 0, end: 52 }),
            frameRate: 64,
            repeat: 0
        });
        this.anims.create({
            key: 'egienemyDying',
            frames: this.anims.generateFrameNumbers('egiEnemyDie', { start: 0, end: 48 }),
            frameRate: 32,
            repeat: 0
        });
        //Nivel Edad Media
        this.anims.create({
            key: 'medPlayerBallMoving',
            frames: this.anims.generateFrameNumbers('medPlayerBall', { start: 0, end: 19 }),
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'medPlayerBallAttack',
            frames: this.anims.generateFrameNumbers('medPlayerBallAttack', { start: 0, end: 39 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'medPlayerBallAttackIdle',
            frames: this.anims.generateFrameNumbers('medPlayerBallAttackIdle', { start: 0, end: 39 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'medenemyMoving',
            frames: this.anims.generateFrameNumbers('medEnemy', { start: 0, end: 19 }),
            frameRate: 45,
            repeat: -1
        });
        this.anims.create({
            key: 'medenemyAttacking',
            frames: this.anims.generateFrameNumbers('medEnemyAttack', { start: 0, end: 39 }),
            frameRate: 64,
            repeat: 0
        });
        this.anims.create({
            key: 'medenemyDying',
            frames: this.anims.generateFrameNumbers('medEnemyDie', { start: 0, end: 48 }),
            frameRate: 32,
            repeat: 0
        });
        //Nivel Revolución Industrial
        this.anims.create({
            key: 'indPlayerMosMoving',
            frames: this.anims.generateFrameNumbers('indPlayerMos', { start: 0, end: 19 }),
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'indPlayerMosAttack',
            frames: this.anims.generateFrameNumbers('indPlayerMosAttack', { start: 0, end: 39 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'indPlayerMosAttackIdle',
            frames: this.anims.generateFrameNumbers('indPlayerMosAttackIdle', { start: 0, end: 39 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'indenemyMoving',
            frames: this.anims.generateFrameNumbers('indEnemy', { start: 0, end: 19 }),
            frameRate: 45,
            repeat: -1
        });
        this.anims.create({
            key: 'indenemyAttacking',
            frames: this.anims.generateFrameNumbers('indEnemyAttack', { start: 0, end: 39 }),
            frameRate: 64,
            repeat: 0
        });
        this.anims.create({
            key: 'indenemyDying',
            frames: this.anims.generateFrameNumbers('indEnemyDie', { start: 0, end: 48 }),
            frameRate: 32,
            repeat: 0
        });
        //Nivel Edad Contemporánea
        this.anims.create({
            key: 'conPlayerAKMoving',
            frames: this.anims.generateFrameNumbers('conPlayerAK', { start: 0, end: 19 }),
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'conPlayerAKAttack',
            frames: this.anims.generateFrameNumbers('conPlayerAKAttack', { start: 0, end: 19 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'conPlayerAKAttackIdle',
            frames: this.anims.generateFrameNumbers('conPlayerAKAttackIdle', { start: 0, end: 19 }),
            frameRate: 55,
            repeat: 0
        });
        this.anims.create({
            key: 'conenemyMoving',
            frames: this.anims.generateFrameNumbers('conEnemy', { start: 0, end: 19 }),
            frameRate: 45,
            repeat: -1
        });
        this.anims.create({
            key: 'conenemyAttacking',
            frames: this.anims.generateFrameNumbers('conEnemyAttack', { start: 0, end: 19 }),
            frameRate: 45,
            repeat: 0
        });
        this.anims.create({
            key: 'conenemyDying',
            frames: this.anims.generateFrameNumbers('conEnemyDie', { start: 0, end: 48 }),
            frameRate: 32,
            repeat: 0
        });

        MenuMusic = this.sound.add('menuMusic', { volume: 0.3, loop: true });
        this.scene.start("MenuPrincipalScene");

        Game.loadFile();
    }

    update() {

    }

}