import './style.scss';
let answer1 = document.querySelector('.block1 #s1');
let answer2 = document.querySelector('.block2 #s1');
let answer3 = document.querySelector('.block3 #s1');
let answer4 = document.querySelector('.block4 #s1');
let answer5 = document.querySelector('.block5 #s1');
let answer7 = document.querySelector('.block7 #s1');
let answer8 = document.querySelector('.block8 #s1');
let answer9 = document.querySelector('.block9 #s1');
let answer10 = document.querySelector('.block10 #s1');
let answer11 = document.querySelector('.block11 #s1');
let answer12 = document.querySelector('.block12 #s1');
let answer13 = document.querySelector('.block13 #s1');
let answer14 = document.querySelector('.block14 #s1');
let answer15 = document.querySelector('.block15 #s1');
let stringInput1 = document.querySelector('#input1');
let stringInput2 = document.querySelector('#input2');
let stringInput3 = document.querySelector('#input3');
let stringInput4 = document.querySelector('#input4');
let stringInput5 = document.querySelector('#input5');
let stringInput6 = document.querySelector('#input6');
let stringInput7 = document.querySelector('#input7');
let stringInput8 = document.querySelector('#input8');
const buttonALL = document.querySelectorAll('button');
const inputALL = document.querySelectorAll('input');
const H1ALL = document.body.querySelectorAll('h1');
let car = {
    predictor: "Proton Edar Sdr Holding",
    model: "PROTON PERDANA",
    yearOfIssue: 2008,
    speed: 260,
};
answer1 = document.querySelector('.block1 #s1');
function n1() {
    let strcar = "ответ : ";
    for (let i in car) {
        strcar += i + " : " + car[i] + " // ";
    }
    answer1.innerText = strcar;
}
function n2() {
    let distance = parseInt(prompt('введите расстояние которое нужно преодолеть'));
    let watch = 0;
    let wastedTime = 0;
    while (distance >= 0) {
        wastedTime += 1;
        if (watch > 4) {
            watch = 0;
        }
        else {
            watch += 1;
            distance -= car.speed;
        }
    }
    answer1.innerText = "ответ : " + wastedTime + " ч.";
}
let time = {
    hour: 23,
    minute: 59,
    second: 9,
};
answer2 = document.querySelector('.block2 #s1');
stringInput1 = document.querySelector('#input1');
function n3() {
    if (localStorage.objTime) {
        time = JSON.parse(localStorage.objTime);
    }
    else {
        localStorage.objTime = JSON.stringify(time);
    }
    if (time.second < 10) {
        if (time.minute < 10) {
            answer2.innerText = "ответ : " + time.hour + ":0" + time.minute + ":0" + time.second;
        }
        else {
            answer2.innerText = "ответ : " + time.hour + ":" + time.minute + ":0" + time.second;
        }
    }
    else if (time.minute < 10) {
        answer2.innerText = "ответ : " + time.hour + ":0" + time.minute + ":" + time.second;
    }
    else {
        answer2.innerText = "ответ : " + time.hour + ":" + time.minute + ":" + time.second;
    }
}
function n4() {
    time.second = stringInput1.value;
    if (time.second > 60) {
        let a = 0;
        a--;
        time.second -= a * 60;
        time.minute += a;
    }
    if (time.minute > 60) {
        let a = 0;
        a--;
        time.minute -= a * 60;
        time.hour += a;
    }
    while (time.hour > 23) {
        time.hour -= 24;
    }
    localStorage.objTime = JSON.stringify(time);
    answer2.innerText = "ответ : время задано";
}
function n5() {
    time.minute = stringInput1.value;
    if (time.minute > 60) {
        let a = 0;
        for (; time.minute > a * 60; a++) { }
        a--;
        time.minute -= a * 60;
        time.hour += a;
    }
    while (time.hour > 23) {
        time.hour -= 24;
    }
    localStorage.objTime = JSON.stringify(time);
    answer2.innerText = "ответ : время задано";
}
function n6() {
    time.hour = stringInput1.value;
    while (time.hour > 23) {
        time.hour -= 24;
    }
    localStorage.objTime = JSON.stringify(time);
    answer2.innerText = "ответ : время задано";
}
let groceryList = [
    { id: 1, name: "йогурт", quantity: 2, bought: "надо купить!!" },
    { id: 2, name: "молоко", quantity: 1, bought: "надо купить!!" },
    { id: 3, name: "хлеб", quantity: 1, bought: "надо купить!!" },
];
function n19() {
    if (localStorage.objGroceryList) {
        groceryList = JSON.parse(localStorage.objGroceryList);
    }
    else {
        localStorage.objGroceryList = JSON.stringify(groceryList);
    }
    let str = ``;
    for (let i in groceryList) {
        for (let e in groceryList[i]) {
            str += `${groceryList[i][e]} `;
        }
        str += `
    `;
    }
    alert(str);
}
function n20() {
    if (localStorage.objGroceryList) {
        groceryList = JSON.parse(localStorage.objGroceryList);
    }
    else {
        localStorage.objGroceryList = JSON.stringify(groceryList);
    }
    let num = 0;
    let uuu = "";
    let tyt = stringInput2.value;
    if (tyt != "") {
        for (let u in groceryList) {
            if (stringInput2.value == groceryList[u].name) {
                num = 1;
                uuu = u;
            }
        }
        if (num == 1) {
            groceryList[uuu].quantity += 1;
            answer4.innerText = "information : " + groceryList[+(uuu)].name + " , " + groceryList[+(uuu)].quantity;
        }
        else {
            groceryList.push({ id: groceryList.length + 1, name: tyt, quantity: 1, bought: "надо купить!!" });
            answer4.innerText = "information : " + tyt + " , " + 1;
        }
        localStorage.objGroceryList = JSON.stringify(groceryList);
    }
    else {
        answer4.innerText = "information : название продукта пустое";
    }
}
function n21() {
    if (localStorage.objGroceryList) {
        groceryList = JSON.parse(localStorage.objGroceryList);
    }
    else {
        localStorage.objGroceryList = JSON.stringify(groceryList);
    }
    let purchasedProducts = 0;
    if (localStorage.loPurchasedProducts) {
        purchasedProducts = JSON.parse(localStorage.loPurchasedProducts);
    }
    else {
        localStorage.loPurchasedProducts = JSON.stringify(purchasedProducts);
    }
    let num = 0;
    let uuu = "";
    let tyt = stringInput2.value;
    if (tyt != "") {
        for (let u in groceryList) {
            if (stringInput2.value == groceryList[u].name) {
                num = 1;
                uuu = u;
            }
        }
        if (num == 1) {
            if (groceryList[uuu].bought != "куплен") {
                groceryList[uuu].bought = "куплен";
                answer4.innerText = "information : " + groceryList[+(uuu)].name + " куплен";
                let temporaryStorage = groceryList[uuu];
                groceryList[uuu] = groceryList[purchasedProducts];
                groceryList[purchasedProducts] = temporaryStorage;
                localStorage.objGroceryList = JSON.stringify(groceryList);
                purchasedProducts++;
                localStorage.loPurchasedProducts = JSON.stringify(purchasedProducts);
            }
        }
        else {
            answer4.innerText = "information : такого продукта нет";
        }
    }
    else {
        answer4.innerText = "information : название продукта пустое";
    }
}
let switch1 = 0;
let color = ["background-color:", "color:"];
let strColor = "";
function n22() {
    if (switch1 == 0) {
        switch1 = 1;
    }
    if (localStorage.locSwitch1) {
        switch1 = JSON.parse(localStorage.locSwitch1);
    }
    else {
        localStorage.locSwitch1 = JSON.stringify(switch1);
    }
    switch (switch1) {
        case 1:
            switch1 = 2;
            break;
        case 2:
            switch1 = 3;
            break;
        case 3:
            switch1 = 4;
            break;
        case 4:
            switch1 = 5;
            break;
        case 5:
            switch1 = 6;
            break;
        case 6:
            switch1 = 1;
            break;
    }
    localStorage.locSwitch1 = JSON.stringify(switch1);
    if (switch1 == 1) {
        answer5.innerText = 'dark';
        for (let i in color) {
            strColor += color[i];
            if (i == "0") {
                strColor += "#232323;";
            }
            else {
                strColor += "azure;";
            }
        }
        document.querySelector('body').style = strColor;
        for (let r of buttonALL) {
            r.style = "background-color: #efefef; color: #232323;";
        }
        for (let r of inputALL) {
            r.style = "background-color: #efefef; color: #232323;";
        }
        document.querySelector('html').style.setProperty('--plshldColor', '#232323');
        document.querySelector('html').style.setProperty('--aColor', '#cbcbcb');
        document.querySelector('html').style.setProperty('--aBackground', '#717171');
        document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#717171');
        document.querySelector('html').style.setProperty('--aShadowHOVER', '#ffffff');
        document.querySelector('html').style.setProperty('--bottonShadow', '#ffffff');
        document.querySelector('html').style.setProperty('--bottonColor', '#232323');
        for (let w of H1ALL) {
            w.style = "color:azure;";
        }
    }
    if (switch1 == 2) {
        answer5.innerText = 'white';
        for (let i in color) {
            strColor += color[i];
            if (i == "0") {
                strColor += "#ffffff;";
            }
            else {
                strColor += "#000000;";
            }
        }
        document.querySelector('body').style = strColor;
        for (let r of buttonALL) {
            r.style = "background-color: #575757;";
        }
        for (let r of inputALL) {
            r.style = "background-color: #575757; color: #efefef;";
        }
        document.querySelector('html').style.setProperty('--plshldColor', '#efefef');
        document.querySelector('html').style.setProperty('--aColor', '#ffffff');
        document.querySelector('html').style.setProperty('--aBackground', '#9b9b9b');
        document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#9b9b9b');
        document.querySelector('html').style.setProperty('--aShadowHOVER', '#f71414');
        document.querySelector('html').style.setProperty('--bottonShadow', '#000000');
        document.querySelector('html').style.setProperty('--bottonColor', '#ffffff');
        for (let w of H1ALL) {
            w.style = "color:#202020;";
        }
    }
    if (switch1 == 3) {
        answer5.innerText = 'dark gold';
        for (let i in color) {
            strColor += color[i];
            if (i == "0") {
                strColor += "#232323;";
            }
            else {
                strColor += "#edf49c;";
            }
        }
        document.querySelector('body').style = strColor;
        for (let r of buttonALL) {
            r.style = "background-color: #c9a805;";
        }
        for (let r of inputALL) {
            r.style = "background-color: #8b7404; color: white;";
        }
        document.querySelector('html').style.setProperty('--plshldColor', '#fcfdd4');
        document.querySelector('html').style.setProperty('--aColor', '#ffffff');
        document.querySelector('html').style.setProperty('--aBackground', '#b29115');
        document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#ffffff');
        document.querySelector('html').style.setProperty('--aShadowHOVER', '#ffffff');
        document.querySelector('html').style.setProperty('--bottonShadow', '#ffe52d');
        document.querySelector('html').style.setProperty('--bottonColor', '#ffffff');
        for (let w of H1ALL) {
            w.style = "color:#f1da23;";
        }
    }
    if (switch1 == 4) {
        answer5.innerText = 'girly';
        for (let i in color) {
            strColor += color[i];
            if (i == "0") {
                strColor += "#630949;";
            }
            else {
                strColor += "#ff6ce9;";
            }
        }
        document.querySelector('body').style = strColor;
        for (let r of buttonALL) {
            r.style = "background-color: #ee0cae; color: white;";
        }
        for (let r of inputALL) {
            r.style = "background-color: #efefef; color: #d34c89;";
        }
        document.querySelector('html').style.setProperty('--plshldColor', '#d34c89');
        document.querySelector('html').style.setProperty('--aColor', '#ffffff');
        document.querySelector('html').style.setProperty('--aBackground', '#ba0e89');
        document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#7d095c');
        document.querySelector('html').style.setProperty('--aShadowHOVER', '#ff93e0');
        document.querySelector('html').style.setProperty('--bottonShadow', '#f15dc7');
        document.querySelector('html').style.setProperty('--bottonColor', '#ffffff');
        for (let w of H1ALL) {
            w.style = "color:azure;";
        }
    }
    if (switch1 == 6) {
        answer5.innerText = 'classic';
        for (let i in color) {
            strColor += color[i];
            if (i == "0") {
                strColor += "#8fb5a2;";
            }
            else {
                strColor += "azure;";
            }
        }
        document.querySelector('body').style = strColor;
        for (let r of buttonALL) {
            r.style = "background-color: #637c6f; color: #f0f0f0;";
        }
        for (let r of inputALL) {
            r.style = "background-color: #637c6f; color: #f0f0f0;";
        }
        document.querySelector('html').style.setProperty('--plshldColor', '#dcd9d9');
        document.querySelector('html').style.setProperty('--aColor', '#f0f0f0');
        document.querySelector('html').style.setProperty('--aBackground', '#56836d');
        document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#566b60');
        document.querySelector('html').style.setProperty('--aShadowHOVER', '#60ffcd');
        document.querySelector('html').style.setProperty('--bottonShadow', '#ffffff');
        document.querySelector('html').style.setProperty('--bottonColor', '#ffffff');
        for (let w of H1ALL) {
            w.style = "color:#272f2b;";
        }
    }
    if (switch1 == 5) {
        answer5.innerText = 'gold';
        for (let i in color) {
            strColor += color[i];
            if (i == "0") {
                strColor += "#c2c04f;";
            }
            else {
                strColor += "#807b00;";
            }
        }
        document.querySelector('body').style = strColor;
        for (let r of buttonALL) {
            r.style = "background-color: #fbff4f; color: #000000;";
        }
        for (let r of inputALL) {
            r.style = "background-color: #fbff5b; color: #000000;";
        }
        document.querySelector('html').style.setProperty('--plshldColor', '#000000');
        document.querySelector('html').style.setProperty('--aColor', '#ffffff');
        document.querySelector('html').style.setProperty('--aBackground', '#b29115');
        document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#ffe52d');
        document.querySelector('html').style.setProperty('--aShadowHOVER', '#ffe52d');
        document.querySelector('html').style.setProperty('--bottonShadow', '#6c6407');
        document.querySelector('html').style.setProperty('--bottonColor', '#ffffff');
        for (let w of H1ALL) {
            w.style = "color:#000000;";
        }
    }
}
function n23() {
    let line = stringInput3.value;
    let countingNumbers = 0;
    let countingString = 0;
    let countingСount = 0;
    if (line.length != 0) {
        for (let i = 0; i != line.length; i++) {
            if (line[i] == "1" || line[i] == "2" || line[i] == "3" || line[i] == "4" || line[i] == "5" || line[i] == "6" || line[i] == "7" || line[i] == "8" || line[i] == "9" || line[i] == "0") {
                countingNumbers++;
            }
            else {
                if (line[i] == "/" || line[i] == "*" || line[i] == "-" || line[i] == "+" || line[i] == "=" || line[i] == "_" || line[i] == "|" || line[i] == "(" || line[i] == ")" || line[i] == "}" || line[i] == "{" || line[i] == "[" || line[i] == "]") {
                    countingСount++;
                }
                else {
                    countingString++;
                }
            }
        }
        answer7.innerText = `ответ : числа:${countingNumbers} ; строки:${countingString} ; знаки:${countingСount}`;
    }
    else {
        answer7.innerText = "ответ : строка пустая";
    }
}
function n24() {
    let savingNumber = +stringInput4.value;
    let lowercaseNumber = "ответ : ";
    if (0 <= savingNumber && savingNumber < 20) {
        switch (savingNumber) {
            case 0:
                lowercaseNumber += "нуль";
                break;
            case 1:
                lowercaseNumber += "один";
                break;
            case 2:
                lowercaseNumber += "два";
                break;
            case 3:
                lowercaseNumber += "три";
                break;
            case 4:
                lowercaseNumber += "четыре";
                break;
            case 5:
                lowercaseNumber += "пять";
                break;
            case 6:
                lowercaseNumber += "шесть";
                break;
            case 7:
                lowercaseNumber += "семь";
                break;
            case 8:
                lowercaseNumber += "восемь";
                break;
            case 9:
                lowercaseNumber += "девять";
                break;
            case 10:
                lowercaseNumber += "десять";
                break;
            case 11:
                lowercaseNumber += "одиннадцать";
                break;
            case 12:
                lowercaseNumber += "двенадцать";
                break;
            case 13:
                lowercaseNumber += "тринадцать";
                break;
            case 14:
                lowercaseNumber += "четырнадцать";
                break;
            case 15:
                lowercaseNumber += "пятнадцать";
                break;
            case 16:
                lowercaseNumber += "шестнадцать";
                break;
            case 17:
                lowercaseNumber += "семнадцать";
                break;
            case 18:
                lowercaseNumber += "восемнадцать";
                break;
            case 19:
                lowercaseNumber += "девятнадцать";
                break;
        }
    }
    else {
        let ssn = savingNumber + "";
        switch (ssn[0]) {
            case "2":
                lowercaseNumber += "двадцать";
                break;
            case "3":
                lowercaseNumber += "тридцать";
                break;
            case "4":
                lowercaseNumber += "сорок";
                break;
            case "5":
                lowercaseNumber += "пятьдесят";
                break;
            case "6":
                lowercaseNumber += "шестьдесят";
                break;
            case "7":
                lowercaseNumber += "семьдесят";
                break;
            case "8":
                lowercaseNumber += "восемьдесят";
                break;
            case "9":
                lowercaseNumber += "девяносто";
                break;
        }
        if (ssn[1] != "0") {
            switch (ssn[1]) {
                case "1":
                    lowercaseNumber += " один";
                    break;
                case "2":
                    lowercaseNumber += " два";
                    break;
                case "3":
                    lowercaseNumber += " три";
                    break;
                case "4":
                    lowercaseNumber += " четыре";
                    break;
                case "5":
                    lowercaseNumber += " пять";
                    break;
                case "6":
                    lowercaseNumber += " шесть";
                    break;
                case "7":
                    lowercaseNumber += " семь";
                    break;
                case "8":
                    lowercaseNumber += " восемь";
                    break;
                case "9":
                    lowercaseNumber += " девять";
                    break;
            }
        }
    }
    answer8.innerText = lowercaseNumber;
    if (savingNumber > 99) {
        answer8.innerText = "ответ : слишком большое число только двузначное";
    }
}
function n25() {
    let str = stringInput5.value;
    let array = "ответ : ";
    console.log(str.codePointAt());
    for (let i in str) {
        if (1072 <= str[i].codePointAt() && str[i].codePointAt() <= 1103 || 97 <= str[i].codePointAt() && str[i].codePointAt() <= 122) {
            array += str[i].toUpperCase();
        }
        else if (1040 <= str[i].codePointAt() && str[i].codePointAt() <= 1071 || 65 <= str[i].codePointAt() && str[i].codePointAt() <= 90) {
            array += str[i].toLowerCase();
        }
        else if (48 <= str[i].codePointAt() && str[i].codePointAt() <= 57) {
            array += "_";
        }
        else {
            array += str[i];
        }
    }
    answer9.innerText = array;
}
function n26() {
    let str = stringInput6.value;
    let str2 = "ответ : ";
    let memory = "";
    for (let i in str) {
        if (str[i] == "-") {
            memory = str[i + 1];
        }
        else {
            if (memory == "") {
                str2 += str[i];
            }
            else {
                memory = "";
                str2 += str[i].toUpperCase();
            }
        }
    }
    answer10.innerText = str2;
}
function n27() {
    let arr = stringInput7.value.split(' ');
    let abbreviation = "ответ : ";
    for (let i of arr) {
        abbreviation += i[0].toUpperCase();
    }
    answer11.innerText = abbreviation;
}
function n28() {
    let str = stringInput8.value;
    let str2 = "";
    let variable;
    let reply = "ответ : ";
    for (let i of str) {
        if (i == '*') {
            variable = i;
        }
        if (i == '^') {
            variable = i;
        }
        if (i == '/') {
            variable = i;
        }
        if (i == '+') {
            variable = i;
        }
        if (i == '-') {
            variable = i;
        }
        if (i != " ") {
            str2 += i;
        }
    }
    let num = str2.split(variable);
    if (variable == '*') {
        reply += +(num[0]) * +(num[1]);
    }
    if (variable == '^') {
        reply += Math.pow(+(num[0]), +(num[1]));
    }
    if (variable == '/') {
        reply += +(num[0]) / +(num[1]);
    }
    if (variable == '+') {
        reply += +(num[0]) + +(num[1]);
    }
    if (variable == '-') {
        reply += +(num[0]) - +(num[1]);
    }
    answer12.innerText = reply;
}
let rectangle = {
    topLeftY: 1,
    topLeftX: 1,
    bottomRightY: 3,
    bottomRightX: 4,
};
function n7() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    let str = `ответ : `;
    for (let i in rectangle) {
        str += `${i} : ${rectangle[i]} / `;
    }
    answer3.innerText = str;
}
function n8() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    answer3.innerText = 'ответ : ширина - ' + ((rectangle.bottomRightX - rectangle.topLeftX) + 1);
}
function n9() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    answer3.innerText = 'ответ : высота - ' + ((rectangle.bottomRightY - rectangle.topLeftY) + 1);
}
function n10() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    answer3.innerText = 'ответ : площадь - ' + (((rectangle.bottomRightY - rectangle.topLeftY) + 1) * ((rectangle.bottomRightX - rectangle.topLeftX) + 1));
}
function n11() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    answer3.innerText = 'ответ : периметр - ' + (((rectangle.bottomRightY - rectangle.topLeftY) + 1) * 2 + ((rectangle.bottomRightX - rectangle.topLeftX) + 1) * 2);
}
function n12() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    let width = parseInt(prompt('введите ширину'));
    if (width >= 0) {
        rectangle.bottomRightX = (rectangle.topLeftX + width) - 1;
        localStorage.objRectangle = JSON.stringify(rectangle);
        answer3.innerText = 'ответ : действие выполнено';
    }
    else {
        alert("ошибка::минусовая ширина");
        answer3.innerText = 'ответ : ошибка действия';
    }
}
function n13() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    let height = parseInt(prompt('введите высоту'));
    if (height >= 0) {
        rectangle.bottomRightY = (rectangle.topLeftY + height) - 1;
        localStorage.objRectangle = JSON.stringify(rectangle);
        answer3.innerText = 'ответ : действие выполнено';
    }
    else {
        alert("ошибка::минусовая высота");
        answer3.innerText = 'ответ : ошибка действия';
    }
}
function n14() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    let height = parseInt(prompt('введите высоту'));
    let width = parseInt(prompt('введите ширину'));
    if (height >= 0 && width >= 0) {
        rectangle.bottomRightY = (rectangle.topLeftY + height) - 1;
        localStorage.objRectangle = JSON.stringify(rectangle);
        rectangle.bottomRightX = (rectangle.topLeftX + width) - 1;
        localStorage.objRectangle = JSON.stringify(rectangle);
        answer3.innerText = 'ответ : действие выполнено';
    }
    else {
        alert("ошибка::минусовая высота");
        answer3.innerText = 'ответ : ошибка действия';
    }
}
function n15() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    let movementX = parseInt(prompt('на сколько передвинуть прямоугольник по оси X'));
    rectangle.topLeftX += movementX;
    rectangle.bottomRightX += movementX;
    localStorage.objRectangle = JSON.stringify(rectangle);
    answer3.innerText = 'ответ : ты передвинул прямоугольник';
}
function n16() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    let movementY = parseInt(prompt('на сколько передвинуть прямоугольник по оси Y'));
    rectangle.topLeftY += movementY;
    rectangle.bottomRightY += movementY;
    localStorage.objRectangle = JSON.stringify(rectangle);
    answer3.innerText = 'ответ : ты передвинул прямоугольник';
}
function n17() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    let movementX = parseInt(prompt('на сколько передвинуть прямоугольник по оси X'));
    let movementY = parseInt(prompt('на сколько передвинуть прямоугольник по оси Y'));
    rectangle.topLeftX += movementX;
    rectangle.bottomRightX += movementX;
    rectangle.topLeftY += movementY;
    rectangle.bottomRightY += movementY;
    localStorage.objRectangle = JSON.stringify(rectangle);
    answer3.innerText = 'ответ : ты передвинул прямоугольник';
}
function n18() {
    if (localStorage.objRectangle) {
        rectangle = JSON.parse(localStorage.objRectangle);
    }
    else {
        localStorage.objRectangle = JSON.stringify(rectangle);
    }
    let dotX = parseInt(prompt('введите точку X'));
    let dotY = parseInt(prompt('введите точку Y'));
    if ((dotX >= rectangle.topLeftX && dotX <= rectangle.bottomRightX) && (dotY >= rectangle.topLeftY && dotY <= rectangle.bottomRightY)) {
        answer3.innerText = 'ответ : точка в прямоугольнике';
    }
    else {
        answer3.innerText = 'ответ : точки нет в прямоугольнике';
    }
}
let randomArray = [];
for (let root = 0; root <= 8; root++) {
    randomArray[root] = Math.round(Math.random() * (1000 - -1000) + -1000);
    console.log(root);
}
function n29() {
    if (localStorage.objRandomArray) {
        randomArray = JSON.parse(localStorage.objRandomArray);
    }
    else {
        localStorage.objRandomArray = JSON.stringify(randomArray);
    }
    answer13.innerText = 'ответ : ' + randomArray;
}
function n30() {
    if (localStorage.objRandomArray) {
        randomArray = JSON.parse(localStorage.objRandomArray);
    }
    else {
        localStorage.objRandomArray = JSON.stringify(randomArray);
    }
    let arr2 = [];
    for (let i of randomArray) {
        if (i % 2 == 0) {
            arr2.push(i);
        }
    }
    answer13.innerText = 'ответ : четные - ' + arr2;
}
function n31() {
    if (localStorage.objRandomArray) {
        randomArray = JSON.parse(localStorage.objRandomArray);
    }
    else {
        localStorage.objRandomArray = JSON.stringify(randomArray);
    }
    let summ = 0;
    for (let i of randomArray) {
        summ += i;
    }
    answer13.innerText = 'ответ : сумма - ' + summ;
}
function n32() {
    if (localStorage.objRandomArray) {
        randomArray = JSON.parse(localStorage.objRandomArray);
    }
    else {
        localStorage.objRandomArray = JSON.stringify(randomArray);
    }
    let max = randomArray[0];
    randomArray.forEach((item) => {
        if (max < item) {
            max = item;
        }
    });
    answer13.innerText = 'ответ : max - ' + max;
}
function n33() {
    if (localStorage.objRandomArray) {
        randomArray = JSON.parse(localStorage.objRandomArray);
    }
    else {
        localStorage.objRandomArray = JSON.stringify(randomArray);
    }
    let prom = +prompt(`напишите индекс в который нужно вписать с 0 по ${randomArray.length}`);
    let save = randomArray[prom];
    randomArray[prom] = +prompt(`напишите само число`);
    randomArray.push(save);
    localStorage.objRandomArray = JSON.stringify(randomArray);
    answer13.innerText = 'ответ : вы изменили массив';
}
function n34() {
    if (localStorage.objRandomArray) {
        randomArray = JSON.parse(localStorage.objRandomArray);
    }
    else {
        localStorage.objRandomArray = JSON.stringify(randomArray);
    }
    randomArray.splice(+prompt(`напишите индекс который нужно удалить с 0 по ${randomArray.length}`), 1);
    localStorage.objRandomArray = JSON.stringify(randomArray);
    answer13.innerText = 'ответ : вы изменили массив';
}
function a1() {
    alert(`Задание 1
  Создать объект, описывающий автомобиль (производитель, 
    модель, год выпуска, средняя скорость), и следующие функции 
    для работы с этим объектом.
    1. Функция для вывода на экран информации об автомобиле.
    2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
    Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час`);
}
const itemJ1 = document.querySelector('.block1 #item');
itemJ1?.addEventListener('click', a1);
const executor1 = document.querySelector('.block1 #b1');
executor1?.addEventListener('click', n1);
const executor2 = document.querySelector('.block1 #b2');
executor2?.addEventListener('click', n2);
function a2() {
    alert(`Задание 3
Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
1. Функция вывода времени на экран.
2. Функция изменения времени на переданное количество 
секунд.
3. Функция изменения времени на переданное количество 
минут.
4. Функция изменения времени на переданное количество 
часов.
Учтите, что в последних 3-х функциях, при изменении одной 
части времени, может измениться и другая. Например: если ко 
времени «20:30:45» добавить 30 секунд, то должно получиться 
«20:31:15», а не «20:30:75».`);
}
const itemJ2 = document.querySelector('.block2 #item');
itemJ2?.addEventListener('click', a2);
const executor3 = document.querySelector('.block2 #b1');
executor3?.addEventListener('click', n3);
const executor4 = document.querySelector('.block2 #b2');
executor4?.addEventListener('click', n4);
const executor5 = document.querySelector('.block2 #b3');
executor5?.addEventListener('click', n5);
const executor6 = document.querySelector('.block2 #b4');
executor6?.addEventListener('click', n6);
function a3() {
    alert(`Задание 
Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
1. Функция принимает объект-прямоугольник и выводит 
информацию о нем (где какая точка расположена).
2. Функция принимает объект-прямоугольник и возвращает 
его ширину.
3. Функция принимает объект-прямоугольник и возвращает 
его высоту.
4. Функция принимает объект-прямоугольник и возвращает 
его площадь.
5. Функция принимает объект-прямоугольник и возвращает 
его периметр.
6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить 
ширину.`);
}
function a4() {
    alert(`7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить 
высоту.
8. Функция изменения ширины и высоты прямоугольника. 
Она принимает объект-прямоугольник и два значения – 
для изменения ширины и высоты.
9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его 
сдвинуть.
10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его 
сдвинуть.
11. Функция смещения прямоугольника и по оси X и по 
оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и 
координаты точки.`);
}
const itemJ3 = document.querySelector('.block3 #item1');
itemJ3?.addEventListener('click', a3);
const itemJ4 = document.querySelector('.block3 #item2');
itemJ4?.addEventListener('click', a4);
const executor7 = document.querySelector('.block3 #b1');
executor7?.addEventListener('click', n7);
const executor8 = document.querySelector('.block3 #b2');
executor8?.addEventListener('click', n8);
const executor9 = document.querySelector('.block3 #b3');
executor9?.addEventListener('click', n9);
const executor10 = document.querySelector('.block3 #b4');
executor10?.addEventListener('click', n10);
const executor11 = document.querySelector('.block3 #b5');
executor11?.addEventListener('click', n11);
const executor12 = document.querySelector('.block3 #b6');
executor12?.addEventListener('click', n12);
const executor13 = document.querySelector('.block3 #b7');
executor13?.addEventListener('click', n13);
const executor14 = document.querySelector('.block3 #b8');
executor14?.addEventListener('click', n14);
const executor15 = document.querySelector('.block3 #b9');
executor15?.addEventListener('click', n15);
const executor16 = document.querySelector('.block3 #b10');
executor16?.addEventListener('click', n16);
const executor17 = document.querySelector('.block3 #b11');
executor17?.addEventListener('click', n17);
const executor18 = document.querySelector('.block3 #b12');
executor18?.addEventListener('click', n18);
function a5() {
    alert(`Задание 1
Создать массив «Список покупок». Каждый элемент массива 
является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала 
шли некупленные продукты, а потом – купленные.
2. Добавление покупки в список. Учтите, что при добавлении 
покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, 
а не добавлять новую. 
3. Покупка продукта. Функция принимает название продукта 
и отмечает его как купленный.`);
}
const itemJ5 = document.querySelector('.block4 #item');
itemJ5?.addEventListener('click', a5);
const executor19 = document.querySelector('.block4 #b1');
executor19?.addEventListener('click', n19);
const executor20 = document.querySelector('.block4 #b2');
executor20?.addEventListener('click', n20);
const executor21 = document.querySelector('.block4 #b3');
executor21?.addEventListener('click', n21);
function a6() {
    alert(`Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
Написать функцию, которая принимает массив стилей и 
текст, и выводит этот текст с помощью document.write() в тегах 
<p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.`);
}
const itemJ6 = document.querySelector('.block5 #item');
itemJ6?.addEventListener('click', a6);
const executor22 = document.querySelector('.block5 #b1');
executor22?.addEventListener('click', n22);
function a7() {
    alert(`Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
названия факультета, для которого она предназначена. 
Написать несколько функций для работы с ним.
1. Вывод на экран всех аудиторий. 
2. Вывод на экран аудиторий для указанного факультета.
3. Вывод на экран только тех аудиторий, которые подходят для 
переданной группы. Объект-группа состоит из названия, 
количества студентов и названия факультета. 
4. Функция сортировки аудиторий по количеству мест.
5. Функция сортировки аудиторий по названию (по алфавиту).`);
}
const itemJ7 = document.querySelector('.block6 #item');
itemJ7?.addEventListener('click', a7);
function a8() {
    alert(`Написать функцию, которая принимает строку и выводит 
статистику о ней: количество букв, количество цифр и 
количество других знаков.`);
}
const itemJ8 = document.querySelector('.block7 #item');
itemJ8?.addEventListener('click', a8);
const executor23 = document.querySelector('.block7 #b1');
executor23?.addEventListener('click', n23);
function a9() {
    alert(`Написать функцию, которая принимает двузначное число 
и возвращает его в текстовом виде. 
Например: 35 – тридцать пять, 89 – восемьдесят девять, 
12 – двенадцать.`);
}
const itemJ9 = document.querySelector('.block8 #item');
itemJ9?.addEventListener('click', a9);
const executor24 = document.querySelector('.block8 #b1');
executor24?.addEventListener('click', n24);
function a10() {
    alert(`Написать функцию, которая заменяет в полученной строке 
большие буквы на маленькие, маленькие – на большие, а 
цифры – на знак нижнего подчеркивания.`);
}
const itemJ10 = document.querySelector('.block9 #item');
itemJ10?.addEventListener('click', a10);
const executor25 = document.querySelector('.block9 #b1');
executor25?.addEventListener('click', n25);
function a11() {
    alert(`Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, textalign в textAlign.`);
}
const itemJ11 = document.querySelector('.block10 #item');
itemJ11?.addEventListener('click', a11);
const executor26 = document.querySelector('.block10 #b1');
executor26?.addEventListener('click', n26);
function a12() {
    alert(`Написать функцию, которая принимает словосочетание 
и превращает его в аббревиатуру. 
Например: cascading style sheets в CSS, объектноориентированное программирование в ООП`);
}
const itemJ12 = document.querySelector('.block11 #item');
itemJ12?.addEventListener('click', a12);
const executor27 = document.querySelector('.block11 #b1');
executor27?.addEventListener('click', n27);
function a13() {
    alert(`Написать функцию – калькулятор. Функция принимает 
строку с примером, определяет, какое действие необходимо 
выполнить (+ - * / ^), переводит операнды в числа, решает 
пример и возвращает результат.`);
}
const itemJ13 = document.querySelector('.block12 #item');
itemJ13?.addEventListener('click', a13);
const executor28 = document.querySelector('.block12 #b1');
executor28?.addEventListener('click', n28);
function a14() {
    alert(`Создать массив из 10 случайных чисел и написать несколько 
функций для работы с ним.
1. Функция принимает массив и выводит его на экран.
2. Функция принимает массив и выводит только четные 
элементы.
3. Функция принимает массив и возвращает сумму всех 
элементов массива.
4. Функция принимает массив и возвращает его максимальный элемент.
5. Функция добавления нового элемента в массив по указанному индексу.
6. Функция удаления элемента из массива по указанному 
индексу`);
}
const itemJ14 = document.querySelector('.block13 #item');
itemJ14?.addEventListener('click', a14);
const executor29 = document.querySelector('.block13 #b1');
executor29?.addEventListener('click', n29);
const executor30 = document.querySelector('.block13 #b2');
executor30?.addEventListener('click', n30);
const executor31 = document.querySelector('.block13 #b3');
executor31?.addEventListener('click', n31);
const executor32 = document.querySelector('.block13 #b4');
executor32?.addEventListener('click', n32);
const executor33 = document.querySelector('.block13 #b5');
executor33?.addEventListener('click', n33);
const executor34 = document.querySelector('.block13 #b6');
executor34?.addEventListener('click', n34);
function a15() {
    alert(`Задание 1
Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
1 ■ поле, хранящее радиус окружности;
2 ■ get-свойство, возвращающее радиус окружности;
3 ■ set-свойство, устанавливающее радиус окружности;
4 ■ get-свойство, возвращающее диаметр окружности;
5 ■ метод, вычисляющий площадь окружности;
6 ■ метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов.`);
}
class CircleRadius {
    rad = 1;
    constructor(r = 1) {
        this.rad = r;
    }
    get radius() {
        return this.rad;
    }
    set radius(r) {
        this.rad = r;
    }
    get diameter() {
        return this.rad * 2;
    }
    square() {
        return Math.PI * this.rad ** 2;
    }
    length() {
        return 2 * Math.PI * this.rad;
    }
}
let circleRadius = new CircleRadius(3);
const itemJ15 = document.querySelector('.block14 #item');
itemJ15?.addEventListener('click', a15);
const executor35 = document.querySelector('.block14 #b1');
executor35?.addEventListener('click', () => { if (answer14)
    answer14.innerHTML = "ответ: " + circleRadius.radius; });
