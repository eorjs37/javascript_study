function Gadget(){
    let name = "Ipod";

    this.getName = function(){
        return name;
    }
}

Gadget.prototype = (function(){
  //비공개 멤버
  let broswer = 'Mobile Webkit';
  return{
    getBrowser:function(){
        return broswer;
    }
  }
}())