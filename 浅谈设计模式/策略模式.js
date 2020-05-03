// //if-else
// function AuthCheck(data) {
//   if (!data.isLogin) {
//     console.log("用户未登录！");
//     return false;
//   }
//   if (data.UserGroup !== "some groups") {
//     console.log("用户组过低!");
//     return false;
//   }
//   if (!data.vip) {
//     console.log("用户不是Vip!");
//     return false;
//   }
// }
//strategies
let strategies = {
  checkLoginState: (val) => {
    if (val === "true") return true;
    return false;
  },
  checkGroups: (val) => {
    if (val === "some groups") return true;
    return false;
  },
  checkVip: (val) => {
    if (val === "true") return true;
    return false;
  },
};

//Validator
class Validator {
  constructor() {
    this.strategiesList = [];
  }
  add(method, val) {
    this.strategiesList.push(() => {
      return strategies[method](val);
    });
  }
  check() {
    let len = this.strategiesList.length;
    for (let i = 0; i < len; i++) {
      let validation = this.strategiesList[i];
      let type = validation();
      if (!type) {
        return false;
      }
    }
    return true;
  }
}

//testUnit
let json = {
    isLogin:'true',
    UserGroup:'level_1',
    isVip:'false'
}
let validator = new Validator();
validator.add("checkLoginState", json.isLogin);
validator.add("checkGroups", json.UserGroup);
validator.add("checkVip", json.isVip);
console.log(validator.check());
