function LM (speed: number) {
    if (LM_orientation * speed > 0) {
        return speed * LM_orientation * correction
    } else if (LM_orientation * speed < 0) {
        return speed * LM_orientation
    } else {
        return 0
    }
}
function Extract_Right (code: number) {
    return code % 1000 - 100
}
input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(LM(100), RM(100))
})
function RM (speed: number) {
    if (RM_orientation * speed > 0) {
        return speed * RM_orientation * correction
    } else if (RM_orientation * speed < 0) {
        return speed * RM_orientation
    } else {
        return 0
    }
}
function Extract_Left (code: number) {
    return Math.trunc(code / 1000) - 100
}
input.onButtonPressed(Button.B, function () {
    wuKong.stopAllMotor()
})
radio.onReceivedValue(function (name, value) {
    if (name == "drive") {
        wuKong.setAllMotor(LM(Extract_Left(value)), RM(Extract_Right(value)))
    }
})
let RM_orientation = 0
let LM_orientation = 0
let correction = 0
radio.setGroup(128)
correction = 0.95
LM_orientation = -1
RM_orientation = 1
