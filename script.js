function changeBackgroundColor() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
}

function changeTextColor() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.color = color;
}

function changeSpecialParagraphColor() {
    const color = document.getElementById('colorPicker').value;
    const specialParagraph = document.getElementById('special');
    specialParagraph.style.backgroundColor = color;
}

document.querySelector('input[value="Change background color"]').onclick = changeBackgroundColor;
document.querySelector('input[value="Change text color"]').onclick = changeTextColor;
document.querySelector('input[value="Change special paragrah\'s background color"]').onclick = changeSpecialParagraphColor;
