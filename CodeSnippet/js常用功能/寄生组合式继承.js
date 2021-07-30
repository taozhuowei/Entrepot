function Parent() {
    this.firstName = 'jack';
}

function Son() {
    Parent.call(this);
    this.lastName = 'jones';
}

Son.prototype = Object.create(Parent.prototype);
Object.setPrototypeOf(Son , Parent);
Son.prototype.constructor = Son;