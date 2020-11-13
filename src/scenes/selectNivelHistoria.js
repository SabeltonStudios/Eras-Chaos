let completedLevel=[
{
    "completado": false
},
{
    "completado": false
},
{
    "completado": false
},
{
    "completado": false
},
{
    "completado": false
}

]
class selectNivelHistoria extends Phaser.Scene {
    constructor() {
        super("SelectNivelHistoria");
    }
    mapasButton = [];
    create() {
        completedLevel[0].completado=true;
        this.Fondo = this.add.image(0, 0, 'fondoTienda').setOrigin(0);
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        if (espanol) {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 7, 'niveles').setScale(gameConfig.scale.height / 600);
            this.spriteTutorial= this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height *5/ 7, 'tutorialHistoria').setScale(gameConfig.scale.height / 600);
            var i;
            mapas[0].sprite = mapas[0].spriteDesbloqueado;
            for (i = 1; i < mapas.length; i++) {
                if (!completedLevel[i-1].completado) {
                    mapas[i].sprite = mapas[i].spriteSelectBloq;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueado;
                }
            }
        } else {
            this.spriteTituloMapas = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 7, 'nivelesi').setScale(gameConfig.scale.height / 600);
            this.spriteTutorial= this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height *5/ 7, 'tutorialHistoriai').setScale(gameConfig.scale.height / 600);
            var i;
            mapas[0].sprite = mapas[0].spriteDesbloqueadoi;
            for (i = 1; i < mapas.length; i++) {
                if (!completedLevel[i-1].completado) {
                    mapas[i].sprite = mapas[i].spriteSelectBloqi;
                } else {
                    mapas[i].sprite = mapas[i].spriteDesbloqueadoi;
                }
            }
        }

        
        //Asignamos los botones a cinco mapas
        this.mapasButton[0] = this.add.sprite(gameConfig.scale.width / 6, gameConfig.scale.height / 3, mapas[0].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[0].setInteractive().on('pointerdown', () => this.scene.start("PrehistoriaScene"));

        this.mapasButton[1] = this.add.sprite((gameConfig.scale.width / 6) * 2, gameConfig.scale.height / 3, mapas[1].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[1].setInteractive().on('pointerdown', ()=>completedLevel[0].completado? this.scene.start("EgiptoScene"): console.log("no has completado el nivel anterior"));

        this.mapasButton[2] = this.add.sprite((gameConfig.scale.width / 6) * 3, gameConfig.scale.height / 3, mapas[2].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[2].setInteractive().on('pointerdown', ()=>completedLevel[1].completado? this.scene.start("MediaScene"): console.log("no has completado el nivel anterior"));

        this.mapasButton[3] = this.add.sprite((gameConfig.scale.width / 6) * 4, gameConfig.scale.height / 3, mapas[3].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[3].setInteractive().on('pointerdown', () => completedLevel[2].completado? this.scene.start("IndustrialScene"): console.log("no has completado el nivel anterior"));

        this.mapasButton[4] = this.add.sprite((gameConfig.scale.width / 6) * 5, gameConfig.scale.height / 3, mapas[4].sprite).setScale(gameConfig.scale.height / 600);
        this.mapasButton[4].setInteractive().on('pointerdown', () => completedLevel[3].completado? this.scene.start("ContempScene"): console.log("no has completado el nivel anterior"));

        //Botón de salir
        this.spriteSalir = this.add.sprite(gameConfig.scale.width / 15, (gameConfig.scale.height / 8) * 7.5, 'botonSalir').setScale(0.1*gameConfig.scale.height / 600);
        this.spriteSalir.setInteractive().on('pointerdown', () => this.scene.start("MenuPrincipalScene"));
    }
}