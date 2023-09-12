(function () {
    "use strict";
    $(window).on('orientationchange', function (e) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            $("#divform").css("margin-left", "10%");
            $("#divform").css("margin-right", "10%");
            $("#header11").css("padding-right","10%");
            $("#header11").css("padding-left","10%");
    
        } else {
            $("#divform").css("margin-left", "20%");
            $("#divform").css("margin-right", "20%");
            $("#header11").css("padding-right","23%");
            $("#header11").css("padding-left","23%");
        }
    });
})();

function loadFile(event) {
    if (event) {
        var image = $("#output")[0];
        image.src = URL.createObjectURL(event.target.files[0]);
    }
}

async function whatClass() {
    const input = document.getElementById("imageInput");
    const file = input.files[0];
    const formData = new FormData();
    formData.append("image", file);
    let response = await fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        body: formData
    })
    var myJSON_Text = await response.text();
    let is_swear_arr_res = myJSON_Text.split(',');
    return is_swear_arr_res;
}

async function sendImage() {
    my_arr = ["airplane", "car", "bird", "cat", "deer", "dog", "frog", "horse", "ship", "truck"]
    my_arr_cars = ["audi", "BMW", "Chevrolet", "Dodge", "Ford", "Honda", "Hyundai", "Jeep", "Nissan", "Toyota"]
    let is_swear_arr_res = await whatClass();
    console.log(is_swear_arr_res);
    const res = $("#result");
    var cartype = "";
    if (is_swear_arr_res[0] == 1) {
        cartype = my_arr_cars[is_swear_arr_res[1]];
        res.text("in the picture we see a " + my_arr[is_swear_arr_res[0]] + " \n\nIt looks like a car, the car type is " + cartype);
    }
    else {
        res.text("in the picture we see a " + my_arr[is_swear_arr_res[0]]);
    }
}
