'use strict';

var flag_FirstName = 0;
var flag_LastName = 0;
var flag_checkbox = 1;
var button_check = 0;

function printEmail(Identity) {
    var Error = 'error' + Identity;
    var Value = document.getElementById(Identity).value;
    var pattern = new RegExp(/[!$%\^&*@()_+|~=`{}\[\]:";'<>?,.\/]/); //unacceptable chars
    // check if input is valid
    if (pattern.test(Value) || (Value === '')) { // if unacceptable or no value
        if (Identity === 'FirstName') {
            flag_FirstName = 0; // set flag for invalid input
        } else if (Identity === 'LastName') {
            flag_LastName = 0;
        }
        document.getElementById(Error).style.visibility = 'visible'; // display error message
        if (Value === '') {
            document.getElementById(Error).value = 'error - no value entered [?]';
            document.getElementById('Send').disabled = true;
            return;
        } else {
            document.getElementById(Error).value = 'error - invalid symbol [?]';
            document.getElementById('Send').disabled = true;
            return;
        }
    }
    // if function is not returned, move valid output
    document.getElementById(Error).style.visibility = 'hidden'; //good input
    var FirstName = document.getElementById('FirstName').value;
    var LastName = document.getElementById('LastName').value;
    var College = document.getElementById('College').value;
    // set flag for valid input and output
    if (Identity === 'FirstName') {
        flag_FirstName = 1; // set flag for invalid input
    } else if (Identity === 'LastName') {
        flag_LastName = 1;
    }
    if (FirstName === '') {
        FirstName = 'First';
    }
    if (LastName === '') {
        LastName = 'Last';
    }
    if (flag_checkbox+flag_FirstName+flag_LastName === 3) {
        document.getElementById('Send').disabled = false;
    }
    var FullEmail = FirstName + '.' + LastName + '@' + College + '.ox.ac.uk';
    document.getElementById('Email').value = FullEmail;
    document.getElementById('nextPage').value = '/subpages/thanks.html#email=' + FullEmail;
}


function printCollege() {
    var FirstName = document.getElementById('FirstName').value;
    var LastName = document.getElementById('LastName').value;
    var College = document.getElementById('College').value;
    if (FirstName === '') {
        FirstName = 'First';
        document.getElementById('Send').disabled = true;
        flag_FirstName = 0;
    }
    if (LastName === '') {
        LastName = 'Last';
        document.getElementById('Send').disabled = true;
        flag_LastName = 0;
    }
    if (flag_checkbox+flag_FirstName+flag_LastName === 3) {
        document.getElementById('Send').disabled = false;
    }
    var FullEmail = FirstName + '.' + LastName + '@' + College + '.ox.ac.uk';
    document.getElementById('Email').value = FullEmail;
    document.getElementById('nextPage').value = '/subpages/thanks.html#email=' + FullEmail;  
}


function toggleAlert(Identity) {
    if (document.getElementById(Identity).style.display === 'none') {
        document.getElementById(Identity).style.display = 'block';
        document.getElementById('Send').disabled = true;
        return;
    } else {
        document.getElementById(Identity).style.display = 'none';
        return;
    }
}


function toggleCheckbox() {
    var check_Membership = document.getElementById('RegisterMembership').checked;
    var check_Mailing = document.getElementById('RegisterMailing').checked;
    if ((check_Mailing === false) && (check_Membership === false)) {
        document.getElementById('Error_Submit_Message').innerHTML = 'error - missing value [?]';
        flag_checkbox = 0;
        document.getElementById('Send').disabled = true;
    } else {
        flag_checkbox = 1;
        document.getElementById('Error_Submit_Message').innerHTML = '';
        if (flag_checkbox+flag_FirstName+flag_LastName===3) {
            document.getElementById('Send').disabled = true;
        }
    }
}



function validateForm() {
    //check if flags are okay
}









