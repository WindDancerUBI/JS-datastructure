/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 11:05:10
 * @LastEditTime: 2019-08-24 11:44:39
 * @LastEditors: Please set LastEditors
 */

// 队列的封装--使用数组封装
function Queue(){
    this.items = [];

    // 从后端添加元素
    Queue.prototype.enQueue = function(element){
        this.items.push(element);
    };

    // 从前端取出元素
    Queue.prototype.deQueue = function(){
        return this.items.shift();
    };

    // 查看第一个元素
    Queue.prototype.front = function(){
        return this.items[0];
    };

    // 判断队列是否为空
    Queue.prototype.isEmpty = function(){
        return this.items.length === 0
    }

    // 获取队列的长度
    Queue.prototype.size = function(){
        return this.items.length;
    }

    // 打印队列中的元素
    Queue.prototype.toString = function(){
        let list = '';
        for (const i in this.items) {
            list = list + this.items[i] + ' ';
        }
        return list;
    }
}

module.exports = Queue

// 测试队列
// var queue = new Queue();

// console.log("检查队列是否为空");
// console.log(queue.isEmpty());

// console.log("往队列添加元素后");
// queue.enQueue("jack");
// queue.enQueue("rose");
// queue.enQueue("mike");
// console.log(queue.toString());

// console.log("取出第一个元素后");
// queue.deQueue();
// console.log(queue.toString());

// console.log("查看第一个元素");
// console.log(queue.front());
// console.log("查看不影响第一个元素,其长度和元素为");
// console.log(queue.size());
// console.log(queue.toString());


