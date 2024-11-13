export const topics = [
    {
        "id": 0,
        "topic": "Arrays",
        "description": "Arrays are collections of data items, where each item can be accessed using its index. They are fundamental for storing and manipulating ordered lists of elements.",
        "websites": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"]
    },
    {
        "id": 1,
        "topic": "Strings",
        "description": "Strings are sequences of characters used for representing text. They support various operations like concatenation, substring search, and pattern matching.",
        "websites": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"]
    },
    {
        "id": 2,
        "topic": "Linked Lists",
        "description": "Linked Lists are linear data structures where elements are not stored at contiguous locations. Each element points to the next one using pointers.",
        "websites": ["https://www.geeksforgeeks.org/data-structures/linked-list/"]
    },
    {
        "id": 3,
        "topic": "Stacks",
        "description": "Stacks are data structures that follow the Last In, First Out (LIFO) principle. They allow operations like push (insert) and pop (remove) from the top.",
        "websites": ["https://www.geeksforgeeks.org/stack-data-structure/"]
    },
    {
        "id": 4,
        "topic": "Queues",
        "description": "Queues are data structures that follow the First In, First Out (FIFO) principle. They support operations like enqueue (insert) and dequeue (remove).",
        "websites": ["https://www.geeksforgeeks.org/queue-data-structure/"]
    },
    {
        "id": 5,
        "topic": "Hash Tables (Hash Maps)",
        "description": "Hash Tables are data structures that store key-value pairs. They use a hash function to compute an index into an array where the value is stored for fast retrieval.",
        "websites": ["https://www.geeksforgeeks.org/hashing-data-structure/"]
    },
    {
        "id": 6,
        "topic": "Binary Trees",
        "description": "Binary Trees are hierarchical data structures where each node has at most two children, referred to as the left child and the right child.",
        "websites": ["https://www.geeksforgeeks.org/binary-tree-data-structure/"]
    },
    {
        "id": 7,
        "topic": "Binary Search Trees (BST)",
        "description": "Binary Search Trees are a type of binary tree with an additional constraint that for each node, the left subtree contains only nodes with keys less than the node's key, and the right subtree only nodes with keys greater than the node's key.",
        "websites": ["https://www.geeksforgeeks.org/binary-search-tree-data-structure/"]
    },
    {
        "id": 8,
        "topic": "Heaps",
        "description": "Heaps are complete binary trees that satisfy the heap property. They are often used to implement priority queues and in algorithms involving optimal or near-optimal solutions.",
        "websites": ["https://www.geeksforgeeks.org/heap-data-structure/"]
    },
    {
        "id": 9,
        "topic": "Graphs",
        "description": "Graphs are non-linear data structures consisting of vertices (nodes) and edges (connections). They are used to represent networks and relationships between entities.",
        "websites": ["https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"]
    },
    {
        "id": 10,
        "topic": "Depth-First Search (DFS)",
        "description": "Depth-First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It is used in topological sorting, connected components, and detecting cycles.",
        "websites": ["https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"]
    },
    {
        "id": 11,
        "topic": "Breadth-First Search (BFS)",
        "description": "Breadth-First Search is a graph traversal algorithm that explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. It is used in shortest path finding, level order traversal, and minimum spanning tree algorithms.",
        "websites": ["https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/"]
    },
    {
        "id": 12,
        "topic": "Dynamic Programming (DP)",
        "description": "Dynamic Programming is a technique used to solve problems by breaking them down into overlapping subproblems and solving each subproblem only once. It is used in optimization problems, shortest path algorithms, and sequence alignment.",
        "websites": ["https://www.geeksforgeeks.org/dynamic-programming/"]
    },
    {
        "id": 13,
        "topic": "Greedy Algorithms",
        "description": "Greedy Algorithms are algorithms that make locally optimal choices at each stage with the hope of finding a global optimum. They are used in optimization problems where a series of choices must be made to achieve the best possible outcome.",
        "websites": ["https://www.geeksforgeeks.org/greedy-algorithms/"]
    },
    {
        "id": 14,
        "topic": "Backtracking",
        "description": "Backtracking is a technique for solving problems recursively by trying to build a solution incrementally and removing solutions that fail to satisfy the constraints of the problem at any point. It is used in constraint satisfaction problems, Sudoku solvers, and N-Queens problems.",
        "websites": ["https://www.geeksforgeeks.org/backtracking-algorithms/"]
    },
    {
        "id": 15,
        "topic": "Segment Tree",
        "description": "Segment Tree is a data structure used for storing and querying intervals or segments of an array. It allows efficient updates and queries (like finding the sum or minimum value in a range) in logarithmic time.",
        "websites": ["https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/"]
    },
    {
        "id": 16,
        "topic": "Fenwick Tree (Binary Indexed Tree)",
        "description": "Fenwick Tree, also known as Binary Indexed Tree (BIT), is a data structure used to efficiently compute prefix sums and update elements in a dynamic array. It supports efficient range queries and updates in logarithmic time.",
        "websites": ["https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/"]
    },
    {
        "id": 17,
        "topic": "Trie (Prefix Tree)",
        "description": "Trie, also known as Prefix Tree, is a special type of tree used to store a dynamic set of strings where each node represents a common prefix. It supports efficient prefix search, insertion, and deletion operations.",
        "websites": ["https://www.geeksforgeeks.org/trie-insert-and-search/"]
    },
    {
        "id": 18,
        "topic": "Disjoint Set (Union-Find)",
        "description": "Disjoint Set, also known as Union-Find, is a data structure that efficiently supports union and find operations to determine whether elements are in the same set and to merge two sets. It is used in Kruskal's algorithm for finding minimum spanning trees.",
        "websites": ["https://www.geeksforgeeks.org/union-find/"]
    },
    {
        "id": 19,
        "topic": "Topological Sorting",
        "description": "Topological Sorting is an ordering of vertices in a directed graph such that for every directed edge from vertex u to vertex v, u comes before v in the ordering. It is used in task scheduling, dependency resolution, and scheduling jobs in a CPU.",
        "websites": ["https://www.geeksforgeeks.org/topological-sorting/"]
    },
    {
        "id": 20,
        "topic": "Minimum Spanning Tree (MST)",
        "description": "Minimum Spanning Tree is a subset of edges of a connected, weighted graph that connects all vertices together without any cycles and with the minimum possible total edge weight. Algorithms include Prim's and Kruskal's algorithms.",
        "websites": ["https://www.geeksforgeeks.org/minimum-spanning-tree/"]
    },
    {
        "id": 21,
        "topic": "Articulation Points (Cut Vertices) and Bridges",
        "description": "Articulation Points and Bridges are key points and edges in a graph whose removal increases the number of connected components. They are used in network analysis, graph connectivity, and resilience.",
        "websites": ["https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/"]
    },
    {
        "id": 22,
        "topic": "Strongly Connected Components (SCC)",
        "description": "Strongly Connected Components are maximal subgraphs of a directed graph where every vertex is reachable from every other vertex within the same component. They are used in graph algorithms, component analysis, and network flow problems.",
        "websites": ["https://www.geeksforgeeks.org/strongly-connected-components/"]
    },
    {
        "id": 23,
        "topic": "Eulerian Path and Circuit",
        "description": "Eulerian Path is a trail in a graph that visits every edge exactly once. Eulerian Circuit is an Eulerian Path that starts and ends on the same vertex. They are used in network analysis, graph traversal, and pathfinding.",
        "websites": ["https://www.geeksforgeeks.org/eulerian-path-and-circuit/"]
    },
    {
        "id": 24,
        "topic": "Maximum Bipartite Matching",
        "description": "Maximum Bipartite Matching is the maximum number of edges that can be added to a bipartite graph without adding edges within a subset of vertices to form a matching. It is used in matching problems, scheduling, and network flow.",
        "websites": ["https://www.geeksforgeeks.org/maximum-bipartite-matching/"]
    },
    {
        "id": 25,
        "topic": "Maximum Flow in Network",
        "description": "Maximum Flow in Network is the maximum amount of flow that can be sent from a source to a sink in a flow network, which is a directed graph where each edge has a capacity. It is used in network optimization, traffic flow modeling, and assignment problems.",
        "websites": ["https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/"]
    },
    {
        "id": 26,
        "topic": "Minimum Cost Flow",
        "description": "Minimum Cost Flow is the minimum cost to send a certain amount of flow from a source to a sink in a flow network, where each edge has both a capacity and a cost per unit of flow. It is used in transportation planning, network design, and resource allocation.",
        "websites": ["https://www.geeksforgeeks.org/min-cost-flow-in-a-flow-network/"]
    },
    {
        "id": 27,
        "topic": "Network Flow Algorithms",
        "description": "Network Flow Algorithms are algorithms used to find maximum flow, minimum cost flow, or other flow-related problems in flow networks. They include Ford-Fulkerson, Edmonds-Karp, Dinic's, and Push-Relabel algorithms.",
        "websites": ["https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/"]
    },
    {
        "id": 28,
        "topic": "Stable Marriage Problem",
        "description": "Stable Marriage Problem is a problem of finding a stable matching between two sets of elements (usually men and women) such that no pair prefers each other over their current partners. It is used in matching problems, assignment problems, and resource allocation.",
        "websites": ["https://www.geeksforgeeks.org/stable-marriage-problem/"]
    },
    {
        "id": 29,
        "topic": "Traveling Salesman Problem (TSP)",
        "description": "Traveling Salesman Problem is a problem of finding the shortest possible route that visits each city exactly once and returns to the starting city. It is used in vehicle routing, logistics, and optimization problems.",
        "websites": ["https://www.geeksforgeeks.org/traveling-salesman-problem-tsp-implementation/"]
    },
    {
        "id": 30,
        "topic": "Knapsack Problem",
        "description": "Knapsack Problem is a problem of finding the optimal subset of items to include in a knapsack (bounded or unbounded) such that the total weight or volume is within capacity and the total value is maximized. It is used in resource allocation, finance, and decision-making problems.",
        "websites": ["https://www.geeksforgeeks.org/knapsack-problem/"]
    },
    {
        "id": 31,
        "topic": "Job Scheduling Problem",
        "description": "Job Scheduling Problem is a problem of scheduling tasks or jobs on machines or processors to optimize certain objectives such as minimizing completion time, maximizing resource utilization, or minimizing penalties. It is used in operations research, production scheduling, and project management.",
        "websites": ["https://www.geeksforgeeks.org/job-sequencing-problem/"]
    },
    {
        "id": 32,
        "topic": "Approximation Algorithms",
        "description": "Approximation Algorithms are algorithms that provide efficient solutions to optimization problems with provable guarantees on the quality of the solution (approximation ratio). They are used in NP-hard problems where finding exact solutions is computationally impractical.",
        "websites": ["https://www.geeksforgeeks.org/approximation-algorithms/"]
    },
    {
        "id": 33,
        "topic": "Randomized Algorithms",
        "description": "Randomized Algorithms are algorithms that use randomization as part of their logic to achieve better performance or probabilistic guarantees. They are used in problems where deterministic algorithms are inefficient or impractical.",
        "websites": ["https://www.geeksforgeeks.org/randomized-algorithms/"]
    },
    {
        "id": 34,
        "topic": "Parallel Algorithms",
        "description": "Parallel Algorithms are algorithms designed to execute multiple instructions simultaneously to solve problems faster on parallel computing architectures. They are used in high-performance computing, big data processing, and scientific simulations.",
        "websites": ["https://www.geeksforgeeks.org/parallel-computing/"]
    },
    {
        "id": 35,
        "topic": "Wavelet Tree",
        "description": "Wavelet Tree is a data structure that allows for efficient prefix sum queries and rank/select operations on dynamic bit sequences. It is used in problems involving binary strings and range queries.",
        "websites": ["https://www.geeksforgeeks.org/wavelet-tree-2/"]
    },
    {
        "id": 36,
        "topic": "Persistent Segment Tree",
        "description": "Persistent Segment Tree is a data structure that supports range queries and updates while preserving previous versions of itself. It is used in problems requiring multiple versions of segment trees.",
        "websites": ["https://www.geeksforgeeks.org/persistent-segment-tree-set-1-introduction/"]
    },
    {
        "id": 37,
        "topic": "Centroid Decomposition",
        "description": "Centroid Decomposition is a technique used to decompose a tree into smaller subtrees by finding centroid nodes. It is used in problems involving tree algorithms, dynamic programming on trees, and tree queries.",
        "websites": ["https://www.geeksforgeeks.org/centroid-decomposition-of-tree/"]
    },
    {
        "id": 38,
        "topic": "Splay Tree",
        "description": "Splay Tree is a self-adjusting binary search tree that provides efficient access to recently accessed elements by moving them to the root. It is used in problems requiring efficient dynamic sets and caches.",
        "websites": ["https://www.geeksforgeeks.org/splay-tree-set-1-insert/"]
    },
    {
        "id": 39,
        "topic": "Dijkstra's Algorithm",
        "description": "Dijkstra's Algorithm is a famous algorithm used to find the shortest paths from a source vertex to all other vertices in a weighted graph with non-negative weights. It is widely used in navigation systems and network routing protocols.",
        "websites": ["https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"]
    },
    {
        "id": 40,
        "topic": "Bellman-Ford Algorithm",
        "description": "Bellman-Ford Algorithm is an algorithm used to find the shortest paths from a source vertex to all other vertices in a weighted graph with negative weights. It is used in distributed systems, routing algorithms, and network analysis.",
        "websites": ["https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/"]
    },
    {
        "id": 41,
        "topic": "Floyd-Warshall Algorithm",
        "description": "Floyd-Warshall Algorithm is an algorithm used to find shortest paths between all pairs of vertices in a weighted graph with positive or negative weights (but no negative cycles). It is used in traffic routing, network analysis, and geographical distance calculation.",
        "websites": ["https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/"]
    },
    {
        "id": 42,
        "topic": "Johnson's Algorithm",
        "description": "Johnson's Algorithm is an algorithm used to find all pairs shortest paths in a sparse directed graph with possibly negative edge weights. It combines Bellman-Ford and Dijkstra's algorithms to handle negative weights efficiently.",
        "websites": ["https://www.geeksforgeeks.org/johnsons-algorithm/"]
    },
    {
        "id": 43,
        "topic": "Minimum Cut in Graph",
        "description": "Minimum Cut in Graph is the minimum number of edges that, if removed, would disconnect the graph into two separate components. It is used in network flow problems, network reliability analysis, and maximum flow algorithms.",
        "websites": ["https://www.geeksforgeeks.org/minimum-cut-in-a-directed-graph/"]
    },
    {
        "id": 44,
        "topic": "Maximum Bipartite Matching",
        "description": "Maximum Bipartite Matching is the maximum number of edges that can be added to a bipartite graph without adding edges within a subset of vertices to form a matching. It is used in matching problems, scheduling, and network flow.",
        "websites": ["https://www.geeksforgeeks.org/maximum-bipartite-matching/"]
    },
    {
        "id": 45,
        "topic": "Gaussian Elimination",
        "description": "Gaussian Elimination is an algorithm used to solve systems of linear equations by transforming the augmented matrix to row-echelon form and then back-substituting to find the solution. It is used in numerical analysis, scientific computing, and linear algebra problems.",
        "websites": ["https://www.geeksforgeeks.org/gaussian-elimination/"]
    },
    {
        "id": 46,
        "topic": "Fast Fourier Transform (FFT)",
        "description": "Fast Fourier Transform is an efficient algorithm for computing the Discrete Fourier Transform (DFT) and its inverse. It is used in signal processing, data compression, and pattern recognition.",
        "websites": ["https://www.geeksforgeeks.org/fast-fourier-transformation-poynomial-multiplication/"]
    },
    {
        "id": 47,
        "topic": "Primality Testing",
        "description": "Primality Testing is the process of determining whether a given number is prime or composite. Efficient algorithms include trial division, Miller-Rabin, and AKS primality tests. It is used in number theory, cryptography, and security protocols.",
        "websites": ["https://www.geeksforgeeks.org/primality-test-set-1-introduction-and-school-method/"]
    },
    {
        "id": 48,
        "topic": "Modular Arithmetic",
        "description": "Modular Arithmetic is arithmetic operations performed on integers where numbers wrap around upon reaching a certain value (modulus). It is used in cryptography, number theory, and digital logic design.",
        "websites": ["https://www.geeksforgeeks.org/modular-arithmetic/"]
    },
    {
        "id": 49,
        "topic": "Chinese Remainder Theorem",
        "description": "Chinese Remainder Theorem is a theorem that describes the conditions under which a system of simultaneous congruences have a simultaneous solution. It is used in number theory, cryptography, and digital signal processing.",
        "websites": ["https://www.geeksforgeeks.org/chinese-remainder-theorem-set-2-implementation/"]
    },
    {
        "id": 50,
        "topic": "Euclidean Algorithm",
        "description": "Euclidean Algorithm is an algorithm used to find the greatest common divisor (GCD) of two numbers by repeated application of the division remainder operation. It is used in cryptography, number theory, and computer science.",
        "websites": ["https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/"]
    },
    {
        "id": 51,
        "topic": "RSA Algorithm",
        "description": "RSA Algorithm is an asymmetric cryptographic algorithm used for secure data transmission. It involves the use of public and private keys for encryption and decryption. It is used in secure communication, digital signatures, and data encryption.",
        "websites": ["https://www.geeksforgeeks.org/rsa-algorithm-cryptography/"]
    },
    {
        "id": 52,
        "topic": "KMP Algorithm (Knuth-Morris-Pratt)",
        "description": "KMP Algorithm is a string matching algorithm that searches for occurrences of a pattern within a text string in linear time. It preprocesses the pattern to create a partial match table (LPS array) for efficient searching.",
        "websites": ["https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/"]
    },
    {
        "id": 53,
        "topic": "Rabin-Karp Algorithm",
        "description": "Rabin-Karp Algorithm is a string matching algorithm that searches for occurrences of a pattern within a text string using hashing. It preprocesses both the pattern and the substring of the text to efficiently check for matches.",
        "websites": ["https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/"]
    },
    {
        "id": 54,
        "topic": "Suffix Array and Suffix Tree",
        "description": "Suffix Array and Suffix Tree are data structures used to store all the suffixes of a string in lexicographical order and allow fast substring queries. They are used in pattern matching, bioinformatics, and text processing.",
        "websites": ["https://www.geeksforgeeks.org/suffix-array-set-1-introduction/"]
    },
    {
        "id": 55,
        "topic": "Manacher's Algorithm",
        "description": "Manacher's Algorithm is a linear-time algorithm used to find the longest palindromic substring in a string. It preprocesses the string to efficiently find palindromes around each character.",
        "websites": ["https://www.geeksforgeeks.org/manachers-algorithm-linear-time-longest-palindromic-substring-part-1/"]
    },
    {
        "id": 56,
        "topic": "Ternary Search",
        "description": "Ternary Search is a divide-and-conquer algorithm used to find the maximum or minimum value of a unimodal function (a function that reaches a maximum or minimum value in a certain interval). It divides the search interval into three parts and narrows down the search to the desired part.",
        "websites": ["https://www.geeksforgeeks.org/ternary-search/"]
    },
    {
        "id": 57,
        "topic": "Binary Search",
        "description": "Binary Search is a search algorithm that finds the position of a target value within a sorted array. It compares the target value with the middle element of the array and narrows down the search interval based on the comparison.",
        "websites": ["https://www.geeksforgeeks.org/binary-search/"]
    },
    {
        "id": 58,
        "topic": "Exponential Search",
        "description": "Exponential Search is a search algorithm that finds the position of a target value within a sorted array by doubling the search range until the target value is found or the end of the array is reached. It is used for unbounded arrays where the size is unknown.",
        "websites": ["https://www.geeksforgeeks.org/exponential-search/"]
    },
    {
        "id": 59,
        "topic": "Interpolation Search",
        "description": "Interpolation Search is a search algorithm that estimates the position of the target value based on the distribution of values in the array. It works best for uniformly distributed sorted arrays.",
        "websites": ["https://www.geeksforgeeks.org/interpolation-search/"]
    },
    {
        "id": 60,
        "topic": "Jump Search",
        "description": "Jump Search is a search algorithm that finds the position of a target value within a sorted array by jumping ahead by fixed steps and then performing linear search in the subrange. It works best for sorted arrays.",
        "websites": ["https://www.geeksforgeeks.org/jump-search/"]
    },
    {
        "id": 61,
        "topic": "BogoSort",
        "description": "BogoSort is a highly inefficient sorting algorithm that generates permutations of an array until it finds one that is sorted. It has an average-case time complexity of O((n+1)!).",
        "websites": ["https://www.geeksforgeeks.org/bogosort-permutation-sort/"]
    },
    {
        "id": 62,
        "topic": "Bubble Sort",
        "description": "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It has a worst-case time complexity of O(n^2).",
        "websites": ["https://www.geeksforgeeks.org/bubble-sort/"]
    },
    {
        "id": 63,
        "topic": "Selection Sort",
        "description": "Selection Sort is a simple sorting algorithm that repeatedly selects the minimum element from the unsorted portion of the array and swaps it with the first unsorted element. It has a worst-case time complexity of O(n^2).",
        "websites": ["https://www.geeksforgeeks.org/selection-sort/"]
    },
    {
        "id": 64,
        "topic": "Insertion Sort",
        "description": "Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time by inserting each element into its correct position. It has a worst-case time complexity of O(n^2).",
        "websites": ["https://www.geeksforgeeks.org/insertion-sort/"]
    },
    {
        "id": 65,
        "topic": "Merge Sort",
        "description": "Merge Sort is a divide-and-conquer sorting algorithm that divides the array into two halves, recursively sorts them, and then merges the sorted halves. It has a worst-case time complexity of O(n log n).",
        "websites": ["https://www.geeksforgeeks.org/merge-sort/"]
    },
    {
        "id": 66,
        "topic": "Quick Sort",
        "description": "Quick Sort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array around the pivot, recursively sorts each partition, and then combines the sorted partitions. It has a worst-case time complexity of O(n^2), but average-case time complexity of O(n log n).",
        "websites": ["https://www.geeksforgeeks.org/quick-sort/"]
    },
    {
        "id": 67,
        "topic": "Heap Sort",
        "description": "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. It builds a max heap and repeatedly extracts the maximum element from it to obtain a sorted array. It has a worst-case time complexity of O(n log n).",
        "websites": ["https://www.geeksforgeeks.org/heap-sort/"]
    },
    {
        "id": 68,
        "topic": "Counting Sort",
        "description": "Counting Sort is an integer sorting algorithm that works by counting the number of occurrences of each unique element and using arithmetic to determine the position of each element in the output sequence. It has a time complexity of O(n + k), where k is the range of the non-negative key values.",
        "websites": ["https://www.geeksforgeeks.org/counting-sort/"]
    },
    {
        "id": 69,
        "topic": "Radix Sort",
        "description": "Radix Sort is a non-comparative integer sorting algorithm that sorts numbers by processing individual digits. It sorts numbers digit by digit from the least significant digit to the most significant digit. It has a time complexity of O(d * (n + b)), where d is the number of digits, n is the number of elements, and b is the base (usually 10 or 2).",
        "websites": ["https://www.geeksforgeeks.org/radix-sort/"]
    },
    {
        "id": 70,
        "topic": "Bucket Sort",
        "description": "Bucket Sort is a sorting algorithm that works by distributing elements into a number of buckets and then sorting each bucket individually. It is useful when the input is uniformly distributed over a range. It has an average-case time complexity of O(n + k), where n is the number of elements and k is the number of buckets.",
        "websites": ["https://www.geeksforgeeks.org/bucket-sort-2/"]
    },
    {
        "id": 71,
        "topic": "Shell Sort",
        "description": "Shell Sort is a sorting algorithm that is a generalized version of Insertion Sort. It sorts distant elements first and then progressively reduces the interval between elements to be compared. It has an average-case time complexity of O(n log n).",
        "websites": ["https://www.geeksforgeeks.org/shellsort/"]
    },
    {
        "id": 72,
        "topic": "Topological Sorting",
        "description": "Topological Sorting is an ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering. It is used in task scheduling, dependency resolution, and graph algorithms.",
        "websites": ["https://www.geeksforgeeks.org/topological-sorting/"]
    },
    {
        "id": 73,
        "topic": "Graph Coloring",
        "description": "Graph Coloring is the assignment of labels (colors) to vertices of a graph such that no two adjacent vertices share the same color. It is used in scheduling, register allocation, and map coloring problems.",
        "websites": ["https://www.geeksforgeeks.org/graph-coloring-applications/"]
    },
    {
        "id": 74,
        "topic": "Articulation Points (Cut Vertices)",
        "description": "Articulation Points, or Cut Vertices, are vertices in a graph whose removal increases the number of connected components. They are used in network analysis, connectivity problems, and graph algorithms.",
        "websites": ["https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/"]
    },
    {
        "id": 75,
        "topic": "Biconnected Components",
        "description": "Biconnected Components are maximal subgraphs of a graph that are connected and removing any vertex would not disconnect the graph. They are used in network analysis, connectivity problems, and graph algorithms.",
        "websites": ["https://www.geeksforgeeks.org/biconnected-components/"]
    },
    {
        "id": 76,
        "topic": "Bridges in Graph",
        "description": "Bridges in Graph are edges in a graph that, if removed, increase the number of connected components. They are used in network analysis, connectivity problems, and graph algorithms.",
        "websites": ["https://www.geeksforgeeks.org/bridge-in-a-graph/"]
    },
    {
        "id": 77,
        "topic": "Strongly Connected Components (SCC)",
        "description": "Strongly Connected Components are maximal subgraphs of a directed graph where every vertex is reachable from every other vertex within the same component. They are used in network analysis, cycle detection, and graph algorithms.",
        "websites": ["https://www.geeksforgeeks.org/strongly-connected-components/"]
    },
    {
        "id": 78,
        "topic": "Minimum Spanning Tree (MST)",
        "description": "Minimum Spanning Tree is a subset of edges that connects all vertices in a connected, edge-weighted graph with the minimum possible total edge weight. It is used in network design, clustering, and approximation algorithms.",
        "websites": ["https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/"]
    },
    {
        "id": 79,
        "topic": "Kruskal's Algorithm",
        "description": "Kruskal's Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST) of a connected, edge-weighted graph. It repeatedly adds the smallest edge that does not form a cycle until all vertices are connected.",
        "websites": ["https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/"]
    },
    {
        "id": 80,
        "topic": "Prim's Algorithm",
        "description": "Prim's Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST) of a connected, edge-weighted graph. It grows the MST one vertex at a time by adding the minimum weight edge that connects a vertex in the MST to a vertex outside the MST.",
        "websites": ["https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/"]
    },
    {
        "id": 81,
        "topic": "Sieve of Eratosthenes",
        "description": "Sieve of Eratosthenes is an ancient algorithm used to find all prime numbers up to a given limit. It marks the non-prime numbers by iteratively marking the multiples of each prime number starting from 2.",
        "websites": ["https://www.geeksforgeeks.org/sieve-of-eratosthenes/"]
    },
    {
        "id": 82,
        "topic": "Segment Tree",
        "description": "Segment Tree is a data structure that allows answering range queries and updates in logarithmic time. It is useful for problems that require queries on intervals, such as finding the sum, minimum, maximum, greatest common divisor, or least common ancestor in an array.",
        "websites": ["https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/"]
    },
    {
        "id": 83,
        "topic": "Binary Indexed Tree (BIT or Fenwick Tree)",
        "description": "Binary Indexed Tree (BIT or Fenwick Tree) is a data structure that allows answering range queries and point updates in logarithmic time. It is used to solve problems like prefix sum and range sum queries efficiently.",
        "websites": ["https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/"]
    },
    {
        "id": 84,
        "topic": "Suffix Array",
        "description": "Suffix Array is an array of integers giving the starting positions of suffixes of a string in lexicographical order. It is used in data compression, pattern matching, and bioinformatics.",
        "websites": ["https://www.geeksforgeeks.org/suffix-array-set-1-introduction/"]
    },
    {
        "id": 85,
        "topic": "Suffix Tree",
        "description": "Suffix Tree is a compressed trie of all suffixes of a given text. It allows for fast pattern matching queries, substring search, and longest common substring finding. It is used in bioinformatics, data compression, and text processing.",
        "websites": ["https://www.geeksforgeeks.org/ukkonens-suffix-tree-construction-part-1/"]
    },
    {
        "id": 86,
        "topic": "Bloom Filter",
        "description": "Bloom Filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set. It may return false positives, but never false negatives. It is used in caching, spell checking, and network routing.",
        "websites": ["https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/"]
    },
    {
        "id": 87,
        "topic": "Minimax Algorithm",
        "description": "Minimax Algorithm is a decision-making algorithm used in game theory and decision theory for minimizing the potential loss for a worst-case scenario. It is used in game playing, adversarial planning, and artificial intelligence.",
        "websites": ["https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/"]
    },
    {
        "id": 88,
        "topic": "Alpha-Beta Pruning",
        "description": "Alpha-Beta Pruning is an optimization technique for the Minimax Algorithm that reduces the number of nodes evaluated in the search tree. It is used in game playing, adversarial planning, and artificial intelligence.",
        "websites": ["https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning/"]
    },
    {
        "id": 89,
        "topic": "Expectimax Algorithm",
        "description": "Expectimax Algorithm is a variant of the Minimax Algorithm used in decision-making under uncertainty and in game theory where the outcome depends on chance. It is used in game playing, probabilistic planning, and artificial intelligence.",
        "websites": ["https://www.geeksforgeeks.org/expectimax-algorithm/"]
    }
]



export const videos =[  {
    "id": 2,
    "topic": "Videos",
    "videos": [
        "https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "https://www.youtube.com/watch?v=8hly31xKli0",
        "https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
        "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
       
    ]
}];