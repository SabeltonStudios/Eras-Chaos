var selectedMap = 0;
var selectedChar1 = 0;
var selectedChar2 = 0;
var selectedWeapon1 = 0;
var selectedWeapon2 = 0;
//var numRounds;
class multijugadorSeleccionScene extends Phaser.Scene {
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

        this.personajesPosicion = 0;
        this.personajes2Posicion = 0;
        selectedMap = 0;
        selectedChar1 = 0;
        selectedChar2 = 0;
        selectedWeapon1 = 0;
        selectedWeapon2 = 0;

        if (!MenuMusic.isPlaying) {
            MenuMusic.play();
        }
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);
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


        //Asignamos los botones a cinco mapas
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
        if (espanol) {
            this.spriteJugador1 = this.add.sprite(gameConfig.scale.width * 2.5 / 9, gameConfig.scale.height / 2.5, 'jugador1').setScale(0.4 * gameConfig.scale.height / 600);
            this.spriteJugador2 = this.add.sprite(gameConfig.scale.width * 6.5 / 9, gameConfig.scale.height / 2.5, 'jugador2').setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.spriteJugador1 = this.add.sprite(gameConfig.scale.width * 2.5 / 9, gameConfig.scale.height / 2.5, 'jugador1i').setScale(0.4 * gameConfig.scale.height / 600);
            this.spriteJugador2 = this.add.sprite(gameConfig.scale.width * 6.5 / 9, gameConfig.scale.height / 2.5, 'jugador2i').setScale(0.4 * gameConfig.scale.height / 600);

        }
        //personajes 1
        var i;
        this.personajesButton[0] = this.add.sprite((gameConfig.scale.width / 9), gameConfig.scale.height / 1.9, personajes[0].seleccionDesbloqueado).setScale(0.48 * gameConfig.scale.height / 600);
        for (i = 1; i < 5; i++) {
            if (personajes[i].bloqueado) {
                this.personajesButton[i] = this.add.sprite(gameConfig.scale.width / 9 + (this.personajesButton[0].displayWidth * i), gameConfig.scale.height / 1.9, personajes[i].seleccionBloqueado).setScale(0.48 * gameConfig.scale.height / 600);
            } else {
                this.personajesButton[i] = this.add.sprite(gameConfig.scale.width / 9 + (this.personajesButton[0].displayWidth * i), gameConfig.scale.height / 1.9, personajes[i].seleccionDesbloqueado).setScale(0.48 * gameConfig.scale.height / 600);
            }
        }
        this.personajesButton[0].setInteractive().on('pointerdown', () => this.deleteTint(1, 0));
        this.personajesButton[0].setTint(0xDEDE7C);
        this.personajesButton[1].setInteractive().on('pointerdown', () => this.deleteTint(1, 1));
        this.personajesButton[2].setInteractive().on('pointerdown', () => this.deleteTint(1, 2));
        this.personajesButton[3].setInteractive().on('pointerdown', () => this.deleteTint(1, 3));
        this.personajesButton[4].setInteractive().on('pointerdown', () => this.deleteTint(1, 4));

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 9 - (this.personajesButton[0].displayWidth * 0.7), gameConfig.scale.height / 1.9, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarIzquierda(1) });

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width / 9 + (this.personajesButton[0].displayWidth * 4.7), gameConfig.scale.height / 1.9, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarDerecha(1) });

        //personajes 2
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
        this.personajes2Button[0].setInteractive().on('pointerdown', () => this.deleteTint(2, 0) );
        this.personajes2Button[0].setTint(0xDEDE7C);
        this.personajes2Button[1].setInteractive().on('pointerdown', () => this.deleteTint(2, 1) );
        this.personajes2Button[2].setInteractive().on('pointerdown', () => this.deleteTint(2, 2) );
        this.personajes2Button[3].setInteractive().on('pointerdown', () => this.deleteTint(2, 3) );
        this.personajes2Button[4].setInteractive().on('pointerdown', () => this.deleteTint(2, 4) );

        //Flechas derecha e izquierda
        this.spriteIzquierda2 = this.add.sprite(gameConfig.scale.width * 8 / 9 - (this.personajes2Button[4].displayWidth * 4.7), gameConfig.scale.height / 1.9, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteIzquierda2.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarIzquierda(2) });

        this.spriteDerecha2 = this.add.sprite(gameConfig.scale.width * 8 / 9 + (this.personajes2Button[4].displayWidth * 0.7), gameConfig.scale.height / 1.9, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteDerecha2.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarDerecha(2) });

        var i;
        this.armasButton[0] = this.add.sprite(gameConfig.scale.width / 9, gameConfig.scale.height * 4.3 / 6, armas[0].seleccionDesbloqueado).setScale(1.25 * gameConfig.scale.height / 600);
        for (i = 0; i < 5; i++) {
            if (armas[i].bloqueado) {
                this.armasButton[i] = this.add.sprite(gameConfig.scale.width / 9 + (this.armasButton[0].displayWidth * i), gameConfig.scale.height * 4.3 / 6, armas[i].seleccionBloqueado).setScale(1.25 * gameConfig.scale.height / 600);
            } else {
                this.armasButton[i] = this.add.sprite(gameConfig.scale.width / 9 + (this.armasButton[0].displayWidth * i), gameConfig.scale.height * 4.3 / 6, armas[i].seleccionDesbloqueado).setScale(1.25 * gameConfig.scale.height / 600);
            }

        }
        this.armasButton[0].setInteractive().on('pointerdown', () => { if (!armas[0].bloqueado) selectedWeapon1 = 0; this.deleteTint(3, 0); });
        this.armasButton[0].setTint(0xDEDE7C);
        this.armasButton[1].setInteractive().on('pointerdown', () => { if (!armas[1].bloqueado) selectedWeapon1 = 1; this.deleteTint(3, 1); });
        this.armasButton[2].setInteractive().on('pointerdown', () => { if (!armas[2].bloqueado) selectedWeapon1 = 2; this.deleteTint(3, 2); });
        this.armasButton[3].setInteractive().on('pointerdown', () => { if (!armas[3].bloqueado) selectedWeapon1 = 3; this.deleteTint(3, 3); });
        this.armasButton[4].setInteractive().on('pointerdown', () => { if (!armas[4].bloqueado) selectedWeapon1 = 4; this.deleteTint(3, 4); });

        //Armas personaje 2
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
        this.armas2Button[0].setTint(0xDEDE7C);
        this.armas2Button[0].setInteractive().on('pointerdown', () => { if (!armas[0].bloqueado) selectedWeapon2 = 0; this.deleteTint(4, 0); });
        this.armas2Button[1].setInteractive().on('pointerdown', () => { if (!armas[1].bloqueado) selectedWeapon2 = 1; this.deleteTint(4, 1); });
        this.armas2Button[2].setInteractive().on('pointerdown', () => { if (!armas[2].bloqueado) selectedWeapon2 = 2; this.deleteTint(4, 2); });
        this.armas2Button[3].setInteractive().on('pointerdown', () => { if (!armas[3].bloqueado) selectedWeapon2 = 3; this.deleteTint(4, 3); });
        this.armas2Button[4].setInteractive().on('pointerdown', () => { if (!armas[4].bloqueado) selectedWeapon2 = 4; this.deleteTint(4, 4); });

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("MenuPrincipalScene") });

        this.spriteJugar = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 8) * 7.5, 'botonPlay').setScale(0.4 * gameConfig.scale.height / 600);
        this.spriteJugar.setInteractive().on('pointerdown', () => {
            MenuMusic.stop();
            this.sound.play('buttonSound', { volume: 0.15 });
            this.scene.start("TutorialScene");;
        });
    }

    trasladarIzquierda(variable) {
        switch (variable) {
            case 1:
                if (this.personajesPosicion > 0) {
                    this.personajesPosicion--;
                    var i;
                    for (i = 0; i < this.personajesButton.length; i++) {
                        if (personajes[this.personajesPosicion + i].bloqueado) {
                            this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].seleccionBloqueado);
                        } else {
                            this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].seleccionDesbloqueado);
                        }
                        this.personajesButton[i].clearTint();
                        if (selectedChar1 == this.personajesPosicion + i) {
                            this.personajesButton[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            case 2:
                if (this.personajes2Posicion > 0) {
                    this.personajes2Posicion--;
                    var i;
                    for (i = 0; i < this.personajes2Button.length; i++) {
                        if (personajes[this.personajes2Posicion + i].bloqueado) {
                            this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].seleccionBloqueado);
                        } else {
                            this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].seleccionDesbloqueado);
                        }
                        this.personajes2Button[i].clearTint();
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
                if ((this.personajesPosicion + 5) < personajes.length) {
                    this.personajesPosicion++;

                    var i;
                    for (i = 0; i < this.personajesButton.length; i++) {
                        if (personajes[this.personajesPosicion + i].bloqueado) {
                            this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].seleccionBloqueado);
                        } else {
                            this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].seleccionDesbloqueado);
                        }
                        this.personajesButton[i].clearTint();
                        if (selectedChar1 == this.personajesPosicion + i) {
                            this.personajesButton[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            case 2:
                if ((this.personajes2Posicion + 5) < personajes.length) {
                    this.personajes2Posicion++;
                    var i;
                    for (i = 0; i < this.personajes2Button.length; i++) {
                        if (personajes[this.personajes2Posicion + i].bloqueado) {
                            this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].seleccionBloqueado);
                        } else {
                            this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].seleccionDesbloqueado);
                        }
                        this.personajes2Button[i].clearTint();
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
        this.sound.play('buttonSound', { volume: 0.15 });
        //console.log("selecciona");
        switch (option) {
            case 0:
                if (!mapas[button].bloqueado) {
                    var i;
                    for (i = 0; i < this.mapasButton.length; i++) {
                        this.mapasButton[i].clearTint();
                    }
                    this.mapasButton[button].setTint(0xDEDE7C);
                } else {
                    this.mostrarMensajeBloqueado();
                }
                break;
            case 1:
                //Si el personaje no esta bloqueado, se selecciona
                if (!personajes[this.personajesPosicion + button].bloqueado) {
                    selectedChar1=this.personajesPosicion + button;
                    var i;
                    for (i = 0; i < this.personajesButton.length; i++) {
                        this.personajesButton[i].clearTint();
                    }
                    this.personajesButton[button].setTint(0xDEDE7C);
                } else {
                    this.mostrarMensajeBloqueado();
                }
                break;
            case 2:
                //Si el personaje no esta bloqueado, se selecciona
                if (!personajes[this.personajes2Posicion + button].bloqueado) {
                    selectedChar2=this.personajes2Posicion + button;
                    var i;
                    for (i = 0; i < this.personajes2Button.length; i++) {
                        this.personajes2Button[i].clearTint();
                    }
                    this.personajes2Button[button].setTint(0xDEDE7C);
                } else {
                    this.mostrarMensajeBloqueado();
                }
                break;
            case 3:
                //Si el personaje no esta bloqueado, se selecciona
                if (!armas[button].bloqueado) {
                    var i;
                    for (i = 0; i < this.armasButton.length; i++) {
                        this.armasButton[i].clearTint();
                    }
                    this.armasButton[button].setTint(0xDEDE7C);
                } else {
                    this.mostrarMensajeBloqueado();
                }
                break;
            case 4:
                //Si el personaje no esta bloqueado, se selecciona
                if (!armas[button].bloqueado) {
                    var i;
                    for (i = 0; i < this.armas2Button.length; i++) {
                        this.armas2Button[i].clearTint();
                    }
                    this.armas2Button[button].setTint(0xDEDE7C);
                } else {
                    this.mostrarMensajeBloqueado();
                }
                break;
            default:
                break;
        }

    }

    mostrarMensajeBloqueado() {
        if (espanol) {
            this.mensaje = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'itemBl').setScale(gameConfig.scale.height / 600);
            this.tienda = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2.2 / 3, 'botonTienda').setScale(0.9 * gameConfig.scale.height / 600);
        } else {
            this.mensaje = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'itemBli').setScale(gameConfig.scale.height / 600);
            this.tienda = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2.2 / 3, 'botonTiendai').setScale(0.9 * gameConfig.scale.height / 600);
        }
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
        this.tienda.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaScene") });
        //this.botonCerrar = this.add.sprite(gameConfig.scale.width/2+(this.mensaje.width*this.mensaje.scale/2-30), gameConfig.scale.height/2+30, 'CloseB').setOrigin(0.5,0).setScale(0.07*gameConfig.scale.height / 600);
        this.botonCerrar = this.add.sprite(gameConfig.scale.width / 2 + (this.mensaje.displayWidth / 2 - 30), gameConfig.scale.height / 2 + 30, 'CloseB').setOrigin(0.5, 0).setScale(0.07 * gameConfig.scale.height / 600);

        this.botonCerrar.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.cerrarMensajeTienda() });
    }

    cerrarMensajeTienda() {
        this.mensaje.destroy();
        this.tienda.destroy();
        this.botonCerrar.destroy();

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