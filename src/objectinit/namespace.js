let MYAPP = {};

MYAPP.namespace = function(ns_string){
    let parts  = ns_string.split('.'),
        parents = MYAPP,
        i;

    if(parts[0] === 'MYAPP'){
        parts = parts.slice(1);
    }

    for(i = 0 ; i < parts.length ; i++){
        //
        if(typeof parents[parts[i]] === "undefined"){
            parents[parts[i]] ={}
        }
        parents =parents[parts[i]]
    }

    return parents;
}

console.log(MYAPP.namespace('MYAPP.module.module2'));
console.log(MYAPP.namespace('MYAPP.module'));