// ESTA PARTE SE AGREGA PARA QUE PHASER PUEDA USAR TU FUNCION crear()
//Habia varios errores de sintaxis y tipograficos
class EscenaPrincipal extends Phaser.Scene {

    constructor() {
        super("EscenaPrincipal");
    }

    create() {
        crear.call(this);// llama tu funcion original sin modificarla
    }

}

const config = {
    type: Phaser.AUTO,
    parent: "juego",
//se agrego las lineas para un centrado automativo entre movil y compu
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },

    backgroundColor: "#4FC3F7",

    scene: [EscenaPrincipal]
};

const game = new Phaser.Game(config);

let boton;
let contador = 0;
let textoContador;
let textoEstado;

let colores = [
    0x0000ff,
    0xff0000,
    0x00ff00,
    0xffff00,
    0xff00ff
]

let indiceColor = 0;
let juegoTerminado = false;

function crear(){

boton = this.add.circle(200, 150, 100, colores[indiceColor]);//no indica los colores que debian de agregarse, cambie de rectangulo a circulo
boton.setInteractive();

this.add.text(150, 140, "Haz clic", {
    fontSize: "20px",
    color: "#ffffff"
});

textoContador = this.add.text(140, 50, "Clics: 0", {
    fontSize: "24px",
    color: "#ffffff"
});

textoEstado = this.add.text(110, 90, "", {
    fontSize: "24px",
    color: "#00ff00"
});

boton.on("pointerdown", cambiarColor)

}



function cambiarColor(){

if (juegoTerminado === true) return// FALTABA EL ===

boton.scene.tweens.add({// FALTA EL BOTON 

targets: boton,
scaleX: 1.2,
scaleY: 1.2,
duration: 100,
yoyo: true

});

contador = contador + 1;

textoContador.setText("Clics: " + contador);

indiceColor = indiceColor + 1;

boton.fillColor = colores[indiceColor];//no estaba el indice de colores para llamar 

if (indiceColor >= colores.length - 1) {//

textoEstado.setText("¡Ganaste!");

boton.disableInteractive();

juegoTerminado = true;// TENIA UN = DE MAS

}
return

}

// NO ES NECESARIO ROMPRE LA FUNCION boton.setTint(colores[indiceColor]);





