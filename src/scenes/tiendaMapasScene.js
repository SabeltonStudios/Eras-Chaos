//Array global de mapas, con la informacion de bloqueados, monedas,sprites, clave para encontrar la animación en multijugador
let mapas=[
    {
        "bloqueado":false,
        "coins" : 0,
        "sprite": 'prehistoriaDesbloqueado',
        "spriteDesbloqueado": 'prehistoriaDesbloqueado',
        "spriteBloqueado": 'prehistoriaDesbloqueado',
        "spriteDesbloqueadoi": 'prehistoriaDesbloqueadoi',
        "spriteBloqueadoi": 'prehistoriaDesbloqueadoi',
        "nombre": 'pre'
    },
    {
        "bloqueado":true,
        "coins" : 350,
        "sprite": 'egiptoBloqueado',
        "spriteDesbloqueado": 'egiptoDesbloqueado',
        "spriteBloqueado": 'egiptoBloqueado',
        "spriteDesbloqueadoi": 'egiptoDesbloqueadoi',
        "spriteBloqueadoi": 'egiptoBloqueadoi',
        "spriteSelectBloq": 'egiSelectBloq',
        "spriteSelectBloqi": 'egiSelectBloqi',
        "nombre": 'egi'
    },
    {
        "bloqueado":true,
        "coins" : 450,
        "sprite": 'edadMediaBloqueado',
        "spriteDesbloqueado": 'edadMediaDesbloqueado',
        "spriteBloqueado": 'edadMediaBloqueado',
        "spriteDesbloqueadoi": 'edadMediaDesbloqueadoi',
        "spriteBloqueadoi": 'edadMediaBloqueadoi',
        "spriteSelectBloq": 'medSelectBloq',
        "spriteSelectBloqi": 'medSelectBloqi',
        "nombre": 'med'
    },
    {
        "bloqueado":true,
        "coins" : 550,
        "sprite": 'revIndustrialBloqueado',
        "spriteDesbloqueado": 'revIndustrialDesbloqueado',
        "spriteBloqueado": 'revIndustrialBloqueado',
        "spriteDesbloqueadoi": 'revIndustrialDesbloqueadoi',
        "spriteBloqueadoi": 'revIndustrialBloqueadoi',
        "spriteSelectBloq": 'revSelectBloq',
        "spriteSelectBloqi": 'revSelectBloqi',
        "nombre": 'ind'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'actualidadBloqueado',
        "spriteDesbloqueado": 'actualidadDesbloqueado',
        "spriteBloqueado": 'actualidadBloqueado',
        "spriteDesbloqueadoi": 'actualidadDesbloqueadoi',
        "spriteBloqueadoi": 'actualidadBloqueadoi',
        "spriteSelectBloq": 'actSelectBloq',
        "spriteSelectBloqi": 'actSelectBloqi',
        "nombre": 'con'
    },
];





class tiendaMapasScene extends Phaser.Scene{
    //Variables locales: posicion y botones
    mapasPosicion = 0;
    mapasButton=[];
    constructor(){
        super("TiendaMapasScene");
    }
    
    preload(){
    }

