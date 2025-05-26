function series(terms) {
    for (let n = 1; n <= terms; n++) {
        const term = Math.pow(n, 3) - Math.pow(n, 2);
        console.log(term);
    }
}
series(5);