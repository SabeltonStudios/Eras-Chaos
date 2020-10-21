class menuPrincipalScene extends Phaser.Scene{
    constructor(){
        super("MenuPrincipalScene");
    }

    preload(){
        this.load.image('square', 'assets/images/Imagen1.jpg');
        this.load.image('foto', 'assets/images/descarga.png');
    }

    create(){
        this.add.image(400,300,'square');
        this.add.image(400,300,'foto');
    }

    update(){

    }
}