    create(){
        this.mapasPosicion=0;
         //Añade el fondo de la tienda   
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        //Añade el titulo, mensaje para compras multijugador y almacena los sprites correspondientes al idioma y bloqueados
        if(espanol){
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloMapas').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugador').setScale(0.8 *gameConfig.scale.height / 600);
            var i;
            for (i = 0; i < mapas.length; i++) {
                if(mapas[i].bloqueado){
                    mapas[i].sprite = mapas[i].spriteBloqueado;
                }else{
                    mapas[i].sprite = mapas[i].spriteDesbloqueado;
                }
            }
        }else{
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'tituloMapasi').setScale(0.8 *gameConfig.scale.height / 600);
            this.spriteMensaje = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/4.5,'mensajeModoMultijugadori').setScale(0.8 *gameConfig.scale.height / 600);
            var i;
            for (i = 0; i < mapas.length; i++) {
                if(mapas[i].bloqueado){
                    mapas[i].sprite = mapas[i].spriteBloqueadoi;
                }else{
                    mapas[i].sprite = mapas[i].spriteDesbloqueadoi;
                }
            }
        }

        //Visualiza en pantalla las monedas que tiene el usuario
        var dinero = this.add.text(gameConfig.scale.width/2,gameConfig.scale.height*1.1/4,coins, {font:"25px euphorigenic", fill: '#ffffff' ,align: "center"}).setOrigin(0.5,0).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width*1.1 /2,gameConfig.scale.height*1.19/4,'coins').setScale(1.2*gameConfig.scale.height / 600);
        dinero.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);

        //Asignamos los botones a cinco mapas
        this.mapasButton[0] = this.add.sprite(gameConfig.scale.width / 6,gameConfig.scale.height*1.5/3,mapas[0].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[0].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(mapas[0+this.mapasPosicion],dinero,0)});

        this.mapasButton[1] = this.add.sprite((gameConfig.scale.width / 6)*2,gameConfig.scale.height*1.5/3,mapas[1].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[1].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(mapas[1+this.mapasPosicion],dinero,1)});

        this.mapasButton[2] = this.add.sprite((gameConfig.scale.width / 6)*3,gameConfig.scale.height*1.5/3,mapas[2].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[2].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(mapas[2+this.mapasPosicion],dinero,2)});

        this.mapasButton[3] = this.add.sprite((gameConfig.scale.width / 6)*4,gameConfig.scale.height*1.5/3,mapas[3].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[3].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(mapas[3+this.mapasPosicion],dinero,3)});

        this.mapasButton[4] = this.add.sprite((gameConfig.scale.width / 6)*5,gameConfig.scale.height*1.5/3,mapas[4].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[4].setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 }); this.desbloquear(mapas[4+this.mapasPosicion],dinero,4)});

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.15*gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () =>  {this.sound.play('buttonSound', { volume: 0.15 });this.scene.start("TiendaScene")});
    }

    //Muestra un mensaje para desbloquear un mapa
    desbloquear(mapa,dinero,pos){
        //Si el mapa está bloqueado
        if(mapa.bloqueado){
            var i;
            //Desactiva la interactividad de todos los botones
            for (i = 0; i < this.mapasButton.length; i++) {
                this.mapasButton[i].disableInteractive();
            }

            //Añade un tinte amarillo al botón seleccionado
            this.mapasButton[pos].setTint(0xDEDE7C);

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
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=>  {this.sound.play('buttonSound', { volume: 0.15 }); this.comprarMapa(mapa,dinero,pos)});
        }
        
    }

    
    //Función para comprar mapa
    comprarMapa(mapa,dinero,pos){
        //Si las monedas que tenemos son suficientes para comprar el mapa
        if(coins >= mapa.coins){
            //Cambia el sprite, añade la nueva textura de desbloqueado y actualiza las monedas
            if(espanol){
                mapa.sprite = mapa.spriteDesbloqueado;
            }else{
                mapa.sprite = mapa.spriteDesbloqueadoi;
            }
            this.mapasButton[pos].setTexture(mapa.sprite);
            mapa.bloqueado = false;
            coins = coins-mapa.coins;
            dinero.setText(coins);
            //Guarda los cambios en caché
            Game.saveFile();

            //Se muestra un mensaje por haber comprado un mapa en inglés o en español, durante 1 segundo
            if(espanol){
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'¡Has comprado un mapa!',{font:"35px euphorigenic", fill: '#E9BB00' ,align:"center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.comprado = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'You have bought a map!',{font:"35px euphorigenic", fill: '#E9BB00' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
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
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'No tienes monedas suficientes',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }else{
                this.nocoins = this.add.text(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.3,'You don not have enought coins',{font:"35px euphorigenic", fill: '#C10202' ,align: "center"}).setOrigin(0.5, 0).setScale(gameConfig.scale.height / 600);
            }
            this.nocoins.setShadow(1.5, 1.5, 'rgba(0,0,0,1)', 1);
            var timer = this.time.delayedCall(1000, ()=>this.nocoins.destroy(), []);
        }
        
    }

    //Destruye el mensaje
    cerrarMensajeDesbloquear(pos){
        //Activa la interactividad de los botones
        var i;
        for (i = 0; i < this.mapasButton.length; i++) {
            this.mapasButton[i].setInteractive();
        }
        //Elimina los tintes
        this.mapasButton[pos].clearTint();
        //Destruye el mensaje
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }
}