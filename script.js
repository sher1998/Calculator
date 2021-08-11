// Use insert() function to insert the number in textview.  
function insert(num)   
{  
document.Calculator.textview.value = document.Calculator.textview.value + num;  
}  
  
// Use equal() function to return the result based on passed values.  
function result()  
{  
var exp = document.Calculator.textview.value;  
if(exp==='')
{
    swal("Input Can't  empty", "Please write numbers", "warning", {
        button: "Ok",
      });
}
else 
{  
    document.Calculator.textview.value = eval(exp);
}  
}  
  
/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */  
function backspace()  
{  
var exp = document.Calculator.textview.value;  
document.Calculator.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  
