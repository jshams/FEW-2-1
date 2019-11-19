class Currency {
    constructor(n = 0) {
        this.n = n
    }

    add(num) {
        this.n += num
        return this.n
    }

    subtract(num) {
        this.n -= num
        return this.n
    }

    multiply(num) {
        this.n *= num
        return this.n
    }

    divide(num) {
        this.n = parseInt(100 * this.n / num) / 100
        return this.n
    }

    split(num) {
        let arr = Array(num).fill(Math.floor((100 * this.n) / num) / 100)
        const remainder = (100 * this.n) % num
        for (let i = 0; i < remainder; i++) {
            arr[i] = arr[i] + 0.01
        }
        return arr
    }
}

module.exports = Currency