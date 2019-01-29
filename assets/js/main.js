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
    console.log(`User name: ${this._name}`);
  }
  get pass() {
    console.log(`User password: ${this.password}`);
  }
  set name(value) {
    this._name = value;
  }
  set pass(value) {
    this.password = value;
  }
  showInfo() {
    console.log(
      `The user "${this._name}" has the password "${
        this.password
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
