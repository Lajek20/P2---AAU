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

let Rx = {
    kryds:"HansOlriksVej_JohanKellersVej",
    bg:"?",
    lg:"?",
    ruter:"G1, G3"
}

let G1 = {
    kryds:"Enghavevej_HansOlriksVej",
    bg:"55.657461",
    lg:"12.538591",
    ruter:"G2, Rx"
}

let G2 = {
    kryds:"Enghavevej_EdvardStormsVej",
    bg:"55.656756",
    lg:"12.538172",
    ruter:"G1, G3, G6"
}

let G3 = {
    kryds:"JohanKellersVej_EdvardStormsVej",
    bg:"55.656960",
    lg:"12.537041",
    ruter:""
}

let G4 = {
    kryds:"JohanKellersVej_Tranehavevej",
    bg:"55.656082",
    lg:"12.536541",
    ruter:""
}

let G5 = {
    kryds:"ErnestKapersVej_Tranehavevej",
    bg:"55.655559",
    lg:"12.537381",
    ruter:""
}

let G6 = {
    kryds:"Enghavevej_Tranehavevej",
    bg:"55.655559",
    lg:"12.537854",
    ruter:""
}

let G7 = {
    kryds:"Vesterkirkegaard_HVRolstedsVej",
    bg:"55.655486",
    lg:"12.534921",
    ruter:""
}

let G8 = {
    kryds:"Vesterkirkegaard_JohanKellersVej",
    bg:"55.654365",
    lg:"12.535568",
    ruter:""
}

let G9 = {
    kryds:"Vesterkirkegaard_NatalieZahlesVej",
    bg:"55.656412",
    lg:"12.534380",
    ruter:""
}

let node1 = G1;
let node2 = G2;

function calcDistPyth(node1.bg, node1.lg, node2.bg, node2.lg) { //udregner distance mellem to noder
    deltaBg = node1.bg - node2.bg;
    deltaLg = node1.lg - node2.lg;
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

