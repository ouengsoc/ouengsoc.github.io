function printEmail() {
    var FirstName=document.getElementById('FirstName').value;
    var LastName=document.getElementById('LastName').value;
    var College=document.getElementById('College').value;
 document.getElementById('Email').value=FirstName+"."+LastName+"@"+College+".ox.ac.uk";
}

