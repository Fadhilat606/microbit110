function Left () {
    while (true) {
        if (I1 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            0
            )
            stage_index = stage_index + 1
            basic.pause(600)
            return 0
        } else if (I2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            0
            )
        } else if (I4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M1,
            -150
            )
        } else if (I3 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            -255
            )
        } else if (I5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -255
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            255,
            SuperBit.enMotors.M3,
            255
            )
        }
    }
}
function Right () {
    while (true) {
        if (I5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -255
            )
            stage_index = stage_index + 1
            basic.pause(600)
            return 0
        } else if (I4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -150
            )
        } else if (I2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M1,
            0
            )
        } else if (I3 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            -255
            )
        } else if (I1 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            0
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            255,
            SuperBit.enMotors.M3,
            255
            )
        }
    }
}
function Straight () {
    while (true) {
        if (I1 == 0 && I5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            -255
            )
            stage_index = stage_index + 1
            basic.pause(600)
            return 0
        }
        if (I2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -150,
            SuperBit.enMotors.M3,
            0
            )
        } else if (I4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -150
            )
        } else if (I3 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            -255
            )
        } else if (I1 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            0
            )
        } else if (I5 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            0,
            SuperBit.enMotors.M3,
            -255
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            255,
            SuperBit.enMotors.M3,
            255
            )
        }
    }
}
let I5 = 0
let I3 = 0
let I4 = 0
let I2 = 0
let I1 = 0
let stage_index = 0
led.enable(false)
let stage_list = [
"L",
"R",
"R",
"S",
"L",
"L",
"S",
"R",
"R",
"S",
"L",
"L",
"R",
"F"
]
stage_index = 0
basic.forever(function () {
    I1 = pins.digitalReadPin(DigitalPin.P1)
    I2 = pins.digitalReadPin(DigitalPin.P2)
    I3 = pins.digitalReadPin(DigitalPin.P3)
    I4 = pins.digitalReadPin(DigitalPin.P4)
    I5 = pins.digitalReadPin(DigitalPin.P5)
    basic.showString("" + (stage_list[stage_index]))
})
basic.forever(function () {
    if (stage_list[stage_index] == "L") {
        Left()
    } else if (stage_list[stage_index] == "R") {
        Right()
        if (stage_index == 13) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            255,
            SuperBit.enMotors.M3,
            255
            )
            basic.pause(300)
            while (true) {
                SuperBit.MotorRunDual(
                SuperBit.enMotors.M1,
                0,
                SuperBit.enMotors.M3,
                0
                )
            }
        }
    } else if (stage_list[stage_index] == "S") {
        Straight()
    }
})
