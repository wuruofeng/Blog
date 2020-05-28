class Miaoz {
  ability() {
    console.log("speak Chinese");
  }
}

class Decorator {
  constructor(old) {
    this.old = old;
  }
  //赋能
  Empowerment() {
    console.log("speack English fluently");
  }

  //装饰之后的对象

  newPerson() {
    this.old.ability();
    this.Empowerment();
  }
}


let miaoz = new Miaoz();
let new_miaoz = new Decorator(miaoz);
new_miaoz.newPerson()