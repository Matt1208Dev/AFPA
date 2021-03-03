//   TRI A BULLE

var array = [5, 18, 14, 4, 26];
var i = 0;


while (i < array.length) 
{
    if (array[i] > array[i+1])
    {
        var a = array[i];
        array[i] = array[i+1];
        array[i+1] = a;
        i=0;
    }  

    i++;
}

console.log(array);
