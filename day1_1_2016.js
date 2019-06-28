const input = 'L2, L5, L5, R5, L2, L4, R1, R1, L4, R2, R1, L1, L4, R1, L4, L4, R5, R3, R1, L1, R1, L5, L1, R5, L4, R2, L5, L3, L3, R3, L3, R4, R4, L2, L5, R1, R2, L2, L1, R3, R4, L193, R3, L5, R45, L1, R4, R79, L5, L5, R5, R1, L4, R3, R3, L4, R185, L5, L3, L1, R5, L2, R1, R3, R2, L3, L4, L2, R2, L3, L2, L2, L3, L5, R3, R4, L5, R1, R2, L2, R4, R3, L4, L3, L1, R3, R2, R1, R1, L3, R4, L5, R2, R1, R3, L3, L2, L2, R2, R1, R2, R3, L3, L3, R4, L4, R4, R4, R4, L3, L1, L2, R5, R2, R2, R2, L4, L3, L4, R4, L5, L4, R2, L4, L4, R4, R1, R5, L2, L4, L5, L3, L2, L4, L4, R3, L3, L4, R1, L2, R3, L2, R1, R2, R5, L4, L2, L1, L3, R2, R3, L2, L1, L5, L2, L1, R4';
const data = input.split(', ');

var dir = {
    N: { R: "E", L: "W" },
    E: { R: "S", L: "N" },
    S: { R: "W", L: "E" },
    W: { R: "N", L: "S" }
}

var moves = data.reduce((acc, strPair) => {
    const turn = strPair.slice(0,1)
    const number = Number(strPair.slice(1))
    acc.direction = dir[acc.direction][turn]
    acc[acc.direction] += number
    return acc
}, { direction: "N", N: 0, E: 0, S: 0, W: 0 })

console.log(Math.abs(moves.N - moves.S) + Math.abs(moves.E - moves.W));