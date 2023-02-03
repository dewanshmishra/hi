c = 0
i = 0
no = 0
while no <= 100:
    i = 1
    c = 0
    while i <= no:
        if no % i == 0:
            c += 1
            i += 1
        if c == 2:
            game.splash(no)