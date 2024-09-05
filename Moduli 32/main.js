function search() {
    var input, filter, ul, li, a, i, txtValue;

    // Get input and convert it to uppercase
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    // Get the unordered list and its items
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");

    // Loop through all list items and hide those that don't match the filter
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText; // Use textContent or innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}

function happen(){

    var ini = document.getElementById("myInput");
    
    ini.style.backgroundColor = "red";

    if(ini.value == "Agon is the best"){
        alert("Hello Agon!!");
    }
}