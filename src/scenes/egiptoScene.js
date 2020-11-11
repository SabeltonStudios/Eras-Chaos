class egiptoScene extends Phaser.Scene {
    bulletsPre;
    bulletsEnemy;
    obstacles;
    player;
    enemy;
    gameOver;
    win;
    music;
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
        defaultKey: 'bullet',
        defaultFrame: null,
        active: true,
        maxSize: 5,
        bounceX: 1,
        bounceY: 1,
        velocityX: -500,
        velocityY: 0,
    }
    mConfig = {
        mute: false,
        volume: 0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
    }
    ObstaclesConfig = {
        classType: Phaser.GameObjects.Image,
        defaultKey: 'obstacle',
        defaultFrame: null,
        active: true,
        immovable: true,
    }
    constructor() {
        super("EgiptoScene");
    }

    preload() {
        /*this.load.image('mapaEgipto', 'assets/Fondos/2.AntiguoEgipto/BackgroundNoColumns.png');
        this.load.image('rectanguloEgipto', 'assets/Fondos/2.AntiguoEgipto/RectanguloCentral.png');
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

        this.load.image('egiCat', 'assets/Objetos/2.AntiguoEgipto/object_cats.png');
        this.load.image('egiCup', 'assets/Objetos/2.AntiguoEgipto/object_cup.png');
        this.load.image('egiPyr', 'assets/Objetos/2.AntiguoEgipto/object_pyramid.png');

        this.load.audio('egiMusic', ['assets/Música/PrehistoriaFinal.mp3']);//, 'assets/Música/PrehistoriaFinal.ogg']);

        //this.load.spritesheet('dude', 'assets/Interfaz/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('egiPlayer', 'assets/Personajes/2.AntiguoEgipto/BasicoEgipto.png');
        //this.load.image('bullet', 'assets/Interfaz/Bullet.png');
        this.load.spritesheet('axe', 'assets/Armas/ArmaEgipto.png', { frameWidth: 235, frameHeight: 235 });*/
    }

    create() {
        if (this.music == null) {
            this.music = this.sound.add('egiMusic');
        }
        if (!this.gameOver) {
            this.music.play(this.mConfig);
        }
        this.gameOver = false;
        this.win = false;
        this.is_paused = false;
        //this.cameras.main.zoom= 1.3;
        this.cameras.main.zoomTo(1.05, 2000);
        this.physics.world.bounds.setTo(92.5 * gameConfig.scale.width / 800, 69.5 * gameConfig.scale.width / 800, 615 * gameConfig.scale.height / 600, 461 * gameConfig.scale.height / 600);
        this.physics.world.setBoundsCollision(false, false, true, true);

        this.Mapa = this.add.image(0, 0, 'egiMap').setOrigin(0)
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);

        this.RectanguloMapa = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'rectanguloEgipto');
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
        this.aux[3].body.setOffset(-gameConfig.scale.width / 3 + 65* gameConfig.scale.width / 800, 0);

        this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'egiPlayer').setScale(0.07 * gameConfig.scale.width / 800)// * gameConfig.scale.width/800 );
        this.player.body.immovable = true;
        this.enemy = this.physics.add.sprite(gameConfig.scale.width * 5 / 6, gameConfig.scale.height / 2, 'egiPlayer').setScale(0.07 * gameConfig.scale.width / 800)// * gameConfig.scale.width/800);
        this.enemy.flipX = true;
        this.enemy.body.immovable = true;
        this.anims.create({
            key: 'shoot',
            frames: this.anims.generateFrameNumbers('egiWeapon', { start: 0, end: 7 }),
            frameRate: 20,
            repeat: -1
        });
        /*this.player.anims.play('walk', true);*/
        this.player.setVelocity(0, -270 * gameConfig.scale.height / 600);
        this.player.setBounce(1);
        this.player.body.setAllowGravity(false);
        this.player.setCollideWorldBounds(true);

        //this.enemy.anims.play('walk', true);
        this.enemy.setVelocity(0, 300 * gameConfig.scale.height / 600);
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

        this.bulletsPre = this.physics.add.group(this.configPre);
        Phaser.Actions.Call(this.bulletsPre.getChildren(), function (bullet) {
            //if(bullet.position.x>gameConfig.scale.width){bullet.destroy();}
        });
        this.bulletsEnemy = this.physics.add.group(this.EnemyConfigPre);
        Phaser.Actions.Call(this.bulletsEnemy.getChildren(), function (bullet) { });

        this.obstacles = this.physics.add.group(this.ObstaclesConfig);
        this.obstacles.setOrigin(0.5, 0.5);
        this.obstacles.create(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'egiCat').setScale(0.1 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width / 2.1, gameConfig.scale.height * 0.25, 'egiCup').setScale(0.1 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(110, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width / 1.9, gameConfig.scale.height * 0.77, 'egiPyr').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.4, gameConfig.scale.height * 0.6, 'egiCat').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.39, gameConfig.scale.height * 0.42, 'egiPyr').setScale(0.1 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(110, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.61, gameConfig.scale.height * 0.62, 'egiCat').setScale(0.1 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.6, gameConfig.scale.height * 0.4, 'egiCup').setScale(0.12 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(112, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.3, gameConfig.scale.height * 0.3, 'egiPyr').setScale(0.10 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.31, gameConfig.scale.height * 0.7, 'egiCup').setScale(0.10 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.69, gameConfig.scale.height * 0.32, 'egiPyr').setScale(0.10 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(110, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.7, gameConfig.scale.height * 0.7, 'egiCup').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.39, gameConfig.scale.height * 0.15, 'egiCat').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.4, gameConfig.scale.height * 0.87, 'egiCup').setScale(0.1 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(110, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.61, gameConfig.scale.height * 0.17, 'egiPyr').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.6, gameConfig.scale.height * 0.85, 'egiCat').setScale(0.1 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(110, 40, 20).setAllowGravity(false);

        this.physics.add.collider(wallR, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallR, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(this.bulletsPre, this.columnas);
        this.physics.add.collider(this.bulletsEnemy, this.columnas);
        //this.physics.add.collider(this.player, this.bulletsPre, () => this.gameOver = true);
        this.physics.add.collider(this.player, this.bulletsEnemy, () => this.gameOver = true);
        this.physics.add.collider(this.enemy, this.bulletsPre, () => this.win = true);
        this.physics.add.collider(this.bulletsPre, this.bulletsPre);
        this.physics.add.collider(this.bulletsEnemy, this.bulletsEnemy);
        this.physics.add.collider(this.bulletsPre, this.bulletsEnemy);
        this.physics.add.collider(this.bulletsEnemy, this.obstacles);
        this.physics.add.collider(this.bulletsPre, this.obstacles);


        this.spriteParar = this.add.sprite(gameConfig.scale.width * 15 / 16, gameConfig.scale.height * 11 / 12, 'FreezeBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteParar.setInteractive().on('pointerdown', () => this.player.body.moves = false /*cambiar a iddle */)
            .on('pointerup', () => this.player.body.moves = true)//, this.player.anims.play('walk', true))
            .on('pointerout', () => this.player.body.moves = true)//, this.player.anims.play('walk', true))
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
            .on('pointerdown', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput))
            //.on('pointerdown', () => !this.is_paused ? this.player.anims.play('walk', true) : this.player.anims.stop())
            //.on('pointerdown', () => !this.is_paused ? this.enemy.anims.play('walk', true) : this.enemy.anims.stop())
            .on('pointerdown', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('pointerdown', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('pointerup', () => this.spritePausar.setTexture('PauseBON'))
            .on('pointerout', () => this.spritePausar.setTexture('PauseBON'));


        this.freezeInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.freezeInput.on('down', () => this.player.body.moves = false /*cambiar a iddle */)
            .on('up', () => this.player.body.moves = true)//, this.player.anims.play('walk', true))
            .on('down', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('up', () => this.spriteParar.setTexture('FreezeBON'));

        this.shootInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.shootInput.on('down', () => this.fire())
            .on('down', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('up', () => this.spriteDisparar.setTexture('ShootBON'));

        this.input.keyboard.on('keydown-' + 'ESC', () => this.is_paused = !this.is_paused)
            .on('keydown-' + 'ESC', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput))
            //.on('keydown-' + 'ESC', () => !this.is_paused ? this.player.anims.play('walk', true) : this.player.anims.stop())
            //.on('keydown-' + 'ESC', () => !this.is_paused ? this.enemy.anims.play('walk', true) : this.enemy.anims.stop())
            .on('keydown-' + 'ESC', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('keydown-' + 'ESC', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('keyup-' + 'ESC', () => this.spritePausar.setTexture('PauseBON'));

        this.inter = setInterval(() => {
            if (!this.is_paused) {
                if (this.bulletsEnemy.isFull()) {
                    this.bulletsEnemy.getFirst(true).destroy();
                }
                this.bomb = this.physics.add.sprite(this.enemy.x - 10, this.enemy.y, "egiWeapon").setScale(0.15 * gameConfig.scale.width / 800).setFlip(true,false);
                this.bomb.setTint(0xff7e7d);
                
                this.bulletsEnemy.add(this.bomb);
                this.bomb.play("shoot");
                this.bomb.body.setVelocity(-500 * gameConfig.scale.height / 600, 0);
                //this.bulletsEnemy.create(this.enemy.x - 10, this.enemy.y, 'axe').setScale(0.2).setFlip(true,false).play('shoot', true);
                this.bomb.body.setAllowGravity(false);
                this.bomb.body.setCircle(100, 30, 30);
                //this.bomb.angle = 270;
            }
        }, 1500);

    }
    mostrarMenu(t) {
        this.music.setVolume(0.05);
        t.Menu = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'PauseMenu').setScale(0.5 * gameConfig.scale.height / 600);
        t.PauseTitle = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height * 0.36, 'PauseTitle').setScale(0.7 * gameConfig.scale.height / 600);
        t.BotonMenu = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.5, 'botonRendirse').setScale(gameConfig.scale.height / 600);
        t.BotonMenu.setInteractive().on('pointerdown', () => this.confirmarSalir("MenuPrincipalScene"));
        t.BotonCerrar = t.add.sprite(gameConfig.scale.width * 0.75, gameConfig.scale.height * 0.36, 'CloseB').setScale(0.1 * gameConfig.scale.height / 600);
        t.BotonCerrar.setInteractive().on('pointerdown', () => { this.is_paused = !this.is_paused; t.pauseGame(t.spriteParar, t.spriteDisparar, t.freezeInput, t.shootInput); this.ocultarMenu(this) });
        t.BotonTienda = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.6, 'botonTienda').setScale(gameConfig.scale.height / 600);
        t.BotonTienda.setInteractive().on('pointerdown', () => this.confirmarSalir("TiendaScene"));
        if (!espanol) {
            t.PauseTitle.setTexture('PauseTitlei');
            t.BotonMenu.setTexture('botonRendirsei');
            t.BotonTienda.setTexture('botonTiendai');
        }
    }
    confirmarSalir(salir) {
        this.BotonTienda.setTint(0x888888);
        this.BotonMenu.setTint(0x888888);
        this.BotonMenu.disableInteractive();
        this.BotonTienda.disableInteractive();
        this.mensajeSeguro = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2.5 / 3, 'confirmarRendirse').setScale(0.7 * gameConfig.scale.height / 600, 0.6 * gameConfig.scale.height / 600);
        if (!espanol) {
            this.mensajeSeguro.setTexture('confirmarRendirsei');
        }
        this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width * 1.1 / 2, (gameConfig.scale.height / 3) * 2.6, 'botonDesbloquearNo').setScale(0.5 * gameConfig.scale.height / 600);
        this.spriteDesbloquearNo.setInteractive().on('pointerdown', () => {
            this.mensajeSeguro.destroy();
            this.spriteDesbloquearNo.destroy();
            this.spriteDesbloquearSi.destroy();
            this.BotonMenu.setInteractive();
            this.BotonTienda.setInteractive();
            this.BotonTienda.clearTint();
            this.BotonMenu.clearTint()
        });

        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width * 0.9 / 2, (gameConfig.scale.height / 3) * 2.6, 'botonDesbloquearSi').setScale(0.5 * gameConfig.scale.height / 600);
        this.spriteDesbloquearSi.setInteractive().on('pointerdown', () => this.rendirse(salir));
    }
    ocultarMenu(t) {
        this.music.setVolume(0.2);
        t.Menu.destroy();
        t.PauseTitle.destroy();
        t.BotonTienda.destroy();
        t.BotonMenu.destroy();
        t.BotonCerrar.destroy();
    }
    rendirse(escena) {
        this.shootInput.destroy();
        clearInterval(this.inter);
        this.ocultarMenu(this);
        this.mensajeSeguro.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
        this.tweens.add({
            targets: this.music,
            volume: 0,
            duration: 500
        }, this);
        this.is_paused = true;
        this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput);
        this.fondo = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'fondo').setScale(gameConfig.scale.height / 600).setTint(0x000000);
        this.fondo.alpha = 0;
        this.tweens.add({
            targets: this.fondo,
            alpha: 1,
            duration: 500,
        }, this);
        if (espanol) {
            this.lastima = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Lastima').setScale(gameConfig.scale.height / 600);
            this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarB').setScale(0.6 * gameConfig.scale.height / 600);;
        } else {
            this.lastima = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Lastimai').setScale(gameConfig.scale.height / 600);
            this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarBi').setScale(0.6 * gameConfig.scale.height / 600);;
        }
        this.continuar.setInteractive().on('pointerdown', () => {
            this.music.stop();
            this.scene.stop();
            this.scene.start(escena);
        })
    }
    update() {
        if (this.gameOver) {
            clearInterval(this.inter);
            this.shootInput.destroy();
            this.cameras.main.fadeIn(500, 180, 50, 50);
            //this.music.destroy();
            this.scene.sleep();
            this.scene.setActive(false);
            this.scene.restart();
        }
        if (this.win) {
            this.win=false;
            clearInterval(this.inter);
            this.shootInput.destroy();
            this.tweens.add({
                targets: this.music,
                volume: 0,
                duration: 500
            }, this);
            if (completedLevel[1].completado) {

                this.music.stop();
                this.scene.stop();
                this.scene.start("MediaScene");

            }else{
            completedLevel[1].completado=true;
            mapas[1].bloqueado=false;
            personajes[1].bloqueado=false;
            armas[1].bloqueado=false;
            this.is_paused = true;
                this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput);
                this.fondo = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'fondo').setScale(gameConfig.scale.height / 600).setTint(0x000000);
                this.fondo.alpha = 0;
                this.tweens.add({
                    targets: this.fondo,
                    alpha: 1,
                    duration: 1000,
                }, this);

                if (espanol) {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Enhorabuena').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarB').setScale(0.6 * gameConfig.scale.height / 600);
                } else {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Enhorabuenai').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarBi').setScale(0.6 * gameConfig.scale.height / 600);
                }
                this.continuar.setInteractive().on('pointerdown', () => {
                    this.music.stop();
                    this.scene.stop();
                    this.scene.start("MediaScene");
                })
            }
        }
    }
    pauseGame(spriteParar, spriteDisparar, f, s) {
        this.bulls = this.bulletsPre.getChildren();
        this.ebulls = this.bulletsEnemy.getChildren();
        if (!this.is_paused) {
            this.player.body.moves = true;
            this.enemy.body.moves = true;
            for (let i = 0; i < this.bulls.length; i++) {
                this.bulls[i].body.moves = true;
                this.bulls[i].anims.play("shoot");
            }
            for (let i = 0; i < this.ebulls.length; i++) {
                this.ebulls[i].body.moves = true;
                this.ebulls[i].anims.play("shoot");
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
                this.bulls[i].anims.stop();
            }
            for (let i = 0; i < this.ebulls.length; i++) {
                this.ebulls[i].body.moves = false;
                this.ebulls[i].anims.stop();
            }
            f.enabled = false;
            s.enabled = false;
            spriteParar.disableInteractive();
            spriteDisparar.disableInteractive();
        }

    }
    fire() {
        if (this.bulletsPre.isFull()) {
            //bullets.remove(bullets.getFirst(true), true);
            this.bulletsPre.getFirst(true).destroy();
        }
        var bomb = this.physics.add.sprite(this.player.x + 10, this.player.y, "egiWeapon").setScale(0.15 * gameConfig.scale.width / 800);
        //this.bulletsPre.create(this.player.x + 10, this.player.y, 'axe').setScale(0.2);
        bomb.setTint(0x85baff);
        
        this.bulletsPre.add(bomb);
        bomb.play("shoot");
        bomb.body.setVelocity(500 * gameConfig.scale.height / 600, 0);
        //bomb.setOrigin(0,1);
        bomb.body.setAllowGravity(false);
        bomb.body.setCircle(100, 30, 30);
    }
}



