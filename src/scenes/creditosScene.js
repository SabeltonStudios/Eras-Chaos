class creditosScene extends Phaser.Scene{
    constructor(){
        super("CreditosScene");
    }

    preload(){
    }

    create(){
        //Añade el fono
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        //Añade el titulo de créditos, los desarrolladores y el texto de contacto en inglés o en español
        if(espanol){
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloCreditos').setScale(0.8 *gameConfig.scale.height / 600);

            this.spriteDesarrolladores = this.add.sprite(gameConfig.scale.width*1.2/4,gameConfig.scale.height*1.7/3,'desarrolladores').setScale(0.9 * gameConfig.scale.height / 600);
            this.spriteContacto = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*1.7/3,'contacto').setScale(0.9 * gameConfig.scale.height / 600);
        }else{
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloCreditosi').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteDesarrolladores = this.add.sprite(gameConfig.scale.width*1.2/4,gameConfig.scale.height*1.7/3,'desarrolladoresi').setScale(0.9 * gameConfig.scale.height / 600);
            this.spriteContacto = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*1.7/3,'contactoi').setScale(0.9 * gameConfig.scale.height / 600);
        }

        //Añade el botón de twitter con su link
        this.spriteTwitter = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*5/12,'twitter').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteTwitter.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); window.open('https://twitter.com/SabeltonStudios', '_blank')});

        //Añade el botón de instagram con su link
        this.spriteInstagram = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*6/12,'instagram').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteInstagram.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); window.open('https://www.instagram.com/sabeltonstudios/', '_blank')});

        //Añade el botón de youtube con su link
        this.spriteYoutube = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*7/12,'youtube').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteYoutube.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); window.open('https://youtube.com/channel/UCaw0EJIphiofJF5lcD1SEJg', '_blank')});

        //Añade el botón de itchio con su link
        this.spriteItchio = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*8/12,'itchio').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteItchio.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); window.open('https://sabeltonstudios.itch.io/', '_blank')});

        //Añade el botón de github con su link
        this.spriteGithub = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*9/12,'github').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteGithub.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); window.open('https://github.com/SabeltonStudios', '_blank')});

        //Añade el botón de gmail que lleva a la página web de gmail
        this.spriteGmail = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*10/12,'gmail').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteGmail.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); window.open('https://mail.google.com/', '_blank')});

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.15 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () =>{this.sound.play('buttonSound',{volume: 0.15});  this.scene.start("MenuPrincipalScene")});
    }
}