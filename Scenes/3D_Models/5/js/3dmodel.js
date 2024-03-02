if ( WEBGL.isWebGLAvailable() === false ) {
    document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}
var container, stats, controls;
var camera, scene, renderer, light, bbox;
var rotating = true;

init();
animate();

function init() {
    if (!modelUrl) {
        return false;
    }
    container = document.createElement( 'div' );
    document.body.appendChild( container );

    scene = new THREE.Scene();

    // Hemisphere Light
    // light = new THREE.HemisphereLight( 0xffffff, 0xffffff, 10 );
    // light.position.set( 5, 5, 5 );
    // scene.add( light );

    // // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xaaaaaa, 3);
    directionalLight.position.set(3, 10, 3);
    directionalLight.castShadow = true;
    directionalLight.shadow.bias = -0.0002;
    scene.add(directionalLight);

    const directionalLight1 = new THREE.DirectionalLight(0x222222, 1);
    directionalLight1.position.set(-3, -10, -3);
    scene.add(directionalLight1);
    const directionalLight2 = new THREE.DirectionalLight(0x444444, 1);
    directionalLight2.position.set(3, 1, -3);
    scene.add(directionalLight2);
    const directionalLight3 = new THREE.DirectionalLight(0x444444, 1);
    directionalLight3.position.set(-3, 1, 3);
    scene.add(directionalLight3);

    // GLTF Model Load
    var loader = new THREE.GLTFLoader();
    loader.load( modelUrl, function ( gltf ) {
        gltf.scene.traverse( function( node ){
            if( node.isMesh ){ 
                node.castShadow = true;
                node.receiveShadow = true;
            }
        } );
        gltf.scene.position.set(0, 0, 0);
        gltf.scene.scale.set(0.2, 0.2, 0.2);
        scene.add( gltf.scene );
    }, undefined, function ( e ) {
        console.error( e );
    } );

    // Plane Mesh
    const material = new THREE.ShadowMaterial();  // Use ShadowMaterial to get transparent material
    material.opacity = 0.2;
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(15, 15, 15), material);
    plane.position.set(0, 0, 0);
    plane.rotation.x = - Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    // Renderer
    renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( 0.82 * window.innerWidth, 0.91 * window.innerHeight * 0.8 );
    renderer.gammaOutput = true;
    container.appendChild( renderer.domElement );

    // Window Resize Listener
    window.addEventListener( 'resize', onWindowResize, false );

    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.set(2, 1, -2);
    camera.lookAt(0, 0, 0);

    // Control
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.7, 0);
    controls.rotateSpeed = 0.1;
    controls.enablePan = true;
    controls.screenSpacePanning = true;
    controls.panSpeed = 0.1;
    controls.enableZoom = true;
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( 0.82 * window.innerWidth, 0.91 * window.innerHeight * 0.8 );
}