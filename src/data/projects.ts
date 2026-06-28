export interface Project {
  title: string
  /** optional status pill: [label, css class] */
  pill?: [string, string]
  meta: string
  /** lead paragraph — may contain inline <b> HTML */
  body: string
  /** optional bullet list — items may contain inline HTML */
  bullets?: string[]
  tags: string[]
  /** render with the highlighted .headline card style */
  headline?: boolean
}

export const projects: Project[] = [
  {
    title: 'Caplin — a full Ethereum consensus client, mostly solo',
    pill: ['project lead', 'pill live'],
    meta: 'Go · Erigon · 2022 – present',
    headline: true,
    body:
      "I built an entire Consensus Layer for Erigon because I didn't like how the existing ones operated. It started as a consensus light client, but there weren't enough light-client servers on mainnet, so I gave up on half-measures and went for the full thing. The first prototype took ~9 months. Most of it was me — because needing 10 developers for a consensus layer is, if you ask me, a <b>skill issue</b> (this is irony). I'm now Project Lead (not fired yet :D) and brought in another company's manpower, so apparently I have enough social skills to land real partnerships too.",
    bullets: [
      'Learned the inner workings of Ethereum 2.0 consensus end-to-end.',
      'Memory management &amp; caching for distributed systems.',
      'CPU/heap profiling and optimization.',
      'DevOps fundamentals — most notably Kubernetes.',
    ],
    tags: ['Go', 'consensus', 'libp2p', 'SSZ', 'profiling', 'Kubernetes'],
  },
  {
    title: 'Compact data model for archive nodes',
    pill: ['18TB → 1.6TB', 'pill'],
    meta: 'Storage engineering · Erigon / Caplin',
    body:
      'I redesigned the data model for Ethereum archive nodes, cutting storage from <b>18 TB to 1.6 TB</b> — an ~11× reduction — while keeping historical state fully queryable. Better scalability, cheaper to run, faster to query.',
    bullets: [
      'Data-model optimization: compact, efficient on-disk structures.',
      'Scalability: dramatically lower storage footprint for archive nodes.',
      'Performance: improved query efficiency and lower operational cost.',
    ],
    tags: ['data modeling', 'MDBX', 'snapshots', 'ETL'],
  },
  {
    title: "The Merge — Ethereum PoS in Erigon's execution layer",
    meta: 'Go · Erigon · as a junior',
    body:
      'As a junior on the Erigon team I was handed "The Merge" — the PoS implementation for the execution layer. Nominally a team effort with one senior and another junior, but I ended up doing most of it. Mostly a test of stress, patience and responsibility management. It shipped.',
    bullets: [
      "Resurrected Erigon's transaction pool (it didn't work before) — learned how the tx pool really works.",
      'Engine API implementation — learned how consensus-driven distributed systems are architected.',
      'State management across EL states — copy-on-write Ethereum state handling.',
      'Worked across client teams with very different backgrounds (ex-Googlers, ex-Ivy, and more) — and <b>not incompetent ones</b>.',
    ],
    tags: ['Engine API', 'txpool', 'state', 'PoS'],
  },
  {
    title: 'Post-Quantum Ethereum — experimental Erigon fork',
    pill: ['research', 'pill pink'],
    meta: 'Go + Rust · Falcon-512 / Dilithium · 2026',
    body:
      'An experimental Erigon build exploring what a post-quantum Ethereum could look like. I added <b>Falcon-512</b> and <b>Dilithium</b> signature-verification precompiles and implemented <b>EIP-8175</b> composable transactions (a new tx type) that can be signed with Falcon-512 instead of secp256k1. Proven end-to-end on a Kurtosis devnet: PQ transactions accepted by the txpool, included in blocks, executed successfully.',
    bullets: [
      'FALCON_VERIFY and DILITHIUM_VERIFY EVM precompiles, working on-chain.',
      'New composable transaction type (0x06) with pluggable signature schemes.',
      'Full RLP encode/decode, signer integration, txpool &amp; receipt support.',
      'Falcon-512 ↔ NTT-domain bridge between the EIP format and the precompile.',
    ],
    tags: ['Falcon-512', 'Dilithium', 'EIP-8175', 'precompiles', 'Rust', 'Kurtosis'],
  },
  {
    title: 'AI-driven hard-fork implementer for Erigon',
    pill: ['tooling', 'pill warn'],
    meta: "Python · agentic tooling · as Erigon's AI Lead",
    body:
      "A tool that drives an LLM agent to implement Ethereum consensus hard forks across Caplin's three subsystems — core state transition, block production, and the archive node — then runs the spec + antiquary test suites and feeds failures back into a fix loop until everything is green. Because writing fork boilerplate by hand is a job for a machine.",
    tags: ['Python', 'LLM agents', 'spec tests', 'automation'],
  },
  {
    title: 'Robotics research — University of Genoa',
    meta: 'C++ / C# / Python · age 14',
    body:
      "At 14 I became an unpaid slave (their word, probably mine) at the University of Genoa, working on robotics. I controlled a robotic arm with speech recognition, built a path-finding algorithm for drones, and worked with ROS. I simulated drone movement in Unity. I decided academia wasn't my vocation — it underpays you.",
    bullets: [
      'Unity + C# simulations.',
      'Inner workings of embedded systems.',
      'How academic research actually works.',
    ],
    tags: ['ROS', 'Unity', 'C++', 'embedded'],
  },
  {
    title: 'Bridge development — unnamed L0 firm, Switzerland',
    meta: 'Rust + Solidity',
    body:
      'I worked at an asset-bridging (L0) firm, building part of the new Rust backend, refactoring their code, implementing calldata passing into their Solidity contracts, and reviewing/auditing some of those contracts.',
    bullets: [
      'Rust — my first serious use of it.',
      'Refactoring code with more duplication than the wildlife near Nagasaki.',
      'Handling large amounts of customer money responsibly.',
    ],
    tags: ['Rust', 'Solidity', 'audits', 'bridges'],
  },
  {
    title: 'JSON-RPC in Akula (Rust Ethereum client)',
    meta: 'Rust',
    body:
      'I implemented the JSON-RPC interface in Akula before the project shut down — to spec, with an easy way to add new methods. The first Rust implementation of the Ethereum JSON-RPC.',
    bullets: [
      "Deep familiarity with Ethereum's JSON-RPC API surface.",
      'More proficiency in Rust.',
    ],
    tags: ['Rust', 'JSON-RPC'],
  },
  {
    title: 'Pre-sort-before-insert framework (Go, Rust, C++)',
    meta: 'Databases · external merge sort',
    body:
      'A system that takes randomly-ordered data and inserts it sequentially for efficient writes into B-Tree-based databases — external merge sort with a heap. Simple, but it cut our database write overhead meaningfully.',
    bullets: [
      'Designing a reusable framework from scratch.',
      'Practical database/storage design.',
    ],
    tags: ['B-Tree', 'merge sort', 'Go', 'Rust', 'C++'],
  },
]
