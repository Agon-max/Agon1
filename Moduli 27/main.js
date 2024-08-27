for(var i =0;i < 5;i++){
    console.log("Vlera i-s eshte " + i);
}

console.log("---------------------------");

var persona = {emri: "Agon", mbiemri:"Ramadani",mosha: 18};

var text = '';

var z;

for(z in persona){
  text += persona[z];
}

console.log(text);

console.log("---------------------------");


var emrat = ['Altina','Andi','Anila'];

var y;

for(y of emrat){
    console.log(y);
}


console.log("---------------------------");

var f = 0;

do{
    f = f+1;
    console.log(f);
}while(f<5);



var emra = ['Agon' ,'Agon' ,'Agon'];

var s;
for(s of emra){
    console.log(s);
}    