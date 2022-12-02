function validate(){
    if(document.myform.id.value==""){
        document.getElementById("idErr").innerHTML = "Please enter your Employee ID";
        return false;
    }
    
    if(document.myform.firstname.value==""){
        document.getElementById("firstnameErr").innerHTML = "Please enter your first Name";
        return false;
    }

    if(document.myform.lastname.value==""){
        document.getElementById("lastnameErr").innerHTML = "Please enter your last name";
        return false;
    }

    if(document.myform.address.value==""){
        document.getElementById("addressErr").innerHTML = "Please enter your address";
        return false;
    }

    if(document.myform.department.value==""){
        document.getElementById("departmentErr").innerHTML = "Please enter your department";
        return false;
    }

    if(document.myform.position.value==""){
        document.getElementById("positionErr").innerHTML = "Please enter your position";
        return false;
    }

    if(document.myform.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email address";
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(document.myform.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }

    if(document.myform.number.value==""){
        document.getElementById("numberErr").innerHTML = "Please enter your contact number";
        return false;
    }

    if(document.myform.salary.value==""){
        document.getElementById("salaryErr").innerHTML = "Please enter your salary";
        return false;
    }

}