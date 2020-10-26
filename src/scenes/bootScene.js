class bootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {

    }

    create() {
        if (this.sys.game.device.os.desktop) {
            //this.game.Scale = Phaser.Scale.RESIZE;
            this.game.scale.setGameSize(800, 600);
            this.game.scale.scaleMode = Phaser.Scale.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.scale.refresh();
            gameConfig.scale.width=this.cameras.main.width;
            gameConfig.scale.height=this.cameras.main.height;

        }
        console.log("Se ha creado el juego");
        this.scene.start("MenuPrincipalScene");
    }

    update() {

    }
}