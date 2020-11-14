let armas=[
    {
        "bloqueado":false,
        "coins" : 0,
        "sprite": 'hondaDesbloqueado',
        "spriteDesbloqueado": 'hondaDesbloqueado',
        "spriteDesbloqueadoi": 'hondaDesbloqueadoi',
        "seleccionDesbloqueado": 'honda',
        "nombre": 'Honda',
        "speed":300,
        "scale":0.15,
        "circle":[50,0,0],
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
        "seleccionDesbloqueado": 'hacha',
        "seleccionBloqueado": 'hachaB',
        "nombre": 'Hacha',
        "speed":350,
        "scale":0.15,
        "circle":[100,30,30],
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
        "seleccionDesbloqueado": 'ballesta',
        "seleccionBloqueado": 'ballestaB',
        "nombre": 'Ball',
        "speed":500,
        "scale":0.15,
        "circle":null,
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
        "seleccionDesbloqueado": 'mosquete',
        "seleccionBloqueado": 'mosqueteB',
        "nombre": 'Mos',
        "speed":650,
        "scale":0.8,
        "circle":[9.3,4,4],
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
        "seleccionDesbloqueado": 'fusil',
        "seleccionBloqueado": 'fusilB',
        "nombre": 'AK',
        "speed":700,
        "scale":0.15,
        "circle":[50,5,5],
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
        
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        var dinero = this.add.text(gameConfig.scale.width/2,gameConfig.scale.height*1.1/4,coins, {font:"25px euphorigenic", fill: '#ffffff' ,align: "center"}).setOrigin(0.5,0).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width*1.1 /2,gameConfig.scale.height*1.19/4,'coins').setScale(1.2*gameConfig.scale.height / 600);
        dinero.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
        
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
        
        if(arma.bloqueado){
            var i;
            for (i = 0; i < this.armasButton.length; i++) {
                this.armasButton[i].disableInteractive();
            }

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
            if(espanol){
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'¡Has comprado un arma!',{font:"35px euphorigenic", fill: '#E9BB00' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'You have bought an arm!',{font:"35px euphorigenic", fill: '#E9BB00' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.comprado.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(1000, ()=>this.comprado.destroy(), []);
            this.cerrarMensajeDesbloquear(pos);
            
        }else{
            //If i have enough money and the map is not blocked
            this.cerrarMensajeDesbloquear(pos);
            if(espanol){
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'No tienes monedas suficientes',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'You don not have enought coins',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.nocoins.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(1000, ()=>this.nocoins.destroy(), []);
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