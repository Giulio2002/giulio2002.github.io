export interface Eip {
  id: number
  title: string
  status: string
  group: 'final' | 'glamsterdam' | 'active' | 'historical'
  meta: string
  summary: string
  url: string
}

const eip = (id: number) => `https://eips.ethereum.org/EIPS/eip-${id}`

export const eips: Eip[] = [
  {
    id: 7825,
    title: 'Transaction Gas Limit Cap',
    status: 'Final',
    group: 'final',
    meta: 'Core · co-authored with Toni Wahrstätter · shipped in Fusaka / Osaka',
    summary:
      'Caps maximum gas for any single transaction at 16,777,216 (2^24), bounding worst-case per-tx execution and DoS vectors as block gas limits grow.',
    url: eip(7825),
  },
  {
    id: 7934,
    title: 'RLP Execution Block Size Limit',
    status: 'Final',
    group: 'final',
    meta: 'Core · co-authored with Ben Adams & Storm Slivkoff · shipped in Fusaka / Osaka',
    summary:
      'Caps RLP-encoded execution block size at 10 MiB (including a 2 MiB margin for beacon block size) to keep p2p propagation bounded.',
    url: eip(7934),
  },
  {
    id: 7939,
    title: 'Count Leading Zeros (CLZ) opcode',
    status: 'Final',
    group: 'final',
    meta: 'Core · co-authored · shipped in Fusaka / Osaka · also implemented in go-ethereum',
    summary:
      'Adds a CLZ opcode to the EVM returning the leading zero bit count of a 256-bit word (256 for zero).',
    url: eip(7939),
  },
  {
    id: 7935,
    title: 'Set default gas limit to 60M',
    status: 'Final',
    group: 'final',
    meta: 'Informational · co-authored · Fusaka / Osaka client default',
    summary:
      'Sets execution-layer clients\' default mainnet block gas limit target to 60M for Fusaka.',
    url: eip(7935),
  },
  {
    id: 7954,
    title: 'Increase Maximum Contract Size',
    status: 'Last Call',
    group: 'glamsterdam',
    meta: 'Core · co-authored with Ben Adams · Scheduled for Inclusion (EIP-7773)',
    summary:
      'Raises max deployed contract code size from 24 KiB to 64 KiB and initcode size from 48 KiB to 128 KiB.',
    url: eip(7954),
  },
  {
    id: 7975,
    title: 'eth/70 - Partial Block Receipt Lists',
    status: 'Last Call',
    group: 'glamsterdam',
    meta: 'Networking · co-authored with Felix Lange & Jochem Brouwer · Scheduled for Inclusion (EIP-7773)',
    summary:
      'Paginates block receipts in the eth/70 devp2p protocol so large blocks do not break receipt sync under message-size limits.',
    url: eip(7975),
  },
  {
    id: 8487,
    title: 'Separate execution credits and billing credits',
    status: 'Proposal',
    group: 'active',
    meta: 'Core · authored Nov 2026 · EIPs PR #12637',
    summary:
      'Splits gas accounting into legacy execution credits (what the EVM sees) and updated billing credits (what determines fees and aborts uncatchably if exhausted), so repricing does not break legacy contracts.',
    url: 'https://ethereum-magicians.org/t/eip-8487-separate-execution-credits-and-billing-credits/30320',
  },
  {
    id: 8202,
    title: 'Scheme-Agile Transactions',
    status: 'Draft',
    group: 'active',
    meta: 'Core · co-authored with Ben Adams',
    summary:
      'Defines SchemedTransaction (EIP-2718 type 0x05) with a shared EIP-1559 fee header, pluggable sender authorization schemes, and flat typed extensions for post-quantum migration.',
    url: eip(8202),
  },
  {
    id: 8178,
    title: 'Binary SSZ Transport for the Engine API',
    status: 'Draft',
    group: 'active',
    meta: 'Core · authored · Kurtosis benchmarked & merged into Erigon',
    summary:
      'Replaces JSON-RPC with REST endpoints and raw binary SSZ encoding between consensus and execution clients.',
    url: eip(8178),
  },
  {
    id: 7801,
    title: 'etha - Sharded Blocks Subprotocol',
    status: 'Draft',
    group: 'active',
    meta: 'Networking · co-authored with Ahmad Bitar & Gary Schulte',
    summary:
      'Lets nodes advertise held historical block spans via a repeating bitmask (each bit = a 106,496-block span within a 1,064,960-block range) to support EIP-4444 history expiry.',
    url: eip(7801),
  },
  {
    id: 8175,
    title: 'Composable Transaction (Falcon-512 PQ extension)',
    status: 'Research',
    group: 'active',
    meta: 'PR #11431 extending Dragan Rakita\'s EIP-8175 · Erigon devnet prototype',
    summary:
      'Adds a post-quantum Falcon-512 signature scheme to composable EIP-2718 transactions; tested end-to-end on a Kurtosis devnet.',
    url: 'https://github.com/ethereum/EIPs/pull/11431',
  },
  {
    id: 7783,
    title: 'Add Controlled Gas Limit Increase Strategy',
    status: 'Stagnant',
    group: 'historical',
    meta: 'Informational · authored Oct 2024',
    summary:
      'Proposed a default client mechanism for gradually ramping the block gas limit over time instead of manual step bumps.',
    url: eip(7783),
  },
  {
    id: 7790,
    title: 'Controlled Gas Limit Increase Guidelines',
    status: 'Stagnant',
    group: 'historical',
    meta: 'Informational · co-authored with Ben Adams · Oct 2024',
    summary:
      'Companion parameter specification for EIP-7783 covering start block, initial gas limit, ramp rate, and cap.',
    url: eip(7790),
  },
]
