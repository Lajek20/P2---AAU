let graph = {
    start: {A: 5, B: 2},
    A: {start: 1, C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {},
};

let shortestDistanceNode = (distances, visited) => {
    // create a default value for shortest
    let shortest = null;

    // for each node in the distances object
    for (let node in distances){
        let currentIsShortest =
            shortest === null || distances[node] < distances[shortest];

        if (currentIsShortest && !visited.includes(node)){
            shortest = node;
        }
    }
    return shortest;
};

let findShortestPath = (graph, startNode, endNode) => {
    let distances = {};
    distances[endNode] = "Infinity";
    distances = Object.assign(distances, graph[startNode]);

    let parents = {endNode: null};
    for (let child in graph[startNode]){
        parents[child] = startNode;
    }

    let visited = [];

    let node = shortestDistanceNode(distances, visited);

    while (node){
        let distance = distances[node];
        let children = graph[node];

        for (let child in children){
            if (String(child) === String(startNode)){
                continue;
            } else {
                let newdistance = distance + children[child];
                if (!distances[child] || distances[child] > newdistance){
                    distances[child] = newdistance;
                    parents[child] = node;
                }
            }
        }
        visited.push(node);

        node = shortestDistanceNode(distances, visited);
    }
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent){
        shortestPath.push(parent);
        parent = parents[parent];
    }
    shortestPath.reverse();

    let results = {
        distance: distances[endNode],
        path: shortestPath,
    };
    return results;
};

console.log(findShortestPath(graph, "start", "end"));

console.log(findShortestPath(graph, "A", "B"));

console.log(findShortestPath(graph, "A", "start"));