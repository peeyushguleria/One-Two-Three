const buttonOne = document.querySelector(".js-one-button");
function onOffOneButton() {
    if (buttonOne.classList.contains("toggle-button"))/* this if statement checks that is toggle-button class is present or not */ {
        buttonOne.classList.remove("toggle-button");
    }else{
        buttonOne.classList.add("toggle-button");
    }
}
const buttonTwo = document.querySelector('.js-two-button');
function onOffTwoButton(){
    if(buttonTwo.classList.contains('toggle-button')){
        buttonTwo.classList.remove('toggle-button');
    }else{
        buttonTwo.classList.add('toggle-button');
    }
}
const buttonThree = document.querySelector(".js-three-button");
function onOffThreeButton() {
    if (buttonThree.classList.contains("toggle-button")) {
        buttonThree.classList.remove("toggle-button");
    }else{
        buttonThree.classList.add("toggle-button");
    }
}
      