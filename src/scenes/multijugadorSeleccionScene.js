var selectedMap = 0;
var selectedChar1 = 0;
var selectedChar2 = 0;
var selectedWeapon1 = 0;
var selectedWeapon2 = 0;
//var numRounds;
class multijugadorSeleccionScene extends Phaser.Scene {
    mapasPosicion = 0;
    personajesPosicion = 0;
    personajes2Posicion = 0;
    armasPosicion = 0;
    armas2Posicion = 0;
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
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);
        if (espanol) {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 8.5, 'tituloMapas').setScale(0.5 * gameConfig.scale.height / 600);
            var i;
            for (i = 0; i < mapas.length; i++) {
                if (mapas[i].bloqueado) {
                    mapas[i].sprite = mapas[i].spriteSelectBloq;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueado;
                }
            }
        } else {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 8.5, 'tituloMapasi').setScale(0.5 * gameConfig.scale.height / 600);
            var i;
            for (i = 0; i < mapas.length; i++) {
                if (mapas[i].bloqueado) {
                    mapas[i].sprite = mapas[i].spriteSelectBloqi;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueadoi;
                }
            }
        }

        //Asignamos los botones a cinco mapas
        this.mapasButton[0] = this.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 4, mapas[0].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[0].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 0; this.deleteTint(0, 0); });
        this.mapasButton[0].setTint(0xDEDE7C);

        this.mapasButton[1] = this.add.sprite((gameConfig.scale.width / 6) * 2, gameConfig.scale.height / 4, mapas[1].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[1].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 1; this.deleteTint(0, 1); });

        this.mapasButton[2] = this.add.sprite((gameConfig.scale.width / 6) * 3, gameConfig.scale.height / 4, mapas[2].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[2].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 2; this.deleteTint(0, 2); });

        this.mapasButton[3] = this.add.sprite((gameConfig.scale.width / 6) * 4, gameConfig.scale.height / 4, mapas[3].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[3].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 3; this.deleteTint(0, 3); });

        this.mapasButton[4] = this.add.sprite((gameConfig.scale.width / 6) * 5, gameConfig.scale.height / 4, mapas[4].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[4].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 4; this.deleteTint(0, 4); });

        if (espanol) {
            this.spriteJugador1 = this.add.sprite((gameConfig.scale.width / 8) + 120, gameConfig.scale.height / 2.6, 'jugador1').setScale(0.4 * gameConfig.scale.height / 600);
            this.spriteJugador2 = this.add.sprite((gameConfig.scale.width * 7 / 8) - 120, gameConfig.scale.height / 2.6, 'jugador2').setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.spriteJugador1 = this.add.sprite((gameConfig.scale.width / 8) + 120, gameConfig.scale.height / 2.6, 'jugador1i').setScale(0.4 * gameConfig.scale.height / 600);
            this.spriteJugador2 = this.add.sprite((gameConfig.scale.width * 7 / 8) - 120, gameConfig.scale.height / 2.6, 'jugador2i').setScale(0.4 * gameConfig.scale.height / 600);

        }

        //Flechas derecha e izquierda
        this.spriteIzquierdaMapa = this.add.sprite(gameConfig.scale.width / 25, gameConfig.scale.height / 4, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteIzquierdaMapa.setInteractive().on('pointerdown', () => this.trasladarIzquierda(0));

        this.spriteDerechaMapa = this.add.sprite(gameConfig.scale.width * 24 / 25, gameConfig.scale.height / 4, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteDerechaMapa.setInteractive().on('pointerdown', () => this.trasladarDerecha(0));

        //personajes 1
        if (personajes[0].bloqueado) {
            this.personajesButton[0] = this.add.sprite(gameConfig.scale.width / 8, gameConfig.scale.height / 2, personajes[0].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajesButton[0] = this.add.sprite(gameConfig.scale.width / 8, gameConfig.scale.height / 2, personajes[0].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajesButton[0].setInteractive().on('pointerdown', () => { if (!personajes[0].bloqueado) selectedChar1 = 0 + this.personajesPosicion; this.deleteTint(1, 0); });
        this.personajesButton[0].setTint(0xDEDE7C);

        if (personajes[1].bloqueado) {
            this.personajesButton[1] = this.add.sprite((gameConfig.scale.width / 8), gameConfig.scale.height / 1.55, personajes[1].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajesButton[1] = this.add.sprite((gameConfig.scale.width / 8), gameConfig.scale.height / 1.55, personajes[1].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajesButton[1].setInteractive().on('pointerdown', () => { if (!personajes[1].bloqueado) selectedChar1 = 1 + this.personajesPosicion; this.deleteTint(1, 1); });

        if (personajes[2].bloqueado) {
            this.personajesButton[2] = this.add.sprite((gameConfig.scale.width / 8) + 120, gameConfig.scale.height / 2, personajes[2].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajesButton[2] = this.add.sprite((gameConfig.scale.width / 8) + 120, gameConfig.scale.height / 2, personajes[2].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajesButton[2].setInteractive().on('pointerdown', () => { if (!personajes[2].bloqueado) selectedChar1 = 2 + this.personajesPosicion; this.deleteTint(1, 2); });

        if (personajes[3].bloqueado) {
            this.personajesButton[3] = this.add.sprite((gameConfig.scale.width / 8) + 120, gameConfig.scale.height / 1.55, personajes[3].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajesButton[3] = this.add.sprite((gameConfig.scale.width / 8) + 120, gameConfig.scale.height / 1.55, personajes[3].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajesButton[3].setInteractive().on('pointerdown', () => { if (!personajes[3].bloqueado) selectedChar1 = 3 + this.personajesPosicion; this.deleteTint(1, 3); });

        if (personajes[4].bloqueado) {
            this.personajesButton[4] = this.add.sprite((gameConfig.scale.width / 8) + 240, gameConfig.scale.height / 2, personajes[4].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajesButton[4] = this.add.sprite((gameConfig.scale.width / 8) + 240, gameConfig.scale.height / 2, personajes[4].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajesButton[4].setInteractive().on('pointerdown', () => { if (!personajes[4].bloqueado) selectedChar1 = 4 + this.personajesPosicion; this.deleteTint(1, 4); });

        if (personajes[5].bloqueado) {
            this.personajesButton[5] = this.add.sprite((gameConfig.scale.width / 8) + 240, gameConfig.scale.height / 1.55, personajes[5].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajesButton[5] = this.add.sprite((gameConfig.scale.width / 8) + 240, gameConfig.scale.height / 1.55, personajes[5].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajesButton[5].setInteractive().on('pointerdown', () => { if (!personajes[5].bloqueado) selectedChar1 = 5 + this.personajesPosicion; this.deleteTint(1, 5); });

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite((gameConfig.scale.width / 8) - 100, gameConfig.scale.height * 7 / 12, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () => this.trasladarIzquierda(1));

        this.spriteDerecha = this.add.sprite((gameConfig.scale.width / 8) + 340, gameConfig.scale.height * 7 / 12, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () => this.trasladarDerecha(1));

        //personajes 2
        if (personajes[0].bloqueado) {
            this.personajes2Button[0] = this.add.sprite(gameConfig.scale.width * 7 / 8 - 240, gameConfig.scale.height / 2, personajes[0].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajes2Button[0] = this.add.sprite(gameConfig.scale.width * 7 / 8 - 240, gameConfig.scale.height / 2, personajes[0].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajes2Button[0].setInteractive().on('pointerdown', () => { if (!personajes[0].bloqueado) selectedChar2 = 0 + this.personajes2Posicion; this.deleteTint(2, 0); });
        this.personajes2Button[0].setTint(0xDEDE7C);

        if (personajes[1].bloqueado) {
            this.personajes2Button[1] = this.add.sprite((gameConfig.scale.width * 7 / 8) - 240, gameConfig.scale.height / 1.55, personajes[1].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajes2Button[1] = this.add.sprite((gameConfig.scale.width * 7 / 8) - 240, gameConfig.scale.height / 1.55, personajes[1].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajes2Button[1].setInteractive().on('pointerdown', () => { if (!personajes[1].bloqueado) selectedChar2 = 1 + this.personajes2Posicion; this.deleteTint(2, 1); });

        if (personajes[2].bloqueado) {
            this.personajes2Button[2] = this.add.sprite((gameConfig.scale.width * 7 / 8) - 120, gameConfig.scale.height / 2, personajes[2].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajes2Button[2] = this.add.sprite((gameConfig.scale.width * 7 / 8) - 120, gameConfig.scale.height / 2, personajes[2].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajes2Button[2].setInteractive().on('pointerdown', () => { if (!personajes[2].bloqueado) selectedChar2 = 2 + this.personajes2Posicion; this.deleteTint(2, 2); });

        if (personajes[3].bloqueado) {
            this.personajes2Button[3] = this.add.sprite((gameConfig.scale.width * 7 / 8) - 120, gameConfig.scale.height / 1.55, personajes[3].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajes2Button[3] = this.add.sprite((gameConfig.scale.width * 7 / 8) - 120, gameConfig.scale.height / 1.55, personajes[3].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajes2Button[3].setInteractive().on('pointerdown', () => { if (!personajes[3].bloqueado) selectedChar2 = 3 + this.personajes2Posicion; this.deleteTint(2, 3); });

        if (personajes[4].bloqueado) {
            this.personajes2Button[4] = this.add.sprite((gameConfig.scale.width * 7 / 8), gameConfig.scale.height / 2, personajes[4].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajes2Button[2] = this.add.sprite((gameConfig.scale.width * 7 / 8), gameConfig.scale.height / 2, personajes[4].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajes2Button[4].setInteractive().on('pointerdown', () => { if (!personajes[24].bloqueado) selectedChar2 = 4 + this.personajes2Posicion; this.deleteTint(2, 4); });

        if (personajes[5].bloqueado) {
            this.personajes2Button[5] = this.add.sprite((gameConfig.scale.width * 7 / 8), gameConfig.scale.height / 1.55, personajes[5].seleccionBloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        } else {
            this.personajes2Button[5] = this.add.sprite((gameConfig.scale.width * 7 / 8), gameConfig.scale.height / 1.55, personajes[5].seleccionDesbloqueado).setScale(0.4 * gameConfig.scale.height / 600);
        }
        this.personajes2Button[5].setInteractive().on('pointerdown', () => { if (!personajes[5].bloqueado) selectedChar2 = 5 + this.personajes2Posicion; this.deleteTint(2, 5); });

        //Flechas derecha e izquierda
        this.spriteIzquierda2 = this.add.sprite((gameConfig.scale.width * 7 / 8) - 340, gameConfig.scale.height * 7 / 12, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteIzquierda2.setInteractive().on('pointerdown', () => this.trasladarIzquierda(2));

        this.spriteDerecha2 = this.add.sprite((gameConfig.scale.width * 7 / 8) + 100, gameConfig.scale.height * 7 / 12, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteDerecha2.setInteractive().on('pointerdown', () => this.trasladarDerecha(2));

        //Armas personaje 1
        if (armas[0].bloqueado) {
            this.armasButton[0] = this.add.sprite(gameConfig.scale.width /8, gameConfig.scale.height *4.7/ 6, armas[0].seleccionBloqueado).setScale(gameConfig.scale.height / 600);
        } else {
            this.armasButton[0] = this.add.sprite(gameConfig.scale.width /8, gameConfig.scale.height *4.7/ 6, armas[0].seleccionDesbloqueado).setScale(gameConfig.scale.height / 600);
        }
        this.armasButton[0].setInteractive().on('pointerdown', () => { if (!armas[0].bloqueado) selectedWeapon1 = 0 + this.armasPosicion; this.deleteTint(3, 0); });
        this.armasButton[0].setTint(0xDEDE7C);

        if (armas[1].bloqueado) {
            this.armasButton[1] = this.add.sprite(gameConfig.scale.width /8+120, gameConfig.scale.height *4.7/ 6, armas[1].seleccionBloqueado).setScale(gameConfig.scale.height / 600);
        } else {
            this.armasButton[1] = this.add.sprite(gameConfig.scale.width /8+120, gameConfig.scale.height *4.7/ 6, armas[1].seleccionDesbloqueado).setScale(gameConfig.scale.height / 600);
        }
        this.armasButton[1].setInteractive().on('pointerdown', () => { if (!armas[1].bloqueado) selectedWeapon1 = 1 + this.armasPosicion; this.deleteTint(3, 1); });

        if (armas[2].bloqueado) {
            this.armasButton[2] = this.add.sprite(gameConfig.scale.width /8+240, gameConfig.scale.height *4.7/ 6, armas[2].seleccionBloqueado).setScale(gameConfig.scale.height / 600);
        } else {
            this.armasButton[2] = this.add.sprite(gameConfig.scale.width /8+240, gameConfig.scale.height *4.7/ 6, armas[2].seleccionDesbloqueado).setScale(gameConfig.scale.height / 600);
        }
        this.armasButton[2].setInteractive().on('pointerdown', () => { if (!armas[2].bloqueado) selectedWeapon1 = 2 + this.armasPosicion; this.deleteTint(3, 2); });

        //Flechas derecha e izquierda
        this.spriteIzquierdaArmas = this.add.sprite(gameConfig.scale.width /8 -100, gameConfig.scale.height *4.7/ 6, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteIzquierdaArmas.setInteractive().on('pointerdown', () => this.trasladarIzquierda(3));

        this.spriteDerechaArmas = this.add.sprite(gameConfig.scale.width /8+ 340, gameConfig.scale.height *4.7/ 6, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteDerechaArmas.setInteractive().on('pointerdown', () => this.trasladarDerecha(3));

        //Armas personaje 2
        this.armas2Button[0] = this.add.sprite(gameConfig.scale.width *7/8 -240, gameConfig.scale.height *4.7/ 6, armas[0].seleccionDesbloqueado).setScale(gameConfig.scale.height / 600);
        this.armas2Button[0].setInteractive().on('pointerdown', () => { if (!armas[0].bloqueado) selectedWeapon2 = 0 + this.armas2Posicion; this.deleteTint(4, 0); });
        this.armas2Button[0].setTint(0xDEDE7C);

        if (armas[1].bloqueado) {
            this.armas2Button[1] = this.add.sprite(gameConfig.scale.width *7/8-120, gameConfig.scale.height *4.7/ 6, armas[1].seleccionBloqueado).setScale(gameConfig.scale.height / 600);
        } else {
            this.armas2Button[1] = this.add.sprite(gameConfig.scale.width *7/8-120, gameConfig.scale.height *4.7/ 6, armas[1].seleccionDesbloqueado).setScale(gameConfig.scale.height / 600);
        }
        this.armas2Button[1].setInteractive().on('pointerdown', () => { if (!armas[1].bloqueado) selectedWeapon2 = 1 + this.armas2Posicion; this.deleteTint(4, 1); });

        if (armas[2].bloqueado) {
            this.armas2Button[2] = this.add.sprite(gameConfig.scale.width *7/8, gameConfig.scale.height *4.7/ 6, armas[2].seleccionBloqueado).setScale(gameConfig.scale.height / 600);
        } else {
            this.armas2Button[2] = this.add.sprite(gameConfig.scale.width *7/8, gameConfig.scale.height *4.7/ 6, armas[2].seleccionDesbloqueado).setScale(gameConfig.scale.height / 600);
        }
        this.armas2Button[2].setInteractive().on('pointerdown', () => { if (!armas[2].bloqueado) selectedWeapon2 = 2 + this.armas2Posicion; this.deleteTint(4, 2); });

        //Flechas derecha e izquierda
        this.spriteIzquierdaArmas2 = this.add.sprite(gameConfig.scale.width *7/8-340, gameConfig.scale.height *4.7/ 6, 'flechaIzquierda').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteIzquierdaArmas2.setInteractive().on('pointerdown', () => this.trasladarIzquierda(4));

        this.spriteDerechaArmas2 = this.add.sprite(gameConfig.scale.width *7/8+100, gameConfig.scale.height *4.7/ 6, 'flechaDerecha').setScale(0.2 * gameConfig.scale.height / 600);
        this.spriteDerechaArmas2.setInteractive().on('pointerdown', () => this.trasladarDerecha(4));

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));

        this.spriteJugar = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 8) * 7.5, 'botonPlay').setScale(0.4 * gameConfig.scale.height / 600);
        this.spriteJugar.setInteractive().on('pointerdown', () => this.scene.start("MultijugadorPartidaScene"));
    }

    trasladarIzquierda(variable) {
        switch (variable) {
            case 0:
                if (this.mapasPosicion > 0) {
                    this.mapasPosicion--;
                    var i;
                    for (i = 0; i < this.mapasButton.length; i++) {
                        this.mapasButton[i].setTexture(mapas[this.mapasPosicion + i].sprite);
                        this.mapasButton[i].clearTint();
                        if (selectedMap == this.mapasPosicion + i) {
                            this.mapasButton[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            case 1:
                if (this.personajesPosicion > 0) {
                    this.personajesPosicion = this.personajesPosicion - 2;
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
                    this.personajes2Posicion = this.personajes2Posicion - 2;
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
            case 3:
                if (this.armasPosicion > 0) {
                    this.armasPosicion--;
                    var i;
                    for (i = 0; i < this.armasButton.length; i++) {
                        if(armas[this.armasPosicion + i].bloqueado){
                            this.armasButton[i].setTexture(armas[this.armasPosicion + i].seleccionBloqueado);
                        }else{
                            this.armasButton[i].setTexture(armas[this.armasPosicion + i].seleccionDesbloqueado);
                        }
                        this.armasButton[i].clearTint();
                        if (selectedWeapon1 == this.armasPosicion + i) {
                            this.armasButton[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            case 4:
                console.log(this.armas2Posicion);
                if (this.armas2Posicion > 0) {
                   
                    this.armas2Posicion--;
                    var i;
                    for (i = 0; i < this.armas2Button.length; i++) {
                        if(armas[this.armas2Posicion + i].bloqueado){
                            this.armas2Button[i].setTexture(armas[this.armas2Posicion + i].seleccionBloqueado);
                        }else{
                            this.armas2Button[i].setTexture(armas[this.armas2Posicion + i].seleccionDesbloqueado);
                        }
                        this.armas2Button[i].clearTint();
                        if (selectedWeapon2 == this.armas2Posicion + i) {
                            this.armas2Button[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            default:
                break;
        }
    }

    //Mueve los mapas para que se vean los de la derecha
    trasladarDerecha(variable) {
        switch (variable) {
            case 0:
                if ((this.mapasPosicion + 5) < mapas.length) {
                    this.mapasPosicion++;
                    var i;
                    for (i = 0; i < this.mapasButton.length; i++) {
                        this.mapasButton[i].setTexture(mapas[this.mapasPosicion + i].sprite);
                        this.mapasButton[i].clearTint();
                        if (selectedMap == this.mapasPosicion + i) {
                            this.mapasButton[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            case 1:
                if ((this.personajesPosicion + 6) < personajes.length) {
                    if ((this.personajesPosicion + 8) <= personajes.length) {
                        var buttonlength = this.personajesButton.length;
                    } else {
                        var buttonlength = this.personajesButton.length - 1;
                    }
                    this.personajesPosicion = this.personajesPosicion + 2;
                    var i;
                    for (i = 0; i < buttonlength; i++) {
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
                if ((this.personajes2Posicion + 6) < personajes.length) {
                    if ((this.personajes2Posicion + 8) <= personajes.length) {
                        var buttonlength = this.personajes2Button.length;
                    } else {
                        var buttonlength = this.personajes2Button.length - 1;
                    }
                    this.personajes2Posicion = this.personajes2Posicion + 2;
                    var i;
                    for (i = 0; i < buttonlength; i++) {
                        if (personajes[this.personajesPosicion + i].bloqueado) {
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
            case 3:
                if ((this.armasPosicion + 3) < armas.length) {
                    this.armasPosicion++;
                    var i;
                    for (i = 0; i < this.armasButton.length; i++) {
                        if (armas[this.armasPosicion + i].bloqueado) {
                            this.armasButton[i].setTexture(armas[this.armasPosicion + i].seleccionBloqueado);
                        } else {
                            this.armasButton[i].setTexture(armas[this.armasPosicion + i].seleccionDesbloqueado);
                        }
                        this.armasButton[i].clearTint();
                        if (selectedWeapon1 == this.armasPosicion + i) {
                            this.armasButton[i].setTint(0xDEDE7C);
                        }
                    }
                }
                break;
            case 4:
                if ((this.armas2Posicion + 3) < armas.length) {
                    this.armas2Posicion++;
                    var i;
                    for (i = 0; i < this.armas2Button.length; i++) {
                        if (armas[this.armas2Posicion + i].bloqueado) {
                            this.armas2Button[i].setTexture(armas[this.armas2Posicion + i].seleccionBloqueado);
                        } else {
                            this.armas2Button[i].setTexture(armas[this.armas2Posicion + i].seleccionDesbloqueado);
                        }
                        this.armas2Button[i].clearTint();
                        if (selectedWeapon2 == this.armas2Posicion + i) {
                            this.armas2Button[i].setTint(0xDEDE7C);
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
        console.log("selecciona");
        switch (option) {
            case 0:
                if (!mapas[this.mapasPosicion + button].bloqueado) {
                    var i;
                    for (i = 0; i < this.mapasButton.length; i++) {
                        this.mapasButton[i].clearTint();
                    }
                    this.mapasButton[button].setTint(0xDEDE7C);
                }
                break;
            case 1:
                //Si el personaje no esta bloqueado, se selecciona
                if (!personajes[this.personajesPosicion + button].bloqueado) {
                    var i;
                    for (i = 0; i < this.personajesButton.length; i++) {
                        this.personajesButton[i].clearTint();
                    }
                    this.personajesButton[button].setTint(0xDEDE7C);
                }
                break;
            case 2:
                //Si el personaje no esta bloqueado, se selecciona
                if (!personajes[this.personajes2Posicion + button].bloqueado) {
                    var i;
                    for (i = 0; i < this.personajes2Button.length; i++) {
                        this.personajes2Button[i].clearTint();
                    }
                    this.personajes2Button[button].setTint(0xDEDE7C);
                }
                break;
            case 3:
                //Si el personaje no esta bloqueado, se selecciona
                if (!armas[this.armasPosicion + button].bloqueado) {
                    var i;
                    for (i = 0; i < this.armasButton.length; i++) {
                        this.armasButton[i].clearTint();
                    }
                    this.armasButton[button].setTint(0xDEDE7C);
                }
                break;
            case 4:
                    //Si el personaje no esta bloqueado, se selecciona
                    if (!armas[this.armas2Posicion + button].bloqueado) {
                        var i;
                        for (i = 0; i < this.armas2Button.length; i++) {
                            this.armas2Button[i].clearTint();
                        }
                        this.armas2Button[button].setTint(0xDEDE7C);
                    }
                    break;
            default:
                //Si el personaje no esta bloqueado, se selecciona
                if (!armas[this.armas2Posicion + button].bloqueado) {
                    var i;
                    for (i = 0; i < this.armas2Button.length; i++) {
                        this.armas2Button[i].clearTint();
                    }
                    this.armas2Button[button].setTint(0xDEDE7C);
                }
                break;
        }

    }
}