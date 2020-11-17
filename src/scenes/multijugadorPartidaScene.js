class multijugadorPartidaScene extends Phaser.Scene {
    bulletsPre;
    bulletsEnemy;
    obstacles;
    player;
    enemy;
    win1;
    win2;
    music;
    TaxiDown;
    TaxiUp;
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

    }
    create() {
        this.win = false;
        this.is_paused = false;
        this.cameras.main.zoomTo(1.05, 1000);
        this.physics.world.bounds.setTo(92.5 * gameConfig.scale.width / 800, 69.5 * gameConfig.scale.width / 800, 615 * gameConfig.scale.height / 600, 461 * gameConfig.scale.height / 600);
        this.physics.world.setBoundsCollision(false, false, true, true);

        if (this.music == null) {
            this.music = this.sound.add(mapas[selectedMap].nombre + 'Music');
        }
        this.Mapa = this.add.image(0, 0, mapas[selectedMap].nombre + 'Map').setOrigin(0);
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);

        this.player = this.physics.add.sprite(gameConfig.scale.width / 6.5, gameConfig.scale.height / 6, personajes[selectedChar1].nombre + armas[selectedWeapon1].nombre).setOrigin(0, 1).setScale(gameConfig.scale.height / 600)
        this.enemy = this.physics.add.sprite(gameConfig.scale.width * 5.5 / 6, gameConfig.scale.height / 6, personajes[selectedChar2].nombre + armas[selectedWeapon2].nombre).setOrigin(1, 1).setScale(0.14 * gameConfig.scale.height / 600)
        if (armas[selectedWeapon1].nombre === 'egi' || armas[selectedWeapon2].nombre === 'egi') {
            this.anims.create({
                key: 'egishoot',
                frames: this.anims.generateFrameNumbers('egiWeapon', { start: 0, end: 7 }),
                frameRate: 20,
                repeat: -1
            });
        }
        //Animaciones P1
        this.anims.create({
            key: personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre,
            frames: this.anims.generateFrameNumbers(personajes[selectedChar1].nombre + armas[selectedWeapon1].nombre, { start: 0, end: armas[selectedWeapon1].frames[0] }),
            frameRate: 32,
            repeat: -1
        });
        if (armas[selectedWeapon1].nombre === 'Honda') {
            this.anims.create({
                key: personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'Idle',
                frames: this.anims.generateFrameNumbers(personajes[selectedChar1].nombre + armas[selectedWeapon1].nombre + 'Idle', { start: 0, end: armas[selectedWeapon1].frames[1] }),
                frameRate: 32,
                repeat: -1
            });
        }
        this.anims.create({
            key: personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'Attack',
            frames: this.anims.generateFrameNumbers(personajes[selectedChar1].nombre + armas[selectedWeapon1].nombre + 'Attack', { start: 0, end: armas[selectedWeapon1].frames[2] }),
            frameRate: 64,
            repeat: 0
        });
        this.anims.create({
            key: personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'AttackIdle',
            frames: this.anims.generateFrameNumbers(personajes[selectedChar1].nombre + armas[selectedWeapon1].nombre + 'AttackIdle', { start: 0, end: armas[selectedWeapon1].frames[3] }),
            frameRate: 64,
            repeat: 0
        });
        //Animaciones P2
        this.anims.create({
            key: personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre,
            frames: this.anims.generateFrameNumbers(personajes[selectedChar2].nombre + armas[selectedWeapon2].nombre, { start: 0, end: armas[selectedWeapon2].frames[0] }),
            frameRate: 32,
            repeat: -1
        });
        if (armas[selectedWeapon2].nombre === 'Honda') {
            this.anims.create({
                key: personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'Idle',
                frames: this.anims.generateFrameNumbers(personajes[selectedChar2].nombre + armas[selectedWeapon2].nombre + 'Idle', { start: 0, end: armas[selectedWeapon2].frames[1] }),
                frameRate: 32,
                repeat: -1
            });
        }
        this.anims.create({
            key: personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'Attack',
            frames: this.anims.generateFrameNumbers(personajes[selectedChar2].nombre + armas[selectedWeapon2].nombre + 'Attack', { start: 0, end: armas[selectedWeapon2].frames[2] }),
            frameRate: 64,
            repeat: 0
        });
        this.anims.create({
            key: personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'AttackIdle',
            frames: this.anims.generateFrameNumbers(personajes[selectedChar2].nombre + armas[selectedWeapon2].nombre + 'AttackIdle', { start: 0, end: armas[selectedWeapon2].frames[3] }),
            frameRate: 64,
            repeat: 0
        });

        this.player.body.immovable = true;
        this.enemy.flipX = true;
        this.enemy.body.immovable = true;
        this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre, true);
        this.player.setVelocity(0, -200 * gameConfig.scale.height / 600);
        this.player.setBounce(1);
        this.player.body.setAllowGravity(false);
        this.player.setCollideWorldBounds(true);

        this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre, true);
        this.enemy.setVelocity(0, 200 * gameConfig.scale.height / 600);
        this.enemy.setBounce(1);
        this.enemy.body.setAllowGravity(false);
        this.enemy.setCollideWorldBounds(true);

        if (mapas[selectedMap].nombre === 'egi') {
            this.ColumnaI0 = this.add.rectangle(40, gameConfig.scale.height * 0.65 / 3, 100 * gameConfig.scale.width / 800, gameConfig.scale.height / 2.8);
            this.physics.add.existing(this.ColumnaI0);
            this.ColumnaI0.body.setAllowGravity(false);
            this.ColumnaI0.body.setSize(100 * gameConfig.scale.width / 800, gameConfig.scale.height / 2.8);
            this.ColumnaI0.body.immovable = true;

            this.ColumnaI1 = this.add.rectangle(40, gameConfig.scale.height * 2.2 / 3, 100 * gameConfig.scale.width / 800, gameConfig.scale.height / 2.8);
            this.physics.add.existing(this.ColumnaI1);
            this.ColumnaI1.body.setAllowGravity(false);
            this.ColumnaI1.body.setSize(100 * gameConfig.scale.width / 800, gameConfig.scale.height / 2.8);
            this.ColumnaI1.body.immovable = true;

            this.ColumnaD0 = this.add.rectangle(gameConfig.scale.width - 40, gameConfig.scale.height * 0.65 / 3, 100 * gameConfig.scale.width / 800, gameConfig.scale.height / 2.8);
            this.physics.add.existing(this.ColumnaD0);
            this.ColumnaD0.body.setAllowGravity(false);
            this.ColumnaD0.body.setSize(100 * gameConfig.scale.width / 800, gameConfig.scale.height / 2.8);
            this.ColumnaD0.body.immovable = true;

            this.ColumnaD1 = this.add.rectangle(gameConfig.scale.width - 40, gameConfig.scale.height * 2.2 / 3, 100 * gameConfig.scale.width / 800, gameConfig.scale.height / 2.8);
            this.physics.add.existing(this.ColumnaD1);
            this.ColumnaD1.body.setAllowGravity(false);
            this.ColumnaD1.body.setSize(100 * gameConfig.scale.width / 800, gameConfig.scale.height / 2.8);
            this.ColumnaD1.body.immovable = true;

            this.ColumnaC0 = this.add.rectangle(gameConfig.scale.width / 6.3, 40 * gameConfig.scale.height / 600, gameConfig.scale.width / 2.8, 100 * gameConfig.scale.height / 600);
            this.physics.add.existing(this.ColumnaC0);
            this.ColumnaC0.body.setAllowGravity(false);
            this.ColumnaC0.body.setSize(gameConfig.scale.width / 2.8, 100 * gameConfig.scale.height / 600);
            this.ColumnaC0.body.immovable = true;

            this.ColumnaC1 = this.add.rectangle(gameConfig.scale.width * 4.25 / 5, 40 * gameConfig.scale.height / 600, gameConfig.scale.width / 2.8, 100 * gameConfig.scale.height / 600);
            this.physics.add.existing(this.ColumnaC1);
            this.ColumnaC1.body.setAllowGravity(false);
            this.ColumnaC1.body.setSize(gameConfig.scale.width / 2.8, 100 * gameConfig.scale.height / 600);
            this.ColumnaC1.body.immovable = true;
        }
        var wallR = this.add.rectangle(gameConfig.scale.width + 20, gameConfig.scale.height / 2, 20, gameConfig.scale.height);
        this.physics.add.existing(wallR);
        wallR.body.setAllowGravity(false);
        wallR.body.setSize(20, gameConfig.scale.height);
        wallR.body.immovable = true;
        var wallL = this.add.rectangle(-20, gameConfig.scale.height / 2, 20, gameConfig.scale.height);
        this.physics.add.existing(wallL);
        wallL.body.setAllowGravity(false);
        wallL.body.setSize(20, gameConfig.scale.height);
        wallL.body.immovable = true;
        var wallU = this.add.rectangle(gameConfig.scale.width / 2, -20, gameConfig.scale.width, 20);
        this.physics.add.existing(wallU);
        wallU.body.setAllowGravity(false);
        wallU.body.setSize(gameConfig.scale.width, 20);
        wallU.body.immovable = true;
        var wallD = this.add.rectangle(gameConfig.scale.width / 2, gameConfig.scale.height + 20, gameConfig.scale.width, 20);
        this.physics.add.existing(wallD);
        wallD.body.setAllowGravity(false);
        wallD.body.setSize(gameConfig.scale.width, 20);
        wallD.body.immovable = true;

        this.bulletsPre = this.physics.add.group(this.configPre);
        Phaser.Actions.Call(this.bulletsPre.getChildren(), function (bullet) { });
        this.bulletsEnemy = this.physics.add.group(this.EnemyConfigPre);
        Phaser.Actions.Call(this.bulletsEnemy.getChildren(), function (bullet) { });

        this.obstacles = this.physics.add.group(this.ObstaclesConfig);
        this.obstacles.setOrigin(0.5, 0.5);
        if (mapas[selectedMap].nombre === 'con') {
            this.obstacles.create(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'conObj1').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width / 2.1, gameConfig.scale.height * 0.31, 'conObj1').setScale(0.1 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width / 1.9, gameConfig.scale.height * 0.62, 'conObj3').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);

            this.obstacles.create(gameConfig.scale.width * 0.47, gameConfig.scale.height * 0.71, 'conObj2').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.44, gameConfig.scale.height * 0.42, 'conObj3').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.58, gameConfig.scale.height * 0.8, 'conObj2').setScale(0.1 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.56, gameConfig.scale.height * 0.2, 'conObj1').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);

            this.TaxiUp = this.add.sprite(gameConfig.scale.width / 3, gameConfig.scale.height + 50, 'conTaxiUp').setScale(0.12 * gameConfig.scale.width / 800);
            this.physics.add.existing(this.TaxiUp);
            this.TaxiUp.body.setVelocity(0, -800);
            this.TaxiUp.body.setAllowGravity(false);
            this.TaxiUp.body.immovable = true;

            this.TaxiDown = this.add.sprite(gameConfig.scale.width * 2 / 3, -50, 'conTaxiDown').setScale(0.12 * gameConfig.scale.width / 800);
            this.physics.add.existing(this.TaxiDown);
            this.TaxiDown.body.setVelocity(0, 700);
            this.TaxiDown.body.setAllowGravity(false);
            this.TaxiDown.body.immovable = true;


            var limitUp = this.add.rectangle(gameConfig.scale.width / 2, -gameConfig.scale.height / 2, gameConfig.scale.width, 20);
            this.physics.add.existing(limitUp);
            limitUp.body.setAllowGravity(false);
            limitUp.body.setSize(gameConfig.scale.width, 20);
            limitUp.body.immovable = true;
            var limitDown = this.add.rectangle(gameConfig.scale.width / 2, gameConfig.scale.height + gameConfig.scale.height / 2, gameConfig.scale.width, 20);
            this.physics.add.existing(limitDown);
            limitDown.body.setAllowGravity(false);
            limitDown.body.setSize(gameConfig.scale.width, 20);
            limitDown.body.immovable = true;

            this.physics.add.collider(limitUp, this.TaxiUp, function (wall, taxi) { taxi.y = gameConfig.scale.height + 100; });
            this.physics.add.collider(limitDown, this.TaxiDown, function (wall, taxi) { taxi.y = -120; });
            this.physics.add.collider(this.TaxiUp, this.bulletsPre, function (wall, bullet) { wall.moves = true; });
            this.physics.add.collider(this.TaxiDown, this.bulletsPre, function (wall, bullet) { wall.moves = true; });
            this.physics.add.collider(this.TaxiUp, this.bulletsEnemy, function (wall, bullet) { wall.moves = true; });
            this.physics.add.collider(this.TaxiDown, this.bulletsEnemy, function (wall, bullet) { wall.moves = true; });
        } else {
            this.obstacles.create(gameConfig.scale.width / 2, gameConfig.scale.height / 2, mapas[selectedMap].nombre + 'Obj2').setScale(0.12 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(112, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width / 2.1, gameConfig.scale.height * 0.25, mapas[selectedMap].nombre + 'Obj2').setScale(0.1 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width / 1.9, gameConfig.scale.height * 0.77, mapas[selectedMap].nombre + 'Obj3').setScale(0.12 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(112, 40, 20).setAllowGravity(false);

            this.obstacles.create(gameConfig.scale.width * 0.4, gameConfig.scale.height * 0.6, mapas[selectedMap].nombre + 'Obj1').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.39, gameConfig.scale.height * 0.42, mapas[selectedMap].nombre + 'Obj3').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.61, gameConfig.scale.height * 0.59, mapas[selectedMap].nombre + 'Obj1').setScale(0.1 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(110, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.6, gameConfig.scale.height * 0.4, mapas[selectedMap].nombre + 'Obj2').setScale(0.12 * gameConfig.scale.width / 800).body.setCircle(112, 40, 20).setAllowGravity(false);

            this.obstacles.create(gameConfig.scale.width * 0.3, gameConfig.scale.height * 0.3, mapas[selectedMap].nombre + 'Obj3').setScale(0.1 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(110, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.29, gameConfig.scale.height * 0.73, mapas[selectedMap].nombre + 'Obj1').setScale(0.1 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.69, gameConfig.scale.height * 0.29, mapas[selectedMap].nombre + 'Obj3').setScale(0.1 * gameConfig.scale.width / 800).body.setCircle(110, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.7, gameConfig.scale.height * 0.75, mapas[selectedMap].nombre + 'Obj2').setScale(0.12 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(112, 40, 20).setAllowGravity(false);

            this.obstacles.create(gameConfig.scale.width * 0.39, gameConfig.scale.height * 0.15, mapas[selectedMap].nombre + 'Obj1').setScale(0.15 * gameConfig.scale.width / 800).body.setCircle(115, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.4, gameConfig.scale.height * 0.87, mapas[selectedMap].nombre + 'Obj2').setScale(0.15 * gameConfig.scale.width / 800).setFlip(true, false).body.setCircle(115, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.61, gameConfig.scale.height * 0.17, mapas[selectedMap].nombre + 'Obj3').setScale(0.17 * gameConfig.scale.width / 800).body.setCircle(117, 40, 20).setAllowGravity(false);
            this.obstacles.create(gameConfig.scale.width * 0.6, gameConfig.scale.height * 0.85, mapas[selectedMap].nombre + 'Obj1').setScale(0.15 * gameConfig.scale.width / 800).body.setCircle(115, 40, 20).setAllowGravity(false);
        }
        this.physics.add.collider(wallR, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallR, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        if (mapas[selectedMap].nombre === 'egi') {

            this.physics.add.collider(this.bulletsPre, this.ColumnaC0);
            this.physics.add.collider(this.bulletsEnemy, this.ColumnaC0);
            this.physics.add.collider(this.bulletsPre, this.ColumnaC1);
            this.physics.add.collider(this.bulletsEnemy, this.ColumnaC1);
            this.physics.add.collider(this.bulletsPre, this.ColumnaD0);
            this.physics.add.collider(this.bulletsEnemy, this.ColumnaD0);
            this.physics.add.collider(this.bulletsPre, this.ColumnaD1);
            this.physics.add.collider(this.bulletsEnemy, this.ColumnaD1);
            this.physics.add.collider(this.bulletsPre, this.ColumnaI0);
            this.physics.add.collider(this.bulletsEnemy, this.ColumnaI0);
            this.physics.add.collider(this.bulletsPre, this.ColumnaI1);
            this.physics.add.collider(this.bulletsEnemy, this.ColumnaI1);
        }
        this.physics.add.collider(this.player, this.bulletsEnemy, () => { this.bulletsPre.clear(); this.bulletsEnemy.clear(); this.win2 = true });
        this.physics.add.collider(this.enemy, this.bulletsPre, () => { this.bulletsPre.clear(); this.bulletsEnemy.clear(); this.win1 = true });
        this.physics.add.collider(this.bulletsPre, this.bulletsPre);
        this.physics.add.collider(this.bulletsEnemy, this.bulletsEnemy);
        this.physics.add.collider(this.bulletsPre, this.bulletsEnemy);

        this.physics.add.collider(this.bulletsEnemy, this.obstacles);
        this.physics.add.collider(this.bulletsPre, this.obstacles);


        this.spriteParar = this.add.sprite(gameConfig.scale.width * 2.2 / 16, gameConfig.scale.height * 11 / 12, 'FreezeBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteParar.setInteractive().on('pointerdown', () => {
            this.player.body.moves = false;
            if (armas[selectedWeapon1].nombre != 'Honda') {
                this.player.anims.stop();
                this.player.setTexture(personajes[selectedChar1].nombre + armas[selectedWeapon1].nombre + 'Idle')
            } else {
                this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'Idle', true)
            }
        })
            .on('pointerup', () => { this.player.body.moves = true; this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre, true) })
            .on('pointerout', () => { this.player.body.moves = true; this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre, true) })
            .on('pointerdown', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('pointerup', () => this.spriteParar.setTexture('FreezeBON'))
            .on('pointerout', () => this.spriteParar.setTexture('FreezeBON'));

        this.spriteDisparar = this.add.sprite(gameConfig.scale.width / 16, gameConfig.scale.height * 11 / 12, 'ShootBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteDisparar.setInteractive().on('pointerdown', () => this.fire(true))
            .on('pointerdown', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('pointerup', () => this.spriteDisparar.setTexture('ShootBON'))
            .on('pointerout', () => this.spriteDisparar.setTexture('ShootBON'));

        //Player 2
        this.spriteParar2 = this.add.sprite(gameConfig.scale.width * 69 / 80, gameConfig.scale.height * 11 / 12, 'FreezeBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteParar2.setInteractive().on('pointerdown', () => {
            this.enemy.body.moves = false;
            if (armas[selectedWeapon2].nombre != 'Honda') {
                this.enemy.anims.stop();
                this.enemy.setTexture(personajes[selectedChar2].nombre + armas[selectedWeapon2].nombre + 'Idle')
            } else {
                this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'Idle', true)
            }
        })
            .on('pointerup', () => { this.enemy.body.moves = true; this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre, true) })
            .on('pointerout', () => { this.enemy.body.moves = true; this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre, true) })
            .on('pointerdown', () => this.spriteParar2.setTexture('FreezeBOFF'))
            .on('pointerup', () => this.spriteParar2.setTexture('FreezeBON'))
            .on('pointerout', () => this.spriteParar2.setTexture('FreezeBON'));

        this.spriteDisparar2 = this.add.sprite(gameConfig.scale.width * 15 / 16, gameConfig.scale.height * 11 / 12, 'ShootBON').setScale(0.1 * gameConfig.scale.width / 800);
        this.spriteDisparar2.setInteractive().on('pointerdown', () => this.fire(false))
            .on('pointerdown', () => this.spriteDisparar2.setTexture('ShootBOFF'))
            .on('pointerup', () => this.spriteDisparar2.setTexture('ShootBON'))
            .on('pointerout', () => this.spriteDisparar2.setTexture('ShootBON'));

        this.spritePausar = this.add.sprite(gameConfig.scale.width * 15.3 / 16, gameConfig.scale.height / 13, 'PauseBON').setScale(0.07 * gameConfig.scale.width / 800);
        this.spritePausar.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.is_paused = !this.is_paused })
            .on('pointerdown', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput, this.spriteParar2, this.spriteDisparar2, this.freezeInput2, this.shootInput2))
            .on('pointerdown', () => !this.is_paused ? this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre, true) : this.player.anims.stop())
            .on('pointerdown', () => !this.is_paused ? this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre, true) : this.enemy.anims.stop())
            .on('pointerdown', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('pointerdown', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('pointerup', () => this.spritePausar.setTexture('PauseBON'))
            .on('pointerout', () => this.spritePausar.setTexture('PauseBON'));

        //Player 1
        this.freezeInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.freezeInput.on('down', () => {
            this.player.body.moves = false;
            if (armas[selectedWeapon1].nombre != 'Honda') {
                this.player.anims.stop();
                this.player.setTexture(personajes[selectedChar1].nombre + armas[selectedWeapon1].nombre + 'Idle');
            } else {
                this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'Idle', true);
            }
        })
            .on('up', () => { this.player.body.moves = true; this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre, true) })
            .on('down', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('up', () => this.spriteParar.setTexture('FreezeBON'));

        this.shootInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.shootInput.on('down', () => this.fire(true))
            .on('down', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('up', () => this.spriteDisparar.setTexture('ShootBON'));
        //Player 2
        this.freezeInput2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        this.freezeInput2.on('down', () => {
            this.enemy.body.moves = false;
            if (armas[selectedWeapon2].nombre != 'Honda') {
                this.enemy.anims.stop();
                this.enemy.setTexture(personajes[selectedChar2].nombre + armas[selectedWeapon2].nombre + 'Idle')
            } else {
                this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'Idle', true)
            }
        })
            .on('up', () => { this.enemy.body.moves = true; this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre, true) })
            .on('down', () => this.spriteParar2.setTexture('FreezeBOFF'))
            .on('up', () => this.spriteParar2.setTexture('FreezeBON'));

        this.shootInput2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        this.shootInput2.on('down', () => this.fire(false))
            .on('down', () => this.spriteDisparar2.setTexture('ShootBOFF'))
            .on('up', () => this.spriteDisparar2.setTexture('ShootBON'));
        if (!this.win1 && !this.win2) {
            this.input.keyboard.on('keydown-' + 'ESC', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.is_paused = !this.is_paused })
                .on('keydown-' + 'ESC', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput, this.spriteParar2, this.spriteDisparar2, this.freezeInput2, this.shootInput2))
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre, true) : this.player.anims.stop())
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre, true) : this.enemy.anims.stop())
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
                .on('keydown-' + 'ESC', () => this.spritePausar.setTexture('PauseBOFF'))
                .on('keyup-' + 'ESC', () => this.spritePausar.setTexture('PauseBON'));
        }
    }
    mostrarMenu(t) {
        this.music.setVolume(0.05);
        this.Menu = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'PauseMenu').setScale(0.5 * gameConfig.scale.height / 600);
        t.PauseTitle = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height * 0.36, 'PauseTitle').setScale(0.7 * gameConfig.scale.height / 600);
        t.BotonMenu = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.5, 'botonRendirse').setScale(gameConfig.scale.height / 600);
        t.BotonMenu.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.confirmarSalir("MenuPrincipalScene") });
        t.BotonCerrar = t.add.sprite(gameConfig.scale.width / 2 + (t.Menu.displayWidth / 2 - 30), gameConfig.scale.height / 2 - (t.Menu.displayHeight / 2 + 20), 'CloseB').setOrigin(0.5, 0).setScale(0.1 * gameConfig.scale.height / 600);
        //this.BotonCerrar = t.add.sprite(gameConfig.scale.width/2+(this.menu.displayWidth/2), gameConfig.scale.height * 0.36, 'CloseB').setScale(0.1 * gameConfig.scale.height / 600);
        t.BotonCerrar.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.is_paused = !this.is_paused; t.pauseGame(t.spriteParar, t.spriteDisparar, t.freezeInput, t.shootInput); this.ocultarMenu(this) });
        t.BotonTienda = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.6, 'botonTienda').setScale(gameConfig.scale.height / 600);
        t.BotonTienda.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.confirmarSalir("TiendaScene") });
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
        this.mensajeSeguro = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2.5 / 3, 'confirmarAbandonar').setScale(0.7 * gameConfig.scale.height / 600, 0.6 * gameConfig.scale.height / 600);
        if (!espanol) {
            this.mensajeSeguro.setTexture('confirmarAbandonari');
        }
        this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width * 1.1 / 2, (gameConfig.scale.height / 3) * 2.6, 'botonDesbloquearNo').setScale(0.5 * gameConfig.scale.height / 600);
        this.spriteDesbloquearNo.setInteractive().on('pointerdown', () => {
            this.sound.play('buttonSound', { volume: 0.15 });
            this.mensajeSeguro.destroy();
            this.spriteDesbloquearNo.destroy();
            this.spriteDesbloquearSi.destroy();
            this.BotonMenu.setInteractive();
            this.BotonTienda.setInteractive();
            this.BotonTienda.clearTint();
            this.BotonMenu.clearTint()
        });

        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width * 0.9 / 2, (gameConfig.scale.height / 3) * 2.6, 'botonDesbloquearSi').setScale(0.5 * gameConfig.scale.height / 600);
        this.spriteDesbloquearSi.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.rendirse(salir) });
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
        this.contMuertes = 0;
        clearInterval(this.inter);
        this.ocultarMenu(this);
        this.mensajeSeguro.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
        this.tweens.add({
            targets: this.music,
            volume: { from: 0.05, to: 0 },
            duration: 500
        }, this);
        this.is_paused = true;
        this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput, this.spriteParar2, this.spriteDisparar2, this.freezeInput2, this.shootInput2);
        this.fondo = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'fondo').setScale(gameConfig.scale.width / 800).setTint(0x000000);
        this.fondo.alpha = 0;
        this.tweens.add({
            targets: this.fondo,
            alpha: 1,
            duration: 500,
        }, this);
        if (espanol) {
            this.lastima = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Abandono').setScale(gameConfig.scale.height / 600);
            this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarB').setScale(0.6 * gameConfig.scale.height / 600);;
        } else {
            this.lastima = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Abandonoi').setScale(gameConfig.scale.height / 600);
            this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarBi').setScale(0.6 * gameConfig.scale.height / 600);;
        }
        this.continuar.setInteractive().on('pointerdown', () => {
            this.sound.play('buttonSound', { volume: 0.15 });
            this.music.stop();
            this.scene.stop();
            this.scene.start(escena);
        })
    }
    update() {
        if (this.win1 || this.win2) {
            clearInterval(this.inter);

            this.music.setVolume(0.05);
            this.shootInput.destroy();
            this.shootInput2.destroy();
            this.tweens.add({
                targets: this.music,
                volume: 0,
                duration: 500
            }, this);
            this.is_paused = true;
            this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput, this.spriteParar2, this.spriteDisparar2, this.freezeInput2, this.shootInput2);
            this.fondo = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'fondo').setScale(gameConfig.scale.width / 800).setTint(0x000000);
            this.fondo.alpha = 0;
            this.tweens.add({
                targets: this.fondo,
                alpha: 1,
                duration: 1000,
            }, this);
            if (this.win1) {
                if (espanol) {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Gana1').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarB').setScale(0.6 * gameConfig.scale.height / 600);
                } else {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Gana1i').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarBi').setScale(0.6 * gameConfig.scale.height / 600);
                }
            }
            else if (this.win2) {
                if (espanol) {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Gana2').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarB').setScale(0.6 * gameConfig.scale.height / 600);
                } else {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Gana2i').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarBi').setScale(0.6 * gameConfig.scale.height / 600);
                }
            }
            this.win1 = false;
            this.win2 = false;
            this.continuar.setInteractive().on('pointerdown', () => {
                this.sound.play('buttonSound', { volume: 0.15 });
                this.music.stop();
                this.scene.stop();
                this.scene.start("MultijugadorSeleccionScene");
            })

        }
    }
    pauseGame(spriteParar, spriteDisparar, f, s, spriteParar2, spriteDisparar2, f2, s2) {
        this.bulls = this.bulletsPre.getChildren();
        this.ebulls = this.bulletsEnemy.getChildren();
        if (!this.is_paused) {
            if (mapas[selectedMap].nombre === 'con') {
                this.TaxiDown.body.moves = true;
                this.TaxiUp.body.moves = true;
            }
            this.player.body.moves = true;
            this.enemy.body.moves = true;
            for (let i = 0; i < this.bulls.length; i++) {
                this.bulls[i].body.moves = true;
                if (armas[selectedWeapon1].nombre === 'Hacha') {
                    this.bulls[i].anims.play("egishoot");
                }
            }
            for (let i = 0; i < this.ebulls.length; i++) {
                this.ebulls[i].body.moves = true;
                if (armas[selectedWeapon2].nombre === 'Hacha') {
                    this.ebulls[i].anims.play("egishoot");
                }
            }
            spriteParar.setInteractive();
            spriteDisparar.setInteractive();
            f.enabled = true;
            s.enabled = true;

            spriteParar2.setInteractive();
            spriteDisparar2.setInteractive();
            f2.enabled = true;
            s2.enabled = true;
        } else {
            if (mapas[selectedMap].nombre === 'con') {
                this.TaxiDown.body.moves = false;
                this.TaxiUp.body.moves = false;
            }
            this.player.body.moves = false;
            this.enemy.body.moves = false;
            for (let i = 0; i < this.bulls.length; i++) {
                this.bulls[i].body.moves = false;
                if (armas[selectedWeapon1].nombre === 'Hacha') {
                    this.bulls[i].anims.stop();
                }
            }
            for (let i = 0; i < this.ebulls.length; i++) {
                this.ebulls[i].body.moves = false;
                if (armas[selectedWeapon2].nombre === 'Hacha') {
                    this.ebulls[i].anims.stop();
                }
            }
            f.enabled = false;
            s.enabled = false;
            spriteParar.disableInteractive();
            spriteDisparar.disableInteractive();

            f2.enabled = false;
            s2.enabled = false;
            spriteParar2.disableInteractive();
            spriteDisparar2.disableInteractive();
        }

    }
    fire(pl1) {
        if (pl1 === true) {
            this.sound.play(armas[selectedWeapon1].nombre + 'Fire', { volume: 0.08 });
            if (this.spriteParar.isDown || this.freezeInput.isDown) {
                this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'AttackIdle', false)
                    .once('animationcomplete', () => {
                        if (!this.is_paused) {
                            if (armas[selectedWeapon1].nombre === 'Honda') {
                                this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'Idle', true)
                            } else {
                                this.player.anims.stop();
                                this.player.setTexture(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'Idle');
                            }
                        }
                    });
            } else {
                this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre + 'Attack', false)
                    .once('animationcomplete', () => { if (!this.is_paused) { this.player.anims.play(personajes[selectedChar1].nombre + 'Player' + armas[selectedWeapon1].nombre, false) } });
            }
            if (this.bulletsPre.isFull()) {
                this.bulletsPre.getFirst(true).destroy();
            }

            if (armas[selectedWeapon1].nombre === 'Hacha') {
                this.bomb = this.physics.add.sprite(this.enemy.x + this.enemy.width / 3, this.enemy.y - this.enemy.height / 3, armas[selectedWeapon1].nombre + 'Weapon').setScale(armas[selectedWeapon1].scale * gameConfig.scale.height / 600);
                this.bomb.play("egishoot");
            } else {
                this.bomb = this.physics.add.sprite(this.enemy.x + this.enemy.width / 3, this.enemy.y - this.enemy.height / 3, armas[selectedWeapon1].nombre + 'Weapon').setScale(armas[selectedWeapon1].scale * gameConfig.scale.height / 600);
            }

            this.bomb.setTint(0x85baff);
            this.bulletsPre.add(this.bomb);

            if (armas[selectedWeapon1].nombre != 'Ball') {
                this.bomb.body.setAllowGravity(false);
                this.bomb.body.setCircle(armas[selectedWeapon1].circle[0], armas[selectedWeapon1].circle[1], armas[selectedWeapon1].circle[2]);
            }
            this.bomb.body.setVelocity(armas[selectedWeapon1].speed * gameConfig.scale.height / 600, 0);
            this.bomb.angle = 90;
        } else {
            this.sound.play(armas[selectedWeapon2].nombre + 'Fire', { volume: 0.08 });
            this.enemy.body.setOffset(this.enemy.width, 0);
            if (this.spriteParar.isDown || this.freezeInput.isDown) {
                this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'AttackIdle', false)
                    .once('animationcomplete', () => {
                        if (!this.is_paused) {
                            if (armas[selectedWeapon2].nombre === 'Honda') {
                                this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'Idle', true);
                                this.enemy.body.setOffset(0, 0);
                            } else {
                                this.enemy.anims.stop();
                                this.enemy.setTexture(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'Idle');
                                this.enemy.body.setOffset(0, 0);
                            }
                        }
                    });
            } else {
                this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre + 'Attack', false)
                    .once('animationcomplete', () => { if (!this.is_paused) { this.enemy.anims.play(personajes[selectedChar2].nombre + 'Player2' + armas[selectedWeapon2].nombre, false); this.enemy.body.setOffset(0, 0); } });
            }
            if (this.bulletsEnemy.isFull()) {
                this.bulletsEnemy.getFirst(true).destroy();
            }
            if (armas[selectedWeapon2].nombre === 'Hacha') {
                this.bomb = this.physics.add.sprite(this.enemy.x + this.enemy.width / 3, this.enemy.y - this.enemy.height / 3, armas[selectedWeapon1].nombre + 'Weapon').setScale(armas[selectedWeapon2].scale * gameConfig.scale.height / 600);
                this.bomb.play("egishoot");
            } else {
                this.bomb = this.physics.add.sprite(this.enemy.x - 10, this.enemy.y, armas[selectedWeapon2].nombre + 'Weapon').setScale(armas[selectedWeapon2].scale * gameConfig.scale.height / 600);
            }
            this.bomb.setTint(0xff7e7d);
            this.bulletsEnemy.add(this.bomb);
            if (armas[selectedWeapon2].nombre != 'Ball') {
                this.bomb.body.setAllowGravity(false);
                this.bomb.body.setCircle(armas[selectedWeapon2].circle[0], armas[selectedWeapon2].circle[1], armas[selectedWeapon2].circle[2]);
            }
            this.bomb.body.setVelocity(-armas[selectedWeapon2].speed * gameConfig.scale.height / 600, 0);
            this.bomb.angle = 270;
        }
    }

}