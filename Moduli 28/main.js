var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti_id");


button.onclick = function (){
    text.innerHTML = input.value;
}

var text1 = "The best school is Digital School";
var result = text1.search("Digital School");
document.getElementById("rex1").innerHTML = result;

var text2 = "The best school is Digital School";
var result2 = text2.search(/Digital School/);
document.getElementById("rex2").innerHTML = result2


var text3 = "The best school is Digital School";
var result3 = text3.replace(/Digital School/,/My school/);
document.getElementById("rex3").innerHTML = result3


var text4 = "abcdef"
var regex = new RegExp('abc')
document.getElementById("rex4").innerHTML = regex.test(text4)

var text5 = "The best school is Digital School"
var regex1 = /school/g;
document.getElementById("rex5").innerHTML = text5.match(regex1)

var text6 = "The best school is Digital School"
var regex2 = /[abc]/g
document.getElementById("rex6").innerHTML = text6.match(regex2);

var text7 = "Digital School is in top 10 best schools"
var regex3 = /[0-9]/g
document.getElementById("rex7").innerHTML = text7.match(regex3);


var text8 = "100 percent"
var regex4 = /\d/g
document.getElementById("rex8").innerHTML = text8.match(regex4);
