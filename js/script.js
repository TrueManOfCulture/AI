function HoraEData(){
    const now = new Date();

    const currentDateTime = now.toLocaleString();

    document.getElementById('timeanddate').innerHTML = currentDateTime;
}

window.onload = HoraEData;