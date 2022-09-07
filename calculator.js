

const Butonlar = document.getElementsByTagName("button");
const upperScr = document.getElementById("upperScreen");
const lowerScr = document.getElementById("lowerScreen");

// let isClean = true;
let Value = 0;
let Result = 0;
let lastOperand = "";
let isCalculated = false;
// isCalculated değişkeni bir operand tuşuna basıldıktan sonra tekrar basılıp işlem yapılamsını
// engelliyor. operand tuşuna basıldıktan sonra tek çare yeniden bir sayı tuşuna basmak

Butonlar[0].onclick = function () {

    if (lowerScr.innerHTML == "0") {
        upperScr.innerHTML = "";
    }

    lowerScr.innerHTML = "0";
    Result = 0;
    Value = 0;

}

Butonlar[1].onclick = function () {


    let inside = lowerScr.innerHTML;
    // let Length = inside.length;
    lowerScr.innerHTML = inside.slice(0, inside.length - 1);
    // console.log(Length);
    if (lowerScr.innerHTML == "") {
        lowerScr.innerHTML = 0;
    }
    lastOperand = "";
}

Butonlar[3].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "1";

        Result = 0;
        // bu Result = 0; 'ın hikayesi: sayı yazıldıktan sonra bir operand (+ - * /) 
        // tuşuna basıldıktan sonra, ilk yazacağı rakamı lower screendekini silip yazmasını
        // sağlamak için, bir operanddan sonra geldiğini tespit etmek için Result değişkenini
        // kullanıyoruz. Eğer Result undefined olarak gelirse anlıyoruz ki son olarak bir 
        // operand tuşuna basılmış.


    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "1";
        // lowerScr.innerHTML = lowerScr.innerHTML + 1;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım

    }

    lightenButtons();
    isCalculated = true;
}


Butonlar[4].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "2";
        Result = 0;

    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "2";
        // lowerScr.innerHTML = lowerScr.innerHTML + 2;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }

    lightenButtons();
    isCalculated = true;
}

Butonlar[5].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "3";
        Result = 0;

    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "3";
        // lowerScr.innerHTML = lowerScr.innerHTML + 3;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }

    lightenButtons();
    isCalculated = true;
}

Butonlar[7].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "4";
        Result = 0;

    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "4";
        // lowerScr.innerHTML = lowerScr.innerHTML + 4;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }

    lightenButtons();
    isCalculated = true;
}

Butonlar[8].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "5";
        Result = 0;

    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "5";
        // lowerScr.innerHTML = lowerScr.innerHTML + 5;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }
    
    lightenButtons();
    isCalculated = true;
}

Butonlar[9].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "6";
        Result = 0;

    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "6";
        // lowerScr.innerHTML = lowerScr.innerHTML + 6;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }
    
    lightenButtons();
    isCalculated = true;
    
}

Butonlar[11].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "7";
        Result = 0;

    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "7";
        // lowerScr.innerHTML = lowerScr.innerHTML + 7;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }
    lightenButtons();
    isCalculated = true;
    
}

Butonlar[12].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "8";
        Result = 0;

    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "8";
        // lowerScr.innerHTML = lowerScr.innerHTML + 8;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }

    lightenButtons();
    isCalculated = true;
}

