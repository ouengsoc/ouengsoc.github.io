'use strict';

var flag_FirstName = 0;
var flag_LastName = 0;
var flag_checkbox = 1;

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
            return;
        } else {
            document.getElementById(Error).value = 'error - invalid symbol [?]';
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
    var FullEmail = FirstName + '.' + LastName + '@' + College + '.ox.ac.uk';
    document.getElementById('Email').value = FullEmail;
    document.getElementById('nextPage').value = '/sub/thanks.html#email=' + FullEmail;
}


function printCollege() {
    var FirstName = document.getElementById('FirstName').value;
    var LastName = document.getElementById('LastName').value;
    var College = document.getElementById('College').value;
    if (FirstName === '') {
        FirstName = 'First';
    }
    if (LastName === '') {
        LastName = 'Last';
    }
    var FullEmail = FirstName + '.' + LastName + '@' + College + '.ox.ac.uk';
    document.getElementById('Email').value = FullEmail;
    document.getElementById('nextPage').value = '/sub/thanks.html#email=' + FullEmail;    
}


function toggleAlert(Identity) {
    if (document.getElementById(Identity).style.display === 'none') {
        document.getElementById(Identity).style.display = 'block';
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
    } else {
        document.getElementById('Error_Submit_Message').innerHTML = '';
    }
}



function validateForm() {
    //check if flags are okay
}









