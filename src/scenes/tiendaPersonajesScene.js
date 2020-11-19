//Array global de personajes, con la informacion de bloqueados, monedas y sprites
let personajes=[
    {
        "bloqueado":false,
        "coins" : 0,
        "sprite": 'Unvaar',
        "spriteDesbloqueado": 'Unvaar',
        "spriteBloqueado": 'Unvaar',
        "seleccionDesbloqueado": 'UnvaarS',
        "seleccionBloqueado": 'UnvaarBS',
        "nombre": 'prePlayer'
    },
    {
        "bloqueado":true,
        "coins" : 250,
        "sprite": 'NahibB',
        "spriteDesbloqueado": 'Nahib',
        "spriteBloqueado": 'NahibB',
        "seleccionDesbloqueado": 'NahibS',
        "seleccionBloqueado": 'NahibBS',
        "nombre": 'egiPlayer'
    },
    {
        "bloqueado":true,
        "coins" : 300,
        "sprite": 'LamberB',
        "spriteDesbloqueado": 'Lamber',
        "spriteBloqueado": 'LamberB',
        "seleccionDesbloqueado": 'LamberS',
        "seleccionBloqueado": 'LamberBS',
        "nombre": 'medPlayer'
    },
    {
        "bloqueado":true,
        "coins" : 400,
        "sprite": 'ThomasB',
        "spriteDesbloqueado": 'Thomas',
        "spriteBloqueado": 'ThomasB',
        "seleccionDesbloqueado": 'ThomasS',
        "seleccionBloqueado": 'ThomasBS',
        "nombre": 'indPlayer'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'EvelineB',
        "spriteDesbloqueado": 'Eveline',
        "spriteBloqueado": 'EvelineB',
        "seleccionDesbloqueado": 'EvelineS',
        "seleccionBloqueado": 'EvelineBS',
        "nombre": 'conPlayer'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'GaardB',
        "spriteDesbloqueado": 'Gaard',
        "spriteBloqueado": 'GaardB',
        "seleccionDesbloqueado": 'GaardS',
        "seleccionBloqueado": 'GaardBS',
        "nombre": 'preHeroe'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'CleopatraB',
        "spriteDesbloqueado": 'Cleopatra',
        "spriteBloqueado": 'CleopatraB',
        "seleccionDesbloqueado": 'CleopatraS',
        "seleccionBloqueado": 'CleopatraBS',
        "nombre": 'egiHeroe'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'SirRodrickB',
        "spriteDesbloqueado": 'SirRodrick',
        "spriteBloqueado": 'SirRodrickB',
        "seleccionDesbloqueado": 'SirRodrickS',
        "seleccionBloqueado": 'SirRodrickBS',
        "nombre": 'medHeroe'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'MrHolmesB',
        "spriteDesbloqueado": 'MrHolmes',
        "spriteBloqueado": 'MrHolmesB',
        "seleccionDesbloqueado": 'MrHolmesS',
        "seleccionBloqueado": 'MrHolmesBS',
        "nombre": 'indHeroe'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'PillieB',
        "spriteDesbloqueado": 'Pillie',
        "spriteBloqueado": 'PillieB',
        "seleccionDesbloqueado": 'PillieS',
        "seleccionBloqueado": 'PillieBS',
        "nombre": 'conHeroe'
    }
];

class tiendaPersonajesScene extends Phaser.Scene{
    //Variables locales de posicion y botones
    personajesPosicion = 0;
    personajesButton=[];
    constructor(){
        super("TiendaPersonajesScene");
    }
    preload(){
    }

