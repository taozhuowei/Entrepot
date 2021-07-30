let add = (function() {
    let counter = 0;
    return function () {
        console.log(counter++);
    }
})();

add();
add();
add();