function threesfives(){
    let sum = 0;
    for (let i = 100; i <= 4000000; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
        console.log("the sum is:" + sum);
      }
      }
      return sum;
    }
  
  threesfives();