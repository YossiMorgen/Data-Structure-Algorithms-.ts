export default class Graph {
    public adjacencyList = new Map<string, string[]>();

    public addVertex(vertex: string) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    public addEdge(vertex1: string, vertex2: string) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

}