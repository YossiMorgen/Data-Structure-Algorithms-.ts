import Graph from "./implementation";

export function airportsRoutes(): Graph {
    // create the graph
    const graph = new Graph();

    const airports = ["PHX", "BKK", "OKC", "JFK", "LAX", "MEX", "EZE"];
    const routes = [
        ["PHX", "LAX"],
        ["PHX", "JFK"],
        ["JFK", "OKC"],
        ["JFK", "BKK"],
        ["OKC", "MEX"],
        ["MEX", "EZE"],
        ["JFK", "EZE"],
        ["LAX", "MEX"],
        ["OKC", "LAX"],
    ];

    // add the airports to the graph
    airports.forEach(airport => graph.addVertex(airport));
    routes.forEach(route => graph.addEdge(route[0], route[1]));

    console.log(graph.adjacencyList);
    return graph;
}

export function bfs(start = 'PHX', graph = airportsRoutes(), destination = 'EZE'){
    const queue = [start];
    const visited = new Map<string, boolean>();
    visited.set(start, true);

    while (queue.length > 0) {
        const airport = queue.shift();
        const routes = graph.adjacencyList.get(airport);
        for (const route of routes) {

            if (route === destination) {
                console.log("Found " + destination + " from " + airport + "!");
                return;
            }
            
            if (!visited.get(route)) {
                visited.set(route, true);
                queue.push(route);
                console.log(route);
                
            }

        }
        
    }
}