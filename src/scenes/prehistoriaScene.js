class prehistoriaScene extends Phaser.Scene {
    bulletsPre;
    EnemyBulletsPre;
    player;
    enemy;
    gameOver;
    win;
    configPre = {
        classType: Phaser.GameObjects.Image,
        defaultKey: 'bullet',
        defaultFrame: null,
        active: true,
        maxSize: 5,
        bounceX: 1,
        bounceY: 1,
        velocityX: 500,
        velocityY: 0,
    }
    EnemyConfigPre = {
        classType: Phaser.GameObjects.Image,
        defaultKey: 'enemyBullet',
        defaultFrame: null,
        active: true,
        maxSize: 5,
        bounceX: 1,
        bounceY: 1,
        velocityX: -500,
        velocityY: 0,
    }
    constructor() {
        super("PrehistoriaScene");
    }

    preload() {
        this.load.image('mapaPre', 'assets/Fondos/1.Prehistoria/Background.png');

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
        this.gameOver = false;
        this.win = false;
        this.is_paused = false;
        //this.cameras.main.zoom= 1.3;
        this.cameras.main.zoomTo(1.05, 1000);
        this.physics.world.bounds.setTo(92.5, 69.5, 615, 461);
        this.physics.world.setBoundsCollision(false, false, true, true);

        this.Mapa = this.add.image(0, 0, 'mapaPre').setOrigin(0)
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);

        this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'dude');
        this.player.body.immovable = true;
        this.enemy = this.physics.add.sprite(gameConfig.scale.width * 5 / 6, gameConfig.scale.height * 5 / 6, 'dude');
        this.enemy.flipX = true;
        this.enemy.body.immovable = true;
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.player.anims.play('walk', true);
        this.player.setVelocity(0, -200);
        this.player.setBounce(1);
        this.player.body.setAllowGravity(false);
        this.player.setCollideWorldBounds(true);

        this.enemy.anims.play('walk', true);
        this.enemy.setVelocity(0, 240);
        this.enemy.setBounce(1);
        this.enemy.body.setAllowGravity(false);
        this.enemy.setCollideWorldBounds(true);

        var wallR = this.add.rectangle(gameConfig.scale.width + 20, gameConfig.scale.height / 2, 20, gameConfig.scale.height);
        this.physics.add.existing(wallR);
        wallR.body.setAllowGravity(false);
        wallR.body.setSize(20, gameConfig.scale.width);
        wallR.body.immovable = true;
        var wallL = this.add.rectangle(-20, gameConfig.scale.height / 2, 20, gameConfig.scale.height);
        this.physics.add.existing(wallL);
        wallL.body.setAllowGravity(false);
        wallL.body.setSize(20, gameConfig.scale.width);
        wallL.body.immovable = true;
        var wallU = this.add.rectangle(gameConfig.scale.width / 2, -20, gameConfig.scale.width, 20);
        this.physics.add.existing(wallU);
        wallU.body.setAllowGravity(false);
        wallU.body.setSize(gameConfig.scale.height, 20);
        wallU.body.immovable = true;
        var wallD = this.add.rectangle(gameConfig.scale.width / 2, gameConfig.scale.height + 20, gameConfig.scale.width, 20);
        this.physics.add.existing(wallD);
        wallD.body.setAllowGravity(false);
        wallD.body.setSize(gameConfig.scale.height, 20);
        wallD.body.immovable = true;

        this.EnemyBulletsPre = this.physics.add.group(this.EnemyConfigPre);
        Phaser.Actions.Call(this.EnemyBulletsPre.getChildren(), function (bullet) {
            //if(bullet.position.x>gameConfig.scale.width){bullet.destroy();}
        });
        this.bulletsPre = this.physics.add.group(this.configPre);
        Phaser.Actions.Call(this.bulletsPre.getChildren(), function (bullet) {
            //if(bullet.position.x>gameConfig.scale.width){bullet.destroy();}
        });
        this.physics.add.collider(wallR, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });

        this.physics.add.collider(wallR, this.EnemyBulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.EnemyBulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.EnemyBulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.EnemyBulletsPre, function (wall, bullet) { bullet.destroy(); });

        this.physics.add.collider(this.player, this.bulletsPre, ()=> this.gameOver = true );
        this.physics.add.collider(this.player, this.EnemyBulletsPre, ()=> this.gameOver = true);
        this.physics.add.collider(this.enemy, this.bulletsPre, ()=> this.win = true );
        this.physics.add.collider(this.bulletsPre, this.bulletsPre);
        this.physics.add.collider(this.bulletsPre, this.EnemyBulletsPre);

        this.rock = this.add.ellipse(gameConfig.scale.width / 20, gameConfig.scale.height * 11.5 / 12, 200, 200);
        this.house = this.add.ellipse(gameConfig.scale.width / 20, gameConfig.scale.height / 24, 250, 250);
        this.physics.add.existing(this.house);
        this.physics.add.existing(this.rock);
        this.rock.body.setAllowGravity(false);
        this.rock.body.setCircle(100, 0, 0);
        this.rock.body.immovable = true;
        this.house.body.immovable = true;
        this.house.body.setAllowGravity(false);
        this.house.body.setCircle(125, 0, 0);

        this.physics.add.collider(this.EnemyBulletsPre, this.rock);
        this.physics.add.collider(this.EnemyBulletsPre, this.house);
        this.physics.add.collider(this.bulletsPre, this.rock);
        this.physics.add.collider(this.bulletsPre, this.house);


        this.spriteParar = this.add.sprite(gameConfig.scale.width * 2.2 / 16, gameConfig.scale.height * 11 / 12, 'FreezeBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteParar.setInteractive().on('pointerdown', () => this.player.body.moves = false /*cambiar a iddle */)
            .on('pointerup', () => this.player.body.moves = true, this.player.anims.play('walk', true))
            .on('pointerout', () => this.player.body.moves = true, this.player.anims.play('walk', true))
            .on('pointerdown', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('pointerup', () => this.spriteParar.setTexture('FreezeBON'))
            .on('pointerout', () => this.spriteParar.setTexture('FreezeBON'));

        this.spriteDisparar = this.add.sprite(gameConfig.scale.width / 16, gameConfig.scale.height * 11 / 12, 'ShootBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteDisparar.setInteractive().on('pointerdown', () => this.fire() /*animar disparo */)
            .on('pointerdown', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('pointerup', () => this.spriteDisparar.setTexture('ShootBON'))
            .on('pointerout', () => this.spriteDisparar.setTexture('ShootBON'));

        this.spritePausar = this.add.sprite(gameConfig.scale.width * 15.3 / 16, gameConfig.scale.height / 13, 'PauseBON').setScale(0.07 * gameConfig.scale.width / 800);
        this.spritePausar.setInteractive().on('pointerdown', () => this.is_paused = !this.is_paused)
            .on('pointerdown', () => this.pauseGame(this.spriteParar, this.spriteDisparar, freezeInput, shootInput))
            .on('pointerdown', () => !this.is_paused ? this.player.anims.play('walk', true) : this.player.anims.stop())
            .on('pointerdown', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('pointerdown', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('pointerup', () => this.spritePausar.setTexture('PauseBON'))
            .on('pointerout', () => this.spritePausar.setTexture('PauseBON'));


        var freezeInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        freezeInput.on('down', () => this.player.body.moves = false /*cambiar a iddle */)
            .on('up', () => this.player.body.moves = true, this.player.anims.play('walk', true))
            .on('down', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('up', () => this.spriteParar.setTexture('FreezeBON'));

        var shootInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        shootInput.on('down', () => this.fire())
            .on('down', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('up', () => this.spriteDisparar.setTexture('ShootBON'));

        this.input.keyboard.on('keydown-' + 'ESC', () => this.is_paused = !this.is_paused)
            .on('keydown-' + 'ESC', () => this.pauseGame(this.spriteParar, this.spriteDisparar, freezeInput, shootInput))
            .on('keydown-' + 'ESC', () => !this.is_paused ? this.player.anims.play('walk', true) : this.player.anims.stop())
            .on('keydown-' + 'ESC', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('keydown-' + 'ESC', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('keyup-' + 'ESC', () => this.spritePausar.setTexture('PauseBON'));

        setInterval(this.fireEnemy, 1000);
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
        if (this.gameOver) {
            this.scene.setActive(false);
            this.scene.restart();
        }
        if (this.win) {
            this.scene.setActive(false);
            this.scene.start("EgiptoScene");
        }
    }
    pauseGame(spriteParar, spriteDisparar, f, s) {
        this.bulls = this.bulletsPre.getChildren();
        this.ebulls = this.EnemyBulletsPre.getChildren();
        if (!this.is_paused) {
            this.player.body.moves = true;
            this.enemy.body.moves = true;
            for (let i = 0; i < this.bulls.length; i++) {
                this.bulls[i].body.moves = true;
            }
            for (let i = 0; i < this.ebulls.length; i++) {
                this.ebulls[i].body.moves = true;
            }
            spriteParar.setInteractive();
            spriteDisparar.setInteractive();
            f.enabled = true;
            s.enabled = true;
            //this.is_paused = false;
        } else {
            //this.is_paused = true;
            this.player.body.moves = false;
            this.enemy.body.moves = false;
            for (let i = 0; i < this.bulls.length; i++) {
                this.bulls[i].body.moves = false;
            }
            for (let i = 0; i < this.ebulls.length; i++) {
                this.ebulls[i].body.moves = true;
            }
            f.enabled = false;
            s.enabled = false;
            spriteParar.disableInteractive();
            spriteDisparar.disableInteractive();
        }

    }
    fireEnemy() {
        if (this.EnemyBulletsPre.isFull()) {
            //bullets.remove(bullets.getFirst(true), true);
            this.EnemyBulletsPre.getFirst(true).destroy();
        }
        var EnemyBomb = this.EnemyBulletsPre.create(this.enemy.x - 10, this.enemy.y, 'bullet').setScale(0.1, 0.05);
        EnemyBomb.body.setAllowGravity(false);
        EnemyBomb.body.setCircle(120, -10, 80);
        EnemyBomb.angle = 270;
    }
    fire() {
        if (this.bulletsPre.isFull()) {
            //bullets.remove(bullets.getFirst(true), true);
            this.bulletsPre.getFirst(true).destroy();
        }
        var bomb = this.bulletsPre.create(this.player.x + 10, this.player.y, 'bullet').setScale(0.1, 0.05);
        //bomb.setOrigin(0,1);
        bomb.body.setAllowGravity(false);
        bomb.body.setCircle(120, -10, 80);
        bomb.angle = 90;
    }
}
