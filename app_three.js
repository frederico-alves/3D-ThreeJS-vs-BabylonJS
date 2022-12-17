function threeJS () {
    // Basic setup
    const canvas = document.getElementById('three-js-scene');
    const scene = new THREE.Scene();
    const sizes = {
        width: (window.innerWidth/2),
        height: window.innerHeight
    }
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setClearColor( 0x00b4ff );

    // Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({color: 0x00b4ff});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lights
    const frontDirectionalLight = new THREE.DirectionalLight( 0xfffff5 );
    frontDirectionalLight.position.set( 5, 0.75, 6 );
    scene.add( frontDirectionalLight );

    const backDirectionalLight = new THREE.DirectionalLight( 0xfffff5 );
    backDirectionalLight.position.set( -5, 0.75, -6 );
    scene.add( backDirectionalLight );

    const topPointLight = new THREE.PointLight(0xffffff);
    topPointLight.position.set(0, 10, 0);
    scene.add(topPointLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(23, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 5;
    camera.position.y = 5;
    camera.position.x = 5;
    scene.add(camera)

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
        
    // Orbit Controls
    const controls = new THREE.OrbitControls(camera, canvas)
    function OrbitRender() {
        requestAnimationFrame(OrbitRender);
        renderer.render(scene, camera);
    }
    OrbitRender()


    // Window Resize
    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth/2
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
    })
}

threeJS();