const executor36 = document.querySelector('.block14 #b2');
executor36?.addEventListener('click', () => { circleRadius.radius = +prompt("введите новый радиус"); });
const executor37 = document.querySelector('.block14 #b3');
executor37?.addEventListener('click', () => { if (answer14)
    answer14.innerHTML = 'ответ: ' + circleRadius.diameter; });
const executor38 = document.querySelector('.block14 #b4');
executor38?.addEventListener('click', () => { if (answer14)
    answer14.innerHTML = 'ответ: ' + circleRadius.square(); });
const executor39 = document.querySelector('.block14 #b5');
executor39?.addEventListener('click', () => { if (answer14)
    answer14.innerHTML = 'ответ: ' + circleRadius.length(); });
function a16() {
    alert(`Задание 2
Реализовать класс, описывающий html элемент. 
Класс HtmlElement должен содержать внутри себя:
  ■ название тега;
  ■ самозакрывающийся тег или нет;
  ■ текстовое содержимое;
  ■ массив атрибутов;
  ■ массив стилей;
  ■ массив вложенных таких же тегов;
1 ■ метод для установки атрибута;
2 ■ метод для установки стиля;
3 ■ метод для добавления вложенного элемента в конец текущего элемента;
4 ■ метод для добавления вложенного элемента в начало текущего элемента;
5 ■ метод getHtml(), который возвращает html код в виде 
строки, включая html код вложенных элементов.`);
}
class HtmlElement {
    tagName = "";
    selfClosing = false;
    textContent = "";
    attributes = [];
    styles = [];
    nestedTags = [];
    constructor(textContentZ, tagNameZ = "span", stylesZ = "", attributesZ = "", selfClosingZ = true) {
        if (tagNameZ == "") {
            tagNameZ = "span";
        }
        if (selfClosingZ == "") {
            selfClosingZ = true;
        }
        this.tagName = tagNameZ;
        this.textContent = textContentZ;
        this.selfClosing = selfClosingZ;
        this.attributes = attributesZ.split(' ');
        this.styles = stylesZ.split(';');
        this.nestedTags.unshift({
            tagName: this.tagName,
            selfClosing: this.selfClosing,
            textContent: this.textContent,
            attributes: this.attributes,
            styles: this.styles,
        });
    }
    attributeSetting(attributesZ) {
        this.attributes.push(attributesZ);
    }
    styleSetting(stylesZ) {
        this.styles.push(stylesZ);
    }
    prepend(el) {
        this.nestedTags.unshift(el);
    }
    append(el) {
        console.log(el);
        this.nestedTags.push(el);
    }
    getHtml(x = this.nestedTags, n = 0, str = "") {
        str += "<" + x[n].tagName + ' style="';
        x[n].styles.find(function (item) {
            str += item + ";";
        });
        str += '" ';
        x[n].attributes.find(function (item) {
            str += item;
        });
        if (x[n].selfClosing) {
            str += '>' + x[n].textContent + "</" + x[n].tagName + ">";
        }
        else {
            str += ">";
        }
        console.log(str);
        if (n == x.length - 1) {
            return str;
        }
        else {
            return this.getHtml(x, n + 1, str);
        }
    }
}
let span = new HtmlElement("uuu", "span", "color:red; background:blye");
let div = new HtmlElement("uuu", "div", "color:red; background:blye");
div.attributeSetting('class="sf sdf sdf"');
div.append(span);
const itemJ16 = document.querySelector('.block15 #item');
itemJ16?.addEventListener('click', a16);
const executor40 = document.querySelector('.block15 #b1');
executor40?.addEventListener('click', () => { if (answer15)
    answer15.innerHTML = "&#10004;"; div.attributeSetting(prompt('введите атрибут\nпример:\nhref="/link-element-example.ru"')); });
