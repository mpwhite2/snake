input.onButtonPressed(Button.A, function () {
    player.turn(Direction.Left, 90)
    basic.pause(600)
})
input.onButtonPressed(Button.B, function () {
    player.turn(Direction.Right, 90)
    basic.pause(600)
})
let player: game.LedSprite = null
game.startCountdown(60000)
let food = game.createSprite(randint(0, 4), randint(0, 4))
player = game.createSprite(2, 2)
player.turn(Direction.Left, 90)
basic.forever(function () {
    player.move(1)
    basic.pause(600)
    if (player.isTouching(food)) {
        game.addScore(10)
        food.delete()
        food = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
