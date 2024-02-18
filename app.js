// function buttonClick(event){

//     console.log(event.target.parentNode.parentNode.parentNode.childNodes);
// }

//another option



// const allClass = document.getElementsByClassName('button');
// // console.log(allClass);

// let count = 0;
// for(let btns of allClass){
    
//     btns.addEventListener('click',function(){

//     //    let parchesCount = document.getElementById('purchesCount');

//     //    let parNum = parchesCount.innerHTML;

//     //    let parCovertNumber = parseInt(parNum);

//     //   let sum = parCovertNumber + 1;
      
//     //   parchesCount.innerHTML = sum;


//     // another way 
//         count = count + 1;
//         let parchesCount = document.getElementById('purchesCount');

//          parchesCount.innerHTML = count;



//     })
// }



//anothe option main function


let addCard = document.getElementsByClassName('button');


let count =0;
for(let card of addCard){

    card.addEventListener('click',function(event){
     count = count +1;
     
    //  let x = document.getElementById('purchesCount');
    //  x.innerHTML= count;

    setInnerText('purchesCount',count);


    //ata ekta option & arekta niche korlam
   const vanu = event.target.parentNode.childNodes[1].innerHTML;


   
    let price=  event.target.parentNode.childNodes[3].childNodes[1].innerHTML;

//     setInnerText('price',price);    
//     setInnerText('venu',vanu);


let priceVeno = document.getElementById('priceVeno');

let li = document.createElement('li');

let p = document.createElement('h2');
p.innerText = vanu;

let p2 = document.createElement('h2');
p2.innerText = price;



li.appendChild(p);
li.appendChild(p2);



//calculate 900 Budge
let Budget = document.getElementById('Budget').innerText;
let BudgetCovertInt = parseInt(Budget);

//validation
if(BudgetCovertInt - parseInt(price) <=0 ){
    alert('please reachge');
    return;
}

document.getElementById('Budget').innerText = BudgetCovertInt - parseInt(price);


priceVeno.appendChild(li);



//total cost calculation

// let totaCost = document.getElementById('totalCost').innerHTML;

// let totalCost = parseInt(totaCost);


// let sum = totalCost + parseInt(price);





// anothe way total cost calcultaion

TotalCost('totalCost',parseInt(price));




//Grand total calculation
// let finalTotal = document.getElementById('GrandTotal').innerHTML;

// let GranTotal = parseInt(finalTotal); 


// let sums = GranTotal + parseInt(price);




//anothe way to calculate Grandtotal

GrandTotal ('GrandTotal',parseInt(price));



//call setinnertext function 
// setInnerText('TotalCost',sum);
// setInnerText('GrandTotal',sum);

    })

}



//setInnertext funtion
function setInnerText( ids,value){
    let parches = document.getElementById(ids);

    parches.innerHTML = value;
}




//total cost calculation

function TotalCost (id,value){

let TotalCost = document.getElementById(id).innerText;

let  convertTotalCost = parseInt(TotalCost);

 let sum = convertTotalCost + parseInt(value);

//  console.log(sum);
 setInnerText('totalCost',sum);
 
}



//GrandTotal Function
function GrandTotal(catagory){

   
    let TotalCost =document.getElementById('totalCost').innerText;
  
      let convertTotalCost = parseInt(TotalCost);

      if(catagory =='bus'){

          setInnerText('GrandTotal',convertTotalCost + 100);
      }

      else if(catagory =='train'){
        setInnerText('GrandTotal',convertTotalCost - 200);

      }
      else if(catagory =='fight'){
        setInnerText('GrandTotal',convertTotalCost + 500);
      }
      else{
        setInnerText('GrandTotal',convertTotalCost);
      }

   
    // console.log(sum);

}