const executor41 = document.querySelector('.block15 #b2');
executor41?.addEventListener('click', () => { if (answer15)
    answer15.innerHTML = "&#10004;"; div.styleSetting(prompt('введите style можно несколько через точку с запятой ( ; ) \nпример:\ncolor:blye ; background:blye')); });
const executor42 = document.querySelector('.block15 #b3');
executor42?.addEventListener('click', () => { if (answer15)
    answer15.innerHTML = "&#10004;"; div.append(new HtmlElement(prompt('добавления элемента в конец\nвведите текстовое содержимое   !! обязательно !!'), prompt('введите название тега по умолчанию = span'), prompt('введите стили не обязательно'), prompt('введите название атрибута не обязательно'), prompt('введите самозакрывающийся тег или false по умолчанию = true'))); });
const executor43 = document.querySelector('.block15 #b4');
executor43?.addEventListener('click', () => { if (answer15)
    answer15.innerHTML = "&#10004;"; div.prepend(new HtmlElement(prompt('добавления элемента в конец\nвведите текстовое содержимое   !! обязательно !!'), prompt('введите название тега по умолчанию = span'), prompt('введите стили не обязательно'), prompt('введите название атрибута не обязательно'), prompt('введите самозакрывающийся тег или false по умолчанию = true'))); });
