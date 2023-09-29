function Left () {
    if (I1 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M1,
        0
        )
        basic.pause(600)
        stage = stage + 1
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
        SuperBit.enMotors.M1,
        -255
        )
    } else if (I4 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M1,
        -150
        )
    } else if (I5 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M1,
        -255
        )
    } else {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M1,
        255
        )
    }
}
function Right () {
    if (I5 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M1,
        -255
        )
        basic.pause(600)
        stage = stage + 1
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
        SuperBit.enMotors.M1,
        -255
        )
    } else if (I2 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -150,
        SuperBit.enMotors.M1,
        0
        )
    } else if (I1 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M1,
        0
        )
    } else {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M1,
        255
        )
    }
}
function Straight () {
    if (I1 == 0 && I5 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M1,
        -255
        )
        basic.pause(600)
        stage = stage + 1
    }
    if (I1 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M1,
        0
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
        SuperBit.enMotors.M1,
        -255
        )
    } else if (I4 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M1,
        -150
        )
    } else if (I5 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M1,
        -255
        )
    } else {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M1,
        255
        )
    }
}
let I5 = 0
let I4 = 0
let I3 = 0
let I2 = 0
let I1 = 0
let stage = 0
led.enable(false)
let text_list = [
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
"R"
]
stage = 0
basic.forever(function () {
    I1 = pins.digitalReadPin(DigitalPin.P1)
    I2 = pins.digitalReadPin(DigitalPin.P2)
    I3 = pins.digitalReadPin(DigitalPin.P3)
    I4 = pins.digitalReadPin(DigitalPin.P4)
    I5 = pins.digitalReadPin(DigitalPin.P5)
})
basic.forever(function () {
    while (text_list[stage] == "L") {
        Left()
        if (text_list[stage] != "L") {
            break;
        }
    }
    while (text_list[stage] == "R") {
        Right()
        if (stage == 10) {
            while (true) {
                SuperBit.MotorRunDual(
                SuperBit.enMotors.M1,
                0,
                SuperBit.enMotors.M1,
                0
                )
            }
        }
        if (text_list[stage] != "R") {
            break;
        }
    }
    while (text_list[stage] == "S") {
        Left()
        if (text_list[stage] != "S") {
            break;
        }
    }
})
