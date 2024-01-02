function callFetch() {

    fetch("https://stream.aplayz.co.kr/broadcast/360359e721729deabc8266029756b36f.m3u8")
        .then((res) => {
            console.log(res.body);
        })
}

callFetch()