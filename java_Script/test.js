
// let x = document.getElementById('btn').addEventListener('click',function(){
    
//     let y = document.getElementById('h1');
//     y.innerHTML = 'button click';

// })

function handleClick(event) {

     let x  = event.target.parentNode.parentNode.childNodes;
   
     let y = x[1].childNodes[3];

    y.innerHTML ='Atiqur Rahman Atik';
     
    
   
   
}