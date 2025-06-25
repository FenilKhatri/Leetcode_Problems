let num1 = [-2,-1,0,1,2];
let num2 = [-3,-1,2,4,5];
let k = 3, multiply = [];

function numTraverse(num1, num2) {
      for (let i = 0; i < num1.length; i++) {
            for (let j = 0; j < num2.length; j++) {
                  multiply.push(num1[i] * num2[j]);
            }
      }
      console.log(multiply[k - 1]);
}

numTraverse(num1, num2);