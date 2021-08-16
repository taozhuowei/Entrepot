function Parent(name) {
    this.firstName = name;
}

function Son() {
    Parent.call(this , 'tom');
    this.lastName = 'jones';
}

Son.prototype = Object.create(Parent.prototype);
Son.prototype.constructor = Son;
