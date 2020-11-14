class loadingScene extends Phaser.Scene {
    constructor() {
        super("LoadingScene");
        
    }
    preload(){
        this.load.image('fondo', 'assets/Interfaz/Menu/fondoMenuPrincipal.png');
    }
   
    create(){
        if (this.sys.game.device.os.desktop) {
            //this.game.Scale = Phaser.Scale.RESIZE;
            this.game.scale.setGameSize(1920, 1920*3/4);
            //this.game.scale.setGameSize(800, 600);
            this.game.scale.scaleMode = Phaser.Scale.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.scale.refresh();
            gameConfig.scale.width=this.cameras.main.width;
            gameConfig.scale.height=this.cameras.main.height;
            this.add.text(0,0,"",{font:"20px euphorigenic"});

        }else{
            this.scale.lockOrientation('landscape-primary')
        }
        this.Fondo = this.add.image(0, 0, 'fondo').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        
        this.scene.start("BootScene");
    }
}