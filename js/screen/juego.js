function setupJuego() {
    // Load in image and assign it to a sprite
    let fondoJuego = new PIXI.Sprite.fromImage("/img/screens/play/fondoAtardecer.png");
    let fondoEdificios = new PIXI.Sprite.fromImage("/img/screens/play/fondoEdificios.png");
    let lucesEdificios = new PIXI.Sprite.fromImage("/img/screens/play/lucesEdificios.png");
    
    
    // Add the sprite to the stage
    stage.addChild(fondoJuego);
    stage.addChild(fondoEdificios);
    stage.addChild(lucesEdificios);

    // Render the stage so we can see the sprite
    renderer.render(stage);
}

// setInterval(() => {
//     //changePositionCloud()
// }, 1500);

// setInterval(() => {
//     //changePositionEdificios()
//     //changePositionTrees()
// }, 6000);

// setInterval(() => {
//     //changeDayTime()
// }, 10000);

function loadJuego(){
    // Add an image to the loader
    if(typeof PIXI.loader.resources["/img/screens/play/fondoAtardecer.png"] == "undefined"){
        PIXI.loader.add("/img/screens/play/fondoAtardecer.png").load(setupHome);
    }
    if(typeof PIXI.loader.resources["/img/screens/play/fondoEdificios.png"] == "undefined"){
        PIXI.loader.add("/img/screens/play/fondoEdificios.png").load(setupHome);
    }
    if(typeof PIXI.loader.resources["/img/screens/play/lucesEdificios.png"] == "undefined"){
        PIXI.loader.add("/img/screens/play/lucesEdificios.png").load(setupHome);
    }
}
