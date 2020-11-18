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



class tiendaRecargarScene extends Phaser.Scene{
    monedasButton = [];
    monedasPosicion = 0;
    constructor(){
        super("TiendaRecargarScene");
    }
    preload(){

    }

    create(){
        this.monedasPosicion = 0;

        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        var dinero = this.add.text(gameConfig.scale.width/2,gameConfig.scale.height*1.1/4,coins, {font:"25px euphorigenic", fill: '#ffffff' ,align: "center"}).setOrigin(0.5,0).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width*1.1 /2,gameConfig.scale.height*1.19/4,'coins').setScale(1.2*gameConfig.scale.height / 600);
        dinero.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);

        if(espanol){
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloRecargar').setScale(0.8 * gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugador').setScale(0.8 *gameConfig.scale.height / 600);
            this.monedasButton[0] = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.8/3,monedas[0].sprite).setScale(gameConfig.scale.height / 600);
            this.monedasButton[1] = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.8/3,monedas[1].sprite).setScale(gameConfig.scale.height / 600);
            this.monedasButton[2] = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.8/3,monedas[2].sprite).setScale(gameConfig.scale.height / 600);
        }else{
            this.spriteTituloRecargar = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloRecargari').setScale(0.8 * gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugadori').setScale(0.8 *gameConfig.scale.height / 600);
            this.monedasButton[0] = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.8/3,monedas[0].spritei).setScale(gameConfig.scale.height / 600);
            this.monedasButton[1] = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.8/3,monedas[1].spritei).setScale(gameConfig.scale.height / 600);
            this.monedasButton[2] = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.8/3,monedas[2].spritei).setScale(gameConfig.scale.height / 600);
        }

        
        this.monedasButton[0].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(monedas[0+this.monedasPosicion],dinero,0)});
        this.monedasButton[1].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(monedas[1+this.monedasPosicion],dinero,1)});
        this.monedasButton[2].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(monedas[2+this.monedasPosicion],dinero,2)});

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25,gameConfig.scale.height*1.8/3,'flechaIzquierda').setScale(0.4 * gameConfig.scale.height / 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 });this.trasladarIzquierda()});

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width*24/25,gameConfig.scale.height*1.8/3,'flechaDerecha').setScale(0.4 * gameConfig.scale.height / 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarDerecha()});

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaScene")});
    }

    //Show a message to unlock a map
    desbloquear(moneda,dinero,pos){
        this.spriteDerecha.disableInteractive();
        this.spriteIzquierda.disableInteractive();
        var i;
        for (i = 0; i < this.monedasButton.length; i++) {
            this.monedasButton[i].disableInteractive();
        }

        if(espanol){
            this.monedasButton[pos].setTint(0xDEDE7C);
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear').setScale(gameConfig.scale.height / 600);
        }else{
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari').setScale(gameConfig.scale.height / 600);
        }
        

        this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width/2+(this.mensajeDesbloquear.displayWidth/4),(gameConfig.scale.height/3)*2.4+(this.mensajeDesbloquear.displayHeight/5),'botonDesbloquearNo').setScale(gameConfig.scale.height / 600);
        this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 }); this.cerrarMensajeDesbloquear(pos)});

        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width/2-(this.mensajeDesbloquear.displayWidth/4),(gameConfig.scale.height/3)*2.4+(this.mensajeDesbloquear.displayHeight/5),'botonDesbloquearSi').setScale(gameConfig.scale.height / 600);
        this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 }); this.comprarMonedas(moneda,dinero,pos)});

    }

    //Destroy the message
    cerrarMensajeDesbloquear(pos){
        var i;
        for (i = 0; i < this.monedasButton.length; i++) {
            this.monedasButton[i].setInteractive();
        }
        this.monedasButton[pos].clearTint();
        this.spriteDerecha.setInteractive();
        this.spriteIzquierda.setInteractive();
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    comprarMonedas(moneda,dinero,pos){
        coins += moneda.monedas;
        Game.saveFile();
        if(espanol){
            this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.7,'¡Has comprado '+moneda.monedas+' monedas!',{font:"35px euphorigenic", fill: '#E9BB00' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
        }else{
            this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.7,'You have bought '+moneda.monedas+' coins!',{font:"35px euphorigenic", fill: '#E9BB00' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
        }
        this.comprado.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
        var timer = this.time.delayedCall(1000, ()=>this.comprado.destroy(), []);
        dinero.setText(coins);
        this.cerrarMensajeDesbloquear(pos);
    }

    //Mueve los mapas para que se vean los de la izquierda
    trasladarIzquierda(){
        if(this.monedasPosicion>0){
            this.monedasPosicion--;
            var i;
            for (i = 0; i < this.monedasButton.length; i++) {
                if(espanol){
                    this.monedasButton[i].setTexture(monedas[this.monedasPosicion+i].sprite);
                }else{
                    this.monedasButton[i].setTexture(monedas[this.monedasPosicion+i].spritei);
                }
                
            }
        }
    }

    //Mueve los mapas para que se vean los de la derecha
    trasladarDerecha(){
        if((this.monedasPosicion+3)<monedas.length){
            this.monedasPosicion++;
            var i;
            for (i = 0; i < this.monedasButton.length; i++) {
                if(espanol){
                    this.monedasButton[i].setTexture(monedas[this.monedasPosicion+i].sprite);
                }else{
                    this.monedasButton[i].setTexture(monedas[this.monedasPosicion+i].spritei);
                }
            }
        }
        
    }
}