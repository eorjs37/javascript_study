/**
 * @description 여러번 시도 하는 함수
 * @param {*} n 시도 횟수
 * @param {*} successFn 성공하였을때 함수
 * @param {*} failFn 실패하였을때 함수
 */
const retry =  (n = 0,successFn,failFn) =>{
    const timeOut = n === 0 ? 0 : 200;

    if(n < 11){
        setTimeout(async () => {
            return  fetch(`http://localhost:3000/dummy?n=${n}`,{
                method:'get',
            })
            .then(res=>{
                if(res.status === 200){
                    return res.json()    
                }else{
                    throw Error(res.status)
                }
            })
            .then((res)=>{
                if(successFn){
                    successFn(res)
                }
            })
            .catch(async err=>{
                return retry(n+1,successFn,failFn)
            })
        }, timeOut);
    }else{
        if(failFn){
            failFn(`retry error ${n}`)
        }
    }

}


/**
 * @description 성공콜백 함수
 * @param {*} res 성공했을때 결과값
 */
function successFn(res){
    // 성공했을때의 로직작성..
    console.log('success : ',res);
}

/**
 * @description 실패콜백 함수
 * @param {*} errormseeage 에러메세지
 */
function failFn(errormseeage){
    // 실패했을때의 로직작성..
    console.log(errormseeage);
}
retry(0,successFn,failFn)
