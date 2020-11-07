let monedas=[
    {
        "monedas":500,
        "euros": 2.89,
        "sprite": '500monedas',
        "spritei":'500monedasi'
    },
    {
        "monedas":1100,
        "euros": 5.78,
        "sprite": '1100monedas',
        "spritei":'1100monedasi'
    },
    {
        "monedas":1725,
        "euros": 8.67,
        "sprite": '1725monedas',
        "spritei":'1725monedasi'
    },
    {
        "monedas":3250,
        "euros": 14.45,
        "sprite": '3250monedas',
        "spritei":'3250monedasi'
    }
];

let monedasButton = [];
var monedasPosicion = 0;
class tiendaRecargarScene extends Phaser.Scene{
    constructor(){
        super("TiendaRecargarScene");
    }
    preload(){

        //Assets de tienda
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');

        //Assets español
        this.load.image('tituloRecargar', 'assets/Interfaz/Tienda/Recargar/tituloRecargar.png');
        this.load.image('500monedas','assets/Interfaz/Tienda/Recargar/500monedas.png');
        this.load.image('1100monedas','assets/Interfaz/Tienda/Recargar/1100monedas.png');
        this.load.image('1725monedas','assets/Interfaz/Tienda/Recargar/1725monedas.png');
        this.load.image('3250monedas','assets/Interfaz/Tienda/Recargar/3250monedas.png');

        //Assets ingles
        this.load.image('tituloRecargari', 'assets/Interfaz/Tienda/Recargar/tituloRecargari.png');
        this.load.image('500monedasi','assets/Interfaz/Tienda/Recargar/500monedasi.png');
        this.load.image('1100monedasi','assets/Interfaz/Tienda/Recargar/1100monedasi.png');
        this.load.image('1725monedasi','assets/Interfaz/Tienda/Recargar/1725monedasi.png');
        this.load.image('3250monedasi','assets/Interfaz/Tienda/Recargar/3250monedasi.png');
    }

    create(){
        monedasPosicion = 0;

        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        var dinero = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/4,coins, { fill: '#fff' });

        if(espanol){
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloRecargar');
            monedasButton[0] = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.7/3,monedas[0].sprite);
            monedasButton[1] = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.7/3,monedas[1].sprite);
            monedasButton[2] = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.7/3,monedas[2].sprite);
        }else{
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloRecargari');
            monedasButton[0] = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.7/3,monedas[0].spritei);
            monedasButton[1] = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.7/3,monedas[1].spritei);
            monedasButton[2] = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.7/3,monedas[2].spritei);
        }

        
        monedasButton[0].setInteractive().on('pointerdown', () =>this.desbloquear(monedas[0+monedasPosicion],dinero,0));
        monedasButton[1].setInteractive().on('pointerdown', () =>this.desbloquear(monedas[1+monedasPosicion],dinero,1));
        monedasButton[2].setInteractive().on('pointerdown', () =>this.desbloquear(monedas[2+monedasPosicion],dinero,2));

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25,gameConfig.scale.height*1.5/3,'flechaIzquierda').setScale(0.4);
        this.spriteIzquierda.setInteractive().on('pointerdown', () =>this.trasladarIzquierda());

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width*24/25,gameConfig.scale.height*1.5/3,'flechaDerecha').setScale(0.4);
        this.spriteDerecha.setInteractive().on('pointerdown', () =>this.trasladarDerecha());

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }

    //Show a message to unlock a map
    desbloquear(moneda,dinero,pos){
        this.spriteDerecha.disableInteractive();
        this.spriteIzquierda.disableInteractive();
        var i;
        for (i = 0; i < monedasButton.length; i++) {
            monedasButton[i].disableInteractive();
        }

        if(espanol){
            monedasButton[pos].setTint(0xDEDE7C);
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear');
        }else{
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari');
        }
        

        this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width*1.2 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearNo');
        this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=> this.cerrarMensajeDesbloquear(pos));

        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width*0.8 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearSi');
        this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=> this.comprarMonedas(moneda,dinero,pos));

    }

    //Destroy the message
    cerrarMensajeDesbloquear(pos){
        var i;
        for (i = 0; i < monedasButton.length; i++) {
            monedasButton[i].setInteractive();
        }
        monedasButton[pos].clearTint();
        this.spriteDerecha.setInteractive();
        this.spriteIzquierda.setInteractive();
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    comprarMonedas(moneda,dinero,pos){
        coins += moneda.monedas;
        dinero.setText(coins);
        this.cerrarMensajeDesbloquear(pos);
    }

    //Mueve los mapas para que se vean los de la izquierda
    trasladarIzquierda(){
        if(monedasPosicion>0){
            monedasPosicion--;
            var i;
            for (i = 0; i < monedasButton.length; i++) {
                if(espanol){
                    monedasButton[i].setTexture(monedas[monedasPosicion+i].sprite);
                }else{
                    monedasButton[i].setTexture(monedas[monedasPosicion+i].spritei);
                }
                
            }
        }
    }

    //Mueve los mapas para que se vean los de la derecha
    trasladarDerecha(){
        if((monedasPosicion+3)<monedas.length){
            monedasPosicion++;
            var i;
            for (i = 0; i < monedasButton.length; i++) {
                if(espanol){
                    monedasButton[i].setTexture(monedas[monedasPosicion+i].sprite);
                }else{
                    monedasButton[i].setTexture(monedas[monedasPosicion+i].spritei);
                }
            }
        }
        
    }
}