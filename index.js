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

var d = document.getElementById('but')

    d.addEventListener("click", function () 
    {
        alert("You Are Now Logged In");

    })
   
