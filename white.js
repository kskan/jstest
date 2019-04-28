var money = 3200;
var p = 1000;
//if else语句
if (p > money) {
    alert('余额不足');
} else {
    alert('提取金额');
}
//if else内嵌语句
var score = 95;
if (score > 90) {
    alert('优秀')
} else if (score > 80) {
    alert('良')
} else if (score > 60) {
    alert('及格')
} else {
    alert('不及格')
}
//switch 语句（没有break的情况下，自顶向下）
var cp = 'w8'
switch (cp) {
    case 'w10':
        alert('这是window10系统')
        break;
    case 'w8':
        alert('这是window8系统')
        break;
    case 'w7':
        alert('这是window7系统')
        break;
    default:
        alert('你的电脑该换了...')
}
var score = 80
switch (score > 60) {
    case true:
        alert('及格')
        break;
    case false:
        alert('不及格')
        break;
}
//while 循环
var i = 1;
while (i < 10) {
    console.log(i)
    i++;
}

var i = 1;
var sum = 0;
while (i <= 100) {
    sum += i
    i++;
}

//do...while至少循环一次
var i = 0;
do {
    console.log(i)
} while (i > 0)

for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum)


for (var i = 1, j = 1; i < 10; i++) {
    document.write(i + ' * ' + j + ' = ' + (i * j) + '<br>')
    j++;
}

for (var i = 1; i < 10; i += 2) {

    if (i == 7) {
        //break 中止循环 continue中止当前循环进度继续循环判定
        break;
    } else {
        document.write(i);
    }

}
var a = 1
a += 3 
alert(a)
var str1 = 'this is string'
var sth3 = "this is string, too"
var marriedStr = 'false'
var age = 22
var price = 1.01
var married = true
var married = false
var today = new Date() 
var year = today.getFullYear()
var month = today.getMonth() + 1
var day = today.getDate()
var week = today.getDay()
console.log(year)
console.log(month)
console.log(day)
console.log(week)
var arr1 = new Array(
    "星期日", 
    "星期一", 
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
)
var arr2 = [1, 'str', true, 1.23, arr1]

var arr3 = new Array()
arr3[0] = 'a'
arr3[10] = 10
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(typeof null) 
console.log(typeof undefined) 
console.log(null == undefined) 
console.log(null === undefined)
console.log(typeof arr1)
console.log(typeof str1)
console.log(typeof a)

married = true
console.log(true)
console.log(married.toString())
console.log(age)
console.log(age.toString())
console.log(parseInt('24.55'));
console.log(parseInt(24.555))
console.log(parseInt('12green'))
console.log(parseInt('green'))
console.log(parseInt('green12'))
console.log(parseFloat('24.55'))
console.log(parseFloat(24.555))
console.log(isNaN('blue'))
if (!isNaN(age)) {
    console.log('这是一个数字')
}
var x 
console.log(x)
console.log(typeof (x) == 'undefined')
var i = 10;
var a = i++;
console.log(a) 
console.log(i) 
var i = 10;
var b = ++i;
console.log(b)
console.log(i)
var z = 1;
var y = 2;
console.log(y < z && y > 0);
console.log(y < z || y > 0);
