let armas=[
    {
        "bloqueado":false,
        "coins" : 0,
        "sprite": 'hondaDesbloqueado',
        "spriteDesbloqueado": 'hondaDesbloqueado',
        "spriteDesbloqueadoi": 'hondaDesbloqueadoi',
        "nombre": 'Honda',
        "frames": [20,9,38,38]
    },
    {
        "bloqueado":true,
        "coins" : 250,
        "sprite": 'hachaBloqueado',
        "spriteDesbloqueado": 'hachaDesbloqueado',
        "spriteBloqueado": 'hachaBloqueado',
        "spriteDesbloqueadoi": 'hachaDesbloqueadoi',
        "spriteBloqueadoi": 'hachaBloqueadoi',
        "nombre": 'Hacha',
        "frames": [19,0,52,52]
    },
    {
        "bloqueado":true,
        "coins" : 300,
        "sprite": 'ballestaBloqueado',
        "spriteDesbloqueado": 'ballestaDesbloqueado',
        "spriteBloqueado": 'ballestaBloqueado',
        "spriteDesbloqueadoi": 'ballestaDesbloqueadoi',
        "spriteBloqueadoi": 'ballestaBloqueadoi',
        "nombre": 'Ball',
        "frames": [19,0,39,39]
    },
    {
        "bloqueado":true,
        "coins" : 400,
        "sprite": 'mosqueteBloqueado',
        "spriteDesbloqueado": 'mosqueteDesbloqueado',
        "spriteBloqueado": 'mosqueteBloqueado',
        "spriteDesbloqueadoi": 'mosqueteDesbloqueadoi',
        "spriteBloqueadoi": 'mosqueteBloqueadoi',
        "nombre": 'Mos',
        "frames": [19,0,39,39]
    },
    {
        "bloqueado":true,
        "coins" : 450,
        "sprite": 'fusilBloqueado',
        "spriteDesbloqueado": 'fusilDesbloqueado',
        "spriteBloqueado": 'fusilBloqueado',
        "spriteDesbloqueadoi": 'fusilDesbloqueadoi',
        "spriteBloqueadoi": 'fusilBloqueadoi',
        "nombre": 'AK',
        "frames": [19,0,19,19]
    }
];
class tiendaArmasScene extends Phaser.Scene{
    armasPosicion = 0;
    armasButton=[];

    constructor(){
        super("TiendaArmasScene");
    }

