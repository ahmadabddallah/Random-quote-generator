
var obj1 = {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
}

var obj2 = {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
}

var obj3 = {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
}

var obj4 = {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
}

var obj5 = {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
}

var obj6 = {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
}

var arr1=[obj1,obj2,obj3,obj4,obj5,obj6];


var counter=0;

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};

insert_quote=document.getElementById('quote');

var prev=0,next=0;
function get_quote(){

    
//    console.log(next,prev);


    //to make sure it return another random number
    while(next==prev){
        next=getRandomArbitrary(0,arr1.length);
    }
    
    // console.log(next,prev);

    var value=arr1[next];


    insert_quote.innerHTML=`<p class="fs-3">${value.quote}</p> </br> <p class="fs-4"> ${value.author} </p>`;

    prev=next;
}