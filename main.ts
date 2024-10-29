function PinClear () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function ButtonAFunction () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(500)
    TogglePin01OnOff100()
    Pin01AlternateOnOff100()
    TogglePin01OnOff100()
    Pin01AlternateOnOff100()
    PinClear()
}
function TogglePin01OnOff100 () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
}
function ButtonA () {
    for (let index = 0; index < 4; index++) {
        ButtonAFunction()
    }
}
function Pin01AlternateOnOff100 () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(100)
    PinClear()
}
function ButtonBFunction () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(99)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(101)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(102)
    PinClear()
    basic.pause(102)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    PinClear()
    basic.pause(100)
}
function ButtonB () {
    for (let index = 0; index < 4; index++) {
        ButtonBFunction()
    }
    for (let index = 0; index < 2; index++) {
        TogglePin01OnOff100()
        Pin01AlternateOnOff100()
    }
}
let AmountWait = 0
TogglePin01OnOff100()
PinClear()
for (let index = 0; index < 10; index++) {
    TogglePin01OnOff100()
}
Pin01AlternateOnOff100()
basic.forever(function () {
    basic.pause(100)
    AmountWait += 1
    if (input.buttonIsPressed(Button.A)) {
        AmountWait = 0
        ButtonA()
    } else if (input.buttonIsPressed(Button.B)) {
        AmountWait = 0
        ButtonB()
    } else {
        if (AmountWait == 30) {
            TogglePin01OnOff100()
            AmountWait = 0
        }
    }
})
