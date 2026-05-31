import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { VALID_ARTICLE_IDS, getTrackByArticleId, getTrackArticles } from '../config/navigation';
import { usePageTitle } from '../hooks/usePageTitle';
import { useProgress } from '../context/ProgressContext';
import './MainContent.css';
import NotFound from './NotFound';
import Mermaid from './ui/Mermaid';

import AcidTransactions from '../content/articles/system-design/databases/acid-transactions.mdx';
import ApiDesign from '../content/articles/system-design/networking-apis/api-design.mdx';
import ApiGateway from '../content/articles/system-design/networking-apis/api-gateway.mdx';
import ApiGateways from '../content/articles/system-design/networking-apis/api-gateways.mdx';
import AuthenticationAuthorization from '../content/articles/system-design/system-design-in-practice/authentication-authorization.mdx';
import Availability from '../content/articles/system-design/foundations/availability.mdx';
import BatchVsStreamProcessing from '../content/articles/system-design/system-design-in-practice/batch-vs-stream-processing.mdx';
import BlockVsFileVsObjectStorage from '../content/articles/system-design/scaling-storage/block-vs-file-vs-object-storage.mdx';
import BloomFilters from '../content/articles/system-design/scaling-storage/bloom-filters.mdx';
import CacheEvictionPolicies from '../content/articles/system-design/caching/cache-eviction-policies.mdx';
import Caching from '../content/articles/system-design/caching/caching.mdx';
import CachingStrategies from '../content/articles/system-design/caching/caching-strategies.mdx';
import CapTheorem from '../content/articles/system-design/distributed-systems/cap-theorem.mdx';
import Cassandra from '../content/articles/system-design/databases/cassandra.mdx';
import ChallengesOfDistribution from '../content/articles/system-design/distributed-systems/challenges-of-distribution.mdx';
import ChangeDataCaptureCdc from '../content/articles/system-design/scaling-storage/change-data-capture-cdc.mdx';
import Checksums from '../content/articles/system-design/system-design-in-practice/checksums.mdx';
import ClientServerArchitecture from '../content/articles/system-design/foundations/client-server-architecture.mdx';
import ConcurrencyVsParallelism from '../content/articles/system-design/foundations/concurrency-vs-parallelism.mdx';
import ConsensusAlgorithms from '../content/articles/system-design/distributed-systems/consensus-algorithms.mdx';
import ConsistentHashing from '../content/articles/system-design/scaling-storage/consistent-hashing.mdx';
import ContentDeliveryNetworkCdn from '../content/articles/system-design/networking-apis/content-delivery-network-cdn.mdx';
import Contention from '../content/articles/system-design/scaling-storage/contention.mdx';
import CourseIntroduction from '../content/articles/system-design/foundations/course-introduction.mdx';
import DataModeling from '../content/articles/system-design/databases/data-modeling.mdx';
import DataStructuresForScaleIntroduction from '../content/articles/system-design/scaling-storage/data-structures-for-scale-introduction.mdx';
import DatabaseTypes from '../content/articles/system-design/databases/database-types.mdx';
import DbIndexing from '../content/articles/system-design/databases/db-indexing.mdx';
import DeploymentStrategiesOverview from '../content/articles/system-design/system-design-in-practice/deployment-strategies-overview.mdx';
import DistributedCaching from '../content/articles/system-design/caching/distributed-caching.mdx';
import DistributedTransactionsProblems from '../content/articles/system-design/distributed-systems/distributed-transactions-problems.mdx';
import DomainNameSystemDns from '../content/articles/system-design/networking-apis/domain-name-system-dns.mdx';
import DynamoDB from '../content/articles/system-design/databases/dynamodb.mdx';
import Elasticsearch from '../content/articles/system-design/databases/elasticsearch.mdx';
import Flink from '../content/articles/system-design/system-design-in-practice/flink.mdx';
import Heartbeats from '../content/articles/system-design/distributed-systems/heartbeats.mdx';
import HttpHttps from '../content/articles/system-design/networking-apis/http-https.mdx';
import Idempotency from '../content/articles/system-design/networking-apis/idempotency.mdx';
import Indexing from '../content/articles/system-design/databases/indexing.mdx';
import IpAddress from '../content/articles/system-design/networking-apis/ip-address.mdx';
import JavaConcurrentCollections from '../content/articles/java/java-concurrency/java-concurrent-collections.mdx';
import JavaGC from '../content/articles/java/jvm-internals/java-gc.mdx';
import JavaJVM from '../content/articles/java/jvm-internals/java-jvm.mdx';
import JavaLangAbstractClasses from '../content/articles/java-lang/abstraction/java-lang-abstract-classes.mdx';
import JavaLangAbstractMethods from '../content/articles/java-lang/abstraction/java-lang-abstract-methods.mdx';
import JavaLangAccessModifiers from '../content/articles/java-lang/object-oriented-programming/java-lang-access-modifiers.mdx';
import JavaLangAnnotationsBasics from '../content/articles/java-lang/annotations/java-lang-annotations-basics.mdx';
import JavaLangAnonymousClasses from '../content/articles/java-lang/object-oriented-programming/java-lang-anonymous-classes.mdx';
import JavaLangArrayOperations from '../content/articles/java-lang/arrays/java-lang-array-operations.mdx';
import JavaLangArraysBasics from '../content/articles/java-lang/arrays/java-lang-arrays-basics.mdx';
import JavaLangArraysClass from '../content/articles/java-lang/arrays/java-lang-arrays-class.mdx';
import JavaLangBreakContinue from '../content/articles/java-lang/control-flow/java-lang-break-continue.mdx';
import JavaLangClassesAndObjects from '../content/articles/java-lang/object-oriented-programming/java-lang-classes-and-objects.mdx';
import JavaLangCodingStandards from '../content/articles/java-lang/core-concepts/java-lang-coding-standards.mdx';
import JavaLangCollectionsOverview from '../content/articles/java-lang/core-concepts/java-lang-collections-overview.mdx';
import JavaLangComments from '../content/articles/java-lang/basic-syntax/java-lang-comments.mdx';
import JavaLangCompileTimePolymorphism from '../content/articles/java-lang/polymorphism/java-lang-compile-time-polymorphism.mdx';
import JavaLangConstructorChaining from '../content/articles/java-lang/inheritance/java-lang-constructor-chaining.mdx';
import JavaLangConstructors from '../content/articles/java-lang/object-oriented-programming/java-lang-constructors.mdx';
import JavaLangCopyingArrays from '../content/articles/java-lang/arrays/java-lang-copying-arrays.mdx';
import JavaLangCourseSetup from '../content/articles/java-lang/core-concepts/java-lang-course-setup.mdx';
import JavaLangCovariantReturnTypes from '../content/articles/java-lang/polymorphism/java-lang-covariant-return-types.mdx';
import JavaLangDataHiding from '../content/articles/java-lang/encapsulation/java-lang-data-hiding.mdx';
import JavaLangDateTimeOverview from '../content/articles/java-lang/date-time-api/java-lang-date-time-overview.mdx';
import JavaLangDefaultMethods from '../content/articles/java-lang/abstraction/java-lang-default-methods.mdx';
import JavaLangDoWhileLoop from '../content/articles/java-lang/control-flow/java-lang-do-while-loop.mdx';
import JavaLangDynamicMethodDispatch from '../content/articles/java-lang/polymorphism/java-lang-dynamic-method-dispatch.mdx';
import JavaLangEncapsulationBasics from '../content/articles/java-lang/encapsulation/java-lang-encapsulation-basics.mdx';
import JavaLangEnhancedForLoop from '../content/articles/java-lang/control-flow/java-lang-enhanced-for-loop.mdx';
import JavaLangExceptionBasics from '../content/articles/java-lang/core-concepts/java-lang-exception-basics.mdx';
import JavaLangExtendsKeyword from '../content/articles/java-lang/inheritance/java-lang-extends-keyword.mdx';
import JavaLangFileClass from '../content/articles/java-lang/file-i-o/java-lang-file-class.mdx';
import JavaLangFinalKeyword from '../content/articles/java-lang/object-oriented-programming/java-lang-final-keyword.mdx';
import JavaLangFirstJavaProgram from '../content/articles/java-lang/introduction-to-java/java-lang-first-java-program.mdx';
import JavaLangForLoop from '../content/articles/java-lang/control-flow/java-lang-for-loop.mdx';
import JavaLangFunctionalInterfaces from '../content/articles/java-lang/abstraction/java-lang-functional-interfaces.mdx';
import JavaLangGenericsBasics from '../content/articles/java-lang/generics/java-lang-generics-basics.mdx';
import JavaLangGettersSetters from '../content/articles/java-lang/object-oriented-programming/java-lang-getters-setters.mdx';
import JavaLangHistoryOfJava from '../content/articles/java-lang/introduction-to-java/java-lang-history-of-java.mdx';
import JavaLangHowJavaWorks from '../content/articles/java-lang/introduction-to-java/java-lang-how-java-works.mdx';
import JavaLangIfElse from '../content/articles/java-lang/control-flow/java-lang-if-else.mdx';
import JavaLangImmutableClasses from '../content/articles/java-lang/encapsulation/java-lang-immutable-classes.mdx';
import JavaLangImportStatement from '../content/articles/java-lang/packages-modules/java-lang-import-statement.mdx';
import JavaLangInheritanceBasics from '../content/articles/java-lang/inheritance/java-lang-inheritance-basics.mdx';
import JavaLangInitializerBlocks from '../content/articles/java-lang/object-oriented-programming/java-lang-initializer-blocks.mdx';
import JavaLangInnerClasses from '../content/articles/java-lang/object-oriented-programming/java-lang-inner-classes.mdx';
import JavaLangInputOutput from '../content/articles/java-lang/basic-syntax/java-lang-input-output.mdx';
import JavaLangInstanceofOperator from '../content/articles/java-lang/inheritance/java-lang-instanceof-operator.mdx';
import JavaLangInterfaces from '../content/articles/java-lang/abstraction/java-lang-interfaces.mdx';
import JavaLangJavaFeatures from '../content/articles/java-lang/introduction-to-java/java-lang-java-features.mdx';
import JavaLangJavaModules from '../content/articles/java-lang/packages-modules/java-lang-java-modules.mdx';
import JavaLangJdbcBasics from '../content/articles/java-lang/jdbc/java-lang-jdbc-basics.mdx';
import JavaLangJdkJreJvm from '../content/articles/java-lang/introduction-to-java/java-lang-jdk-jre-jvm.mdx';
import JavaLangJoinCommunity from '../content/articles/java-lang/core-concepts/java-lang-join-community.mdx';
import JavaLangLabeledStatements from '../content/articles/java-lang/control-flow/java-lang-labeled-statements.mdx';
import JavaLangLambdaExpressions from '../content/articles/java-lang/lambda-streams/java-lang-lambda-expressions.mdx';
import JavaLangMarkerInterfaces from '../content/articles/java-lang/abstraction/java-lang-marker-interfaces.mdx';
import JavaLangMemoryModelBasics from '../content/articles/java-lang/java-memory-model/java-lang-memory-model-basics.mdx';
import JavaLangMethodOverloading from '../content/articles/java-lang/methods/java-lang-method-overloading.mdx';
import JavaLangMethodOverriding from '../content/articles/java-lang/inheritance/java-lang-method-overriding.mdx';
import JavaLangMethodParameters from '../content/articles/java-lang/methods/java-lang-method-parameters.mdx';
import JavaLangMethodsBasics from '../content/articles/java-lang/methods/java-lang-methods-basics.mdx';
import JavaLangModuleInfo from '../content/articles/java-lang/packages-modules/java-lang-module-info.mdx';
import JavaLangMultidimensionalArrays from '../content/articles/java-lang/arrays/java-lang-multidimensional-arrays.mdx';
import JavaLangNamingConventions from '../content/articles/java-lang/basic-syntax/java-lang-naming-conventions.mdx';
import JavaLangNetworkingBasics from '../content/articles/java-lang/networking/java-lang-networking-basics.mdx';
import JavaLangObjectClass from '../content/articles/java-lang/inheritance/java-lang-object-class.mdx';
import JavaLangOperators from '../content/articles/java-lang/basic-syntax/java-lang-operators.mdx';
import JavaLangPackages from '../content/articles/java-lang/packages-modules/java-lang-packages.mdx';
import JavaLangPassByValue from '../content/articles/java-lang/methods/java-lang-pass-by-value.mdx';
import JavaLangPolymorphismBasics from '../content/articles/java-lang/polymorphism/java-lang-polymorphism-basics.mdx';
import JavaLangPrimitiveTypes from '../content/articles/java-lang/basic-syntax/java-lang-primitive-types.mdx';
import JavaLangPrivateInterfaceMethods from '../content/articles/java-lang/abstraction/java-lang-private-interface-methods.mdx';
import JavaLangRecordClasses from '../content/articles/java-lang/object-oriented-programming/java-lang-record-classes.mdx';
import JavaLangRecursion from '../content/articles/java-lang/methods/java-lang-recursion.mdx';
import JavaLangReferenceTypes from '../content/articles/java-lang/basic-syntax/java-lang-reference-types.mdx';
import JavaLangReflectionBasics from '../content/articles/java-lang/core-concepts/java-lang-reflection-basics.mdx';
import JavaLangRegularExpressions from '../content/articles/java-lang/strings/java-lang-regular-expressions.mdx';
import JavaLangReturnTypes from '../content/articles/java-lang/methods/java-lang-return-types.mdx';
import JavaLangRuntimePolymorphism from '../content/articles/java-lang/polymorphism/java-lang-runtime-polymorphism.mdx';
import JavaLangSealedClasses from '../content/articles/java-lang/object-oriented-programming/java-lang-sealed-classes.mdx';
import JavaLangSettingUpEnvironment from '../content/articles/java-lang/introduction-to-java/java-lang-setting-up-environment.mdx';
import JavaLangStaticImport from '../content/articles/java-lang/packages-modules/java-lang-static-import.mdx';
import JavaLangStaticInterfaceMethods from '../content/articles/java-lang/abstraction/java-lang-static-interface-methods.mdx';
import JavaLangStaticKeyword from '../content/articles/java-lang/object-oriented-programming/java-lang-static-keyword.mdx';
import JavaLangStringBasics from '../content/articles/java-lang/strings/java-lang-string-basics.mdx';
import JavaLangStringComparison from '../content/articles/java-lang/strings/java-lang-string-comparison.mdx';
import JavaLangStringFormatting from '../content/articles/java-lang/strings/java-lang-string-formatting.mdx';
import JavaLangStringImmutability from '../content/articles/java-lang/strings/java-lang-string-immutability.mdx';
import JavaLangStringMethods from '../content/articles/java-lang/strings/java-lang-string-methods.mdx';
import JavaLangStringbuffer from '../content/articles/java-lang/strings/java-lang-stringbuffer.mdx';
import JavaLangStringbuilder from '../content/articles/java-lang/strings/java-lang-stringbuilder.mdx';
import JavaLangSuperKeyword from '../content/articles/java-lang/inheritance/java-lang-super-keyword.mdx';
import JavaLangSwitchStatement from '../content/articles/java-lang/control-flow/java-lang-switch-statement.mdx';
import JavaLangThisKeyword from '../content/articles/java-lang/object-oriented-programming/java-lang-this-keyword.mdx';
import JavaLangThreadsBasics from '../content/articles/java-lang/multithreading/java-lang-threads-basics.mdx';
import JavaLangTypeCasting from '../content/articles/java-lang/basic-syntax/java-lang-type-casting.mdx';
import JavaLangVarKeyword from '../content/articles/java-lang/modern-java-features/java-lang-var-keyword.mdx';
import JavaLangVariableArguments from '../content/articles/java-lang/methods/java-lang-variable-arguments.mdx';
import JavaLangVariablesAndDataTypes from '../content/articles/java-lang/basic-syntax/java-lang-variables-and-data-types.mdx';
import JavaLangWhatIsJava from '../content/articles/java-lang/introduction-to-java/java-lang-what-is-java.mdx';
import JavaLangWhileLoop from '../content/articles/java-lang/control-flow/java-lang-while-loop.mdx';
import JavaList from '../content/articles/java/java-collections/java-list.mdx';
import JavaLocks from '../content/articles/java/java-concurrency/java-locks.mdx';
import JavaMap from '../content/articles/java/java-collections/java-map.mdx';
import JavaQueue from '../content/articles/java/java-collections/java-queue.mdx';
import JavaSet from '../content/articles/java/java-collections/java-set.mdx';
import JavaStack from '../content/articles/java/java-collections/java-stack.mdx';
import JavaThreads from '../content/articles/java/java-concurrency/java-threads.mdx';
import JavaVirtualThreads from '../content/articles/java/java-concurrency/java-virtual-threads.mdx';
import JoinCommunity from '../content/articles/system-design/foundations/join-community.mdx';
import Jwt from '../content/articles/system-design/system-design-in-practice/jwt.mdx';
import Kafka from '../content/articles/system-design/messaging-real-time/kafka.mdx';
import KeyValueStores from '../content/articles/system-design/databases/key-value-stores.mdx';
import LargeBlobs from '../content/articles/system-design/scaling-storage/large-blobs.mdx';
import LatencyVsThroughput from '../content/articles/system-design/foundations/latency-vs-throughput.mdx';
import LldAbstractFactory from '../content/articles/lld/design-patterns/lld-abstract-factory.mdx';
import LldAbstraction from '../content/articles/lld/oop-fundamentals/lld-abstraction.mdx';
import LldAbstractionExercise from '../content/articles/lld/oop-fundamentals/lld-abstraction-exercise.mdx';
import LldActivityDiagram from '../content/articles/lld/uml/lld-activity-diagram.mdx';
import LldAdapter from '../content/articles/lld/design-patterns/lld-adapter.mdx';
import LldAggregation from '../content/articles/lld/class-relationships/lld-aggregation.mdx';
import LldAggregationExercise from '../content/articles/lld/class-relationships/lld-aggregation-exercise.mdx';
import LldAssociation from '../content/articles/lld/class-relationships/lld-association.mdx';
import LldAssociationExercise from '../content/articles/lld/class-relationships/lld-association-exercise.mdx';
import LldBridge from '../content/articles/lld/design-patterns/lld-bridge.mdx';
import LldBuilder from '../content/articles/lld/design-patterns/lld-builder.mdx';
import LldChainOfResponsibility from '../content/articles/lld/design-patterns/lld-chain-of-responsibility.mdx';
import LldClassDiagram from '../content/articles/lld/uml/lld-class-diagram.mdx';
import LldClassesAndObjects from '../content/articles/lld/oop-fundamentals/lld-classes-and-objects.mdx';
import LldClassesAndObjectsExercise from '../content/articles/lld/oop-fundamentals/lld-classes-and-objects-exercise.mdx';
import LldCommand from '../content/articles/lld/design-patterns/lld-command.mdx';
import LldComposite from '../content/articles/lld/design-patterns/lld-composite.mdx';
import LldComposition from '../content/articles/lld/class-relationships/lld-composition.mdx';
import LldCompositionExercise from '../content/articles/lld/class-relationships/lld-composition-exercise.mdx';
import LldDecorator from '../content/articles/lld/design-patterns/lld-decorator.mdx';
import LldDependency from '../content/articles/lld/class-relationships/lld-dependency.mdx';
import LldDependencyExercise from '../content/articles/lld/class-relationships/lld-dependency-exercise.mdx';
import LldDesignBloomFilter from '../content/articles/lld/data-structures-search/lld-design-bloom-filter.mdx';
import LldDesignLruCache from '../content/articles/lld/data-structures-search/lld-design-lru-cache.mdx';
import LldDesignPatterns from '../content/articles/lld/design-patterns/lld-design-patterns.mdx';
import LldDesignSnakeAndLadder from '../content/articles/lld/games-puzzles/lld-design-snake-and-ladder.mdx';
import LldDesignStackOverflow from '../content/articles/lld/social-content-platforms/lld-design-stack-overflow.mdx';
import LldDesignTicTacToe from '../content/articles/lld/games-puzzles/lld-design-tic-tac-toe.mdx';
import LldDip from '../content/articles/lld/solid-principles/lld-dip.mdx';
import LldDipExercise from '../content/articles/lld/solid-principles/lld-dip-exercise.mdx';
import LldDry from '../content/articles/lld/design-principles/lld-dry.mdx';
import LldDryExercise from '../content/articles/lld/design-principles/lld-dry-exercise.mdx';
import LldEncapsulation from '../content/articles/lld/oop-fundamentals/lld-encapsulation.mdx';
import LldEncapsulationExercise from '../content/articles/lld/oop-fundamentals/lld-encapsulation-exercise.mdx';
import LldEnums from '../content/articles/lld/oop-fundamentals/lld-enums.mdx';
import LldEnumsExercise from '../content/articles/lld/oop-fundamentals/lld-enums-exercise.mdx';
import LldFacade from '../content/articles/lld/design-patterns/lld-facade.mdx';
import LldFactoryMethod from '../content/articles/lld/design-patterns/lld-factory-method.mdx';
import LldFlyweight from '../content/articles/lld/design-patterns/lld-flyweight.mdx';
import LldInheritance from '../content/articles/lld/oop-fundamentals/lld-inheritance.mdx';
import LldInheritanceExercise from '../content/articles/lld/oop-fundamentals/lld-inheritance-exercise.mdx';
import LldInterfaces from '../content/articles/lld/oop-fundamentals/lld-interfaces.mdx';
import LldInterfacesExercise from '../content/articles/lld/oop-fundamentals/lld-interfaces-exercise.mdx';
import LldIsp from '../content/articles/lld/solid-principles/lld-isp.mdx';
import LldIspExercise from '../content/articles/lld/solid-principles/lld-isp-exercise.mdx';
import LldIterator from '../content/articles/lld/design-patterns/lld-iterator.mdx';
import LldKiss from '../content/articles/lld/design-principles/lld-kiss.mdx';
import LldKissExercise from '../content/articles/lld/design-principles/lld-kiss-exercise.mdx';
import LldLldInterviewTypes from '../content/articles/lld/lld-introduction/lld-lld-interview-types.mdx';
import LldLldVsHld from '../content/articles/lld/lld-introduction/lld-lld-vs-hld.mdx';
import LldLod from '../content/articles/lld/design-principles/lld-lod.mdx';
import LldLodExercise from '../content/articles/lld/design-principles/lld-lod-exercise.mdx';
import LldLsp from '../content/articles/lld/solid-principles/lld-lsp.mdx';
import LldLspExercise from '../content/articles/lld/solid-principles/lld-lsp-exercise.mdx';
import LldMachineCodingApproach from '../content/articles/lld/lld-interview-tips/lld-machine-coding-approach.mdx';
import LldMediator from '../content/articles/lld/design-patterns/lld-mediator.mdx';
import LldMemento from '../content/articles/lld/design-patterns/lld-memento.mdx';
import LldNullObject from '../content/articles/lld/design-patterns/lld-null-object.mdx';
import LldObserver from '../content/articles/lld/design-patterns/lld-observer.mdx';
import LldOcp from '../content/articles/lld/solid-principles/lld-ocp.mdx';
import LldOcpExercise from '../content/articles/lld/solid-principles/lld-ocp-exercise.mdx';
import LldOodApproach from '../content/articles/lld/lld-interview-tips/lld-ood-approach.mdx';
import LldPolymorphism from '../content/articles/lld/oop-fundamentals/lld-polymorphism.mdx';
import LldPolymorphismExercise from '../content/articles/lld/oop-fundamentals/lld-polymorphism-exercise.mdx';
import LldPrototype from '../content/articles/lld/design-patterns/lld-prototype.mdx';
import LldProxy from '../content/articles/lld/design-patterns/lld-proxy.mdx';
import LldRealization from '../content/articles/lld/class-relationships/lld-realization.mdx';
import LldRealizationExercise from '../content/articles/lld/class-relationships/lld-realization-exercise.mdx';
import LldSequenceDiagram from '../content/articles/lld/uml/lld-sequence-diagram.mdx';
import LldSingleton from '../content/articles/lld/design-patterns/lld-singleton.mdx';
import LldSrp from '../content/articles/lld/solid-principles/lld-srp.mdx';
import LldSrpExercise from '../content/articles/lld/solid-principles/lld-srp-exercise.mdx';
import LldState from '../content/articles/lld/design-patterns/lld-state.mdx';
import LldStateMachineDiagram from '../content/articles/lld/uml/lld-state-machine-diagram.mdx';
import LldStrategy from '../content/articles/lld/design-patterns/lld-strategy.mdx';
import LldTemplateMethod from '../content/articles/lld/design-patterns/lld-template-method.mdx';
import LldUseCaseDiagram from '../content/articles/lld/uml/lld-use-case-diagram.mdx';
import LldVisitor from '../content/articles/lld/design-patterns/lld-visitor.mdx';
import LldWhatIsLld from '../content/articles/lld/lld-introduction/lld-what-is-lld.mdx';
import LldYagni from '../content/articles/lld/design-principles/lld-yagni.mdx';
import LldYagniExercise from '../content/articles/lld/design-principles/lld-yagni-exercise.mdx';
import LoadBalancers from '../content/articles/system-design/networking-apis/load-balancers.mdx';
import LoadBalancingAlgorithms from '../content/articles/system-design/networking-apis/load-balancing-algorithms.mdx';
import Logging from '../content/articles/system-design/system-design-in-practice/logging.mdx';
import LongPolling from '../content/articles/system-design/messaging-real-time/long-polling.mdx';
import LongPollingVsWebsockets from '../content/articles/system-design/messaging-real-time/long-polling-vs-websockets.mdx';
import LongRunning from '../content/articles/system-design/system-design-in-practice/long-running.mdx';
import MessageQueues from '../content/articles/system-design/messaging-real-time/message-queues.mdx';
import MonolithicArchitecture from '../content/articles/system-design/system-design-in-practice/monolithic-architecture.mdx';
import MultiStep from '../content/articles/system-design/distributed-systems/multi-step.mdx';
import NetworkingEssentials from '../content/articles/system-design/networking-apis/networking-essentials.mdx';
import NumbersToKnow from '../content/articles/system-design/foundations/numbers-to-know.mdx';
import Osi from '../content/articles/system-design/networking-apis/osi.mdx';
import PostgreSQL from '../content/articles/system-design/databases/postgresql.mdx';
import ProxyVsReverseProxy from '../content/articles/system-design/networking-apis/proxy-vs-reverse-proxy.mdx';
import PubSub from '../content/articles/system-design/messaging-real-time/pub-sub.mdx';
import PushVsPullArchitecture from '../content/articles/system-design/messaging-real-time/push-vs-pull-architecture.mdx';
import RateLimiting from '../content/articles/system-design/networking-apis/rate-limiting.mdx';
import ReadThroughVsWriteThroughCache from '../content/articles/system-design/caching/read-through-vs-write-through-cache.mdx';
import RealTime from '../content/articles/system-design/messaging-real-time/real-time.mdx';
import Redis from '../content/articles/system-design/caching/redis.mdx';
import RelationalDatabases from '../content/articles/system-design/databases/relational-databases.mdx';
import Reliability from '../content/articles/system-design/foundations/reliability.mdx';
import Scalability from '../content/articles/system-design/foundations/scalability.mdx';
import ScalingReads from '../content/articles/system-design/scaling-storage/scaling-reads.mdx';
import ScalingWrites from '../content/articles/system-design/scaling-storage/scaling-writes.mdx';
import ServiceDiscovery from '../content/articles/system-design/system-design-in-practice/service-discovery.mdx';
import SessionVsTokenAuth from '../content/articles/system-design/system-design-in-practice/session-vs-token-auth.mdx';
import Sharding from '../content/articles/system-design/scaling-storage/sharding.mdx';
import SinglePointOfFailureSpof from '../content/articles/system-design/foundations/single-point-of-failure-spof.mdx';
import SqlVsNosql from '../content/articles/system-design/databases/sql-vs-nosql.mdx';
import StatefulVsStatelessArchitecture from '../content/articles/system-design/system-design-in-practice/stateful-vs-stateless-architecture.mdx';
import StrongVsEventualConsistency from '../content/articles/system-design/distributed-systems/strong-vs-eventual-consistency.mdx';
import SyncVsAsyncCommunication from '../content/articles/system-design/messaging-real-time/sync-vs-async-communication.mdx';
import TcpVsUdp from '../content/articles/system-design/networking-apis/tcp-vs-udp.mdx';
import ThreePillarsObservability from '../content/articles/system-design/system-design-in-practice/three-pillars-observability.mdx';
import TimeSeriesDatabases from '../content/articles/system-design/databases/time-series.mdx';
import Top30SystemDesignConcepts from '../content/articles/system-design/foundations/top-30-system-design-concepts.mdx';
import VerticalPartitioning from '../content/articles/system-design/scaling-storage/vertical-partitioning.mdx';
import VerticalVsHorizontalScaling from '../content/articles/system-design/foundations/vertical-vs-horizontal-scaling.mdx';
import Webhooks from '../content/articles/system-design/networking-apis/webhooks.mdx';
import Websockets from '../content/articles/system-design/messaging-real-time/websockets.mdx';
import WhatIsAnApi from '../content/articles/system-design/networking-apis/what-is-an-api.mdx';
import WhatIsCaching from '../content/articles/system-design/caching/what-is-caching.mdx';
import WhatIsSystemDesign from '../content/articles/system-design/foundations/what-is-system-design.mdx';
import ZooKeeper from '../content/articles/system-design/distributed-systems/zookeeper.mdx';

