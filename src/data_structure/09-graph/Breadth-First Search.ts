import Graph from "./implementation";

export default function breathFirstSearch(graph: Graph, start: string, destination: string){
    const queue = [start];

    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        
        if(current === destination){
            console.log("Found " + destination + " from " + start + "!");
            return;
        }

        for(const neighbor of graph.adjacencyList.get(current)){
            queue.push(neighbor);
        }
    }

    return false;
}