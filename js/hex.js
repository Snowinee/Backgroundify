const button = document.getElementById("button");
const color = document.getElementById("color");
const nav = document.getElementById("nav");
const footer = document.getElementById("footer");


// functions

function updateColor(colorValue) {
    color.innerHTML = "colorValue";
}

function colorValueGenerator(){
    let hexValue= "#";
    let hexValueList = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    while (hexValue.length < 7) {
        let ranNum = Math.floor(Math.random() * hexValueList.length);
        hexValue += hexValueList[ranNum];
    }
    return hexValue;
}

function updateContent(value) {
    color.innerHTML = value;
    document.body.style.backgroundColor = value;
    nav.style.backgroundColor = value;
    button.style.backgroundColor = value;
    footer.style.backgroundColor = value;
}

button.onclick = function(){
    let value = colorValueGenerator();
    updateContent(value);
}
