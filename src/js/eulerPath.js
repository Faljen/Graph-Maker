//Pseudo scieżka Eulera
function eulerPath() {
    let count = 0;
    document.getElementById('eulerianPath').textContent = '';
    document.getElementById('evenNodesorNot').textContent = '';
    for (let i = 0; i < graph.nodes.length; i++) {
        if (graph.nodes[i].degree % 2 == 0) {
            count++;
        }
    }
    if (count === graph.nodes.length) {
        const yesOrNo = document.getElementById('evenNodesorNot');
        yesOrNo.textContent = 'TAK';
        yesOrNo.style.color = 'green';
        yesOrNo.style.fontWeight = 'bold';
        for (let i = 0; i < graph.edges.length; i++) {
            if (i != graph.edges.length - 1) {
                document.getElementById('eulerianPath').textContent += `${graph.edges[i].id} -> `;
            } else {
                document.getElementById('eulerianPath').textContent += `${graph.edges[i].id}`;
            }
        }
    } else {
        const yesOrNo = document.getElementById('evenNodesorNot');
        yesOrNo.textContent = 'NIE';
        yesOrNo.style.color = 'red';
        yesOrNo.style.fontWeight = 'bold';
    }

}