let i = 0
input.onGesture(Gesture.Shake, function () {
    i = randint(0, 100)
    basic.showNumber(i)
    if (i < 60) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
basic.forever(function () {
	
})
