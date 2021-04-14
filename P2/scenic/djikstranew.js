// Create graph for the model
let graph = {
	start: {A: 1, B: 3},
	A: {start: 1, B: 1, end: 5},
	B: {start: 3, end: 2},
	end: {A: 5, B: 2}
};

function adj(a, graph){

	return(graph[a]);
}
console.log(adj("end", graph));

//V = number of verticies
//E = number of edges

let verticies = [Object.keys(graph)];


/*
function dijkstra(verticies, graph, start) {

	let alreadyCheckedVert = [null];  //is S in the book
	let nonCheckedVert = [verticies - alreadyCheckedVert]; //Q in book
	let u = 0;

	while (nonCheckedVert != null) {
		u = Math.min(nonCheckedVert);
		//nonCheckedVert.pop(u);
		alreadyCheckedVert.push(u);


		for (let i = 0; i <= Object.keys(graph).length; i++) {
			dist[v] = Infinity;
			prev[v] = undefined;
			Q.push(v);
			dist[source] = 0;
		}
	}
}*/