    create(){
        this.personajesPosicion = 0;
        
        //Añade el fondo de la tienda
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        //Visualiza en pantalla las monedas que tiene el usuario
        var dinero = this.add.text(gameConfig.scale.width/2,gameConfig.scale.height*1.1/4,coins, {font:"25px euphorigenic", fill: '#ffffff' ,align: "center"}).setOrigin(0.5,0).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width*1.1 /2,gameConfig.scale.height*1.19/4,'coins').setScale(1.2*gameConfig.scale.height / 600);
        dinero.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);

        //Añade el título y el mensaje para informar que son compras para multijugador en inglés o en español
        if(espanol){
            this.spriteTituloPersonajes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloPersonajes').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugador').setScale(0.8 *gameConfig.scale.height / 600);
        }else{
            this.spriteTituloPersonajes = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloPersonajesi').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugadori').setScale(0.8 *gameConfig.scale.height / 600);
        }

        //Recorre los personajes y comprueba si están bloqueados para asignar el sprite correspondiente
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
        this.personajesButton[0].setInteractive().on('pointerdown', () => {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(personajes[0+this.personajesPosicion],dinero,0)});

        this.personajesButton[1] = this.add.sprite((gameConfig.scale.width / 6)*2,gameConfig.scale.height*1.7/3,personajes[1].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[1].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(personajes[1+this.personajesPosicion],dinero,1)});

        this.personajesButton[2] = this.add.sprite((gameConfig.scale.width / 6)*3,gameConfig.scale.height*1.7/3,personajes[2].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[2].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(personajes[2+this.personajesPosicion],dinero,2)});

        this.personajesButton[3] = this.add.sprite((gameConfig.scale.width / 6)*4,gameConfig.scale.height*1.7/3,personajes[3].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[3].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(personajes[3+this.personajesPosicion],dinero,3)});

        this.personajesButton[4] = this.add.sprite((gameConfig.scale.width / 6)*5,gameConfig.scale.height*1.7/3,personajes[4].sprite).setScale(gameConfig.scale.height / 600);
        this.personajesButton[4].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(personajes[4+this.personajesPosicion],dinero,4)});

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25,gameConfig.scale.height*1.7/3,'flechaIzquierda').setScale(gameConfig.scale.height *0.4/ 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarIzquierda()});

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width*24/25,gameConfig.scale.height*1.7/3,'flechaDerecha').setScale(gameConfig.scale.height *0.4/ 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.trasladarDerecha()});

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(gameConfig.scale.height *0.15/ 600);
        this.spriteSalir.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaScene")});
    }

    
    //Muestra un mensaje para desbloquear un mapa
    desbloquear(personaje,dinero,pos){
        //Si el personaje está bloqueado
        if(personaje.bloqueado){
            //Desactiva la interactividad de todos los botones
            this.spriteDerecha.disableInteractive();
            this.spriteIzquierda.disableInteractive();
            var i;
            for (i = 0; i < this.personajesButton.length; i++) {
                this.personajesButton[i].disableInteractive();
            }

            //Añade un tinte amarillo al personaje seleccionado
            this.personajesButton[pos].setTint(0xDEDE7C);
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
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 }); this.comprarPersonaje(personaje,dinero,pos)});
        }
        
    }

    //Función para comprar el personaje
    comprarPersonaje(personaje,dinero,pos){
        //Si las monedas que tenemos son suficientes para comprar el personaje
        if(coins >= personaje.coins){
            //Cambia el sprite, añade la nueva textura de desbloqueado y actualiza las monedas
            personaje.sprite = personaje.spriteDesbloqueado;
            this.personajesButton[pos].setTexture(personaje.sprite);
            personaje.bloqueado = false;
            coins = coins-personaje.coins;
            dinero.setText(coins);
            //Guarda los cambios en caché
            Game.saveFile();
            
            //Se muestra un mensaje por haber comprado un personaje en inglés o en español, durante 1 segundo
            if(espanol){
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'¡Has comprado un personaje!',{font:"35px euphorigenic", fill: '#E9BB00' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'You have bought a character!',{font:"35px euphorigenic", fill: '#E9BB00' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
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
        //Activa la interactividad de todos los botones
        var i;
        for (i = 0; i < this.personajesButton.length; i++) {
            this.personajesButton[i].setInteractive();
        }
        this.personajesButton[pos].clearTint();
        this.spriteDerecha.setInteractive();
        this.spriteIzquierda.setInteractive();

        //Destruye el mensaje
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    //Mueve los personajes para que se vean los de la izquierda
    trasladarIzquierda(){
        //Comprueba si la posición es mayor a 0
        if(this.personajesPosicion>0){
            //Decrementa la posicion
            this.personajesPosicion--;
            //Cambia los sprites de los botones
            var i;
            for (i = 0; i < this.personajesButton.length; i++) {
                this.personajesButton[i].setTexture(personajes[this.personajesPosicion+i].sprite);
            }
        }
    }

    //Mueve los personajes para que se vean los de la derecha
    trasladarDerecha(){
        //Comprueba si la posicion sumando el total de botones es menor que el total de personajes
        //Es decir si hay más sprites
        if((this.personajesPosicion+this.personajesButton.length)<personajes.length){
            //Incrementa la posicion
            this.personajesPosicion++;
            //Cambia los sprites de los botones
            var i;
            for (i = 0; i < this.personajesButton.length; i++) {
                this.personajesButton[i].setTexture(personajes[this.personajesPosicion+i].sprite);
            }
        }
        
    }
}