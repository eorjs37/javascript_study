//발행자
const publisher = {
    subscribers: {
        any: []
    },
    subscribe: function (fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === "undefined") {
            this.subscribers[type] = []
        }

        this.subscribers[type].push(fn)
    },
    unsubscribe: function (fn, type) {
        this.visitSubscribers('undescribe', fn, type)
    },
    publish: function (publication, type) {
        this.visitSubscribers('publish', publication, type)
    },
    visitSubscribers: function (action, arg, type) {
        let pubType = type || 'any',
            subscribers = this.subscribers[pubType],
            i,
            max = subscribers ? subscribers.length : 0;

        for (i = 0; i < max; i++) {
            if (action === 'publish') {
                subscribers[i](arg);
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
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
            o[i] = publisher[i]
        }
    }
    o.subscribers = { any: [] }
}


const paper = {
    daily: function () {
        this.publish("big news today")
    },
    monthly: function () {
        this.publish("interesting analysis", "monthly")
    }
}


makePublisher(paper);


const joe = {
    drinkCoffee: function (paper) {
        console.log(paper + " 를 읽었습니다.");
    },
    sundayPreNap: function (monthly) {
        console.log("잠들기 전에 " + monthly + "를 읽고 있습니다.");
    }
}

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, "monthly")


paper.daily();
paper.monthly();