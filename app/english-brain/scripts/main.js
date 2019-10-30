const hemispheres = [{
        center: {
            x: 0.011211725135106168,
            y: 0.1772108621893329,
            z: -0.5661128454728348
        },
        name: 'Left Aquay Tealy Boi'
    },
    {
        center: {
            x: -0.3984992193472787,
            y: 0.44550567316384626,
            z: 0.4143416505669883
        },
        name: 'Left Red Boi'
    },
    {
        center: {
            x: -0.3222973338579349,
            y: 0.06596161685753354,
            z: 0.8365445820575599
        },
        name: 'Left Purply Boi'
    },
    {
        center: {
            x: -0.6273590831450071,
            y: -0.18206047004886605,
            z: 0.24388413314629592
        },
        name: 'Left Greeny Boi'
    },
    {
        center: {
            x: 0.2883269209579431,
            y: 0.08722044627191677,
            z: 0.7779983150718621
        },
        name: 'Right Purply Boi'
    },
    {
        center: {
            x: 0.48372876019580957,
            y: 0.39332362420340683,
            z: 0.41162160717633345
        },
        name: 'Right Red Boi'
    },
    {
        center: {
            x: 0.6834602840506037,
            y: -0.12424551103433168,
            z: 0.32236116294142725
        },
        name: 'Right Greeny Boi'
    },
    {
        center: {
            x: 0.38377346224777353,
            y: 0.1849814743970265,
            z: -0.4028708853391376
        },
        name: 'Right Aquay Tealy Boi'
    }
];

const distance = (a, b) => Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y) + (b.z - a.z) * (b.z - a.z));

const getClosestHemisphere = point => {
    return hemispheres.sort((a, b) => {
        //console.log('a: ' + JSON.stringify(a) + ' - distance: ' + distance(a.center, point));
        //console.log('b: ' + JSON.stringify(b) + ' - distance: ' + distance(b.center, point));
        return distance(a.center, point) - distance(b.center, point);
    })[0];
};


