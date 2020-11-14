class loadingScene extends Phaser.Scene {
    constructor() {
        super("LoadingScene");
        
    }
    preload(){
        this.load.image('fondo', 'assets/Interfaz/Menu/fondoMenuPrincipal.png');
    }
   
    create(){
        this.scene.start("BootScene");
    }
}