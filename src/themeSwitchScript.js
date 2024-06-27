// Runs when Light/Dark Mode button is clicked (Toggled)
function toggleMode(){
    const checkbox = document.querySelector('.switch-3 .checkbox');
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') { // If current theme is Dark, switch to Light
        document.documentElement.setAttribute('data-bs-theme','light')
        var text = document.getElementById("btnSwitch");
        
        collapseMenu(); // Collapse Burger Menu if open

        localStorage.setItem("mode", "Light"); // Store mode in local storage

        // Changes the Bottom Waves to the Light Mode version
        const bottomWavesImage = document.getElementById("bottomWaves"); 
        bottomWavesImage.setAttribute('class', 'spacer layered-waves-light')

        checkbox.checked = true;
    }
    else { 
        document.documentElement.setAttribute('data-bs-theme','dark') // If current theme is Light, switch to Dark
        var text = document.getElementById("btnSwitch");

        collapseMenu(); // Collapse Burger Menu if open

        localStorage.setItem("mode", "Dark"); // Store mode in local storage

        // Changes the Bottom Waves to the Dark Mode version
        const bottomWavesImage = document.getElementById("bottomWaves");
        bottomWavesImage.setAttribute('class', 'spacer layered-waves-dark')
        
        checkbox.checked = false;
    }
}

// Loads the mode from local storage
function loadMode(){
    const checkbox = document.querySelector('.switch-3 .checkbox');
    var mode = localStorage.getItem("mode"); // Gets the mode from local storage
    if (mode == "Light"){
        document.documentElement.setAttribute('data-bs-theme','light') // If mode is Light, set theme to Light
        var text = document.getElementById("btnSwitch");

        // Changes the Bottom Waves to the Light Mode version
        const bottomWavesImage = document.getElementById("bottomWaves"); 
        bottomWavesImage.setAttribute('class', 'spacer layered-waves-light')

        checkbox.checked = true;
    }
    else{
        document.documentElement.setAttribute('data-bs-theme','dark') // If mode is Dark, set theme to Dark
        var text = document.getElementById("btnSwitch");

        // Changes the Bottom Waves to the Dark Mode version
        const bottomWavesImage = document.getElementById("bottomWaves"); 
        bottomWavesImage.setAttribute('class', 'spacer layered-waves-dark')

        checkbox.checked = false;
    }
}

// Collapses the Burger Menu
function collapseMenu(){
    if (document.documentElement.clientWidth < 992){
        const navbar = document.getElementById("navbarNav");
        navbar.setAttribute('class', 'navbar-collapse collapse')
    }
}
