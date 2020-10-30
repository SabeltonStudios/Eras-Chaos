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
class prehistoriaScene extends Phaser.Scene {
    constructor() {
        super("PrehistoriaScene");
    }

    preload() {
        this.load.image('mapa', 'assets/Fondos/1.Prehistoria/Prehistoria.png');

        this.load.image('FreezeBON', 'assets/Interfaz/FreezeButton.png');
        this.load.image('FreezeBOFF', 'assets/Interfaz/FreezeButtonOFF.png');

        this.load.image('ShootBON', 'assets/Interfaz/ShootButton.png');
        this.load.image('ShootBOFF', 'assets/Interfaz/ShootButtonOFF.png');

        this.load.image('PauseBON', 'assets/Interfaz/PauseButton.png');
        this.load.image('PauseBOFF', 'assets/Interfaz/PauseButtonOFF.png');

        this.load.image('PauseMenu', 'assets/Interfaz/Menu/fondoBlanco.png');
        this.load.image('botonMenuPral', 'assets/Interfaz/Menu/boton2Jugadores.png');
        this.load.image('botonTienda', 'assets/Interfaz/Menu/botonTienda.png');

        this.load.spritesheet('dude', 'assets/Interfaz/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('bullet', 'assets/Interfaz/Bullet.png');
    }
    resetLaser(laser) {
        // Destroy the laser
        laser.kill();
    }
    create() {
        //this.cameras.main.zoom= 1.3;
        this.cameras.main.zoomTo(1.05, 1000);
        this.physics.world.bounds.setTo(92.5, 69.5, 615, 461);
        this.physics.world.setBoundsCollision(false, false, true, true);

        this.Mapa = this.add.image(0, 0, 'mapa').setOrigin(0)
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);

        player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'dude');
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        player.anims.play('walk', true);
        player.setVelocity(0, -200);
        player.setBounce(1);
        player.body.setAllowGravity(false);
        player.setCollideWorldBounds(true)
        /*var wall = this.add.graphics();
        wall.fillStyle(0xff0000, 1);
        wall.fillRect(gameConfig.scale.width * 0.8, gameConfig.scale.height / 2, 20, gameConfig.scale.height);
        
        this.physics.world.enable(wall);
        wall.body.setAllowGravity(false);
        wall.body.setSize(200, 200);*/

        bullets = this.physics.add.group(config);
        Phaser.Actions.Call(bullets.getChildren(), function (bullet) {
            bullet.body.onWorldBounds = true;
        });
        //this.physics.add.collider(bullets, wall);

        this.physics.world.on('worldbounds', () => console.log('Bye'));
/*
        this.rock = new Phaser.Geom.Circle(gameConfig.scale.width / 20, gameConfig.scale.height * 11.5 / 12, 200);
        //this.r=this.add.ellipse( gameConfig.scale.width/20, gameConfig.scale.height*11.5/12,200,200, 0xff0000);
        this.house = new Phaser.Geom.Circle(gameConfig.scale.width / 20, gameConfig.scale.height / 24, 250);
        //this.r=this.add.ellipse( gameConfig.scale.width/20, gameConfig.scale.height/24,250,250, 0xff0000);
        
        //new Phaser.Geom.Rectangle(gameConfig.scale.width * 0.98, gameConfig.scale.height / 2, 20, gameConfig.scale.height);
        //this.r=this.add.ellipse( gameConfig.scale.width*0.98, gameConfig.scale.height/2,20, gameConfig.scale.height, 0xff0000);
        this.physics.world.enable(this.rock);
        this.physics.world.enable(this.house);
        

        this.physics.add.collider(bullets, this.rock);
        this.physics.add.collider(bullets, this.house);*/
        

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
            .on('pointerdown', () => is_paused ? this.mostrarMenu(this) : this.ocultarMenu(this))
            .on('pointerup', () => this.spritePausar.setTexture('PauseBON'))
            .on('pointerout', () => this.spritePausar.setTexture('PauseBON'));

        var pauseInput = this.input.keyboard.addKey('ESC');
        pauseInput.on('down', () => pauseGame(this.spriteParar, this.spriteDisparar, freezeInput, shootInput))
            .on('down', () => is_paused ? player.anims.stop() : player.anims.play('walk', true))
            .on('down', () => is_paused ? this.mostrarMenu(this) : this.ocultarMenu(this))
            .on('down', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('up', () => this.spritePausar.setTexture('PauseBON'));

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
        this.Menu = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'PauseMenu').setScale(0.5);

        this.BotonMenu = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.5, 'botonMenuPral');
        this.BotonMenu.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));

        this.BotonTienda = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.6, 'botonTienda');
        this.BotonTienda.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }
    ocultarMenu(t) {
        t.Menu.destroy();
        t.BotonTienda.destroy();
        t.BotonMenu.destroy();
    }
    update() {
    }
}
function fire() {
    if (bullets.isFull()) {
        bullets.remove(bullets.getFirst(true), true);
    }
    var bomb = bullets.create(player.x, player.y, 'bullet').setScale(0.1);
    //bomb.setOrigin(0, 0);
    bomb.angle = 90;
    bomb.body.setAllowGravity(false);
    bomb.body.setCircle(100);
    /*bomb.body.setBounce(1);
    bomb.body.setVelocity(500, 0);
    bomb.body.setCollideWorldBounds(false);
    bomb.body.collideWorldBounds = true;
    bomb.body.onWorldBounds(() => console.log('Bye'));*/
}

function pauseGame(spriteParar, spriteDisparar, f, s) {
    this.bulls = bullets.getChildren();
    if (is_paused) {
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

