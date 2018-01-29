/*
Once upon a time, in a kingdom far, far away, there lived a king Byteasar III. As a smart and educated ruler, he did everything in his (unlimited) power to make every single system of his kingdom efficient. The king went down in history as a great road builder: during his reign a great number of roads were built, and the road system he created was the most efficient for those dark times.

When you started to learn about Byteasar's III deeds in your history classes, the creeping doubt crawled into the back of your mind: what if the famous king wasn't so great after all? According to the most recent studies, there were n cities in the Byteasar's kingdom, which were connected by the two-ways roads. You managed to get information about this roads from the university library, so now you can write a function that will determine whether the road system in Byteasar's kingdom was efficient or not.

A road system is considered efficient if it is possible to travel from any city to any other city by traversing at most 2 roads.

Example

For n = 6 and

roads = [[3, 0], [0, 4], [5, 0], [2, 1],
          [1, 4], [2, 3], [5, 2]]
the output should be
efficientRoadNetwork(n, roads) = true.

Here's how the road system can be represented:


For n = 6 and

roads = [[0, 4], [5, 0], [2, 1],
          [1, 4], [2, 3], [5, 2]]
the output should be
efficientRoadNetwork(n, roads) = false.

Here's how the road system can be represented:


As you can see, it's only possible to travel from city 3 to city 4 by traversing at least 3 roads.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

The number of cities in the kingdom.

Guaranteed constraints:
1 ≤ n ≤ 250.

[input] array.array.integer roads

Array of roads in the kingdom. Each road is given as a pair [cityi, cityj], where 0 ≤ cityi, cityj < n and cityi ≠ cityj. It is guaranteed that no road is given twice.

Guaranteed constraints:
0 ≤ roads.length ≤ 35000,
roads[i].length = 2,
0 ≤ roads[i][j] < n.

[output] boolean

true if the road system is efficient, false otherwise.
*/

function efficientRoadNetwork(n, roads) {
    let cityToCityConnections = getCityToCityConnections(roads);
    for (let i = 0; i < n; i++) {
        if (totalCitiesWithinTwoRoads(i, cityToCityConnections) !== n) {
            return false;
        }
    }
    return true;
}

// Maps roads into a format that is constant searchable to test if city A is connected to city B.
function getCityToCityConnections(roads) {
    let cityToCityConnections = {};
    roads.forEach((road) => {
        cityToCityConnections[road[0]] = cityToCityConnections[road[0]] || {};
        cityToCityConnections[road[1]] = cityToCityConnections[road[1]] || {};
        cityToCityConnections[road[0]][road[1]] = true;
        cityToCityConnections[road[1]][road[0]] = true;
    });
    return cityToCityConnections
}

// BFS with depth 2 limit
function totalCitiesWithinTwoRoads(startCity, cityToCityConnections) {
    let queue = [{city: startCity, depth: 0}];
    let inRangeCities = {};

    while (queue.length > 0) {
        let node = queue.shift();
        inRangeCities[node.city] = true;
        if (node.depth < 2 && cityToCityConnections[node.city]) {
            Object.keys(cityToCityConnections[node.city]).forEach((i) => {
                if (!inRangeCities[i]) {
                    queue.push({
                        city: i,
                        depth: (node.depth + 1)
                    });
                }
            });
        }
    }

    return Object.keys(inRangeCities).length;
}
