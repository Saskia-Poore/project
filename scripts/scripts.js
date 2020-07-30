function checkIt() {
    var error = 0;

    if (myform.myname.value == "") {
        alert("Please enter a name");
        document.getElementById("myname").style.background = "red";
        error = 1
    }

    if (myform.myemail.value == "") {
        alert("Please enter an email address");
        document.getElementById("myemail").style.background = "red";
        error = 1
    }

    if (myform.myphonenum.value == "") {
        alert("Please enter a phone number");
        document.getElementById("myphonenum").style.background = "red";
        error = 1
    }

    if (myform.myaddress.value == "") {
        alert("Please enter an address");
        document.getElementById("myaddress").style.background = "red";
        error = 1
    }

    if (error == 0) {
        alert("The form will be sent");
        myform.submit()
    }

}

function resetcolor() {
    document.getElementById("myname").style.background = "white";
    document.getElementById("myaddress").style.background = "white";
}
        