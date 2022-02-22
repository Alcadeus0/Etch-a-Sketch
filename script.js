const container = document.querySelector('.container');

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
        square.addEventListener('mouseover', paint);
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


const colours = document.querySelector('#rgb');
colours.addEventListener('click', colorEtch);

const clearGrid = document.querySelector('#clear');
clearGrid.addEventListener('click', ()=>{
    document.querySelectorAll('.grid').forEach((grid)=>{
        grid.style.background = 'beige';
    });
});

const black = document.querySelector('#black');
black.addEventListener('click', ()=>{
    document.querySelectorAll('.grid').forEach((grid)=>{
        grid.addEventListener('mouseenter', paint)
    });
});

/*const greyScale = document.querySelector('#grey');
greyScale.addEventListener('click', ()=>{
    document.querySelectorAll('.grid').forEach((grid)=>{
        grid.addEventListener('mouseover', ()=>{
            if (grid.style.background === 'hsl(0, 0%' + 90 + '%)'){
                grid.style.background = 'hsl(0, 0%' + 80 + '%)';
            }
        })
    });
})*/


const resizeGrid = document.querySelector('#resize');
resizeGrid.addEventListener('click', ()=>{
    let input = prompt('Enter number to resize grid', 'Make sure number is less than 64');
    container.innerHTML = '';
    grid(input);
});

function paint(e){
    e.target.style.background = 'black';
}


grid(10);