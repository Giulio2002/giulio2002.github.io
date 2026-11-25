export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  meta: string
  body: string
  bullets?: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    title: 'Janus, fv-uint256 & fv-modexp',
    meta: '2026 · Lean 4, Go, arm64 / amd64',
    body:
      'Janus is a Lean 4 framework for proving theorems about Go functions as compiled. It extracts the actual instruction bytes out of a linux/arm64 or linux/amd64 Go ELF binary, runs them in a Lean model of the ISA, and checks proofs in Lean\'s kernel. The Go compiler and linker are not trusted.',
    bullets: [
      'fv-uint256: verified all 146 exported functions (293 rows across arm64, amd64, and GOAMD64=v3) of holiman/uint256, the 256-bit integer library used by Geth and Erigon.',
      'fv-modexp: verified go-ethereum v1.17.10\'s Osaka MODEXP precompile (Run, RequiredGas, and go-bigmodexpfix math/big + assembly kernels; 43 arm64 + 37 amd64 rows) against EthLib for every fork from Fusaka on.',
      'Every main theorem has a kernel-checked non-vacuity witness, no sorry, and no added axioms.',
    ],
    links: [
      { label: 'Janus', url: 'https://github.com/Giulio2002/Janus' },
      { label: 'fv-uint256', url: 'https://github.com/Giulio2002/fv-uint256' },
      { label: 'fv-modexp', url: 'https://github.com/Giulio2002/fv-modexp' },
    ],
  },
  {
    title: 'usdt-verify',
    meta: 'Nov 2026 · Lean 4, EthLib, EVM bytecode',
    body:
      'Formal verification in Lean 4 of the 11,075-byte TetherToken (USDT) runtime bytecode deployed on Ethereum mainnet at 0xdAC17F958D2ee523a2206206994597C13D831ec7 since 2017. Verified directly against the deployed bytes on top of EthLib rather than the Solidity source.',
    bullets: [
      'Covers all 32 selectors, dispatcher completeness, fallback paths, and zero-ETH rejection.',
      'Proves the global supply invariant (sum of all 2^160 balances equals _totalSupply) across every write path, plus pause, blacklist, allowance, owner-only, and deprecated forwarding properties.',
      'Covers forks from Berlin through Glamsterdam, including EIP-7702 delegations and the EIP-8037 gas meter.',
    ],
    links: [{ label: 'usdt-verify', url: 'https://github.com/Giulio2002/usdt-verify' }],
  },
  {
    title: 'EthLib',
    meta: '2026 · Lean 4 · Ethereum Foundation',
    body:
      'Second-largest contributor (287 merged PRs) to ethereum/EthLib, the shared Lean 4 library of formally verified Ethereum execution, consensus, and cryptographic primitives.',
    bullets: [
      'EVM program logic for CALL / CREATE / CREATE2 composition, memory and stack effects, gas-monotone rules, and EIP-7702 authorizations.',
      'Specs and proofs for MODEXP, SHA-256, RIPEMD-160, Keccak-256, BLS12-381 (RFC 9380 hash-to-field and G2 cofactor clearing), and alt_bn128 pairing bilinearity.',
      'Gloas consensus builder bids, ENR/discv5 proofs, and the NatCode bytecode representation.',
    ],
    links: [{ label: 'ethereum/EthLib', url: 'https://github.com/ethereum/EthLib' }],
  },
  {
    title: 'formal-factory (ff) & Bend 2 verified libraries',
    meta: 'Sep–Nov 2026 · Bend 2, Lean 4, Python, C',
    body:
      'Built ff, an agentic software factory where coding agents write both the implementation and machine-checked proofs in Lean 4 or Bend 2, optimize performance, and only merge through a deterministic proof-checker gate.',
    bullets: [
      'bend-collections: standard containers plus a proved crypto suite (SHA-256/512, Keccak-256, SHA3-256, BLAKE2s/2b/3, HMAC, HKDF, constant-time AES and AES-GCM, Argon2id, ChaCha20/Poly1305/AEAD, X25519, Ed25519, secp256k1 ECDSA/ECRECOVER/BIP-340 Schnorr) benchmarked against C.',
      'bend-ssz: pure-Bend SSZ for all 240 mainnet Fulu and ssz_generic types with proved encode, decode, and hash_tree_root.',
      'bend-zcash-blake2b (proved BLAKE2b C library + Rust blake2b_simd drop-in for Zcash), bend-sha256, bend-keccak, plus upstream compiler fixes in bendlang/bend.',
    ],
    links: [
      { label: 'ff', url: 'https://github.com/Giulio2002/ff' },
      { label: 'bend-collections', url: 'https://github.com/Giulio2002/bend-collections' },
      { label: 'bend-ssz', url: 'https://github.com/Giulio2002/bend-ssz' },
      { label: 'Substack write-up', url: 'https://giulioswamp.substack.com/p/creating-a-formal-programs-factory' },
    ],
  },
  {
    title: 'GEVM',
    meta: '2026 · Go, C',
    body:
      'A from-scratch, behavior-identical Go port of the Rust reference EVM semantics, built mostly by coding agents. Runs ~2x faster than go-ethereum and within ~10% of revm on ERC-20 benchmarks.',
    bullets: [
      'Passes 100% of pinned execution-specs state tests: 14,665 Osaka and 16,908 Amsterdam (Glamsterdam) fixtures, including multidimensional state gas and EIP-7702.',
      'Full precompile suite (BN254, BLS12-381, P256VERIFY, MODEXP, BLAKE2F) and differential tests.',
    ],
    links: [
      { label: 'gevm', url: 'https://github.com/Giulio2002/gevm' },
      { label: 'Substack post', url: 'https://giulioswamp.substack.com/p/the-mostly-agent-built-evm-as-fast' },
    ],
  },
  {
    title: 'gdbx',
    meta: '2026 · Go, assembly',
    body:
      'Pure-Go, file-format-compatible implementation of libmdbx with assembly/SSE2 binary search. Drops CGO overhead and runs 1.5 to 3.7x faster than mdbx-go on random reads and writes.',
    links: [{ label: 'gdbx', url: 'https://github.com/Giulio2002/gdbx' }],
  },
  {
    title: 'Caplin (Erigon consensus client)',
    meta: '2022–2026 · Go · Erigon',
    body:
      'I wrote an entire Consensus Layer for Erigon because I did not like how the existing ones operated. It started as a consensus light client, but there were not enough light-client servers on mainnet, so I gave up on half-measures and went for the full thing. First prototype took about 9 months, mostly solo (needing 10 developers for a consensus layer is a skill issue, this is irony). Led it through production and brought in another company\'s manpower along the way.',
    bullets: [
      'Ethereum PoS consensus end-to-end as Erigon\'s embedded validating CL.',
      'Memory management, caching, and CPU/heap profiling for long-running nodes.',
      'Kubernetes test infrastructure and deployment.',
    ],
  },
  {
    title: 'Compact archive-node data model (18 TB to 1.6 TB)',
    meta: 'Erigon / Caplin · MDBX, snapshots, ETL',
    body:
      'Redesigned how Ethereum archive nodes lay out historical state on disk, cutting footprint from 18 TB down to 1.6 TB (~11x reduction) while keeping all historical state queryable.',
  },
  {
    title: 'The Merge in Erigon',
    meta: '2022 · Go · Erigon',
    body:
      'As a junior on the Erigon team I was handed "The Merge" (the PoS transition for the execution layer). Nominally a team of three, though I ended up doing most of it. Mostly a test of stress, patience, and responsibility management. It shipped.',
    bullets: [
      'Resurrected Erigon\'s transaction pool (it did not work before).',
      'Engine API implementation and copy-on-write EL state handling.',
      'Cross-client interop with teams from very different backgrounds (and not incompetent ones).',
    ],
  },
  {
    title: 'Post-Quantum Ethereum & eth-ntt precompiles',
    meta: '2026 · Go, Rust · Falcon-512, ML-DSA-44',
    body:
      'Experimental Erigon fork and Rust lattice precompile library (eth-ntt) testing post-quantum signatures on Ethereum. Seven EVM precompiles (0x12 to 0x18: generic NTT, vector modular ops, SHAKE, FALCON_VERIFY, LP_NORM) plus Falcon-512 composable transactions proven end-to-end on a Kurtosis devnet.',
    bullets: [
      '~8.1 µs full Falcon-512 verification on Apple M4 (~1,150x faster than BigUint), with ~2.9% of tx gas spent on cryptography.',
      'Generic NTT precompiles covering Falcon-512, Dilithium (ML-DSA-44), and Kyber, with Yul verifier contracts.',
    ],
    links: [
      { label: 'pq-eth-precompiles', url: 'https://github.com/Giulio2002/pq-eth-precompiles' },
      { label: 'pq-eth-demo', url: 'https://github.com/Giulio2002/pq-eth-demo' },
    ],
  },
  {
    title: 'Agentic hard-fork & CI tooling (Erigon)',
    meta: '2025–2026 · Python · Erigon AI Lead',
    body:
      'Built Erigon\'s agentic coding harnesses: LLM agents implementing Ethereum hard forks across Caplin\'s state transition, block production, and archive subsystems, plus self-fixing CI runners validating changes against official spec tests in a closed loop until green.',
  },
  {
    title: 'Earlier systems work (Akula, Silkworm, L0 bridge, Genoa robotics)',
    meta: '2016–2022 · Rust, C++, Go, Solidity, C#',
    body:
      'Built the first Rust implementation of Ethereum JSON-RPC in Akula before it shut down, wrote syncing/ETL components in Silkworm (C++) and a pre-sort-before-insert external merge sort for B-Tree DBs, refactored a Swiss L0 asset-bridging backend in Rust, and did robotics / Unity drone simulations at the University of Genoa at 14 (decided academia underpays you).',
  },
]
