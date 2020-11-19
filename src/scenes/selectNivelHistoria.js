//Array para conocer los niveles que han sido ya completados
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
        if (!MenuMusic.isPlaying) {
            MenuMusic.play();
        }
        this.Fondo = this.add.image(0, 0, 'fondoTienda').setOrigin(0);
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        //Asignación de sprites según el idioma y si el nivel ha sido desbloqueado o no
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
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.15 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("MenuPrincipalScene") });
    }
    //Carga del nivel seleccionado
    startMapa(escena){
        MenuMusic.stop();
        this.scene.start(escena)
    }
    //Mensaje indicativo de que no se ha desbloqueado el nivel. Desaparece tras 1 segundo
    mostrarMensaje() {
        if(espanol){
            this.comprado = this.add.text(gameConfig.scale.width / 2,gameConfig.scale.height/2,'No has desbloqueado el nivel anterior',{font:"35px euphorigenic", fill: '#FFFFFF' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
        }else{
            this.comprado = this.add.text(gameConfig.scale.width / 2,gameConfig.scale.height/2,'You have not completed the previous level',{font:"35px euphorigenic", fill: '#FFFFFF' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
        }
        this.comprado.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
        var timer = this.time.delayedCall(1000, ()=>this.comprado.destroy(), []);
    }
}