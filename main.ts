basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plot(i, 2)
            led.plot(2, i)
        }
        basic.pause(100)
    }
})
