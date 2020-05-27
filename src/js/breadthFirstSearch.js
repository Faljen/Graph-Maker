//pseudo bfs algorithm
function breadthFirstSearch() {


    let visited = [];
    let bfs = [];
    let searchedNodes = ['n0'];


    while (searchedNodes.length) {
        for (let i = 0; i < graph.nodes.length; i++) {
            for (let j = 0; j < searchedNodes.length; j++) {
                if (graph.nodes[i].id == searchedNodes[j]); {

                    const index = searchedNodes.indexOf(searchedNodes[j]);
                    // console.log(searchedNodes[j]);

                    if (!visited.includes(searchedNodes[j])) {
                        visited.push(searchedNodes[j]);
                        bfs.push(graph.nodes[i].label);
                    }

                    searchedNodes.splice(index, 1);

                    for (let m = 0; m < graph.nodes[i].neigbours.length; m++) {

                        if (!visited.includes(graph.nodes[i].neigbours[m])) {
                            // console.log(graph.nodes[i].neigbours[m]);

                            searchedNodes.push(graph.nodes[i].neigbours[m])
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === 'n0') {
            visited[i] = 'W1';
        }
        if (visited[i] === 'n1') {
            visited[i] = 'W2';
        }
        if (visited[i] === 'n2') {
            visited[i] = 'W3';
        }
        if (visited[i] === 'n3') {
            visited[i] = 'W4';
        }
        if (visited[i] === 'n4') {
            visited[i] = 'W5';
        }
        if (visited[i] === 'n5') {
            visited[i] = 'W6';
        }
        if (visited[i] === 'n6') {
            visited[i] = 'W7';
        }
        if (visited[i] === 'n7') {
            visited[i] = 'W8';
        }
        if (visited[i] === 'n8') {
            visited[i] = 'W9';
        }
        if (visited[i] === 'n9') {
            visited[i] = 'W10';
        }
    }

    document.getElementById('addBfs').textContent = visited.join(' => ');

}