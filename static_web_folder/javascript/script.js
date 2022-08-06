let result = document.getElementById("result").innerHTML;
let previous_operation;
let previous_num;

const operators = [
  "+",
  "-",
  "/",
  "*"
];

function operation(operator){
  previous_num = result;
  previous_operation = operator;
  result = " ";
  document.getElementById("result").innerHTML = " ";
}

const special_button = (ev) => {
  let element = ev.target.innerHTML;
  operation(element);
}

const del = (ev) => {
  result = " ";
  document.getElementById("result").innerHTML = " ";
}

const clicked = (ev) => {
    let element = ev.target.innerHTML;
    document.getElementById("result").innerHTML = result + element;
    result = document.getElementById("result").innerHTML;

}

const equal = (ev) => {
  if (previous_operation === "+") {
    let resulting_value = parseFloat(previous_num) + parseFloat(result);
    document.getElementById("result").innerHTML = String(resulting_value);
  }
  if (previous_operation === "-") {
    let resulting_value = parseFloat(previous_num) - parseFloat(result);
    document.getElementById("result").innerHTML = String(resulting_value);
  }
  if (previous_operation === "/") {
    let resulting_value = parseFloat(previous_num) / parseFloat(result);
    document.getElementById("result").innerHTML = String(resulting_value);
  }
  if (previous_operation === "*") {
    let resulting_value = parseFloat(previous_num) * parseFloat(result);
    document.getElementById("result").innerHTML = String(resulting_value);
  }
  result = document.getElementById("result").innerHTML;
}

const collection = document.getElementsByClassName("button");
for (let i = 0; i < collection.length; i++) {
  if(operators.includes(collection[i].innerHTML)){
    collection[i].addEventListener("click", special_button);
  }

  else if (collection[i].innerHTML === "="){
    collection[i].addEventListener("click", equal)
  }

  else if (collection[i].innerHTML === "DEL"){
    collection[i].addEventListener("click", del)
  }

  else{
    collection[i].addEventListener("click", clicked);
  }
}
