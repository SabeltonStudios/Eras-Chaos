class loadingScene extends Phaser.Scene {
    constructor() {
        super("LoadingScene");
        
    }
    preload(){
        //Se cargan los sprites necesarios para la pantalla de carga
        this.load.image('fondoLoading', 'assets/Interfaz/Loading/FondoLoading.png');
        this.load.image('textLoading', 'assets/Interfaz/Loading/textLoading.png');
        this.load.spritesheet('loadingSprite', 'assets/Interfaz/Loading/loading-spritesheet.png',
        { frameWidth: 156, frameHeight: 160 })
    }
   //Según el dispositivo en que nos encontremos, la configuración para mostrar en pantalla, difiere
    create(){
        if (this.sys.game.device.os.desktop) {
            this.game.scale.setGameSize(1920, 1920*3/4);
            this.game.scale.scaleMode = Phaser.Scale.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.scale.refresh();
            gameConfig.scale.width=this.cameras.main.width;
            gameConfig.scale.height=this.cameras.main.height;
            this.add.text(0,0,"",{font:"20px euphorigenic"});

        }else{
            this.scale.lockOrientation('landscape');
            gameConfig.scale.width=this.cameras.main.width;
            gameConfig.scale.height=this.cameras.main.height;
            this.add.text(0,0,"",{font:"20px euphorigenic"});
        }
        this.Fondo = this.add.image(0, 0, 'fondo').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        
        //Animación del reloj de arena
        this.anims.create({
            key: 'loading',
            frames: this.anims.generateFrameNumbers('loadingSprite', { start: 0, end: 59 }),
            frameRate: 25,
            repeat: -1
        });
        this.scene.start("BootScene");
        
    }
}