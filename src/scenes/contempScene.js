class contempScene extends Phaser.Scene {
    contMuertes = 0;
    bulletsPre;
    bulletsEnemy;
    obstacles;
    player;
    enemy;
    gameOver;
    win;
    music;
    TaxiDown;
    TaxiUp;
    configPre = {
        classType: Phaser.GameObjects.Image,
        defaultKey: 'stone',
        defaultFrame: null,
        active: true,
        maxSize: 4,
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
        maxSize: 6,
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
        super("ContempScene");
    }

    preload() {
    }
    create() {
        if (this.music == null) {
            this.music = this.sound.add('conMusic');
        }
        if (this.contMuertes == 0) {
            this.music.play(this.mConfig);
        }
        this.gameOver = false;
        this.win = false;
        this.is_paused = false;
        //this.cameras.main.zoom= 1.3;
        this.cameras.main.zoomTo(1.05, 1000);
        this.physics.world.bounds.setTo(92.5 * gameConfig.scale.width / 800, 69.5 * gameConfig.scale.width / 800, 615 * gameConfig.scale.height / 600, 461 * gameConfig.scale.height / 600);
        this.physics.world.setBoundsCollision(false, false, true, true);

        this.Mapa = this.add.image(0, 0, 'conMapa').setOrigin(0)
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);
        this.muertesUI = this.add.image(gameConfig.scale.width * 0.97 / 2, 53 * gameConfig.scale.height / 600, 'MuertesUI').setScale(0.45 * gameConfig.scale.width / 800);
        this.contUI = this.add.text(gameConfig.scale.width * 1.1 / 2, 32 * gameConfig.scale.height / 600, this.contMuertes, { fontFamily: 'Arial', fontSize: 72, color: '#fff', stroke: '#000', strokeThickness: 4 }).setOrigin(0.5, 0).setScale(0.5 * gameConfig.scale.width / 800);

        this.player = this.physics.add.sprite(gameConfig.scale.width / 6.5, gameConfig.scale.height / 6, 'conPlayerAK').setOrigin(0,1).setScale(gameConfig.scale.width / 800)//*800/gameConfig.scale.width);
        this.player.body.immovable = true;
        this.enemy = this.physics.add.sprite(gameConfig.scale.width * 5.5 / 6, gameConfig.scale.height / 2, 'conEnemy').setOrigin(1, 1).setScale(gameConfig.scale.width / 800);
        this.enemy.flipX = true;
        this.enemy.body.immovable = true;

        this.player.anims.play("conPlayerAKMoving", true);
        this.player.setVelocity(0, -350 * gameConfig.scale.height / 600);
        this.player.setBounce(1);
        this.player.body.setAllowGravity(false);
        this.player.setCollideWorldBounds(true);

        this.enemy.anims.play('conenemyMoving', true);
        this.enemy.setVelocity(0, 200 * gameConfig.scale.height / 600);
        this.enemy.setBounce(1);
        this.enemy.body.setAllowGravity(false);
        this.enemy.setCollideWorldBounds(true);

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
        var wallU = this.add.rectangle(gameConfig.scale.width / 2, 0, gameConfig.scale.width, 20);
        this.physics.add.existing(wallU);
        wallU.body.setAllowGravity(false);
        wallU.body.setSize(gameConfig.scale.width, 20);
        wallU.body.immovable = true;
        var wallD = this.add.rectangle(gameConfig.scale.width / 2, gameConfig.scale.height, gameConfig.scale.width, 20);
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
        this.obstacles.create(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'conObj1').setScale(0.13 * gameConfig.scale.width / 800).body.setCircle(113, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width / 2.1, gameConfig.scale.height * 0.31, 'conObj1').setScale(0.11 * gameConfig.scale.width / 800).body.setCircle(111, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width / 1.9, gameConfig.scale.height * 0.62, 'conObj3').setScale(0.13 * gameConfig.scale.width / 800).body.setCircle(113, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.47, gameConfig.scale.height * 0.71, 'conObj2').setScale(0.13 * gameConfig.scale.width / 800).body.setCircle(113, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.44, gameConfig.scale.height * 0.42, 'conObj3').setScale(0.13 * gameConfig.scale.width / 800).body.setCircle(113, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.58, gameConfig.scale.height * 0.8, 'conObj2').setScale(0.11 * gameConfig.scale.width / 800).body.setCircle(111, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.56, gameConfig.scale.height * 0.2, 'conObj1').setScale(0.13 * gameConfig.scale.width / 800).body.setCircle(113, 40, 20).setAllowGravity(false);

        this.TaxiUp = this.add.sprite(gameConfig.scale.width / 3, gameConfig.scale.height + 50, 'conTaxiUp').setScale(0.12 * gameConfig.scale.width / 800);
        this.physics.add.existing(this.TaxiUp);
        this.TaxiUp.body.setVelocity(0, -600);
        this.TaxiUp.body.setAllowGravity(false);
        this.TaxiUp.body.immovable = true;

        this.TaxiDown = this.add.sprite(gameConfig.scale.width * 2 / 3, -50, 'conTaxiDown').setScale(0.12 * gameConfig.scale.width / 800);
        this.physics.add.existing(this.TaxiDown);
        this.TaxiDown.body.setVelocity(0, 550);
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
        this.physics.add.collider(this.TaxiUp, this.bulletsPre, function (wall, bullet) { wall.moves=true;});
        this.physics.add.collider(this.TaxiDown, this.bulletsPre, function (wall, bullet) { wall.moves=true; });
        this.physics.add.collider(this.TaxiUp, this.bulletsEnemy, function (wall, bullet) { wall.moves=true; });
        this.physics.add.collider(this.TaxiDown, this.bulletsEnemy, function (wall, bullet) { wall.moves=true; });

        this.physics.add.collider(wallR, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsPre, function (wall, bullet) { bullet.destroy(); });

        this.physics.add.collider(wallR, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallL, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallU, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });
        this.physics.add.collider(wallD, this.bulletsEnemy, function (wall, bullet) { bullet.destroy(); });

        //this.physics.add.collider(this.player, this.bulletsPre, () => this.gameOver = true);
        this.physics.add.collider(this.player, this.bulletsEnemy, () => this.gameOver = true);
        this.physics.add.collider(this.enemy, this.bulletsPre, () => { this.bulletsPre.clear(); this.win = true });
        this.physics.add.collider(this.bulletsPre, this.bulletsPre);
        this.physics.add.collider(this.bulletsEnemy, this.bulletsEnemy);
        this.physics.add.collider(this.bulletsPre, this.bulletsEnemy);

        this.physics.add.collider(this.bulletsEnemy, this.obstacles);
        this.physics.add.collider(this.bulletsPre, this.obstacles);


        this.spriteParar = this.add.sprite(gameConfig.scale.width * 14.5 / 16, gameConfig.scale.height * 11 / 12, 'FreezeBON').setScale(0.15 * gameConfig.scale.width / 800);
        this.spriteParar.setInteractive().on('pointerdown', () => { this.player.body.moves = false; this.player.anims.stop(); this.player.setTexture('conPlayerAKIdle') })
            .on('pointerup', () => { this.player.body.moves = true; this.player.anims.play('conPlayerAKMoving', true) })
            .on('pointerout', () => { this.player.body.moves = true; this.player.anims.play('conPlayerAKMoving', true) })
            .on('pointerdown', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('pointerup', () => this.spriteParar.setTexture('FreezeBON'))
            .on('pointerout', () => this.spriteParar.setTexture('FreezeBON'));

        this.spriteDisparar = this.add.sprite(gameConfig.scale.width *1.5/ 16, gameConfig.scale.height * 11 / 12, 'ShootBON').setScale(0.15 * gameConfig.scale.width / 800);
        this.spriteDisparar.setInteractive().on('pointerdown', () => this.fire())
            .on('pointerdown', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('pointerup', () => this.spriteDisparar.setTexture('ShootBON'))
            .on('pointerout', () => this.spriteDisparar.setTexture('ShootBON'));

        this.spritePausar = this.add.sprite(gameConfig.scale.width * 15.3 / 16, gameConfig.scale.height / 13, 'PauseBON').setScale(0.07 * gameConfig.scale.width / 800);
        this.spritePausar.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15});this.is_paused = !this.is_paused})
            .on('pointerdown', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput))
            .on('pointerdown', () => !this.is_paused ? this.player.anims.play('conPlayerAKMoving', true) : this.player.anims.stop())
            .on('pointerdown', () => !this.is_paused ? this.enemy.anims.play('conenemyMoving', true) : this.enemy.anims.stop())
            .on('pointerdown', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('pointerdown', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('pointerup', () => this.spritePausar.setTexture('PauseBON'))
            .on('pointerout', () => this.spritePausar.setTexture('PauseBON'));


        this.freezeInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.freezeInput.on('down', () => { this.player.body.moves = false; this.player.anims.stop(); this.player.setTexture('conPlayerAKIdle') })
            .on('up', () => { this.player.body.moves = true; this.player.anims.play('conPlayerAKMoving', true) })
            .on('down', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('up', () => this.spriteParar.setTexture('FreezeBON'));

        this.shootInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.shootInput.on('down', () => this.fire())
            .on('down', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('up', () => this.spriteDisparar.setTexture('ShootBON'));
        if (!this.win) {
            this.input.keyboard.on('keydown-' + 'ESC', () => {this.sound.play('buttonSound',{volume: 0.15});this.is_paused = !this.is_paused})
                .on('keydown-' + 'ESC', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput))
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.player.anims.play('conPlayerAKMoving', true) : this.player.anims.stop())
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.enemy.anims.play('conenemyMoving', true) : this.enemy.anims.stop())
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
                .on('keydown-' + 'ESC', () => this.spritePausar.setTexture('PauseBOFF'))
                .on('keyup-' + 'ESC', () => this.spritePausar.setTexture('PauseBON'));
        }
        this.inter = setInterval(() => {
            if (!this.is_paused) {
                this.sound.play('AKFire',{volume: 0.08});
                if (this.bulletsEnemy.isFull()) {
                    this.bulletsEnemy.getFirst(true).destroy();
                }
                this.bomb = this.bulletsEnemy.create(this.enemy.x - this.enemy.displayWidth / 3, this.enemy.y - this.enemy.displayHeight/2, 'AKWeapon').setScale(0.15 * gameConfig.scale.height / 600);
                this.bomb.setTint(0xff7e7d);
                this.bomb.body.setVelocity(-700 * gameConfig.scale.height / 600, 0);
                this.bomb.body.setAllowRotation();
                this.bomb.body.setAllowGravity(false);
                this.bomb.body.setCircle(50, this.bomb.displayWidth / 2, -this.bomb.displayHeight / 2);
                this.bomb.angle = 180;
                this.enemy.anims.play("conenemyAttacking", false).once('animationcomplete', () => { if (!this.is_paused) { this.enemy.anims.play("conenemyMoving", true); } }, this);
            }
        }, 500);
    }
    mostrarMenu(t) {
        this.music.setVolume(0.05);
        this.Menu = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'PauseMenu').setScale(0.5 * gameConfig.scale.height / 600);
        t.PauseTitle = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height * 0.36, 'PauseTitle').setScale(0.7 * gameConfig.scale.height / 600);
        t.BotonMenu = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.5, 'botonRendirse').setScale(gameConfig.scale.height / 600);
        t.BotonMenu.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); this.confirmarSalir("MenuPrincipalScene")});
        t.BotonCerrar = t.add.sprite(gameConfig.scale.width / 2 + (t.Menu.displayWidth / 2 - 30), gameConfig.scale.height / 2 - (t.Menu.displayHeight / 2 + 20), 'CloseB').setOrigin(0.5, 0).setScale(0.1 * gameConfig.scale.height / 600);
        //this.BotonCerrar = t.add.sprite(gameConfig.scale.width/2+(this.menu.displayWidth/2), gameConfig.scale.height * 0.36, 'CloseB').setScale(0.1 * gameConfig.scale.height / 600);
        t.BotonCerrar.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15});  this.is_paused = !this.is_paused; t.pauseGame(t.spriteParar, t.spriteDisparar, t.freezeInput, t.shootInput); this.ocultarMenu(this) });
        t.BotonTienda = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.6, 'botonTienda').setScale(gameConfig.scale.height / 600);
        t.BotonTienda.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); this.confirmarSalir("TiendaScene")});
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
            this.sound.play('buttonSound',{volume: 0.15});
            this.mensajeSeguro.destroy();
            this.spriteDesbloquearNo.destroy();
            this.spriteDesbloquearSi.destroy();
            this.BotonMenu.setInteractive();
            this.BotonTienda.setInteractive();
            this.BotonTienda.clearTint();
            this.BotonMenu.clearTint()
        });

        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width * 0.9 / 2, (gameConfig.scale.height / 3) * 2.6, 'botonDesbloquearSi').setScale(0.5 * gameConfig.scale.height / 600);
        this.spriteDesbloquearSi.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15});this.rendirse(salir)});
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
        this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput);
        this.fondo = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'fondo').setScale(gameConfig.scale.width / 800).setTint(0x000000);
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
            this.sound.play('buttonSound',{volume: 0.15});
            this.music.stop();
            this.scene.stop();
            this.scene.start(escena);
        })
    }
    update() {
        if (this.gameOver) {
            this.gameOver = false;
            this.sound.play('dieSound',{volume:0.2});
            this.contMuertes++;
            clearInterval(this.inter);
            this.shootInput.destroy();
            this.cameras.main.fadeIn(500, 180, 50, 50);
            //this.music.destroy();
            this.scene.sleep();
            this.scene.setActive(false);
            this.scene.restart();
        }
        if (this.win) {

            clearInterval(this.inter);
            this.win = false;
            sortResults("Actualidad", "Current Days", this.contMuertes,1);
            Game.saveFile();
            this.music.setVolume(0.05);
            this.sound.play('winSound',{volume:0.08});
            this.shootInput.destroy();
            this.tweens.add({
                targets: this.music,
                volume: 0,
                duration: 500
            }, this);
            this.enemy.anims.play("conenemyDying", true);
            if (completedLevel[4].completado) {
                this.contMuertes = 0;
                this.music.stop();
                this.scene.stop();
                this.scene.start("SelectNivelHistoria");
            }
            else {
                completedLevel[4].completado = true;
                mapas[4].bloqueado = false;
                personajes[4].bloqueado = false;
                armas[4].bloqueado = false;
                Game.saveFile();
                this.is_paused = true;
                this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput);
                this.fondo = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'fondo').setScale(gameConfig.scale.width / 800).setTint(0x000000);
                this.fondo.alpha = 0;
                this.tweens.add({
                    targets: this.fondo,
                    alpha: 1,
                    duration: 1000,
                }, this);

                if (espanol) {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'EnhorabuenaFinal').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarB').setScale(0.6 * gameConfig.scale.height / 600);
                } else {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'EnhorabuenaFinali').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarBi').setScale(0.6 * gameConfig.scale.height / 600);
                }
                this.continuar.setInteractive().on('pointerdown', () => {
                    this.sound.play('buttonSound',{volume: 0.15});
                    this.contMuertes = 0;
                    this.music.stop();
                    this.scene.stop();
                    this.scene.start("SelectNivelHistoria");
                })
            }
        }
    }
    pauseGame(spriteParar, spriteDisparar, f, s) {
        this.bulls = this.bulletsPre.getChildren();
        this.ebulls = this.bulletsEnemy.getChildren();
        if (!this.is_paused) {
            this.TaxiDown.body.moves = true;
            this.TaxiUp.body.moves = true;
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
            this.TaxiDown.body.moves = false;
            this.TaxiUp.body.moves = false;
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
        this.sound.play('AKFire',{volume: 0.08});
        if (this.spriteParar.isDown || this.freezeInput.isDown) {
            this.player.anims.play("conPlayerAKAttackIdle", false)
                .once('animationcomplete', () => { if (!this.is_paused) { this.player.anims.stop(); this.player.setTexture('conPlayerAKIdle') } });
        } else {
            this.player.anims.play("conPlayerAKAttack", false)
                .once('animationcomplete', () => { if (!this.is_paused) { this.player.anims.play("conPlayerAKMoving", false) } });
        }
        if (this.bulletsPre.isFull()) {
            //bullets.remove(bullets.getFirst(true), true);
            this.bulletsPre.getFirst(true).destroy();
        }
        var bomb = this.bulletsPre.create(this.player.x + this.player.displayWidth / 3, this.player.y - this.player.displayHeight / 2, 'AKWeapon').setScale(0.15 * gameConfig.scale.height / 600);
        bomb.setTint(0x85baff);
        bomb.body.setVelocity(700 * gameConfig.scale.height / 600, 0);
        //bomb.setOrigin(0,1);
        bomb.body.setAllowGravity(false);
        bomb.body.setCircle(50, 5, 5);
    }
}