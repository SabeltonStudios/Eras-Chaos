//Variables globales para seleccionar mapa, personaje1, personaje2, arma1 y arma2
var selectedMap = 0;
var selectedChar1 = 0;
var selectedChar2 = 0;
var selectedWeapon1 = 0;
var selectedWeapon2 = 0;
//var numRounds;
class multijugadorSeleccionScene extends Phaser.Scene {
    //Variables locales: posiciones y arrays de botones
    personajesPosicion = 0;
    personajes2Posicion = 0;
    personajesButton = [];
    personajes2Button = [];
    mapasButton = [];
    armasButton = [];
    armas2Button = [];
    constructor() {
        super("MultijugadorSeleccionScene");
    }

    preload() {
    }

    create() {
        //Inicializamos las variables
        this.personajesPosicion = 0;
        this.personajes2Posicion = 0;
        selectedMap = 0;
        selectedChar1 = 0;
        selectedChar2 = 0;
        selectedWeapon1 = 0;
        selectedWeapon2 = 0;

        //Si la música del menú no está sonando, se reproduce
        if (!MenuMusic.isPlaying) {
            MenuMusic.play();
        }
        //Añade el fondo que se utiliza en tienda
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);
        
        //Añade el titulo de mapas y almacena los sprites correspondientes al idioma y si están desbloqueados o no
        if (espanol) {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 10, 'tituloMapas').setScale(0.5 * gameConfig.scale.height / 600);
            var i;
            for (i = 0; i < mapas.length; i++) {
                if (mapas[i].bloqueado) {
                    mapas[i].sprite = mapas[i].spriteSelectBloq;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueado;
                }
            }
        } else {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 10, 'tituloMapasi').setScale(0.5 * gameConfig.scale.height / 600);
            var i;
            for (i = 0; i < mapas.length; i++) {
                if (mapas[i].bloqueado) {
                    mapas[i].sprite = mapas[i].spriteSelectBloqi;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueadoi;
                }
            }
        }
        var i;


        //Asignamos los botones a cinco mapas, se les añade interactividad y selecciona el primero por defecto
        //La posición de los mapas se hace relativa al ancho de un sprite de ellos para poder mantener la proporcion en moviles
        this.mapasWidth = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 4.5, mapas[0].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[0] = this.add.sprite(gameConfig.scale.width / 2 - (this.mapasWidth.displayWidth * 2), gameConfig.scale.height / 4.5, mapas[0].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[0].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 0; this.deleteTint(0, 0); });
        this.mapasButton[0].setTint(0xDEDE7C);

        this.mapasButton[1] = this.add.sprite(gameConfig.scale.width / 2 - (this.mapasWidth.displayWidth), gameConfig.scale.height / 4.5, mapas[1].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[1].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 1; this.deleteTint(0, 1); });

        this.mapasButton[2] = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 4.5, mapas[2].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[2].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 2; this.deleteTint(0, 2); });

        this.mapasButton[3] = this.add.sprite(gameConfig.scale.width / 2 + (this.mapasWidth.displayWidth), gameConfig.scale.height / 4.5, mapas[3].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[3].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 3; this.deleteTint(0, 3); });

        this.mapasButton[4] = this.add.sprite(gameConfig.scale.width / 2 + (this.mapasWidth.displayWidth * 2), gameConfig.scale.height / 4.5, mapas[4].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[4].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 4; this.deleteTint(0, 4); });

        this.mapasWidth.destroy();

        //Se añaden los titulos de jugador 1 y jugador 2 en inglés o en español
        if (espanol) {
            this.spriteJugador1 = this.add.sprite(gameConfig.scale.width * 2.5 / 9, gameConfig.scale.height / 2.5, 'jugador1').setScale(0.4 * gameConfig.scale.height / 600);
            this.spriteJugador2 = this.add.sprite(gameConfig.scale.width * 6.5 / 9, gameConfig.scale.height / 2.5, 'jugador2').setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.spriteJugador1 = this.add.sprite(gameConfig.scale.width * 2.5 / 9, gameConfig.scale.height / 2.5, 'jugador1i').setScale(0.4 * gameConfig.scale.height / 600);
            this.spriteJugador2 = this.add.sprite(gameConfig.scale.width * 6.5 / 9, gameConfig.scale.height / 2.5, 'jugador2i').setScale(0.4 * gameConfig.scale.height / 600);

        }

        //personajes jugador 1
        //Se añaden los sprites de los 5 primero personajes
        //Posiciones relativas al tamaño de los sprites
        var i;
        this.personajesButton[0] = this.add.sprite((gameConfig.scale.width / 9), gameConfig.scale.height / 1.9, personajes[0].seleccionDesbloqueado).setScale(0.48 * gameConfig.scale.height / 600);
        for (i = 1; i < 5; i++) {
            if (personajes[i].bloqueado) {
                this.personajesButton[i] = this.add.sprite(gameConfig.scale.width / 9 + (this.personajesButton[0].displayWidth * i), gameConfig.scale.height / 1.9, personajes[i].seleccionBloqueado).setScale(0.48 * gameConfig.scale.height / 600);
            } else {
                this.personajesButton[i] = this.add.sprite(gameConfig.scale.width / 9 + (this.personajesButton[0].displayWidth * i), gameConfig.scale.height / 1.9, personajes[i].seleccionDesbloqueado).setScale(0.48 * gameConfig.scale.height / 600);
            }
        }
        //Añade interactividad y selecciona el primero por defecto
        this.personajesButton[0].setInteractive().on('pointerdown', () => this.deleteTint(1, 0));
        this.personajesButton[0].setTint(0xDEDE7C);
        this.personajesButton[1].setInteractive().on('pointerdown', () => this.deleteTint(1, 1));
        this.personajesButton[2].setInteractive().on('pointerdown', () => this.deleteTint(1, 2));
        this.personajesButton[3].setInteractive().on('pointerdown', () => this.deleteTint(1, 3));
        this.personajesButton[4].setInteractive().on('pointerdown', () => this.deleteTint(1, 4));

        //Flechas derecha e izquierda
        if(this.sys.game.device.os.desktop){
            this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 9 - (this.personajesButton[0].displayWidth * 0.8), gameConfig.scale.height / 1.9, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
            this.spriteDerecha = this.add.sprite(gameConfig.scale.width / 9 + (this.personajesButton[0].displayWidth * 4.8), gameConfig.scale.height / 1.9, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        }else{
            this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 9 - (this.personajesButton[0].displayWidth * 0.9), gameConfig.scale.height / 1.9, 'flechaIzquierda').setScale(0.4 * gameConfig.scale.height / 600);
            this.spriteDerecha = this.add.sprite(gameConfig.scale.width / 9 + (this.personajesButton[0].displayWidth * 4.9), gameConfig.scale.height / 1.9, 'flechaDerecha').setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.spriteIzquierda.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarIzquierda(1) });

        this.spriteDerecha.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarDerecha(1) });

        //personajes jugador 2
        //Se añaden los sprites de los 5 primero personajes
        //Posiciones relativas al tamaño de los sprites
        var i;
        if (personajes[4].bloqueado) {
            this.personajes2Button[4] = this.add.sprite(gameConfig.scale.width * 8 / 9, gameConfig.scale.height / 1.9, personajes[4].seleccionBloqueado).setScale(0.48 * gameConfig.scale.height / 600);
        } else {
            this.personajes2Button[4] = this.add.sprite(gameConfig.scale.width * 8 / 9, gameConfig.scale.height / 1.9, personajes[4].seleccionDesbloqueado).setScale(0.48 * gameConfig.scale.height / 600);

        }
        for (i = 0; i < 4; i++) {
            if (personajes[i].bloqueado) {
                this.personajes2Button[i] = this.add.sprite(gameConfig.scale.width * 8 / 9 - (this.personajes2Button[4].displayWidth * (4 - i)), gameConfig.scale.height / 1.9, personajes[i].seleccionBloqueado).setScale(0.48 * gameConfig.scale.height / 600);
            } else {
                this.personajes2Button[i] = this.add.sprite(gameConfig.scale.width * 8 / 9 - (this.personajes2Button[4].displayWidth * (4 - i)), gameConfig.scale.height / 1.9, personajes[i].seleccionDesbloqueado).setScale(0.48 * gameConfig.scale.height / 600);
            }
        }
        //Añade interactividad y selecciona el primero por defecto
        this.personajes2Button[0].setInteractive().on('pointerdown', () => this.deleteTint(2, 0) );
        this.personajes2Button[0].setTint(0xDEDE7C);
        this.personajes2Button[1].setInteractive().on('pointerdown', () => this.deleteTint(2, 1) );
        this.personajes2Button[2].setInteractive().on('pointerdown', () => this.deleteTint(2, 2) );
        this.personajes2Button[3].setInteractive().on('pointerdown', () => this.deleteTint(2, 3) );
        this.personajes2Button[4].setInteractive().on('pointerdown', () => this.deleteTint(2, 4) );

        //Flechas derecha e izquierda
        if(this.sys.game.device.os.desktop){
            this.spriteIzquierda2 = this.add.sprite(gameConfig.scale.width * 8 / 9 - (this.personajes2Button[4].displayWidth * 4.8), gameConfig.scale.height / 1.9, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
            this.spriteDerecha2 = this.add.sprite(gameConfig.scale.width * 8 / 9 + (this.personajes2Button[4].displayWidth * 0.8), gameConfig.scale.height / 1.9, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        }else{
            this.spriteIzquierda2 = this.add.sprite(gameConfig.scale.width * 8 / 9 - (this.personajes2Button[4].displayWidth * 4.9), gameConfig.scale.height / 1.9, 'flechaIzquierda').setScale(0.4 * gameConfig.scale.height / 600);
            this.spriteDerecha2 = this.add.sprite(gameConfig.scale.width * 8 / 9 + (this.personajes2Button[4].displayWidth * 0.9), gameConfig.scale.height / 1.9, 'flechaDerecha').setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.spriteIzquierda2.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarIzquierda(2) });
        this.spriteDerecha2.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarDerecha(2) });

        //Armas jugador 1
        //Posciones relativas al tamaño de los sprites
        var i;
        this.armasButton[0] = this.add.sprite(gameConfig.scale.width / 9, gameConfig.scale.height * 4.3 / 6, armas[0].seleccionDesbloqueado).setScale(1.25 * gameConfig.scale.height / 600);
        for (i = 0; i < 5; i++) {
            if (armas[i].bloqueado) {
                this.armasButton[i] = this.add.sprite(gameConfig.scale.width / 9 + (this.armasButton[0].displayWidth * i), gameConfig.scale.height * 4.3 / 6, armas[i].seleccionBloqueado).setScale(1.25 * gameConfig.scale.height / 600);
            } else {
                this.armasButton[i] = this.add.sprite(gameConfig.scale.width / 9 + (this.armasButton[0].displayWidth * i), gameConfig.scale.height * 4.3 / 6, armas[i].seleccionDesbloqueado).setScale(1.25 * gameConfig.scale.height / 600);
            }

        }

        //Añade interactividad y selecciona el primero por defecto
        this.armasButton[0].setInteractive().on('pointerdown', () => { if (!armas[0].bloqueado) selectedWeapon1 = 0; this.deleteTint(3, 0); });
        this.armasButton[0].setTint(0xDEDE7C);
        this.armasButton[1].setInteractive().on('pointerdown', () => { if (!armas[1].bloqueado) selectedWeapon1 = 1; this.deleteTint(3, 1); });
        this.armasButton[2].setInteractive().on('pointerdown', () => { if (!armas[2].bloqueado) selectedWeapon1 = 2; this.deleteTint(3, 2); });
        this.armasButton[3].setInteractive().on('pointerdown', () => { if (!armas[3].bloqueado) selectedWeapon1 = 3; this.deleteTint(3, 3); });
        this.armasButton[4].setInteractive().on('pointerdown', () => { if (!armas[4].bloqueado) selectedWeapon1 = 4; this.deleteTint(3, 4); });

        //Armas jugador 2
        //Posciones relativas al tamaño de los sprites
        var i;
        if (armas[4].bloqueado) {
            this.armas2Button[4] = this.add.sprite(gameConfig.scale.width * 8 / 9, gameConfig.scale.height * 4.3 / 6, armas[4].seleccionBloqueado).setScale(1.25 * gameConfig.scale.height / 600);
        } else {
            this.armas2Button[4] = this.add.sprite(gameConfig.scale.width * 8 / 9, gameConfig.scale.height * 4.3 / 6, armas[4].seleccionDesbloqueado).setScale(1.25 * gameConfig.scale.height / 600);
        }
        for (i = 0; i < 4; i++) {
            if (armas[i].bloqueado) {
                this.armas2Button[i] = this.add.sprite(gameConfig.scale.width * 8 / 9 - (this.armas2Button[4].displayWidth * (4 - i)), gameConfig.scale.height * 4.3 / 6, armas[i].seleccionBloqueado).setScale(1.25 * gameConfig.scale.height / 600);
            } else {
                this.armas2Button[i] = this.add.sprite(gameConfig.scale.width * 8 / 9 - (this.armas2Button[4].displayWidth * (4 - i)), gameConfig.scale.height * 4.3 / 6, armas[i].seleccionDesbloqueado).setScale(1.25 * gameConfig.scale.height / 600);
            }
        }
        //Añade interactividad y selecciona el primero por defecto
        this.armas2Button[0].setTint(0xDEDE7C);
        this.armas2Button[0].setInteractive().on('pointerdown', () => { if (!armas[0].bloqueado) selectedWeapon2 = 0; this.deleteTint(4, 0); });
        this.armas2Button[1].setInteractive().on('pointerdown', () => { if (!armas[1].bloqueado) selectedWeapon2 = 1; this.deleteTint(4, 1); });
        this.armas2Button[2].setInteractive().on('pointerdown', () => { if (!armas[2].bloqueado) selectedWeapon2 = 2; this.deleteTint(4, 2); });
        this.armas2Button[3].setInteractive().on('pointerdown', () => { if (!armas[3].bloqueado) selectedWeapon2 = 3; this.deleteTint(4, 3); });
        this.armas2Button[4].setInteractive().on('pointerdown', () => { if (!armas[4].bloqueado) selectedWeapon2 = 4; this.deleteTint(4, 4); });

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.15 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("MenuPrincipalScene") });

        //Botón de play, para la musica, y lleva al tutorial multijugador
        this.spriteJugar = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 8) * 7.5, 'botonPlay').setScale(0.45 * gameConfig.scale.height / 600);
        this.spriteJugar.setInteractive().on('pointerdown', () => {
            MenuMusic.stop();
            this.sound.play('buttonSound', { volume: 0.15 });
            this.scene.start("TutorialScene");;
        });
    }

    //Función que traslada los sprites de los botones de los personajes para poder ver el resto
    trasladarIzquierda(variable) {
        switch (variable) {
            //Personajes jugador 1
            case 1:
                //Si la posicion es mayor a 0
                if (this.personajesPosicion > 0) {
                    //Decrementa la posicion
                    this.personajesPosicion--;
                    //Cambia los sprites de los botones
                    var i;
                    for (i = 0; i < this.personajesButton.length; i++) {
                        if (personajes[this.personajesPosicion + i].bloqueado) {
                            this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].seleccionBloqueado);
                        } else {
                            this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].seleccionDesbloqueado);
                        }
                        //Quita todos los tintes
                        this.personajesButton[i].clearTint();
                        //Si el personaje seleccionado se encuentra en pantalla, se le añade el tinte de selección
                        if (selectedChar1 == this.personajesPosicion + i) {
                            this.personajesButton[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            case 2:
                 //Si la posicion es mayor a 0
                if (this.personajes2Posicion > 0) {
                    //Decrementa la posicion
                    this.personajes2Posicion--;
                    //Cambia los sprites de los botones
                    var i;
                    for (i = 0; i < this.personajes2Button.length; i++) {
                        if (personajes[this.personajes2Posicion + i].bloqueado) {
                            this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].seleccionBloqueado);
                        } else {
                            this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].seleccionDesbloqueado);
                        }
                        //Quita todos los tintes
                        this.personajes2Button[i].clearTint();
                        //Si el personaje seleccionado se encuentra en pantalla, se le añade el tinte de selección
                        if (selectedChar2 == this.personajes2Posicion + i) {
                            this.personajes2Button[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            default:
                break;
        }
    }

    //Mueve los personajes para que se vean los de la derecha
    trasladarDerecha(variable) {
        switch (variable) {
            case 1:
                //Si a la derecha hay más personajes
                if ((this.personajesPosicion + 5) < personajes.length) {
                    //Incrementa la posición
                    this.personajesPosicion++;
                    var i;
                    //Cambia los sprites de los botones
                    for (i = 0; i < this.personajesButton.length; i++) {
                        if (personajes[this.personajesPosicion + i].bloqueado) {
                            this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].seleccionBloqueado);
                        } else {
                            this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].seleccionDesbloqueado);
                        }
                        //Quita todos los tintes
                        this.personajesButton[i].clearTint();
                        //Si el personaje seleccionado se encuentra en pantalla, se le añade el tinte de selección
                        if (selectedChar1 == this.personajesPosicion + i) {
                            this.personajesButton[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            case 2:
                //Si a la derecha hay más personajes
                if ((this.personajes2Posicion + 5) < personajes.length) {
                    //Incrementa la posición
                    this.personajes2Posicion++;
                    var i;
                    //Cambia los sprites de los botones
                    for (i = 0; i < this.personajes2Button.length; i++) {
                        if (personajes[this.personajes2Posicion + i].bloqueado) {
                            this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].seleccionBloqueado);
                        } else {
                            this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].seleccionDesbloqueado);
                        }
                        //Quita todos los tintes
                        this.personajes2Button[i].clearTint();
                        //Si el personaje seleccionado se encuentra en pantalla, se le añade el tinte de selección
                        if (selectedChar2 == this.personajes2Posicion + i) {
                            this.personajes2Button[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            default:
                break;
        }


    }

    //Limpia los tintes, y se lo pone al seleccionado
    deleteTint(option, button) {
        //Reproduce el sonido del botón
        this.sound.play('buttonSound', { volume: 0.15 });
        //Dependiendo de si es mapa, personaje 1, personaje 2, arma 1 o arma 2
        switch (option) {
            //Si es mapa
            case 0:
                //Si el mapa no esta bloqueado
                if (!mapas[button].bloqueado) {
                    var i;
                    //Quita todos los tintes
                    for (i = 0; i < this.mapasButton.length; i++) {
                        this.mapasButton[i].clearTint();
                    }
                    //Añade el tinte al seleccionado
                    this.mapasButton[button].setTint(0xDEDE7C);
                } else {
                    //Si no está bloqueado muestra un mensaje de bloqueado
                    this.mostrarMensajeBloqueado();
                }
                break;
            //Si es el personaje 1
            case 1:
                //Si el personaje no esta bloqueado, se selecciona
                if (!personajes[this.personajesPosicion + button].bloqueado) {
                    //Añade el indice del personaje a la variable global
                    selectedChar1=this.personajesPosicion + button;
                    var i;
                    //Quita todos los tintes
                    for (i = 0; i < this.personajesButton.length; i++) {
                        this.personajesButton[i].clearTint();
                    }
                    //Añade el tinte al seleccionado
                    this.personajesButton[button].setTint(0xDEDE7C);
                } else {
                    //Si no está bloqueado muestra un mensaje de bloqueado
                    this.mostrarMensajeBloqueado();
                }
                break;
            //Si es el personaje 2
            case 2:
                //Si el personaje no esta bloqueado, se selecciona
                if (!personajes[this.personajes2Posicion + button].bloqueado) {
                    //Añade el indice del personaje a la variable global
                    selectedChar2=this.personajes2Posicion + button;
                    var i;
                    //Quita todos los tintes
                    for (i = 0; i < this.personajes2Button.length; i++) {
                        this.personajes2Button[i].clearTint();
                    }
                    //Añade el tinte al seleccionado
                    this.personajes2Button[button].setTint(0xDEDE7C);
                } else {
                    //Si no está bloqueado muestra un mensaje de bloqueado
                    this.mostrarMensajeBloqueado();
                }
                break;
            //Si es el arma 1
            case 3:
                //Si el personaje no esta bloqueado, se selecciona
                if (!armas[button].bloqueado) {
                    var i;
                    //Quita todos los tintes
                    for (i = 0; i < this.armasButton.length; i++) {
                        this.armasButton[i].clearTint();
                    }
                    //Añade el tinte al seleccionado
                    this.armasButton[button].setTint(0xDEDE7C);
                } else {
                    //Si no está bloqueado muestra un mensaje de bloqueado
                    this.mostrarMensajeBloqueado();
                }
                break;
            //Si es el arma 2
            case 4:
                //Si el personaje no esta bloqueado, se selecciona
                if (!armas[button].bloqueado) {
                    var i;
                    //Quita todos los tintes
                    for (i = 0; i < this.armas2Button.length; i++) {
                        this.armas2Button[i].clearTint();
                    }
                    //Añade el tinte al seleccionado
                    this.armas2Button[button].setTint(0xDEDE7C);
                } else {
                    //Si no está bloqueado muestra un mensaje de bloqueado
                    this.mostrarMensajeBloqueado();
                }
                break;
            default:
                break;
        }

    }

    //Muestra un mensaje de objeto bloqueado con un botón para poder acceder a la tienda directamente
    mostrarMensajeBloqueado() {
        //Muestra el mensaje y el boton de tienda en inglés o en español
        if (espanol) {
            this.mensaje = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'itemBl').setScale(gameConfig.scale.height / 600);
            this.tienda = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2.2 / 3, 'botonTienda').setScale(0.9 * gameConfig.scale.height / 600);
        } else {
            this.mensaje = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'itemBli').setScale(gameConfig.scale.height / 600);
            this.tienda = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2.2 / 3, 'botonTiendai').setScale(0.9 * gameConfig.scale.height / 600);
        }
        
        //Desactiva la interactividad de todos los botones
        var i;
        for (i = 0; i < this.mapasButton.length; i++) {
            this.mapasButton[i].disableInteractive();
        }
        for (i = 0; i < this.armas2Button.length; i++) {
            this.armas2Button[i].disableInteractive();
        }
        for (i = 0; i < this.armasButton.length; i++) {
            this.armasButton[i].disableInteractive();
        }
        for (i = 0; i < this.personajesButton.length; i++) {
            this.personajesButton[i].disableInteractive();
        }
        for (i = 0; i < this.personajes2Button.length; i++) {
            this.personajes2Button[i].disableInteractive();
        }
        this.spriteDerecha.disableInteractive();
        this.spriteDerecha2.disableInteractive();
        this.spriteIzquierda.disableInteractive();
        this.spriteIzquierda2.disableInteractive();

        //Añade la interactividad al botón de tienda
        this.tienda.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaScene") });

        //Añade un botón de cerrar el mensaje
        this.botonCerrar = this.add.sprite(gameConfig.scale.width / 2 + (this.mensaje.displayWidth / 2 - 30), gameConfig.scale.height / 2 + 30, 'CloseB').setOrigin(0.5, 0).setScale(0.07 * gameConfig.scale.height / 600);
        this.botonCerrar.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.cerrarMensajeTienda() });
    }

    //Función que cierra el mensaje de ir a la tienda por objeto bloqueado
    cerrarMensajeTienda() {
        //Destruye los elementos del mensaje
        this.mensaje.destroy();
        this.tienda.destroy();
        this.botonCerrar.destroy();

        //Activa la interactividad de todos los botones
        var i;
        for (i = 0; i < this.mapasButton.length; i++) {
            this.mapasButton[i].setInteractive();
        }
        for (i = 0; i < this.armas2Button.length; i++) {
            this.armas2Button[i].setInteractive();
        }
        for (i = 0; i < this.armasButton.length; i++) {
            this.armasButton[i].setInteractive();
        }
        for (i = 0; i < this.personajesButton.length; i++) {
            this.personajesButton[i].setInteractive();
        }
        for (i = 0; i < this.personajes2Button.length; i++) {
            this.personajes2Button[i].setInteractive();
        }
        this.spriteDerecha.setInteractive();
        this.spriteDerecha2.setInteractive();
        this.spriteIzquierda.setInteractive();
        this.spriteIzquierda2.setInteractive();
    }
}