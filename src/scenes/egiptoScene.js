var bullets;
var player;
var fireRate = 100;
var nextFire = 0;
var gameOver;
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
        this.load.image('columnaC', 'assets/Fondos/2.AntiguoEgipto/ColumnUp.png');
        this.load.image('columnaD', 'assets/Fondos/2.AntiguoEgipto/ColumnRight.png');
        this.load.image('FreezeBON', 'assets/Interfaz/FreezeButton.png');
        this.load.image('FreezeBOFF', 'assets/Interfaz/FreezeButtonOFF.png');
        this.load.image('ShootBON', 'assets/Interfaz/ShootButton.png');
        this.load.image('ShootBOFF', 'assets/Interfaz/ShootButtonOFF.png');
        this.load.image('PauseBON', 'assets/Interfaz/PauseButton.png');
        this.load.image('PauseBOFF', 'assets/Interfaz/PauseButtonOFF.png');

        this.load.image('PauseMenu', 'assets/Interfaz/Menu/fondoBlanco.png');
        this.load.image('PauseTitle', 'assets/Interfaz/Menu/tituloPaused.png');
        this.load.image('PauseTitlei', 'assets/Interfaz/Menu/tituloPausedi.png');
        this.load.image('botonMenuPral', 'assets/Interfaz/Menu/MainMenu.png');
        this.load.image('botonMenuPrali', 'assets/Interfaz/Menu/MainMenui.png');
        this.load.image('botonTienda', 'assets/Interfaz/Menu/botonTienda.png');
        this.load.image('botonTiendai', 'assets/Interfaz/Menu/botonTiendai.png');

        this.load.spritesheet('dude', 'assets/Interfaz/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('bullet', 'assets/Interfaz/Bullet.png');
    }
    resetLaser(laser) {
        // Destroy the laser
        laser.kill();
    }
    create() {
        this.is_paused = false;
        //this.cameras.main.zoom= 1.3;
        this.cameras.main.zoomTo(1.05, 2000);
        this.physics.world.bounds.setTo(92.5, 69.5, 615, 461);
        this.physics.world.setBoundsCollision(false, false, true, true);

        this.Mapa = this.add.image(0, 0, 'mapa').setOrigin(0)
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);

        this.RectanguloMapa = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'rectangulo');
        this.RectanguloMapa.setScale(this.RectanguloMapa.height / this.Mapa.height * gameConfig.scale.width / this.Mapa.width);

        this.columnas = this.physics.add.staticGroup();

        //Columnas izquierda
        this.columnas.create(gameConfig.scale.width * 0.041, gameConfig.scale.height * 0.21, 'columnaD').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();
        this.columnas.create(gameConfig.scale.width * 0.041, gameConfig.scale.height * 0.712, 'columnaD').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();
        //Columnas centro
        this.columnas.create(gameConfig.scale.width * 0.72, gameConfig.scale.height * 0.0791, 'columnaC').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();//.refreshBody();
        this.columnas.create(gameConfig.scale.width * 0.28, gameConfig.scale.height * 0.0791, 'columnaC').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();
        //Columnas derecha
        this.columnas.create(gameConfig.scale.width * 0.958, gameConfig.scale.height * 0.21, 'columnaD').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();//.refreshBody();
        this.columnas.create(gameConfig.scale.width * 0.958, gameConfig.scale.height * 0.712, 'columnaD').setScale(0.175 * gameConfig.scale.width / 800, 0.175 * gameConfig.scale.height / 600).refreshBody();
        this.aux = this.columnas.getChildren();
        this.aux[0].flipX = true;
        this.aux[1].flipX = true;
        this.aux[2].body.setSize(gameConfig.scale.width / 3, 0.16 * gameConfig.scale.height, false);
        this.aux[3].body.setSize(gameConfig.scale.width / 3, 0.16 * gameConfig.scale.height, false);
        this.aux[3].body.setOffset(-gameConfig.scale.width / 3 + 65, 0);

        player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 5, 'dude');
        player.setPosition( gameConfig.scale.width / 6, gameConfig.scale.height / 5);
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
        this.physics.add.collider(bullets, bullets);

        this.physics.add.collider(bullets, player, hitBomb, null, this);

        this.spriteParar = this.add.sprite(gameConfig.scale.width * 2.2 / 16, gameConfig.scale.height * 11 / 12, 'FreezeBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteParar.setInteractive().on('pointerdown', () => player.body.moves = false /*cambiar a iddle */)
            .on('pointerup', () => player.body.moves = true, player.anims.play('walk', true))
            .on('pointerout', () => player.body.moves = true, player.anims.play('walk', true))
            .on('pointerdown', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('pointerup', () => this.spriteParar.setTexture('FreezeBON'))
            .on('pointerout', () => this.spriteParar.setTexture('FreezeBON'));

        this.spriteDisparar = this.add.sprite(gameConfig.scale.width / 16, gameConfig.scale.height * 11 / 12, 'ShootBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteDisparar.setInteractive().on('pointerdown', () => fire() /*animar disparo */)
            .on('pointerdown', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('pointerup', () => this.spriteDisparar.setTexture('ShootBON'))
            .on('pointerout', () => this.spriteDisparar.setTexture('ShootBON'));

        this.spritePausar = this.add.sprite(gameConfig.scale.width * 15.3 / 16, gameConfig.scale.height / 13, 'PauseBON').setScale(0.07 * gameConfig.scale.width / 800);
        this.spritePausar.setInteractive().on('pointerdown', () => pauseGame(this.spriteParar, this.spriteDisparar, freezeInput, shootInput))
            .on('pointerdown', () => (is_paused ? player.anims.stop() : player.anims.play('walk', true)))
            .on('pointerdown', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('pointerup', () => this.spritePausar.setTexture('PauseBON'))
            .on('pointerout', () => this.spritePausar.setTexture('PauseBON'));

        this.input.keyboard.on('keydown-' + 'ESC', () => this.is_paused = !this.is_paused)
            .on('keydown-' + 'ESC', () => this.pauseGame(this.spriteParar, this.spriteDisparar, freezeInput, shootInput))
            .on('keydown-' + 'ESC', () => !this.is_paused ? player.anims.play('walk', true) : player.anims.stop())
            .on('keydown-' + 'ESC', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('keydown-' + 'ESC', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('keyup-' + 'ESC', () => this.spritePausar.setTexture('PauseBON'));


        var freezeInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        freezeInput.on('down', () => player.body.moves = false /*cambiar a iddle */)
            .on('up', () => player.body.moves = true, player.anims.play('walk', true))
            .on('down', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('up', () => this.spriteParar.setTexture('FreezeBON'));

        var shootInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        shootInput.on('down', () => fire())
            .on('down', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('up', () => this.spriteDisparar.setTexture('ShootBON'));

    }
    mostrarMenu(t) {
        t.Menu = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'PauseMenu').setScale(0.5);
        t.PauseTitle = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height * 0.36, 'PauseTitle').setScale(0.7);
        t.BotonMenu = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.5, 'botonMenuPral');
        t.BotonMenu.setInteractive().on('pointerdown', () => t.scene.start("MenuPrincipalScene"));

        t.BotonTienda = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.6, 'botonTienda');
        t.BotonTienda.setInteractive().on('pointerdown', () => t.scene.start("TiendaScene"));
        if (!espanol) {
            t.PauseTitle.setTexture('PauseTitlei');
            t.BotonMenu.setTexture('botonMenuPrali');
            t.BotonTienda.setTexture('botonTiendai');
        }
    }
    ocultarMenu(t) {
        t.Menu.destroy();
        t.PauseTitle.destroy();
        t.BotonTienda.destroy();
        t.BotonMenu.destroy();
    }
    update() {
        if (gameOver) {
            this.scene.setActive(false);
            this.scene.restart();
        }
    }
    pauseGame(spriteParar, spriteDisparar, f, s) {
        this.bulls = bullets.getChildren();
        if (!this.is_paused) {
            player.body.moves = true;
            var i;
            for (i = 0; i < this.bulls.length; i++) {
                this.bulls[i].body.moves = true;
            }
            spriteParar.setInteractive();
            spriteDisparar.setInteractive();
            f.enabled = true;
            s.enabled = true;
            //this.is_paused = false;
        } else {
            //this.is_paused = true;
            player.body.moves = false;
            var i;
            for (i = 0; i < this.bulls.length; i++) {
                this.bulls[i].body.moves = false;
            }
            f.enabled = false;
            s.enabled = false;
            spriteParar.disableInteractive();
            spriteDisparar.disableInteractive();
        }

    }
}
function hitBomb(player, bomb) {
    bomb.destroy();

    gameOver = true;
}
function fire() {
    if (bullets.isFull()) {
        bullets.remove(bullets.getFirst(true), true);
    }
    var bomb = bullets.create(player.x, player.y, 'bullet').setScale(0.1, 0.05);
    //bomb.setOrigin(0,1);
    bomb.body.setAllowGravity(false);
    bomb.body.setCircle(120, -10, 80);
    bomb.angle = 90;
    /*bomb.body.setBounce(1);
    bomb.body.setVelocity(500, 0);
    bomb.body.setCollideWorldBounds(false);
    bomb.body.collideWorldBounds = true;
    bomb.body.onWorldBounds(() => console.log('Bye'));*/
}


