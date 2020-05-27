const selectedGraph = document.getElementById('selectedGraph');

const selectGraphButton = document.getElementById('selectGraph');

selectGraphButton.addEventListener('click', () => {
    event.preventDefault();

    graph.nodes = [];
    graph.edges = [];
    s.graph.clear();
    s.refresh();

    selected = selectedGraph.options[selectedGraph.selectedIndex].value;

    if (selected === '1') {

        graph = {
            nodes: [{
                    id: "n0",
                    label: "w1",
                    x: 1,
                    y: 1,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n1",
                    label: "w2",
                    x: 1,
                    y: 3,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n2",
                    label: "w3",
                    x: 3,
                    y: 1,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n3",
                    label: "w4",
                    x: 3,
                    y: 3,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n4",
                    label: "w5",
                    x: 2,
                    y: 2,
                    size: 2,
                    color: '#000000',
                    neigbours: []
                },
                {
                    id: "n5",
                    label: "w6",
                    x: 0,
                    y: 2,
                    size: 2,
                    color: '#000000',
                    neigbours: []
                },
                {
                    id: "n6",
                    label: "w7",
                    x: 4,
                    y: 2,
                    size: 2,
                    color: '#000000',
                    neigbours: []
                }
            ],
            edges: [{
                    id: "e0",
                    source: "n0",
                    target: "n2",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e1",
                    source: "n0",
                    target: "n1",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e2",
                    source: "n2",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e3",
                    source: "n2",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e4",
                    source: "n0",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e5",
                    source: "n1",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e6",
                    source: "n4",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e7",
                    source: "n1",
                    target: "n5",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e8",
                    source: "n5",
                    target: "n0",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e9",
                    source: "n2",
                    target: "n6",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e10",
                    source: "n3",
                    target: "n6",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e11",
                    source: "n1",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                }
            ]
        }
        getDegree();
        getNeigbours();
        breadthFirstSearch();
        eulerPath();
        s.graph.read(graph);
        s.refresh();

    }

    if (selected === '2') {
        graph = {
            nodes: [{
                    id: "n0",
                    label: "w1",
                    x: 1,
                    y: 1,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n1",
                    label: "w2",
                    x: 1,
                    y: 3,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n2",
                    label: "w3",
                    x: 3,
                    y: 1,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n3",
                    label: "w4",
                    x: 3,
                    y: 3,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n4",
                    label: "w5",
                    x: 2,
                    y: 2,
                    size: 2,
                    color: '#000000',
                    neigbours: []
                },
                {
                    id: "n5",
                    label: "w6",
                    x: 4,
                    y: 2,
                    size: 2,
                    color: '#000000',
                    neigbours: []
                }
            ],
            edges: [{
                    id: "e0",
                    source: "n0",
                    target: "n2",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e1",
                    source: "n0",
                    target: "n1",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e2",
                    source: "n2",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e3",
                    source: "n2",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e4",
                    source: "n0",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e5",
                    source: "n1",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e6",
                    source: "n4",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e7",
                    source: "n3",
                    target: "n5",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e8",
                    source: "n2",
                    target: "n5",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e9",
                    source: "n1",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                }
            ]
        }
        getDegree();
        getNeigbours();
        breadthFirstSearch();
        eulerPath();
        s.graph.read(graph);
        s.refresh();
    }

    if (selected === '3') {
        graph = {
            nodes: [{
                    id: "n0",
                    label: "w1",
                    x: 1,
                    y: 1,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n1",
                    label: "w2",
                    x: 1,
                    y: 3,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n2",
                    label: "w3",
                    x: 3,
                    y: 1,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n3",
                    label: "w4",
                    x: 3,
                    y: 3,
                    size: 2,
                    color: '#000000',
                    neigbours: []

                },
                {
                    id: "n4",
                    label: "w5",
                    x: 2,
                    y: 2,
                    size: 2,
                    color: '#000000',
                    neigbours: []
                }
            ],
            edges: [{
                    id: "e0",
                    source: "n0",
                    target: "n2",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e1",
                    source: "n0",
                    target: "n1",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e2",
                    source: "n2",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e3",
                    source: "n2",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e4",
                    source: "n0",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e5",
                    source: "n1",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e6",
                    source: "n4",
                    target: "n3",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                },
                {
                    id: "e9",
                    source: "n1",
                    target: "n4",
                    color: '#000000',
                    type: 'line',
                    size: 0.5
                }
            ]
        }
        getDegree();
        getNeigbours();
        breadthFirstSearch();
        eulerPath();
        s.graph.read(graph);
        s.refresh();
    }

    if (selected === '4') {
        {
            graph = {
                nodes: [{
                        id: "n0",
                        label: "w1",
                        x: 1,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n1",
                        label: "w2",
                        x: 1,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n2",
                        label: "w3",
                        x: 3,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n3",
                        label: "w4",
                        x: 3,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    }
                ],
                edges: [{
                        id: "e0",
                        source: "n0",
                        target: "n2",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e1",
                        source: "n0",
                        target: "n1",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e2",
                        source: "n0",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e3",
                        source: "n2",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e4",
                        source: "n1",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    }
                ]
            }
            getDegree();
            getNeigbours();
            breadthFirstSearch();
            eulerPath();
            s.graph.read(graph);
            s.refresh();
        }
    }

    if (selected === '5') {
        {
            graph = {
                nodes: [{
                        id: "n0",
                        label: "w1",
                        x: 1,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n1",
                        label: "w2",
                        x: 1,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n2",
                        label: "w3",
                        x: 3,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n3",
                        label: "w4",
                        x: 3,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    }
                ],
                edges: [{
                        id: "e0",
                        source: "n0",
                        target: "n2",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e1",
                        source: "n0",
                        target: "n1",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e2",
                        source: "n0",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e3",
                        source: "n1",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    }
                ]
            }
            getDegree();
            getNeigbours();
            breadthFirstSearch();
            eulerPath();
            s.graph.read(graph);
            s.refresh();
        }
    }

    if (selected === '6') {
        {
            graph = {
                nodes: [{
                        id: "n0",
                        label: "w1",
                        x: 1,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n1",
                        label: "w2",
                        x: 1,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n2",
                        label: "w3",
                        x: 3,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n3",
                        label: "w4",
                        x: 3,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    }
                ],
                edges: [{
                        id: "e0",
                        source: "n0",
                        target: "n2",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e1",
                        source: "n0",
                        target: "n1",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e2",
                        source: "n0",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    }
                ]
            }
            getDegree();
            getNeigbours();
            breadthFirstSearch();
            eulerPath();
            s.graph.read(graph);
            s.refresh();
        }
    }

    if (selected === '7') {
        {
            graph = {
                nodes: [{
                        id: "n0",
                        label: "w1",
                        x: 1,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n1",
                        label: "w2",
                        x: 1,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n2",
                        label: "w3",
                        x: 2,
                        y: 2,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n3",
                        label: "w4",
                        x: 3,
                        y: 2,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n4",
                        label: "w5",
                        x: 4,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n5",
                        label: "w6",
                        x: 4,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    }
                ],
                edges: [{
                        id: "e0",
                        source: "n0",
                        target: "n1",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e1",
                        source: "n0",
                        target: "n2",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e2",
                        source: "n1",
                        target: "n2",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e3",
                        source: "n2",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e4",
                        source: "n3",
                        target: "n4",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e5",
                        source: "n3",
                        target: "n5",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e6",
                        source: "n4",
                        target: "n5",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    }
                ]
            }
            getDegree();
            getNeigbours();
            breadthFirstSearch();
            eulerPath();
            s.graph.read(graph);
            s.refresh();
        }
    }

    if (selected === '8') {
        {
            graph = {
                nodes: [{
                        id: "n0",
                        label: "w1",
                        x: 1,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n1",
                        label: "w2",
                        x: 1,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n2",
                        label: "w3",
                        x: 2,
                        y: 2,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n3",
                        label: "w4",
                        x: 3,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n4",
                        label: "w5",
                        x: 1,
                        y: 4,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n5",
                        label: "w7",
                        x: 4,
                        y: 4,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n6",
                        label: "w6",
                        x: 2,
                        y: 4,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n7",
                        label: "w8",
                        x: 4,
                        y: 2,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n8",
                        label: "w9",
                        x: 4,
                        y: 1.5,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n9",
                        label: "w10",
                        x: 4,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    }
                ],
                edges: [{
                        id: "e0",
                        source: "n0",
                        target: "n1",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e1",
                        source: "n0",
                        target: "n2",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e2",
                        source: "n0",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e3",
                        source: "n1",
                        target: "n4",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e4",
                        source: "n2",
                        target: "n5",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e5",
                        source: "n2",
                        target: "n6",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e6",
                        source: "n2",
                        target: "n7",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e7",
                        source: "n3",
                        target: "n8",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e8",
                        source: "n3",
                        target: "n9",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    }
                ]
            }
            getDegree();
            getNeigbours();
            breadthFirstSearch();
            eulerPath();
            s.graph.read(graph);
            s.refresh();
        }
    }

    if (selected === '9') {
        {
            graph = {
                nodes: [{
                        id: "n0",
                        label: "w1",
                        x: 3,
                        y: 1,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n1",
                        label: "w2",
                        x: 1,
                        y: 2,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n2",
                        label: "w3",
                        x: 5,
                        y: 2,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n3",
                        label: "w4",
                        x: 3,
                        y: 2,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n4",
                        label: "w5",
                        x: 2,
                        y: 2.5,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n5",
                        label: "w6",
                        x: 4,
                        y: 2.5,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n6",
                        label: "w7",
                        x: 2.5,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n7",
                        label: "w8",
                        x: 3.5,
                        y: 3,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n8",
                        label: "w9",
                        x: 2,
                        y: 4,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    },
                    {
                        id: "n9",
                        label: "w10",
                        x: 4,
                        y: 4,
                        size: 2,
                        color: '#000000',
                        neigbours: []

                    }
                ],
                edges: [{
                        id: "e0",
                        source: "n0",
                        target: "n1",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e1",
                        source: "n0",
                        target: "n2",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e2",
                        source: "n0",
                        target: "n3",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e3",
                        source: "n3",
                        target: "n6",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e4",
                        source: "n3",
                        target: "n7",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e5",
                        source: "n1",
                        target: "n4",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e6",
                        source: "n1",
                        target: "n8",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e7",
                        source: "n4",
                        target: "n5",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e9",
                        source: "n4",
                        target: "n7",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e10",
                        source: "n6",
                        target: "n5",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e11",
                        source: "n2",
                        target: "n5",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e12",
                        source: "n2",
                        target: "n9",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e13",
                        source: "n6",
                        target: "n8",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e14",
                        source: "n7",
                        target: "n9",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    },
                    {
                        id: "e1",
                        source: "n8",
                        target: "n9",
                        color: '#000000',
                        type: 'line',
                        size: 0.5
                    }
                ]
            }
            getDegree();
            getNeigbours();
            breadthFirstSearch();
            eulerPath();
            s.graph.read(graph);
            s.refresh();
        }
    }

})