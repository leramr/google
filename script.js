const changeImgBtn = document.getElementById('change-logo-btn');

changeImgBtn.addEventListener('click', changeImg);

function changeImg() {
    let firstLogo = document.querySelector('.main-logo');
    if (firstLogo.src.includes('google-logo.png')) {
        firstLogo.src = './img/oddity-logo.png';
        firstLogo.style.marginBottom = "25px"

    } else {
        firstLogo.src = './img/google-logo.png';
    }
}


const mainInput = document.querySelector('.main-form-input')
mainInput.addEventListener('input', inputClick)
function inputClick (e){
    e.currentTarget.style.fontSize = "25px"
    console.log (e.target.value)
}