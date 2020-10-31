//Array of personajes
let personajes=[
    {
        "bloqueado":false,
        "coins" : 100,
        "sprite": 'personajePrehistoriaDes',
        "spriteDesbloqueado": 'personajePrehistoriaDes',
        "spriteBloqueado": 'personajePrehistoriaDes'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'personajeEgiptoBloq',
        "spriteDesbloqueado": 'personajeEgiptoDes',
        "spriteBloqueado": 'personajeEgiptoBloq'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'personajeEgiptoBloq',
        "spriteDesbloqueado": 'personajeEgiptoDes',
        "spriteBloqueado": 'personajeEgiptoBloq'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'personajeEgiptoBloq',
        "spriteDesbloqueado": 'personajeEgiptoDes',
        "spriteBloqueado": 'personajeEgiptoBloq'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'personajeEgiptoBloq',
        "spriteDesbloqueado": 'personajeEgiptoDes',
        "spriteBloqueado": 'personajeEgiptoBloq'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'personajeEgiptoBloq',
        "spriteDesbloqueado": 'personajeEgiptoDes',
        "spriteBloqueado": 'personajeEgiptoBloq'
    }
];

let personajesButton = [];
var personajesPosicion = 0;
class tiendaPersonajesScene extends Phaser.Scene{
    personajesPosicion = 0;
    constructor(){
        super("TiendaPersonajesScene");
    }
    preload(){
        //Assets de tienda
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');
        this.load.image('botonDesbloquearNo', 'assets/Interfaz/Tienda/botonDesbloquearNo.png');
        this.load.image('botonDesbloquearSi', 'assets/Interfaz/Tienda/botonDesbloquearSi.png');

        //Assets español
        this.load.image('tituloPersonajes', 'assets/Interfaz/Tienda/Personajes/tituloPersonajes.png');
        this.load.image('personajeEgiptoBloq', 'assets/Interfaz/Tienda/Personajes/EgiptoBloqueado.png');
        this.load.image('personajeEgiptoDes', 'assets/Interfaz/Tienda/Personajes/EgiptoDesbloqueado.png');
        this.load.image('personajePrehistoriaDes', 'assets/Interfaz/Tienda/Personajes/PrehistoriaDesbloqueado.png');
        this.load.image('mensajeDesbloquear', 'assets/Interfaz/Tienda/mensajeDesbloquear.png');

        //Assets ingles
        this.load.image('tituloPersonajesi', 'assets/Interfaz/Tienda/Personajes/tituloPersonajesi.png');
        this.load.image('mensajeDesbloqueari', 'assets/Interfaz/Tienda/mensajeDesbloqueari.png');
    }

    create(){
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        var dinero = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/4,coins, { fill: '#fff' });

        if(espanol){
            this.spriteTituloPersonajes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloPersonajes');
        }else{
            this.spriteTituloPersonajes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloPersonajesi');
        }

        //Asignamos los botones a cinco personajes
        personajesButton[0] = this.add.sprite(gameConfig.scale.width / 6,gameConfig.scale.height*1.5/3,personajes[0].sprite);
        personajesButton[0].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[0],dinero,0));

        personajesButton[1] = this.add.sprite((gameConfig.scale.width / 6)*2,gameConfig.scale.height*1.5/3,personajes[1].sprite);
        personajesButton[1].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[1],dinero,1));

        personajesButton[2] = this.add.sprite((gameConfig.scale.width / 6)*3,gameConfig.scale.height*1.5/3,personajes[2].sprite);
        personajesButton[2].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[2],dinero,2));

        personajesButton[3] = this.add.sprite((gameConfig.scale.width / 6)*4,gameConfig.scale.height*1.5/3,personajes[3].sprite);
        personajesButton[3].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[3],dinero,3));

        personajesButton[4] = this.add.sprite((gameConfig.scale.width / 6)*5,gameConfig.scale.height*1.5/3,personajes[4].sprite);
        personajesButton[4].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[4],dinero,4));

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25,gameConfig.scale.height*1.5/3,'flechaIzquierda').setScale(0.4);
        this.spriteIzquierda.setInteractive().on('pointerdown', () =>this.trasladarIzquierda());

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width*24/25,gameConfig.scale.height*1.5/3,'flechaDerecha').setScale(0.4);
        this.spriteDerecha.setInteractive().on('pointerdown', () =>this.trasladarDerecha());

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }

    
    //Show a message to unlock a map
    desbloquear(personaje,dinero,pos){
        if(personaje.bloqueado){
            if(espanol){
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear');
            }else{
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari');
            }
            

            this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width*1.2 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearNo');
            this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=> this.cerrarMensajeDesbloquear());

            this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width*0.8 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearSi');
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=> this.comprarPersonaje(personaje,dinero,pos));
        }
        
    }

    comprarPersonaje(personaje,dinero,pos){
        //If i have enough money and the map is not blocked
        this.cerrarMensajeDesbloquear();
        if(coins >= personaje.coins){
            //Change sprite, set new texture and update coins
            personaje.sprite = personaje.spriteDesbloqueado;
            personajesButton[pos].setTexture(personaje.sprite);
            personaje.bloqueado = false;
            coins = coins-personaje.coins;
            dinero.setText(coins);
            
        }else{
            var nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'No tienes dinero suficiente', { fill: '#0f0' })
        }
    }

    //Destroy the message
    cerrarMensajeDesbloquear(){
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    //Mueve los personajes para que se vean los de la izquierda
    trasladarIzquierda(){
        if(personajesPosicion>0){
            personajesPosicion--;
            var i;
            for (i = 0; i < personajesButton.length; i++) {
                personajesButton[i].setTexture(personajes[personajesPosicion+i].sprite);
            }
        }
    }

    //Mueve los personajes para que se vean los de la derecha
    trasladarDerecha(){
        console.log("trasladando derecha");
        if((personajesPosicion+5)<personajes.length){
            personajesPosicion++;
            var i;
            for (i = 0; i < personajesButton.length; i++) {
                personajesButton[i].setTexture(personajes[personajesPosicion+i].sprite);
            }
        }
        
    }
}