function colorGraph() {

    if (graph.nodes[0].example) {
        s.graph.clear();
        if (graph.nodes[0].example === '1') {

            graph.nodes[0].color = 'red';
            graph.nodes[3].color = 'red';
            graph.nodes[1].color = 'blue';
            graph.nodes[2].color = 'blue';
            graph.nodes[4].color = 'green';
            graph.nodes[5].color = 'green';
            graph.nodes[6].color = 'green';

        }
        if (graph.nodes[0].example === '2') {

            graph.nodes[0].color = 'red';
            graph.nodes[3].color = 'red';
            graph.nodes[1].color = 'blue';
            graph.nodes[2].color = 'blue';
            graph.nodes[4].color = 'green';
            graph.nodes[5].color = 'green';
        }
        if (graph.nodes[0].example === '3') {

            graph.nodes[0].color = 'red';
            graph.nodes[3].color = 'red';
            graph.nodes[1].color = 'blue';
            graph.nodes[2].color = 'blue';
            graph.nodes[4].color = 'green';

        }
        if (graph.nodes[0].example === '4') {

            graph.nodes[0].color = 'red';
            graph.nodes[3].color = 'green';
            graph.nodes[1].color = 'blue';
            graph.nodes[2].color = 'blue';
        }
        if (graph.nodes[0].example === '5') {

            graph.nodes[0].color = 'red';
            graph.nodes[3].color = 'green';
            graph.nodes[1].color = 'blue';
            graph.nodes[2].color = 'blue';
        }
        if (graph.nodes[0].example === '6') {

            graph.nodes[0].color = 'red';
            graph.nodes[3].color = 'green';
            graph.nodes[1].color = 'blue';
            graph.nodes[2].color = 'blue';
        }
        if (graph.nodes[0].example === '7') {

            graph.nodes[0].color = 'blue';
            graph.nodes[3].color = 'blue';
            graph.nodes[1].color = 'green';
            graph.nodes[2].color = 'red';
            graph.nodes[4].color = 'red';
            graph.nodes[5].color = 'green';
        }
        if (graph.nodes[0].example === '8') {

            graph.nodes[0].color = 'red';
            graph.nodes[1].color = 'blue';
            graph.nodes[2].color = 'blue';
            graph.nodes[3].color = 'blue';
            graph.nodes[4].color = 'green';
            graph.nodes[5].color = 'red';
            graph.nodes[6].color = 'green';
            graph.nodes[7].color = 'red';
            graph.nodes[8].color = 'red';
            graph.nodes[9].color = 'green';
        }
        if (graph.nodes[0].example === '9') {

            graph.nodes[0].color = 'red';
            graph.nodes[1].color = 'blue';
            graph.nodes[2].color = 'blue';
            graph.nodes[3].color = 'blue';
            graph.nodes[4].color = 'green';
            graph.nodes[5].color = 'red';
            graph.nodes[6].color = 'green';
            graph.nodes[7].color = 'red';
            graph.nodes[8].color = 'red';
            graph.nodes[9].color = 'green';
        }
    } else {

        const colors = ['red', 'green', 'blue', 'yellow'];
        let j = 0;

        for (let i = 0; i < graph.nodes.length; i++) {

            if (j % 4 == 0) j = 0;

            graph.nodes[i].color = colors[j];
            j++;

        }
    }
}