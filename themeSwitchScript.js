function toggleMode(){
            if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
                document.documentElement.setAttribute('data-bs-theme','light')
                var text = document.getElementById("btnSwitch");
                text.textContent = "Dark Mode";
                localStorage.setItem("mode", "Light");
                // var img = document.getElementById("image");
                // img.src = "Images/Dark_Mode_Moon_Vector.svg";

            }
            else {
                document.documentElement.setAttribute('data-bs-theme','dark')
                var text = document.getElementById("btnSwitch");
                text.textContent = "Light Mode";
                localStorage.setItem("mode", "Dark");
                // var img = document.getElementById("image");
                // img.src = "Images/Light_Mode_Sun_Vector.svg";
            }
    }
    

function loadMode(){
    var mode = localStorage.getItem("mode");
    if (mode == "Dark"){
        document.documentElement.setAttribute('data-bs-theme','dark')
        var text = document.getElementById("btnSwitch");
        text.textContent = "Light Mode";
    }
    else{
        document.documentElement.setAttribute('data-bs-theme','light')
        var text = document.getElementById("btnSwitch");
        text.textContent = "Dark Mode";
    }
}
