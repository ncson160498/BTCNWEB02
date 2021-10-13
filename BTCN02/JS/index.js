


var num1
var num2

function Multiply() {
        return num1 * num2;
}
function Divide() {
        return num1 / num2;
}
function Add() {
        return num1 + num2;
}
function Subtract() {
        return num1 - num2;
}

function Tinh() {
        num1 = Number(document.getElementById("number1").value);
        num2 = Number(document.getElementById("number2").value);
        
        if (document.getElementById("Cong").checked) {
                document.getElementById("result").value  = Add();
                return;
        } else if (document.getElementById("Tru").checked) {
                document.getElementById("result").value  = Subtract();
                return;
        } else if (document.getElementById("Nhan").checked) {
                document.getElementById("result").value  = Multiply();
                return;
        }else if (document.getElementById("Chia").checked) {
                document.getElementById("result").value  = Divide();
                return;
        }
        else{
                document.getElementById("notification").innerHTML = "Mời nhập phép tính.";
                alert("Mời nhập phép tính.");
                return;
        }
        
}
function notify() {
        num1 = Number(document.getElementById("number1").value);
        num2 = Number(document.getElementById("number2").value);
        if (isNaN(num1)) {
                document.getElementById("notification").innerHTML = "Giá trị nhập ở ô thứ nhất phải là số.";
                return;
        }
        if (isNaN(num2)) {
                document.getElementById("notification").innerHTML = "Giá trị nhập ở ô thứ hai phải là số.";
                return;
        }    
}