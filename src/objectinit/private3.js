let myarray;

(function(){
    let astr = "[object Array]",
    toString = Object.prototype.toString;

    function isArray(a){
        return toString.call(a) === astr
    }

    function indexOf(haystack,needle){
        let i=0,
        max = haystack.length;

        for(;i<max;i++){
            if(haystack[i] === needle){
                return i
            }
        }
        return -1;
    }

    myarray = {
        isArray:isArray,
        indexOf:indexOf,
        inArray:indexOf
    }
}())
console.log(myarray.isArray([1,2]));
