const randomColor = function(){
    const hexColorId = '0123456789ABCDEF'; //Because hex value varies from '0-9' & 'A-F'
    let color = '#';    //Hex color starts from '#'
    for(let i = 0; i < 6; i++){
        color += hexColorId[Math.floor(Math.random() * 16)]  //' * 16 ' refers to 16 letters in hexColorId variable
    }
    return color;
};



let interval;         //declared as a global variable due to scope issue within functions.
let startBgdClrChange = function(){
    interval = setInterval(changeClr, 500);         // 1000 = 1second
    function changeClr(){
        document.body.style.backgroundColor = randomColor();         
    }
};



let stopBgdClrChange = function(){
    clearInterval(interval);           //stop setInterval()
    interval = null;          //Declared interval 'null' for free the memory
};



document.querySelector('#start').addEventListener('click', startBgdClrChange);
document.querySelector('#stop').addEventListener('click', stopBgdClrChange);