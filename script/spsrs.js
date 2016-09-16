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


function toggleOverlay(ID) {
    if (document.getElementById('Overlay').style.display === 'none') {
        document.getElementById('Overlay').style.display = 'block';
        document.getElementById('Fade').style.display = 'block';
        return;
    } else {
        document.getElementById('Overlay').style.display = 'none';      document.getElementById('Fade').style.display = 'none';
        return;
    }
}





