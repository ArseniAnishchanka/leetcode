function maxScore(s: string): number {
    let onesCount = [...s].reduce(
        (count, c) => count + (c == "1" ? 1 : 0),
        0
    );
    let result = 0;
    let zerosCount = 0;
    for (let i = 0; i < s.length - 1; ++i) {
        if (s[i] == "1") {
            --onesCount;
        } else {
            ++zerosCount;
        }
        result = Math.max(result, onesCount + zerosCount);
    }
    return result;
};