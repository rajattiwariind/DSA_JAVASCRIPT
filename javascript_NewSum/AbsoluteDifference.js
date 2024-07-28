function findDifference(a,b)
{
    return a-b;
}
function findAbsolute(x)
{
    if(x<0)
    {
        x=-1*x;
    }
    return x;
}
var output1 = findDifference(10,14)
console.log(output1);
var output2 = findAbsolute(output1);
console.log("Final Output:",output2);
