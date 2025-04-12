



//Mobile Number
const mobileNumberInput = document.getElementById('mobileNumber');





//Submit
function submitForm() {
    document.getElementById("contactAlert").classList.remove('d-none'); //remove the hiding class of  the alert
    document.getElementById("contactAlert").classList.add('d-block'); //show the alert
    document.getElementById ('contact-form').reset();
    return false;
    }



//Cancel
function cancelForm (){
    document.getElementById ('contact-form').reset();
}


