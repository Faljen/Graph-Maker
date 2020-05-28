// Initialize sigma:
var s = new sigma({
    renderer: {
        container: document.getElementById('sigma-container'),
        type: 'canvas'
    },
    settings: {}
});

//Get the list of nodes
const selectedNodes = document.getElementById('numberOfNodes');
let numberOfNodes = null;

//Get the list of edges
const nodeFirst = document.getElementById('nodeFirst');
const nodeSecond = document.getElementById('nodeSecond');

//Get the Adjacency Matrix Text Area
const adjacencyMatrixTextArea = document.getElementById('AdjacencyMatrixTextArea');

//Get the list of nodes in adjacency list
const selectedNodesInAdjacencyList = document.getElementById('numberOfNodesInList');
let numberOfNodesInAdjacencyList = null;

//Get the Adjacency List Text Area
const adjacencyListTextArea = document.getElementById('AdjacencyListTextArea');
const addEdgesToList = (numberOfNodes) => {
    for (let i = 0; i < numberOfNodes; i++) {
        const optionNodeFirst = document.createElement('option');
        const optionNodeSecond = document.createElement('option');
        optionNodeFirst.value = i;
        optionNodeSecond.value = i;
        optionNodeFirst.text = i + 1;
        optionNodeSecond.text = i + 1;
        nodeFirst.appendChild(optionNodeFirst);
        nodeSecond.appendChild(optionNodeSecond);
    }

}

//Creating nodes in Adjacency List Text Area
const addNodesToAdjacencyList = (numberOfNodesInAdjacencyList) => {
    const addingNodes = document.getElementById('addingNodes');
    addingNodes.textContent = '';
    for (let i = 0; i < numberOfNodesInAdjacencyList; i++) {

        const addingValue = `${i+1}: `;
        addingNodes.textContent += addingValue;
        addingNodes.textContent += '\n';
    }

}

//Get degree of nodes
function getDegree() {
    let check = [];
    let possiblesNodes = [`n0`, `n1`, `n2`, `n3`, `n4`, `n5`, `n6`, `n7`, `n8`, `n9`];
    let counter = 0;
    let nodesDegree = [];

    document.getElementById('nodesDegrees').innerHTML = '';

    for (let i = 0; i < graph.edges.length; i++) {
        check.push(graph.edges[i].source);
        check.push(graph.edges[i].target);
    }


    for (let i = 0; i < graph.nodes.length; i++) {
        counter = 0;
        for (let j = 0; j < check.length; j++) {
            if (possiblesNodes[i] === check[j])
                counter++;

        }
        nodesDegree.push(counter);
    }

    for (let i = 0; i < graph.nodes.length; i++) {
        graph.nodes[i].degree = nodesDegree[i];
    }

    for (let i = 0; i < graph.nodes.length; i++) {

        const degree = document.createElement('degree');
        const degreesList = document.getElementById('nodesDegrees');
        degree.innerHTML = `<b>W${i+1}:</b> ${graph.nodes[i].degree}<br>`;
        degreesList.appendChild(degree);
    }

}

//Get neighbours of nodes
function getNeigbours() {

    document.getElementById('adjacencyList').innerHTML = '';

    for (let i = 0; i < graph.nodes.length; i++) {
        for (let j = 0; j < graph.edges.length; j++) {
            if ((graph.nodes[i].id === graph.edges[j].source) && !(graph.nodes[i].neigbours.includes(graph.edges[j].target))) {
                graph.nodes[i].neigbours.push(graph.edges[j].target);

            } else if ((graph.nodes[i].id === graph.edges[j].target) && !(graph.nodes[i].neigbours.includes(graph.edges[j].source))) {
                graph.nodes[i].neigbours.push(graph.edges[j].source);

            }
        }
    }

    for (let i = 0; i < graph.nodes.length; i++) {

        let changedNames = [];

        const list = graph.nodes[i].neigbours;
        for (let j = 0; j < graph.nodes[i].neigbours.length; j++) {
            if (graph.nodes[i].neigbours[j] === 'n0') {
                changedNames.push('W1');
            }
            if (graph.nodes[i].neigbours[j] === 'n1') {
                changedNames.push('W2');
            }
            if (graph.nodes[i].neigbours[j] === 'n2') {
                changedNames.push('W3');
            }
            if (graph.nodes[i].neigbours[j] === 'n3') {
                changedNames.push('W4');
            }
            if (graph.nodes[i].neigbours[j] === 'n4') {
                changedNames.push('W5');
            }
            if (graph.nodes[i].neigbours[j] === 'n5') {
                changedNames.push('W6');
            }
            if (graph.nodes[i].neigbours[j] === 'n6') {
                changedNames.push('W7');
            }
            if (graph.nodes[i].neigbours[j] === 'n7') {
                changedNames.push('W8');
            }
            if (graph.nodes[i].neigbours[j] === 'n8') {
                changedNames.push('W9');
            }
            if (graph.nodes[i].neigbours[j] === 'n9') {
                changedNames.push('W10');
            }
            if (graph.nodes[i].neigbours[j] === 'n10') {
                changedNames.push('W11');
            }
        }

        const neighbours = document.createElement('neighbours');
        const adjacencyList = document.getElementById('adjacencyList');
        neighbours.innerHTML = `<b>W${i+1}:</b> ${changedNames.join(' ')}<br>`;
        adjacencyList.appendChild(neighbours);
    }

}

//Array containing nodes and edges of graph
let graph = {
    nodes: [],
    edges: []
};

