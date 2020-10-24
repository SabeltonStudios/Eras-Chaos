class prehistoriaScene extends Phaser.Scene {
    constructor() {
        super("PrehistoriaScene");
    }

    preload() {
        this.load.image('square', 'assets/images/Imagen1.jpg');
        this.load.image('foto', 'assets/images/descarga.png');
    }

    create() {

        this.player = this.physics.add.sprite(gameConfig.scale.width/8, gameConfig.scale.height/6, 'foto');
        this.player.setVelocity(0,-300);
        this.player.setBounce(1);
        this.player.setCollideWorldBounds(true);
        
        this.spriteParar = this.add.sprite(gameConfig.scale.width/16,gameConfig.scale.height*11/12,'square').setScale(0.1);
        this.spriteParar.setInteractive().on('pointerdown', () => this.player.body.moves=false)
        .on('pointerup', () => this.player.body.moves=true)
        .on('pointerout',() => this.player.body.moves=true);

        var freezeInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        freezeInput.on('down', () => this.player.body.moves=false)
        .on('up', () => this.player.body.moves=true);

        var shootInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        shootInput.on('down', () => console.log('Shoot'))
    }

    update() {

    }
}