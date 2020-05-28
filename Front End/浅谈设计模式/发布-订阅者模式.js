//simple
function applySuccess() {
  MessageCenter.fetch();
  Order.update();
  Checker.alert();
}

//订阅-发布者模式
class EventEmit {
  constructor() {
    this.events = {};
  }
  //on的作用实际上就是将相关元素注册为subscriber
  on(actionName, cb) {
    if (this.events[actionName]) {
      this.events[actionName].push(cb);
    } else {
      this.events[actionName] = [cb];
    }
  }
  //trigger的作用实际上就是发布者触发一个更新命令
  trigger(actionName, ...args) {
    if (this.events[actionName]) {
      this.events[actionName].forEach((cb) => {
        cb(args);
      });
    }
  }
}

//testUnit

let eventEmit = new EventEmit();
eventEmit.on("success", () => {
  console.log("MessageCenter fetching successfully!");
});
eventEmit.on("success", () => {
  console.log("Order updating successfully!");
});
eventEmit.on("success", () => {
  console.log("Checker alerting successfully!");
});


eventEmit.trigger('success')


