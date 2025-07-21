function throttle(fn, delay) {
    let lastExecuted = 0;
    return function (...args) {
        const currentTime = Date.now();
        // if (currentTime - lastExecuted < delay) {
        //     return
        // }
        // return fn
        if (currentTime - lastExecuted >= delay) {
            fn.apply(this, args);
            lastExecuted = currentTime;
        }
    };
}

function sendChatMessage(message) {
    console.log(`Sending message: ${message}`);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2000);

sendChatMessageWithSlowMode('Hi')
sendChatMessageWithSlowMode('Hello')
sendChatMessageWithSlowMode('Hello ji')
sendChatMessageWithSlowMode('Kya ji, kese ho')
