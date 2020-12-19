// Loads in a new render at a resolution of 1 with a few default options
let renderer = PIXI.autoDetectRenderer(
	1024, 576, { antialias: false, transparent: false, resolution: 4 }
);

//Create a container object called the `stage`
let stage = new PIXI.Container();

// Setup function to run once load completed sucessfully
function setup() {

	loadHome()
	// // Load in image and assign it to a sprite
	//   let fondoNoche = new PIXI.Sprite.fromImage("/img/screens/fondoNoche.png");
	//   let fondoEdificios = new PIXI.Sprite.fromImage("/img/screens/fondoEdificios.png");
	//   let lucesEdificios = new PIXI.Sprite.fromImage("/img/screens/lucesEdificios.png");

	//   // Add the sprite to the stage
	//   stage.addChild(fondoNoche);
	//   stage.addChild(fondoEdificios);
	//   stage.addChild(lucesEdificios);

	//   // Render the stage so we can see the sprite
	//   renderer.render(stage);
}

window.onload = function() {
	//Add the canvas to the HTML document
	document.body.appendChild(renderer.view);

	let scale = scaleToWindow(renderer.view);

	//Tell the `renderer` to `render` the `stage`
	renderer.render(stage);

	setup();
	// Rescales the window on resize and ensures
	// everything is central
	window.addEventListener("resize", event => {
		scaleToWindow(renderer.view);
	});
	
}