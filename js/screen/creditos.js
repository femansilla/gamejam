function setupCreditos() {
    // Load in image and assign it to a sprite
    let fondoCreditos = new PIXI.Sprite.fromImage("/img/screens/creditos/fondoCreditos.jpg");
    
    let btnVolver = new PIXI.Sprite.fromImage("/img/botones/btnAzul.png");
    btnVolver.position.set(750,500);
    const textBtnVolver = new PIXI.Text(`Volver`, {fill:"#ffffff"});
    btnVolver.interactive = true;
    btnVolver.on('mousedown', backToHomeScreen);
    btnVolver.on('touchstart', backToHomeScreen);
    btnVolver.addChild(textBtnVolver);

    // Add the sprite to the stage
    stage.addChild(fondoCreditos);
    stage.addChild(btnVolver);

    // Render the stage so we can see the sprite
    renderer.render(stage);

    function backToHomeScreen (eventData) {
        loadHome()
        PIXI.loader.reset()
    }

    // start animating
    animate();

    function animate() {
        requestAnimationFrame(animate);
        // render the root container
        renderer.render(stage);
    }
}


function loadCreditos(){
    // Add an image to the loader
    if(typeof PIXI.loader.resources["/img/screens/creditos/fondoCreditos.jpg"] == "undefined"){
        PIXI.loader.add("/img/screens/creditos/fondoCreditos.jpg").load(setupCreditos);
    }
}
