if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    })

}


function vypocetOhmovaZakona() {
    const napeti = parseFloat(document.getElementById("napeti").value);
    const proud = parseFloat(document.getElementById("proud").value);
    const odpor = parseFloat(document.getElementById("odpor").value);
    const chybaDiv = document.getElementById("chyba");

    

  
    if (!isNaN(napeti) && !isNaN(proud) && isNaN(odpor)) {
        if (proud === 0) {
            chybaDiv.innerText = "nelze dělit nulou.";
        } else {
            document.getElementById("odpor").value = (napeti / proud).toFixed(2);
        }
    }
    
    else if (!isNaN(napeti) && !isNaN(odpor) && isNaN(proud)) {
        if (odpor === 0) {
            chybaDiv.innerText = "nelze dělit nulou";
        } else {
            document.getElementById("proud").value = (napeti / odpor).toFixed(2);
        }
    }
    
    else if (!isNaN(proud) && !isNaN(odpor) && isNaN(napeti)) {
        document.getElementById("napeti").value = (proud * odpor).toFixed(2);
    }
    
    else if (isNaN(napeti) || isNaN(proud) || isNaN(odpor)) {
        chybaDiv.innerText = "Vyplň alespoň dvě hodnoty.";
    }
}





