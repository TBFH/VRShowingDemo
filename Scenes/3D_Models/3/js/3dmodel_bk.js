// 页面异常检测
if ( WEBGL.isWebGLAvailable() === false ) {
    document.body.appendChild( WEBGL.getWebGLErrorMessage() );
}
// 实例变量的声明
var container, stats, controls;
var camera, scene, renderer, light, bbox;
var rotating = true;

init();  // 执行init()，方法体在下面，用于初始化3D场景
animate();  // 执行animate()方法，方法体在下面，模型的动画控制
pauseRotation();  // 暂停旋转方法

/**
 * 以下都是一些方法的声明
 */

// 初始化3D场景方法
function init() {
    // 若modelUrl为空，即html中的modelUrl没有填入模型的路径时，初始化失败
    if (!modelUrl) {
        return false;
    }

    // DOM操作，控制html页面信息
    container = document.createElement( 'div' );
    document.body.appendChild( container );

    scene = new THREE.Scene();  // 声明场景类实例
    bbox = new THREE.Box3();

    var light1;
    // scene.background = new THREE.Color( 0xaaaaaa );  // 设置场景背景的颜色
    light1 = new THREE.HemisphereLight( 0xf2ffff, 0x383838, 1.5 );  // 设置环境光（天空光线颜色，地面光线颜色，光源强度）
    light1.position.set( 0, 1, 0 );  // 光源位置（x,y,z）
    scene.add( light1 );

    // light = new THREE.DirectionalLight(0xffffff, 1);
    // light.position.set(5, 5, 5);
    // light.castShadow = true;
    // scene.add( light );  // 向场景中添加光源

    const light = new THREE.DirectionalLight()
    light.position.set(5, 5, 5);
    light.castShadow = true
    light.shadow.mapSize.width = 512
    light.shadow.mapSize.height = 512
    light.shadow.camera.near = 0.5
    light.shadow.camera.far = 50
    light.shadowCameraVisible = true;
    scene.add(light)

    var helper = new THREE.CameraHelper( light.shadow.camera );
    scene.add( helper );

    var loader = new THREE.GLTFLoader();  // 声明gltf格式模型的加载器

    // 加载gltf模型到场景中的操作
    loader.load( modelUrl, function ( gltf ) {
        gltf.scene.name = '3dmodel';
        this.setContent(gltf.scene);
        scene.add( gltf.scene );
    }, undefined, function ( e ) {
        console.error( e );
    } );

    // Floor
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 3), new THREE.MeshPhongMaterial({ color: 0xfab74b }));
    plane.rotation.x = - Math.PI / 2;
    plane.position.set(0, -0.39, 0);
    plane.receiveShadow = true;
    plane.castShadow = true;
    scene.add(plane);

    const cone = new THREE.Mesh(new THREE.ConeGeometry(1, 3, 5), new THREE.MeshPhongMaterial({ color: 0xdbde40 }));
    plane.position.set(0, -0.39, 0);
    plane.receiveShadow = true;
    plane.castShadow = true;
    scene.add(cone);

    renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );  // 初始化渲染器实例，同时开启图像抗锯齿
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio( window.devicePixelRatio );  // 设置显示模型的像素比例（符合电脑当前的分辨率，防止模型显示模糊）
    renderer.setSize( 0.82 * window.innerWidth, 0.78 * window.innerHeight );  // 设置渲染画布的长宽尺寸（window.innerWidth和window.innerHeight表示浏览器窗口的长和宽，可以乘以小数以改变大小，或者改为指定数值(px)）
    renderer.gammaOutput = true;  // 开启色彩校正
    container.appendChild( renderer.domElement );  // DOM操作，更新控制html显示
    window.addEventListener( 'resize', onWindowResize, false );  // 监听浏览器的大小改变，一有改变就执行onWindowResize()方法

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);  // 设置相机的透视投影效果

    controls = new THREE.OrbitControls(camera);  // 鼠标控制实例声明
    // to disable pan
    controls.enablePan = true;
    // to disable zoom
    controls.enableZoom = true;
    controls.enableDamping = true;
    controls.target.set(0,0,0);  // 鼠标控制的目标点为(0,0,0)，即最中心
}

// 监听浏览器窗口大小改变方法（一但浏览器窗口大小改变，则会执行此方法）
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;  // 设置摄像机视口比例（这里则是浏览器 窗口的长/窗口的宽，就是当前浏览器窗口的长宽比）
    camera.updateProjectionMatrix();  // 更新模型的透视投影
    renderer.setSize( 0.82 * window.innerWidth, 0.78 * window.innerHeight );  // 设置渲染画布的长宽尺寸
}

// 3D模型的动画控制
function animate() {
    requestAnimationFrame( animate );

    // 使得模型自动旋转
    // if (rotating) {
    //     scene.rotation.y += -0.005;
    // } else {
    //     scene.rotation.y = scene.rotation.y;
    // }

    renderer.render( scene, camera );  // 渲染器渲染场景和摄像机（渲染上面配置好的初始化的数据）
    // renderer.addEventListener('change', renderer);  // 监听鼠标操作（控制放缩、旋转等操作）

    controls.update();  // 更新鼠标操作
}

// 暂停旋转方法
function pauseRotation() {
    var modelBorder = document.getElementById("modelBorder");
    modelBorder.addEventListener("mouseenter", function( event ) {
        rotating = false;
    });
    modelBorder.addEventListener("mouseleave", function( event ) {
        rotating = true;
    });
    modelBorder.addEventListener('touchmove', function(e) {
        rotating = false;
    }, false);
    modelBorder.addEventListener('touchstart', function(e) {
        rotating = false;
    }, false);
    modelBorder.addEventListener('touchend', function(e) {
        rotating = true;
    }, false);

}

// 将3D模型加载到场景中的方法
function setContent(object) {
    object.updateMatrixWorld();
    const box = new THREE.Box3().setFromObject(object);
    const size = box.getSize(new THREE.Vector3()).length();
    const boxSize = box.getSize();
    const center = box.getCenter(new THREE.Vector3());

    object.position.x += object.position.x - center.x;
    object.position.y += object.position.y - center.y;
    object.position.z += object.position.z - center.z;

    this.camera.position.copy(center);
    if (boxSize.x > boxSize.y) {
        this.camera.position.z = boxSize.x * -2.85
    } else {
        this.camera.position.z = boxSize.y * -2.85
    }
    this.camera.lookAt(0, 0, 0);
}