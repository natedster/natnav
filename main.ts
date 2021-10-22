let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
input.onButtonPressed(Button.A, function () {
    basic.showString("I'm Natnav")
    music.playMelody("A G E C5 G A C B ", 500)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
})
input.onGesture(Gesture.Shake, function () {
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 70)
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
})
basic.forever(function () {
	
})
