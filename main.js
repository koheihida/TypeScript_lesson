var User = /** @class */ (function () {
    /*
    *
    */
    function User(_name) {
        this._name = _name;
    }
    /*
    *public
    */
    // name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    // 4-7行目をリファクタリング
    // constructor(public name: string) {
    // }
    User.prototype.sayHi = function () {
        console.log("Hi!! I'm " + this.name);
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var tom = new User("TOM");
tom.name = "tmo";
console.log(tom.name);
tom.sayHi();
console.log("hello world");
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(5, ""));
