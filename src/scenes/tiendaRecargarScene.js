let monedas=[
    {
        "monedas":100,
        "euros": 1.09,
        "sprite": '100monedas'
    },
    {
        "monedas":500,
        "euros": 1.09,
        "sprite": '100monedas'
    },
    {
        "monedas":1000,
        "euros": 1.09,
        "sprite": '100monedas'
    }
];

class tiendaRecargarScene extends Phaser.Scene{
    constructor(){
        super("TiendaRecargarScene");
    }
    preload(){

        this.load.image('100monedas','assets/Interfaz/Tienda/Recargar/100monedas.png');

        //Assets español
        this.load.image('tituloRecargar', 'assets/Interfaz/Tienda/Recargar/tituloRecargar.png');
        
        //Assets ingles
        this.load.image('tituloRecargari', 'assets/Interfaz/Tienda/Recargar/tituloRecargar.png');
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloRecargar');
        }else{
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloRecargari');
        }

        this.sprite100monedas = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.5/3,monedas[0].sprite);
        this.sprite100monedas.setInteractive().on('pointerdown', () =>this.comprarMonedas(monedas[0]));

        this.sprite500monedas = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.5/3,monedas[1].sprite);
        this.sprite1000monedas = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.5/3,monedas[2].sprite);

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }
}