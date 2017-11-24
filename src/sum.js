export function sum(a, b) {
    let aIsUndef = typeof a === "undefined";
    let bIsUndef = typeof b === "undefined";

    if (aIsUndef && bIsUndef) {
        return 0;
    } else if (aIsUndef) {
        return b;
    } else if (bIsUndef) {
        return a;
    } else {
        return a + b;
    }
}
