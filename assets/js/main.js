/*
Fill the class (check at the end for expected output)
*/
class registerUser {
  constructor(name, password) {
    this.name = name;
    this.password = password;
    this.registrationDate = Date(Date.UTC());
  }
  get name() {
    return this._name;
  }
  get pass() {
    return this.password;
  }
  set name(value) {
    this._name = value;
  }
  set pass(value) {
    this.password = value;
  }
  showInfo() {
    console.log(
      `The user "${this.name}" has the password "${
        this.pass
      }" and has been registrated since ${this.registrationDate}.`
    );
  }
}
let user = new //Create a new registered user and set username & pass
registerUser("Leo", "oldSecret");
//Print username + password+registration date
user.showInfo();
//Update the user
user.name = "Leandro";
//Update the pass
user.pass = "newSecret";
//Show user data
user.showInfo();
