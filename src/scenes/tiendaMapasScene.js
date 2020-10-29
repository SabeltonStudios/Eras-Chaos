//Array of mapas
let mapas=[
    {
        "bloqueado":false,
        "coins" : 100,
        "button" : null,
        "sprite": 'mapaDesbloqueado',
        "spriteDesbloqueado": 'mapaDesbloqueado',
        "spriteBloqueado": 'mapaBloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 100,
        "button": null,
        "sprite": 'mapaBloqueado',
        "spriteDesbloqueado": 'mapaDesbloqueado',
        "spriteBloqueado": 'mapaBloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 100,
        "button" : null,
        "sprite": 'mapaBloqueado',
        "spriteDesbloqueado": 'mapaDesbloqueado',
        "spriteBloqueado": 'mapaBloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 100,
        "button" : null,
        "sprite": 'mapaBloqueado',
        "spriteDesbloqueado": 'mapaDesbloqueado',
        "spriteBloqueado": 'mapaBloqueado'
    },
    {
        "bloqueado":true,
        "coins" : 100,
        "button" : null,
        "sprite": 'mapaBloqueado',
        "spriteDesbloqueado": 'mapaDesbloqueado',
        "spriteBloqueado": 'mapaBloqueado'
    }
]

class tiendaMapasScene extends Phaser.Scene{
    constructor(){
        super("TiendaMapasScene");
    }
    
    preload(){
        this.load.image('mapaBloqueado', 'assets/Interfaz/Tienda/mapaBloqueado.png');
        this.load.image('mapaDesbloqueado', 'assets/Interfaz/Tienda/mapaDesbloqueado.png');
        this.load.image('flechaDerecha', 'assets/Interfaz/Tienda/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/Interfaz/Tienda/flechaIzquierda.png');
        this.load.image('botonSalirTienda', 'assets/Interfaz/Tienda/botonSalirTienda.png');
        this.load.image('botonDesbloquearNo', 'assets/Interfaz/Tienda/botonDesbloquearNo.png');
        this.load.image('botonDesbloquearSi', 'assets/Interfaz/Tienda/botonDesbloquearSi.png');
        this.load.image('mensajeDesbloquear', 'assets/Interfaz/Tienda/mensajeDesbloquear.png');
    }

    create(){
        var titulo = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/10,'MAPAS', { fill: '#0f0' })
        var dinero = this.add.text(gameConfig.scale.width*7.35/16,(gameConfig.scale.height/10)*2,coins, { fill: '#0f0' })

        mapas[0].button = this.add.sprite((gameConfig.scale.width / 8)*2,gameConfig.scale.height/2.5,mapas[0].sprite);

        mapas[1].button = this.add.sprite((gameConfig.scale.width / 8)*3,gameConfig.scale.height/2.5,mapas[1].sprite);
        mapas[1].button.setInteractive().on('pointerdown', () =>this.desbloquear(mapas[1],dinero));

        mapas[2].button = this.add.sprite((gameConfig.scale.width / 8)*4,gameConfig.scale.height/2.5,mapas[2].sprite);
        mapas[2].button.setInteractive().on('pointerdown', () =>this.desbloquear(mapas[2],dinero));

        mapas[3].button = this.add.sprite((gameConfig.scale.width / 8)*5,gameConfig.scale.height/2.5,mapas[3].sprite);
        mapas[3].button.setInteractive().on('pointerdown', () =>this.desbloquear(mapas[3],dinero));

        mapas[4].button = this.add.sprite((gameConfig.scale.width / 8)*6,gameConfig.scale.height/2.5,mapas[4].sprite);
        mapas[4].button.setInteractive().on('pointerdown', () =>this.desbloquear(mapas[4],dinero));

        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 8,(gameConfig.scale.height/3)*1.5,'flechaIzquierda').setScale(1);
        
        this.spriteDerecha = this.add.sprite((gameConfig.scale.width / 8)*7,(gameConfig.scale.height/3)*1.5,'flechaDerecha').setScale(1);

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 10,(gameConfig.scale.height/8)*7.5,'botonSalirTienda').setScale(0.8);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }

    //Show a message to unlock a map
    desbloquear(mapa,dinero){
        if(mapa.bloqueado){
            this.mensajeDesbloquear = this.add.sprite(gameConfig.scale.width / 2,(gameConfig.scale.height/3)*2.4,'mensajeDesbloquear').setScale(0.5);

            this.spriteDesbloquearNo = this.add.sprite((gameConfig.scale.width / 2)+100,(gameConfig.scale.height/3)*2.5,'botonDesbloquearNo').setScale(0.5);
            this.spriteDesbloquearNo.setInteractive().on('pointerdown',()=> this.cerrarMensajeDesbloquear());

            this.spriteDesbloquearSi = this.add.sprite((gameConfig.scale.width / 2)-100,(gameConfig.scale.height/3)*2.5,'botonDesbloquearSi').setScale(0.5);
            this.spriteDesbloquearSi.setInteractive().on('pointerdown',()=> this.comprarMapa(mapa,dinero));
        }
        
    }

    comprarMapa(mapa,dinero){
        //If i have enough money and the map is not blocked
        this.cerrarMensajeDesbloquear();
        if(coins >= mapa.coins){
            //Change sprite, set new texture and update coins
            mapa.sprite = mapa.spriteDesbloqueado;
            mapa.button.setTexture(mapa.sprite);
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
}