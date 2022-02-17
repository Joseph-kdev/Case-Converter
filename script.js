let textEntered = document.getElementById("textInput");
document.getElementById("upper-case").addEventListener("click",function () {
    textEntered.value = textEntered.value.toUpperCase();
})
document.getElementById("lower-case").addEventListener("click",function () {
    textEntered.value = textEntered.value.toLowerCase();
})
document.getElementById("proper-case").addEventListener("click",function () {
    let textArray = textEntered.value.toLowerCase().split(' ');
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
    }
    textEntered.value = textArray.join(' ');
})
document.getElementById("sentence-case").addEventListener("click", function () {
    let textArray = textEntered.value.toLowerCase().split('. ');
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
    }
    textEntered.value = textArray.join('. ');
})
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click",function () {
    download("text.txt",textEntered.value);
})