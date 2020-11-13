//Array of mapas
let mapas=[
    {
        "bloqueado":false,
        "coins" : 0,
        "sprite": 'prehistoriaDesbloqueado',
        "spriteDesbloqueado": 'prehistoriaDesbloqueado',
        "spriteBloqueado": 'prehistoriaDesbloqueado',
        "spriteDesbloqueadoi": 'prehistoriaDesbloqueadoi',
        "spriteBloqueadoi": 'prehistoriaDesbloqueadoi',
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
        "spriteSelectBloqi": 'egiSelectBloqi'
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
        "spriteSelectBloqi": 'medSelectBloqi'
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
        "spriteSelectBloqi": 'revSelectBloqi'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "sprite": 'egiptoBloqueado',
        "spriteDesbloqueado": 'egiptoDesbloqueado',
        "spriteBloqueado": 'egiptoBloqueado',
        "spriteDesbloqueadoi": 'egiptoDesbloqueadoi',
        "spriteBloqueadoi": 'egiptoBloqueadoi',
        "spriteSelectBloq": 'egiSelectBloq',
        "spriteSelectBloqi": 'egiSelectBloqi'
    },
    {
        "bloqueado":true,
        "coins" : 650,
        "spriteDesbloqueado": 'egiptoDesbloqueado',
        "spriteBloqueado": 'egiptoBloqueado',
        "spriteDesbloqueadoi": 'egiptoDesbloqueadoi',
        "spriteBloqueadoi": 'egiptoBloqueadoi',
        "spriteSelectBloq": 'egiSelectBloq',
        "spriteSelectBloqi": 'egiSelectBloqi'
    }
];





class tiendaMapasScene extends Phaser.Scene{
    mapasPosicion = 0;
    mapasButton=[];
    constructor(){
        super("TiendaMapasScene");
    }
    
    preload(){
        /*//Assets de tienda
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');
        
        //Assets español
        this.load.image('tituloMapas', 'assets/Interfaz/Tienda/Mapas/tituloMapas.png');
        
        this.load.image('prehistoriaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueado.png');
        this.load.image('egiptoBloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueado.png');
        this.load.image('egiptoDesbloqueado', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueado.png');
        this.load.image('edadMediaBloqueado', 'assets/Interfaz/Tienda/Mapas/edadMediaBloqueado.png');
        this.load.image('edadMediaDesbloqueado', 'assets/Interfaz/Tienda/Mapas/edadMediaDesbloqueado.png');

        //Assets ingles
        this.load.image('tituloMapasi', 'assets/Interfaz/Tienda/Mapas/tituloMapasi.png');

        this.load.image('prehistoriaDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/prehistoriaDesbloqueado.png');
        this.load.image('egiptoBloqueadoi', 'assets/Interfaz/Tienda/Mapas/egiptoBloqueadoi.png');
        this.load.image('egiptoDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/egiptoDesbloqueadoi.png');
        this.load.image('edadMediaBloqueadoi', 'assets/Interfaz/Tienda/Mapas/edadMediaBloqueadoi.png');
        this.load.image('edadMediaDesbloqueadoi', 'assets/Interfaz/Tienda/Mapas/edadMediaDesbloqueadoi.png');*/
    }

    create(){
        this.mapasPosicion=0;
        this.FondoTienda = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.FondoTienda.setScale(gameConfig.scale.width / this.FondoTienda.width, gameConfig.scale.height / this.FondoTienda.height);

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
        
        var dinero = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height*1.1/4,coins, {font:"20px euphorigenic", fill: '#ffffff' ,boundsAlignH: "center", boundsAlignV: "middle"}).setScale(gameConfig.scale.height / 600);
        this.spritecoins = this.add.sprite(gameConfig.scale.width *8.3/16,gameConfig.scale.height*1.17/4,'coins').setScale(gameConfig.scale.height / 600);

