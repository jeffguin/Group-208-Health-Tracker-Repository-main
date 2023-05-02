function changedata(parameter){
    if(parameter==0){
        document.getElementById('myorders').style.display = 'block';
    }
    else if(parameter==1){
        document.getElementById('myproducts').style.display = 'block';
    }
    else{
        document.getElementById('mysupplier').style.display = 'block';
    }
}



var table = document.getElementById('shelf');
table.addEventListener("click", tableClickHandler);

function tableClickHandler(event) {
    var readed = event.target.closest('.readed');
    if (readed) {
        toggleText(readed);
    }
}

// Toggle text when clicked.
function toggleText(button) {
    if (button.innerHTML == "READ") {
        button.innerHTML = "NOT READ";
    } else if (button.innerHTML == "NOT READ") {
        button.innerHTML = "READ";
    } else {
        null
    }
}