
import _ from 'lodash';

const sum = (n) => {
  if (n === 1) {
    return 1;
  }
 
  return sum(n - 1) + n;
};
  


console.log(sum(5))

/* smallestDivisor(15); // 3
smallestDivisor(17); // 17
 */
