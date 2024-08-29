function validate(){
    var name = document.getElementById("name").value;

    var name_regex = /^[A-za-z]+$/g

    var age = document.getElementById("age").value;

    var age_regex = /^[0-9]+$/g

    var city = document.getElementById("city");

    if(!(name.match(name_regex)) || !(age.match(age_regex)) || (city =="")){
        if(!(name.match(name_regex))){
            document.getElementById('name_error').style.visibility = 'visible';
            document.getElementById('name').style.borderColor = 'red';
        }else{
            document.getElementById('name_error').style.visibility = 'hidden';
            document.getElementById('name').style.borderColor = 'black';
        }
        if(!(age.match(age_regex))){
            document.getElementById('age_error').style.visibility = 'visible';
            document.getElementById('age').style.borderColor = 'red';
        }else{
            document.getElementById('age_error').style.visibility = 'hidden';
            document.getElementById('age').style.borderColor = 'black';
       
        }

        if(city == ""){
            document.getElementById('city_error').style.visibility = 'visible';
            document.getElementById('city').style.borderColor = 'red';
        }else{
            document.getElementById('city_error').style.visibility = 'hidden';
            document.getElementById('city').style.borderColor = 'black';
    }
}
else{
    document.getElementById('name_error').style.visibility = 'hidden';
    document.getElementById('name').style.borderColor = 'black';

    document.getElementById('age_error').style.visibility = 'hidden';
    document.getElementById('age').style.borderColor = 'black';

    document.getElementById('city_error').style.visibility = 'hidden';
    document.getElementById('city').style.borderColor = 'black';

    return true;
   }


}