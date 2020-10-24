var bullets;
var player;
var fireRate = 100;
var nextFire = 0;
var config = {

    classType: Phaser.GameObjects.Image,
    defaultKey: 'bullet',
    defaultFrame: null,
    active: true,
    maxSize: 2,
    bounceX: 1,
    bounceY: 1,
    collideWorldBounds: true,
    velocityX: 500,
    velocityY: 0,
}
class prehistoriaScene extends Phaser.Scene {
    constructor() {
        super("PrehistoriaScene");
    }

    preload() {
        this.load.image('mapa', 'assets/images/MapaEgipto.jpg');
        this.load.image('square', 'assets/images/Imagen1.jpg');
        this.load.image('foto', 'assets/images/descarga.png');
        this.load.spritesheet('dude', 'assets/images/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('bullet', 'assets/images/Bullet.png');
    }
    resetLaser(laser) {
        // Destroy the laser
        laser.kill();
    }
    create() {

        this.Mapa = this.add.image(0, 0, 'mapa').setOrigin(0)
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);

        player = this.physics.add.sprite(gameConfig.scale.width / 8, gameConfig.scale.height / 6, 'dude');
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        player.anims.play('walk', true);
        player.setVelocity(0, -300);
        player.setBounce(1);
        player.setCollideWorldBounds(true)

        bullets = this.physics.add.group(config);
        Phaser.Actions.Call(bullets.getChildren(), function (bullet) {
            bullet.body.onWorldBounds = true;
        });
    
        this.physics.world.on('worldbounds',()=>console.log('Bye'));

        this.spriteParar = this.add.sprite(gameConfig.scale.width / 16, gameConfig.scale.height * 11 / 12, 'square').setScale(0.1);
        this.spriteParar.setInteractive().on('pointerdown', () => player.body.moves = false /*cambiar a iddle */)
            .on('pointerup', () => player.body.moves = true, player.anims.play('walk', true))
            .on('pointerout', () => player.body.moves = true, player.anims.play('walk', true));

        var freezeInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        freezeInput.on('down', () => player.body.moves = false /*cambiar a iddle */)
            .on('up', () => player.body.moves = true, player.anims.play('walk', true));

        var shootInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        shootInput.on('down', () => fire());



    }



    update() {
        //console.log(bullets.countActive());
    }
}
function fire() {
    if (bullets.isFull()) {
        bullets.remove(bullets.getFirst(true), true);
    }
    var bomb = bullets.create(player.x, player.y, 'bullet').setScale(0.1);
    bomb.setOrigin(0, 0);
    bomb.angle = 90;
    bomb.body.setAllowGravity(false);
    /*bomb.body.setBounce(1);
    bomb.body.setVelocity(500, 0);
    bomb.body.setCollideWorldBounds(false);
    bomb.body.collideWorldBounds = true;
    bomb.body.onWorldBounds(() => console.log('Bye'));*/
}

