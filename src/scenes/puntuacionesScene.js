class puntuacionesScene extends Phaser.Scene {
    constructor() {
        super("PuntuacionesScene");
    }
    create() {
        this.Fondo = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        this.Titulo = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/7,'titlePuntuaciones').setScale(gameConfig.scale.height / 600);
        this.fondoMarron = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height*1.2/2,'fondoMarron').setScale(gameConfig.scale.height / 600);

        this.resultados = this.add.text(gameConfig.scale.width / 2, gameConfig.scale.height / 3.5, "", {font:"30px euphorigenic", fill: '#fff' ,boundsAlignH: "center", boundsAlignV: "middle"}).setOrigin(0.5, 0).setScale(gameConfig.scale.width / 800);
        
        if (!espanol) {
            this.Titulo.setTexture('titlePuntuacionesi')
            this.aux= "Map \t \t \t  Deaths \n\n";
            for (let i = 0; i < results.length; i++) {
                if (results[i].Muertes > -1) {
                    this.aux+=  results[i].Mapai + " \t \t \t \t \t \t" + results[i].Muertes + "\n";
                }
            }
            this.resultados.setText(this.aux);
        } else {
            this.aux= "Mapa \t \t \t Muertes \n\n"
            for (let i = 0; i < results.length; i++) {
                if (results[i].Muertes > -1) {
                    this.aux+=results[i].Mapa + " \t \t \t \t \t \t" + results[i].Muertes + "\n";
                }
            }
            this.resultados.setText(this.aux);
        }
        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));
    }
}