window.onload = function () {
    let select = document.querySelector ('#color');
    select.addEventListener ('change', function (){
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
        localStorage.setItem('5.4 - backgroudColor', selected.value);
})
    let selectFont = document.querySelector ('#fontes');
    selectFont.addEventListener ('change', function (){
        let selectedFont = selectFont.selectedOptions[0];
        document.body.style.fontFamily = selectedFont.value;
})

    let inputFontSize = document.querySelector ('input[name="font-size"]');
    inputFontSize.addEventListener ('change', function () {
        document.querySelector('p').style.fontSize = `${inputFontSize.value}px`;
        localStorage.setItem('5.4 - fontSize', `${inputFontSize.value}px`);
})
    let saveBackgroundColor = localStorage.getItem ('5.4 - backgroudColor');
    document.body.style.backgroundColor = saveBackgroundColor;

    let saveFontSize = localStorage.getItem ('5.4 - fontSize');
    document.querySelector('p').style.fontSize = saveFontSize;

}