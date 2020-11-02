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

        var dinero = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/4,coins, { fill: '#fff' });

        if(espanol){
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloRecargar');
        }else{
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloRecargari');
        }

        this.sprite100monedas = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.5/3,monedas[0].sprite);
        this.sprite100monedas.setInteractive().on('pointerdown', () =>this.desbloquear(monedas[0],dinero,0));

        this.sprite500monedas = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.5/3,monedas[1].sprite);
        this.sprite500monedas.setInteractive().on('pointerdown', () =>this.desbloquear(monedas[1],dinero,1));

        this.sprite1000monedas = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.5/3,monedas[2].sprite);
        this.sprite1000monedas.setInteractive().on('pointerdown', () =>this.desbloquear(monedas[2],dinero,2));

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }

    //Show a message to unlock a map
    desbloquear(moneda,dinero,pos){

        if(espanol){
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear');
        }else{
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari');
        }
        

        this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width*1.2 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearNo');
        this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=> this.cerrarMensajeDesbloquear());

        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width*0.8 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearSi');
        this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=> this.comprarMonedas(moneda,dinero,pos));

    }

    //Destroy the message
    cerrarMensajeDesbloquear(){
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    comprarMonedas(moneda,dinero,pos){
        coins += moneda.monedas;
        dinero.setText(coins);
        this.cerrarMensajeDesbloquear();
    }
}