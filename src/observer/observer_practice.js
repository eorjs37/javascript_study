//발행자
// @ts-ignore
const publisher = {
    subscribers: {
        any: []//이벤트 타입
    },
    subscribe: function (fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = []
        }

        this.subscribers[type].push(fn)
    },
    undescribe: function (fn, type) { },
    publish: function (publication, type) { },
    visitSubscribers: function (action, arg, type) {
        let pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;
        for (let i = 0; i < max; i++) {
            if (action === 'publish') {
                subscribers[i](arg)
            }
            else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1)
                }
            }
        }
    }
}

function makePublisher(o) {
    let i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
            o[i] = publisher[i]
        }
    }
    o.subscribers = { any: [] }
}


// @ts-ignore
const paper = {
    daily: function () {
        this.publish("big news today")
    },
    monthly: function () {
        this.publish("interesting analysis", "monthly")
    }
}


makePublisher(paper);


// @ts-ignore
const joe = {
    drinkCoffee: function (paper) {
        console.log(paper + "를 읽었습니다.");
    },
    sundayPreNap: function (monthly) {
        console.log("잠들기 전에" + monthly + "를 읽고 있습니다.");
    }
}
