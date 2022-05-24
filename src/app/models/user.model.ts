export class User {
    _id?: String;
    username: String;
    password: String;
    constructor(nUsername: String, nPassword: String) {
        this.username = nUsername
        this.password = nPassword
    }
  }
  