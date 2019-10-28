const createModelElement = (url, x = 0, y = 0, z = 0) => {
    let model = document.createElement('xmodel');
    model.setAttribute('src', url);
    model.style.transform = 'translate3d(${x}px, ${y}px, ${z}px)';
    return model;
}

let modelElem = createModelElement('colored-brain.obj', -100, -100, -100);

//sceneElm.appendChild(modelElm);