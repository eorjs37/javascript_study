function SandBox(){
    var args = Array.prototype.slice.call(arguments),
    callback = args.pop(),
    modules = (args[0] && typeof args[0] === "string") ? args : args[0],
    i;

    // 함수가 생성자로 호출되도록 보장한다
    if(!(this instanceof SandBox)){
        return new SandBox(modules,callback)
    }

    // this에 필요한 프로퍼티를 추가한다
    this.a = 1;
    this.b = 2;


}