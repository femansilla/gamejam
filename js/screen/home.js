function setupHome() {
    // Load in image and assign it to a sprite
    let fondoHome = new PIXI.Sprite.fromImage("/img/screens/home/fondoHome.png");
    
    let btnJugar = new PIXI.Sprite.fromImage("/img/botones/btnAzul.png");
    btnJugar.position.set(700,300);
    // text
    const textBtnJugar = new PIXI.Text(`JUGAR`, {fill:"#ffffff"});
    const txtBtnJugar = new PIXI.Sprite(PIXI.Texture.WHITE);
    txtBtnJugar.width = textBtnJugar.width,txtBtnJugar.height = textBtnJugar.height;
    
    btnJugar.interactive = true;
    btnJugar.on('mousedown', onDownBtnJugar);
    btnJugar.on('touchstart', onDownBtnJugar);

    btnJugar.addChild(txtBtnJugar,textBtnJugar);


    let btnCreditos = new PIXI.Sprite.fromImage("/img/botones/btnNaranja.png");
    btnCreditos.position.set(700,400);
    // text
    const textBtnCreditos = new PIXI.Text(`CREDITOS`, {fill:"#ffffff"});
    const txtBtnCreditos = new PIXI.Sprite(PIXI.Texture.WHITE);
    txtBtnCreditos.width = textBtnCreditos.width,txtBtnCreditos.height = textBtnCreditos.height;

    btnCreditos.interactive = true;
    btnCreditos.on('mousedown', onDownBtnCreditos);
    btnCreditos.on('touchstart', onDownBtnCreditos);

    btnCreditos.addChild(txtBtnCreditos,textBtnCreditos);


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
    PIXI.loader.add("/img/screens/home/fondoHome.png").load(setupHome);
    PIXI.loader.add("/img/botones/btnAzul.png").load(setupHome);
    PIXI.loader.add("/img/botones/btnNaranja.png").load(setupHome);
}
