let paquetes=[
    {
        "comprado": false,
        "coins" : 595,
        "sprite": 'bundleEgipto',
        "spritei": 'bundleEgiptoi',
        "mapa": 1,
        "personaje": 1,
        "arma": 1,
    },
    {
        "comprado": false,
        "coins" : 735,
        "sprite": 'bundleEdadMedia',
        "spritei": 'bundleEdadMediai',
        "mapa": 2,
        "personaje": 2,
        "arma": 2,
    },
    {
        "comprado": false,
        "coins" : 1145,
        "sprite": 'bundleRevIndustrial',
        "spritei": 'bundleRevIndustriali',
        "mapa": 3,
        "personaje": 3,
        "arma": 3,
    },
    {
        "comprado": false,
        "coins" : 1360,
        "sprite": 'bundleActualidad',
        "spritei": 'bundleActualidadi',
        "mapa": 4,
        "personaje": 4,
        "arma": 4,
    },
    {
        "comprado": false,
        "coins" : 1225,
        "sprite": 'bundleEgipto+',
        "spritei": 'bundleEgipto+i',
        "mapa": 1,
        "personaje": 1,
        "heroe": 6,
        "arma": 1,
    },
    {
        "comprado": false,
        "coins" : 1360,
        "sprite": 'bundleEdadMedia+',
        "spritei": 'bundleEdadMedia+i',
        "mapa": 2,
        "personaje": 2,
        "heroe": 7,
        "arma": 2,
    },
    {
        "comprado": false,
        "coins" : 1725,
        "sprite": 'bundleEdadMedia+',
        "spritei": 'bundleEdadMedia+i',
        "mapa": 3,
        "personaje": 3,
        "heroe": 8,
        "arma": 3,
    },
    {
        "comprado": false,
        "coins" : 1915,
        "sprite": 'bundleActualidad+',
        "spritei": 'bundleActualidad+i',
        "mapa": 4,
        "personaje": 4,
        "heroe": 9,
        "arma": 4,
    },
];

class tiendaPaquetesScene extends Phaser.Scene{
    paquetesButton = [];
    paquetesPosicion = 0;
    paquetesTienda = [];
    constructor(){
        super("TiendaPaquetesScene");
    }
    preload(){
        
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        var dinero = this.add.text(gameConfig.scale.width/2,gameConfig.scale.height*1.1/4,coins, {font:"25px euphorigenic", fill: '#ffffff' ,align: "center"}).setOrigin(0.5,0).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width*1.1 /2,gameConfig.scale.height*1.19/4,'coins').setScale(1.2*gameConfig.scale.height / 600);
        dinero.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
        this.paquetesTienda = [];
        var i;
        for (i = 0; i < paquetes.length; i++) {
            if(!paquetes[i].comprado){
                if(i<4){
                    if(!mapas[paquetes[i].mapa].bloqueado && !personajes[paquetes[i].personaje].bloqueado && !armas[paquetes[i].arma].bloqueado){
                        paquetes[i].comprado=true;
                    }else{
                        this.paquetesTienda[this.paquetesTienda.length] = i;
                    }
                }else{
                    if(!mapas[paquetes[i].mapa].bloqueado && !personajes[paquetes[i].personaje].bloqueado && !armas[paquetes[i].arma].bloqueado && !personajes[paquetes[i].heroe].bloqueado){
                        paquetes[i].comprado=true;
                    }else{
                        this.paquetesTienda[this.paquetesTienda.length] = i;
                    }
                }
            }
        }

        if(espanol){
            this.spriteTituloPaquetes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloPaquetes').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugador').setScale(0.8 *gameConfig.scale.height / 600);

