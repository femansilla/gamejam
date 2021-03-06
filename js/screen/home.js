function setupHome() {
    // Load in image and assign it to a sprite
    let fondoHome = new PIXI.Sprite.fromImage("/img/screens/home/fondoHome.jpg");
    
    let gameName = new PIXI.Sprite.fromImage("/img/screens/home/gameName.png");
    gameName.position.set(50,70);
    
    let delivery = new PIXI.Sprite.fromImage("/img/screens/home/delivery.png");
    delivery.position.set(50,200);

    let btnJugar = new PIXI.Sprite.fromImage("/img/botones/btnAzul.png");
    btnJugar.position.set(700,300);
    const textBtnJugar = new PIXI.Text(`JUGAR`, {fill:"#ffffff"});
    btnJugar.interactive = true;
    btnJugar.on('mousedown', onDownBtnJugar);
    btnJugar.on('touchstart', onDownBtnJugar);
    btnJugar.addChild(textBtnJugar);

    let btnAyuda = new PIXI.Sprite.fromImage("/img/botones/btnAzul.png");
    btnAyuda.position.set(700,400);
    const textBtnAyuda = new PIXI.Text(`AYUDA`, {fill:"#ffffff"});
    btnAyuda.interactive = true;
    btnAyuda.on('mousedown', onDownBtnAyuda);
    btnAyuda.on('touchstart', onDownBtnAyuda);
    btnAyuda.addChild(textBtnAyuda);


    let btnCreditos = new PIXI.Sprite.fromImage("/img/botones/btnNaranja.png");
    btnCreditos.position.set(700,500);
    const textBtnCreditos = new PIXI.Text(`CREDITOS`, {fill:"#ffffff"});
    btnCreditos.interactive = true;
    btnCreditos.on('mousedown', onDownBtnCreditos);
    btnCreditos.on('touchstart', onDownBtnCreditos);
    btnCreditos.addChild(textBtnCreditos);

    

    // Add the sprite to the stage
    stage.addChild(fondoHome);
    stage.addChild(gameName);
    stage.addChild(delivery);
    stage.addChild(btnJugar);
    stage.addChild(btnAyuda);
    stage.addChild(btnCreditos);

    // Render the stage so we can see the sprite
    renderer.render(stage);

    function onDownBtnJugar (eventData) {
        loadJuego();
    }
    function onDownBtnAyuda (eventData) {
        loadAyuda();
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
    if(typeof PIXI.loader.resources["/img/screens/home/fondoHome.jpg"] == "undefined"){
        PIXI.loader.add("/img/screens/home/fondoHome.jpg").load(setupHome);
    }

    if(typeof PIXI.loader.resources["/img/screens/home/gameName.png"] == "undefined"){
        PIXI.loader.add("/img/screens/home/gameName.png").load(setupHome);
    }

    if(typeof PIXI.loader.resources["/img/screens/home/delivery.png"] == "undefined"){
        PIXI.loader.add("/img/screens/home/delivery.png").load(setupHome);
    }

    
    if(typeof PIXI.loader.resources["/img/botones/btnAzul.png"] == "undefined"){
        PIXI.loader.add("/img/botones/btnAzul.png").load(setupHome);
    }
    
    if(typeof PIXI.loader.resources["/img/botones/btnNaranja.png"] == "undefined"){
        PIXI.loader.add("/img/botones/btnNaranja.png").load(setupHome);
    }

    setupHome();
}
