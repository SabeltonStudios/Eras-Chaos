//Array de resultados para las puntuaciones, con mapa, muertes, e indice
let results = [
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    },
    {
        "Mapa": "",
        "Mapai": "",
        "Muertes": -1,
        "Indice": -1
    }
];

//Función que ordena los resultados
function sortResults(mapa, mapai, nuevoValor, indice) {
    for (let i = 0; i < results.length; i++) {
        if (nuevoValor == results[i].Muertes) {
            if (indice <= results[i].Indice) {
                var MapaAux = results[i].Mapa;
                var MapaiAux = results[i].Mapai;
                var MuertesAux = results[i].Muertes;
                var IndiceAux = results[i].Indice;
                results[i].Muertes = nuevoValor;
                results[i].Mapa = mapa;
                results[i].Mapai = mapai;
                results[i].Indice = indice;
                for (let j = results.length - 1; j > i + 1; j--) {
                    results[j].Mapa = results[j - 1].Mapa;
                    results[j].Mapai = results[j - 1].Mapai;
                    results[j].Muertes = results[j - 1].Muertes;
                    results[j].Indice = results[j - 1].Indice;
                }
                if (i + 1 < results.length) {
                    results[i + 1].Mapa = MapaAux;
                    results[i + 1].Mapai = MapaiAux;
                    results[i + 1].Muertes = MuertesAux;
                    results[i + 1].Indice = IndiceAux;
                }
                break;
            }
        }
        else if (nuevoValor < results[i].Muertes || results[i].Muertes == -1) {

            var MapaAux = results[i].Mapa;
            var MapaiAux = results[i].Mapai;
            var MuertesAux = results[i].Muertes;
            var IndiceAux = results[i].Indice;
            results[i].Muertes = nuevoValor;
            results[i].Mapa = mapa;
            results[i].Mapai = mapai;
            results[i].Indice = indice;

            for (let j = results.length - 1; j > i + 1; j--) {
                results[j].Mapa = results[j - 1].Mapa;
                results[j].Mapai = results[j - 1].Mapai;
                results[j].Muertes = results[j - 1].Muertes;
                results[j].Indice = results[j - 1].Indice;
            }
            if (i + 1 < results.length) {
                results[i + 1].Mapa = MapaAux;
                results[i + 1].Mapai = MapaiAux;
                results[i + 1].Muertes = MuertesAux;
                results[i + 1].Indice = IndiceAux;

            }

            break;
        }
    }
    /*for (let i = 0; i < results.length; i++) {
        console.log(results[i].Mapa, results[i].Muertes, results[i].Indice);
    }*/
}

class menuPrincipalScene extends Phaser.Scene {

    constructor() {
        super("MenuPrincipalScene");
    }

    preload() {
        //Si no está sonando la música del menu, se reproduce
        if (!MenuMusic.isPlaying) {
            MenuMusic.play();
        }
    }

    create() {
        //Si no está sonando la música del menu, se reproduce
        if (!MenuMusic.isPlaying) {
            MenuMusic.play();
        }

        //Añade el fondo del menú principal
        this.Fondo = this.add.image(0, 0, 'fondo').setOrigin(0)
        this.Fondo.setScale(gameConfig.scale.width / this.Fondo.width, gameConfig.scale.height / this.Fondo.height);
        //Añade un fondo con transparencia blanco
        this.spriteFondoBlanco = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 2, 'fondoBlanco').setScale(gameConfig.scale.height / 600);

        //Añade el sprite del titulo
        this.spriteTitulo = this.add.sprite(gameConfig.scale.width / 2, gameConfig.scale.height / 4, 'titulo').setScale(gameConfig.scale.height / 600);
        
