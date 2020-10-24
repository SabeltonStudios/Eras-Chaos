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
        "coins" : 200,
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
        this.load.image('mapaBloqueado', 'assets/images/mapaBloqueado.png');
        this.load.image('mapaDesbloqueado', 'assets/images/mapaDesbloqueado.png');
        this.load.image('flechaDerecha', 'assets/images/flechaDerecha.png');
        this.load.image('flechaIzquierda', 'assets/images/flechaIzquierda.png');
        this.load.image('botonSalirTienda', 'assets/images/botonSalirTienda.png');
    }

    create(){
        var titulo = this.add.text(gameConfig.scale.width*7.35/16,gameConfig.scale.height/10,'MAPAS', { fill: '#0f0' })
        var dinero = this.add.text(gameConfig.scale.width*7.35/16,(gameConfig.scale.height/10)*2,coins, { fill: '#0f0' })

        mapas[0].button = this.add.sprite((gameConfig.scale.width / 8)*2,gameConfig.scale.height/2,mapas[0].sprite);

        mapas[1].button = this.add.sprite((gameConfig.scale.width / 8)*3,gameConfig.scale.height/2,mapas[1].sprite);
        mapas[1].button.setInteractive().on('pointerdown', () =>this.comprarMapa(mapas[1],dinero));

        mapas[2].button = this.add.sprite((gameConfig.scale.width / 8)*4,gameConfig.scale.height/2,mapas[2].sprite);
        mapas[2].button.setInteractive().on('pointerdown', () =>this.comprarMapa(mapas[2],dinero));

        mapas[3].button = this.add.sprite((gameConfig.scale.width / 8)*5,gameConfig.scale.height/2,mapas[3].sprite);
        mapas[3].button.setInteractive().on('pointerdown', () =>this.comprarMapa(mapas[3],dinero));

        mapas[4].button = this.add.sprite((gameConfig.scale.width / 8)*6,gameConfig.scale.height/2,mapas[4].sprite);
        mapas[4].button.setInteractive().on('pointerdown', () =>this.comprarMapa(mapas[4],dinero));

        this.spriteIzquierda = this.add.sprite(gameConfig.scale.width / 8,(gameConfig.scale.height/3)*1.5,'flechaIzquierda').setScale(1);

        this.spriteDerecha = this.add.sprite((gameConfig.scale.width / 8)*7,(gameConfig.scale.height/3)*1.5,'flechaDerecha').setScale(1);

        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 8,(gameConfig.scale.height/8)*6.5,'botonSalirTienda').setScale(0.8);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("TiendaScene"));
    }

    comprarMapa(mapa,dinero){
        //If i have enough money and the map is not blocked
        if(coins > mapa.coins && mapa.bloqueado){
            //Change sprite, set new texture and update coins
            mapa.sprite = mapa.spriteDesbloqueado;
            mapa.button.setTexture(mapa.sprite);
            mapa.bloqueado = false;
            coins = coins-mapa.coins;
            dinero.setText(coins);
        }
    }
}