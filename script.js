// var, let,const
console.log(b)
var a=20;
var a =15;
a = 30;
let b =20;

b =30;
const c=10;
c =20;
// var is a function  scoped variable and let, const are block scoped variables 
function sum ()
{
    if (true)
    {
        let x = 25;
    }
    console.log(x)
}
