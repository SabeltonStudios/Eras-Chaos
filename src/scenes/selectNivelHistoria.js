let completedLevel = [
    {
        "completado": false
    },
    {
        "completado": false
    },
    {
        "completado": false
    },
    {
        "completado": false
    },
    {
        "completado": false
    }

]
class selectNivelHistoria extends Phaser.Scene {
    constructor() {
        super("SelectNivelHistoria");
    }
    mapasButton = [];
    create() {
        //completedLevel[3].completado=true;
        if (!MenuMusic.isPlaying) {
            MenuMusic.play();
        }
        this.Fondo = this.add.image(0, 0, 'fondoTienda').setOrigin(0);
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        if (espanol) {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 7, 'niveles').setScale(gameConfig.scale.height / 600);
            this.spriteTutorial = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 5.5 / 7, 'tutorialHistoria').setScale(0.8*gameConfig.scale.height / 600);
            var i;
            mapas[0].sprite = mapas[0].spriteDesbloqueado;
            for (i = 1; i < mapas.length; i++) {
                if (!completedLevel[i - 1].completado) {
                    mapas[i].sprite = mapas[i].spriteSelectBloq;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueado;
                }
            }
        } else {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 7, 'nivelesi').setScale(gameConfig.scale.height / 600);
            this.spriteTutorial = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 5.5 / 7, 'tutorialHistoriai').setScale(0.8*gameConfig.scale.height / 600);
            var i;
            mapas[0].sprite = mapas[0].spriteDesbloqueadoi;
            for (i = 1; i < mapas.length; i++) {
                if (!completedLevel[i - 1].completado) {
                    mapas[i].sprite = mapas[i].spriteSelectBloqi;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueadoi;
                }
            }
        }


        //Asignamos los botones a cinco mapas
        this.mapasButton[0] = this.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 3, mapas[0].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[0].setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); MenuMusic.stop(); this.scene.start("PrehistoriaScene") });

        this.mapasButton[1] = this.add.sprite((gameConfig.scale.width / 6) * 2, gameConfig.scale.height / 3, mapas[1].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[1].setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); completedLevel[0].completado ? this.startMapa("EgiptoScene") : this.mostrarMensaje() });

        this.mapasButton[2] = this.add.sprite((gameConfig.scale.width / 6) * 3, gameConfig.scale.height / 3, mapas[2].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[2].setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); completedLevel[1].completado ? this.startMapa("MediaScene") : this.mostrarMensaje() });

        this.mapasButton[3] = this.add.sprite((gameConfig.scale.width / 6) * 4, gameConfig.scale.height / 3, mapas[3].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[3].setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 });; completedLevel[2].completado ? this.startMapa("IndustrialScene") : this.mostrarMensaje() });

        this.mapasButton[4] = this.add.sprite((gameConfig.scale.width / 6) * 5, gameConfig.scale.height / 3, mapas[4].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[4].setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); completedLevel[3].completado ? this.startMapa("ContempScene") : this.mostrarMensaje() });

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("MenuPrincipalScene") });
    }
    startMapa(escena){
        MenuMusic.stop();
        this.scene.start(escena)
    }
    mostrarMensaje() {
        for (let i = 0; i < this.mapasButton.length; i++) {
            this.mapasButton[i].disableInteractive();
        }
        this.spriteSalir.disableInteractive();
        if (espanol) {
            this.aviso = this.add.text(gameConfig.scale.width / 2, gameConfig.scale.height /2, 'No has completado\nel nivel anterior', { font: "25px euphorigenic", fill: '#ffffff', align: "center" }).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
        } else {
            this.aviso = this.add.text(gameConfig.scale.width / 2, gameConfig.scale.height /2, 'You have not completed\nthe previous level', { font: "25px euphorigenic", fill: '#ffffff', align: "center" }).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
        }
        this.botonCerrar = this.add.sprite(this.aviso.x + this.aviso.displayWidth / 2+40, this.aviso.y + this.aviso.displayHeight / 2 -80, 'CloseB').setOrigin(0.5, 0).setScale(0.07 * gameConfig.scale.height / 600);

        this.botonCerrar.setInteractive().on('pointerdown', () => {
            this.sound.play('buttonSound', { volume: 0.15 });
            this.aviso.destroy();
            this.botonCerrar.destroy()
            for (let i = 0; i < this.mapasButton.length; i++) {
                this.mapasButton[i].setInteractive();
            }
            this.spriteSalir.setInteractive();
        });
    }
}