const executor44 = document.querySelector('.block15 #b5');
executor44?.addEventListener('click', () => {
    if (answer15)
        answer15.innerHTML = "";
    div.getHtml();
});
function a17() {
    alert(`Задание 3
Реализовать класс, который описывает css класс. 
Класс CssClass должен содержать внутри себя:
■ название css класса;
■ массив стилей;
■ метод для установки стиля;
■ метод для удаления стиля;
■ метод getCss(), который возвращает css код в виде строки`);
}
class CssClass {
    name;
    cls;
    styles = [];
    constructor(name, ic = "class") {
        this.name = name;
        ic = ic.toLowerCase();
        if (ic == "class") {
            this.cls = true;
        }
        else {
            this.cls = false;
        }
    }
    styleSetting(x) {
        let y = x.split(';');
        for (let i of y) {
            if (i != "") {
                this.styles.push(i);
            }
        }
        console.log(this.styles);
    }
    removeStyle(x) {
        if (this.styles.indexOf(x) != -1) {
            this.styles.splice(this.styles.indexOf(x), 1);
        }
        console.log(this.styles);
    }
    get getCss() {
        let str = "";
        if (this.cls) {
            str += ".";
        }
        else {
            str += "#";
        }
        str += this.name + " {\n";
        if (this.styles.length == 0) {
            return "массив пуст";
        }
        for (let i of this.styles) {
            str += i + ";\n";
        }
        str += "}";
        return str;
    }
}
let styleDiv = new CssClass('sdf');
const itemJ17 = document.querySelector('.block16 #item');
itemJ17?.addEventListener('click', a17);
const executor48 = document.querySelector('.block16 #b1');
executor48?.addEventListener('click', () => { styleDiv.styleSetting(prompt('введите стили которые нужно добавить, можно несколько разделяя их через точку с запятой ( ; )')); });
const executor49 = document.querySelector('.block16 #b2');
executor49?.addEventListener('click', () => { styleDiv.removeStyle(prompt('введите стили которые нужно удалить')); });
const executor50 = document.querySelector('.block16 #b3');
executor50?.addEventListener('click', () => { alert(styleDiv.getCss); console.log(); });
function a18() {
    alert(`Реализовать класс, описывающий блок html документ. 
Класс HtmlBlock должен содержать внутри себя:
■ коллекцию стилей, описанных с помощью класса CssClass;
■ корневой элемент, описанный с помощью класса 
HtmlElement;
■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом 
все html содержимое из корневого тега и его вложенных 
элементов).`);
}
class HtmlBlock {
    сssClass;
    htmlElement;
    constructor(a, b) {
        this.htmlElement = a;
        this.сssClass = b;
    }
    getCode() {
        document.head.innerHTML += `<style>${this.сssClass.map(el => el.getCss).join('')}</style>`;
        const bl17 = document.querySelector('.block17');
        if (bl17)
            bl17.innerHTML += this.htmlElement.getHtml();
    }
}
const itemJ18 = document.querySelector('.block17 #item');
itemJ18?.addEventListener('click', a18);
const executor45 = document.querySelector('.block17 #b1');
executor45?.addEventListener('click', () => { new HtmlBlock(div, [styleDiv]).getCode(); });
let answer18 = document.querySelector('.block18 #s1 table');
let tableDateNow = new Date();
let table = `<tr><th colspan="7">`;
switch (tableDateNow.getMonth()) {
    case 0:
        table += `январь`;
        break;
    case 1:
        table += `февраль`;
        break;
    case 2:
        table += `март`;
        break;
    case 3:
        table += `апрель`;
        break;
    case 4:
        table += `май`;
        break;
    case 5:
        table += `июнь`;
        break;
    case 6:
        table += `июль`;
        break;
    case 7:
        table += `август`;
        break;
    case 8:
        table += `сентябрь`;
        break;
    case 9:
        table += `октябрь`;
        break;
    case 10:
        table += `ноябрь`;
        break;
    case 11:
        table += `декабрь`;
        break;
}
table += `</th></tr>`;
let arrayThTable = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
table += `<tr>`;
for (let i = 0; i != 7; i++) {
    table += `<td>${arrayThTable[i]}</td>`;
}
table += `</tr>`;
let tableDateOne = new Date((new Date).setDate(1));
let tableDateStart = 99;
let tableDateDay = [1, 2, 3, 4, 5, 6, 0];
for (let i in tableDateDay) {
    if (tableDateDay[i] == tableDateOne.getDay()) {
        tableDateStart = +(i) + 1;
        console.log(tableDateStart);
    }
}
let rangeTable = 0;
let dayTable = 1;
let exitInfinityTable = true;
let tableDateNowNow = new Date();
let trimTableHTML = 0;
table += "<tr>";
while (exitInfinityTable) {
    rangeTable += 1;
    trimTableHTML += 1;
    if (rangeTable < tableDateStart) {
        table += "<td></td>";
    }
    else {
        if (dayTable == tableDateNowNow.getDate()) {
            table += `<td style="background-color: #dd5959;">${dayTable}</td>`;
        }
        else {
            table += `<td>${dayTable}</td>`;
        }
        dayTable += 1;
        if (new Date((new Date).setDate(dayTable)).getDate() == 1) {
            exitInfinityTable = false;
            while (trimTableHTML < 7) {
                table += "<td></td>";
                trimTableHTML += 1;
            }
        }
    }
    if (rangeTable % 7 == 0 && exitInfinityTable) {
        table += "</tr><tr>";
        trimTableHTML = 0;
    }
}
table += "</tr>";
answer18.insertAdjacentHTML('beforeend', table);
let gameBallRotation = 0;
const foregroundTranslucent = document.querySelector('.foregroundTranslucent');
const executor52 = document.querySelector('.SVG-close');
executor52?.addEventListener('click', () => {
    foregroundTranslucent.classList.remove('on');
    foregroundTranslucent.classList.add('off');
    document.body.style.overflow = "";
});
const footballFieldGame = document.querySelector("#field div");
const playBall = document.querySelector("#field div div");
const executor51 = document.querySelector('.block19 #b1');
executor51?.addEventListener('click', () => {
    foregroundTranslucent.classList.remove('off');
    foregroundTranslucent.classList.add('on');
    document.body.style.overflow = "hidden";
    const rect = footballFieldGame.getBoundingClientRect();
    if (playBall) {
        playBall.style.top = (rect.bottom - rect.top) / 2 + rect.y - 25 + 'px';
        playBall.style.left = (rect.right - rect.left) / 2 + rect.x - 25 + 'px';
    }
});
footballFieldGame?.addEventListener('click', (event) => {
    let definitionBallRotation = Math.floor(Math.random() * (3 - 1)) + 1;
    switch (Math.floor(Math.random() * (3 - 1)) + 1) {
        case 1:
            gameBallRotation -= 50;
            break;
        case 2:
            gameBallRotation += 50;
            break;
    }
    playBall.style.transform = `rotate(${gameBallRotation}deg)`;
    const rect = footballFieldGame.getBoundingClientRect();
    let x = event.clientX - 25;
    let y = event.clientY - 25;
    if (rect.left > x)
        x = rect.left + 20;
    if (rect.right < x + 50)
        x = rect.right - 71;
    if (rect.top > y)
        y = rect.top + 20;
    if (rect.bottom < y + 50)
        y = rect.bottom - 71;
    playBall.style.top = `${y}px`;
    playBall.style.left = `${x}px`;
});
const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    let target = event.target;
});
const lists = document.querySelector('#torsion');
const foregroundSemi_transparentLists = document.querySelector('.foregroundSemi-transparentLists');
const exitFromLists = document.querySelector('.SVG-close2');
exitFromLists?.addEventListener('click', () => {
    foregroundSemi_transparentLists.classList.remove('on');
    foregroundSemi_transparentLists.classList.add('off');
    document.body.style.overflow = "";
});
const executor53 = document.querySelector('.block20 #b1');
executor53?.addEventListener('click', () => {
    if (localStorage.objGroceryList) {
        groceryList = JSON.parse(localStorage.objGroceryList);
    }
    else {
        localStorage.objGroceryList = JSON.stringify(groceryList);
    }
    lists.innerHTML = ``;
    for (let i in groceryList) {
        if (groceryList[i].bought != "куплен")
            lists.innerHTML += `<div data-id=${groceryList[i].id} class="myclass"><span>${groceryList[i].name + "  " + groceryList[i].quantity}<br>${groceryList[i].bought}</span><div class="closeList"></div></div>`;
    }
    foregroundSemi_transparentLists.classList.remove('off');
    foregroundSemi_transparentLists.classList.add('on');
    document.body.style.overflow = "hidden";
});
document.querySelector('#torsion')?.addEventListener('click', function (e) {
    let target = e.target;
    if (target.className != 'closeList')
        return;
    const el = target?.closest('.myclass');
    if (el) {
        el.style.marginLeft = '600px';
        setTimeout(() => {
            el.style.height = '0';
            el.style.marginTop = '0';
            setTimeout(() => {
                el.remove();
            }, 500);
        }, 500);
    }
    let id = el.dataset;
    for (let i in groceryList) {
        if (groceryList[i].id == id.id) {
            groceryList.splice(+(i), 1);
            localStorage.objGroceryList = JSON.stringify(groceryList);
        }
    }
});