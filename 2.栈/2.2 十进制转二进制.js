/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 09:18:29
 * @LastEditTime: 2019-08-18 09:39:10
 * @LastEditors: Please set LastEditors
 */

const Stack = require('./2.1 栈的封装')

function dec2Bin(decNumber){
    let result;
    const stack = new Stack();

    // 将余数存入栈中
    while(decNumber > 0){
        result = decNumber % 2;
        decNumber = Math.floor(decNumber/2);
        stack.push(result);
    }
    
    // 将栈中的元素从上到下依次取出，即为最终的结果
    let output = ''
    while(!stack.isEmpty()){
        output += stack.pop();
    }

    return output
}

console.log(dec2Bin(689))