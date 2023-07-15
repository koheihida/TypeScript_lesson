class  User {

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

  sayHi(): void {
    console.log("Hi!! I'm " + this.name);
  }

  /*
  *
  */
  constructor(private _name: string) {
  }
  get name() {
    return this._name;
  }
  set name(newValue: string) {
    this._name = newValue;
  }
}

var tom = new User("TOM");
tom.name = "tmo"
console.log(tom.name);
tom.sayHi();
console.log("hello world");


// function add(a: number, b: number): number {
//   return a + b;
// }


// console.log(add(5, ""));
