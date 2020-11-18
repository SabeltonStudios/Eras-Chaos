class tutorialScene extends Phaser.Scene{

    constructor(){
        super("TutorialScene");
    }
    preload(){
        
    }
    create(){
        this.Fondo = this.add.image(0, 0, 'fondoLoading').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        if (espanol) {
            this.spriteTutorial = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 3 / 7, 'tutorialMultijugador').setScale(gameConfig.scale.height / 600);
            this.buttonContinuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 6 / 7, 'ContinuarB').setScale(gameConfig.scale.height / 600);

        } else {
            this.spriteTutorial = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 3 / 7, 'tutorialMultijugadori').setScale(gameConfig.scale.height / 600);
            this.buttonContinuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 6 / 7, 'ContinuarBi').setScale(gameConfig.scale.height / 600);
        }
        this.buttonContinuar.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); this.scene.start("MultijugadorPartidaScene")});

         //Botón de salir
         this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(gameConfig.scale.height *0.1/ 600);
         this.spriteSalir.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("MultijugadorSeleccionScene")});
    }
}