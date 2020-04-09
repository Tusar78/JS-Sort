//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
var a = -10;
var b = 3;
var c = 54;

if(a > b && a > c) {
    if (b > c) {
        console.log(a,b,c)
    } else {
        console.log(a,c,y)
    }
} else if (b>c && b > a) {
    if(c>a) {
        console.log(b,c,a)
    } else {
        console.log(b,a,c)
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log(c,a,b)
    } else {
        console.log(c,b,a)
    }
}