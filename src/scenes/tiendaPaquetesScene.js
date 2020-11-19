//Array global de paquetes, con la informacion de comprados, monedas,sprites y objetos que contiene
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
        "sprite": 'bundleRevIndustrial+',
        "spritei": 'bundleRevIndustrial+i',
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
    //Variables locales: botones, posicion y paquetes en la tienda
    paquetesButton = [];
    paquetesPosicion = 0;
    paquetesTienda = [];

    constructor(){
        super("TiendaPaquetesScene");
    }
    preload(){
    }

    create(){
        this.paquetesPosicion = 0;

        //Añade el fondo de la tienda
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        //Visualiza en pantalla las monedas que tiene el usuario
        var dinero = this.add.text(gameConfig.scale.width/2,gameConfig.scale.height*1.1/4,coins, {font:"25px euphorigenic", fill: '#ffffff' ,align: "center"}).setOrigin(0.5,0).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width*1.1 /2,gameConfig.scale.height*1.19/4,'coins').setScale(1.2*gameConfig.scale.height / 600);
        dinero.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);

        //Añade en el array paquetesTienda los paquetes que se encuentran a la venta
        this.paquetesTienda = [];
        var i;
        for (i = 0; i < paquetes.length; i++) {
            //Si el paquete no ha sido comprado
            if(!paquetes[i].comprado){
                //Si es un paquete básico
                if(i<4){
                    //Se comprueba si el mapa, personaje y arma no están bloqueados
                    if(!mapas[paquetes[i].mapa].bloqueado && !personajes[paquetes[i].personaje].bloqueado && !armas[paquetes[i].arma].bloqueado){
                        paquetes[i].comprado=true;
                    }else{
                        //Si alguno de los elementos del paquete no ha sido comprado, se añade a los paquetes de la tienda
                        this.paquetesTienda[this.paquetesTienda.length] = i;
                    }
                }else{
                    //Se comprueba si el mapa, personaje, arma y héroe no están bloqueados
                    if(!mapas[paquetes[i].mapa].bloqueado && !personajes[paquetes[i].personaje].bloqueado && !armas[paquetes[i].arma].bloqueado && !personajes[paquetes[i].heroe].bloqueado){
                        paquetes[i].comprado=true;
                    }else{
                        //Si alguno de los elementos del paquete no ha sido comprado, se añade a los paquetes de la tienda
                        this.paquetesTienda[this.paquetesTienda.length] = i;
                    }
                }
            }
        }


        //Añade el título, botones y el mensaje para informar que son compras para multijugador en inglés o en español
        if(espanol){
            this.spriteTituloPaquetes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloPaquetes').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugador').setScale(0.8 *gameConfig.scale.height / 600);

            if(0<this.paquetesTienda.length){ 
                this.paquetesButton[0] = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[0]].sprite).setScale(gameConfig.scale.height / 1200);
                this.paquetesButton[0].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[0+this.paquetesPosicion]],dinero,0)});
            }
            if(1<this.paquetesTienda.length){
                this.paquetesButton[1] = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[1]].sprite).setScale(gameConfig.scale.height / 1200);
                this.paquetesButton[1].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[1+this.paquetesPosicion]],dinero,1)});

            }
            if(2<this.paquetesTienda.length){
                this.paquetesButton[2] = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[2]].sprite).setScale(gameConfig.scale.height / 1200);
                this.paquetesButton[2].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[2+this.paquetesPosicion]],dinero,2)});

            }
        }else{
            this.spriteTituloPaquetes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloPaquetesi').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugadori').setScale(0.8 *gameConfig.scale.height / 600);
            if(0<this.paquetesTienda.length){ 
                this.paquetesButton[0] = this.add.sprite(gameConfig.scale.width / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[0]].spritei).setScale(gameConfig.scale.height / 1200);
                this.paquetesButton[0].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[0+this.paquetesPosicion]],dinero,0)});
            }
            if(1<this.paquetesTienda.length){
                this.paquetesButton[1] = this.add.sprite(gameConfig.scale.width*2 / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[1]].spritei).setScale(gameConfig.scale.height / 1200);
                this.paquetesButton[1].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[1+this.paquetesPosicion]],dinero,1)});

            }
            if(2<this.paquetesTienda.length){
                this.paquetesButton[2] = this.add.sprite(gameConfig.scale.width*3 / 4,gameConfig.scale.height*1.7/3,paquetes[this.paquetesTienda[2]].spritei).setScale(gameConfig.scale.height / 1200);
                this.paquetesButton[2].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(paquetes[this.paquetesTienda[2+this.paquetesPosicion]],dinero,2)});

            }
        }


        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25,gameConfig.scale.height*1.7/3,'flechaIzquierda').setScale(gameConfig.scale.height *0.4/ 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 });this.trasladarIzquierda()});

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width*24/25,gameConfig.scale.height*1.7/3,'flechaDerecha').setScale(gameConfig.scale.height *0.4/ 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 });this.trasladarDerecha()});

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(gameConfig.scale.height *0.15/ 600);
        this.spriteSalir.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaScene")});
    }

    
    
    //Muestra un mensaje para comprar un paquete
    desbloquear(paquete,dinero,pos){
        //Desactiva la interactividad de todos los botones
        this.spriteDerecha.disableInteractive();
        this.spriteIzquierda.disableInteractive();
        var i;
        for (i = 0; i < this.paquetesButton.length; i++) {
            this.paquetesButton[i].disableInteractive();
        }
        //Añade un tinte amarillo al personaje seleccionado
        this.paquetesButton[pos].setTint(0xDEDE7C);
        if(espanol){
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear').setScale(gameConfig.scale.height / 600);
        }else{
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari').setScale(gameConfig.scale.height / 600);
        }
        
        //Botones de si y no
        this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width/2+(this.mensajeDesbloquear.displayWidth/4),(gameConfig.scale.height/3)*2.4+(this.mensajeDesbloquear.displayHeight/5),'botonDesbloquearNo').setScale(gameConfig.scale.height / 600);
        this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 }); this.cerrarMensajeDesbloquear(pos)});

        this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width/2-(this.mensajeDesbloquear.displayWidth/4),(gameConfig.scale.height/3)*2.4+(this.mensajeDesbloquear.displayHeight/5),'botonDesbloquearSi').setScale(gameConfig.scale.height / 600);
        this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 }); this.comprarPaquete(paquete,dinero,pos)});
    }

    //Función para comprar un paquete
    comprarPaquete(paquete,dinero,pos){
        //Si las monedas que tenemos son suficientes para comprar el paquete
        if(coins >= paquete.coins){
            //Actualiza la información y las monedas
            paquete.comprado = true;
            coins = coins-paquete.coins;
            dinero.setText(coins);
            //Cierra el mensaje de desbloquear
            this.cerrarMensajeDesbloquear(pos);

            //Desbloqueo de los elementos del bundle
            mapas[paquete.mapa].bloqueado = false;
            personajes[paquete.personaje].bloqueado = false;
            armas[paquete.arma].bloqueado = false;

            //Si el paquete contiene heroe
            if(paquete.heroe != null){
                personajes[paquete.heroe].bloqueado = false;
            }

            //Guarda los cambios en caché
            Game.saveFile();

            //Llama a la función de borras el paquete de la tienda
            this.borrarPaquete();

            //Se muestra un mensaje por haber comprado un paquete en inglés o en español, durante 1 segundo
            if(espanol){
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.7,'¡Has comprado un paquete!',{font:"35px euphorigenic", fill: '#E9BB00' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.7,'You have bought a bundle!',{font:"35px euphorigenic", fill: '#E9BB00' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.comprado.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(1000, ()=>this.comprado.destroy(), []);
            
        }else{
           //Si no tiene monedas suficientes, cierra el mensaje
            this.cerrarMensajeDesbloquear(pos);
            //Se muestra un mensaje informando que no tiene monedas suficientes en inglés o en español, durante 1 segundo
            if(espanol){
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.7,'No tienes monedas suficientes',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.7,'You don not have enought coins',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.nocoins.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(800, ()=>this.nocoins.destroy(), []);
        }
        
        
    }

    //Destruye el mensaje
    cerrarMensajeDesbloquear(pos){
        //Activa la interactividad de todos los botones
        var i;
        for (i = 0; i < this.paquetesButton.length; i++) {
            this.paquetesButton[i].setInteractive();
        }
        this.paquetesButton[pos].clearTint();
        this.spriteDerecha.setInteractive();
        this.spriteIzquierda.setInteractive();

        //Destruye el mensaje
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    //Mueve los paquetes para que se vean los de la izquierda
    trasladarIzquierda(){
        //Comprueba si la posición es mayor a 0
        if(this.paquetesPosicion>0){
            //Decrementa la posicion
            this.paquetesPosicion--;
            //Cambia los sprites de los botones
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

    //Mueve los paquetes para que se vean los de la derecha
    trasladarDerecha(){
        //Comprueba si la posicion sumando el total de botones es menor que el total de paquetes en la tienda
        //Es decir si hay más sprites
        if((this.paquetesPosicion+this.paquetesButton.length)<this.paquetesTienda.length){
            //Incrementa la posicion
            this.paquetesPosicion++;
            //Cambia los sprites de los botones
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

    //Función para borrar un paquete
    borrarPaquete(){
        //Se inicializan las variables
        this.paquetesTienda = [];
        this.paquetesPosicion = 0;

        //Añade en el array paquetesTienda los paquetes que se encuentran a la venta
        var i;
        for (i = 0; i < paquetes.length; i++) {
            //Si el paquete no ha sido comprado
            if(!paquetes[i].comprado){
                //Si es un paquete básico
                if(i<4){
                    //Se comprueba si el mapa, personaje y arma no están bloqueados
                    if(!mapas[paquetes[i].mapa].bloqueado && !personajes[paquetes[i].personaje].bloqueado && !armas[paquetes[i].arma].bloqueado){
                        paquetes[i].comprado=true;
                    }else{
                        //Si alguno de los elementos del paquete no ha sido comprado, se añade a los paquetes de la tienda
                        this.paquetesTienda[this.paquetesTienda.length] = i;
                    }
                }else{
                    //Se comprueba si el mapa, personaje, arma y héroe no están bloqueados
                    if(!mapas[paquetes[i].mapa].bloqueado && !personajes[paquetes[i].personaje].bloqueado && !armas[paquetes[i].arma].bloqueado && !personajes[paquetes[i].heroe].bloqueado){
                        paquetes[i].comprado=true;
                    }else{
                        //Si alguno de los elementos del paquete no ha sido comprado, se añade a los paquetes de la tienda
                        this.paquetesTienda[this.paquetesTienda.length] = i;
                    }
                }
            }
        }

        //Se añaden a los botones los sprites de los tres primero paquetes
        var i;
        for (i = this.paquetesButton.length-1; i>=0 ; i--) {
            //Si el número es menor que el total de paquetes de la tienda
            if(i<this.paquetesTienda.length){
                if(espanol){
                    this.paquetesButton[i].setTexture(paquetes[this.paquetesTienda[i]].sprite);
                }else{
                    this.paquetesButton[i].setTexture(paquetes[this.paquetesTienda[i]].spritei);

                }
            }else{
                //Si no, se destruye el botón del paquete
                this.paquetesButton[i].destroy();
                this.paquetesButton.splice(i,1)
            }
        }
    }
}