class Model3d extends HTMLElement {
    constructor() {
        super();

        let shadow = this.attachShadow({ mode: 'open' });
        //adds canvas to the component
        const cnv = document.createElement('canvas');
        cnv.setAttribute('id', 'renderCanvas');
        cnv.setAttribute('touch-action', 'none');
        cnv.style = "width: 100%; height: 100%; touch-action: none;";
        shadow.appendChild(cnv);

        let scene = null;
        let BJSloaded = false;

        //sets up the babylon environment for loading object into it
        function setUp3DEnvironment() {
            const engine = new BABYLON.Engine(cnv, true);

            let createScene = function() {
                var scene = new BABYLON.Scene(engine);
                scene.clearColor = new BABYLON.Color3(1, 1, 1);
                scene.createDefaultCameraOrLight(true, true, true);
                return scene;
            }

            scene = createScene();
            //starts the render loop
            engine.runRenderLoop(function() {
                scene.render();
            });
            //manages resizing of container
            window.addEventListener("resize", function() {
                engine.resize();
            });

            window.addEventListener("click", function(evt) {
                // We try to pick an object
                var pickResult = scene.pick(evt.clientX, evt.clientY);
                console.log(pickResult.pickedPoint);
                if (pickResult.pickedPoint) {
                    console.log(getClosestHemisphere(pickResult.pickedPoint));
                    switch (getClosestHemisphere(pickResult.pickedPoint).name) {
                        case 'Left Aquay Tealy Boi':
                            console.log('Left Aquay Tealy Boi');
                            window.location.href = "frontal.html";
                            break;
                        case 'Left Red Boi':
                            console.log('Left Red Boi');
                            window.location.href = "parietal.html";
                            break;
                        case 'Left Purply Boi':
                            console.log('Left Purply Boi');
                            window.location.href = "occipital.html";
                            break;
                        case 'Left Greeny Boi':
                            console.log('Left Greeny Boi');
                            window.location.href = "temporal.html";
                            break;
                        case 'Right Purply Boi':
                            console.log('Right Purply Boi');
                            window.location.href = "occipital.html";
                            break;
                        case 'Right Red Boi':
                            console.log('Right Red Boi');
                            window.location.href = "parietal.html";
                            break;
                        case 'Right Greeny Boi':
                            console.log('Right Greeny Boi');
                            window.location.href = "temporal.html";
                            break;
                        case 'Right Aquay Tealy Boi':
                            console.log('Right Aquay Tealy Boi');
                            window.location.href = "frontal.html";
                            break;
                        default:
                            console.log('');
                    }

                }
            });
        }

        let loadBJS = new Promise((resolve, reject) => {
            try {
                const bjs = document.createElement('script');
                bjs.src = 'https://cdn.babylonjs.com/babylon.js';
                bjs.async = false;
                document.head.appendChild(bjs);
                const bjsloader = document.createElement('script');
                bjsloader.src = 'https://preview.babylonjs.com/loaders/babylonjs.loaders.js';
                bjsloader.async = false;
                document.head.appendChild(bjsloader);
                const pep = document.createElement('script');
                pep.src = 'https://code.jquery.com/pep/0.4.3/pep.js';
                pep.async = false;
                document.head.appendChild(pep);
                bjsloader.addEventListener('load', function() {
                    BJSloaded = true;
                    resolve(true);
                    setUp3DEnvironment();
                });
            } catch (e) {
                reject(e);
            }
        });

        this.getScene = function() {
            return scene;
        };

        /*LOAD 3D MODEL*/
        //method that loads a 3d model into the created scene
        let loadGLTFAux = function(file) {
            scene.meshes.pop();
            const path = decodePath(file);
            var assetsManager = new BABYLON.AssetsManager(scene);

            BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;

            console.log('0: ' + path[0] + ', 1: ' + path[1]);
            const meshTask = assetsManager.addMeshTask('glb task', '', path[0], path[1]);
            meshTask.onSuccess = function(task) {
                console.log('Loaded mesh!');
                task.loadedMeshes[0].position = BABYLON.Vector3.Zero();
                console.log(task.loadedMeshes[0].scaling);
                task.loadedMeshes[0].scaling = new BABYLON.Vector3(2, 2, 2);
                console.log(task.loadedMeshes[0].scaling);
            }
            meshTask.onError = function(task, message, exception) {
                console.log('Got error while trying to load file!');
                console.log(message, exception);
            }

            assetsManager.load();
        };

        this.loadGLTF = function(file) {
            loadBJS.then(function(fulfilled) {
                    loadGLTFAux(file);
                })
                .catch(function(error) {
                    console.log(error.message);
                });
        };

        let changeBGColorAux = function(color) {
            const s = scene;
            s.clearColor = new BABYLON.Color3.FromHexString(color);
        };

        this.changeBGColor = function(color) {
            loadBJS.then(function(fulfilled) {
                    changeBGColorAux(color);
                })
                .catch(function(error) {
                    console.log(error.message);
                });
        };

        //separates path from file name in given resource
        let decodePath = function(path) {
            const fileStart = path.lastIndexOf('/') + 1;
            const fileName = path.substring(fileStart);
            const filePath = path.substring(0, fileStart);
            return [filePath, fileName];
        };
    }

    /*HANDLING ATTRIBUTES*/
    static get observedAttributes() {
        return ['src', 'background-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'src':
                console.log(`loading ${newValue}...`);
                this.loadGLTF(newValue);
                break;
            case 'background-color':
                console.log(`changing color to ${newValue} from ${oldValue}`);
                this.changeBGColor(newValue);
                break;
            default:
                break;
        }
    }

    get modelUrl() {
        return this.getAttribute('model-url');
    }

    get backgroundColor() {
        return this.getAttribute('background-color');
    }

    set modelUrl(newValue) {
        this.setAttribute('model-url', newValue);
    }

    set backgroundColor(newValue) {
        this.setAttribute('background-color', newValue);
    }
}

customElements.define('model-3d', Model3d);