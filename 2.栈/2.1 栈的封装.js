/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 08:30:28
 * @LastEditTime: 2019-08-24 11:07:16
 * @LastEditors: Please set LastEditors
 */

// 封装栈结构--使用数组封装
function Stack (){
    this.items = [];
    
    Stack.prototype.push = function(element){
        this.items.push(element);
    }

    Stack.prototype.pop = function(){
        return this.items.pop();
    }

    Stack.prototype.peek = function(){
        return this.items[this.items.length - 1];
    }

    Stack .prototype.isEmpty = function(){
        return this.items.length === 0
    }

    Stack.prototype.size = function(){
        return this.items.length;
    }

    Stack.prototype.toString = function(){
        let list = '';
        for (const i in this.items) {
            list = list + this.items[i] + ' ';
        }
        return list;
    }
}

module.exports = Stack;

// 测试封装的栈结构
// var stack = new Stack();

// console.log('栈是否为空：' + stack.isEmpty());

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log('往栈里一次加入1-2-3-4')

// console.log('栈的长度是：' + stack.size())

// console.log('弹出前的栈元素：' + stack.toString());

// console.log('弹出栈顶元素')

// stack.pop();

// console.log('弹出后的栈元素：' + stack.toString())

// console.log('栈顶元素是：' + stack.peek())