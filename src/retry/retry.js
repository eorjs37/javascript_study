const retry =  (n = 0)=>{
    const timeOut = n === 0 ? 0 : 1500;

    if(n < 10){
        return retry(n+1);
    }else{
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve('success')
            }, timeOut);
        })
        
    }

}

async function call(){
 const result = await retry(0)
 console.log(result);
 
}

call();