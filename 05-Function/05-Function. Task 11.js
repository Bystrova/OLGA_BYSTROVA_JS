var employee = {
    name: 'Ann',
    work: function () {
        console.log("I'm " + this.name + ".I'm working...");
    }
};
employee.work();
