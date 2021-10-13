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
        const noti = notify();
        if (!noti) {
                num1 = Number(document.getElementById("number1").value);
                num2 = Number(document.getElementById("number2").value);
                var checked2 = document.querySelector('input[name="son"]:checked');
                if (checked2 == null) {
                        document.getElementById("notification").innerHTML = "Mời nhập phép tính.";
                        setTimeout(function () {
                                document.getElementById("notification").style.display = 'none';
                        }, 3000)
                }
                else {
                        var checked = document.querySelector('input[name="son"]:checked').value;
                        console.log(checked)
                        if (checked == 1) {
                                document.getElementById("result").value = Add();
                                return;
                        } else if (checked == 2) {
                                document.getElementById("result").value = Subtract();
                                return;
                        } else if (checked == 3) {
                                document.getElementById("result").value = Multiply();
                                return;
                        } else if (checked == 4) {
                                document.getElementById("result").value = Divide();
                                return;
                        }
                }
        }
        else {
        }
}

function notify() {
        num1 = Number(document.getElementById("number1").value);
        num2 = Number(document.getElementById("number2").value);
        if (isNaN(num1)) {
                document.getElementById("notification").innerHTML = "Giá trị nhập ở ô thứ nhất phải là số.";
                setTimeout(function () {
                        document.getElementById("notification").style.display = 'none';
                }, 3000)
                return false;
        }
        if (isNaN(num2)) {
                document.getElementById("notification").innerHTML = "Giá trị nhập ở ô thứ hai phải là số.";
                setTimeout(function () {
                        document.getElementById("notification").style.display = 'none';
                }, 3000)
                return false;
        }
        if (num1 == '' || num2 == '') {
                document.getElementById("notification").innerHTML = "Không được để trống";
                setTimeout(function () {
                        document.getElementById("notification").style.display = 'none';
                }, 3000)
                return false;
        }
}