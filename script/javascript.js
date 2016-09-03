"use strict";

function printEmail(Identity) {
    var Error = "error" + Identity;
    var Value = document.getElementById(Identity).value;
    var pattern = new RegExp(/[!$%^& *()_+|~=`{}\[\]:";'<>?,.\/]/); //unacceptable chars
    if (pattern.test(Value) || (Value === "")) {
        document.getElementById(Error).style.visibility = 'visible';
        if (Value === "") {
            document.getElementById(Error).value = "error - no value entered [?]";
            return;
        } else {
            document.getElementById(Error).value = "error - invalid symbol [?]";
            return;
        }
    }
    document.getElementById(Error).style.visibility = 'hidden'; //good input
    var FirstName = document.getElementById('FirstName').value;
    var LastName = document.getElementById('LastName').value;
    var College = document.getElementById('College').value;
    if (FirstName == "") {
        FirstName = "First";
    }
    if (LastName == "") {
        LastName = "Last";
    }
    document.getElementById('Email').value = FirstName + "." + LastName + "@" + College + ".ox.ac.uk";
}


function printCollege() {
    var FirstName = document.getElementById('FirstName').value;
    var LastName = document.getElementById('LastName').value;
    var College = document.getElementById('College').value;
    document.getElementById('Email').value = FirstName + "." + LastName + "@" + College + ".ox.ac.uk";
    
}


function toggleAlert(Identity) {
    if (document.getElementById(Identity).style.display === "none") {
        document.getElementById(Identity).style.display = "block";
        return;
    } else {
        document.getElementById(Identity).style.display = "none";
        return;
    }
}