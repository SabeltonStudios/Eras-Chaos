class multijugadorPartidaScene extends Phaser.Scene {
    bulletsPre;
    bulletsEnemy;
    obstacles;
    player;
    enemy;
    win;
    music;
    weapon1;
    weapon2;
    configPre = {
        classType: Phaser.GameObjects.Image,
        defaultKey: 'stone',
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
        defaultKey: 'stone',
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
        super("MultijugadorPartidaScene");
    }

    preload() {
        /*this.load.image('mapaMed', 'assets/Fondos/3.EdadMedia/Background.png');

        this.load.image('medApl', 'assets/Objetos/3.EdadMedia/object_apples.png');
        this.load.image('medBar', 'assets/Objetos/3.EdadMedia/object_barrel.png');
        this.load.image('medVas', 'assets/Objetos/3.EdadMedia/object_vase.png');

        this.load.audio('medMusic', ['assets/Música/PrehistoriaFinal.mp3']);//, 'assets/Música/PrehistoriaFinal.ogg']);

        //this.load.spritesheet('dude', 'assets/Interfaz/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('medPlayer','assets/Personajes/3.EdadMedia/BasicoEdadMedia.png');
        this.load.image('stone', 'assets/Armas/ArmaPrehistoria.png');*/

    }
    create() {
        this.win = false;
        this.is_paused = false;
        //this.cameras.main.zoom= 1.3;
        this.cameras.main.zoomTo(1.05, 1000);
        this.physics.world.bounds.setTo(92.5 * gameConfig.scale.width / 800, 69.5 * gameConfig.scale.width / 800, 615 * gameConfig.scale.height / 600, 461 * gameConfig.scale.height / 600);
        this.physics.world.setBoundsCollision(false, false, true, true);
        switch (selectedWeapon1) {
            case 0:
                this.weapon1 = 'preWeapon';
                break;
            case 1:
                this.weapon1 = 'egiWeapon';
                this.anims.create({
                    key: 'shoot',
                    frames: this.anims.generateFrameNumbers('egiWeapon', { start: 0, end: 7 }),
                    frameRate: 20,
                    repeat: -1
                });
                break;
        }
        switch (selectedWeapon2) {
            case 0:
                this.weapon2 = 'preWeapon';
                break;
            case 1:
                this.weapon2 = 'egiWeapon';
                this.anims.create({
                    key: 'shoot',
                    frames: this.anims.generateFrameNumbers('egiWeapon', { start: 0, end: 7 }),
                    frameRate: 20,
                    repeat: -1
                });
                break;
        }
        switch (selectedMap) {
            case 0:
                this.Mapa = this.add.image(0, 0, 'preMap').setOrigin(0);
                this.selectedMusic = 'preMusic';
                this.obs1 = 'preLog';
                this.obs2 = 'preSkull';
                this.obs3 = 'preStone';
                break;
            case 1:
                this.Mapa = this.add.image(0, 0, 'egiMap').setOrigin(0);
                this.selectedMusic = 'egiMusic';
                this.obs1 = 'egiCat';
                this.obs2 = 'egiCup';
                this.obs3 = 'egiPyr';
                break;
            case 2:
                this.Mapa = this.add.image(0, 0, 'mapaMed').setOrigin(0);
                this.obs1 = 'medApl';
                this.obs2 = 'medBar';
                this.obs3 = 'medVas';
                break;
            case 3:
                this.Mapa = this.add.image(0, 0, 'mapaInd').setOrigin(0)
                break;
            case 4:
                this.Mapa = this.add.image(0, 0, 'mapaCont').setOrigin(0)
                break;
        }

        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);
        switch (selectedChar1) {
            case 0:
                this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'prePlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
            case 1:
                this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'egiPlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
            case 2:
                this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'medPlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
            case 3:
                this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'indPlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
            case 4:
                this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'contPlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
        }
        switch (selectedChar2) {
            case 0:
                this.enemy = this.physics.add.sprite(gameConfig.scale.width * 5 / 6, gameConfig.scale.height / 2, 'prePlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
            case 1:
                this.enemy = this.physics.add.sprite(gameConfig.scale.width * 5 / 6, gameConfig.scale.height / 2, 'egiPlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
            case 2:
                this.enemy = this.physics.add.sprite(gameConfig.scale.width * 5 / 6, gameConfig.scale.height / 2, 'medPlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
            case 3:
                this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'indPlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
            case 4:
                this.player = this.physics.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 6, 'contPlayer').setScale(0.07 * gameConfig.scale.height / 600)
                break;
        }
        if (this.music == null) {
            this.music = this.sound.add(this.selectedMusic);
        }
        //*800/gameConfig.scale.width);
        this.player.body.immovable = true;
        //*800/gameConfig.scale.width);
        this.enemy.flipX = true;
        this.enemy.body.immovable = true;
        /*this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.player.anims.play('walk', true);*/
        this.player.setVelocity(0, -200 * gameConfig.scale.height / 600);
        this.player.setBounce(1);
        this.player.body.setAllowGravity(false);
        this.player.setCollideWorldBounds(true);

        //this.enemy.anims.play('walk', true);
        this.enemy.setVelocity(0, 240 * gameConfig.scale.height / 600);
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
        this.obstacles.create(gameConfig.scale.width / 2, gameConfig.scale.height / 2, this.obs2).setScale(0.2 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(120, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width / 2.1, gameConfig.scale.height * 0.25, this.obs2).setScale(0.15 * gameConfig.scale.height / 600).body.setCircle(115, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width / 1.9, gameConfig.scale.height * 0.77, this.obs3).setScale(0.2 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(120, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.4, gameConfig.scale.height * 0.6, this.obs1).setScale(0.2 * gameConfig.scale.height / 600).body.setCircle(120, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.39, gameConfig.scale.height * 0.42, this.obs3).setScale(0.2 * gameConfig.scale.height / 600).body.setCircle(120, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.61, gameConfig.scale.height * 0.59, this.obs1).setScale(0.15 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(115, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.6, gameConfig.scale.height * 0.4, this.obs2).setScale(0.2 * gameConfig.scale.height / 600).body.setCircle(120, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.3, gameConfig.scale.height * 0.3, this.obs3).setScale(0.15 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(115, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.29, gameConfig.scale.height * 0.73, this.obs1).setScale(0.15 * gameConfig.scale.height / 600).body.setCircle(115, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.69, gameConfig.scale.height * 0.29, this.obs3).setScale(0.15 * gameConfig.scale.height / 600).body.setCircle(115, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.7, gameConfig.scale.height * 0.75, this.obs2).setScale(0.20 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(120, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.39, gameConfig.scale.height * 0.15, this.obs1).setScale(0.25 * gameConfig.scale.height / 600).body.setCircle(125, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.4, gameConfig.scale.height * 0.87, this.obs2).setScale(0.25 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(125, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.61, gameConfig.scale.height * 0.17, this.obs3).setScale(0.30 * gameConfig.scale.height / 600).body.setCircle(130, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.6, gameConfig.scale.height * 0.85, this.obs1).setScale(0.25 * gameConfig.scale.height / 600).body.setCircle(125, 40, 20).setAllowGravity(false);

        this.physics.add.collider(wallR, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallR, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });

        /*this.physics.add.collider(this.player, this.bulletsPre, () => this.win = true);
        this.physics.add.collider(this.player, this.bulletsEnemy, () => this.win = true);*/
        this.physics.add.collider(this.enemy, this.bulletsPre, () => this.win = true);
        this.physics.add.collider(this.enemy, this.bulletsEnemy, () => this.win = true);
        this.physics.add.collider(this.bulletsPre, this.bulletsPre);
        this.physics.add.collider(this.bulletsEnemy, this.bulletsEnemy);
        this.physics.add.collider(this.bulletsPre, this.bulletsEnemy);

        this.physics.add.collider(this.bulletsEnemy, this.obstacles);
        this.physics.add.collider(this.bulletsPre, this.obstacles);


        this.spriteParar = this.add.sprite(gameConfig.scale.width * 2.2 / 16, gameConfig.scale.height * 11 / 12, 'FreezeBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteParar.setInteractive().on('pointerdown', () => this.player.body.moves = false /*cambiar a iddle */)
            .on('pointerup', () => this.player.body.moves = true)//,this.player.anims.play('walk', true))
            .on('pointerout', () => this.player.body.moves = true)//, this.player.anims.play('walk', true))
            .on('pointerdown', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('pointerup', () => this.spriteParar.setTexture('FreezeBON'))
            .on('pointerout', () => this.spriteParar.setTexture('FreezeBON'));

        this.spriteDisparar = this.add.sprite(gameConfig.scale.width / 16, gameConfig.scale.height * 11 / 12, 'ShootBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteDisparar.setInteractive().on('pointerdown', () => this.fire() /*animar disparo */)
            .on('pointerdown', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('pointerup', () => this.spriteDisparar.setTexture('ShootBON'))
            .on('pointerout', () => this.spriteDisparar.setTexture('ShootBON'));

        //Player 2
        this.spriteParar2 = this.add.sprite(gameConfig.scale.width * 69 / 80, gameConfig.scale.height * 11 / 12, 'FreezeBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteParar2.setInteractive().on('pointerdown', () => this.enemy.body.moves = false /*cambiar a iddle */)
            .on('pointerup', () => this.enemy.body.moves = true)//,this.player.anims.play('walk', true))
            .on('pointerout', () => this.enemy.body.moves = true)//, this.player.anims.play('walk', true))
            .on('pointerdown', () => this.spriteParar2.setTexture('FreezeBOFF'))
            .on('pointerup', () => this.spriteParar2.setTexture('FreezeBON'))
            .on('pointerout', () => this.spriteParar2.setTexture('FreezeBON'));

        this.spriteDisparar2 = this.add.sprite(gameConfig.scale.width * 15 / 16, gameConfig.scale.height * 11 / 12, 'ShootBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteDisparar2.setInteractive().on('pointerdown', () => this.fire2() /*animar disparo */)
            .on('pointerdown', () => this.spriteDisparar2.setTexture('ShootBOFF'))
            .on('pointerup', () => this.spriteDisparar2.setTexture('ShootBON'))
            .on('pointerout', () => this.spriteDisparar2.setTexture('ShootBON'));

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
        //Player 2
        this.freezeInput2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        this.freezeInput2.on('down', () => this.enemy.body.moves = false /*cambiar a iddle */)
            .on('up', () => this.enemy.body.moves = true)//, this.player.anims.play('walk', true))
            .on('down', () => this.spriteParar2.setTexture('FreezeBOFF'))
            .on('up', () => this.spriteParar2.setTexture('FreezeBON'));

        this.shootInput2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        this.shootInput2.on('down', () => this.fire2())
            .on('down', () => this.spriteDisparar2.setTexture('ShootBOFF'))
            .on('up', () => this.spriteDisparar2.setTexture('ShootBON'));

        this.input.keyboard.on('keydown-' + 'ESC', () => this.is_paused = !this.is_paused)
            .on('keydown-' + 'ESC', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput))
            //.on('keydown-' + 'ESC', () => !this.is_paused ? this.player.anims.play('walk', true) : this.player.anims.stop())
            //.on('keydown-' + 'ESC', () => !this.is_paused ? this.enemy.anims.play('walk', true) : this.enemy.anims.stop())
            .on('keydown-' + 'ESC', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('keydown-' + 'ESC', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('keyup-' + 'ESC', () => this.spritePausar.setTexture('PauseBON'));
    }
    mostrarMenu(t) {
        this.music.setVolume(0.05);
        t.Menu = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'PauseMenu').setScale(0.5 * gameConfig.scale.height / 600);
        t.PauseTitle = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height * 0.36, 'PauseTitle').setScale(0.7 * gameConfig.scale.height / 600);
        t.BotonMenu = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.5, 'botonMenuPral');
        t.BotonMenu.setInteractive().on('pointerdown', () => { this.shootInput.destroy(); clearInterval(this.inter); this.music.stop(); t.scene.start("MenuPrincipalScene") });
        t.BotonCerrar= t.add.sprite(gameConfig.scale.width *0.75, gameConfig.scale.height * 0.36, 'CloseB').setScale(0.1 * gameConfig.scale.width / 800);
        t.BotonCerrar.setInteractive().on('pointerdown', () => {this.is_paused = !this.is_paused;t.pauseGame(t.spriteParar, t.spriteDisparar, t.freezeInput, t.shootInput);this.ocultarMenu(this)});
        t.BotonTienda = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.6, 'botonTienda');
        t.BotonTienda.setInteractive().on('pointerdown', () => { this.shootInput.destroy(); clearInterval(this.inter); this.music.stop(); t.scene.start("TiendaScene") });
        if (!espanol) {
            t.PauseTitle.setTexture('PauseTitlei');
            t.BotonMenu.setTexture('botonMenuPrali');
            t.BotonTienda.setTexture('botonTiendai');
        }
    }
    ocultarMenu(t) {
        this.music.setVolume(0.2);
        t.Menu.destroy();
        t.PauseTitle.destroy();
        t.BotonTienda.destroy();
        t.BotonMenu.destroy();
        t.BotonCerrar.destroy();
    }
    update() {
        if (this.win) {
            this.shootInput.destroy();
            this.shootInput2.destroy();
            this.music.stop();
            this.scene.stop();
            this.scene.start("MultijugadorSeleccionScene");
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
                this.ebulls[i].body.moves = false;
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
        var bomb = this.bulletsPre.create(this.player.x + 10, this.player.y, this.weapon1).setScale(0.15 * gameConfig.scale.height / 600);
        bomb.setTint(0x85baff);
        //bomb.setOrigin(0,1);
        bomb.body.setAllowGravity(false);
        bomb.body.setVelocity(500 * gameConfig.scale.height / 600, 0);
        bomb.body.setCircle(50, 0, 0);
        bomb.angle = 90;
    }
    fire2() {
        if (this.bulletsEnemy.isFull()) {
            this.bulletsEnemy.getFirst(true).destroy();
        }
        this.bomb = this.bulletsEnemy.create(this.enemy.x - 10, this.enemy.y, this.weapon2).setScale(0.15 * gameConfig.scale.height / 600);
        this.bomb.setTint(0xff7e7d);
        this.bomb.body.setAllowGravity(false);
        this.bomb.body.setVelocity(-500 * gameConfig.scale.height / 600, 0);
        this.bomb.body.setCircle(50, 0, 0);
        this.bomb.angle = 270;
    }
}