        //Añade el botón de sonido
        this.spriteSound = this.add.sprite(gameConfig.scale.width * 2 / 16, gameConfig.scale.height * 2 / 14, 'botonSoundOn').setScale(0.4*gameConfig.scale.height / 600);
        if(this.game.sound.mute==true){
            this.spriteSound.setTexture('botonSoundOff')
        }
        this.spriteSound.setInteractive().on('pointerdown', ()=> {this.game.sound.mute= !this.game.sound.mute; this.game.sound.mute==true ? this.spriteSound.setTexture('botonSoundOn'): this.spriteSound.setTexture('botonSoundOff')});
        //Si el idioma es español se cargan los botones en español
        if (espanol) {
            this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 4, 'botonHistoria').setScale(gameConfig.scale.height / 600);
            this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 5, 'boton2Jugadores').setScale(gameConfig.scale.height / 600);
            this.spritePuntuaciones = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 6, 'botonPuntuaciones').setScale(gameConfig.scale.height / 600);
            this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 7, 'botonTienda').setScale(gameConfig.scale.height / 600);
            this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 8, 'botonCreditos').setScale(gameConfig.scale.height / 600);
            this.spriteEspanol = this.add.sprite(gameConfig.scale.width * 14 / 16, gameConfig.scale.height * 2 / 14, 'botonEspanolOn').setScale(gameConfig.scale.height / 600);
            this.spriteIngles = this.add.sprite(gameConfig.scale.width * 14 / 16, gameConfig.scale.height * 3 / 14, 'botonInglesOff').setScale(gameConfig.scale.height / 600);

            //Si el idioma es ingles se cargan los botones en ingles
        } else {
            this.spriteHistoria = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 4, 'botonHistoriai').setScale(gameConfig.scale.height / 600);
            this.spriteMultijugadorSeleccion = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 5, 'boton2Jugadoresi').setScale(gameConfig.scale.height / 600);
            this.spritePuntuaciones = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 6, 'botonPuntuacionesi').setScale(gameConfig.scale.height / 600);
            this.spriteTienda = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 7, 'botonTiendai').setScale(gameConfig.scale.height / 600);
            this.spriteCreditos = this.add.sprite(gameConfig.scale.width / 2, (gameConfig.scale.height / 10) * 8, 'botonCreditosi').setScale(gameConfig.scale.height / 600);
            this.spriteEspanol = this.add.sprite(gameConfig.scale.width * 14 / 16, gameConfig.scale.height * 2 / 14, 'botonEspanolOff').setScale(gameConfig.scale.height / 600);
            this.spriteIngles = this.add.sprite(gameConfig.scale.width * 14 / 16, gameConfig.scale.height * 3 / 14, 'botonInglesOn').setScale(gameConfig.scale.height / 600);
        }

        //Interactividad de los botones
        this.spriteHistoria.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("SelectNivelHistoria") })
        this.spriteMultijugadorSeleccion.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("MultijugadorSeleccionScene") })
        this.spritePuntuaciones.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("PuntuacionesScene") })
        this.spriteTienda.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("TiendaScene") });
        this.spriteCreditos.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.scene.start("CreditosScene") });
        this.spriteIngles.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.cambiarIdiomaIngles() });
        this.spriteEspanol.setInteractive().on('pointerdown', () => { this.sound.play('buttonSound', { volume: 0.15 }); this.cambiarIdiomaEspanol() });
    }

    //Función que cambia al idioma inglés
    cambiarIdiomaIngles() {
        //Si el juego está en español
        if (espanol) {
            //Cambia la textura de ingles y desactiva el botón
            this.spriteIngles.setTexture('botonInglesOn').setScale(gameConfig.scale.height / 600);
            this.spriteIngles.disableInteractive();

            //Cambia la textura de español y activa el botón
            this.spriteEspanol.setTexture('botonEspanolOff').setScale(gameConfig.scale.height / 600);
            this.spriteEspanol.setInteractive().on('pointerdown', () => this.cambiarIdiomaEspanol());

            //Cambiar los demás sprites del menu
            this.spriteHistoria.setTexture('botonHistoriai').setScale(gameConfig.scale.height / 600);
            this.spritePuntuaciones.setTexture('botonPuntuacionesi').setScale(gameConfig.scale.height / 600);
            this.spriteMultijugadorSeleccion.setTexture('boton2Jugadoresi').setScale(gameConfig.scale.height / 600);
            this.spriteTienda.setTexture('botonTiendai').setScale(gameConfig.scale.height / 600);
            this.spriteCreditos.setTexture('botonCreditosi').setScale(gameConfig.scale.height / 600);

            //Cambia el valor de la variable y almacena la información en caché
            espanol = false;
            Game.saveFile();
        }
    }

    cambiarIdiomaEspanol() {
        //Si el juego no está en español
        if (!espanol) {
            //Cambia la textura de español y desactiva el botón
            this.spriteEspanol.setTexture('botonEspanolOn').setScale(gameConfig.scale.height / 600);
            this.spriteEspanol.disableInteractive();

            //Cambia la textura de inglés y activa el botón
            this.spriteIngles.setTexture('botonInglesOff').setScale(gameConfig.scale.height / 600);
            this.spriteIngles.setInteractive().on('pointerdown', () => this.cambiarIdiomaIngles());

            //Cambiar los demás sprites del menu
            this.spriteHistoria.setTexture('botonHistoria').setScale(gameConfig.scale.height / 600);
            this.spritePuntuaciones.setTexture('botonPuntuaciones').setScale(gameConfig.scale.height / 600);
            this.spriteMultijugadorSeleccion.setTexture('boton2Jugadores').setScale(gameConfig.scale.height / 600);
            this.spriteTienda.setTexture('botonTienda').setScale(gameConfig.scale.height / 600);
            this.spriteCreditos.setTexture('botonCreditos').setScale(gameConfig.scale.height / 600);

            //Cambia el valor de la variable y almacena la información en caché
            espanol = true;
            Game.saveFile();
        }

    }
}
