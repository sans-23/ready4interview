export const TRACK_CONFIGS = {
  'system-design': {
    title: 'Learn System Design',
    icon: 'HldIcon',
    desc: 'Master distributed systems, networking layers, caching policies, database sharding, and write contention.',
    sections: [
      {
        id: 'networking',
        title: 'Networking',
        defaultExpanded: true,
        items: [
          { id: 'osi', label: 'OSI Model', href: '/osi', status: 'default' },
          { id: 'ip-address', label: 'IP Addresses', href: '/ip-address', status: 'default' },
          { id: 'tcp-vs-udp', label: 'TCP vs UDP', href: '/tcp-vs-udp', status: 'default' },
          { id: 'http-https', label: 'HTTP/HTTPS', href: '/http-https', status: 'default' },
          { id: 'domain-name-system-dns', label: 'Domain Name System (DNS)', href: '/domain-name-system-dns', status: 'default' },
          { id: 'checksums', label: 'Checksums', href: '/checksums', status: 'default' },
          { id: 'proxy-vs-reverse-proxy', label: 'Proxy vs Reverse Proxy', href: '/proxy-vs-reverse-proxy', status: 'default' },
          { id: 'networking-essentials', label: 'Networking Essentials', href: '/networking-essentials', status: 'default' },
        ]
      },
      {
        id: 'introduction',
        title: 'Introduction to System Design',
        defaultExpanded: false,
        items: [
          { id: 'what-is-system-design', label: 'What is System Design?', href: '/what-is-system-design', status: 'default' },
          { id: 'top-30-system-design-concepts', label: '30 Must-Know System Design Concepts', href: '/top-30-system-design-concepts', status: 'default' },
        ]
      },
      {
        id: 'core-concepts',
        title: 'Core Concepts',
        defaultExpanded: false,
        items: [
          { id: 'scalability', label: 'Scalability', href: '/scalability', status: 'default' },
          { id: 'availability', label: 'Availability', href: '/availability', status: 'default' },
          { id: 'reliability', label: 'Reliability', href: '/reliability', status: 'default' },
          { id: 'single-point-of-failure-spof', label: 'Single Point of Failure', href: '/single-point-of-failure-spof', status: 'default' },
          { id: 'latency-vs-throughput', label: 'Latency vs Throughput vs Bandwidth', href: '/latency-vs-throughput', status: 'default' },
          { id: 'consistent-hashing', label: 'Consistent Hashing', href: '/consistent-hashing', status: 'default' },
          { id: 'cap-theorem', label: 'CAP Theorem', href: '/cap-theorem', status: 'default' },
          { id: 'consistency-models', label: 'Consistency Models', href: '/consistency-models', status: 'locked' },
          { id: 'numbers-to-know', label: 'Numbers To Know', href: '/numbers-to-know', status: 'default' },
          { id: 'contention', label: 'Dealing with Contention', href: '/contention', status: 'default' },
        ]
      },
      {
        id: 'load-balancing',
        title: 'Load Balancing',
        defaultExpanded: false,
        items: [
          { id: 'load-balancers', label: 'Load Balancers', href: '/load-balancers', status: 'default' },
          { id: 'load-balancing-algorithms', label: 'Load Balancing Algorithms', href: '/load-balancing-algorithms', status: 'default' },
          { id: 'dns-load-balancing', label: 'DNS Load Balancing', href: '/dns-load-balancing', status: 'locked' },
          { id: 'anycast-routing', label: 'Anycast Routing', href: '/anycast-routing', status: 'locked' },
        ]
      },
      {
        id: 'api-fundamentals',
        title: 'API Fundamentals',
        defaultExpanded: false,
        items: [
          { id: 'what-is-an-api', label: 'What\'s an API?', href: '/what-is-an-api', status: 'default' },
          { id: 'idempotency', label: 'Idempotency', href: '/idempotency', status: 'default' },
          { id: 'data-formats', label: 'Data Formats', href: '/data-formats', status: 'locked' },
          { id: 'api-architectural-styles', label: 'API Architectural Styles', href: '/api-architectural-styles', status: 'locked' },
          { id: 'rest-api-design', label: 'REST API Design', href: '/rest-api-design', status: 'locked' },
          { id: 'graphql', label: 'GraphQL Deep Dive', href: '/graphql', status: 'locked' },
          { id: 'grpc', label: 'gRPC Deep Dive', href: '/grpc', status: 'locked' },
          { id: 'api-gateways', label: 'API Gateways', href: '/api-gateways', status: 'default' },
          { id: 'rate-limiting', label: 'Rate Limiting', href: '/rate-limiting', status: 'default' },
          { id: 'authentication-authorization', label: 'Authentication & Authorization', href: '/authentication-authorization', status: 'default' },
          { id: 'session-vs-token-auth', label: 'Session-Based vs Token-Based Authentication', href: '/session-vs-token-auth', status: 'default' },
          { id: 'jwt', label: 'JWT', href: '/jwt', status: 'default' },
          { id: 'oauth-oauth2', label: 'OAuth / OAuth2', href: '/oauth-oauth2', status: 'locked' },
          { id: 'sso', label: 'Single Sign-On (SSO)', href: '/sso', status: 'locked' },
          { id: 'api-gateway', label: 'Api Gateway', href: '/api-gateway', status: 'default' },
        ]
      },
      {
        id: 'communication-patterns',
        title: 'Communication Patterns',
        defaultExpanded: false,
        items: [
          { id: 'long-polling', label: 'Long Polling Explained', href: '/long-polling', status: 'default' },
          { id: 'websockets', label: 'WebSockets', href: '/websockets', status: 'default' },
          { id: 'server-sent-events', label: 'Server-Sent Events (SSE)', href: '/server-sent-events', status: 'locked' },
          { id: 'webhooks', label: 'Webhooks', href: '/webhooks', status: 'default' },
          { id: 'webrtc', label: 'WebRTC', href: '/webrtc', status: 'locked' },
          { id: 'sync-vs-async-communication', label: 'Synchronous vs Asynchronous Communication', href: '/sync-vs-async-communication', status: 'default' },
          { id: 'message-queues', label: 'Message Queues', href: '/message-queues', status: 'default' },
          { id: 'pub-sub', label: 'Publish-Subscribe (Pub/Sub)', href: '/pub-sub', status: 'default' },
          { id: 'change-data-capture-cdc', label: 'Change Data Capture (CDC)', href: '/change-data-capture-cdc', status: 'default' },
          { id: 'delivery-semantics', label: 'Delivery Semantics', href: '/delivery-semantics', status: 'locked' },
          { id: 'dead-letter-queues', label: 'Dead Letter Queues', href: '/dead-letter-queues', status: 'locked' },
          { id: 'kafka', label: 'Kafka', href: '/kafka', status: 'default' },
        ]
      },
      {
        id: 'caching',
        title: 'Caching',
        defaultExpanded: false,
        items: [
          { id: 'what-is-caching', label: 'What is Caching?', href: '/what-is-caching', status: 'default' },
          { id: 'cache-aside-pattern', label: 'Cache-Aside Pattern', href: '/cache-aside-pattern', status: 'locked' },
          { id: 'read-through-vs-write-through-cache', label: 'Read-Through vs Write-Through Cache', href: '/read-through-vs-write-through-cache', status: 'default' },
          { id: 'write-behind-cache', label: 'Write-Behind Cache', href: '/write-behind-cache', status: 'locked' },
          { id: 'caching-strategies', label: 'Caching Strategies Summary', href: '/caching-strategies', status: 'default' },
          { id: 'cache-eviction-policies', label: 'Cache Eviction Policies', href: '/cache-eviction-policies', status: 'default' },
          { id: 'content-delivery-network-cdn', label: 'Content Delivery Network (CDN)', href: '/content-delivery-network-cdn', status: 'default' },
          { id: 'distributed-caching', label: 'Distributed Cache Architecture', href: '/distributed-caching', status: 'default' },
          { id: 'cache-invalidation', label: 'Cache Invalidation', href: '/cache-invalidation', status: 'locked' },
          { id: 'cache-stampede', label: 'Cache Stampede', href: '/cache-stampede', status: 'locked' },
          { id: 'cache-warming', label: 'Cache Warming', href: '/cache-warming', status: 'locked' },
          { id: 'caching', label: 'Caching', href: '/caching', status: 'default' },
          { id: 'redis', label: 'Redis', href: '/redis', status: 'default' },
        ]
      },
      {
        id: 'databases',
        title: 'Databases',
        defaultExpanded: false,
        items: [
          { id: 'database-types', label: 'Database Types', href: '/database-types', status: 'default' },
          { id: 'sql-vs-nosql', label: 'SQL vs NoSQL', href: '/sql-vs-nosql', status: 'default' },
          { id: 'acid-transactions', label: 'ACID Transactions', href: '/acid-transactions', status: 'default' },
          { id: 'relational-databases', label: 'Relational Databases', href: '/relational-databases', status: 'default' },
          { id: 'document-databases', label: 'Document Databases', href: '/document-databases', status: 'locked' },
          { id: 'key-value-stores', label: 'Key-Value Stores', href: '/key-value-stores', status: 'default' },
          { id: 'wide-column-databases', label: 'Wide Column Databases', href: '/wide-column-databases', status: 'locked' },
          { id: 'graph-databases', label: 'Graph Databases', href: '/graph-databases', status: 'locked' },
          { id: 'time-series-databases', label: 'Time Series Databases', href: '/time-series-databases', status: 'locked' },
          { id: 'full-text-search-engines', label: 'Full-Text Search Engines', href: '/full-text-search-engines', status: 'locked' },
          { id: 'vector-databases', label: 'Vector Databases', href: '/vector-databases', status: 'locked' },
          { id: 'b-trees', label: 'B-Trees and B+ Trees', href: '/b-trees', status: 'locked' },
          { id: 'lsm-trees', label: 'LSM Trees', href: '/lsm-trees', status: 'locked' },
          { id: 'how-databases-guarantee-durability', label: 'How Databases Guarantee Durability', href: '/how-databases-guarantee-durability', status: 'locked' },
          { id: 'dynamodb', label: 'Dynamodb', href: '/dynamodb', status: 'default' },
          { id: 'elasticsearch', label: 'Elasticsearch', href: '/elasticsearch', status: 'default' },
          { id: 'data-modeling', label: 'Data Modeling', href: '/data-modeling', status: 'default' },
          { id: 'db-indexing', label: 'Db Indexing', href: '/db-indexing', status: 'default' },
          { id: 'cassandra', label: 'Cassandra', href: '/cassandra', status: 'default' },
          { id: 'postgresql', label: 'Postgresql', href: '/postgresql', status: 'default' },
          { id: 'time-series', label: 'Time Series', href: '/time-series', status: 'default' },
        ]
      },
      {
        id: 'db-scaling-techniques',
        title: 'Database Scaling Techniques',
        defaultExpanded: false,
        items: [
          { id: 'indexing', label: 'Indexing', href: '/indexing', status: 'default' },
          { id: 'vertical-partitioning', label: 'Vertical Partitioning', href: '/vertical-partitioning', status: 'default' },
          { id: 'query-optimization', label: 'Query Optimization', href: '/query-optimization', status: 'locked' },
          { id: 'read-replicas', label: 'Read Replicas', href: '/read-replicas', status: 'locked' },
          { id: 'denormalization', label: 'Denormalization', href: '/denormalization', status: 'locked' },
          { id: 'materialized-views', label: 'Materialized Views', href: '/materialized-views', status: 'locked' },
          { id: 'connection-pooling', label: 'Connection Pooling', href: '/connection-pooling', status: 'locked' },
          { id: 'sharding', label: 'Sharding', href: '/sharding', status: 'default' },
          { id: 'sharding-vs-partitioning', label: 'Sharding vs Partitioning', href: '/sharding-vs-partitioning', status: 'locked' },
          { id: 'data-compression', label: 'Data Compression', href: '/data-compression', status: 'locked' },
          { id: 'scaling-writes', label: 'Scaling Writes', href: '/scaling-writes', status: 'default' },
          { id: 'scaling-reads', label: 'Scaling Reads', href: '/scaling-reads', status: 'default' },
        ]
      },
      {
        id: 'storage-systems',
        title: 'Storage Systems',
        defaultExpanded: false,
        items: [
          { id: 'block-vs-file-vs-object-storage', label: 'Block vs File vs Object Storage', href: '/block-vs-file-vs-object-storage', status: 'default' },
          { id: 'object-storage', label: 'Object Storage', href: '/object-storage', status: 'locked' },
          { id: 'distributed-file-systems', label: 'Distributed File Systems', href: '/distributed-file-systems', status: 'locked' },
          { id: 'erasure-coding', label: 'Erasure Coding', href: '/erasure-coding', status: 'locked' },
          { id: 'large-blobs', label: 'Handling Large Blobs', href: '/large-blobs', status: 'default' },
        ]
      },
      {
        id: 'tradeoffs',
        title: 'Tradeoffs',
        defaultExpanded: false,
        items: [
          { id: 'vertical-vs-horizontal-scaling', label: 'Vertical vs Horizontal Scaling', href: '/vertical-vs-horizontal-scaling', status: 'default' },
          { id: 'concurrency-vs-parallelism', label: 'Concurrency vs Parallelism', href: '/concurrency-vs-parallelism', status: 'default' },
          { id: 'push-vs-pull-architecture', label: 'Push vs Pull Architecture', href: '/push-vs-pull-architecture', status: 'default' },
          { id: 'stateful-vs-stateless-architecture', label: 'Stateful vs Stateless Architecture', href: '/stateful-vs-stateless-architecture', status: 'default' },
          { id: 'long-polling-vs-websockets', label: 'Long Polling vs WebSockets', href: '/long-polling-vs-websockets', status: 'default' },
          { id: 'strong-vs-eventual-consistency', label: 'Strong vs Eventual Consistency', href: '/strong-vs-eventual-consistency', status: 'default' },
        ]
      },
      {
        id: 'distributed-system-concepts',
        title: 'Distributed System Fundamentals',
        defaultExpanded: false,
        items: [
          { id: 'challenges-of-distribution', label: 'Challenges of Distribution', href: '/challenges-of-distribution', status: 'default' },
          { id: 'network-partitions', label: 'Network Partitions', href: '/network-partitions', status: 'locked' },
          { id: 'split-brain-problem', label: 'Split Brain Problem', href: '/split-brain-problem', status: 'locked' },
          { id: 'heartbeats', label: 'Heartbeats', href: '/heartbeats', status: 'default' },
          { id: 'handling-failures-in-distributed-systems', label: 'Handling Failures in Distributed Systems', href: '/handling-failures-in-distributed-systems', status: 'locked' },
          { id: 'clock-synchronization', label: 'Clock Synchronization Problem', href: '/clock-synchronization', status: 'locked' },
          { id: 'logical-clocks', label: 'Logical Clocks', href: '/logical-clocks', status: 'locked' },
          { id: 'lamport-timestamps', label: 'Lamport Timestamps', href: '/lamport-timestamps', status: 'locked' },
          { id: 'vector-clocks', label: 'Vector Clocks', href: '/vector-clocks', status: 'locked' },
          { id: 'consensus-algorithms', label: 'Consensus Algorithms Overview', href: '/consensus-algorithms', status: 'default' },
          { id: 'paxos-algorithm', label: 'Paxos Algorithm', href: '/paxos-algorithm', status: 'locked' },
          { id: 'raft-algorithm', label: 'Raft Algorithm', href: '/raft-algorithm', status: 'locked' },
          { id: 'leader-election', label: 'Leader Election', href: '/leader-election', status: 'locked' },
          { id: 'distributed-locks', label: 'Distributed Locks', href: '/distributed-locks', status: 'locked' },
          { id: 'gossip-protocol', label: 'Gossip Protocol', href: '/gossip-protocol', status: 'locked' },
          { id: 'crdts', label: 'CRDTs', href: '/crdts', status: 'locked' },
          { id: 'operational-transformation', label: 'Operational Transformation', href: '/operational-transformation', status: 'locked' },
          { id: 'zookeeper', label: 'Zookeeper', href: '/zookeeper', status: 'default' },
          { id: 'long-running', label: 'Managing Long Running Tasks', href: '/long-running', status: 'default' },
        ]
      },
      {
        id: 'distributed-transactions',
        title: 'Distributed Transactions',
        defaultExpanded: false,
        items: [
          { id: 'distributed-transactions-problems', label: 'The Problem with Distributed Transactions', href: '/distributed-transactions-problems', status: 'default' },
          { id: 'two-phase-commit-protocol', label: 'Two-Phase Commit (2PC)', href: '/two-phase-commit-protocol', status: 'locked' },
          { id: 'three-phase-commit-3pc', label: 'Three-Phase Commit (3PC)', href: '/three-phase-commit-3pc', status: 'locked' },
          { id: 'saga-pattern', label: 'SAGA Pattern', href: '/saga-pattern', status: 'locked' },
          { id: 'outbox-pattern', label: 'Outbox Pattern', href: '/outbox-pattern', status: 'locked' },
          { id: 'multi-step', label: 'Multi-step Processes', href: '/multi-step', status: 'default' },
        ]
      },
      {
        id: 'distributed-data-structures',
        title: 'Data Structures for Scale',
        defaultExpanded: false,
        items: [
          { id: 'data-structures-for-scale-introduction', label: 'Data Structures for Scale', href: '/data-structures-for-scale-introduction', status: 'default' },
          { id: 'geohash', label: 'Geohash', href: '/geohash', status: 'locked' },
          { id: 'quad-tree', label: 'Quad Trees', href: '/quad-tree', status: 'locked' },
          { id: 'r-trees', label: 'R-Trees', href: '/r-trees', status: 'locked' },
          { id: 's2-h3', label: 'S2 and H3', href: '/s2-h3', status: 'locked' },
          { id: 'bloom-filters', label: 'Bloom Filters', href: '/bloom-filters', status: 'default' },
          { id: 'cuckoo-filter', label: 'Cuckoo Filter', href: '/cuckoo-filter', status: 'locked' },
          { id: 'hyperloglog', label: 'HyperLogLog', href: '/hyperloglog', status: 'locked' },
          { id: 'count-min-sketch', label: 'Count-Min Sketch', href: '/count-min-sketch', status: 'locked' },
          { id: 'minhash', label: 'MinHash', href: '/minhash', status: 'locked' },
          { id: 'skip-lists', label: 'Skip Lists', href: '/skip-lists', status: 'locked' },
          { id: 'merkle-trees', label: 'Merkle Trees', href: '/merkle-trees', status: 'locked' },
        ]
      },
      {
        id: 'architectural-patterns',
        title: 'Architectural Patterns',
        defaultExpanded: false,
        items: [
          { id: 'client-server-architecture', label: 'Client-Server Architecture', href: '/client-server-architecture', status: 'default' },
          { id: 'monolithic-architecture', label: 'Monolithic Architecture', href: '/monolithic-architecture', status: 'default' },
          { id: 'microservices-architecture', label: 'Microservices Architecture', href: '/microservices-architecture', status: 'locked' },
          { id: 'serverless-architecture', label: 'Serverless Architecture', href: '/serverless-architecture', status: 'locked' },
          { id: 'event-driven-architecture', label: 'Event-Driven Architecture', href: '/event-driven-architecture', status: 'locked' },
          { id: 'peer-to-peer-p2p-architecture', label: 'Peer-to-Peer (P2P)', href: '/peer-to-peer-p2p-architecture', status: 'locked' },
          { id: 'hexagonal-architecture', label: 'Hexagonal Architecture', href: '/hexagonal-architecture', status: 'locked' },
          { id: 'cqrs', label: 'CQRS', href: '/cqrs', status: 'locked' },
          { id: 'event-sourcing', label: 'Event Sourcing', href: '/event-sourcing', status: 'locked' },
        ]
      },
      {
        id: 'microservices',
        title: 'Microservices Patterns',
        defaultExpanded: false,
        items: [
          { id: 'service-discovery', label: 'Service Discovery', href: '/service-discovery', status: 'default' },
          { id: 'api-gateway-pattern', label: 'API Gateway Pattern', href: '/api-gateway-pattern', status: 'locked' },
          { id: 'backend-for-frontend', label: 'Backend for Frontend (BFF)', href: '/backend-for-frontend', status: 'locked' },
          { id: 'sidecar-pattern', label: 'Sidecar Pattern', href: '/sidecar-pattern', status: 'locked' },
          { id: 'circuit-breaker-pattern', label: 'Circuit Breaker Pattern', href: '/circuit-breaker-pattern', status: 'locked' },
          { id: 'bulkhead-pattern', label: 'Bulkhead Pattern', href: '/bulkhead-pattern', status: 'locked' },
          { id: 'strangler-fig-pattern', label: 'Strangler Fig Pattern', href: '/strangler-fig-pattern', status: 'locked' },
          { id: 'service-mesh', label: 'Service Mesh', href: '/service-mesh', status: 'locked' },
        ]
      },
      {
        id: 'big-data-processing',
        title: 'Big Data Processing',
        defaultExpanded: false,
        items: [
          { id: 'batch-vs-stream-processing', label: 'Batch vs Stream Processing', href: '/batch-vs-stream-processing', status: 'default' },
          { id: 'mapreduce', label: 'MapReduce', href: '/mapreduce', status: 'locked' },
          { id: 'etl-pipelines', label: 'ETL Pipelines', href: '/etl-pipelines', status: 'locked' },
          { id: 'data-lakes', label: 'Data Lakes', href: '/data-lakes', status: 'locked' },
          { id: 'data-warehousing', label: 'Data Warehousing', href: '/data-warehousing', status: 'locked' },
          { id: 'data-lakehouse', label: 'Data Lakehouse', href: '/data-lakehouse', status: 'locked' },
          { id: 'lambda-architecture', label: 'Lambda Architecture', href: '/lambda-architecture', status: 'locked' },
          { id: 'kappa-architecture', label: 'Kappa Architecture', href: '/kappa-architecture', status: 'locked' },
          { id: 'streaming-engines', label: 'Streaming Engines', href: '/streaming-engines', status: 'locked' },
          { id: 'flink', label: 'Flink', href: '/flink', status: 'default' },
        ]
      },
      {
        id: 'deployment-patterns',
        title: 'Deployment Patterns',
        defaultExpanded: false,
        items: [
          { id: 'deployment-strategies-overview', label: 'Deployment Strategies Overview', href: '/deployment-strategies-overview', status: 'default' },
          { id: 'ci-cd-pipelines', label: 'CI/CD Pipelines', href: '/ci-cd-pipelines', status: 'locked' },
          { id: 'rolling-deployments', label: 'Rolling Deployments', href: '/rolling-deployments', status: 'locked' },
          { id: 'blue-green-deployments', label: 'Blue-Green Deployments', href: '/blue-green-deployments', status: 'locked' },
          { id: 'canary-releases', label: 'Canary Releases', href: '/canary-releases', status: 'locked' },
          { id: 'feature-flags', label: 'Feature Flags', href: '/feature-flags', status: 'locked' },
          { id: 'ab-testing-infrastructure', label: 'A/B Testing Infrastructure', href: '/ab-testing-infrastructure', status: 'locked' },
          { id: 'schema-migrations', label: 'Schema Migrations', href: '/schema-migrations', status: 'locked' },
          { id: 'rollbacks-and-immutable-infrastructure', label: 'Rollbacks & Immutable Infrastructure', href: '/rollbacks-and-immutable-infrastructure', status: 'locked' },
        ]
      },
      {
        id: 'observability',
        title: 'Observability',
        defaultExpanded: false,
        items: [
          { id: 'three-pillars-observability', label: 'Three Pillars of Observability', href: '/three-pillars-observability', status: 'default' },
          { id: 'logging', label: 'Logging Best Practices', href: '/logging', status: 'default' },
          { id: 'log-aggregation', label: 'Log Aggregation', href: '/log-aggregation', status: 'locked' },
          { id: 'correlation-ids', label: 'Correlation IDs', href: '/correlation-ids', status: 'locked' },
          { id: 'metrics-instrumentation', label: 'Metrics & Instrumentation', href: '/metrics-instrumentation', status: 'locked' },
          { id: 'alert-monitoring', label: 'Alert & Monitoring', href: '/alert-monitoring', status: 'locked' },
          { id: 'dashboards-runbooks', label: 'Dashboards & Runbooks', href: '/dashboards-runbooks', status: 'locked' },
          { id: 'distributed-tracing', label: 'Distributed Tracing', href: '/distributed-tracing', status: 'locked' },
        ]
      },
      {
        id: 'security',
        title: 'Advanced Security',
        defaultExpanded: false,
        items: [
          { id: 'ssl-tls', label: 'SSL/TLS', href: '/ssl-tls', status: 'locked' },
          { id: 'encryption-at-rest', label: 'Encryption at Rest', href: '/encryption-at-rest', status: 'locked' },
          { id: 'secrets-management', label: 'Secrets Management', href: '/secrets-management', status: 'locked' },
          { id: 'password-management', label: 'Password Management', href: '/password-management', status: 'locked' },
          { id: 'rbac', label: 'RBAC', href: '/rbac', status: 'locked' },
          { id: 'saml', label: 'SAML', href: '/saml', status: 'locked' },
        ]
      },
      {
        id: 'concept-deep-dives',
        title: 'Concept Deep Dives',
        defaultExpanded: false,
        items: [
          { id: 'real-time', label: 'Real-time Updates', href: '/real-time', status: 'default' },
          { id: 'course-introduction', label: 'Course Introduction', href: '/course-introduction', status: 'default' },
          { id: 'join-community', label: 'Join the Community', href: '/join-community', status: 'default' },
          { id: 'api-design', label: 'Api Design', href: '/api-design', status: 'default' },
        ]
      },
    ]
  },
  'lld': {
    title: 'Low Level Design',
    icon: 'LldIcon',
    desc: 'Master Object-Oriented Design, SOLID principles, design patterns, UML structures, and concurrency model implementations.',
    sections: [
      {
        id: 'lld-introduction',
        title: 'LLD Introduction',
        defaultExpanded: true,
        items: [
          { id: 'lld-what-is-lld', label: 'What is Low-Level Design (LLD)?', href: '/lld-what-is-lld', status: 'default' },
          { id: 'lld-lld-vs-hld', label: 'LLD vs HLD', href: '/lld-lld-vs-hld', status: 'default' },
          { id: 'lld-lld-interview-types', label: 'Types of LLD Interviews', href: '/lld-lld-interview-types', status: 'default' },
          { id: 'lld-lld-introduction-quiz', label: 'Quiz: Introduction', href: '/lld-lld-introduction-quiz', status: 'locked' },
        ]
      },
      {
        id: 'oop-fundamentals',
        title: 'OOP Fundamentals',
        defaultExpanded: false,
        items: [
          { id: 'lld-classes-and-objects', label: 'Classes and Objects', href: '/lld-classes-and-objects', status: 'default' },
          { id: 'lld-classes-and-objects-exercise', label: 'Exercise: Classes and Objects', href: '/lld-classes-and-objects-exercise', status: 'default' },
          { id: 'lld-enums', label: 'Enums', href: '/lld-enums', status: 'default' },
          { id: 'lld-enums-exercise', label: 'Exercise: Enums', href: '/lld-enums-exercise', status: 'default' },
          { id: 'lld-interfaces', label: 'Interfaces', href: '/lld-interfaces', status: 'default' },
          { id: 'lld-interfaces-exercise', label: 'Exercise: Interfaces', href: '/lld-interfaces-exercise', status: 'default' },
          { id: 'lld-encapsulation', label: 'Encapsulation', href: '/lld-encapsulation', status: 'default' },
          { id: 'lld-encapsulation-exercise', label: 'Exercise: Encapsulation', href: '/lld-encapsulation-exercise', status: 'default' },
          { id: 'lld-abstraction', label: 'Abstraction', href: '/lld-abstraction', status: 'default' },
          { id: 'lld-abstraction-exercise', label: 'Exercise: Abstraction', href: '/lld-abstraction-exercise', status: 'default' },
          { id: 'lld-inheritance', label: 'Inheritance', href: '/lld-inheritance', status: 'default' },
          { id: 'lld-inheritance-exercise', label: 'Exercise: Inheritance', href: '/lld-inheritance-exercise', status: 'default' },
          { id: 'lld-polymorphism', label: 'Polymorphism', href: '/lld-polymorphism', status: 'default' },
          { id: 'lld-polymorphism-exercise', label: 'Exercise: Polymorphism', href: '/lld-polymorphism-exercise', status: 'default' },
          { id: 'lld-oop-fundamentals-quiz', label: 'Quiz: OOP Fundamentals', href: '/lld-oop-fundamentals-quiz', status: 'locked' },
        ]
      },
      {
        id: 'class-relationships',
        title: 'Class Relationships',
        defaultExpanded: false,
        items: [
          { id: 'lld-association', label: 'Association', href: '/lld-association', status: 'default' },
          { id: 'lld-association-exercise', label: 'Exercise: Association', href: '/lld-association-exercise', status: 'default' },
          { id: 'lld-aggregation', label: 'Aggregation', href: '/lld-aggregation', status: 'default' },
          { id: 'lld-aggregation-exercise', label: 'Exercise: Aggregation', href: '/lld-aggregation-exercise', status: 'default' },
          { id: 'lld-composition', label: 'Composition', href: '/lld-composition', status: 'default' },
          { id: 'lld-composition-exercise', label: 'Exercise: Composition', href: '/lld-composition-exercise', status: 'default' },
          { id: 'lld-dependency', label: 'Dependency', href: '/lld-dependency', status: 'default' },
          { id: 'lld-dependency-exercise', label: 'Exercise: Dependency', href: '/lld-dependency-exercise', status: 'default' },
          { id: 'lld-realization', label: 'Realization (Implementation)', href: '/lld-realization', status: 'default' },
          { id: 'lld-realization-exercise', label: 'Exercise: Realization', href: '/lld-realization-exercise', status: 'default' },
          { id: 'lld-class-relationships-quiz', label: 'Quiz: Class Relationships', href: '/lld-class-relationships-quiz', status: 'locked' },
        ]
      },
      {
        id: 'design-principles',
        title: 'Design Principles',
        defaultExpanded: false,
        items: [
          { id: 'lld-dry', label: 'DRY Principle', href: '/lld-dry', status: 'default' },
          { id: 'lld-dry-exercise', label: 'Exercise: DRY Principle', href: '/lld-dry-exercise', status: 'default' },
          { id: 'lld-kiss', label: 'KISS Principle', href: '/lld-kiss', status: 'default' },
          { id: 'lld-kiss-exercise', label: 'Exercise: KISS Principle', href: '/lld-kiss-exercise', status: 'default' },
          { id: 'lld-yagni', label: 'YAGNI Principle', href: '/lld-yagni', status: 'default' },
          { id: 'lld-yagni-exercise', label: 'Exercise: YAGNI', href: '/lld-yagni-exercise', status: 'default' },
          { id: 'lld-lod', label: 'Law of Demeter', href: '/lld-lod', status: 'default' },
          { id: 'lld-lod-exercise', label: 'Exercise: Law of Demeter', href: '/lld-lod-exercise', status: 'default' },
          { id: 'lld-soc', label: 'Separation of Concerns', href: '/lld-soc', status: 'locked' },
          { id: 'lld-soc-exercise', label: 'Exercise: Separation of Concerns', href: '/lld-soc-exercise', status: 'locked' },
          { id: 'lld-coupling-and-cohesion', label: 'Coupling and Cohesion', href: '/lld-coupling-and-cohesion', status: 'locked' },
          { id: 'lld-coupling-and-cohesion-exercise', label: 'Exercise: Coupling and Cohesion', href: '/lld-coupling-and-cohesion-exercise', status: 'locked' },
          { id: 'lld-composing-objects', label: 'Composing Objects Principle', href: '/lld-composing-objects', status: 'locked' },
          { id: 'lld-composing-objects-exercise', label: 'Exercise: Composing Objects Principle', href: '/lld-composing-objects-exercise', status: 'locked' },
          { id: 'lld-design-principles-quiz', label: 'Quiz: Design Principles', href: '/lld-design-principles-quiz', status: 'locked' },
        ]
      },
      {
        id: 'solid-principles',
        title: 'SOLID Principles',
        defaultExpanded: false,
        items: [
          { id: 'lld-srp', label: 'Single Responsibility Principle (SRP)', href: '/lld-srp', status: 'default' },
          { id: 'lld-srp-exercise', label: 'Exercise: Single Responsibility Principle', href: '/lld-srp-exercise', status: 'default' },
          { id: 'lld-ocp', label: 'Open-Closed Principle (OCP)', href: '/lld-ocp', status: 'default' },
          { id: 'lld-ocp-exercise', label: 'Exercise: Open-Closed Principle', href: '/lld-ocp-exercise', status: 'default' },
          { id: 'lld-lsp', label: 'Liskov Substitution Principle (LSP)', href: '/lld-lsp', status: 'default' },
          { id: 'lld-lsp-exercise', label: 'Exercise:  Liskov Substitution Principle', href: '/lld-lsp-exercise', status: 'default' },
          { id: 'lld-isp', label: 'Interface Segregation Principle (ISP)', href: '/lld-isp', status: 'default' },
          { id: 'lld-isp-exercise', label: 'Exercise: Interface Segregation Principle', href: '/lld-isp-exercise', status: 'default' },
          { id: 'lld-dip', label: 'Dependency Inversion Principle (DIP)', href: '/lld-dip', status: 'default' },
          { id: 'lld-dip-exercise', label: 'Exercise: Dependency Inversion Principle', href: '/lld-dip-exercise', status: 'default' },
          { id: 'lld-solid-principles-quiz', label: 'Quiz: SOLID Principles', href: '/lld-solid-principles-quiz', status: 'locked' },
        ]
      },
      {
        id: 'uml',
        title: 'UML',
        defaultExpanded: false,
        items: [
          { id: 'lld-class-diagram', label: 'Class Diagram', href: '/lld-class-diagram', status: 'default' },
          { id: 'lld-use-case-diagram', label: 'Use Case Diagram', href: '/lld-use-case-diagram', status: 'default' },
          { id: 'lld-sequence-diagram', label: 'Sequence Diagram', href: '/lld-sequence-diagram', status: 'default' },
          { id: 'lld-activity-diagram', label: 'Activity Diagram', href: '/lld-activity-diagram', status: 'default' },
          { id: 'lld-state-machine-diagram', label: 'State Machine Diagram', href: '/lld-state-machine-diagram', status: 'default' },
          { id: 'lld-uml-quiz', label: 'Quiz: UML', href: '/lld-uml-quiz', status: 'locked' },
        ]
      },
      {
        id: 'design-patterns',
        title: 'Design Patterns',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-patterns', label: 'Introduction to Design Patterns', href: '/lld-design-patterns', status: 'default' },
          { id: 'lld-creational', label: 'Creational', href: '/lld-creational', status: 'locked' },
          { id: 'lld-singleton', label: 'Singleton Design Pattern', href: '/lld-singleton', status: 'default' },
          { id: 'lld-singleton-exercise', label: 'Exercise: Singleton', href: '/lld-singleton-exercise', status: 'locked' },
          { id: 'lld-builder', label: 'Builder Design Pattern', href: '/lld-builder', status: 'default' },
          { id: 'lld-builder-exercise', label: 'Exercise: Builder', href: '/lld-builder-exercise', status: 'locked' },
          { id: 'lld-factory-method', label: 'Factory Method Design Pattern', href: '/lld-factory-method', status: 'default' },
          { id: 'lld-factory-method-exercise', label: 'Exercise: Factory Method', href: '/lld-factory-method-exercise', status: 'locked' },
          { id: 'lld-abstract-factory', label: 'Abstract Factory Design Pattern', href: '/lld-abstract-factory', status: 'default' },
          { id: 'lld-abstract-factory-exercise', label: 'Exercise: Abstract Factory', href: '/lld-abstract-factory-exercise', status: 'locked' },
          { id: 'lld-prototype', label: 'Prototype Design Pattern', href: '/lld-prototype', status: 'default' },
          { id: 'lld-prototype-exercise', label: 'Exercise: Prototype', href: '/lld-prototype-exercise', status: 'locked' },
          { id: 'lld-creational-design-patterns-quiz', label: 'Quiz: Creational Design Pattern', href: '/lld-creational-design-patterns-quiz', status: 'locked' },
          { id: 'lld-structural', label: 'Structural', href: '/lld-structural', status: 'locked' },
          { id: 'lld-adapter', label: 'Adapter Design Pattern', href: '/lld-adapter', status: 'default' },
          { id: 'lld-adapter-exercise', label: 'Exercise: Adapter', href: '/lld-adapter-exercise', status: 'locked' },
          { id: 'lld-facade', label: 'Facade Design Pattern', href: '/lld-facade', status: 'default' },
          { id: 'lld-facade-exercise', label: 'Exercise: Facade', href: '/lld-facade-exercise', status: 'locked' },
          { id: 'lld-decorator', label: 'Decorator Design Pattern', href: '/lld-decorator', status: 'default' },
          { id: 'lld-decorator-exercise', label: 'Exercise: Decorator', href: '/lld-decorator-exercise', status: 'locked' },
          { id: 'lld-composite', label: 'Composite Design Pattern', href: '/lld-composite', status: 'default' },
          { id: 'lld-composite-exercise', label: 'Exercise: Composite', href: '/lld-composite-exercise', status: 'locked' },
          { id: 'lld-proxy', label: 'Proxy Design Pattern', href: '/lld-proxy', status: 'default' },
          { id: 'lld-proxy-exercise', label: 'Exercise: Proxy', href: '/lld-proxy-exercise', status: 'locked' },
          { id: 'lld-bridge', label: 'Bridge Design Pattern', href: '/lld-bridge', status: 'default' },
          { id: 'lld-bridge-exercise', label: 'Exercise: Bridge', href: '/lld-bridge-exercise', status: 'locked' },
          { id: 'lld-flyweight', label: 'Flyweight Design Pattern', href: '/lld-flyweight', status: 'default' },
          { id: 'lld-flyweight-exercise', label: 'Exercise: Flyweight', href: '/lld-flyweight-exercise', status: 'locked' },
          { id: 'lld-structural-design-patterns-quiz', label: 'Quiz: Structural Design Pattern', href: '/lld-structural-design-patterns-quiz', status: 'locked' },
          { id: 'lld-behavioral', label: 'Behavioral', href: '/lld-behavioral', status: 'locked' },
          { id: 'lld-strategy', label: 'Strategy Design Pattern', href: '/lld-strategy', status: 'default' },
          { id: 'lld-strategy-exercise', label: 'Exercise: Strategy', href: '/lld-strategy-exercise', status: 'locked' },
          { id: 'lld-iterator', label: 'Iterator Design Pattern', href: '/lld-iterator', status: 'default' },
          { id: 'lld-iterator-exercise', label: 'Exercise: Iterator', href: '/lld-iterator-exercise', status: 'locked' },
          { id: 'lld-observer', label: 'Observer Design Pattern', href: '/lld-observer', status: 'default' },
          { id: 'lld-observer-exercise', label: 'Exercise: Observer', href: '/lld-observer-exercise', status: 'locked' },
          { id: 'lld-command', label: 'Command Design Pattern', href: '/lld-command', status: 'default' },
          { id: 'lld-command-exercise', label: 'Exercise: Command', href: '/lld-command-exercise', status: 'locked' },
          { id: 'lld-state', label: 'State Design Pattern', href: '/lld-state', status: 'default' },
          { id: 'lld-state-exercise', label: 'Exercise: State', href: '/lld-state-exercise', status: 'locked' },
          { id: 'lld-template-method', label: 'Template Method Design Pattern', href: '/lld-template-method', status: 'default' },
          { id: 'lld-template-method-exercise', label: 'Exercise: Template Method', href: '/lld-template-method-exercise', status: 'locked' },
          { id: 'lld-chain-of-responsibility', label: 'Chain of Responsibility Design Pattern', href: '/lld-chain-of-responsibility', status: 'default' },
          { id: 'lld-chain-of-responsibility-exercise', label: 'Exercise: Chain of Responsibility', href: '/lld-chain-of-responsibility-exercise', status: 'locked' },
          { id: 'lld-visitor', label: 'Visitor Design Pattern', href: '/lld-visitor', status: 'default' },
          { id: 'lld-visitor-exercise', label: 'Exercise: Visitor', href: '/lld-visitor-exercise', status: 'locked' },
          { id: 'lld-mediator', label: 'Mediator Design Pattern', href: '/lld-mediator', status: 'default' },
          { id: 'lld-mediator-exercise', label: 'Exercise: Mediator', href: '/lld-mediator-exercise', status: 'locked' },
          { id: 'lld-memento', label: 'Memento Design Pattern', href: '/lld-memento', status: 'default' },
          { id: 'lld-memento-exercise', label: 'Exercise: Memento', href: '/lld-memento-exercise', status: 'locked' },
          { id: 'lld-behavioral-design-patterns-quiz', label: 'Quiz: Behavioral Design Pattern', href: '/lld-behavioral-design-patterns-quiz', status: 'locked' },
          { id: 'lld-additional-patterns', label: 'Additional Patterns', href: '/lld-additional-patterns', status: 'locked' },
          { id: 'lld-null-object', label: 'Null Object Pattern', href: '/lld-null-object', status: 'default' },
          { id: 'lld-repository', label: 'Repository Pattern', href: '/lld-repository', status: 'locked' },
          { id: 'lld-mvc', label: 'MVC Pattern', href: '/lld-mvc', status: 'locked' },
          { id: 'lld-dependency-injection', label: 'Dependency Injection Pattern', href: '/lld-dependency-injection', status: 'locked' },
          { id: 'lld-specification', label: 'Specification Pattern', href: '/lld-specification', status: 'locked' },
          { id: 'lld-game-loop', label: 'Game Loop Pattern', href: '/lld-game-loop', status: 'locked' },
          { id: 'lld-thread-pool', label: 'Thread Pool Pattern', href: '/lld-thread-pool', status: 'locked' },
          { id: 'lld-producer-consumer', label: 'Producer Consumer Pattern', href: '/lld-producer-consumer', status: 'locked' },
          { id: 'lld-additional-patterns-quiz', label: 'Quiz: Additional Patterns', href: '/lld-additional-patterns-quiz', status: 'locked' },
        ]
      },
      {
        id: 'lld-interview-tips',
        title: 'LLD Interview Tips',
        defaultExpanded: false,
        items: [
          { id: 'lld-ood-approach', label: 'How to Approach OOD Interviews', href: '/lld-ood-approach', status: 'default' },
          { id: 'lld-machine-coding-approach', label: 'How to Approach Machine Coding Interviews', href: '/lld-machine-coding-approach', status: 'default' },
          { id: 'lld-identifying-entities', label: 'How to Identify Entities and Model Relationships', href: '/lld-identifying-entities', status: 'locked' },
          { id: 'lld-writing-clean-code', label: 'How to write Clean Code', href: '/lld-writing-clean-code', status: 'locked' },
          { id: 'lld-choosing-design-patterns', label: 'How to choose Design Patterns', href: '/lld-choosing-design-patterns', status: 'locked' },
          { id: 'lld-handling-concurrency', label: 'How to handle Concurrency Scenarios', href: '/lld-handling-concurrency', status: 'locked' },
        ]
      },
      {
        id: 'interview-questions-label',
        title: 'Interview Questions',
        defaultExpanded: false,
        items: [
        ]
      },
      {
        id: 'games-and-puzzles',
        title: 'Games & Puzzles',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-tic-tac-toe', label: 'Design Tic Tac Toe Game', href: '/lld-design-tic-tac-toe', status: 'default' },
          { id: 'lld-design-snake-and-ladder', label: 'Design Snake and Ladder game', href: '/lld-design-snake-and-ladder', status: 'default' },
          { id: 'lld-design-minesweeper', label: 'Design Minesweeper Game', href: '/lld-design-minesweeper', status: 'locked' },
          { id: 'lld-design-chess-game', label: 'Design Chess Game', href: '/lld-design-chess-game', status: 'locked' },
        ]
      },
      {
        id: 'data-structures-and-search',
        title: 'Data Structures & Search',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-lru-cache', label: 'Design LRU Cache', href: '/lld-design-lru-cache', status: 'default' },
          { id: 'lld-design-bloom-filter', label: 'Design Bloom Filter', href: '/lld-design-bloom-filter', status: 'default' },
          { id: 'lld-design-search-autocomplete', label: 'Design Search Autocomplete System', href: '/lld-design-search-autocomplete', status: 'locked' },
          { id: 'lld-design-search-engine', label: 'Design Simple Search Engine', href: '/lld-design-search-engine', status: 'locked' },
        ]
      },
      {
        id: 'managing-states',
        title: 'Managing States',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-atm', label: 'Design ATM', href: '/lld-design-atm', status: 'locked' },
          { id: 'lld-design-vending-machine', label: 'Design Vending Machine', href: '/lld-design-vending-machine', status: 'locked' },
          { id: 'lld-design-elevator-system', label: 'Design Elevator System', href: '/lld-design-elevator-system', status: 'locked' },
          { id: 'lld-design-traffic-control-system', label: 'Design Traffic Control System', href: '/lld-design-traffic-control-system', status: 'locked' },
          { id: 'lld-design-coffee-vending-machine', label: 'Design Coffee Vending Machine', href: '/lld-design-coffee-vending-machine', status: 'locked' },
        ]
      },
      {
        id: 'management-systems',
        title: 'Management Systems',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-parking-lot', label: 'Design Parking Lot', href: '/lld-design-parking-lot', status: 'locked' },
          { id: 'lld-design-task-management-system', label: 'Design Task Management System', href: '/lld-design-task-management-system', status: 'locked' },
          { id: 'lld-design-inventory-management-system', label: 'Design Inventory Management System', href: '/lld-design-inventory-management-system', status: 'locked' },
          { id: 'lld-design-library-management-system', label: 'Design Library Management System', href: '/lld-design-library-management-system', status: 'locked' },
          { id: 'lld-design-restaurant-management-system', label: 'Design Restaurant Management System', href: '/lld-design-restaurant-management-system', status: 'locked' },
        ]
      },
      {
        id: 'social-and-content-platforms',
        title: 'Social & Content Platforms',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-stack-overflow', label: 'Design Stack Overflow', href: '/lld-design-stack-overflow', status: 'default' },
          { id: 'lld-design-social-network', label: 'Design a Social Network', href: '/lld-design-social-network', status: 'locked' },
          { id: 'lld-design-learning-platform', label: 'Design Learning Platform', href: '/lld-design-learning-platform', status: 'locked' },
          { id: 'lld-design-cricinfo', label: 'Design Cricinfo', href: '/lld-design-cricinfo', status: 'locked' },
          { id: 'lld-design-linkedin', label: 'Design LinkedIn', href: '/lld-design-linkedin', status: 'locked' },
          { id: 'lld-design-spotify', label: 'Design Spotify', href: '/lld-design-spotify', status: 'locked' },
        ]
      },
      {
        id: 'communication-and-messaging',
        title: 'Communication & Messaging',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-notification-system', label: 'Design Notification System', href: '/lld-design-notification-system', status: 'locked' },
          { id: 'lld-design-pub-sub', label: 'Design Pub Sub System', href: '/lld-design-pub-sub', status: 'locked' },
          { id: 'lld-design-chat-application', label: 'Design Chat Application', href: '/lld-design-chat-application', status: 'locked' },
        ]
      },
      {
        id: 'financial-and-payment-systems',
        title: 'Financial & Payment Systems',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-splitwise', label: 'Design Splitwise', href: '/lld-design-splitwise', status: 'locked' },
          { id: 'lld-design-payment-gateway', label: 'Design Payment Gateway', href: '/lld-design-payment-gateway', status: 'locked' },
          { id: 'lld-design-online-stock-exchange', label: 'Design Online Stock Exchange', href: '/lld-design-online-stock-exchange', status: 'locked' },
        ]
      },
      {
        id: 'ecommerce-and-booking-systems',
        title: 'E-commerce & Booking Systems',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-amazon-locker', label: 'Design Amazon Locker', href: '/lld-design-amazon-locker', status: 'locked' },
          { id: 'lld-design-shopping-cart', label: 'Design Shopping Cart', href: '/lld-design-shopping-cart', status: 'locked' },
          { id: 'lld-design-amazon', label: 'Design Amazon', href: '/lld-design-amazon', status: 'locked' },
          { id: 'lld-design-movie-booking-system', label: 'Design Movie Booking System', href: '/lld-design-movie-booking-system', status: 'locked' },
          { id: 'lld-design-car-rental-system', label: 'Design Car Rental System', href: '/lld-design-car-rental-system', status: 'locked' },
          { id: 'lld-design-meeting-room-scheduler', label: 'Design Meeting Scheduler', href: '/lld-design-meeting-room-scheduler', status: 'locked' },
          { id: 'lld-design-online-auction-system', label: 'Design Online Auction System', href: '/lld-design-online-auction-system', status: 'locked' },
          { id: 'lld-design-online-food-delivery-service', label: 'Design Online Food Delivery Service', href: '/lld-design-online-food-delivery-service', status: 'locked' },
          { id: 'lld-design-uber', label: 'Design Ride Hailing Service', href: '/lld-design-uber', status: 'locked' },
        ]
      },
      {
        id: 'developer-tools-and-infrastructure',
        title: 'Developer Tools & Infrastructure',
        defaultExpanded: false,
        items: [
          { id: 'lld-design-url-shortener', label: 'Design URL Shortener', href: '/lld-design-url-shortener', status: 'locked' },
          { id: 'lld-design-logging-framework', label: 'Design Logging Framework', href: '/lld-design-logging-framework', status: 'locked' },
          { id: 'lld-design-rate-limiter', label: 'Design Rate Limiter', href: '/lld-design-rate-limiter', status: 'locked' },
          { id: 'lld-design-in-memory-file-system', label: 'Design In Memory File System', href: '/lld-design-in-memory-file-system', status: 'locked' },
          { id: 'lld-design-version-control-system', label: 'Design Version Control System', href: '/lld-design-version-control-system', status: 'locked' },
          { id: 'lld-design-task-scheduler', label: 'Design Task Scheduler', href: '/lld-design-task-scheduler', status: 'locked' },
        ]
      },
    ]
  },
  'java': {
    title: 'Archived Java Deep Dive',
    icon: 'JavaIcon',
    desc: 'Master collections, concurrent locks, JVM memory areas, GC execution, and Virtual Threads.',
    sections: [
      {
        id: 'java-collections',
        title: 'Java Collections',
        defaultExpanded: true,
        items: [
          { id: 'java-map', label: 'Map Interface: HashMap, TreeMap & LinkedHashMap', href: '/java-map', status: 'default' },
          { id: 'java-queue', label: 'Queue & Deque: PriorityQueue & ArrayDeque', href: '/java-queue', status: 'default' },
          { id: 'java-stack', label: 'Stack & Vector: Synchronized Overhead & Design Violations', href: '/java-stack', status: 'default' },
          { id: 'java-list', label: 'List Interface: ArrayList, LinkedList & Memory Locality', href: '/java-list', status: 'default' },
          { id: 'java-set', label: 'Set Interface: HashSet, LinkedHashSet & TreeSet', href: '/java-set', status: 'default' },
        ]
      },
      {
        id: 'java-concurrency',
        title: 'Java Concurrency',
        defaultExpanded: false,
        items: [
          { id: 'java-threads', label: 'Threads & Sync: Monitors, Reentrancy & Volatile Barriers', href: '/java-threads', status: 'default' },
          { id: 'java-locks', label: 'Locks & CAS: AQS Engine, StampedLock & Atomic Spins', href: '/java-locks', status: 'default' },
          { id: 'java-concurrent-collections', label: 'Concurrent Collections: ConcurrentHashMap & BlockingQueues', href: '/java-concurrent-collections', status: 'default' },
          { id: 'java-virtual-threads', label: 'Virtual Threads: Project Loom, Mounting Mechanics & Pinning Risks', href: '/java-virtual-threads', status: 'default' },
        ]
      },
      {
        id: 'java-jvm-internals',
        title: 'JVM Internals',
        defaultExpanded: false,
        items: [
          { id: 'java-jvm', label: 'JVM Architecture: Class Loading, Memory Areas & JIT Compilers', href: '/java-jvm', status: 'default' },
          { id: 'java-gc', label: 'JVM Garbage Collection: Heap Generations, Phases & Collectors', href: '/java-gc', status: 'default' },
        ]
      },
    ]
  },
  'java-lang': {
    title: 'Java Language Track',
    icon: 'JavaIcon',
    desc: 'Master Java from basics to advanced, covering OOP, Exception Handling, Collections, Concurrency, and JVM Internals.',
    sections: [
      {
        id: 'introduction-to-java',
        title: 'Introduction to Java',
        defaultExpanded: true,
        items: [
          { id: 'java-lang-what-is-java', label: 'What is Java?', href: '/java-lang-what-is-java', status: 'default' },
          { id: 'java-lang-history-of-java', label: 'History of Java', href: '/java-lang-history-of-java', status: 'default' },
          { id: 'java-lang-java-features', label: 'Features of Java', href: '/java-lang-java-features', status: 'default' },
          { id: 'java-lang-jdk-jre-jvm', label: 'JDK, JRE, and JVM', href: '/java-lang-jdk-jre-jvm', status: 'default' },
          { id: 'java-lang-setting-up-environment', label: 'Setting Up Environment', href: '/java-lang-setting-up-environment', status: 'default' },
          { id: 'java-lang-first-java-program', label: 'First Java Program', href: '/java-lang-first-java-program', status: 'default' },
          { id: 'java-lang-how-java-works', label: 'How Java Works', href: '/java-lang-how-java-works', status: 'default' },
        ]
      },
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-variables-and-data-types', label: 'Variables & Data Types', href: '/java-lang-variables-and-data-types', status: 'default' },
          { id: 'java-lang-primitive-types', label: 'Primitive Types', href: '/java-lang-primitive-types', status: 'default' },
          { id: 'java-lang-reference-types', label: 'Reference Types', href: '/java-lang-reference-types', status: 'default' },
          { id: 'java-lang-type-casting', label: 'Type Casting', href: '/java-lang-type-casting', status: 'default' },
          { id: 'java-lang-operators', label: 'Operators', href: '/java-lang-operators', status: 'default' },
          { id: 'java-lang-input-output', label: 'Input & Output', href: '/java-lang-input-output', status: 'default' },
          { id: 'java-lang-comments', label: 'Comments', href: '/java-lang-comments', status: 'default' },
          { id: 'java-lang-naming-conventions', label: 'Naming Conventions', href: '/java-lang-naming-conventions', status: 'default' },
        ]
      },
      {
        id: 'control-flow',
        title: 'Control Flow',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-if-else', label: 'If-Else Statements', href: '/java-lang-if-else', status: 'default' },
          { id: 'java-lang-switch-statement', label: 'Switch Statement', href: '/java-lang-switch-statement', status: 'default' },
          { id: 'java-lang-for-loop', label: 'For Loop', href: '/java-lang-for-loop', status: 'default' },
          { id: 'java-lang-while-loop', label: 'While Loop', href: '/java-lang-while-loop', status: 'default' },
          { id: 'java-lang-do-while-loop', label: 'Do-While Loop', href: '/java-lang-do-while-loop', status: 'default' },
          { id: 'java-lang-enhanced-for-loop', label: 'Enhanced For Loop', href: '/java-lang-enhanced-for-loop', status: 'default' },
          { id: 'java-lang-break-continue', label: 'Break & Continue', href: '/java-lang-break-continue', status: 'default' },
          { id: 'java-lang-labeled-statements', label: 'Labeled Statements', href: '/java-lang-labeled-statements', status: 'default' },
        ]
      },
      {
        id: 'arrays',
        title: 'Arrays',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-arrays-basics', label: 'Arrays Basics', href: '/java-lang-arrays-basics', status: 'default' },
          { id: 'java-lang-array-operations', label: 'Array Operations', href: '/java-lang-array-operations', status: 'default' },
          { id: 'java-lang-multidimensional-arrays', label: 'Multidimensional Arrays', href: '/java-lang-multidimensional-arrays', status: 'default' },
          { id: 'java-lang-arrays-class', label: 'Arrays Class', href: '/java-lang-arrays-class', status: 'default' },
          { id: 'java-lang-copying-arrays', label: 'Copying Arrays', href: '/java-lang-copying-arrays', status: 'default' },
        ]
      },
      {
        id: 'strings',
        title: 'Strings',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-string-basics', label: 'String Basics', href: '/java-lang-string-basics', status: 'default' },
          { id: 'java-lang-string-methods', label: 'String Methods', href: '/java-lang-string-methods', status: 'default' },
          { id: 'java-lang-string-immutability', label: 'String Immutability', href: '/java-lang-string-immutability', status: 'default' },
          { id: 'java-lang-stringbuilder', label: 'StringBuilder', href: '/java-lang-stringbuilder', status: 'default' },
          { id: 'java-lang-stringbuffer', label: 'StringBuffer', href: '/java-lang-stringbuffer', status: 'default' },
          { id: 'java-lang-string-formatting', label: 'String Formatting', href: '/java-lang-string-formatting', status: 'default' },
          { id: 'java-lang-string-comparison', label: 'String Comparison', href: '/java-lang-string-comparison', status: 'default' },
          { id: 'java-lang-regular-expressions', label: 'Regular Expressions', href: '/java-lang-regular-expressions', status: 'default' },
        ]
      },
      {
        id: 'methods',
        title: 'Methods',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-methods-basics', label: 'Methods Basics', href: '/java-lang-methods-basics', status: 'default' },
          { id: 'java-lang-method-parameters', label: 'Method Parameters', href: '/java-lang-method-parameters', status: 'default' },
          { id: 'java-lang-return-types', label: 'Return Types', href: '/java-lang-return-types', status: 'default' },
          { id: 'java-lang-method-overloading', label: 'Method Overloading', href: '/java-lang-method-overloading', status: 'default' },
          { id: 'java-lang-variable-arguments', label: 'Variable Arguments (Varargs)', href: '/java-lang-variable-arguments', status: 'default' },
          { id: 'java-lang-recursion', label: 'Recursion', href: '/java-lang-recursion', status: 'default' },
          { id: 'java-lang-pass-by-value', label: 'Pass by Value', href: '/java-lang-pass-by-value', status: 'default' },
        ]
      },
      {
        id: 'oop-basics',
        title: 'Object-Oriented Programming',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-classes-and-objects', label: 'Classes & Objects', href: '/java-lang-classes-and-objects', status: 'default' },
          { id: 'java-lang-constructors', label: 'Constructors', href: '/java-lang-constructors', status: 'default' },
          { id: 'java-lang-this-keyword', label: 'this Keyword', href: '/java-lang-this-keyword', status: 'default' },
          { id: 'java-lang-access-modifiers', label: 'Access Modifiers', href: '/java-lang-access-modifiers', status: 'default' },
          { id: 'java-lang-getters-setters', label: 'Getters & Setters', href: '/java-lang-getters-setters', status: 'default' },
          { id: 'java-lang-static-keyword', label: 'static Keyword', href: '/java-lang-static-keyword', status: 'default' },
          { id: 'java-lang-final-keyword', label: 'final Keyword', href: '/java-lang-final-keyword', status: 'default' },
          { id: 'java-lang-initializer-blocks', label: 'Initializer Blocks', href: '/java-lang-initializer-blocks', status: 'default' },
          { id: 'java-lang-inner-classes', label: 'Inner Classes', href: '/java-lang-inner-classes', status: 'default' },
          { id: 'java-lang-anonymous-classes', label: 'Anonymous Classes', href: '/java-lang-anonymous-classes', status: 'default' },
          { id: 'java-lang-record-classes', label: 'Record Classes', href: '/java-lang-record-classes', status: 'default' },
          { id: 'java-lang-sealed-classes', label: 'Sealed Classes', href: '/java-lang-sealed-classes', status: 'default' },
        ]
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-inheritance-basics', label: 'Inheritance Basics', href: '/java-lang-inheritance-basics', status: 'default' },
          { id: 'java-lang-extends-keyword', label: 'extends Keyword', href: '/java-lang-extends-keyword', status: 'default' },
          { id: 'java-lang-super-keyword', label: 'super Keyword', href: '/java-lang-super-keyword', status: 'default' },
          { id: 'java-lang-method-overriding', label: 'Method Overriding', href: '/java-lang-method-overriding', status: 'default' },
          { id: 'java-lang-constructor-chaining', label: 'Constructor Chaining', href: '/java-lang-constructor-chaining', status: 'default' },
          { id: 'java-lang-object-class', label: 'Object Class', href: '/java-lang-object-class', status: 'default' },
          { id: 'java-lang-instanceof-operator', label: 'instanceof Operator', href: '/java-lang-instanceof-operator', status: 'default' },
        ]
      },
      {
        id: 'polymorphism',
        title: 'Polymorphism',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-polymorphism-basics', label: 'Polymorphism Basics', href: '/java-lang-polymorphism-basics', status: 'default' },
          { id: 'java-lang-compile-time-polymorphism', label: 'Compile-Time Polymorphism', href: '/java-lang-compile-time-polymorphism', status: 'default' },
          { id: 'java-lang-runtime-polymorphism', label: 'Runtime Polymorphism', href: '/java-lang-runtime-polymorphism', status: 'default' },
          { id: 'java-lang-dynamic-method-dispatch', label: 'Dynamic Method Dispatch', href: '/java-lang-dynamic-method-dispatch', status: 'default' },
          { id: 'java-lang-covariant-return-types', label: 'Covariant Return Types', href: '/java-lang-covariant-return-types', status: 'default' },
        ]
      },
      {
        id: 'abstraction',
        title: 'Abstraction',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-abstract-classes', label: 'Abstract Classes', href: '/java-lang-abstract-classes', status: 'default' },
          { id: 'java-lang-abstract-methods', label: 'Abstract Methods', href: '/java-lang-abstract-methods', status: 'default' },
          { id: 'java-lang-interfaces', label: 'Interfaces', href: '/java-lang-interfaces', status: 'default' },
          { id: 'java-lang-default-methods', label: 'Default Methods', href: '/java-lang-default-methods', status: 'default' },
          { id: 'java-lang-static-interface-methods', label: 'Static Interface Methods', href: '/java-lang-static-interface-methods', status: 'default' },
          { id: 'java-lang-private-interface-methods', label: 'Private Interface Methods', href: '/java-lang-private-interface-methods', status: 'default' },
          { id: 'java-lang-functional-interfaces', label: 'Functional Interfaces', href: '/java-lang-functional-interfaces', status: 'default' },
          { id: 'java-lang-marker-interfaces', label: 'Marker Interfaces', href: '/java-lang-marker-interfaces', status: 'default' },
        ]
      },
      {
        id: 'encapsulation',
        title: 'Encapsulation',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-encapsulation-basics', label: 'Encapsulation Basics', href: '/java-lang-encapsulation-basics', status: 'default' },
          { id: 'java-lang-data-hiding', label: 'Data Hiding', href: '/java-lang-data-hiding', status: 'default' },
          { id: 'java-lang-immutable-classes', label: 'Immutable Classes', href: '/java-lang-immutable-classes', status: 'default' },
        ]
      },
      {
        id: 'packages-modules',
        title: 'Packages & Modules',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-packages', label: 'Packages', href: '/java-lang-packages', status: 'default' },
          { id: 'java-lang-import-statement', label: 'import Statement', href: '/java-lang-import-statement', status: 'default' },
          { id: 'java-lang-static-import', label: 'Static Import', href: '/java-lang-static-import', status: 'default' },
          { id: 'java-lang-java-modules', label: 'Java Modules (JPMS)', href: '/java-lang-java-modules', status: 'default' },
          { id: 'java-lang-module-info', label: 'module-info.java', href: '/java-lang-module-info', status: 'default' },
        ]
      },
      {
        id: 'exception-handling',
        title: 'Exception Handling',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-exception-basics', label: 'Exception Basics', href: '/java-lang-exception-basics', status: 'default' },
          { id: 'java-lang-try-catch', label: 'try-catch Block', href: '/java-lang-try-catch', status: 'locked' },
          { id: 'java-lang-multiple-catch', label: 'Multiple Catch Blocks', href: '/java-lang-multiple-catch', status: 'locked' },
          { id: 'java-lang-finally-block', label: 'finally Block', href: '/java-lang-finally-block', status: 'locked' },
          { id: 'java-lang-throw-keyword', label: 'throw Keyword', href: '/java-lang-throw-keyword', status: 'locked' },
          { id: 'java-lang-throws-keyword', label: 'throws Keyword', href: '/java-lang-throws-keyword', status: 'locked' },
          { id: 'java-lang-checked-unchecked-exceptions', label: 'Checked vs Unchecked Exceptions', href: '/java-lang-checked-unchecked-exceptions', status: 'locked' },
          { id: 'java-lang-custom-exceptions', label: 'Custom Exceptions', href: '/java-lang-custom-exceptions', status: 'locked' },
          { id: 'java-lang-try-with-resources', label: 'try-with-resources', href: '/java-lang-try-with-resources', status: 'locked' },
          { id: 'java-lang-exception-chaining', label: 'Exception Chaining', href: '/java-lang-exception-chaining', status: 'locked' },
        ]
      },
      {
        id: 'collections-framework',
        title: 'Collections Framework',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-collections-overview', label: 'Collections Overview', href: '/java-lang-collections-overview', status: 'default' },
          { id: 'java-lang-collection-interface', label: 'Collection Interface', href: '/java-lang-collection-interface', status: 'locked' },
          { id: 'java-lang-list-interface', label: 'List Interface', href: '/java-lang-list-interface', status: 'locked' },
          { id: 'java-lang-arraylist', label: 'ArrayList', href: '/java-lang-arraylist', status: 'locked' },
          { id: 'java-lang-linkedlist', label: 'LinkedList', href: '/java-lang-linkedlist', status: 'locked' },
          { id: 'java-lang-vector', label: 'Vector', href: '/java-lang-vector', status: 'locked' },
          { id: 'java-lang-stack', label: 'Stack', href: '/java-lang-stack', status: 'locked' },
          { id: 'java-lang-set-interface', label: 'Set Interface', href: '/java-lang-set-interface', status: 'locked' },
          { id: 'java-lang-hashset', label: 'HashSet', href: '/java-lang-hashset', status: 'locked' },
          { id: 'java-lang-linkedhashset', label: 'LinkedHashSet', href: '/java-lang-linkedhashset', status: 'locked' },
          { id: 'java-lang-treeset', label: 'TreeSet', href: '/java-lang-treeset', status: 'locked' },
          { id: 'java-lang-queue-interface', label: 'Queue Interface', href: '/java-lang-queue-interface', status: 'locked' },
          { id: 'java-lang-priorityqueue', label: 'PriorityQueue', href: '/java-lang-priorityqueue', status: 'locked' },
          { id: 'java-lang-deque-interface', label: 'Deque Interface', href: '/java-lang-deque-interface', status: 'locked' },
          { id: 'java-lang-arraydeque', label: 'ArrayDeque', href: '/java-lang-arraydeque', status: 'locked' },
          { id: 'java-lang-map-interface', label: 'Map Interface', href: '/java-lang-map-interface', status: 'locked' },
          { id: 'java-lang-hashmap', label: 'HashMap', href: '/java-lang-hashmap', status: 'locked' },
          { id: 'java-lang-linkedhashmap', label: 'LinkedHashMap', href: '/java-lang-linkedhashmap', status: 'locked' },
          { id: 'java-lang-treemap', label: 'TreeMap', href: '/java-lang-treemap', status: 'locked' },
          { id: 'java-lang-hashtable', label: 'Hashtable', href: '/java-lang-hashtable', status: 'locked' },
          { id: 'java-lang-concurrent-collections', label: 'Concurrent Collections', href: '/java-lang-concurrent-collections', status: 'locked' },
          { id: 'java-lang-collections-utility-class', label: 'Collections Utility Class', href: '/java-lang-collections-utility-class', status: 'locked' },
          { id: 'java-lang-comparable-comparator', label: 'Comparable & Comparator', href: '/java-lang-comparable-comparator', status: 'locked' },
          { id: 'java-lang-iterator-listiterator', label: 'Iterator & ListIterator', href: '/java-lang-iterator-listiterator', status: 'locked' },
        ]
      },
      {
        id: 'generics',
        title: 'Generics',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-generics-basics', label: 'Generics Basics', href: '/java-lang-generics-basics', status: 'default' },
          { id: 'java-lang-generic-classes', label: 'Generic Classes', href: '/java-lang-generic-classes', status: 'locked' },
          { id: 'java-lang-generic-methods', label: 'Generic Methods', href: '/java-lang-generic-methods', status: 'locked' },
          { id: 'java-lang-bounded-type-parameters', label: 'Bounded Type Parameters', href: '/java-lang-bounded-type-parameters', status: 'locked' },
          { id: 'java-lang-wildcards', label: 'Wildcards', href: '/java-lang-wildcards', status: 'locked' },
          { id: 'java-lang-type-erasure', label: 'Type Erasure', href: '/java-lang-type-erasure', status: 'locked' },
          { id: 'java-lang-generic-restrictions', label: 'Generic Restrictions', href: '/java-lang-generic-restrictions', status: 'locked' },
        ]
      },
      {
        id: 'lambda-streams',
        title: 'Lambda & Streams',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-lambda-expressions', label: 'Lambda Expressions', href: '/java-lang-lambda-expressions', status: 'default' },
          { id: 'java-lang-method-references', label: 'Method References', href: '/java-lang-method-references', status: 'locked' },
          { id: 'java-lang-streams-basics', label: 'Streams Basics', href: '/java-lang-streams-basics', status: 'locked' },
          { id: 'java-lang-stream-operations', label: 'Stream Operations', href: '/java-lang-stream-operations', status: 'locked' },
          { id: 'java-lang-intermediate-operations', label: 'Intermediate Operations', href: '/java-lang-intermediate-operations', status: 'locked' },
          { id: 'java-lang-terminal-operations', label: 'Terminal Operations', href: '/java-lang-terminal-operations', status: 'locked' },
          { id: 'java-lang-collectors', label: 'Collectors', href: '/java-lang-collectors', status: 'locked' },
          { id: 'java-lang-parallel-streams', label: 'Parallel Streams', href: '/java-lang-parallel-streams', status: 'locked' },
          { id: 'java-lang-optional-class', label: 'Optional Class', href: '/java-lang-optional-class', status: 'locked' },
        ]
      },
      {
        id: 'file-io',
        title: 'File I/O',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-file-class', label: 'File Class', href: '/java-lang-file-class', status: 'default' },
          { id: 'java-lang-fileinputstream-fileoutputstream', label: 'FileInputStream & FileOutputStream', href: '/java-lang-fileinputstream-fileoutputstream', status: 'locked' },
          { id: 'java-lang-filereader-filewriter', label: 'FileReader & FileWriter', href: '/java-lang-filereader-filewriter', status: 'locked' },
          { id: 'java-lang-bufferedreader-bufferedwriter', label: 'BufferedReader & BufferedWriter', href: '/java-lang-bufferedreader-bufferedwriter', status: 'locked' },
          { id: 'java-lang-printwriter', label: 'PrintWriter', href: '/java-lang-printwriter', status: 'locked' },
          { id: 'java-lang-scanner-class', label: 'Scanner Class', href: '/java-lang-scanner-class', status: 'locked' },
          { id: 'java-lang-serialization', label: 'Serialization', href: '/java-lang-serialization', status: 'locked' },
          { id: 'java-lang-deserialization', label: 'Deserialization', href: '/java-lang-deserialization', status: 'locked' },
          { id: 'java-lang-nio-package', label: 'NIO Package', href: '/java-lang-nio-package', status: 'locked' },
          { id: 'java-lang-paths-and-files', label: 'Paths & Files', href: '/java-lang-paths-and-files', status: 'locked' },
          { id: 'java-lang-file-channels', label: 'File Channels', href: '/java-lang-file-channels', status: 'locked' },
        ]
      },
      {
        id: 'multithreading',
        title: 'Multithreading',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-threads-basics', label: 'Threads Basics', href: '/java-lang-threads-basics', status: 'default' },
          { id: 'java-lang-creating-threads', label: 'Creating Threads', href: '/java-lang-creating-threads', status: 'locked' },
          { id: 'java-lang-thread-lifecycle', label: 'Thread Lifecycle', href: '/java-lang-thread-lifecycle', status: 'locked' },
          { id: 'java-lang-thread-methods', label: 'Thread Methods', href: '/java-lang-thread-methods', status: 'locked' },
          { id: 'java-lang-thread-priority', label: 'Thread Priority', href: '/java-lang-thread-priority', status: 'locked' },
          { id: 'java-lang-synchronization', label: 'Synchronization', href: '/java-lang-synchronization', status: 'locked' },
          { id: 'java-lang-synchronized-blocks', label: 'Synchronized Blocks', href: '/java-lang-synchronized-blocks', status: 'locked' },
          { id: 'java-lang-volatile-keyword', label: 'volatile Keyword', href: '/java-lang-volatile-keyword', status: 'locked' },
          { id: 'java-lang-deadlock', label: 'Deadlock', href: '/java-lang-deadlock', status: 'locked' },
          { id: 'java-lang-thread-communication', label: 'Thread Communication', href: '/java-lang-thread-communication', status: 'locked' },
          { id: 'java-lang-thread-pools', label: 'Thread Pools', href: '/java-lang-thread-pools', status: 'locked' },
          { id: 'java-lang-executor-framework', label: 'Executor Framework', href: '/java-lang-executor-framework', status: 'locked' },
          { id: 'java-lang-callable-future', label: 'Callable & Future', href: '/java-lang-callable-future', status: 'locked' },
          { id: 'java-lang-completablefuture', label: 'CompletableFuture', href: '/java-lang-completablefuture', status: 'locked' },
          { id: 'java-lang-locks-and-conditions', label: 'Locks & Conditions', href: '/java-lang-locks-and-conditions', status: 'locked' },
          { id: 'java-lang-reentrantlock', label: 'ReentrantLock', href: '/java-lang-reentrantlock', status: 'locked' },
          { id: 'java-lang-readwritelock', label: 'ReadWriteLock', href: '/java-lang-readwritelock', status: 'locked' },
          { id: 'java-lang-semaphore', label: 'Semaphore', href: '/java-lang-semaphore', status: 'locked' },
          { id: 'java-lang-countdownlatch', label: 'CountDownLatch', href: '/java-lang-countdownlatch', status: 'locked' },
          { id: 'java-lang-cyclicbarrier', label: 'CyclicBarrier', href: '/java-lang-cyclicbarrier', status: 'locked' },
          { id: 'java-lang-fork-join-framework', label: 'Fork/Join Framework', href: '/java-lang-fork-join-framework', status: 'locked' },
          { id: 'java-lang-atomic-classes', label: 'Atomic Classes', href: '/java-lang-atomic-classes', status: 'locked' },
          { id: 'java-lang-virtual-threads', label: 'Virtual Threads (Project Loom)', href: '/java-lang-virtual-threads', status: 'locked' },
        ]
      },
      {
        id: 'memory-model',
        title: 'Java Memory Model',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-memory-model-basics', label: 'Memory Model Basics', href: '/java-lang-memory-model-basics', status: 'default' },
          { id: 'java-lang-heap-and-stack', label: 'Heap & Stack', href: '/java-lang-heap-and-stack', status: 'locked' },
          { id: 'java-lang-garbage-collection', label: 'Garbage Collection', href: '/java-lang-garbage-collection', status: 'locked' },
          { id: 'java-lang-gc-algorithms', label: 'GC Algorithms', href: '/java-lang-gc-algorithms', status: 'locked' },
          { id: 'java-lang-memory-leaks', label: 'Memory Leaks', href: '/java-lang-memory-leaks', status: 'locked' },
          { id: 'java-lang-weak-soft-phantom-references', label: 'Weak, Soft & Phantom References', href: '/java-lang-weak-soft-phantom-references', status: 'locked' },
        ]
      },
      {
        id: 'annotations',
        title: 'Annotations',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-annotations-basics', label: 'Annotations Basics', href: '/java-lang-annotations-basics', status: 'default' },
          { id: 'java-lang-built-in-annotations', label: 'Built-in Annotations', href: '/java-lang-built-in-annotations', status: 'locked' },
          { id: 'java-lang-custom-annotations', label: 'Custom Annotations', href: '/java-lang-custom-annotations', status: 'locked' },
          { id: 'java-lang-retention-policy', label: 'Retention Policy', href: '/java-lang-retention-policy', status: 'locked' },
          { id: 'java-lang-annotation-processing', label: 'Annotation Processing', href: '/java-lang-annotation-processing', status: 'locked' },
        ]
      },
      {
        id: 'reflection',
        title: 'Reflection',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-reflection-basics', label: 'Reflection Basics', href: '/java-lang-reflection-basics', status: 'default' },
          { id: 'java-lang-class-object', label: 'Class Object', href: '/java-lang-class-object', status: 'locked' },
          { id: 'java-lang-inspecting-classes', label: 'Inspecting Classes', href: '/java-lang-inspecting-classes', status: 'locked' },
          { id: 'java-lang-accessing-fields-methods', label: 'Accessing Fields & Methods', href: '/java-lang-accessing-fields-methods', status: 'locked' },
          { id: 'java-lang-creating-instances', label: 'Creating Instances Dynamically', href: '/java-lang-creating-instances', status: 'locked' },
          { id: 'java-lang-reflection-use-cases', label: 'Reflection Use Cases', href: '/java-lang-reflection-use-cases', status: 'locked' },
        ]
      },
      {
        id: 'networking',
        title: 'Networking',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-networking-basics', label: 'Networking Basics', href: '/java-lang-networking-basics', status: 'default' },
          { id: 'java-lang-inet-address', label: 'InetAddress', href: '/java-lang-inet-address', status: 'locked' },
          { id: 'java-lang-url-class', label: 'URL Class', href: '/java-lang-url-class', status: 'locked' },
          { id: 'java-lang-urlconnection', label: 'URLConnection', href: '/java-lang-urlconnection', status: 'locked' },
          { id: 'java-lang-sockets', label: 'Sockets', href: '/java-lang-sockets', status: 'locked' },
          { id: 'java-lang-server-sockets', label: 'Server Sockets', href: '/java-lang-server-sockets', status: 'locked' },
          { id: 'java-lang-datagram-sockets', label: 'Datagram Sockets (UDP)', href: '/java-lang-datagram-sockets', status: 'locked' },
          { id: 'java-lang-http-client', label: 'HTTP Client', href: '/java-lang-http-client', status: 'locked' },
        ]
      },
      {
        id: 'jdbc',
        title: 'JDBC',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-jdbc-basics', label: 'JDBC Basics', href: '/java-lang-jdbc-basics', status: 'default' },
          { id: 'java-lang-jdbc-drivers', label: 'JDBC Drivers', href: '/java-lang-jdbc-drivers', status: 'locked' },
          { id: 'java-lang-connecting-to-database', label: 'Connecting to Database', href: '/java-lang-connecting-to-database', status: 'locked' },
          { id: 'java-lang-statement-interface', label: 'Statement Interface', href: '/java-lang-statement-interface', status: 'locked' },
          { id: 'java-lang-preparedstatement', label: 'PreparedStatement', href: '/java-lang-preparedstatement', status: 'locked' },
          { id: 'java-lang-callablestatement', label: 'CallableStatement', href: '/java-lang-callablestatement', status: 'locked' },
          { id: 'java-lang-resultset', label: 'ResultSet', href: '/java-lang-resultset', status: 'locked' },
          { id: 'java-lang-transactions', label: 'Transactions', href: '/java-lang-transactions', status: 'locked' },
          { id: 'java-lang-connection-pooling', label: 'Connection Pooling', href: '/java-lang-connection-pooling', status: 'locked' },
        ]
      },
      {
        id: 'date-time-api',
        title: 'Date & Time API',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-date-time-overview', label: 'Date and Time Overview', href: '/java-lang-date-time-overview', status: 'default' },
          { id: 'java-lang-localdate', label: 'LocalDate', href: '/java-lang-localdate', status: 'locked' },
          { id: 'java-lang-localtime', label: 'LocalTime', href: '/java-lang-localtime', status: 'locked' },
          { id: 'java-lang-localdatetime', label: 'LocalDateTime', href: '/java-lang-localdatetime', status: 'locked' },
          { id: 'java-lang-zoneddatetime', label: 'ZonedDateTime', href: '/java-lang-zoneddatetime', status: 'locked' },
          { id: 'java-lang-instant', label: 'Instant', href: '/java-lang-instant', status: 'locked' },
          { id: 'java-lang-duration-period', label: 'Duration & Period', href: '/java-lang-duration-period', status: 'locked' },
          { id: 'java-lang-datetimeformatter', label: 'DateTimeFormatter', href: '/java-lang-datetimeformatter', status: 'locked' },
        ]
      },
      {
        id: 'modern-java',
        title: 'Modern Java Features',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-var-keyword', label: 'var Keyword (Java 10)', href: '/java-lang-var-keyword', status: 'default' },
          { id: 'java-lang-text-blocks', label: 'Text Blocks (Java 15)', href: '/java-lang-text-blocks', status: 'locked' },
          { id: 'java-lang-switch-expressions', label: 'Switch Expressions (Java 14)', href: '/java-lang-switch-expressions', status: 'locked' },
          { id: 'java-lang-pattern-matching', label: 'Pattern Matching for instanceof (Java 16)', href: '/java-lang-pattern-matching', status: 'locked' },
          { id: 'java-lang-pattern-matching-switch', label: 'Pattern Matching for switch (Java 21)', href: '/java-lang-pattern-matching-switch', status: 'locked' },
          { id: 'java-lang-records', label: 'Records (Java 16)', href: '/java-lang-records', status: 'locked' },
          { id: 'java-lang-sealed-classes-interfaces', label: 'Sealed Classes & Interfaces (Java 17)', href: '/java-lang-sealed-classes-interfaces', status: 'locked' },
          { id: 'java-lang-unnamed-patterns', label: 'Unnamed Patterns (Java 22)', href: '/java-lang-unnamed-patterns', status: 'locked' },
          { id: 'java-lang-sequenced-collections', label: 'Sequenced Collections (Java 21)', href: '/java-lang-sequenced-collections', status: 'locked' },
          { id: 'java-lang-string-templates', label: 'String Templates (Java 21)', href: '/java-lang-string-templates', status: 'locked' },
        ]
      },
      {
        id: 'best-practices',
        title: 'Best Practices',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-coding-standards', label: 'Coding Standards', href: '/java-lang-coding-standards', status: 'default' },
          { id: 'java-lang-effective-java', label: 'Effective Java Tips', href: '/java-lang-effective-java', status: 'locked' },
          { id: 'java-lang-clean-code-principles', label: 'Clean Code Principles', href: '/java-lang-clean-code-principles', status: 'locked' },
          { id: 'java-lang-common-pitfalls', label: 'Common Pitfalls', href: '/java-lang-common-pitfalls', status: 'locked' },
          { id: 'java-lang-performance-optimization', label: 'Performance Optimization', href: '/java-lang-performance-optimization', status: 'locked' },
          { id: 'java-lang-testing-basics', label: 'Testing Basics', href: '/java-lang-testing-basics', status: 'locked' },
          { id: 'java-lang-junit-testing', label: 'JUnit Testing', href: '/java-lang-junit-testing', status: 'locked' },
          { id: 'java-lang-debugging-techniques', label: 'Debugging Techniques', href: '/java-lang-debugging-techniques', status: 'locked' },
        ]
      },
      {
        id: 'core-concepts',
        title: 'Core Concepts',
        defaultExpanded: false,
        items: [
          { id: 'java-lang-exception-basics', label: 'Exception Basics', href: '/java-lang-exception-basics', status: 'default' },
          { id: 'java-lang-collections-overview', label: 'Collections Overview', href: '/java-lang-collections-overview', status: 'default' },
          { id: 'java-lang-reflection-basics', label: 'Reflection Basics', href: '/java-lang-reflection-basics', status: 'default' },
          { id: 'java-lang-coding-standards', label: 'Coding Standards', href: '/java-lang-coding-standards', status: 'default' },
          { id: 'java-lang-course-setup', label: 'Course Setup', href: '/java-lang-course-setup', status: 'default' },
          { id: 'java-lang-join-community', label: 'Join the Community', href: '/java-lang-join-community', status: 'default' },
        ]
      },
    ]
  },
};

export const SECTIONS = Object.values(TRACK_CONFIGS).flatMap(track => track.sections);

export function countCompleted(sections) {
  let completed = 0;
  let total = 0;
  for (const section of sections) {
    for (const item of section.items) {
      if (item.status !== 'locked') total++;
      if (item.status === 'completed') completed++;
    }
  }
  return { completed, total };
}

export function getTrackByArticleId(articleId) {
  if (!articleId) return null;
  for (const [trackId, config] of Object.entries(TRACK_CONFIGS)) {
    const belongs = config.sections.some(section => section.items.some(item => item.id === articleId));
    if (belongs) return trackId;
  }
  return null;
}

export function getTrackArticles(trackId) {
  const config = TRACK_CONFIGS[trackId];
  if (!config) return [];
  return config.sections.flatMap(section => 
    section.items.filter(item => item.status !== 'locked')
  );
}

export const VALID_ARTICLE_IDS = SECTIONS.flatMap(section => 
  section.items.filter(item => item.status !== 'locked').map(item => item.id)
);