export default function MainContent() {
  const { articleId } = useParams();
  usePageTitle(articleId);

  if (articleId && !VALID_ARTICLE_IDS.includes(articleId)) {
    return <NotFound />;
  }

  const renderArticle = () => {
    if (articleId === 'acid-transactions') return <AcidTransactions />;
    if (articleId === 'api-design') return <ApiDesign />;
    if (articleId === 'api-gateway') return <ApiGateway />;
    if (articleId === 'api-gateways') return <ApiGateways />;
    if (articleId === 'authentication-authorization') return <AuthenticationAuthorization />;
    if (articleId === 'availability') return <Availability />;
    if (articleId === 'batch-vs-stream-processing') return <BatchVsStreamProcessing />;
    if (articleId === 'block-vs-file-vs-object-storage') return <BlockVsFileVsObjectStorage />;
    if (articleId === 'bloom-filters') return <BloomFilters />;
    if (articleId === 'cache-eviction-policies') return <CacheEvictionPolicies />;
    if (articleId === 'caching') return <Caching />;
    if (articleId === 'caching-strategies') return <CachingStrategies />;
    if (articleId === 'cap-theorem') return <CapTheorem />;
    if (articleId === 'cassandra') return <Cassandra />;
    if (articleId === 'challenges-of-distribution') return <ChallengesOfDistribution />;
    if (articleId === 'change-data-capture-cdc') return <ChangeDataCaptureCdc />;
    if (articleId === 'checksums') return <Checksums />;
    if (articleId === 'client-server-architecture') return <ClientServerArchitecture />;
    if (articleId === 'concurrency-vs-parallelism') return <ConcurrencyVsParallelism />;
    if (articleId === 'consensus-algorithms') return <ConsensusAlgorithms />;
    if (articleId === 'consistent-hashing') return <ConsistentHashing />;
    if (articleId === 'content-delivery-network-cdn') return <ContentDeliveryNetworkCdn />;
    if (articleId === 'contention') return <Contention />;
    if (articleId === 'course-introduction') return <CourseIntroduction />;
    if (articleId === 'data-modeling') return <DataModeling />;
    if (articleId === 'data-structures-for-scale-introduction') return <DataStructuresForScaleIntroduction />;
    if (articleId === 'database-types') return <DatabaseTypes />;
    if (articleId === 'db-indexing') return <DbIndexing />;
    if (articleId === 'deployment-strategies-overview') return <DeploymentStrategiesOverview />;
    if (articleId === 'distributed-caching') return <DistributedCaching />;
    if (articleId === 'distributed-transactions-problems') return <DistributedTransactionsProblems />;
    if (articleId === 'domain-name-system-dns') return <DomainNameSystemDns />;
    if (articleId === 'dynamodb') return <DynamoDB />;
    if (articleId === 'elasticsearch') return <Elasticsearch />;
    if (articleId === 'flink') return <Flink />;
    if (articleId === 'heartbeats') return <Heartbeats />;
    if (articleId === 'http-https') return <HttpHttps />;
    if (articleId === 'idempotency') return <Idempotency />;
    if (articleId === 'indexing') return <Indexing />;
    if (articleId === 'ip-address') return <IpAddress />;
    if (articleId === 'java-concurrent-collections') return <JavaConcurrentCollections />;
    if (articleId === 'java-gc') return <JavaGC />;
    if (articleId === 'java-jvm') return <JavaJVM />;
    if (articleId === 'java-lang-abstract-classes') return <JavaLangAbstractClasses />;
    if (articleId === 'java-lang-abstract-methods') return <JavaLangAbstractMethods />;
    if (articleId === 'java-lang-access-modifiers') return <JavaLangAccessModifiers />;
    if (articleId === 'java-lang-annotations-basics') return <JavaLangAnnotationsBasics />;
    if (articleId === 'java-lang-anonymous-classes') return <JavaLangAnonymousClasses />;
    if (articleId === 'java-lang-array-operations') return <JavaLangArrayOperations />;
    if (articleId === 'java-lang-arrays-basics') return <JavaLangArraysBasics />;
    if (articleId === 'java-lang-arrays-class') return <JavaLangArraysClass />;
    if (articleId === 'java-lang-break-continue') return <JavaLangBreakContinue />;
    if (articleId === 'java-lang-classes-and-objects') return <JavaLangClassesAndObjects />;
    if (articleId === 'java-lang-coding-standards') return <JavaLangCodingStandards />;
    if (articleId === 'java-lang-collections-overview') return <JavaLangCollectionsOverview />;
    if (articleId === 'java-lang-comments') return <JavaLangComments />;
    if (articleId === 'java-lang-compile-time-polymorphism') return <JavaLangCompileTimePolymorphism />;
    if (articleId === 'java-lang-constructor-chaining') return <JavaLangConstructorChaining />;
    if (articleId === 'java-lang-constructors') return <JavaLangConstructors />;
    if (articleId === 'java-lang-copying-arrays') return <JavaLangCopyingArrays />;
    if (articleId === 'java-lang-course-setup') return <JavaLangCourseSetup />;
    if (articleId === 'java-lang-covariant-return-types') return <JavaLangCovariantReturnTypes />;
    if (articleId === 'java-lang-data-hiding') return <JavaLangDataHiding />;
    if (articleId === 'java-lang-date-time-overview') return <JavaLangDateTimeOverview />;
    if (articleId === 'java-lang-default-methods') return <JavaLangDefaultMethods />;
    if (articleId === 'java-lang-do-while-loop') return <JavaLangDoWhileLoop />;
    if (articleId === 'java-lang-dynamic-method-dispatch') return <JavaLangDynamicMethodDispatch />;
    if (articleId === 'java-lang-encapsulation-basics') return <JavaLangEncapsulationBasics />;
    if (articleId === 'java-lang-enhanced-for-loop') return <JavaLangEnhancedForLoop />;
    if (articleId === 'java-lang-exception-basics') return <JavaLangExceptionBasics />;
    if (articleId === 'java-lang-extends-keyword') return <JavaLangExtendsKeyword />;
    if (articleId === 'java-lang-file-class') return <JavaLangFileClass />;
    if (articleId === 'java-lang-final-keyword') return <JavaLangFinalKeyword />;
    if (articleId === 'java-lang-first-java-program') return <JavaLangFirstJavaProgram />;
    if (articleId === 'java-lang-for-loop') return <JavaLangForLoop />;
    if (articleId === 'java-lang-functional-interfaces') return <JavaLangFunctionalInterfaces />;
    if (articleId === 'java-lang-generics-basics') return <JavaLangGenericsBasics />;
    if (articleId === 'java-lang-getters-setters') return <JavaLangGettersSetters />;
    if (articleId === 'java-lang-history-of-java') return <JavaLangHistoryOfJava />;
    if (articleId === 'java-lang-how-java-works') return <JavaLangHowJavaWorks />;
    if (articleId === 'java-lang-if-else') return <JavaLangIfElse />;
    if (articleId === 'java-lang-immutable-classes') return <JavaLangImmutableClasses />;
    if (articleId === 'java-lang-import-statement') return <JavaLangImportStatement />;
    if (articleId === 'java-lang-inheritance-basics') return <JavaLangInheritanceBasics />;
    if (articleId === 'java-lang-initializer-blocks') return <JavaLangInitializerBlocks />;
    if (articleId === 'java-lang-inner-classes') return <JavaLangInnerClasses />;
    if (articleId === 'java-lang-input-output') return <JavaLangInputOutput />;
    if (articleId === 'java-lang-instanceof-operator') return <JavaLangInstanceofOperator />;
    if (articleId === 'java-lang-interfaces') return <JavaLangInterfaces />;
    if (articleId === 'java-lang-java-features') return <JavaLangJavaFeatures />;
    if (articleId === 'java-lang-java-modules') return <JavaLangJavaModules />;
    if (articleId === 'java-lang-jdbc-basics') return <JavaLangJdbcBasics />;
    if (articleId === 'java-lang-jdk-jre-jvm') return <JavaLangJdkJreJvm />;
    if (articleId === 'java-lang-join-community') return <JavaLangJoinCommunity />;
    if (articleId === 'java-lang-labeled-statements') return <JavaLangLabeledStatements />;
    if (articleId === 'java-lang-lambda-expressions') return <JavaLangLambdaExpressions />;
    if (articleId === 'java-lang-marker-interfaces') return <JavaLangMarkerInterfaces />;
    if (articleId === 'java-lang-memory-model-basics') return <JavaLangMemoryModelBasics />;
    if (articleId === 'java-lang-method-overloading') return <JavaLangMethodOverloading />;
    if (articleId === 'java-lang-method-overriding') return <JavaLangMethodOverriding />;
    if (articleId === 'java-lang-method-parameters') return <JavaLangMethodParameters />;
    if (articleId === 'java-lang-methods-basics') return <JavaLangMethodsBasics />;
    if (articleId === 'java-lang-module-info') return <JavaLangModuleInfo />;
    if (articleId === 'java-lang-multidimensional-arrays') return <JavaLangMultidimensionalArrays />;
    if (articleId === 'java-lang-naming-conventions') return <JavaLangNamingConventions />;
    if (articleId === 'java-lang-networking-basics') return <JavaLangNetworkingBasics />;
    if (articleId === 'java-lang-object-class') return <JavaLangObjectClass />;
    if (articleId === 'java-lang-operators') return <JavaLangOperators />;
    if (articleId === 'java-lang-packages') return <JavaLangPackages />;
    if (articleId === 'java-lang-pass-by-value') return <JavaLangPassByValue />;
    if (articleId === 'java-lang-polymorphism-basics') return <JavaLangPolymorphismBasics />;
    if (articleId === 'java-lang-primitive-types') return <JavaLangPrimitiveTypes />;
    if (articleId === 'java-lang-private-interface-methods') return <JavaLangPrivateInterfaceMethods />;
    if (articleId === 'java-lang-record-classes') return <JavaLangRecordClasses />;
    if (articleId === 'java-lang-recursion') return <JavaLangRecursion />;
    if (articleId === 'java-lang-reference-types') return <JavaLangReferenceTypes />;
    if (articleId === 'java-lang-reflection-basics') return <JavaLangReflectionBasics />;
    if (articleId === 'java-lang-regular-expressions') return <JavaLangRegularExpressions />;
    if (articleId === 'java-lang-return-types') return <JavaLangReturnTypes />;
    if (articleId === 'java-lang-runtime-polymorphism') return <JavaLangRuntimePolymorphism />;
    if (articleId === 'java-lang-sealed-classes') return <JavaLangSealedClasses />;
    if (articleId === 'java-lang-setting-up-environment') return <JavaLangSettingUpEnvironment />;
    if (articleId === 'java-lang-static-import') return <JavaLangStaticImport />;
    if (articleId === 'java-lang-static-interface-methods') return <JavaLangStaticInterfaceMethods />;
    if (articleId === 'java-lang-static-keyword') return <JavaLangStaticKeyword />;
    if (articleId === 'java-lang-string-basics') return <JavaLangStringBasics />;
    if (articleId === 'java-lang-string-comparison') return <JavaLangStringComparison />;
    if (articleId === 'java-lang-string-formatting') return <JavaLangStringFormatting />;
    if (articleId === 'java-lang-string-immutability') return <JavaLangStringImmutability />;
    if (articleId === 'java-lang-string-methods') return <JavaLangStringMethods />;
    if (articleId === 'java-lang-stringbuffer') return <JavaLangStringbuffer />;
    if (articleId === 'java-lang-stringbuilder') return <JavaLangStringbuilder />;
    if (articleId === 'java-lang-super-keyword') return <JavaLangSuperKeyword />;
    if (articleId === 'java-lang-switch-statement') return <JavaLangSwitchStatement />;
    if (articleId === 'java-lang-this-keyword') return <JavaLangThisKeyword />;
    if (articleId === 'java-lang-threads-basics') return <JavaLangThreadsBasics />;
    if (articleId === 'java-lang-type-casting') return <JavaLangTypeCasting />;
    if (articleId === 'java-lang-var-keyword') return <JavaLangVarKeyword />;
    if (articleId === 'java-lang-variable-arguments') return <JavaLangVariableArguments />;
    if (articleId === 'java-lang-variables-and-data-types') return <JavaLangVariablesAndDataTypes />;
    if (articleId === 'java-lang-what-is-java') return <JavaLangWhatIsJava />;
    if (articleId === 'java-lang-while-loop') return <JavaLangWhileLoop />;
    if (articleId === 'java-list') return <JavaList />;
    if (articleId === 'java-locks') return <JavaLocks />;
    if (articleId === 'java-map') return <JavaMap />;
    if (articleId === 'java-queue') return <JavaQueue />;
    if (articleId === 'java-set') return <JavaSet />;
    if (articleId === 'java-stack') return <JavaStack />;
    if (articleId === 'java-threads') return <JavaThreads />;
    if (articleId === 'java-virtual-threads') return <JavaVirtualThreads />;
    if (articleId === 'join-community') return <JoinCommunity />;
    if (articleId === 'jwt') return <Jwt />;
    if (articleId === 'kafka') return <Kafka />;
    if (articleId === 'key-value-stores') return <KeyValueStores />;
    if (articleId === 'large-blobs') return <LargeBlobs />;
    if (articleId === 'latency-vs-throughput') return <LatencyVsThroughput />;
    if (articleId === 'lld-abstract-factory') return <LldAbstractFactory />;
    if (articleId === 'lld-abstraction') return <LldAbstraction />;
    if (articleId === 'lld-abstraction-exercise') return <LldAbstractionExercise />;
    if (articleId === 'lld-activity-diagram') return <LldActivityDiagram />;
    if (articleId === 'lld-adapter') return <LldAdapter />;
    if (articleId === 'lld-aggregation') return <LldAggregation />;
    if (articleId === 'lld-aggregation-exercise') return <LldAggregationExercise />;
    if (articleId === 'lld-association') return <LldAssociation />;
    if (articleId === 'lld-association-exercise') return <LldAssociationExercise />;
    if (articleId === 'lld-bridge') return <LldBridge />;
    if (articleId === 'lld-builder') return <LldBuilder />;
    if (articleId === 'lld-chain-of-responsibility') return <LldChainOfResponsibility />;
    if (articleId === 'lld-class-diagram') return <LldClassDiagram />;
    if (articleId === 'lld-classes-and-objects') return <LldClassesAndObjects />;
    if (articleId === 'lld-classes-and-objects-exercise') return <LldClassesAndObjectsExercise />;
    if (articleId === 'lld-command') return <LldCommand />;
    if (articleId === 'lld-composite') return <LldComposite />;
    if (articleId === 'lld-composition') return <LldComposition />;
    if (articleId === 'lld-composition-exercise') return <LldCompositionExercise />;
    if (articleId === 'lld-decorator') return <LldDecorator />;
    if (articleId === 'lld-dependency') return <LldDependency />;
    if (articleId === 'lld-dependency-exercise') return <LldDependencyExercise />;
    if (articleId === 'lld-design-bloom-filter') return <LldDesignBloomFilter />;
    if (articleId === 'lld-design-lru-cache') return <LldDesignLruCache />;
    if (articleId === 'lld-design-patterns') return <LldDesignPatterns />;
    if (articleId === 'lld-design-snake-and-ladder') return <LldDesignSnakeAndLadder />;
    if (articleId === 'lld-design-stack-overflow') return <LldDesignStackOverflow />;
    if (articleId === 'lld-design-tic-tac-toe') return <LldDesignTicTacToe />;
    if (articleId === 'lld-dip') return <LldDip />;
    if (articleId === 'lld-dip-exercise') return <LldDipExercise />;
    if (articleId === 'lld-dry') return <LldDry />;
    if (articleId === 'lld-dry-exercise') return <LldDryExercise />;
    if (articleId === 'lld-encapsulation') return <LldEncapsulation />;
    if (articleId === 'lld-encapsulation-exercise') return <LldEncapsulationExercise />;
    if (articleId === 'lld-enums') return <LldEnums />;
    if (articleId === 'lld-enums-exercise') return <LldEnumsExercise />;
    if (articleId === 'lld-facade') return <LldFacade />;
    if (articleId === 'lld-factory-method') return <LldFactoryMethod />;
    if (articleId === 'lld-flyweight') return <LldFlyweight />;
    if (articleId === 'lld-inheritance') return <LldInheritance />;
    if (articleId === 'lld-inheritance-exercise') return <LldInheritanceExercise />;
    if (articleId === 'lld-interfaces') return <LldInterfaces />;
    if (articleId === 'lld-interfaces-exercise') return <LldInterfacesExercise />;
    if (articleId === 'lld-isp') return <LldIsp />;
    if (articleId === 'lld-isp-exercise') return <LldIspExercise />;
    if (articleId === 'lld-iterator') return <LldIterator />;
    if (articleId === 'lld-kiss') return <LldKiss />;
    if (articleId === 'lld-kiss-exercise') return <LldKissExercise />;
    if (articleId === 'lld-lld-interview-types') return <LldLldInterviewTypes />;
    if (articleId === 'lld-lld-vs-hld') return <LldLldVsHld />;
    if (articleId === 'lld-lod') return <LldLod />;
    if (articleId === 'lld-lod-exercise') return <LldLodExercise />;
    if (articleId === 'lld-lsp') return <LldLsp />;
    if (articleId === 'lld-lsp-exercise') return <LldLspExercise />;
    if (articleId === 'lld-machine-coding-approach') return <LldMachineCodingApproach />;
    if (articleId === 'lld-mediator') return <LldMediator />;
    if (articleId === 'lld-memento') return <LldMemento />;
    if (articleId === 'lld-null-object') return <LldNullObject />;
    if (articleId === 'lld-observer') return <LldObserver />;
    if (articleId === 'lld-ocp') return <LldOcp />;
    if (articleId === 'lld-ocp-exercise') return <LldOcpExercise />;
    if (articleId === 'lld-ood-approach') return <LldOodApproach />;
    if (articleId === 'lld-polymorphism') return <LldPolymorphism />;
    if (articleId === 'lld-polymorphism-exercise') return <LldPolymorphismExercise />;
    if (articleId === 'lld-prototype') return <LldPrototype />;
    if (articleId === 'lld-proxy') return <LldProxy />;
    if (articleId === 'lld-realization') return <LldRealization />;
    if (articleId === 'lld-realization-exercise') return <LldRealizationExercise />;
    if (articleId === 'lld-sequence-diagram') return <LldSequenceDiagram />;
    if (articleId === 'lld-singleton') return <LldSingleton />;
    if (articleId === 'lld-srp') return <LldSrp />;
    if (articleId === 'lld-srp-exercise') return <LldSrpExercise />;
    if (articleId === 'lld-state') return <LldState />;
    if (articleId === 'lld-state-machine-diagram') return <LldStateMachineDiagram />;
    if (articleId === 'lld-strategy') return <LldStrategy />;
    if (articleId === 'lld-template-method') return <LldTemplateMethod />;
    if (articleId === 'lld-use-case-diagram') return <LldUseCaseDiagram />;
    if (articleId === 'lld-visitor') return <LldVisitor />;
    if (articleId === 'lld-what-is-lld') return <LldWhatIsLld />;
    if (articleId === 'lld-yagni') return <LldYagni />;
    if (articleId === 'lld-yagni-exercise') return <LldYagniExercise />;
    if (articleId === 'load-balancers') return <LoadBalancers />;
    if (articleId === 'load-balancing-algorithms') return <LoadBalancingAlgorithms />;
    if (articleId === 'logging') return <Logging />;
    if (articleId === 'long-polling') return <LongPolling />;
    if (articleId === 'long-polling-vs-websockets') return <LongPollingVsWebsockets />;
    if (articleId === 'long-running') return <LongRunning />;
    if (articleId === 'message-queues') return <MessageQueues />;
    if (articleId === 'monolithic-architecture') return <MonolithicArchitecture />;
    if (articleId === 'multi-step') return <MultiStep />;
    if (articleId === 'networking') return <NetworkingEssentials />;
    if (articleId === 'networking-essentials') return <NetworkingEssentials />;
    if (articleId === 'numbers-to-know') return <NumbersToKnow />;
    if (articleId === 'osi') return <Osi />;
    if (articleId === 'postgresql') return <PostgreSQL />;
    if (articleId === 'proxy-vs-reverse-proxy') return <ProxyVsReverseProxy />;
    if (articleId === 'pub-sub') return <PubSub />;
    if (articleId === 'push-vs-pull-architecture') return <PushVsPullArchitecture />;
    if (articleId === 'rate-limiting') return <RateLimiting />;
    if (articleId === 'read-through-vs-write-through-cache') return <ReadThroughVsWriteThroughCache />;
    if (articleId === 'real-time') return <RealTime />;
    if (articleId === 'redis') return <Redis />;
    if (articleId === 'relational-databases') return <RelationalDatabases />;
    if (articleId === 'reliability') return <Reliability />;
    if (articleId === 'scalability') return <Scalability />;
    if (articleId === 'scaling-reads') return <ScalingReads />;
    if (articleId === 'scaling-writes') return <ScalingWrites />;
    if (articleId === 'service-discovery') return <ServiceDiscovery />;
    if (articleId === 'session-vs-token-auth') return <SessionVsTokenAuth />;
    if (articleId === 'sharding') return <Sharding />;
    if (articleId === 'single-point-of-failure-spof') return <SinglePointOfFailureSpof />;
    if (articleId === 'sql-vs-nosql') return <SqlVsNosql />;
    if (articleId === 'stateful-vs-stateless-architecture') return <StatefulVsStatelessArchitecture />;
    if (articleId === 'strong-vs-eventual-consistency') return <StrongVsEventualConsistency />;
    if (articleId === 'sync-vs-async-communication') return <SyncVsAsyncCommunication />;
    if (articleId === 'tcp-vs-udp') return <TcpVsUdp />;
    if (articleId === 'three-pillars-observability') return <ThreePillarsObservability />;
    if (articleId === 'time-series') return <TimeSeriesDatabases />;
    if (articleId === 'top-30-system-design-concepts') return <Top30SystemDesignConcepts />;
    if (articleId === 'vertical-partitioning') return <VerticalPartitioning />;
    if (articleId === 'vertical-vs-horizontal-scaling') return <VerticalVsHorizontalScaling />;
    if (articleId === 'webhooks') return <Webhooks />;
    if (articleId === 'websockets') return <Websockets />;
    if (articleId === 'what-is-an-api') return <WhatIsAnApi />;
    if (articleId === 'what-is-caching') return <WhatIsCaching />;
    if (articleId === 'what-is-system-design') return <WhatIsSystemDesign />;
    if (articleId === 'zookeeper') return <ZooKeeper />;

    // Default to Networking Essentials
    return <NetworkingEssentials />;
  };


  const { completedArticles, toggleCompleted } = useProgress();
  const activeArticleId = articleId || 'networking';
  const isCompleted = completedArticles.includes(activeArticleId);

  const trackId = getTrackByArticleId(activeArticleId);
  const trackArticles = getTrackArticles(trackId);
  const currentIndex = trackArticles.findIndex(item => item.id === activeArticleId);
  const prevArticle = currentIndex > 0 ? trackArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex >= 0 && currentIndex < trackArticles.length - 1 ? trackArticles[currentIndex + 1] : null;

  const components = {
    pre: (props) => {
      try {
        const codeEl = React.Children.only(props.children);
        const className = codeEl.props.className || '';
        if (className.includes('language-mermaid')) {
          const chartCode = codeEl.props.children;
          return <Mermaid chart={chartCode} />;
        }
      } catch (e) {}
      return <pre {...props} />;
    }
  };

  return (
    <main className="content-scrollable">
      <article>
        {React.cloneElement(renderArticle(), { components })}
      </article>

      <div className="article-nav-container">
        <div className="article-nav-left">
          {prevArticle ? (
            <Link to={`/${prevArticle.id}`} className="article-nav-link prev">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              <span>{prevArticle.label}</span>
            </Link>
          ) : <div />}
        </div>

        <div className="article-nav-center">
          <button 
            className={`btn-completion ${isCompleted ? 'completed' : ''}`}
            onClick={() => toggleCompleted(activeArticleId)}
          >
            {isCompleted ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Completed
              </>
            ) : (
              'Mark as Completed'
            )}
          </button>
        </div>

        <div className="article-nav-right">
          {nextArticle ? (
            <Link to={`/${nextArticle.id}`} className="article-nav-link next">
              <span>{nextArticle.label}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  );
}
