def on_button_pressed_a():
    player.turn(Direction.LEFT, 90)
    basic.pause(600)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    player.turn(Direction.RIGHT, 90)
    basic.pause(600)
input.on_button_pressed(Button.B, on_button_pressed_b)

player: game.LedSprite = None
player = game.create_sprite(2, 2)

def on_forever():
    player.move(1)
    basic.pause(600)
basic.forever(on_forever)
