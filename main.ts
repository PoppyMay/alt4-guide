serial.redirectToUSB()
basic.forever(function () {
    basic.showNumber(input.temperature())
    serial.writeNumber(input.temperature())
    if (input.temperature() > 28) {
        while (input.temperature() > 28) {
            basic.showNumber(input.temperature())
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        if (input.temperature() < 25) {
            while (input.temperature() < 25) {
                basic.showNumber(input.temperature())
                pins.servoWritePin(AnalogPin.P1, 180)
            }
            pins.servoWritePin(AnalogPin.P1, 90)
        } else {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
    }
})
