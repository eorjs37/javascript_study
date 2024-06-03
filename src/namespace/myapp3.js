var APP = APP || {};

APP.namespace  = function(ns_string){
    
    let parts = ns_string.split('.'),
    parent = APP,
    i;
    if(parts[0] === 'MYAPP'){
        parts = parts.slice(1);
    }
    
    for(i = 0 ; i < parts.length ; i++){
        //프로퍼티가 존재하지 않으면 생성한다
        if(typeof parent[parts[i]] === "undefined"){
            parent[parts[i]] = {}
        }
        parent = parent[parts[i]];
    }

    return parent;
}

const moduel2 = APP.namespace('MYAPP.modules.modules2');
console.log(moduel2);