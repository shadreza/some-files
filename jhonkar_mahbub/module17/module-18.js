a=[1,2,3,4,5];
console.log(doubleElements(a));
function doubleElements(a) {
    for (let i = 0; i < a.length; i++) {
        if(a[i]%2==1){
            a[i]*=2;
        }
    }
    return a;
}