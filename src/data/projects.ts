export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  /** optional status pill: [label, css class] */
  pill?: [string, string]
  meta: string
  /** lead paragraph — may contain inline <b>/<code> HTML */
  body: string
  /** optional bullet list — items may contain inline HTML */
  bullets?: string[]
  tags: string[]
  /** optional external/internal links */
  links?: ProjectLink[]
  /** render with the highlighted .headline card style */
  headline?: boolean
}

export const projects: Project[] = [
  {
    title: 'Janus, fv-uint256 & fv-modexp — Machine-checked proofs of compiled Go',
    pill: ['formal verification', 'pill live'],
    meta: 'Lean 4 · Go · arm64 & amd64 machine code · 2026',
    headline: true,
    body:
      '<b>Janus</b> is a Lean 4 framework for proving theorems directly about the <b>compiled arm64 and amd64 ELF machine code</b> emitted by the Go compiler — without trusting the Go compiler or linker. Using Janus, I formally verified two critical Ethereum client components against clean mathematical specifications, with every theorem paired with a kernel-checked non-vacuity witness.',
    bullets: [
      '<b>fv-uint256:</b> proved all <b>146 exported functions</b> (293/293 rows across arm64, amd64, and <code>GOAMD64=v3</code>) of <code>holiman/uint256</code> — the 256-bit arithmetic library powering Geth and Erigon — at the compiled machine-code level.',
      '<b>fv-modexp:</b> proved <code>go-ethereum</code> v1.17.10\'s Osaka <b>MODEXP</b> precompile (<code>Run</code>, <code>RequiredGas</code>, and patched <code>go-bigmodexpfix</code> <code>math/big</code> + assembly kernels; 43/43 arm64 &amp; 37/37 amd64 rows) against the <b>EthLib</b> specification for every fork from Fusaka onward.',
      'Zero <code>sorry</code>, zero extra axioms; proofs verify the exact bytes the CPU executes.',
    ],
    tags: ['Lean 4', 'arm64', 'amd64', 'Go', 'formal verification', 'geth'],
    links: [
      { label: 'Janus →', url: 'https://github.com/Giulio2002/Janus' },
      { label: 'fv-uint256 →', url: 'https://github.com/Giulio2002/fv-uint256' },
      { label: 'fv-modexp →', url: 'https://github.com/Giulio2002/fv-modexp' },
    ],
  },
  {
    title: 'usdt-verify — Formal verification of deployed USDT mainnet bytecode',
    pill: ['Lean 4 · mainnet', 'pill live'],
    meta: 'Lean 4 · EthLib · EVM bytecode · Nov 2026',
    headline: true,
    body:
      'Machine-checked formal verification in Lean 4 of the actual <b>11,075-byte TetherToken (USDT) runtime bytecode</b> deployed on Ethereum mainnet at <code>0xdAC17F958D2ee523a2206206994597C13D831ec7</code> since 2017 — verified directly against the deployed bytes (not Solidity source) on top of <b>EthLib</b>.',
    bullets: [
      'Complete dispatcher and per-function verification across all <b>32 function selectors</b>, fallback paths, and zero-ether enforcement.',
      'Proved the global <b>supply invariant</b> (sum of all 2<sup>160</sup> balances equals <code>_totalSupply</code>) across every write path, plus pause, blacklist, allowance, owner-only, and deprecated-forwarding security properties.',
      'Covers every fork from Berlin through Glamsterdam, including <b>EIP-7702</b> delegations and the <b>EIP-8037</b> gas meter; contributed reusable EVM program-logic lemmas back to <code>ethereum/EthLib</code>.',
    ],
    tags: ['Lean 4', 'EVM bytecode', 'EthLib', 'smart contract security'],
    links: [{ label: 'usdt-verify →', url: 'https://github.com/Giulio2002/usdt-verify' }],
  },
  {
    title: 'EthLib — Formally verified Ethereum primitives in Lean 4',
    pill: ['287 merged PRs', 'pill live'],
    meta: 'Lean 4 · Ethereum Foundation · 2026',
    body:
      'Core contributor (#2 overall by commits) to <code>ethereum/EthLib</code>, the shared Lean 4 home for formally verified Ethereum execution, consensus, and cryptographic specifications and proofs.',
    bullets: [
      'Built EVM program-logic proofs covering call composition (<code>CALL</code>, <code>CREATE</code>, <code>CREATE2</code>), memory/stack effects, gas-monotone rules, and <b>EIP-7702</b> authorization &amp; delegation semantics.',
      'Specified and proved execution precompiles and cryptographic primitives: <b>MODEXP</b>, SHA-256, RIPEMD-160, KECCAK256, <b>BLS12-381</b> (RFC 9380 hash-to-field &amp; G2 cofactor clearing), and <b>alt_bn128</b> pairing bilinearity.',
      'Contributed Gloas consensus builder-bid specs, ENR/discv5 networking proofs, and fast <code>NatCode</code> bytecode representation.',
    ],
    tags: ['Lean 4', 'Ethereum specs', 'cryptography', 'EVM', 'consensus'],
    links: [{ label: 'ethereum/EthLib →', url: 'https://github.com/ethereum/EthLib' }],
  },
  {
    title: 'formal-factory (ff) & Bend 2 verified cryptography / SSZ suite',
    pill: ['AI × FV', 'pill warn'],
    meta: 'Bend 2 · Lean 4 · Python · C · Sep – Nov 2026',
    body:
      'Built <b>formal-factory</b> (<code>ff</code>), an agentic software factory where AI agents write implementations together with machine-checked proofs in Lean 4 or Bend 2, optimize them, and pass a deterministic proof-checker gate. Used it to ship a broad suite of proved Bend 2 libraries compiled to native C.',
    bullets: [
      '<b>bend-collections (★49):</b> core containers plus a proved cryptography suite — SHA-256/512, Keccak-256, SHA3-256, BLAKE2s/2b/3, HMAC, HKDF, constant-time AES &amp; AES-GCM, Argon2id, ChaCha20/Poly1305/AEAD, X25519, Ed25519, and secp256k1 (ECDSA, ECRECOVER, BIP-340 Schnorr).',
      '<b>bend-ssz:</b> pure-Bend SSZ for all <b>240</b> mainnet Fulu and <code>ssz_generic</code> types with machine-checked decode, encode, and <code>hash_tree_root</code> proofs.',
      '<b>bend-zcash-blake2b:</b> formally proved BLAKE2b packaged as a C library and Rust <code>blake2b_simd</code> drop-in for Zcash; plus <b>bend-sha256 (★20)</b>, <b>bend-keccak</b>, and upstream compiler fixes in <code>bendlang/bend</code>.',
    ],
    tags: ['Bend 2', 'Lean 4', 'LLM agents', 'SSZ', 'cryptography', 'C'],
    links: [
      { label: 'ff →', url: 'https://github.com/Giulio2002/ff' },
      { label: 'bend-collections →', url: 'https://github.com/Giulio2002/bend-collections' },
      { label: 'bend-ssz →', url: 'https://github.com/Giulio2002/bend-ssz' },
      { label: 'Write-up →', url: 'https://giulioswamp.substack.com/p/creating-a-formal-programs-factory' },
    ],
  },
  {
    title: 'GEVM — High-performance, mostly agent-built EVM in Go',
    pill: ['★59 · ~2× geth', 'pill'],
    meta: 'Go · C · EVM · 2026',
    body:
      'A from-scratch, behavior-identical Go port of the Rust reference EVM semantics — built largely with coding agents and tuned down to zero-allocation hot paths. Runs <b>~2× faster than go-ethereum</b> and within ~10% of Rust <code>revm</code> on ERC-20 workloads.',
    bullets: [
      'Passes <b>100%</b> of pinned execution-specs state tests: <b>14,665 / 14,665</b> Osaka and <b>16,908 / 16,908</b> Amsterdam (Glamsterdam) fixtures including multidimensional state gas and EIP-7702 accounting.',
      'Full precompile suite (BN254, BLS12-381, P256VERIFY, MODEXP, BLAKE2F) and differential testing against reference EVMs.',
    ],
    tags: ['Go', 'EVM', 'performance', 'LLM agents', 'Glamsterdam'],
    links: [
      { label: 'gevm →', url: 'https://github.com/Giulio2002/gevm' },
      { label: 'Blog post →', url: 'https://giulioswamp.substack.com/p/the-mostly-agent-built-evm-as-fast' },
    ],
  },
  {
    title: 'gdbx — Pure-Go libmdbx implementation',
    pill: ['database', 'pill'],
    meta: 'Go · Assembly · SSE2 · 2026',
    body:
      'A pure-Go, file-format-compatible implementation of <b>libmdbx</b> with assembly/SSE2-optimized binary search — avoiding CGO call overhead entirely while delivering <b>1.5–3.7× faster</b> random reads and writes than CGO <code>mdbx-go</code> in benchmarks.',
    tags: ['Go', 'MDBX', 'B+Tree', 'assembly', 'SSE2'],
    links: [{ label: 'gdbx →', url: 'https://github.com/Giulio2002/gdbx' }],
  },
  {
    title: 'Caplin — a full Ethereum consensus client, mostly solo',
    pill: ['creator · 2022–2026', 'pill'],
    meta: 'Go · Erigon · 2022 – 2026',
    headline: true,
    body:
      "I built an entire Consensus Layer for Erigon because I didn't like how the existing ones operated. It started as a consensus light client, but there weren't enough light-client servers on mainnet, so I gave up on half-measures and went for the full thing. The first prototype took ~9 months. Most of it was me — because needing 10 developers for a consensus layer is, if you ask me, a <b>skill issue</b> (this is irony). I led the project through production at Erigon and brought in another company's manpower, so apparently I had enough social skills to land real partnerships too.",
    bullets: [
      'Architected Ethereum PoS consensus end-to-end as Erigon\'s embedded validating CL.',
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
    meta: 'Go · Erigon · 2022',
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
    title: 'Post-Quantum Ethereum — experimental Erigon fork & eth-ntt precompiles',
    pill: ['research', 'pill pink'],
    meta: 'Go + Rust · Falcon-512 / ML-DSA-44 · 2026',
    body:
      'An experimental Erigon build and Rust Ring-LWE precompile library (<code>eth-ntt</code>) exploring post-quantum Ethereum. Implemented seven EVM precompiles (<code>0x12</code>–<code>0x18</code>: NTT, modular vector ops, SHAKE, <code>FALCON_VERIFY</code>, <code>LP_NORM</code>) and <b>Falcon-512</b> composable transactions (EIP-8175 extension + EIP-8202), proven end-to-end on a Kurtosis devnet.',
    bullets: [
      '<b>~8.1 µs</b> Falcon-512 full verification on Apple M4 (~1,150× faster than BigUint), with only ~2.9% of transaction gas spent on cryptography.',
      'Generic NTT precompiles supporting Falcon-512, Dilithium (ML-DSA-44), and Kyber, plus Yul on-chain verifier contracts.',
      'Full RLP encode/decode, signer integration, txpool &amp; receipt support on a live devnet.',
    ],
    tags: ['Falcon-512', 'Dilithium', 'EIP-8202', 'EIP-8175', 'precompiles', 'Rust', 'Kurtosis'],
    links: [
      { label: 'pq-eth-precompiles →', url: 'https://github.com/Giulio2002/pq-eth-precompiles' },
      { label: 'pq-eth-demo →', url: 'https://github.com/Giulio2002/pq-eth-demo' },
    ],
  },
  {
    title: 'AI-driven hard-fork & CI automation (Erigon)',
    pill: ['tooling', 'pill warn'],
    meta: "Python · agentic tooling · Erigon AI Lead · 2025 – 2026",
    body:
      "Designed Erigon's agentic coding workflows: LLM agents that implement Ethereum consensus and execution hard forks across state transition, block production, and archive-node subsystems, plus self-fixing CI harnesses that diagnose failures against official spec test vectors in a closed loop until green. Because writing fork boilerplate by hand is a job for a machine.",
    tags: ['Python', 'LLM agents', 'spec tests', 'CI automation'],
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
    meta: 'Rust + Solidity · 2018 – 2020',
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
