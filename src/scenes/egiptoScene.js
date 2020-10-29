var bullets;
var player;
var fireRate = 100;
var nextFire = 0;
var is_paused = false;
var config = {

    classType: Phaser.GameObjects.Image,
    defaultKey: 'bullet',
    defaultFrame: null,
    active: true,
    maxSize: 2,
    bounceX: 1,
    bounceY: 1,
    velocityX: 500,
    velocityY: 0,
}
class egiptoScene extends Phaser.Scene {
    constructor() {
        super("EgiptoScene");
    }

    preload() {
        this.load.image('mapa', 'assets/Fondos/2.AntiguoEgipto/BackgroundNoColumns.png');
        this.load.image('rectangulo', 'assets/Fondos/2.AntiguoEgipto/RectanguloCentral.png');
        this.load.image('columnaI', 'assets/Fondos/2.AntiguoEgipto/ColumnLeft.png');
        this.load.image('columnaC', 'assets/Fondos/2.AntiguoEgipto/ColumnUp.png');
        this.load.image('columnaD', 'assets/Fondos/2.AntiguoEgipto/ColumnRight.png');
        this.load.image('FreezeB', 'assets/Interfaz/FreezeButton.png');
        this.load.image('ShootB', 'assets/Interfaz/ShootButton.png');
        this.load.image('PauseB', 'assets/Interfaz/PauseButton.png');
        this.load.spritesheet('dude', 'assets/Interfaz/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('bullet', 'assets/Interfaz/Bullet.png');
    }
    resetLaser(laser) {
        // Destroy the laser
        laser.kill();
    }
    create() {
        //this.cameras.main.zoom= 1.3;
        this.cameras.main.zoomTo(1.05, 2000);
        this.physics.world.bounds.setTo(92.5, 69.5, 615, 461);
        this.physics.world.setBoundsCollision(false, false, true, true);

        this.Mapa = this.add.image(0, 0, 'mapa').setOrigin(0)
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);

        this.RectanguloMapa = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'rectangulo');
        this.RectanguloMapa.setScale(this.RectanguloMapa.height / this.Mapa.height * gameConfig.scale.width / this.Mapa.width);

        this.columnas = this.physics.add.staticGroup();

        //Columnas centro
        this.columnas.create(gameConfig.scale.width * 0.72, gameConfig.scale.height * 0.0791, 'columnaC').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();//.refreshBody();
        this.columnas.create(gameConfig.scale.width * 0.28, gameConfig.scale.height * 0.0791, 'columnaC').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();
        //Columnas derecha
        this.columnas.create(gameConfig.scale.width * 0.958, gameConfig.scale.height * 0.21, 'columnaD').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();//.refreshBody();
        this.columnas.create(gameConfig.scale.width * 0.958, gameConfig.scale.height * 0.712, 'columnaD').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();
        //Columnas izquierda
        this.columnas.create(gameConfig.scale.width * 0.041, gameConfig.scale.height * 0.21, 'columnaI').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();
        this.columnas.create(gameConfig.scale.width * 0.041, gameConfig.scale.height * 0.712, 'columnaI').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();

        player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'dude');
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        player.anims.play('walk', true);
        player.setVelocity(0, -300);
        player.setBounce(1);
        player.body.setAllowGravity(false);
        player.setCollideWorldBounds(true)

        bullets = this.physics.add.group(config);
        Phaser.Actions.Call(bullets.getChildren(), function (bullet) {
            bullet.body.onWorldBounds = true;
        });
        this.physics.add.collider(bullets, this.columnas);


        this.spriteParar = this.add.sprite(gameConfig.scale.width * 2.2 / 16, gameConfig.scale.height * 11 / 12, 'FreezeB').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteParar.setInteractive().on('pointerdown', () => player.body.moves = false /*cambiar a iddle */)
            .on('pointerup', () => player.body.moves = true, player.anims.play('walk', true))
            .on('pointerout', () => player.body.moves = true, player.anims.play('walk', true));

        this.spriteDisparar = this.add.sprite(gameConfig.scale.width / 16, gameConfig.scale.height * 11 / 12, 'ShootB').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteDisparar.setInteractive().on('pointerdown', () => fire() /*animar disparo */);

        this.spritePausar = this.add.sprite(gameConfig.scale.width * 15.3 / 16, gameConfig.scale.height / 13, 'PauseB').setScale(0.07 * gameConfig.scale.width / 800);
        this.spritePausar.setInteractive().on('pointerdown', () => pauseGame(this.spriteParar, this.spriteDisparar, freezeInput, shootInput));

        var pauseInput = this.input.keyboard.addKey('ESC');
        pauseInput.on('down', () => pauseGame(this.spriteParar, this.spriteDisparar, freezeInput, shootInput));

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
    bomb.body.setCircle(45);
    /*bomb.body.setBounce(1);
    bomb.body.setVelocity(500, 0);
    bomb.body.setCollideWorldBounds(false);
    bomb.body.collideWorldBounds = true;
    bomb.body.onWorldBounds(() => console.log('Bye'));*/
}
function pauseGame(spriteParar, spriteDisparar, f, s) {
    this.bulls = bullets.getChildren();
    if (is_paused) {
        //menu.destroy();
        player.body.moves = true;

        var i;
        for (i = 0; i < this.bulls.length; i++) {
            bulls[i].body.moves = true;
        }
        spriteParar.setInteractive();
        spriteDisparar.setInteractive();
        f.enabled = true;
        s.enabled = true;
        is_paused = false;
    } else {
        //menu.pintar
        is_paused = true;
        player.body.moves = false;
        var i;
        for (i = 0; i < this.bulls.length; i++) {
            bulls[i].body.moves = false;
        }
        f.enabled = false;
        s.enabled = false;
        spriteParar.disableInteractive();
        spriteDisparar.disableInteractive();
    }

}

