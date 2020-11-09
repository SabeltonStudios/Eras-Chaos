var selectedMap=0;
var selectedChar1=0;
var selectedChar2=0;
var selectedWeapon1=0;
var selectedWeapon2=0;
//var numRounds;
class multijugadorSeleccionScene extends Phaser.Scene {
    mapasPosicion = 0;
    personajesPosicion = 0;
    personajes2Posicion = 0;
    armasPosicion = 0;
    personajesButton = [];
    personajes2Button = [];
    mapasButton = [];
    armasButton = [];
    constructor() {
        super("MultijugadorSeleccionScene");
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
        this.mapasButton[0].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 0 });

        this.mapasButton[1] = this.add.sprite((gameConfig.scale.width / 6) * 2, gameConfig.scale.height / 4, mapas[1].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[1].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 1 });

        this.mapasButton[2] = this.add.sprite((gameConfig.scale.width / 6) * 3, gameConfig.scale.height / 4, mapas[2].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[2].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 2 });

        this.mapasButton[3] = this.add.sprite((gameConfig.scale.width / 6) * 4, gameConfig.scale.height / 4, mapas[3].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[3].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 3 });

        this.mapasButton[4] = this.add.sprite((gameConfig.scale.width / 6) * 5, gameConfig.scale.height / 4, mapas[4].sprite).setScale(0.7 * gameConfig.scale.height / 600);
        this.mapasButton[4].setInteractive().on('pointerdown', () => { if (!mapas[0].bloqueado) selectedMap = 4 });

        //Flechas derecha e izquierda
        this.spriteIzquierdaMapa = this.add.sprite(gameConfig.scale.width / 25, gameConfig.scale.height / 4, 'flechaIzquierda').setScale(0.28 * gameConfig.scale.height / 600);
        this.spriteIzquierdaMapa.setInteractive().on('pointerdown', () => this.trasladarIzquierda(0));

        this.spriteDerechaMapa = this.add.sprite(gameConfig.scale.width * 24 / 25, gameConfig.scale.height / 4, 'flechaDerecha').setScale(0.28 * gameConfig.scale.height / 600);
        this.spriteDerechaMapa.setInteractive().on('pointerdown', () => this.trasladarDerecha(0));

        //personajes 1
        this.personajesButton[0] = this.add.sprite(gameConfig.scale.width / 8, gameConfig.scale.height / 2, personajes[0].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajesButton[0].setInteractive().on('pointerdown', () => { if (!personajes[0].bloqueado) selectedChar1 = 0 });

        this.personajesButton[1] = this.add.sprite((gameConfig.scale.width / 8) +60, gameConfig.scale.height / 2, personajes[1].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajesButton[1].setInteractive().on('pointerdown', () => { if (!personajes[1].bloqueado) selectedChar1 = 1 });

        this.personajesButton[2] = this.add.sprite((gameConfig.scale.width / 8) +120, gameConfig.scale.height / 2, personajes[2].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajesButton[2].setInteractive().on('pointerdown', () => { if (!personajes[2].bloqueado) selectedChar1 = 2 });

        this.personajesButton[3] = this.add.sprite((gameConfig.scale.width / 8), gameConfig.scale.height / 1.5, personajes[3].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajesButton[3].setInteractive().on('pointerdown', () => { if (!personajes[3].bloqueado) selectedChar1 = 3 });

        this.personajesButton[4] = this.add.sprite((gameConfig.scale.width / 8) +60, gameConfig.scale.height / 1.5, personajes[4].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajesButton[4].setInteractive().on('pointerdown', () => { if (!personajes[4].bloqueado) selectedChar1 = 4 });

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25, gameConfig.scale.height * 7 / 12, 'flechaIzquierda').setScale(0.16 * gameConfig.scale.height / 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () => this.trasladarIzquierda(1));

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width * 10 / 25, gameConfig.scale.height * 7 / 12, 'flechaDerecha').setScale(0.16 * gameConfig.scale.height / 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () => this.trasladarDerecha(1));

        //personajes 2
        this.personajes2Button[0] = this.add.sprite(gameConfig.scale.width *7/ 8 -120, gameConfig.scale.height / 2, personajes[0].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajes2Button[0].setInteractive().on('pointerdown', () => { if (!personajes[0].bloqueado) selectedChar2 = 0 });

        this.personajes2Button[1] = this.add.sprite((gameConfig.scale.width*7 / 8) -60, gameConfig.scale.height / 2, personajes[1].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajes2Button[1].setInteractive().on('pointerdown', () => { if (!personajes[1].bloqueado) selectedChar2 = 1 });

        this.personajes2Button[2] = this.add.sprite((gameConfig.scale.width *7/ 8), gameConfig.scale.height / 2, personajes[2].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajes2Button[2].setInteractive().on('pointerdown', () => { if (!personajes[2].bloqueado) selectedChar2 = 2 });

        this.personajes2Button[3] = this.add.sprite((gameConfig.scale.width*7 / 8)-120, gameConfig.scale.height / 1.5, personajes[3].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajes2Button[3].setInteractive().on('pointerdown', () => { if (!personajes[3].bloqueado) selectedChar2 = 3 });

        this.personajes2Button[4] = this.add.sprite((gameConfig.scale.width*7 / 8) -60, gameConfig.scale.height / 1.5, personajes[4].sprite).setScale(0.4 * gameConfig.scale.height / 600);
        this.personajes2Button[4].setInteractive().on('pointerdown', () => { if (!personajes[4].bloqueado) selectedChar2 = 4 });

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width *15/ 25, gameConfig.scale.height * 7 / 12, 'flechaIzquierda').setScale(0.16 * gameConfig.scale.height / 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () => this.trasladarIzquierda(2));

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width * 24/ 25, gameConfig.scale.height * 7 / 12, 'flechaDerecha').setScale(0.16 * gameConfig.scale.height / 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () => this.trasladarDerecha(2));

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));

        this.spriteJugar = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
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
                    }
                }
                break;
            case 1:
                if (this.personajesPosicion > 0) {
                    this.personajesPosicion--;
                    var i;
                    for (i = 0; i < this.personajesButton.length; i++) {
                        this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].sprite);
                    }
                }
                break;
            case 2:
                if (this.personajes2Posicion > 0) {
                    this.personajes2Posicion--;
                    var i;
                    for (i = 0; i < this.personajes2Button.length; i++) {
                        this.personajes2Button[i].setTexture(personajes[this.personajes2Posicion + i].sprite);
                    }
                }
                break;
            case 3:
                if (this.armasPosicion > 0) {
                    this.armasPosicion--;
                    var i;
                    for (i = 0; i < this.armasButton.length; i++) {
                        this.armassButton[i].setTexture(armas[this.armasPosicion + i].sprite);
                    }
                }
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
                    }
                }
                break;
            case 1:
                if ((this.personajesPosicion + 5) < personajes.length) {
                    this.personajesPosicion++;
                    var i;
                    for (i = 0; i < this.personajesButton.length; i++) {
                        this.personajesButton[i].setTexture(personajes[this.personajesPosicion + i].sprite);
                    }
                }
                break;
            case 2:
                if ((this.armasPosicion + 5) < armas.length) {
                    this.armasPosicion++;
                    var i;
                    for (i = 0; i < this.armasButton.length; i++) {
                        this.armassButton[i].setTexture(armas[this.armasPosicion + i].sprite);
                    }
                }
                break;
        }
    }
}