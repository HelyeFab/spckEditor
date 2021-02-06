class User {
  constructor(name, email) {
    this.name = name;
      this.email = email;
      this.score = 0;
  }
  loggedIn() {
      console.log(`${this.name} just logged in`);
      return this
  }
  loggedOut() {
      console.log(`${this.name} just logged out`);
      return this
  }
    updateScore() {
        this.score++
        console.log(`${this.name} 's score is now ${this.score}`);
    }
}

let userOne = new User('Emmanuel', 'ele@fab.com');

console.log(userOne.updateScore());

console.log(userOne.loggedIn().loggedOut().updateScore());