//Add nodes
const addNodeButton = document.querySelector('#addNode');
addNodeButton.addEventListener('click', () => {
    event.preventDefault();

    graph.nodes = [];
    graph.edges = [];
    s.graph.clear();
    s.refresh();

    numberOfNodes = selectedNodes.options[selectedNodes.selectedIndex].value;

    nodeFirst.innerHTML = '';
    nodeSecond.innerHTML = '';
    addEdgesToList(numberOfNodes);

    for (let i = 0; i < numberOfNodes; i++) {
        let randomX = Math.floor(Math.random() * 15);
        let randomY = Math.floor(Math.random() * 15);

        let newNode = {

            id: `n${i}`,
            label: `w${i+1}`,
            x: randomX,
            y: randomY,
            size: 2,
            neigbours: []
        }
        graph.nodes.push(newNode);

    }
    s.graph.read(graph);
    s.refresh();

})

//Add edge
const addEdgeButton = document.querySelector('#addEdge');
addEdgeButton.addEventListener('click', () => {
    event.preventDefault();

    document.getElementById('addBfs').textContent = '';
    document.getElementById('eulerianPath').textContent = '';
    document.getElementById('evenNodesorNot').textContent = '';

    s.graph.clear();

    let linkFrom = nodeFirst.options[nodeFirst.selectedIndex].value;
    let linkTo = nodeSecond.options[nodeSecond.selectedIndex].value;
    let numberOfEdgesInArray = graph.edges.length;

    let newEdge = {
        id: `e${numberOfEdgesInArray}`,
        source: `n${linkFrom}`,
        target: `n${linkTo}`,
        type: 'line',
        color: '#000000',
        size: 0.5
    }

    graph.edges.push(newEdge);
    getNeigbours();
    getDegree();
    eulerPath();
    breadthFirstSearch();
    s.graph.read(graph);
    s.refresh();

})

// Adjacency Matrix
let adjacencyMatrix = [];
const addAdjacencyMatrix = document.querySelector('#addAdjacencyMatrix');
addAdjacencyMatrix.addEventListener('click', () => {
    event.preventDefault();

    document.getElementById('addBfs').textContent = '';
    document.getElementById('eulerianPath').textContent = '';
    document.getElementById('evenNodesorNot').textContent = '';

    let counterOfNumbersInArray = 0;
    let numberOfEdge = 0;

    graph.nodes = [];
    graph.edges = [];
    s.graph.clear();
    s.refresh();

    adjacencyMatrix = [];
    adjacencyMatrix = adjacencyMatrixTextArea.value.split('\n');

    for (let i = 0; i < adjacencyMatrix.length; i++) {
        let randomX = Math.floor(Math.random() * 15);
        let randomY = Math.floor(Math.random() * 15);
        let newNode = {

            id: `n${i}`,
            label: `w${i+1}`,
            x: randomX,
            y: randomY,
            size: 2,
            neigbours: []
        }
        graph.nodes.push(newNode);
    }

    for (let i = 0; i < adjacencyMatrix.length; i++) {
        counterOfNumbersInArray = 0;
        for (let j = 0; j < adjacencyMatrix[i].length; j++) {
            if (adjacencyMatrix[i][j] != ' ') {

                if (adjacencyMatrix[i][j] == 1) {
                    let newEdge = {
                        id: `e${numberOfEdge}`,
                        source: `n${i}`,
                        target: `n${counterOfNumbersInArray}`,
                        type: 'line',
                        color: '#000000',
                        size: 0.5
                    }
                    numberOfEdge++;
                    graph.edges.push(newEdge);


                }

                counterOfNumbersInArray++;

            }
        }

    }

    getNeigbours();
    breadthFirstSearch();
    s.graph.read(graph);
    s.refresh();

})

//Add nodes to Adjacency List
const addNodeToAdjacencyListButton = document.querySelector('#addNodeToAdjacencyList');
addNodeToAdjacencyListButton.addEventListener('click', () => {
    event.preventDefault();

    graph.nodes = [];
    graph.edges = [];
    s.graph.clear();
    s.refresh();

    numberOfNodesInAdjacencyList = selectedNodesInAdjacencyList.options[selectedNodesInAdjacencyList.selectedIndex].value;

    addNodesToAdjacencyList(numberOfNodesInAdjacencyList);

    for (let i = 0; i < numberOfNodesInAdjacencyList; i++) {
        let randomX = Math.floor(Math.random() * 15);
        let randomY = Math.floor(Math.random() * 15);

        let newNode = {

            id: `n${i}`,
            label: `w${i+1}`,
            x: randomX,
            y: randomY,
            size: 2,
            degree: 0,
            neigbours: [],
            color: '#000000'
        }
        graph.nodes.push(newNode);

    }
    s.graph.read(graph);
    s.refresh();

})

//Adjacency List
let adjcacencyList = [];
const addAdjacencyList = document.getElementById('addAdjacencyList');
addAdjacencyList.addEventListener('click', () => {

    let numberOfEdge = 0;



    event.preventDefault();
    graph.edges = [];
    s.graph.clear();
    s.refresh();

    adjacencyList = [];
    adjacencyList = adjacencyListTextArea.value.split('\n');


    for (let i = 0; i < adjacencyList.length; i++) {

        for (let j = 0; j < adjacencyList[i].length; j++) {
            if (adjacencyList[i][j] != ' ') {

                let newEdge = {
                    id: `e${numberOfEdge}`,
                    source: `n${i}`,
                    target: `n${adjacencyList[i][j] - 1}`,
                    type: 'line',
                    color: '#000000',
                    size: 0.5
                }
                numberOfEdge++;
                graph.edges.push(newEdge);

            }

        }


    }
    getDegree();
    getNeigbours();
    eulerPath();
    breadthFirstSearch();
    s.graph.read(graph);
    s.refresh();

})

// Color graph
const addColorButton = document.getElementById('color');
addColorButton.addEventListener('click', () => {

    s.graph.clear();
    colorGraph();
    s.graph.read(graph);
    s.refresh();

})