//Array global de armas, con la informacion de bloqueados, monedas,sprites, clave para encontrar la animación en multijugador
//Frames de las animaciones
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
        "scale":0.1,
        "circle":[130,0,0],
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
        "scale":0.17,
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
    //Variables locales: posicion y botones
    armasPosicion = 0;
    armasButton=[];

    constructor(){
        super("TiendaArmasScene");
    }

    preload(){
    }

    create(){
        this.armasPosicion = 0;
        //Añade el fondo de la tienda   
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        //Visualiza en pantalla las monedas que tiene el usuario
        var dinero = this.add.text(gameConfig.scale.width/2,gameConfig.scale.height*1.1/4,coins, {font:"25px euphorigenic", fill: '#ffffff' ,align: "center"}).setOrigin(0.5,0).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width*1.1 /2,gameConfig.scale.height*1.19/4,'coins').setScale(1.2*gameConfig.scale.height / 600);
        dinero.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
        
        //Añade el titulo, mensaje para compras multijugador
        if(espanol){
            this.spriteTituloArmas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloArmas').setScale(0.8 * gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugador').setScale(0.8 *gameConfig.scale.height / 600);

        }else{
            this.spriteTituloArmas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloArmasi').setScale(0.8 * gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugadori').setScale(0.8 *gameConfig.scale.height / 600);

        }

        //Almacena los sprites correspondientes si están bloqueadas las armas o no y dependiendo del idioma
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

        //Asignamos los botones a cinco armas
        var i;
        for(i=0;i<5;i++){
            this.armasButton[i] = this.add.sprite(gameConfig.scale.width *(i+1)/ 6,gameConfig.scale.height*1.7/3,armas[i].sprite).setScale(gameConfig.scale.height / 600);
        }
        this.armasButton[0].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(armas[0+this.armasPosicion],dinero,0)});
        this.armasButton[1].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(armas[1+this.armasPosicion],dinero,1)});
        this.armasButton[2].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(armas[2+this.armasPosicion],dinero,2)});
        this.armasButton[3].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(armas[3+this.armasPosicion],dinero,3)});
        this.armasButton[4].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(armas[4+this.armasPosicion],dinero,4)});

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(gameConfig.scale.height *0.15/ 600);
        this.spriteSalir.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaScene")});
    }

    
    
    //Muestra un mensaje para desbloquear un arma
    desbloquear(arma,dinero,pos){
        //Si el arma está bloqueado
        if(arma.bloqueado){
            var i;
            //Desactiva la interactividad de todos los botones
            for (i = 0; i < this.armasButton.length; i++) {
                this.armasButton[i].disableInteractive();
            }
            //Añade un tinte amarillo al botón seleccionado
            this.armasButton[pos].setTint(0xDEDE7C);
            //Muestra el mensaje de desbloquear dependiendo del idioma
            if(espanol){
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear').setScale(gameConfig.scale.height / 600);
            }else{
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari').setScale(gameConfig.scale.height / 600);
            }
            
            //Botones de si y no
            this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width/2+(this.mensajeDesbloquear.displayWidth/4),(gameConfig.scale.height/3)*2.4+(this.mensajeDesbloquear.displayHeight/5),'botonDesbloquearNo').setScale(gameConfig.scale.height / 600);
            this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 }); this.cerrarMensajeDesbloquear(pos)});

            this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width/2-(this.mensajeDesbloquear.displayWidth/4),(gameConfig.scale.height/3)*2.4+(this.mensajeDesbloquear.displayHeight/5),'botonDesbloquearSi').setScale(gameConfig.scale.height / 600);
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 }); this.comprarArma(arma,dinero,pos)});
        }
        
    }

    //Función para comprar arma
    comprarArma(arma,dinero,pos){
        //Si las monedas que tenemos son suficientes para comprar el arma
        if(coins >= arma.coins){
             //Cambia el sprite, añade la nueva textura de desbloqueado y actualiza las monedas
            if(espanol){
                arma.sprite = arma.spriteDesbloqueado;
            }else{
                arma.sprite = arma.spriteDesbloqueadoi;
            }
            this.armasButton[pos].setTexture(arma.sprite);
            arma.bloqueado = false;
            coins = coins-arma.coins;
            dinero.setText(coins);
            //Guarda los cambios en caché
            Game.saveFile();
           
            //Se muestra un mensaje por haber comprado un arma en inglés o en español, durante 1 segundo
            if(espanol){
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'¡Has comprado un arma!',{font:"35px euphorigenic", fill: '#E9BB00' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'You have bought an arm!',{font:"35px euphorigenic", fill: '#E9BB00' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.comprado.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(1000, ()=>this.comprado.destroy(), []);

            //Llama a la funcion para cerrar el mensaje
            this.cerrarMensajeDesbloquear(pos);
            
        }else{
            //Si no tiene monedas suficientes, cierra el mensaje
            this.cerrarMensajeDesbloquear(pos);
            //Se muestra un mensaje informando que no tiene monedas suficientes en inglés o en español, durante 1 segundo
            if(espanol){
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'No tienes monedas suficientes',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'You don not have enought coins',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.nocoins.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(1000, ()=>this.nocoins.destroy(), []);
        }
        
        
    }

    //Destruye el mensaje
    cerrarMensajeDesbloquear(pos){
        //Activa la interactividad de los botones
        var i;
        for (i = 0; i < this.armasButton.length; i++) {
            this.armasButton[i].setInteractive();
        }
        //Elimina los tintes
        this.armasButton[pos].clearTint();
        //Destruye el mensaje
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

}