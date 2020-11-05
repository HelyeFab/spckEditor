const hummingDistance = ((a, b) => {
    if (a.length !== b.length) {
        console.log("Strings should have the same length");
        return
    }

    let distance = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            distance++
        }

    }
    return distance
});

console.log(hummingDistance('robe', 'ores'));



