function setupHome() {
    // Load in image and assign it to a sprite
    let fondoHome = new PIXI.Sprite.fromImage("/img/screens/home/fondoHome.png");
    
    let btnJugar = new PIXI.Sprite.fromImage("/img/botones/btnAzul.png");
    btnJugar.position.set(700,400);
    // text
    const textBtnJugar = new PIXI.Text(`JUGAR`, {fill:"#ffffff"});
    
    btnJugar.interactive = true;
    btnJugar.on('mousedown', onDownBtnJugar);
    btnJugar.on('touchstart', onDownBtnJugar);

    btnJugar.addChild(textBtnJugar);


    let btnCreditos = new PIXI.Sprite.fromImage("/img/botones/btnNaranja.png");
    btnCreditos.position.set(700,500);
    // text
    const textBtnCreditos = new PIXI.Text(`CREDITOS`, {fill:"#ffffff"});

    btnCreditos.interactive = true;
    btnCreditos.on('mousedown', onDownBtnCreditos);
    btnCreditos.on('touchstart', onDownBtnCreditos);

    btnCreditos.addChild(textBtnCreditos);


    // Add the sprite to the stage
    stage.addChild(fondoHome);
    stage.addChild(btnJugar);
    stage.addChild(btnCreditos);

    // Render the stage so we can see the sprite
    renderer.render(stage);

    function onDownBtnJugar (eventData) {
        loadJuego();
    }
    function onDownBtnCreditos (eventData) {
        loadCreditos();
    }

    // start animating
    animate();

    function animate() {
        requestAnimationFrame(animate);
        // render the root container
        renderer.render(stage);
    }
}


function loadHome(){
    // Add an image to the loader
    if(typeof PIXI.loader.resources["/img/screens/home/fondoHome.png"] == "undefined"){
        PIXI.loader.add("/img/screens/home/fondoHome.png").load(setupHome);
    }
    
    if(typeof PIXI.loader.resources["/img/botones/btnAzul.png"] == "undefined"){
        PIXI.loader.add("/img/botones/btnAzul.png").load(setupHome);
    }
    
    if(typeof PIXI.loader.resources["/img/botones/btnNaranja.png"] == "undefined"){
        PIXI.loader.add("/img/botones/btnNaranja.png").load(setupHome);
    }

    setupHome();
}