        //Asignamos los botones a cinco mapas
        this.mapasButton[0] = this.add.sprite(gameConfig.scale.width / 6,gameConfig.scale.height*1.5/3,mapas[0].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[0].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[0+this.mapasPosicion],dinero,0));

        this.mapasButton[1] = this.add.sprite((gameConfig.scale.width / 6)*2,gameConfig.scale.height*1.5/3,mapas[1].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[1].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[1+this.mapasPosicion],dinero,1));

        this.mapasButton[2] = this.add.sprite((gameConfig.scale.width / 6)*3,gameConfig.scale.height*1.5/3,mapas[2].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[2].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[2+this.mapasPosicion],dinero,2));

        this.mapasButton[3] = this.add.sprite((gameConfig.scale.width / 6)*4,gameConfig.scale.height*1.5/3,mapas[3].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[3].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[3+this.mapasPosicion],dinero,3));

        this.mapasButton[4] = this.add.sprite((gameConfig.scale.width / 6)*5,gameConfig.scale.height*1.5/3,mapas[4].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[4].setInteractive().on('pointerdown', () =>this.desbloquear(mapas[4+this.mapasPosicion],dinero,4));

        //Flechas derecha e izquierda
        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 25,gameConfig.scale.height*1.5/3,'flechaIzquierda').setScale(0.4*gameConfig.scale.height / 600);
        this.spriteIzquierda.setInteractive().on('pointerdown', () =>this.trasladarIzquierda());

        this.spriteDerecha = this.add.sprite(gameConfig.scale.width*24/25,gameConfig.scale.height*1.5/3,'flechaDerecha').setScale(0.4*gameConfig.scale.height / 600);
        this.spriteDerecha.setInteractive().on('pointerdown', () =>this.trasladarDerecha());

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15,(gameConfig.scale.height/8)*7.5,'botonSalir').setScale(0.1*gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }

    //Show a message to unlock a map
    desbloquear(mapa,dinero,pos){
        this.spriteDerecha.disableInteractive();
        this.spriteIzquierda.disableInteractive();
        var i;
        for (i = 0; i < this.mapasButton.length; i++) {
            this.mapasButton[i].disableInteractive();
        }
        
        if(mapa.bloqueado){
            this.mapasButton[pos].setTint(0xDEDE7C);
            if(espanol){
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear').setScale(gameConfig.scale.height / 600);
            }else{
                this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloqueari').setScale(gameConfig.scale.height / 600);
            }
            

            this.spriteDesbloquearNo = this.add.sprite(gameConfig.scale.width*1.2 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearNo').setScale(gameConfig.scale.height / 600);
            this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=> this.cerrarMensajeDesbloquear(pos));

            this.spriteDesbloquearSi = this.add.sprite(gameConfig.scale.width*0.8 / 2,(gameConfig.scale.height/3)*2.6,'botonDesbloquearSi').setScale(gameConfig.scale.height / 600);
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=> this.comprarMapa(mapa,dinero,pos));
        }
        
    }

    comprarMapa(mapa,dinero,pos){
        if(coins >= mapa.coins){
            //Change sprite, set new texture and update coins
            if(espanol){
                mapa.sprite = mapa.spriteDesbloqueado;
            }else{
                mapa.sprite = mapa.spriteDesbloqueadoi;
            }
            
            this.mapasButton[pos].setTexture(mapa.sprite);
            mapa.bloqueado = false;
            coins = coins-mapa.coins;
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
        for (i = 0; i < this.mapasButton.length; i++) {
            this.mapasButton[i].setInteractive();
        }
        this.mapasButton[pos].clearTint();
        this.spriteDerecha.setInteractive();
        this.spriteIzquierda.setInteractive();
        this.mensajeDesbloquear.destroy();
        this.spriteDesbloquearNo.destroy();
        this.spriteDesbloquearSi.destroy();
    }

    //Mueve los mapas para que se vean los de la izquierda
    trasladarIzquierda(){
        if(this.mapasPosicion>0){
            this.mapasPosicion--;
            var i;
            for (i = 0; i < this.mapasButton.length; i++) {
                this.mapasButton[i].setTexture(mapas[this.mapasPosicion+i].sprite);
            }
        }
    }

    //Mueve los mapas para que se vean los de la derecha
    trasladarDerecha(){
        if((this.mapasPosicion+5)<mapas.length){
            this.mapasPosicion++;
            var i;
            for (i = 0; i < this.mapasButton.length; i++) {
                this.mapasButton[i].setTexture(mapas[this.mapasPosicion+i].sprite);
            }
        }
    }
}