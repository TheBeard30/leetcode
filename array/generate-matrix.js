/**
 * 59. 螺旋矩阵
 * @param {number} n
 */
function generateMatrix(n){
  let startX  = 0;
  let startY = 0;
  let loop = Math.floor(n / 2);
  let middle = Math.floor(n / 2);
  let offset = 1;
  let count = 1;
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop --){
    let row = startX, col = startY;
    // 上行 从左到右（左闭右开）
    for(; col < startY + n - offset; col++){
      result[row][col] = count++;
    }
    // 右列 从上到下
    for(; row < startX + n - offset; row++){
      result[row][col] = count++;
    }
    // 下行 从右向左
    for(; col > startY; col--){
      result[row][col] = count++;
    }
    // 左列 从上到下
    for(; row > startX; row--){
      result[row][col] = count++;
    }
    // 更新起始位置
    startX++;
    startY++;

    // 更新offset
    offset += 2;
  }
  // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
  if (n % 2 === 1) {
    result[middle][middle] = count;
  }
  return result;
}