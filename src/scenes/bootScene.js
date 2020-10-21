class bootScene extends Phaser.Scene{
    constructor(){
        super("BootScene");
    }

    preload(){

    }

    create(){
        console.log("Se ha creado el juego");
        this.scene.start("MenuPrincipalScene");
    }

    update(){

    }
}