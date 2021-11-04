function 燈數 (num: number, 亮燈: boolean) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num < 17) {
        x = 0
        y = 17 - num
    }
    if (input.buttonIsPressed(Button.A)) {
        led.plot(x, y)
    } else {
        if (亮燈) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (a < 17) {
        while (true) {
            a += 1
            燈數(a, true)
            basic.pause(100)
            while (a > 17) {
                a = 0
                basic.clearScreen()
            }
        }
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        while (true) {
            a += 1
            燈數(a - 1, false)
            if (a > 17) {
                a = 1
            }
            燈數(a, true)
            basic.pause(100)
            basic.clearScreen()
        }
    } else {
        basic.clearScreen()
    }
})
let y = 0
let x = 0
let a = 0
a = 0
