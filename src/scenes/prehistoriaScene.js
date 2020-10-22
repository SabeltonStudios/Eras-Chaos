class prehistoriaScene extends Phaser.Scene {
    constructor() {
        super("PrehistoriaScene");
    }

    preload() {
        this.load.image('square', 'assets/images/Imagen1.jpg');
        this.load.image('foto', 'assets/images/descarga.png');
    }

    create() {
        this.player = this.physics.add.sprite(100, 100, 'foto');
        this.player.setVelocity(0,-300);
        this.player.setBounce(1);
        this.player.setCollideWorldBounds(true);
        
        this.spriteParar = this.add.sprite(50,550,'square').setScale(0.1);
        this.spriteParar.setInteractive().on('pointerdown', () => this.player.body.moves=false)
        .on('pointerup', () => this.player.body.moves=true)
        .on('pointerout',() => this.player.body.moves=true);
    }

    update() {

    }
}