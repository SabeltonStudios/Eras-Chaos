//Array of mapas
let mapas=[
    {
        "bloqueado":false,
        "coins" : 100,
        "sprite": 'prehistoriaDesbloqueado',
        "spriteDesbloqueado": 'prehistoriaDesbloqueado',
        "spriteBloqueado": 'prehistoriaDesbloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 500,
        "sprite": 'egiptoBloqueado',
        "spriteDesbloqueado": 'egiptoDesbloqueado',
        "spriteBloqueado": 'egiptoBloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 100,
        "sprite": 'egiptoBloqueado',
        "spriteDesbloqueado": 'egiptoDesbloqueado',
        "spriteBloqueado": 'egiptoBloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 100,
        "sprite": 'egiptoBloqueado',
        "spriteDesbloqueado": 'egiptoDesbloqueado',
        "spriteBloqueado": 'egiptoBloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 100,
        "sprite": 'egiptoBloqueado',
        "spriteDesbloqueado": 'egiptoDesbloqueado',
        "spriteBloqueado": 'egiptoBloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 100,
        "sprite": 'egiptoBloqueado',
        "spriteDesbloqueado": 'egiptoDesbloqueado',
        "spriteBloqueado": 'egiptoBloqueado'
    }
];


let mapasButton=[];
var mapasPosicion = 0;

class tiendaMapasScene extends Phaser.Scene{
    constructor(){
        super("TiendaMapasScene");
    }
    
    preload(){
        //Assets de tienda
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');
        this.load.image('botonDesbloquearNo', 'assets/Interfaz/Tienda/botonDesbloquearNo.png');
        this.load.image('botonDesbloquearSi', 'assets/Interfaz/Tienda/botonDesbloquearSi.png');
        

        //Assets español
        this.load.image('tituloMapas', 'assets/Interfaz/Tienda/Mapas/tituloMapas.png');
        
        this.load.image('prehistoriaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueado.png');
        this.load.image('egiptoBloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueado.png');
        this.load.image('egiptoDesbloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueado.png');
        this.load.image('mensajeDesbloquear', 'assets/Interfaz/Tienda/mensajeDesbloquear.png');

        //Assets ingles
        this.load.image('tituloMapasi', 'assets/Interfaz/Tienda/Mapas/tituloMapasi.png');
        this.load.image('mensajeDesbloqueari', 'assets/Interfaz/Tienda/mensajeDesbloqueari.png');
    }

    create(){
        mapasPosicion=0;

        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

        if(espanol){
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloMapas');
        }else{
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'tituloMapasi');
        }
        
        var dinero = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/4,coins, { fill: '#fff' });

        //Asignamos los botones a cinco mapas
        mapasButton[0] = this.add.sprite(gameConfig.scale.width / 6,gameConfig.scale.height*1.5/3,mapas[0].sprite).setScale(0.5);
        mapasButton[0].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[0],dinero,0));

        mapasButton[1] = this.add.sprite((gameConfig.scale.width / 6)*2,gameConfig.scale.height*1.5/3,mapas[1].sprite).setScale(0.5);
        mapasButton[1].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[1],dinero,1));

        mapasButton[2] = this.add.sprite((gameConfig.scale.width / 6)*3,gameConfig.scale.height*1.5/3,mapas[2].sprite).setScale(0.5);
        mapasButton[2].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[2],dinero,2));

        mapasButton[3] = this.add.sprite((gameConfig.scale.width / 6)*4,gameConfig.scale.height*1.5/3,mapas[3].sprite).setScale(0.5);
        mapasButton[3].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[3],dinero,3));

        mapasButton[4] = this.add.sprite((gameConfig.scale.width / 6)*5,gameConfig.scale.height*1.5/3,mapas[4].sprite).setScale(0.5);
        mapasButton[4].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[4],dinero,4));

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
    desbloquear(mapa,dinero,pos){
        if(mapa.bloqueado){
            if(espanol){
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear');
            }else{
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari');
            }
            

            this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width*1.2 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearNo');
            this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=> this.cerrarMensajeDesbloquear());

            this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width*0.8 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearSi');
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=> this.comprarMapa(mapa,dinero,pos));
        }
        
    }

    comprarMapa(mapa,dinero,pos){
        //If i have enough money and the map is not blocked
        this.cerrarMensajeDesbloquear();
        if(coins >= mapa.coins){
            //Change sprite, set new texture and update coins
            mapa.sprite = mapa.spriteDesbloqueado;
            mapasButton[pos].setTexture(mapa.sprite);
            mapa.bloqueado = false;
            coins = coins-mapa.coins;
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

    //Mueve los mapas para que se vean los de la izquierda
    trasladarIzquierda(){
        if(mapasPosicion>0){
            mapasPosicion--;
            var i;
            for (i = 0; i < mapasButton.length; i++) {
                mapasButton[i].setTexture(mapas[mapasPosicion+i].sprite);
            }
        }
    }

    //Mueve los mapas para que se vean los de la derecha
    trasladarDerecha(){
        console.log("trasladando derecha");
        if((mapasPosicion+5)<mapas.length){
            mapasPosicion++;
            var i;
            for (i = 0; i < mapasButton.length; i++) {
                mapasButton[i].setTexture(mapas[mapasPosicion+i].sprite);
            }
        }
        
    }
}