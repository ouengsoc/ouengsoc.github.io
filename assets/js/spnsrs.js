'use strict';



function toggleGoldContent(SummaryID) {
    if (document.getElementById(SummaryID).style.display === 'none') {
        document.getElementById(SummaryID).style.display = 'block';
        return;
    } else {
        document.getElementById(SummaryID).style.display = 'none';
        return;
    }
}


function toggleOverlay(SummaryID) {
    if (SummaryID==="Summary") {
        document.getElementById("Summary1").style.display = 'none';
        document.getElementById("Summary2").style.display = 'none';        
        document.getElementById("Summary3").style.display = 'none';
        document.getElementById("Summary4").style.display = 'none';
        SummaryID = "Summary1";
    }
    if (document.getElementById('Overlay').style.display === 'none') {
        document.getElementById('Overlay').style.display = 'block';
        document.getElementById('Fade').style.display = 'block';   
        document.getElementById(SummaryID).style.display = 'block';
        return;
    } else {
        document.getElementById(SummaryID).style.display = 'none';
        document.getElementById('Overlay').style.display = 'none';
        document.getElementById('Fade').style.display = 'none';
        return;
    }
}





