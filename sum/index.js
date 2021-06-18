'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result = result + num;
  }
  return result;
}

/**
 * 数値の配列を受け取って、その要素を全て掛け合わせた値を返す関数
 */
function multi(multinumbers){
  let multiresult = 1;
  for (const multinum of multinumbers){
    multiresult =multiresult * multinum;
  }
  return multiresult;
}

module.exports = { add };
module.exports = {multi};
