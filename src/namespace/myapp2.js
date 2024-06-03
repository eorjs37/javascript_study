let MYAPP = null;
MYAPP = MYAPP || {}

//생성자
MYAPP.Parent = function(){};
MYAPP.Child = function(){};

//변수
MYAPP.some = 1;

//객체 컨테이너
MYAPP.modules = {}

MYAPP.modules.module1  = {}
MYAPP.modules.module1.data  = {a:1,b:2}
MYAPP.modules.module2  ={}