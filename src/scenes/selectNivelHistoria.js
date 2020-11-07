class selectNivelHistoria extends Phaser.Scene {
    constructor() {
        super("SelectNivelHistoria");
    }
    create() {
        mapasPosicion = 0;

        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if (espanol) {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 7, 'tituloMapas');
            var i;
            for (i = 0; i < mapas.length; i++) {
                if (mapas[i].bloqueado) {
                    mapas[i].sprite = mapas[i].spriteBloqueado;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueado;
                }
            }
        } else {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 7, 'tituloMapasi');
            var i;
            for (i = 0; i < mapas.length; i++) {
                if (mapas[i].bloqueado) {
                    mapas[i].sprite = mapas[i].spriteBloqueadoi;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueadoi;
                }
            }
        }

        //Asignamos los botones a cinco mapas
        mapasButton[0] = this.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height * 1.5 / 3, mapas[0].sprite);
        mapasButton[0].setInteractive().on('pointerdown', () => this.scene.start("PrehistoriaScene"));

        mapasButton[1] = this.add.sprite((gameConfig.scale.width / 6) * 2, gameConfig.scale.height * 1.5 / 3, mapas[1].sprite);
        mapasButton[1].setInteractive().on('pointerdown', ()=>!mapas[1].bloqueado? this.scene.start("EgiptoScene"): console.log("bloqueado"));

        mapasButton[2] = this.add.sprite((gameConfig.scale.width / 6) * 3, gameConfig.scale.height * 1.5 / 3, mapas[2].sprite);
        mapasButton[2].setInteractive().on('pointerdown', ()=>!mapas[2].bloqueado? this.scene.start("MediaScene"): console.log("bloqueado"));

        mapasButton[3] = this.add.sprite((gameConfig.scale.width / 6) * 4, gameConfig.scale.height * 1.5 / 3, mapas[3].sprite);
        mapasButton[3].setInteractive().on('pointerdown', () => this.desbloquear(mapas[3 + mapasPosicion], dinero, 3));

        mapasButton[4] = this.add.sprite((gameConfig.scale.width / 6) * 5, gameConfig.scale.height * 1.5 / 3, mapas[4].sprite);
        mapasButton[4].setInteractive().on('pointerdown', () => this.desbloquear(mapas[4 + mapasPosicion], dinero, 4));

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));
    }
}