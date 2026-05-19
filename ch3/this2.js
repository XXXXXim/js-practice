const myobj = {
    numbers : [1,2,3],
    myfunction : function() {
        console.log(this)
        this.numbers.forEach(0)
    }
}

myobj.myfunction()