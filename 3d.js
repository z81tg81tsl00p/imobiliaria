    // parameters to ensure the model is georeferenced correctly on the map

    var modelOrigin = [-8.941932320594788,37.007826180517185];    //ID1
    //var modelOrigin = [-8.941922320594788,37.008019180517185];    //ID2
    //var modelOrigin = [-8.941889320594788,37.008105180517185];    //ID3
    //var modelOrigin = [-8.941859320594788,37.008200180517185];    //ID4
    //var modelOrigin = [-8.941785320594788,37.008280180517185];    //ID5
    //var modelOrigin = [-8.941785320594788,37.008280180517185];
    var modelAltitude = 5;
    var modelRotate = [Math.PI / 2, 0, 0];
    var modelScale = 5.41843220338983e-8;



    // transformation parameters to position, rotate and scale the 3D model onto the map

    var modelTransform = {
        translateX: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).x,
        translateY: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).y,
        translateZ: mapboxgl.MercatorCoordinate.fromLngLat(modelOrigin, modelAltitude).z,
        rotateX: modelRotate[0],
        rotateY: modelRotate[1],
        rotateZ: modelRotate[2],
        scale: modelScale
    };



    var THREE = window.THREE;
    // configuration of the custom layer for a 3D model per the CustomLayerInterface

    var customLayer = {
        id: '3d-model',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function(map, gl) {
            this.camera = new THREE.Camera();
            this.scene = new THREE.Scene();



           // create two three.js lights to illuminate the model

            var directionalLight = new THREE.DirectionalLight(0xffffff);
            directionalLight.position.set(0, -70, -100).normalize();
            this.scene.add(directionalLight);
            var directionalLight2 = new THREE.DirectionalLight(0xffffff);
            directionalLight2.position.set(0, 70, 100).normalize();
            this.scene.add(directionalLight2);



            // use the three.js GLTF loader to add the 3D model to the three.js scene

            var loader = new THREE.GLTFLoader();
            loader.load('marker.gltf', (function (gltf) {
                this.model = gltf.scene;
                this.scene.add(gltf.scene);
            }).bind(this));
            this.map = map;

            // use the Mapbox GL JS map canvas for three.js
            this.renderer = new THREE.WebGLRenderer({
                canvas: map.getCanvas(),
                context: gl
            });

            this.renderer.autoClear = false;
        },

        render: function(gl, matrix) {
            var rotationX = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), modelTransform.rotateX);
            var rotationY = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0), modelTransform.rotateY);
            var rotationZ = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 0, 1), modelTransform.rotateZ);
            var m = new THREE.Matrix4().fromArray(matrix);
            var l = new THREE.Matrix4().makeTranslation(modelTransform.translateX, modelTransform.translateY, modelTransform.translateZ)
                .scale(new THREE.Vector3(modelTransform.scale, -modelTransform.scale, modelTransform.scale))
                .multiply(rotationX)
                .multiply(rotationY)
                .multiply(rotationZ);

            this.camera.projectionMatrix.elements = matrix;
            this.camera.projectionMatrix = m.multiply(l);
            this.renderer.state.reset();
            this.renderer.render(this.scene, this.camera);
            this.animate();
            this.map.triggerRepaint();

        },

        animate: function(r) {
            //this.model.scale.set(3, 3, 3);
            if (this.model)
                this.model.rotation.y += 0.05;
        },
        animateP: function (pos_z, pox_x) {
                this.model.position.z = pos_z;
                this.model.position.x = pox_x;
        }

    };