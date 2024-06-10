input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    position = 90
    ServoSlow.setServoPosition(1, 90)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 13) {
        position = ServoSlow.setServoAngle(1, 90, 10, position, ServoSlow.ServoDirection.CW)
    } else if (receivedNumber == 14) {
        position = ServoSlow.setServoAngle(1, 90, 10, position, ServoSlow.ServoDirection.CCW)
    } else if (receivedNumber == 0) {
        ServoSlow.setServoPosition(1, 90)
        position = 90
    }
    basic.showNumber(position)
})
input.onButtonPressed(Button.A, function () {
    position = ServoSlow.setServoAngle(1, 90, 10, position, ServoSlow.ServoDirection.CCW)
    basic.showNumber(position)
})
input.onButtonPressed(Button.B, function () {
    position = ServoSlow.setServoAngle(1, 90, 10, position, ServoSlow.ServoDirection.CW)
    basic.showNumber(position)
})
let position = 0
position = 90
radio.setGroup(1)
ServoSlow.setServoPosition(1, 90)
