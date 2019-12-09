// What will the following code output to the console and why:

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// What is the issue with this code and how can it be fixed.