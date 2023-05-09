
const doc={
    weightInput : document.querySelector("#weight"),
    heigthInput : document.querySelector("#height"),
    indexInput : document.querySelector("#index"),
    calcButton : document.querySelector("#calcButton")
}

const state ={
index:0
};

window.addEventListener('load',()=>{
    init();
});

function init(){
    doc.calcButton.addEventListener('click',()=>{
        startCalc();
    });
};

function startCalc(){
    let weight = doc.weightInput.value;
    let height = doc.heigthInput.value;
    state.index = calcIndex(weight, height);
    doc.indexInput.value = state.index;
}

function calcIndex(weight,height) {
    return weight/Math.pow(height,2);
}