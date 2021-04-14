/*let graph = {
    G1: {}
    start: {A: 5, B: 2},
    A: {start: 1, C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {},
} */

let mBg = 111100; //meter per breddegrad
let mLg = 111211; //meter per længdegrad

let G1 = {
    kryds:"Enghavevej_HansOlriksVej",
    bg:"55.657461",
    lg:"12.538591",
    ruter:""
}

let G2 = {
    kryds:"Enghavevej_EdvardStormsVej",
    bg:"55.656756",
    lg:"12.538172",
    ruter:""
}

let node1 = G1;
let node2 = G2;

function calcDistPyth (node1.kryds , node1.bg, node1.lg, node2.bg, node2.lg) { //udregner distance mellem to noder
    deltaBg = node1.bg - node2.bg;
    deltaLg = node1.lg - node2.bg;
    if (deltaBg < 0) {          //flipper fortegn, hvis negativ
        deltaBg = deltaBg * -1
    }
    if (deltaLg < 0) {          //flipper fortegn, hvis negativ
        deltaLg = deltaLg * -1
    }

    deltaX = deltaBg * mBg; //breddegrader i meter
    deltaY = deltaLg * mLg; //længdegrader i meter

    dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY); //endelig distance

    return dist;
}


calcDistPyth (node1.bg, node1.lg, node2.bg, node2.lg);

console.log(dist);

