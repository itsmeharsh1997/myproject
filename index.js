var btn = document.getElementById('btn-click');

var wow = document.getElementById('sidebar')

btn.addEventListener("click", function () {

    if (wow.classList.contains('show')) {
        wow.classList.remove('show')
        wow.classList.add('hidden')

    }
    else {
        wow.classList.remove('hidden')
        wow.classList.add('show')

    }

})



function getInputValue() {

    var a = document.getElementById("email").value;
    var b = document.getElementById("password").value;
    console.log(a)
    console.log(b)
}



var login = document.getElementById("but")

login.addEventListener('click', function () {

    if (email.value == 0 && password.value == 0) {

        alert("Please Enter Both");

    }

    else if (email.value == 0) {

        alert("Please Enter Your Email");

    }

    else if (password.value == 0) {

        alert("Please Enter Your Password ");

    }


    else {
        var v = alert("You Are Now Logged In")
        confirm("Click Ok To Proceed")
    }



})
