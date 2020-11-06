//1

let counter = (function () {
    var count = 0;
    return function (num) {
      count = num === undefined ? count : num;
  
      return ++count;
    };
  }());
console.log(counter());
console.log(counter(50));
console.log(counter());

  //2

var counting = (function () {
  var count = 0;

  return {
    value(num) {
      if (num !== undefined) 
        count = num;

      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    }
  };
}());
  
console.log(counting.value()); 
console.log(counting.value(100));
counting.increment();
console.log(counting.value());
counting.decrement();
console.log(counting.value());

 //3

var myPrint = (a, b, res) => `${a}^${b}=${res}`;
var myPow = (a, b, callback) => { 
var pow = (x, n) => {
  if (n !== 1) return x *= pow(x, n - 1);
  return x;
  };
  return callback(a, b, pow(a, b));
  };
console.log(myPow(2, 4, myPrint));
console.log(myPow(3, 4, myPrint));

//4 //5 //6

function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}
var yearNow = new Date().getFullYear();
var car = {
  engine: 2001,
  model: 'X6',
  name: 'BMV',
  year: 2020,
  info: fullInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};
var car2 = {
  engine: 1900,
  model: 'Actavia',
  name: 'Shkoda',
  year: 2016,
  info: fullInfo,
  get used() {
    return yearNow - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};

console.log(car.info()); 
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info()); 
car.used = 'used';
console.log(car2.info());

//7

var arr = [202, 45, 34, 65, 100];
var myMax = function(arg) {
  Math.max.apply(Math, arg);
}
console.log(myMax(arr));
 

//8

function myMul(a, b) {
  return a * b;
}

var myDouble = myMul.bind(0, 2);
console.log(myDouble(6));

var myTriple = myMul.bind(0, 3);
console.log(myTriple(9));

//9

function myUniq(arr) {
  return new Set(arr); 
}

console.log(myUniq([2, 2, 22, 'aa', 'a', 'aa']));

