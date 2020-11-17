class puntuacionesScene extends Phaser.Scene {
    constructor() {
        super("PuntuacionesScene");
    }
    create() {
        this.Fondo = this.add.image(0, 0, 'fondoTienda').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        this.Titulo = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height/8,'titlePuntuaciones').setScale(0.8 *gameConfig.scale.height / 600);
        this.fondoMarron = this.add.sprite(gameConfig.scale.width/2,gameConfig.scale.height*1.2/2,'fondoMarron').setScale(gameConfig.scale.height / 600);

        this.mapasText = this.add.text(gameConfig.scale.width / 3, gameConfig.scale.height / 3.5, "", {font:"28px euphorigenic", fill: '#fff' ,align: 'left'}).setOrigin(0.5, 0).setScale(gameConfig.scale.width / 800);
        this.muertesText = this.add.text(gameConfig.scale.width*2 / 3, gameConfig.scale.height / 3.5, "", {font:"28px euphorigenic", fill: '#fff' ,align: 'right'}).setOrigin(0.5, 0).setScale(gameConfig.scale.width / 800);
        
        if (!espanol) {
            this.Titulo.setTexture('titlePuntuacionesi')
            this.auxMapas= "Map\n\n";
            this.auxMuertes= "Deaths\n\n";
            for (let i = 0; i < results.length; i++) {
                if (results[i].Muertes > -1) {
                    this.auxMapas+=  results[i].Mapai +"\n";
                    this.auxMuertes+= results[i].Muertes+ "\n"
                }
            }
            this.mapasText.setText(this.auxMapas);
            this.muertesText.setText(this.auxMuertes);
        } else {
            this.auxMapas= "Mapa\n\n";
            this.auxMuertes= "Muertes\n\n";
            for (let i = 0; i < results.length; i++) {
                if (results[i].Muertes > -1) {
                    this.auxMapas+=results[i].Mapa +"\n";
                    this.auxMuertes+= results[i].Muertes+ "\n"
                }
            }
            this.mapasText.setText(this.auxMapas);
            this.muertesText.setText(this.auxMuertes);
        }
        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1 * gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => {this.sound.play('buttonSound',{volume: 0.15}); this.scene.start("MenuPrincipalScene")});
    }
}