Butonlar[13].onclick = function () {


    if (Result == undefined || lowerScr.innerHTML == "0") {
        lowerScr.innerHTML = "9";
        Result = 0;

    } else {
        lowerScr.innerHTML = lowerScr.innerHTML + "9";
        // lowerScr.innerHTML = lowerScr.innerHTML + 9;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }

    lightenButtons();
    isCalculated = true;
}

Butonlar[16].onclick = function () {


    if (lowerScr.innerHTML != "0") {

        lowerScr.innerHTML = lowerScr.innerHTML + "0";
        // lowerScr.innerHTML = lowerScr.innerHTML + 0;
        // bu da çalışıyor quote kullanmadan ama garanti olsun diye quote kullandım
    }

    lightenButtons();
    isCalculated = true;
}


// ÷ butonu
Butonlar[2].onclick = function () {

    if (isCalculated) {
        if (upperScr.innerHTML != "") {
            // yani alan doluysa - Value'nın da değeri var
            Result = CalculateX(Value, Number(lowerScr.innerHTML), lastOperand);
            lastOperand = "÷";
            upperScr.innerHTML = upperScr.innerHTML + lowerScr.innerHTML + "÷";
            lowerScr.innerHTML = Result;
            Value = Result;
            Result = undefined;

            // console.log(Result);
        } else {
            // yani alan boşsa - Value'ya ilk defa değer giriliyor. 
            Value = Number(lowerScr.innerHTML);
            upperScr.innerHTML = lowerScr.innerHTML + "÷";
            lowerScr.innerHTML = "0";
            lastOperand = "÷";

        }
        isCalculated = false;
        hideButtons (Butonlar[6], Butonlar[10], Butonlar[14]);

    }


}


// * butonu
Butonlar[6].onclick = function () {

    if (isCalculated) {
        if (upperScr.innerHTML != "") {
            // yani alan doluysa - Value'nın da değeri var
            Result = CalculateX(Value, Number(lowerScr.innerHTML), lastOperand);
            lastOperand = "*";
            upperScr.innerHTML = upperScr.innerHTML + lowerScr.innerHTML + "*";
            lowerScr.innerHTML = Result;
            Value = Result;
            Result = undefined;

            // console.log(Result);
        } else {
            // yani alan boşsa - Value'ya ilk defa değer giriliyor. 
            Value = Number(lowerScr.innerHTML);
            upperScr.innerHTML = lowerScr.innerHTML + "*";
            lowerScr.innerHTML = "0";
            lastOperand = "*";

        }
        isCalculated = false;
        hideButtons (Butonlar[2], Butonlar[10], Butonlar[14]);
    }

}


// + butonu
Butonlar[10].onclick = function () {

    if (isCalculated) {
        if (upperScr.innerHTML != "") {
            // yani alan doluysa - Value'nın da değeri var
            Result = CalculateX(Value, Number(lowerScr.innerHTML), lastOperand);
            lastOperand = "+";
            upperScr.innerHTML = upperScr.innerHTML + lowerScr.innerHTML + "+";
            lowerScr.innerHTML = Result;
            Value = Result;
            Result = undefined;

            // console.log(Result);
        } else {
            // yani alan boşsa - Value'ya ilk defa değer giriliyor. 
            Value = Number(lowerScr.innerHTML);
            upperScr.innerHTML = lowerScr.innerHTML + "+";
            lowerScr.innerHTML = "0";
            lastOperand = "+";

        }
        isCalculated = false;
        hideButtons (Butonlar[2], Butonlar[6], Butonlar[14]);
    }
}


// - butonu
Butonlar[14].onclick = function () {

    if (isCalculated) {
        if (upperScr.innerHTML != "") {
            // yani alan doluysa - Value'nın da değeri var
            Result = CalculateX(Value, Number(lowerScr.innerHTML), lastOperand);
            lastOperand = "-";
            upperScr.innerHTML = upperScr.innerHTML + lowerScr.innerHTML + "-";
            lowerScr.innerHTML = Result;
            Value = Result;
            Result = undefined;

            // console.log(Result);
        } else {
            // yani alan boşsa - Value'ya ilk defa değer giriliyor. 
            Value = Number(lowerScr.innerHTML);
            upperScr.innerHTML = lowerScr.innerHTML + "-";
            lowerScr.innerHTML = "0";
            lastOperand = "-";

        }
        isCalculated = false;
        hideButtons (Butonlar[2], Butonlar[6], Butonlar[10]);
    }
}


// eşittir (=) butonu
Butonlar[17].onclick = function () {
    Result = CalculateX(Value, Number(lowerScr.innerHTML), lastOperand);
    upperScr.innerHTML = "";
    lowerScr.innerHTML =Result;
}

function CalculateX(A, B, Operand) {
    let resultVal = 0;
    switch (Operand) {
        case "+": resultVal = A + B;
            break;
        case "-": resultVal = A - B;
            break;
        case "*": resultVal = A * B;
            break;
        case "÷": resultVal = A / B;
            break;
    }
    return resultVal;
}

// let abcd= 20;
// let def = 30;
// let operas = "+";
// console.log( CalculateX(abcd,def,operas));
function hideButtons (A, B, C)  {
    A.style.opacity="20%";
    B.style.opacity="20%";
    C.style.opacity="20%";
}

function lightenButtons(){
    Butonlar[2].style.opacity="100%";
    Butonlar[6].style.opacity="100%";
    Butonlar[10].style.opacity="100%";
    Butonlar[14].style.opacity="100%";
}
