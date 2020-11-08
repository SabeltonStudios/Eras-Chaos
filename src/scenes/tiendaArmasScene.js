let armas=[
    {
        "bloqueado":false,
        "coins" : 0,
        "sprite": 'Unvaar',
        "spriteDesbloqueado": 'Unvaar',
        "spriteBloqueado": 'Unvaar'
    },
    {
        "bloqueado":false,
        "coins" : 250,
        "sprite": 'NahibB',
        "spriteDesbloqueado": 'Nahib',
        "spriteBloqueado": 'NahibB'
    },
    {
        "bloqueado":true,
        "coins" : 300,
        "sprite": 'LamberB',
        "spriteDesbloqueado": 'Lamber',
        "spriteBloqueado": 'LamberB'
    },
    {
        "bloqueado":true,
        "coins" : 400,
        "sprite": 'ThomasB',
        "spriteDesbloqueado": 'Thomas',
        "spriteBloqueado": 'ThomasB'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'ThomasB',
        "spriteDesbloqueado": 'Thomas',
        "spriteBloqueado": 'ThomasB'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'GaardB',
        "spriteDesbloqueado": 'Gaard',
        "spriteBloqueado": 'GaardB'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'CleopatraB',
        "spriteDesbloqueado": 'Cleopatra',
        "spriteBloqueado": 'CleopatraB'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'SirRodrickB',
        "spriteDesbloqueado": 'SirRodrick',
        "spriteBloqueado": 'SirRodrickB'
    }
];
class tiendaArmasScene extends Phaser.Scene{
    constructor(){
        super("TiendaArmasScene");
    }

    preload(){
        //Assets español
        this.load.image('tituloArmas', 'assets/Interfaz/Tienda/Armas/tituloArmas.png');

        //Assets ingles
        this.load.image('tituloArmasi', 'assets/Interfaz/Tienda/Armas/tituloArmasi.png');
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloArmas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloArmas');
        }else{
            this.spriteTituloArmas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloArmasi');
        }

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }
}