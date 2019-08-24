/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 11:55:01
 * @LastEditTime: 2019-08-24 13:27:08
 * @LastEditors: Please set LastEditors
 */

// 优先级队列的封装
function PriorityQueue(){
    this.items = [];
    // 队列里的元素封装,类型为对象
    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    }

    // 往队列里添加元素
    PriorityQueue.prototype.enQueue = function(element,priority){
        const queueElement =  new QueueElement(element,priority);

        if(this.items.length === 0){
            this.items.push(queueElement);
        }else{
            let isAdded = false
            for (let i = 0; i < this.items.length; i++) {
                if(queueElement.priority < this.items[i].priority){
                    this.items.splice(i,0,queueElement);
                    isAdded = true;
                    break;
                }
            }   
            if(!isAdded){
                this.items.push(queueElement);
            }
        }
    }

    // 从前端取出元素
    PriorityQueue.prototype.deQueue = function(){
        return this.items.shift();
    };

    // 查看第一个元素
    PriorityQueue.prototype.front = function(){
        return this.items[0];
    };

    // 判断队列是否为空
    PriorityQueue.prototype.isEmpty = function(){
        return this.items.length === 0
    }

    // 获取队列的长度
    PriorityQueue.prototype.size = function(){
        return this.items.length;
    }

    // 打印队列中的元素
    PriorityQueue.prototype.toString = function(){
        let list = '';
        for (const i in this.items) {
            list = `${list} {${this.items[i].element},${this.items[i].priority}}`;
        }
        return list;
    }
}

// 测试优先级队列
const pq = new PriorityQueue();
console.log('往优先级队列中添加元素');
pq.enQueue("老王",5)
pq.enQueue("东厂",2)
pq.enQueue("渣渣",1)
pq.enQueue("辣鸡",4)
pq.enQueue("法克",3)
console.log(pq.toString())


