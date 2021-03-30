function add() {


    var x = parseInt(document.getElementById("varX").value);
    var y = parseInt(document.getElementById("varY").value);


    var result1 = x + y;


    document.getElementById("varResult").value = result1;

    return false;
}



function subtract() {


    var x = parseInt(document.getElementById("varX").value);
    var y = parseInt(document.getElementById("varY").value);


    var result2 = x - y;


    document.getElementById("varResult").value = result2;

    return false;
}


function multiply() {


    var x = parseInt(document.getElementById("varX").value);
    var y = parseInt(document.getElementById("varY").value);


    var result3 = x * y;


    document.getElementById("varResult").value = result3;

    return false;
}


function divide() {


    var x = parseInt(document.getElementById("varX").value);
    var y = parseInt(document.getElementById("varY").value);


    var result4 = x / y;


    document.getElementById("varResult").value = result4;

    return false;
}


function clear() {


    var result4 = "";


    document.getElementById("varResult").value = result4;

    return false;
}