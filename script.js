var pass = document.getElementById("password");
var msg = document.getElementById("massage");
var str = document.getElementById("strength");
pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(pass.value.length < 4){
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color ="#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color ="yellow";
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong";
        msg.style.color ="#26d730";
        pass.style.borderColor = "#26d730";
    }
})