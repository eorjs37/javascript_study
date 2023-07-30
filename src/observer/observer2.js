const publisher = {
    subscribers: {
        any: []// '이벤트 타입:구독자의 배열'의 형식
    },
    subscribe: function (fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = []
        }
        this.subscribers[type].push(fn)
    },
    undescribe: function (fn, type) {
        this.visitSubscribers('undescribe', fn, type)
    },
    publish: function (publication, type) {
        this.visitSubscribers('publish', publication, type)
    },
    visitSubscribers: function (action, arg, type) {
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;

        for (i = 0; i < max; i += 1) {
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
    var i;
    for (i in publisher) {
        if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
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
        console.log(paper + "를 읽었습니다.");
    },
    sundayPreNap: function (monthly) {
        console.log("잠들기 전에" + monthly + "를 읽고 있습니다.");
    }
}

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap)

paper.daily();
paper.daily();
paper.daily();