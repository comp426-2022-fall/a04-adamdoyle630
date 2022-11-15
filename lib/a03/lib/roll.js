export default function roll(num_sides, num_dice, num_rolls) {

    let result = []

    for (var i = 0; i < num_rolls; i++) {
        let roll = 0;
        for (var j = 0; j < num_dice; j++) {
            roll = roll + Math.floor(Math.random() * num_sides) + 1
        }
        result[i] = roll
    }

    return {
        sides : num_sides,
        dice : num_dice,
        rolls : num_rolls,
        results : result
    }
}