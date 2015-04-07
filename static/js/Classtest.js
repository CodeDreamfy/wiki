function Person() {
    if (!(this instanceof Person)) {
        return new Person();
    }
    var name;
    this.getName = function () {
        return name;
    };
    this.setName = function (value) {
        name = value;
        return true;
    };
//    Inheritance.call(this, Son());
    Son.apply(this);
}

function Son() {
    if (this == window && !(this instanceof Son)) {
        return new Son();
    }
    this.age = null, this.sex = null;
    this.getAge = function () {
        return this.age;
    };
    this.setAge = function (value) {
        this.age = value;
        return true;
    };
    this.getSex = function () {
        return this.sex;
    };
    this.setSex = function (value) {
        this.sex = value;
        return true;
    };
}
function Inheritance(object) {
    for (var key in object) {
        this[key] = object[key];
    }
}


var Static = function () {
    var number = 0;
    return function (num) {
        if (!(this instanceof Static)) {
            return new Static(num);
        }
        this.getNumber = function () {
            return number;
        };
        this.setNumber = function (value) {
            number = value;
        };
        if (num) {
            this.setNumber(num);
        }
    }
}();

var Class = {
    create: function (object) {
        return function () {
            object.initialize.apply(this, arguments);
        };
    }
};

var man = Person();
man.setName('name');
man.setAge(18);
console.log(man.getName(), man.getAge(),man);
console.log('------------------');
var num = Static(3);
console.log(num.getNumber(),num);
console.log('------------------');
var user = Class.create({
    initialize: function (a, b) {
        console.log(a, b);
    }
});
new user(1, 2);
