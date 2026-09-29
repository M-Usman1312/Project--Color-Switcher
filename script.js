const button = document.querySelectorAll(".button");
const body = document.querySelector('body');

button.forEach((button) => {
    // console.log(button);
    button.addEventListener('click',(e) => {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'Gray') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'Blue') { 
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'White') {
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'Yellow'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'Purple'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'Black'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id === 'Green'){
            body.style.backgroundColor = e.target.id;
        }
        
    })
    
})