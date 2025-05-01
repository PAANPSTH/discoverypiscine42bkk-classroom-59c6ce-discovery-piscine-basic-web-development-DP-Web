function calculate() {
    const inputleft = document.getElementById("input1");
    const operator = document.getElementById("operators");
    const inputright = document.getElementById("input2");

    const leftval = parseInt(inputleft.value);
    const operatorval = operator.value;
    const rightval = parseInt(inputright.value);

    if (isNaN(leftval) || isNaN(rightval) || leftval < 0 || rightval < 0) {
      alert("Error :(");
      return;
    }

    let result;
      
    switch (operatorval) {
        case '+':
          result = leftval + rightval;
          break;
        
          
        case '-':
          result = leftval - rightval;
          break;
        
        case '*':
          result = leftval * rightval;
          break;
        
        case '/':
          if (rightval === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
          }
          result = leftval / rightval;
          break;
        
        case '%':
          if (rightval === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
          }
          result = leftval % rightval;
          break;
    }

    alert("Result: " + result);
    console.log("Result: " + result);

}

setInterval(() => {
    alert("Please, use me...");
    }, 30000);