            this.paquetesButton[0] = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[0]].sprite).setScale(gameConfig.scale.height / 1200);
            this.paquetesButton[1] = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[1]].sprite).setScale(gameConfig.scale.height / 1200);
            this.paquetesButton[2] = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[2]].sprite).setScale(gameConfig.scale.height / 1200);
        }else{
            this.spriteTituloPaquetes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloPaquetesi').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugadori').setScale(0.8 *gameConfig.scale.height / 600);

            this.paquetesButton[0] = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[0]].spritei).setScale(gameConfig.scale.height / 1200);
            this.paquetesButton[1] = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[1]].spritei).setScale(gameConfig.scale.height / 1200);
            this.paquetesButton[2] = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[2]].spritei).setScale(gameConfig.scale.height / 1200);
        }

        this.paquetesButton[0].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[0+this.paquetesPosicion]],dinero,0)});
        this.paquetesButton[1].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[1+this.paquetesPosicion]],dinero,1)});
        this.paquetesButton[2].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[2+this.paquetesPosicion]],dinero,2)});

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25,gameConfig.scale.height*1.7/3,'flechaIzquierda').setScale(gameConfig.scale.height *0.4/ 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 });this.trasladarIzquierda()});

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width*24/25,gameConfig.scale.height*1.7/3,'flechaDerecha').setScale(gameConfig.scale.height *0.4/ 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 });this.trasladarDerecha()});

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(gameConfig.scale.height *0.1/ 600);
        this.spriteSalir.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaScene")});
    }

    
    
    //Show a message to unlock a map
    desbloquear(paquete,dinero,pos){
        this.spriteDerecha.disableInteractive();
        this.spriteIzquierda.disableInteractive();
        var i;
        for (i = 0; i < this.paquetesButton.length; i++) {
            this.paquetesButton[i].disableInteractive();
        }
        this.paquetesButton[pos].setTint(0xDEDE7C);
        if(espanol){
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.7,'mensajeDesbloquear').setScale(gameConfig.scale.height / 600);
        }else{
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.7,'mensajeDesbloqueari').setScale(gameConfig.scale.height / 600);
        }
        

        this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width*1.2 / 2,(gameConfig.scale.height/3)*2.7,'botonDesbloquearNo').setScale(gameConfig.scale.height / 600);
        this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 });this.cerrarMensajeDesbloquear(pos)});

        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width*0.8 / 2,(gameConfig.scale.height/3)*2.7,'botonDesbloquearSi').setScale(gameConfig.scale.height / 600);
        this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 });this.comprarPaquete(paquete,dinero,pos)});
        
        
    }

    comprarPaquete(paquete,dinero,pos){
        if(coins >= paquete.coins){
            paquete.comprado = true;
            coins = coins-paquete.coins;
            dinero.setText(coins);
            this.cerrarMensajeDesbloquear(pos);

            //Desbloqueo de los elementos del bundle
            mapas[paquete.mapa].bloqueado = false;
            personajes[paquete.personaje].bloqueado = false;
            armas[paquete.arma].bloqueado = false;
            Game.saveFile();
            if(paquete.heroe != null){
                personajes[paquete.heroe].bloqueado = false;
            }
            this.borrarPaquete();
            if(espanol){
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'¡Has comprado un paquete!',{font:"35px euphorigenic", fill: '#E9BB00' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'You have bought a bundle!',{font:"35px euphorigenic", fill: '#E9BB00' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.comprado.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(1000, ()=>this.comprado.destroy(), []);
            
        }else{
            //If i have enough money and the map is not blocked
            this.cerrarMensajeDesbloquear(pos);
            if(espanol){
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'No tienes monedas suficientes',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'You don not have enought coins',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.nocoins.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(800, ()=>this.nocoins.destroy(), []);
        }
        
        
    }

    //Destroy the message
    cerrarMensajeDesbloquear(pos){
        var i;
        for (i = 0; i < this.paquetesButton.length; i++) {
            this.paquetesButton[i].setInteractive();
        }
        this.paquetesButton[pos].clearTint();
        this.spriteDerecha.setInteractive();
        this.spriteIzquierda.setInteractive();
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    //Mueve los personajes para que se vean los de la izquierda
    trasladarIzquierda(){
        if(this.paquetesPosicion>0){
            this.paquetesPosicion--;
            var i;
            for (i = 0; i < this.paquetesButton.length; i++) {
                if(espanol){
                    this.paquetesButton[i].setTexture(paquetes[this.paquetesTienda[this.paquetesPosicion+i]].sprite);
                }else{
                    this.paquetesButton[i].setTexture(paquetes[this.paquetesTienda[this.paquetesPosicion+i]].spritei);
                }
            }
        }
    }

    //Mueve los personajes para que se vean los de la derecha
    trasladarDerecha(){
        console.log("trasladando derecha");
        if((this.paquetesPosicion+3)<this.paquetesTienda.length){
            this.paquetesPosicion++;
            var i;
            for (i = 0; i < this.paquetesButton.length; i++) {
                if(espanol){
                    this.paquetesButton[i].setTexture(paquetes[this.paquetesTienda[this.paquetesPosicion+i]].sprite);
                }else{
                    this.paquetesButton[i].setTexture(paquetes[this.paquetesTienda[this.paquetesPosicion+i]].spritei);
                }
            }
        }
        
    }

    borrarPaquete(){
        this.paquetesTienda = [];
        this.paquetesPosicion = 0;
        var i;
        for (i = 0; i < paquetes.length; i++) {
            if(!paquetes[i].comprado){
                this.paquetesTienda[this.paquetesTienda.length] = i;
            }
        }
        if(espanol){
            this.paquetesButton[0].setTexture(paquetes[this.paquetesTienda[0]].sprite);
            this.paquetesButton[1].setTexture(paquetes[this.paquetesTienda[1]].sprite);
            this.paquetesButton[2].setTexture(paquetes[this.paquetesTienda[2]].sprite);
        }else{
            this.paquetesButton[0].setTexture(paquetes[this.paquetesTienda[0]].spritei);
            this.paquetesButton[1].setTexture(paquetes[this.paquetesTienda[1]].spritei);
            this.paquetesButton[2].setTexture(paquetes[this.paquetesTienda[2]].spritei);
        }
    }
}