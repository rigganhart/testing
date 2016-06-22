// its time to meet the muppets
class Muppet {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
  }
  speak(){
    console.log("Wakka Wakka");
  }
}

class Frog extends Muppet {
  constructor(props){
    super(props)
    this.color = props.color;
  }
  speak(){
    console.log("Ribbit Ribbit");
  }
}


var kermit = new Frog({
  name: "Kermit",
  age: 3,
  color: "green"
});

var fozzy = new Muppet({
  name:"Fozzy",
  age: 2
})
//end of the muppet show


//arithmatic
var sum = (num1,num2)=> num1 + num2;

var subtract =(num1,num2)=> num1 - num2;

var divide = (num1,num2)=> num1 / num2;

var multiply = (num1,num2) => num1 * num2;


//welcome to the big time
//es6 seems to act weird if i change to fat arrows
function summation(arr) {
    var sum = 0;
    for( i = 0; i<arr.length; i++) {
      sum = sum+ arr[i]
    }
    return sum;
  }

//given a string, for each character in the string, if the character is a number, replace the number with the string "1337"
function leet(str){

  var splitStr = str.split("")
  console.log(splitStr);
  splitStr.map(function(el){
    console.log(`this is the index: ${splitStr.indexOf(el)} and this is the element: ${el}` );
    if(el.indexOf("0") !== -1 || el.indexOf("1") !== -1 || el.indexOf("2") !== -1 || el.indexOf("3") !== -1 || el.indexOf("4") !== -1 || el.indexOf("5") !== -1 || el.indexOf("6") !== -1 || el.indexOf("7") !== -1 || el.indexOf("8") !== -1 || el.indexOf("9") !== -1){
      splitStr.splice(splitStr.indexOf(el),1,"1337")
    }
    console.log(splitStr);
    var leetStr = splitStr.join('');
    console.log(leetStr);
  })
}


function sum_recursive(myArray) {

  var sumLists = 0;
  myArray.forEach(function(el,idx,arr){
    sum=0;
    for(i=0;i<el.length; i++){
      sum = sum + el[i]
    }
    return sum
  })
  sumLists= sumLists + sum
  return sumLists
}
