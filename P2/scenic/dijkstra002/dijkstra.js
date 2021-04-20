let map = [[0, 10, 5, null, null],
           [null, 0, 2, 1, null],
           [null, 3, 0, 9, 2],
           [null, null, null, 0, 4],
           [7, null, null, 6, 0]];

function dijkstra(map, sourceIndex) {
    let shortestPath = new Array(map.length).fill(null);
    let verticiesCompleted = new Array(map.length).fill(false);
    let distanceFromSource = new Array(map.length).fill(Infinity);
    shortestPath[sourceIndex] = [sourceIndex];
    distanceFromSource[sourceIndex] = 0;

    while(verticiesCompleted.includes(false)){
        let indexU = findMinimumNonCompletedVertex(distanceFromSource, verticiesCompleted);

        //New array containing one note of the map array at a time. In this example we will have one array with 5 elements
        let weights = map[indexU];

        verticiesCompleted[indexU] = true;

        //lav relaxation som en seperat funktion så den kan unit testes
        for (let i = 0; i < weights.length; i++){
            if (!verticiesCompleted[i] && weights[i] != null){
                // Checking the connection between vertex indexU, i
                if (distanceFromSource[indexU] + weights[i] < distanceFromSource[i]){
                    distanceFromSource[i] = distanceFromSource[indexU] + weights[i];
                    let newpath = [...shortestPath[indexU]];
                    newpath.push(i);
                    shortestPath[i] = newpath; //... copies to a new array in shortestPath
                }
            }
        }
        // Completed verticies are ...
        console.log("completed verticies: ", verticiesCompleted);
        console.log("shortestPath: ", shortestPath);
        console.log("distanceFromSource : ", distanceFromSource);
        console.log("\n")
    }
}

function findMinimumNonCompletedVertex(distanceFromsource, verticiesCompleted){
    let index = null;
    let value = Infinity;

    for (let i = 0; i < map.length; i++){
        if (!verticiesCompleted[i] && distanceFromsource[i] < value){
            value = distanceFromsource[i];
            index = i;
        }
    }
    return index;
}

dijkstra(map, 0);