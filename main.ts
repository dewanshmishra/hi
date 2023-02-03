let c = 0
let i = 0
let no = 2
while (no <= 100) {
    i = 1
    c = 0
    while (i <= no) {
        if (no % i == 0) {
            c += 1
        }
        i += 1
    }
    if (c == 2) {
        game.splash(no)
    }
    no += 1
}
