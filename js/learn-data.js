// ============================================================
// Studgine Learn — Free Engineering Learning Platform Data
// Complete educational resource database
// ============================================================

window.LEARN_DATA = {
  departments: [
    {
      id: "cse",
      name: "Computer Science Engineering",
      icon: "💻",
      color: "#3B82F6",
      bg: "#EFF6FF",
      desc: "Master algorithms, systems, and software development fundamentals",
      subjectCount: 8,
      topicCount: 44,
      subjects: [
        {
          id: "data-structures",
          name: "Data Structures & Algorithms",
          icon: "🌳",
          desc: "Learn efficient data organization and problem-solving techniques",
          topics: [
            {
              id: "arrays-strings",
              name: "Arrays & Strings",
              overview: "Arrays and strings are fundamental linear data structures used to store collections of elements. Arrays provide constant-time access to elements by index, while strings are specialized arrays for text data. Understanding these structures is crucial for solving computational problems efficiently.",
              resources: {
                openTextbooks: [
                  {
                    title: "Algorithms by Jeff Erickson",
                    author: "Jeff Erickson (UIUC)",
                    url: "https://jeffe.cs.illinois.edu/teaching/algorithms/",
                    license: "CC BY 4.0"
                  },
                  {
                    title: "Open Data Structures",
                    author: "Pat Morin",
                    url: "https://opendatastructures.org/",
                    license: "CC BY 2.5"
                  }
                ],
                mitOcw: [
                  {
                    title: "Introduction to Algorithms",
                    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/",
                    course: "6.006"
                  }
                ],
                nptel: [
                  {
                    title: "Data Structures and Algorithms",
                    url: "https://nptel.ac.in/courses/106102064",
                    instructor: "Prof. Naveen Garg, IIT Delhi"
                  }
                ],
                saylor: [
                  {
                    title: "Data Structures",
                    url: "https://learn.saylor.org/course/view.php?id=66"
                  }
                ],
                libreTexts: [
                  {
                    title: "Data Structures",
                    url: "https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Data_Structures_(Wikibook)"
                  }
                ],
                govPdfs: []
              },
              summaryNotes: "Arrays store elements in contiguous memory with O(1) access time. Key operations: insertion O(n), deletion O(n), search O(n) linear / O(log n) binary. Strings are immutable in many languages. Common problems: two-pointer technique, sliding window, prefix sums.",
              practiceQuestions: [
                { q: "What is the time complexity of accessing an element in an array by index?", a: "O(1) - constant time, as arrays provide direct memory access using index arithmetic." },
                { q: "How does a dynamic array (like ArrayList/Vector) grow when capacity is exceeded?", a: "It creates a new larger array (typically 2x size), copies all elements, and updates the reference. Amortized O(1) insertion." },
                { q: "Explain the two-pointer technique for array problems.", a: "Uses two pointers moving through the array simultaneously (same/opposite direction) to solve problems in O(n) time, avoiding nested loops. Common in sorted array problems." }
              ]
            },
            {
              id: "linked-lists",
              name: "Linked Lists",
              overview: "Linked lists are dynamic data structures where elements (nodes) are connected via pointers. Unlike arrays, they don't require contiguous memory and support efficient insertion/deletion. Variants include singly linked, doubly linked, and circular lists.",
              resources: {
                openTextbooks: [
                  {
                    title: "Open Data Structures - Linked Lists",
                    author: "Pat Morin",
                    url: "https://opendatastructures.org/ods-java/3_Linked_Lists.html",
                    license: "CC BY 2.5"
                  }
                ],
                mitOcw: [
                  {
                    title: "Linked Lists - MIT 6.006",
                    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-5-linear-sorting/",
                    course: "6.006"
                  }
                ],
                nptel: [
                  {
                    title: "Linked List Operations",
                    url: "https://nptel.ac.in/courses/106102064",
                    instructor: "Prof. Naveen Garg, IIT Delhi"
                  }
                ],
                saylor: [],
                libreTexts: [
                  {
                    title: "Linked Lists Tutorial",
                    url: "https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Data_Structures_(Wikibook)/Linked_Lists"
                  }
                ],
                govPdfs: []
              },
              summaryNotes: "Singly linked: each node has data + next pointer. Doubly linked: adds prev pointer for bidirectional traversal. Operations: insert O(1) at head, delete O(n) search required, access O(n). Memory overhead: extra pointer(s) per node. Advantages: dynamic size, efficient insertion/deletion at known positions.",
              practiceQuestions: [
                { q: "Why is insertion at the beginning of a linked list O(1)?", a: "Only requires updating head pointer and new node's next pointer - no shifting of elements needed unlike arrays." },
                { q: "How do you detect a cycle in a linked list?", a: "Floyd's cycle detection: use slow (1 step) and fast (2 steps) pointers. If they meet, cycle exists. O(n) time, O(1) space." },
                { q: "What's the main disadvantage of linked lists vs arrays?", a: "No random access - must traverse from head to reach nth element (O(n)). Also higher memory overhead due to pointers." }
              ]
            },
            {
              id: "stacks-queues",
              name: "Stacks & Queues",
              overview: "Stacks (LIFO - Last In First Out) and Queues (FIFO - First In First Out) are abstract data types with restricted access patterns. Stacks support push/pop operations, while queues support enqueue/dequeue. Both are fundamental for solving numerous computational problems.",
              resources: {
                openTextbooks: [
                  {
                    title: "Open Data Structures - Stacks and Queues",
                    author: "Pat Morin",
                    url: "https://opendatastructures.org/ods-java/2_Array_Based_Lists.html",
                    license: "CC BY 2.5"
                  }
                ],
                mitOcw: [
                  {
                    title: "Stacks and Queues",
                    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/",
                    course: "6.006"
                  }
                ],
                nptel: [
                  {
                    title: "Stack and Queue Data Structures",
                    url: "https://nptel.ac.in/courses/106102064",
                    instructor: "Prof. Naveen Garg, IIT Delhi"
                  }
                ],
                saylor: [
                  {
                    title: "Stacks and Queues",
                    url: "https://learn.saylor.org/course/view.php?id=66"
                  }
                ],
                libreTexts: [
                  {
                    title: "Stacks and Queues",
                    url: "https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Data_Structures_(Wikibook)/Stacks_and_Queues"
                  }
                ],
                govPdfs: []
              },
              summaryNotes: "Stack: push(x), pop(), peek() all O(1). Applications: function call stack, expression evaluation, backtracking, undo operations. Queue: enqueue(x), dequeue() both O(1). Types: simple queue, circular queue, priority queue, deque. Applications: BFS, scheduling, buffering.",
              practiceQuestions: [
                { q: "How do you implement a queue using two stacks?", a: "Use stack1 for enqueue (push). For dequeue: if stack2 empty, pop all from stack1 to stack2, then pop from stack2. Amortized O(1)." },
                { q: "What is the application of stack in recursion?", a: "Function call stack stores activation records (local vars, return address). Each recursive call pushes frame; return pops. Stack overflow if too deep." },
                { q: "Why use a circular queue instead of a simple queue?", a: "Circular queue reuses freed space at front after dequeue, avoiding wasted array space. Efficient memory utilization in fixed-size implementations." }
              ]
            },
            {
              id: "trees-bst",
              name: "Trees & Binary Search Trees",
              overview: "Trees are hierarchical data structures with a root and child nodes. Binary Search Trees (BST) maintain the property: left subtree < node < right subtree, enabling efficient O(log n) search, insertion, and deletion in balanced cases. Foundation for many advanced structures.",
              resources: {
                openTextbooks: [
                  {
                    title: "Algorithms - Trees by Jeff Erickson",
                    author: "Jeff Erickson",
                    url: "https://jeffe.cs.illinois.edu/teaching/algorithms/book/05-backtracking.pdf",
                    license: "CC BY 4.0"
                  },
                  {
                    title: "Binary Search Trees - ODS",
                    author: "Pat Morin",
                    url: "https://opendatastructures.org/ods-java/6_Binary_Trees.html",
                    license: "CC BY 2.5"
                  }
                ],
                mitOcw: [
                  {
                    title: "Binary Search Trees",
                    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-5-binary-search-trees/",
                    course: "6.006"
                  }
                ],
                nptel: [
                  {
                    title: "Trees and Binary Search Trees",
                    url: "https://nptel.ac.in/courses/106102064",
                    instructor: "Prof. Naveen Garg, IIT Delhi"
                  }
                ],
                saylor: [],
                libreTexts: [
                  {
                    title: "Binary Trees",
                    url: "https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Data_Structures_(Wikibook)/Trees"
                  }
                ],
                govPdfs: []
              },
              summaryNotes: "Tree terminology: root, leaf, parent, child, height, depth. BST property enables binary search. Traversals: inorder (sorted), preorder, postorder, level-order. Balanced BSTs (AVL, Red-Black) guarantee O(log n) operations. Worst case unbalanced: O(n) degenerates to linked list.",
              practiceQuestions: [
                { q: "What is the time complexity of searching in a balanced BST?", a: "O(log n) - each comparison eliminates half the remaining nodes, similar to binary search on sorted array." },
                { q: "How does inorder traversal of a BST produce sorted output?", a: "Inorder (left-root-right) visits nodes in ascending order due to BST property: all left < root < all right." },
                { q: "When does a BST degenerate into O(n) operations?", a: "When insertions are in sorted order (ascending/descending), creating a skewed tree resembling a linked list. Solved by self-balancing trees." }
              ]
            },
            {
              id: "heaps-priority-queues",
              name: "Heaps & Priority Queues",
              overview: "Heaps are complete binary trees satisfying the heap property (max-heap: parent ≥ children, min-heap: parent ≤ children). They efficiently implement priority queues with O(log n) insertion/deletion and O(1) access to max/min element. Used in heap sort, Dijkstra's, and A* algorithms.",
              resources: {
                openTextbooks: [
                  {
                    title: "Algorithms - Priority Queues",
                    author: "Jeff Erickson",
                    url: "https://jeffe.cs.illinois.edu/teaching/algorithms/",
                    license: "CC BY 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Heaps and Heap Sort",
                    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-4-heaps-and-heap-sort/",
                    course: "6.006"
                  }
                ],
                nptel: [
                  {
                    title: "Heap Data Structure",
                    url: "https://nptel.ac.in/courses/106102064",
                    instructor: "Prof. Naveen Garg, IIT Delhi"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "Binary heap: array-based complete binary tree. Parent at i, children at 2i+1 and 2i+2. Operations: insert O(log n) with bubble-up, extractMax/Min O(log n) with bubble-down, peek O(1). Heapify: build heap in O(n). Applications: priority scheduling, median maintenance, k-largest elements.",
              practiceQuestions: [
                { q: "Why is heapify (building a heap from array) O(n) and not O(n log n)?", a: "Most nodes are near leaves requiring few swaps. Mathematical proof: sum of heights weighted by node count = O(n)." },
                { q: "How do you find the k-th largest element using a heap?", a: "Use min-heap of size k. Insert elements; if size > k, remove min. Final min is k-th largest. Time: O(n log k)." },
                { q: "What's the difference between a heap and a BST?", a: "Heap: only partial order (parent-child relationship), O(1) min/max access, array-based. BST: total order (inorder sorted), O(log n) search, pointer-based." }
              ]
            },
            {
              id: "graphs-basics",
              name: "Graph Fundamentals",
              overview: "Graphs model pairwise relationships between objects. Consist of vertices (nodes) and edges (connections). Types: directed/undirected, weighted/unweighted, cyclic/acyclic. Representations: adjacency matrix O(V²) space, adjacency list O(V+E) space. Foundation for network analysis, pathfinding, and optimization.",
              resources: {
                openTextbooks: [
                  {
                    title: "Algorithms - Graph Algorithms",
                    author: "Jeff Erickson",
                    url: "https://jeffe.cs.illinois.edu/teaching/algorithms/book/06-graphs.pdf",
                    license: "CC BY 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Graph Algorithms",
                    url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-13-breadth-first-search-bfs/",
                    course: "6.006"
                  }
                ],
                nptel: [
                  {
                    title: "Graph Theory and Algorithms",
                    url: "https://nptel.ac.in/courses/106102064",
                    instructor: "Prof. Naveen Garg, IIT Delhi"
                  }
                ],
                saylor: [],
                libreTexts: [
                  {
                    title: "Graph Theory",
                    url: "https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Data_Structures_(Wikibook)/Graphs"
                  }
                ],
                govPdfs: []
              },
              summaryNotes: "Graph G = (V, E). Representations: adjacency matrix (dense graphs, O(1) edge query), adjacency list (sparse graphs, memory efficient). Traversals: BFS (level-order, shortest path in unweighted), DFS (explore deeply, cycle detection, topological sort). Dijkstra for weighted shortest path. MST via Prim's/Kruskal's.",
              practiceQuestions: [
                { q: "When should you use adjacency matrix vs adjacency list?", a: "Matrix: dense graphs (E ≈ V²), frequent edge existence queries O(1). List: sparse graphs (E << V²), memory efficient, better for traversal." },
                { q: "What's the difference between BFS and DFS?", a: "BFS: queue-based, level-order, finds shortest path (unweighted), O(V+E). DFS: stack/recursion, explores deeply, detects cycles, O(V+E)." },
                { q: "How do you detect a cycle in an undirected graph?", a: "DFS: if visiting a vertex that's visited and not the parent, cycle exists. Or use Union-Find: if adding edge connects vertices already in same set, cycle exists." }
              ]
            }
          ]
        },
        {
          id: "operating-systems",
          name: "Operating Systems",
          icon: "🖥️",
          desc: "Understand process management, memory, and system resource coordination",
          topics: [
            {
              id: "process-management",
              name: "Process Management",
              overview: "Processes are executing programs managed by the OS. Each has its own memory space, program counter, and resources. Process management includes creation, scheduling, synchronization, and termination. Understanding process states, context switching, and the Process Control Block (PCB) is fundamental.",
              resources: {
                openTextbooks: [
                  {
                    title: "Operating Systems: Three Easy Pieces",
                    author: "Remzi H. Arpaci-Dusseau and Andrea C. Arpaci-Dusseau",
                    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
                    license: "CC BY-NC-SA 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Operating System Engineering",
                    url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/",
                    course: "6.828"
                  }
                ],
                nptel: [
                  {
                    title: "Operating Systems",
                    url: "https://nptel.ac.in/courses/106105214",
                    instructor: "Prof. Santanu Chattopadhyay, IIT Kharagpur"
                  }
                ],
                saylor: [
                  {
                    title: "Operating Systems",
                    url: "https://learn.saylor.org/course/view.php?id=94"
                  }
                ],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "Process states: New, Ready, Running, Waiting, Terminated. Context switch: save state of current process (PCB), load state of next process. Process creation: fork() creates child, exec() replaces process image. IPC methods: pipes, message queues, shared memory, signals. Threads: lightweight processes sharing memory space.",
              practiceQuestions: [
                { q: "What is the difference between a process and a thread?", a: "Process: independent execution with own memory space. Thread: execution unit within process, shares memory/resources. Threads are lightweight, faster context switching." },
                { q: "Explain the fork() system call.", a: "Creates child process as copy of parent. Returns 0 to child, child PID to parent, -1 on error. Child has separate memory space (copy-on-write optimization)." },
                { q: "What happens during a context switch?", a: "1) Save state (registers, PC, stack pointer) of current process to PCB. 2) Update process state. 3) Load state of next process from its PCB. 4) Switch to new process execution." }
              ]
            },
            {
              id: "cpu-scheduling",
              name: "CPU Scheduling",
              overview: "CPU scheduling determines which process runs when multiple processes are ready. Goals: maximize CPU utilization, throughput; minimize turnaround time, waiting time, response time. Algorithms include FCFS, SJF, Priority, Round Robin, and Multilevel Queue scheduling.",
              resources: {
                openTextbooks: [
                  {
                    title: "OSTEP - CPU Scheduling",
                    author: "Remzi & Andrea Arpaci-Dusseau",
                    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf",
                    license: "CC BY-NC-SA 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Scheduling",
                    url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/",
                    course: "6.828"
                  }
                ],
                nptel: [
                  {
                    title: "CPU Scheduling Algorithms",
                    url: "https://nptel.ac.in/courses/106105214",
                    instructor: "Prof. Santanu Chattopadhyay, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "FCFS: simple but convoy effect. SJF: optimal avg waiting time but starvation possible, needs burst time prediction. Priority: starvation risk (solution: aging). Round Robin: time quantum, fair, good response time, context switch overhead. Multilevel: separate queues by priority. Real-time: deadline-based, hard vs soft deadlines.",
              practiceQuestions: [
                { q: "What is the convoy effect in FCFS scheduling?", a: "Short processes wait for long process to complete, decreasing average waiting time. All processes stuck behind one long process like convoy behind slow truck." },
                { q: "Why is Round Robin considered fair?", a: "Each process gets equal CPU time slices (quantum). No process monopolizes CPU. Prevents starvation. Good for time-sharing systems with interactive users." },
                { q: "How does aging prevent starvation in priority scheduling?", a: "Gradually increase priority of waiting processes over time. Eventually, even low-priority processes reach high priority and get scheduled." }
              ]
            },
            {
              id: "synchronization",
              name: "Process Synchronization",
              overview: "Synchronization coordinates concurrent processes accessing shared resources. Critical section problem requires mutual exclusion, progress, and bounded waiting. Solutions include locks, semaphores, monitors, and condition variables. Understanding race conditions and deadlocks is essential.",
              resources: {
                openTextbooks: [
                  {
                    title: "OSTEP - Concurrency",
                    author: "Remzi & Andrea Arpaci-Dusseau",
                    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf",
                    license: "CC BY-NC-SA 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Synchronization",
                    url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/",
                    course: "6.828"
                  }
                ],
                nptel: [
                  {
                    title: "Process Synchronization",
                    url: "https://nptel.ac.in/courses/106105214",
                    instructor: "Prof. Santanu Chattopadhyay, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "Critical section: code accessing shared resource. Mutex: binary lock for mutual exclusion. Semaphore: counting/signaling mechanism (P = wait, V = signal). Monitor: high-level synchronization construct with condition variables. Classic problems: Producer-Consumer, Readers-Writers, Dining Philosophers. Deadlock conditions: mutual exclusion, hold & wait, no preemption, circular wait.",
              practiceQuestions: [
                { q: "What is a race condition?", a: "Outcome depends on timing of uncontrolled concurrent access to shared resource. Result is unpredictable. Example: two threads incrementing shared counter without synchronization." },
                { q: "Explain the difference between mutex and semaphore.", a: "Mutex: binary lock (0/1), ownership (only owner can unlock), mutual exclusion. Semaphore: counting (0 to n), no ownership, signaling mechanism, can count resources." },
                { q: "What are the four necessary conditions for deadlock?", a: "1) Mutual exclusion (exclusive resource access). 2) Hold and wait (hold while requesting more). 3) No preemption (can't force release). 4) Circular wait (cycle in resource graph)." }
              ]
            },
            {
              id: "memory-management",
              name: "Memory Management",
              overview: "Memory management allocates and deallocates memory for processes, ensuring protection and efficient utilization. Techniques include contiguous allocation, paging, segmentation, and virtual memory. Understanding address translation, page tables, and memory hierarchies is crucial.",
              resources: {
                openTextbooks: [
                  {
                    title: "OSTEP - Memory Management",
                    author: "Remzi & Andrea Arpaci-Dusseau",
                    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf",
                    license: "CC BY-NC-SA 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Virtual Memory",
                    url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/",
                    course: "6.828"
                  }
                ],
                nptel: [
                  {
                    title: "Memory Management",
                    url: "https://nptel.ac.in/courses/106105214",
                    instructor: "Prof. Santanu Chattopadhyay, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "Logical vs physical address: MMU translates. Contiguous allocation: fixed/variable partitions, fragmentation issues. Paging: fixed-size pages eliminate external fragmentation, page table for translation. Segmentation: variable-size logical units. Virtual memory: pages stored on disk, loaded on demand (page fault). Page replacement: FIFO, LRU, Optimal. TLB: cache for page table entries.",
              practiceQuestions: [
                { q: "What is the difference between internal and external fragmentation?", a: "Internal: wasted space within allocated block (memory allocated but unused). External: free memory scattered in small chunks, can't satisfy large request despite sufficient total." },
                { q: "How does paging eliminate external fragmentation?", a: "Fixed-size pages fit into any available frame. No variable-sized holes. All free frames are usable. Only internal fragmentation in last page of process." },
                { q: "Explain the concept of page fault.", a: "Reference to page not in physical memory triggers page fault interrupt. OS loads page from disk to memory, updates page table, restarts instruction. Transparent to process." }
              ]
            },
            {
              id: "virtual-memory",
              name: "Virtual Memory",
              overview: "Virtual memory allows processes to use more memory than physically available by storing pages on disk. Enables multiprogramming, process isolation, and efficient memory use. Demand paging loads pages only when needed. Page replacement algorithms manage limited physical frames.",
              resources: {
                openTextbooks: [
                  {
                    title: "OSTEP - Virtual Memory",
                    author: "Remzi & Andrea Arpaci-Dusseau",
                    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf",
                    license: "CC BY-NC-SA 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Page Replacement",
                    url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/",
                    course: "6.828"
                  }
                ],
                nptel: [
                  {
                    title: "Virtual Memory Concepts",
                    url: "https://nptel.ac.in/courses/106105214",
                    instructor: "Prof. Santanu Chattopadhyay, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "Demand paging: load pages on first access (page fault). Locality of reference: temporal (recently used) and spatial (nearby addresses). Page replacement: FIFO (simple, Belady's anomaly), Optimal (best but impractical), LRU (approximate optimal, expensive), LRU approximations (Clock, Second Chance). Thrashing: excessive paging, system slows. Working set model prevents thrashing.",
              practiceQuestions: [
                { q: "What is Belady's Anomaly?", a: "In FIFO page replacement, increasing number of frames can sometimes increase page faults. Counter-intuitive behavior. Doesn't occur in stack algorithms like LRU." },
                { q: "Why is pure LRU difficult to implement?", a: "Requires tracking order of all page accesses. Expensive in hardware. Approximations like Clock algorithm use reference bit, trading accuracy for efficiency." },
                { q: "What is thrashing and how is it prevented?", a: "Thrashing: excessive paging, CPU spends more time paging than executing. Caused by over-commitment. Prevention: working set model, local replacement, reduce multiprogramming degree." }
              ]
            },
            {
              id: "file-systems",
              name: "File Systems",
              overview: "File systems organize and manage data on storage devices. Implement file operations (create, read, write, delete), directory structures, and disk space allocation. Methods include contiguous, linked, and indexed allocation. File system consistency and crash recovery are critical concerns.",
              resources: {
                openTextbooks: [
                  {
                    title: "OSTEP - File Systems",
                    author: "Remzi & Andrea Arpaci-Dusseau",
                    url: "https://pages.cs.wisc.edu/~remzi/OSTEP/file-intro.pdf",
                    license: "CC BY-NC-SA 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "File Systems",
                    url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/",
                    course: "6.828"
                  }
                ],
                nptel: [
                  {
                    title: "File System Implementation",
                    url: "https://nptel.ac.in/courses/106105214",
                    instructor: "Prof. Santanu Chattopadhyay, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "File attributes: name, type, size, permissions, timestamps. Directory: maps names to file metadata. Tree structure with absolute/relative paths. Allocation: contiguous (fast but fragmentation), linked (no fragmentation but slow random), indexed (inode with pointers). Free space: bitmap or linked list. Journaling: log changes before commit for crash recovery. RAID: redundancy for reliability.",
              practiceQuestions: [
                { q: "What is an inode?", a: "Index node: data structure storing file metadata (size, permissions, timestamps) and pointers to data blocks. In Unix-like systems, directory entry maps filename to inode number." },
                { q: "How does journaling improve file system reliability?", a: "Write-ahead log: record intended changes before executing them. On crash, replay journal to recover consistent state. Prevents inconsistency from partial updates." },
                { q: "Compare contiguous vs indexed file allocation.", a: "Contiguous: fast sequential/random access, external fragmentation, hard to grow. Indexed: flexible growth, no external fragmentation, indirection overhead, efficient for large files." }
              ]
            }
          ]
        },
        {
          id: "computer-networks",
          name: "Computer Networks",
          icon: "🌐",
          desc: "Explore network protocols, architecture, and communication systems",
          topics: [
            {
              id: "osi-model",
              name: "OSI & TCP/IP Models",
              overview: "Network models organize communication functions into layers. OSI (7 layers): Physical, Data Link, Network, Transport, Session, Presentation, Application. TCP/IP (4 layers): Network Access, Internet, Transport, Application. Layering enables modular design, interoperability, and separation of concerns.",
              resources: {
                openTextbooks: [
                  {
                    title: "Computer Networks: A Systems Approach",
                    author: "Peterson & Davie",
                    url: "https://book.systemsapproach.org/",
                    license: "CC BY 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Computer Networks",
                    url: "https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/",
                    course: "6.829"
                  }
                ],
                nptel: [
                  {
                    title: "Computer Networks",
                    url: "https://nptel.ac.in/courses/106105183",
                    instructor: "Prof. Sujoy Ghosh, IIT Kharagpur"
                  }
                ],
                saylor: [
                  {
                    title: "Computer Networks",
                    url: "https://learn.saylor.org/course/view.php?id=84"
                  }
                ],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "OSI: Physical (bits, cables), Data Link (frames, MAC), Network (packets, IP routing), Transport (segments, TCP/UDP), Session (connections), Presentation (encryption, encoding), Application (HTTP, FTP). TCP/IP: simpler, Internet-focused. Encapsulation: each layer adds header. Protocol Data Units: bit, frame, packet, segment, data.",
              practiceQuestions: [
                { q: "Why is network layering important?", a: "Modularity: each layer provides service to above, uses below. Changes in one layer don't affect others. Enables innovation, standardization, interoperability. Simplifies design and troubleshooting." },
                { q: "What happens at each TCP/IP layer when you send an email?", a: "Application: email client uses SMTP. Transport: TCP segments data. Internet: IP packets route across networks. Network Access: frames transmitted on physical medium. Reverse at receiver." },
                { q: "How does encapsulation work?", a: "Each layer adds its header (sometimes trailer) to data from above. Application data → TCP segments → IP packets → Ethernet frames → bits. De-encapsulation reverses at receiver." }
              ]
            },
            {
              id: "ip-addressing",
              name: "IP Addressing & Subnetting",
              overview: "IP addresses uniquely identify network interfaces. IPv4: 32-bit (4 octets), classful (A/B/C) or classless (CIDR). IPv6: 128-bit, solves address exhaustion. Subnetting divides networks into smaller subnets. Subnet mask determines network vs host portions. CIDR notation: IP/prefix length.",
              resources: {
                openTextbooks: [
                  {
                    title: "Computer Networks - IP Addressing",
                    author: "Peterson & Davie",
                    url: "https://book.systemsapproach.org/internetworking.html",
                    license: "CC BY 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "IP Addressing",
                    url: "https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/",
                    course: "6.829"
                  }
                ],
                nptel: [
                  {
                    title: "IP Addressing and Subnetting",
                    url: "https://nptel.ac.in/courses/106105183",
                    instructor: "Prof. Sujoy Ghosh, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "IPv4 classes: A (0.0.0.0-127.255.255.255), B (128.0-191.255), C (192.0-223.255). Private: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Subnet mask: network bits=1, host bits=0. CIDR: flexible prefix lengths. NAT: translates private to public IPs. IPv6: 8 groups of 4 hex digits, no NAT needed, simplified header.",
              practiceQuestions: [
                { q: "How do you calculate the number of hosts in a subnet?", a: "2^(host bits) - 2. Subtract 2 for network address and broadcast address. Example: /24 has 32-24=8 host bits, so 2^8-2=254 hosts." },
                { q: "What is CIDR and why is it used?", a: "Classless Inter-Domain Routing: flexible prefix lengths (not tied to class boundaries). Reduces routing table size, efficient IP allocation, prevents address exhaustion." },
                { q: "Why was IPv6 developed?", a: "IPv4 address exhaustion (4.3 billion addresses). IPv6 provides 340 undecillion addresses, simplified header, built-in security (IPsec), no fragmentation by routers." }
              ]
            },
            {
              id: "routing-protocols",
              name: "Routing Protocols",
              overview: "Routing protocols determine paths for data packets across networks. Distance Vector (RIP): Bellman-Ford, periodic updates, count-to-infinity problem. Link State (OSPF): Dijkstra, topology database, faster convergence. BGP: path vector for inter-AS routing. Metrics include hop count, bandwidth, delay.",
              resources: {
                openTextbooks: [
                  {
                    title: "Computer Networks - Routing",
                    author: "Peterson & Davie",
                    url: "https://book.systemsapproach.org/scaling.html",
                    license: "CC BY 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Routing Algorithms",
                    url: "https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/",
                    course: "6.829"
                  }
                ],
                nptel: [
                  {
                    title: "Routing Algorithms",
                    url: "https://nptel.ac.in/courses/106105183",
                    instructor: "Prof. Sujoy Ghosh, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "Static routing: manual configuration, simple, no overhead. Dynamic: adapts to topology changes. RIP: max 15 hops, updates every 30s, slow convergence. OSPF: areas for scalability, link state advertisements, fast convergence. BGP: policy-based, AS path prevents loops, used between ISPs. Metrics: RIP=hop count, OSPF=cost (bandwidth), BGP=AS path + policies.",
              practiceQuestions: [
                { q: "What is the count-to-infinity problem in RIP?", a: "When link fails, routers may keep incrementing distance through each other, slowly converging. Loops form. Solutions: split horizon, poison reverse, hold-down timers. Limited to 15 hops." },
                { q: "How does OSPF avoid count-to-infinity?", a: "Link-state protocol: each router has complete topology map via LSAs. Runs Dijkstra to compute shortest paths. No counting through neighbors, immediate convergence on topology change." },
                { q: "Why is BGP policy-based rather than metric-based?", a: "Inter-domain routing involves business relationships, political considerations. ISPs prefer certain paths (customers over peers), avoid competitors. Policies override shortest path optimization." }
              ]
            },
            {
              id: "transport-protocols",
              name: "Transport Layer Protocols",
              overview: "Transport layer provides end-to-end communication. TCP: connection-oriented, reliable, ordered delivery, flow control, congestion control. UDP: connectionless, unreliable, low overhead, used for real-time applications. Ports identify applications. Socket programming uses these protocols.",
              resources: {
                openTextbooks: [
                  {
                    title: "Computer Networks - Transport",
                    author: "Peterson & Davie",
                    url: "https://book.systemsapproach.org/e2e.html",
                    license: "CC BY 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Transport Layer",
                    url: "https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/",
                    course: "6.829"
                  }
                ],
                nptel: [
                  {
                    title: "Transport Layer Protocols",
                    url: "https://nptel.ac.in/courses/106105183",
                    instructor: "Prof. Sujoy Ghosh, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "TCP: 3-way handshake (SYN, SYN-ACK, ACK), sequence numbers, ACKs, retransmission (timeout/3 dup ACKs), sliding window, flow control (advertised window), congestion control (slow start, congestion avoidance, fast recovery). UDP: simple header (src/dst port, length, checksum), no connection, no reliability. Apps: TCP=HTTP/FTP/SMTP, UDP=DNS/video streaming/gaming.",
              practiceQuestions: [
                { q: "Explain TCP's 3-way handshake.", a: "1) Client sends SYN (seq=x). 2) Server responds SYN-ACK (seq=y, ack=x+1). 3) Client sends ACK (seq=x+1, ack=y+1). Connection established, initial sequence numbers exchanged." },
                { q: "How does TCP detect packet loss?", a: "Two methods: 1) Timeout - retransmission timer expires before ACK. 2) Three duplicate ACKs - receiver repeatedly ACKs last in-order segment, indicates missing segment." },
                { q: "When should UDP be used instead of TCP?", a: "Real-time applications prioritizing speed over reliability: VoIP, video streaming, online gaming, DNS queries. Tolerate packet loss, can't afford TCP's retransmission delay." }
              ]
            },
            {
              id: "application-protocols",
              name: "Application Layer Protocols",
              overview: "Application layer protocols define communication rules for specific services. HTTP: web browsing, stateless, request-response. HTTPS: encrypted HTTP. FTP: file transfer. SMTP: email sending. DNS: domain name resolution. Each protocol has specific message formats and procedures.",
              resources: {
                openTextbooks: [
                  {
                    title: "Computer Networks - Applications",
                    author: "Peterson & Davie",
                    url: "https://book.systemsapproach.org/applications.html",
                    license: "CC BY 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Application Layer",
                    url: "https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/",
                    course: "6.829"
                  }
                ],
                nptel: [
                  {
                    title: "Application Layer Protocols",
                    url: "https://nptel.ac.in/courses/106105183",
                    instructor: "Prof. Sujoy Ghosh, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "HTTP: methods (GET, POST, PUT, DELETE), status codes (200 OK, 404 Not Found, 500 Error). HTTP/1.1: persistent connections. HTTP/2: multiplexing. HTTPS: TLS encryption. DNS: hierarchical (root, TLD, authoritative), iterative/recursive queries, caching. SMTP: push (send), POP3/IMAP: pull (receive). FTP: separate control (port 21) and data connections.",
              practiceQuestions: [
                { q: "How does DNS resolution work?", a: "1) Check local cache. 2) Query recursive resolver. 3) Resolver queries root → TLD → authoritative servers. 4) IP returned and cached. Hierarchy: root (.) → TLD (.com) → domain (example.com) → subdomain (www)." },
                { q: "What's the difference between HTTP and HTTPS?", a: "HTTPS adds TLS/SSL encryption over HTTP. Encrypts data in transit, authenticates server (certificate), prevents eavesdropping/tampering. Port 443 vs 80. Essential for sensitive data." },
                { q: "Why is HTTP stateless and how is state maintained?", a: "Each request independent, server doesn't remember previous requests. State via cookies (client stores), sessions (server stores with ID in cookie), URL parameters, or authentication tokens." }
              ]
            },
            {
              id: "network-security",
              name: "Network Security Basics",
              overview: "Network security protects data and resources from threats. Cryptography: symmetric (AES), asymmetric (RSA). Hashing (SHA). SSL/TLS for secure communication. Firewalls filter traffic. VPNs create encrypted tunnels. Authentication, authorization, and encryption are key principles.",
              resources: {
                openTextbooks: [
                  {
                    title: "Computer Networks - Security",
                    author: "Peterson & Davie",
                    url: "https://book.systemsapproach.org/security.html",
                    license: "CC BY 4.0"
                  }
                ],
                mitOcw: [
                  {
                    title: "Network Security",
                    url: "https://ocw.mit.edu/courses/6-857-network-and-computer-security-spring-2014/",
                    course: "6.857"
                  }
                ],
                nptel: [
                  {
                    title: "Network Security",
                    url: "https://nptel.ac.in/courses/106105031",
                    instructor: "Prof. Indranil Sengupta, IIT Kharagpur"
                  }
                ],
                saylor: [],
                libreTexts: [],
                govPdfs: []
              },
              summaryNotes: "CIA triad: Confidentiality (encryption), Integrity (hashing), Availability (DDoS protection). Symmetric encryption: same key encrypt/decrypt, fast (AES). Asymmetric: public/private key pair, slower (RSA, used for key exchange). TLS handshake: negotiate cipher, exchange keys, authenticate. Firewall: stateless (packet rules), stateful (connection tracking). VPN: IPsec or SSL/TLS tunnel.",
              practiceQuestions: [
                { q: "What's the difference between symmetric and asymmetric encryption?", a: "Symmetric: same key for encrypt/decrypt, fast, key distribution problem. Asymmetric: public key encrypts, private key decrypts, slower, solves key distribution, used for key exchange and signatures." },
                { q: "How does TLS/SSL ensure secure communication?", a: "1) Handshake: client/server negotiate protocol, exchange certificates, verify identity. 2) Key exchange using asymmetric crypto. 3) Bulk data encrypted with symmetric key. Provides confidentiality, integrity, authentication." },
                { q: "What is a digital signature?", a: "Hash of message encrypted with sender's private key. Receiver decrypts with public key, compares hash. Provides authentication (proves sender), integrity (detects tampering), non-repudiation (can't deny)." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
