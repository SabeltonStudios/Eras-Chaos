//Array of personajes
let personajes=[
    {
        "bloqueado":false,
        "coins" : 0,
        "sprite": 'Unvaar',
        "spriteDesbloqueado": 'Unvaar',
        "spriteBloqueado": 'Unvaar',
        "seleccionDesbloqueado": 'UnvaarS',
        "seleccionBloqueado": 'UnvaarBS',
        "nombre": 'pre'
    },
    {
        "bloqueado":true,
        "coins" : 250,
        "sprite": 'NahibB',
        "spriteDesbloqueado": 'Nahib',
        "spriteBloqueado": 'NahibB',
        "seleccionDesbloqueado": 'NahibS',
        "seleccionBloqueado": 'NahibBS',
        "nombre": 'egi'
    },
    {
        "bloqueado":true,
        "coins" : 300,
        "sprite": 'LamberB',
        "spriteDesbloqueado": 'Lamber',
        "spriteBloqueado": 'LamberB',
        "seleccionDesbloqueado": 'LamberS',
        "seleccionBloqueado": 'LamberBS',
        "nombre": 'med'
    },
    {
        "bloqueado":true,
        "coins" : 400,
        "sprite": 'ThomasB',
        "spriteDesbloqueado": 'Thomas',
        "spriteBloqueado": 'ThomasB',
        "seleccionDesbloqueado": 'ThomasS',
        "seleccionBloqueado": 'ThomasBS',
        "nombre": 'ind'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'ThomasB',
        "spriteDesbloqueado": 'Thomas',
        "spriteBloqueado": 'ThomasB',
        "seleccionDesbloqueado": 'ThomasS',
        "seleccionBloqueado": 'ThomasBS',
        "nombre": 'con'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'GaardB',
        "spriteDesbloqueado": 'Gaard',
        "spriteBloqueado": 'GaardB',
        "seleccionDesbloqueado": 'Gaard',
        "seleccionBloqueado": 'GaardBS',
        "nombre": 'preH'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'CleopatraB',
        "spriteDesbloqueado": 'Cleopatra',
        "spriteBloqueado": 'CleopatraB',
        "seleccionDesbloqueado": 'CleopatraS',
        "seleccionBloqueado": 'CleopatraBS',
        "nombre": 'egiH'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'SirRodrickB',
        "spriteDesbloqueado": 'SirRodrick',
        "spriteBloqueado": 'SirRodrickB',
        "seleccionDesbloqueado": 'SirRodrickS',
        "seleccionBloqueado": 'SirRodrickBS',
        "nombre": 'medH'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'SirRodrickB',
        "spriteDesbloqueado": 'SirRodrick',
        "spriteBloqueado": 'SirRodrickB',
        "seleccionDesbloqueado": 'SirRodrickS',
        "seleccionBloqueado": 'SirRodrickBS',
        "nombre": 'indH'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'SirRodrickB',
        "spriteDesbloqueado": 'SirRodrick',
        "spriteBloqueado": 'SirRodrickB',
        "seleccionDesbloqueado": 'SirRodrickS',
        "seleccionBloqueado": 'SirRodrickBS',
        "nombre": 'conH'
    }
];

class tiendaPersonajesScene extends Phaser.Scene{
    personajesPosicion = 0;
    personajesButton=[];
    constructor(){
        super("TiendaPersonajesScene");
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
            this.spriteTituloPersonajes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloPersonajes').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugador').setScale(0.8 *gameConfig.scale.height / 600);

        }else{
            this.spriteTituloPersonajes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloPersonajesi').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugadori').setScale(0.8 *gameConfig.scale.height / 600);

        }

        var i;
        for (i = 0; i < personajes.length; i++) {
            if(personajes[i].bloqueado){
                personajes[i].sprite = personajes[i].spriteBloqueado;
            }else{
                personajes[i].sprite = personajes[i].spriteDesbloqueado;
            }
        }

        //Asignamos los botones a cinco personajes
        this.personajesButton[0] = this.add.sprite(gameConfig.scale.width / 6,gameConfig.scale.height*1.7/3,personajes[0].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[0].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[0+this.personajesPosicion],dinero,0));

        this.personajesButton[1] = this.add.sprite((gameConfig.scale.width / 6)*2,gameConfig.scale.height*1.7/3,personajes[1].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[1].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[1+this.personajesPosicion],dinero,1));

        this.personajesButton[2] = this.add.sprite((gameConfig.scale.width / 6)*3,gameConfig.scale.height*1.7/3,personajes[2].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[2].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[2+this.personajesPosicion],dinero,2));

        this.personajesButton[3] = this.add.sprite((gameConfig.scale.width / 6)*4,gameConfig.scale.height*1.7/3,personajes[3].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[3].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[3+this.personajesPosicion],dinero,3));

        this.personajesButton[4] = this.add.sprite((gameConfig.scale.width / 6)*5,gameConfig.scale.height*1.7/3,personajes[4].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[4].setInteractive().on('pointerdown', () =>this.desbloquear(personajes[4+this.personajesPosicion],dinero,4));

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
    desbloquear(personaje,dinero,pos){
        this.spriteDerecha.disableInteractive();
        this.spriteIzquierda.disableInteractive();
        
        if(personaje.bloqueado){
            var i;
            for (i = 0; i < this.personajesButton.length; i++) {
                this.personajesButton[i].disableInteractive();
            }

            this.personajesButton[pos].setTint(0xDEDE7C);
            if(espanol){
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear').setScale(gameConfig.scale.height / 600);
            }else{
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari').setScale(gameConfig.scale.height / 600);
            }
            

            this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width*1.2 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearNo').setScale(gameConfig.scale.height / 600);
            this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=> this.cerrarMensajeDesbloquear(pos));

            this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width*0.8 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearSi').setScale(gameConfig.scale.height / 600);
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=> this.comprarPersonaje(personaje,dinero,pos));
        }
        
    }

    comprarPersonaje(personaje,dinero,pos){
        if(coins >= personaje.coins){
            //Change sprite, set new texture and update coins
            personaje.sprite = personaje.spriteDesbloqueado;
            this.personajesButton[pos].setTexture(personaje.sprite);
            personaje.bloqueado = false;
            coins = coins-personaje.coins;
            dinero.setText(coins);
            if(espanol){
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'¡Has comprado un personaje!',{font:"35px euphorigenic", fill: '#E9BB00' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'You have bought a character!',{font:"35px euphorigenic", fill: '#E9BB00' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
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
        for (i = 0; i < this.personajesButton.length; i++) {
            this.personajesButton[i].setInteractive();
        }
        this.personajesButton[pos].clearTint();
        this.spriteDerecha.setInteractive();
        this.spriteIzquierda.setInteractive();
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    //Mueve los personajes para que se vean los de la izquierda
    trasladarIzquierda(){
        if(this.personajesPosicion>0){
            this.personajesPosicion--;
            var i;
            for (i = 0; i < this.personajesButton.length; i++) {
                this.personajesButton[i].setTexture(personajes[this.personajesPosicion+i].sprite);
            }
        }
    }

    //Mueve los personajes para que se vean los de la derecha
    trasladarDerecha(){
        console.log("trasladando derecha");
        if((this.personajesPosicion+5)<personajes.length){
            this.personajesPosicion++;
            var i;
            for (i = 0; i < this.personajesButton.length; i++) {
                this.personajesButton[i].setTexture(personajes[this.personajesPosicion+i].sprite);
            }
        }
        
    }
}