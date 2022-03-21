
// datatypes are the basic of any PL
var student = "Purnima" // string datatype = sentence
var studentAge = 33 //integer|int = number
var avrgNotes = 88.15 //float
var no = "$" //char
var doYouLoveCode = true //boolean
var classlist = ["Purnima", "Gimena", "Rene", "Sandhya"] //Array
/**todo: print the first variable, with the third variable
 in the same output message, and add to it the second value
 from the array of strings**/
console.log("Student Name is:" , student.toUpperCase() , avrgNotes , "her best friend is:" , classlist[1])

function RandomColor(){
    document.getElementById("ColoredText").style.color = Color();

}
function Color(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16)}
// FunctionName() = parameters
// [] Arrays | Lists
// {} = Body of function algorithm  | .format()
// // < > = html tags only!