const banList = ["qq.com", "gmail.com", "126.com"];

function SMTP(email) {
  //SMTP逻辑...
  console.log(email + " has been sent!");
}
class ProxyEmail {
  constructor(email, banList) {
    this.email = email;
    this.banList = banList;
  }
  sendEmail() {
    if (this.banList.indexOf(this.email)) {
      SMTP(this.email);
    } else {
      console.log("ur email has been banned...");
    }
  }
}

let test = new ProxyEmail("qq.com", banList);
test.sendEmail();
