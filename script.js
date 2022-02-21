const container = document.querySelector('.container')
grid(16)


function randomBgColor(){
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}


function grid(number){
    container.style['grid-template-columns'] = 'repeat(' + number + ', 1fr)'; 
    for (let x = 0; x < (number*number); x++){
        let square = document.createElement('div');
        square.classList.add('grid');
        container.append(square);
    colorEtch();
    };
}

function colorEtch(){
    document.querySelectorAll('.grid').forEach((grid) => {
        let rbg  = randomBgColor(); 
        grid.addEventListener('mouseenter', ()=>{
        grid.style.background = rbg;
    });
        grid.addEventListener('mouseleave', ()=>{
            grid.removeEventListener('mouseenter', ()=>{
                grid.style.background = rbg;});
            });
        });
    }

function empty(){
    document.querySelectorAll('.grid').forEach((grid) => {
        grid.style.background = 'beige';
    });
}


const clearGrid = document.querySelector('#clear');
clearGrid.addEventListener('click', empty);

const resizeGrid = document.querySelector('#resize');
resizeGrid.addEventListener('click', ()=>{
    let input = prompt('Enter number to resize grid', 'Make sure number is less than 64');
    container.innerHTML = '';
    grid(input);
});