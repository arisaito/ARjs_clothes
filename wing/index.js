var renderer = new THREE.WebGLRenderer();
var composer = new THREE.EffectComposer(renderer);
var renderPass = new THREE.RenderPass(scene, camera);
let effectBloom = new THREE.BloomPass(1.0, 25, 2.0, 512);

composer.addPass(renderPass);
composer.addPass(effecBloom);

var toScreen = new THREE.ShaderPass(THREE.CopyShader);
toScreen.renderToScreen = true;
composer.addPass(toScreen);

function render() {
  requestAnimationFrame(render);
  composer.render();
}