    preload(){
        //Assets español
        this.load.image('tituloArmas', 'assets/Interfaz/Tienda/Armas/tituloArmas.png');
        this.load.image('hondaDesbloqueado', 'assets/Interfaz/Tienda/Armas/hondaDesbloqueado.png');
        this.load.image('hachaDesbloqueado', 'assets/Interfaz/Tienda/Armas/hachaDesbloqueado.png');
        this.load.image('hachaBloqueado', 'assets/Interfaz/Tienda/Armas/hachaBloqueado.png');
        this.load.image('ballestaDesbloqueado', 'assets/Interfaz/Tienda/Armas/ballestaDesbloqueado.png');
        this.load.image('ballestaBloqueado', 'assets/Interfaz/Tienda/Armas/ballestaBloqueado.png');
        this.load.image('mosqueteDesbloqueado', 'assets/Interfaz/Tienda/Armas/mosqueteDesbloqueado.png');
        this.load.image('mosqueteBloqueado', 'assets/Interfaz/Tienda/Armas/mosqueteBloqueado.png');
        this.load.image('fusilDesbloqueado', 'assets/Interfaz/Tienda/Armas/fusilDesbloqueado.png');
        this.load.image('fusilBloqueado', 'assets/Interfaz/Tienda/Armas/fusilBloqueado.png');
        //Assets ingles
        this.load.image('tituloArmasi', 'assets/Interfaz/Tienda/Armas/tituloArmasi.png');
        this.load.image('hondaDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/hondaDesbloqueadoi.png');
        this.load.image('hachaDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/hachaDesbloqueadoi.png');
        this.load.image('hachaBloqueadoi', 'assets/Interfaz/Tienda/Armas/hachaBloqueadoi.png');
        this.load.image('ballestaDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/ballestaDesbloqueadoi.png');
        this.load.image('ballestaBloqueadoi', 'assets/Interfaz/Tienda/Armas/ballestaBloqueadoi.png');
        this.load.image('mosqueteDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/mosqueteDesbloqueadoi.png');
        this.load.image('mosqueteBloqueadoi', 'assets/Interfaz/Tienda/Armas/mosqueteBloqueadoi.png');
        this.load.image('fusilDesbloqueadoi', 'assets/Interfaz/Tienda/Armas/fusilDesbloqueadoi.png');
        this.load.image('fusilBloqueadoi', 'assets/Interfaz/Tienda/Armas/fusilBloqueadoi.png');
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        var dinero = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height*1.1/4,coins, {font:"20px euphorigenic", fill: '#ffffff' ,boundsAlignH: "center", boundsAlignV: "middle"}).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width *8.3/16,gameConfig.scale.height*1.17/4,'coins').setScale(gameConfig.scale.height / 600);

        if(espanol){
            this.spriteTituloArmas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloArmas').setScale(0.8 * gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugador').setScale(0.8 *gameConfig.scale.height / 600);

        }else{
            this.spriteTituloArmas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloArmasi').setScale(0.8 * gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugadori').setScale(0.8 *gameConfig.scale.height / 600);

        }

        var i;
        for (i = 0; i < armas.length; i++) {
            if(armas[i].bloqueado){
                if(espanol){
                    armas[i].sprite = armas[i].spriteBloqueado;
                }else{
                    armas[i].sprite = armas[i].spriteBloqueadoi;
                }
            }else{
                if(espanol){
                    armas[i].sprite = armas[i].spriteDesbloqueado;
                }else{
                    armas[i].sprite = armas[i].spriteDesbloqueadoi;
                }
                
            }
        }

        //Asignamos los botones a cinco personajes
        this.armasButton[0] = this.add.sprite(gameConfig.scale.width / 6,gameConfig.scale.height*1.7/3,armas[0].sprite).setScale(gameConfig.scale.height / 600);
        this.armasButton[0].setInteractive().on('pointerdown', () =>this.desbloquear(armas[0+this.armasPosicion],dinero,0));

        this.armasButton[1] = this.add.sprite((gameConfig.scale.width / 6)*2,gameConfig.scale.height*1.7/3,armas[1].sprite).setScale(gameConfig.scale.height / 600);
        this.armasButton[1].setInteractive().on('pointerdown', () =>this.desbloquear(armas[1+this.armasPosicion],dinero,1));

        this.armasButton[2] = this.add.sprite((gameConfig.scale.width / 6)*3,gameConfig.scale.height*1.7/3,armas[2].sprite).setScale(gameConfig.scale.height / 600);
        this.armasButton[2].setInteractive().on('pointerdown', () =>this.desbloquear(armas[2+this.armasPosicion],dinero,2));

        this.armasButton[3] = this.add.sprite((gameConfig.scale.width / 6)*4,gameConfig.scale.height*1.7/3,armas[3].sprite).setScale(gameConfig.scale.height / 600);
        this.armasButton[3].setInteractive().on('pointerdown', () =>this.desbloquear(armas[3+this.armasPosicion],dinero,3));

        this.armasButton[4] = this.add.sprite((gameConfig.scale.width / 6)*5,gameConfig.scale.height*1.7/3,armas[4].sprite).setScale(gameConfig.scale.height / 600);
        this.armasButton[4].setInteractive().on('pointerdown', () =>this.desbloquear(armas[4+this.armasPosicion],dinero,4));

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25,gameConfig.scale.height*1.7/3,'flechaIzquierda').setScale(gameConfig.scale.height *0.4/ 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () =>this.trasladarIzquierda());

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width*24/25,gameConfig.scale.height*1.7/3,'flechaDerecha').setScale(gameConfig.scale.height *0.4/ 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () =>this.trasladarDerecha());

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(gameConfig.scale.height *0.1/ 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }

    
    
    //Show a message to unlock a map
    desbloquear(arma,dinero,pos){
        this.spriteDerecha.disableInteractive();
        this.spriteIzquierda.disableInteractive();
        var i;
        for (i = 0; i < this.armasButton.length; i++) {
            this.armasButton[i].disableInteractive();
        }
        if(arma.bloqueado){
            this.armasButton[pos].setTint(0xDEDE7C);
            if(espanol){
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear').setScale(gameConfig.scale.height / 600);
            }else{
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari').setScale(gameConfig.scale.height / 600);
            }
            

            this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width*1.2 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearNo').setScale(gameConfig.scale.height / 600);
            this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=> this.cerrarMensajeDesbloquear(pos));

            this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width*0.8 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearSi').setScale(gameConfig.scale.height / 600);
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=> this.comprarArma(arma,dinero,pos));
        }
        
    }

    comprarArma(arma,dinero,pos){
        if(coins >= arma.coins){
            //Change sprite, set new texture and update coins
            if(espanol){
                arma.sprite = arma.spriteDesbloqueado;
            }else{
                arma.sprite = arma.spriteDesbloqueadoi;
            }
            
            this.armasButton[pos].setTexture(arma.sprite);
            arma.bloqueado = false;
            coins = coins-arma.coins;
            dinero.setText(coins);
            this.cerrarMensajeDesbloquear(pos);
            
        }else{
            //If i have enough money and the map is not blocked
            this.cerrarMensajeDesbloquear(pos);
            this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'No tienes dinero suficiente',{font:"20px euphorigenic", fill: '#ffffff' ,boundsAlignH: "center", boundsAlignV: "middle"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            var timer = this.time.delayedCall(800, ()=>this.nocoins.destroy(), []);
        }
        
        
    }

    //Destroy the message
    cerrarMensajeDesbloquear(pos){
        var i;
        for (i = 0; i < this.armasButton.length; i++) {
            this.armasButton[i].setInteractive();
        }
        this.armasButton[pos].clearTint();
        this.spriteDerecha.setInteractive();
        this.spriteIzquierda.setInteractive();
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    //Mueve los personajes para que se vean los de la izquierda
    trasladarIzquierda(){
        if(this.armasPosicion>0){
            this.armasPosicion--;
            var i;
            for (i = 0; i < this.armasButton.length; i++) {
                this.armasButton[i].setTexture(armas[this.armasPosicion+i].sprite);
            }
        }
    }

    //Mueve los personajes para que se vean los de la derecha
    trasladarDerecha(){
        console.log("trasladando derecha");
        if((this.armasPosicion+5)<armas.length){
            this.armasPosicion++;
            var i;
            for (i = 0; i < this.armasButton.length; i++) {
                this.armasButton[i].setTexture(armas[this.armasPosicion+i].sprite);
            }
        }
        
    }
}