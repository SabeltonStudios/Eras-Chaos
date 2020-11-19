class industrialScene extends Phaser.Scene {
    //Variables para llevar la puntuación, los grupos de proyectiles, obstáculos, jugadores, booleanos para la gestión de derrota y victoria
    //música y configuraciones por defecto de música y grupos de objetos
    contMuertes = 0;
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
        defaultKey: 'stone',
        defaultFrame: null,
        active: true,
        maxSize: 3,
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
        bounceX: 1.05,
        bounceY: 1.05,
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
        super("IndustrialScene");
    }

    preload() {
    }
    create() {
        //Gestión de la música para que se añada al entrar al nivel y sólo se ejecute desde cero al llegar
        //tras morir, sigue sonando 
        if (this.music == null) {
            this.music = this.sound.add('indMusic');
        }
        if (this.contMuertes == 0) {
            this.music.play(this.mConfig);
        }
        //Reiniciar las variables booleanas (derrota,victoria y pausa) y zoom inicial de cámara
        this.gameOver = false;
        this.win = false;
        this.is_paused = false;
        this.cameras.main.zoomTo(1.05, 1000);
        //Fijar los world bounds para limitar el movimiento de los personajes
        this.physics.world.bounds.setTo(92.5 * gameConfig.scale.width / 800, 69.5 * gameConfig.scale.width / 800, 615 * gameConfig.scale.height / 600, 461 * gameConfig.scale.height / 600);
        this.physics.world.setBoundsCollision(false, false, true, true);
        //Creación del mapa ajustado a la escala y de los elementos de UI que indican al jugador el número de muertes
        this.Mapa = this.add.image(0, 0, 'indMap').setOrigin(0)
        this.Mapa.setScale(gameConfig.scale.width / this.Mapa.width, gameConfig.scale.height / this.Mapa.height);
        this.muertesUI = this.add.image(gameConfig.scale.width * 0.97 / 2, 53 * gameConfig.scale.height / 600, 'MuertesUI').setScale(0.45 * gameConfig.scale.width / 800);
        this.contUI = this.add.text(gameConfig.scale.width * 1.1 / 2, 32 * gameConfig.scale.height / 600, this.contMuertes, { fontFamily: 'Arial', fontSize: 72, color: '#fff', stroke: '#000', strokeThickness: 4 }).setOrigin(0.5, 0).setScale(0.5 * gameConfig.scale.width / 800);
        //Creación de personaje y enemigo dentro del grupo de físicas, ambos inamovibles para no ser desplazados por otros cuerpos

        this.player = this.physics.add.sprite(gameConfig.scale.width / 6.5, gameConfig.scale.height / 6, 'indPlayerMos').setOrigin(0, 1).setScale(gameConfig.scale.width / 800)//*800/gameConfig.scale.width);
        this.player.body.immovable = true;
        this.enemy = this.physics.add.sprite(gameConfig.scale.width * 5.5 / 6, gameConfig.scale.height / 2, 'indEnemy').setOrigin(1, 1).setScale(gameConfig.scale.width / 800)//*800/gameConfig.scale.width);
        this.enemy.flipX = true;
        this.enemy.body.immovable = true;
        //Ejecutar la animación por defecto de ambos personajes, así como activar colisiones con el mundo, fijar velocidad relativa al dispositivo
        //rebote y deshabilitar la gravedad
        this.player.anims.play("indPlayerMosMoving", true);
        this.player.setVelocity(0, -330 * gameConfig.scale.height / 600);
        this.player.setBounce(1);
        this.player.body.setAllowGravity(false);
        this.player.setCollideWorldBounds(true);

        this.enemy.anims.play('indenemyMoving', true);
        this.enemy.setVelocity(0, 200 * gameConfig.scale.height / 600);
        this.enemy.setBounce(1);
        this.enemy.body.setAllowGravity(false);
        this.enemy.setCollideWorldBounds(true);
        //Creación de cuatro muros internos para rebotar los proyectiles con las paredes de la fábrica
        var wallR = this.add.rectangle(gameConfig.scale.width - 30, gameConfig.scale.height / 2, 50 * gameConfig.scale.height / 600, gameConfig.scale.height);
        this.physics.add.existing(wallR);
        wallR.body.setAllowGravity(false);
        wallR.body.setSize(50 * gameConfig.scale.height / 600, gameConfig.scale.height);
        wallR.body.immovable = true;
        var wallL = this.add.rectangle(30, gameConfig.scale.height / 2, 50 * gameConfig.scale.height / 600, gameConfig.scale.height);
        this.physics.add.existing(wallL);
        wallL.body.setAllowGravity(false);
        wallL.body.setSize(50 * gameConfig.scale.height / 600, gameConfig.scale.height);
        wallL.body.immovable = true;
        var wallU = this.add.rectangle(gameConfig.scale.width / 2, 0, 550 * gameConfig.scale.width / 800, 170 * gameConfig.scale.height / 600);
        this.physics.add.existing(wallU);
        wallU.body.setAllowGravity(false);
        wallU.body.setSize(550 * gameConfig.scale.width / 800, 170 * gameConfig.scale.height / 600);
        wallU.body.immovable = true;
        var wallD = this.add.rectangle(gameConfig.scale.width / 2, gameConfig.scale.height + 20, gameConfig.scale.width, 50 * gameConfig.scale.height / 600);
        this.physics.add.existing(wallD);
        wallD.body.setAllowGravity(false);
        wallD.body.setSize(gameConfig.scale.width, 50 * gameConfig.scale.height / 600);
        wallD.body.immovable = true;
        //Creación de los grupos de proyectiles dentro del mundo de físicas
        this.bulletsPre = this.physics.add.group(this.configPre);

        this.bulletsEnemy = this.physics.add.group(this.EnemyConfigPre);
        //Creación de los distintos obstáculos presentes en escena
        this.obstacles = this.physics.add.group(this.ObstaclesConfig);
        this.obstacles.setOrigin(0.5, 0.5);
        this.obstacles.create(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'indObj1').setScale(0.14 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(114, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width / 2.1, gameConfig.scale.height * 0.25, 'indObj1').setScale(0.12 * gameConfig.scale.height / 600).body.setCircle(112, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width / 1.9, gameConfig.scale.height * 0.77, 'indObj3').setScale(0.14 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(114, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.4, gameConfig.scale.height * 0.6, 'indObj2').setScale(0.12 * gameConfig.scale.height / 600).body.setCircle(112, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.39, gameConfig.scale.height * 0.42, 'indObj3').setScale(0.14 * gameConfig.scale.height / 600).body.setCircle(114, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.61, gameConfig.scale.height * 0.59, 'indObj2').setScale(0.14 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(114, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.6, gameConfig.scale.height * 0.4, 'indObj1').setScale(0.12 * gameConfig.scale.height / 600).body.setCircle(112, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.3, gameConfig.scale.height * 0.3, 'indObj3').setScale(0.12 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(112, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.29, gameConfig.scale.height * 0.73, 'indObj2').setScale(0.14 * gameConfig.scale.height / 600).body.setCircle(114, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.69, gameConfig.scale.height * 0.29, 'indObj3').setScale(0.12 * gameConfig.scale.height / 600).body.setCircle(112, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.7, gameConfig.scale.height * 0.75, 'indObj1').setScale(0.14 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(114, 40, 20).setAllowGravity(false);

        this.obstacles.create(gameConfig.scale.width * 0.39, gameConfig.scale.height * 0.15, 'indObj2').setScale(0.15 * gameConfig.scale.height / 600).body.setCircle(115, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.4, gameConfig.scale.height * 0.87, 'indObj1').setScale(0.15 * gameConfig.scale.height / 600).setFlip(true, false).body.setCircle(115, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.61, gameConfig.scale.height * 0.17, 'indObj3').setScale(0.17 * gameConfig.scale.height / 600).body.setCircle(117, 40, 20).setAllowGravity(false);
        this.obstacles.create(gameConfig.scale.width * 0.6, gameConfig.scale.height * 0.82, 'indObj2').setScale(0.15 * gameConfig.scale.height / 600).body.setCircle(115, 40, 20).setAllowGravity(false);
        //Colisiones entre el jugador y las balas enemigas para fijar la derrota, 
        //del enemigo con nuestras proyectiles para fijar la victoria (y limpiar el grupo para evitar detecciones vacías),
        //y entre los proyectiles entre sí, con los muros internos y con los obstaculos para los rebotes
        this.physics.add.collider(wallR, this.bulletsPre);
        this.physics.add.collider(wallL, this.bulletsPre);
        this.physics.add.collider(wallU, this.bulletsPre);
        this.physics.add.collider(wallD, this.bulletsPre);
        this.physics.add.collider(wallR, this.bulletsEnemy);
        this.physics.add.collider(wallL, this.bulletsEnemy);
        this.physics.add.collider(wallU, this.bulletsEnemy);
        this.physics.add.collider(wallD, this.bulletsEnemy);

        this.physics.add.collider(this.player, this.bulletsEnemy, () => this.gameOver = true);
        this.physics.add.collider(this.enemy, this.bulletsPre, () => { this.bulletsPre.clear(); this.win = true });
        this.physics.add.collider(this.bulletsPre, this.bulletsPre);
        this.physics.add.collider(this.bulletsEnemy, this.bulletsEnemy);
        this.physics.add.collider(this.bulletsPre, this.bulletsEnemy);

        this.physics.add.collider(this.bulletsEnemy, this.obstacles);
        this.physics.add.collider(this.bulletsPre, this.obstacles);

        //Botón interactivo para detener al jugador
        this.spriteParar = this.add.sprite(gameConfig.scale.width * 14.5 / 16, gameConfig.scale.height * 10.5 / 12, 'FreezeBON').setScale(0.15 * gameConfig.scale.width / 800);
        this.spriteParar.setInteractive().on('pointerdown', () => { this.player.body.moves = false; this.player.anims.stop(); this.player.setTexture('indPlayerMosIdle') })
            .on('pointerup', () => { this.player.body.moves = true; this.player.anims.play('indPlayerMosMoving', true) })
            .on('pointerout', () => { this.player.body.moves = true; this.player.anims.play('indPlayerMosMoving', true) })
            .on('pointerdown', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('pointerup', () => this.spriteParar.setTexture('FreezeBON'))
            .on('pointerout', () => this.spriteParar.setTexture('FreezeBON'));
        //Botón interactivo para disparar proyectiles
        this.spriteDisparar = this.add.sprite(gameConfig.scale.width * 1.5 / 16, gameConfig.scale.height * 10.5 / 12, 'ShootBON').setScale(0.15 * gameConfig.scale.width / 800);
        this.spriteDisparar.setInteractive().on('pointerdown', () => this.fire())
            .on('pointerdown', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('pointerup', () => this.spriteDisparar.setTexture('ShootBON'))
            .on('pointerout', () => this.spriteDisparar.setTexture('ShootBON'));
        //Botón interactivo para pausar el juego
        this.spritePausar = this.add.sprite(gameConfig.scale.width * 15.3 / 16, gameConfig.scale.height / 13, 'PauseBON').setScale(0.07 * gameConfig.scale.width / 800);
        this.spritePausar.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.is_paused = !this.is_paused })
            .on('pointerdown', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput))
            .on('pointerdown', () => !this.is_paused ? this.player.anims.play('indPlayerMosMoving', true) : this.player.anims.stop())
            .on('pointerdown', () => !this.is_paused ? this.enemy.anims.play('indenemyMoving', true) : this.enemy.anims.stop())
            .on('pointerdown', () => this.spritePausar.setTexture('PauseBOFF'))
            .on('pointerdown', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
            .on('pointerup', () => this.spritePausar.setTexture('PauseBON'))
            .on('pointerout', () => this.spritePausar.setTexture('PauseBON'));

        //Input de teclado para detener al jugador
        this.freezeInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.freezeInput.on('down', () => { this.player.body.moves = false; this.player.anims.stop(); this.player.setTexture('indPlayerMosIdle') })
            .on('up', () => { this.player.body.moves = true; this.player.anims.play('indPlayerMosMoving', true) })
            .on('down', () => this.spriteParar.setTexture('FreezeBOFF'))
            .on('up', () => this.spriteParar.setTexture('FreezeBON'));
        //Input de teclado para disparar proyectiles
        this.shootInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.shootInput.on('down', () => this.fire())
            .on('down', () => this.spriteDisparar.setTexture('ShootBOFF'))
            .on('up', () => this.spriteDisparar.setTexture('ShootBON'));
        //Input de teclado para pausar el juego, sólo si no se ha ganado
        if (!this.win) {
            this.input.keyboard.on('keydown-' + 'ESC', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.is_paused = !this.is_paused })
                .on('keydown-' + 'ESC', () => this.pauseGame(this.spriteParar, this.spriteDisparar, this.freezeInput, this.shootInput))
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.player.anims.play('indPlayerMosMoving', true) : this.player.anims.stop())
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.enemy.anims.play('indenemyMoving', true) : this.enemy.anims.stop())
                .on('keydown-' + 'ESC', () => !this.is_paused ? this.ocultarMenu(this) : this.mostrarMenu(this))
                .on('keydown-' + 'ESC', () => this.spritePausar.setTexture('PauseBOFF'))
                .on('keyup-' + 'ESC', () => this.spritePausar.setTexture('PauseBON'));
        }
        //Método para disparar proyectiles del enemigo cada 2 segundos, fijando las propiedades físicas correspondientes y ejecutando su animación

        this.inter = setInterval(() => {
            if (!this.is_paused) {
                this.sound.play('MosFire', { volume: 0.08 });
                if (this.bulletsEnemy.isFull()) {
                    this.bulletsEnemy.getFirst(true).destroy();
                }
                this.bomb = this.bulletsEnemy.create(this.enemy.x - this.enemy.displayWidth / 3, this.enemy.y - this.enemy.displayHeight / 2, 'MosWeapon').setScale(0.8 * gameConfig.scale.height / 600);
                this.bomb.setTint(0xff7e7d);
                this.bomb.body.setVelocity(-650 * gameConfig.scale.height / 600, 0);
                this.bomb.body.setAllowGravity(false);
                this.bomb.body.setCircle(9.3, 4, 4);
                this.bomb.angle = 270;
                this.enemy.anims.play("indenemyAttacking", false).once('animationcomplete', () => { if (!this.is_paused) { this.enemy.anims.play("indenemyMoving", true); } }, this);
            }
        }, 750);
    }
    //Función para mostrar el menú de pausa, con sus botones y elementos visuales, dependiendo del idioma
    mostrarMenu(t) {
        this.music.setVolume(0.05);
        this.Menu = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'PauseMenu').setScale(0.5 * gameConfig.scale.height / 600);
        t.PauseTitle = t.add.image(gameConfig.scale.width / 2, gameConfig.scale.height * 0.36, 'PauseTitle').setScale(0.7 * gameConfig.scale.height / 600);
        t.BotonMenu = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.5, 'botonRendirse').setScale(gameConfig.scale.height / 600);
        t.BotonMenu.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.confirmarSalir("MenuPrincipalScene") });
        t.BotonCerrar = t.add.sprite(gameConfig.scale.width / 2 + (t.Menu.displayWidth / 2 - 30), gameConfig.scale.height / 2 - (t.Menu.displayHeight / 2 + 20), 'CloseB').setOrigin(0.5, 0).setScale(0.1 * gameConfig.scale.height / 600);
        t.BotonCerrar.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.is_paused = !this.is_paused; t.pauseGame(t.spriteParar, t.spriteDisparar, t.freezeInput, t.shootInput); this.ocultarMenu(this) });
        t.BotonTienda = t.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 0.6, 'botonTienda').setScale(gameConfig.scale.height / 600);
        t.BotonTienda.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.confirmarSalir("TiendaScene") });
        if (!espanol) {
            t.PauseTitle.setTexture('PauseTitlei');
            t.BotonMenu.setTexture('botonRendirsei');
            t.BotonTienda.setTexture('botonTiendai');
        }
    }
    //Función para confirmar la rendición del jugador, pasando como argumento la escena a la que queremos ir
    confirmarSalir(salir) {
        this.BotonTienda.setTint(0x888888);
        this.BotonMenu.setTint(0x888888);
        this.BotonMenu.disableInteractive();
        this.BotonTienda.disableInteractive();
        this.mensajeSeguro = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2.5 / 3, 'confirmarRendirse').setScale(0.7 * gameConfig.scale.height / 600, 0.6 * gameConfig.scale.height / 600);
        if (!espanol) {
            this.mensajeSeguro.setTexture('confirmarRendirsei');
        }
        //Si niega querer salir limpiamos la UI
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
        //Si confirma, llamamos a la función rendirse
        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width * 0.9 / 2, (gameConfig.scale.height / 3) * 2.6, 'botonDesbloquearSi').setScale(0.5 * gameConfig.scale.height / 600);
        this.spriteDesbloquearSi.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.rendirse(salir) });
    }
    //Función para limpiar los elementos visuales del menú de pausa
    ocultarMenu(t) {
        this.music.setVolume(0.2);
        t.Menu.destroy();
        t.PauseTitle.destroy();
        t.BotonTienda.destroy();
        t.BotonMenu.destroy();
        t.BotonCerrar.destroy();
    }
    //Función para salir de la escena, tras confirmar la rendición del jugador
    rendirse(escena) {
        //Se limpian las variables para evitar colisiones y réplicas al volver a jugar el nivel
        this.shootInput.destroy();
        this.contMuertes = 0;
        clearInterval(this.inter);
        this.ocultarMenu(this);
        this.mensajeSeguro.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
        //Fundido de música, detención del juego y fundido a negro con el mensaje final y el botón de confirmar, que carga la escena
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
            this.sound.play('buttonSound', { volume: 0.15 });
            this.music.stop();
            this.scene.stop();
            this.scene.start(escena);
        })
    }
    update() {
        //Si el jugador es herido incrementamos el contador, limpiamos y reseteamos la escena, con un fade a rojo,
        // además de incrementar el contador de muertes
        if (this.gameOver) {
            this.gameOver = false;
            this.sound.play('dieSound', { volume: 0.2 });
            this.contMuertes++;
            clearInterval(this.inter);
            this.shootInput.destroy();
            this.cameras.main.fadeIn(500, 180, 50, 50);
            this.scene.sleep();
            this.scene.setActive(false);
            this.scene.restart();
        }
        //Si el jugador gana, guardamos el resultado para el ranking, así como en la caché del navegador,
        //hacemos fade de música y mostramos al enemigo muriendo
        if (this.win) {

            clearInterval(this.inter);
            this.win = false;
            sortResults("Revolución Industrial", "Industrial Revolution", this.contMuertes, 2);
            Game.saveFile();
            this.music.setVolume(0.05);
            this.sound.play('winSound', { volume: 0.08 });
            this.shootInput.destroy();
            this.tweens.add({
                targets: this.music,
                volume: 0,
                duration: 500
            }, this);
            this.enemy.anims.play("indenemyDying", true);
            //Si el jugador ya había completado el nivel antes simplemente limpiamos y cargamos el siguiente nivel
            if (completedLevel[3].completado) {
                this.contMuertes = 0;
                this.music.stop();
                this.scene.stop();
                this.scene.start("ContempScene");
            }
            //si no, lo marcamos como completado y le indicamos que ha desbloqueado un nuevo nivel,
            //de forma similar a como le indicábamos que se rendía
            else {
                completedLevel[3].completado = true;
                mapas[3].bloqueado = false;
                personajes[3].bloqueado = false;
                armas[3].bloqueado = false;
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
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Enhorabuena').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarB').setScale(0.6 * gameConfig.scale.height / 600);
                } else {
                    this.enhorabuena = this.add.image(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'Enhorabuenai').setScale(gameConfig.scale.height / 600);
                    this.continuar = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height * 2 / 3, 'ContinuarBi').setScale(0.6 * gameConfig.scale.height / 600);
                }
                this.continuar.setInteractive().on('pointerdown', () => {
                    this.sound.play('buttonSound', { volume: 0.15 });
                    this.contMuertes = 0;
                    this.music.stop();
                    this.scene.stop();
                    this.scene.start("ContempScene");
                })
            }
        }
    }
    //Función para pausar/despausar el juego, deteniendo/activando todo lo móvil,
    //las animaciones y deshabilitando/habilitando los input
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
        } else {
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
    //Función para disparar usada por el jugador, que dependiendo del estado en que se encuentre pasa a una u
    //otra animación
    fire() {
        this.sound.play('MosFire', { volume: 0.08 });
        if (this.spriteParar.isDown || this.freezeInput.isDown) {
            this.player.anims.play("indPlayerMosAttackIdle", false)
                .once('animationcomplete', () => { if (!this.is_paused) { this.player.anims.stop(); this.player.setTexture('indPlayerMosIdle') } });
        } else {
            this.player.anims.play("indPlayerMosAttack", false)
                .once('animationcomplete', () => { if (!this.is_paused) { this.player.anims.play("indPlayerMosMoving", false) } });
        }
        if (this.bulletsPre.isFull()) {
            this.bulletsPre.getFirst(true).destroy();
        }
        //el proyectil se tiñe para distinguirlo del enemigo, y se le fija su ángulo, escala, velocidad, collider y deshabilitación de la gravedad

        var bomb = this.bulletsPre.create(this.player.x + this.player.displayWidth / 3, this.player.y - this.player.displayHeight / 2, 'MosWeapon').setScale(0.8 * gameConfig.scale.height / 600);
        bomb.setTint(0x85baff);
        bomb.body.setVelocity(650 * gameConfig.scale.height / 600, 0);
        bomb.body.setAllowGravity(false);
        bomb.body.setCircle(9.3, 4, 4);
        bomb.angle = 90;
    }
}
