let nodeSize = false;
let dx = 0;
let dy = 0;

function cluster(x) {
    // Check if arguments are provided (setter mode)
    if (arguments.length) {
        nodeSize = false;
        dx = +x[0];
        dy = +x[1];
        return cluster;  // Returning the function itself for chaining purposes
    } else {
        // Getter mode, return current values
        return nodeSize ? null : [dx, dy];
    }
}

// Usage as a setter
cluster([10, 20]);  // Sets dx to 10 and dy to 20

// Usage as a getter
console.log(cluster());  // Returns [10, 20]
