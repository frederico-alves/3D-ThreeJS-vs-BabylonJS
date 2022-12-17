function babylonJS () {
    // Basic setup
    const canvas = document.getElementById("babylon-js-scene");
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.FromHexString("#FFA500");

// Cube
const cube = BABYLON.MeshBuilder.CreateBox("cube", {size: 4}, scene);
cube.material = new BABYLON.StandardMaterial("cubeMaterial", scene);
cube.material.diffuseColor = new BABYLON.Color3.FromHexString("#FFA500");

// Lights
const light = new BABYLON.HemisphericLight("light",new BABYLON.Vector3(0, 1, -0.5), scene);

// Camera
const camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 0,BABYLON.Vector3.Zero(), scene);
camera.setPosition(new BABYLON.Vector3(10, 10, -10));
camera.attachControl(canvas, true);

// Animation
engine.runRenderLoop(function () {
    cube.rotation.y += -0.01;
    scene.render();
});

// Window Resize
window.addEventListener("resize", function () {
    engine.resize();
});
}

babylonJS();