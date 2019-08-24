/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 11:25:43
 * @LastEditTime: 2019-08-24 11:54:48
 * @LastEditors: Please set LastEditors
 */
const Queue = require('./3.1 队列的封装');

// 设置游戏规则
function GamePass(nameList,num){
    // 1.创建队列
    const queue = new Queue();
    
    // 2.往队列中添加人
    for(var i = 0; i < nameList.length; i++){
        queue.enQueue(nameList[i]);
    }

    // 3.决出游戏的胜利者
    while(queue.size() > 1){
        // num之前的人全部移到队列尾部
        for (var i = 0; i < num-1; i++) {
            queue.enQueue(queue.deQueue());    
        }
        // num处的人离开队列
        queue.deQueue();
    }

    // 4.最后的胜利者
    return winner = queue.front();
}

// 开始游戏
var name = GamePass(['赵大','钱二','孙三','李四','周五'],3);
console.log(name)