class creditosScene extends Phaser.Scene{
    constructor(){
        super("CreditosScene");
    }

    preload(){

        //Assets español
        this.load.image('tituloCreditos', 'assets/Interfaz/Creditos/tituloCreditos.png');
        this.load.image('desarrolladores', 'assets/Interfaz/Creditos/desarrolladores.png');
        this.load.image('contacto', 'assets/Interfaz/Creditos/contacto.png');

        //Assets ingles
        this.load.image('tituloCreditosi', 'assets/Interfaz/Creditos/tituloCreditosi.png');
        this.load.image('desarrolladoresi', 'assets/Interfaz/Creditos/desarrolladoresi.png');
        this.load.image('contactoi', 'assets/Interfaz/Creditos/contactoi.png');
        this.load.image('twitter','assets/Interfaz/Creditos/twitter.png');
        this.load.image('instagram','assets/Interfaz/Creditos/instagram.png');
        this.load.image('youtube','assets/Interfaz/Creditos/youtube.png');
        this.load.image('itchio','assets/Interfaz/Creditos/itchio.png');
        this.load.image('github','assets/Interfaz/Creditos/github.png');
        this.load.image('gmail','assets/Interfaz/Creditos/gmail.png');

    }
    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloCreditos').setScale(gameConfig.scale.height / 600);

            this.spriteDesarrolladores = this.add.sprite(gameConfig.scale.width*1.2/4,gameConfig.scale.height*1.7/3,'desarrolladores').setScale(0.9 * gameConfig.scale.height / 600);
            this.spriteContacto = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*1.7/3,'contacto').setScale(0.9 * gameConfig.scale.height / 600);
        }else{
            this.spriteTituloTienda = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloCreditosi').setScale(gameConfig.scale.height / 600);
            this.spriteDesarrolladores = this.add.sprite(gameConfig.scale.width*1.2/4,gameConfig.scale.height*1.7/3,'desarrolladoresi').setScale(0.9 * gameConfig.scale.height / 600);
            this.spriteContacto = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*1.7/3,'contactoi').setScale(0.9 * gameConfig.scale.height / 600);
        }

        this.spriteTwitter = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*5/12,'twitter').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteTwitter.setInteractive().on('pointerdown', () => window.open('https://twitter.com/SabeltonStudios', '_blank'));

        this.spriteInstagram = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*6/12,'instagram').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteInstagram.setInteractive().on('pointerdown', () => window.open('https://www.instagram.com/sabeltonstudios/', '_blank'));

        this.spriteYoutube = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*7/12,'youtube').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteYoutube.setInteractive().on('pointerdown', () => window.open('https://youtube.com/channel/UCaw0EJIphiofJF5lcD1SEJg', '_blank'));

        this.spriteItchio = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*8/12,'itchio').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteItchio.setInteractive().on('pointerdown', () => window.open('https://sabeltonstudios.itch.io/', '_blank'));

        this.spriteGithub = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*9/12,'github').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteGithub.setInteractive().on('pointerdown', () => window.open('https://github.com/SabeltonStudios', '_blank'));

        this.spriteGmail = this.add.sprite(gameConfig.scale.width*2.8/4,gameConfig.scale.height*10/12,'gmail').setScale(0.9 * gameConfig.scale.height / 600);
        this.spriteGmail.setInteractive().on('pointerdown', () => window.open('https://mail.google.com/', '_blank'));

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));
    }
}