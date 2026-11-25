export type EipStatus = 'Final' | 'Last Call' | 'Draft' | 'Proposal' | 'Research' | 'Stagnant'

export interface Eip {
  id: number
  title: string
  status: EipStatus
  /** which section it renders under */
  group: 'final' | 'glamsterdam' | 'active' | 'historical'
  /** small mono line under the title */
  meta?: string
  /** short description — may contain inline <code>/<b> HTML */
  summary: string
  /** canonical eips.ethereum.org or PR/forum page */
  url: string
  /** optional link text override */
  linkLabel?: string
}

const eip = (id: number) => `https://eips.ethereum.org/EIPS/eip-${id}`

export const eips: Eip[] = [
  // ── Final & shipped — Fusaka / Osaka ──────────────────────────────────────
  {
    id: 7825,
    title: 'Transaction Gas Limit Cap',
    status: 'Final',
    group: 'final',
    meta: 'co-authored with Toni Wahrstätter · shipped in Fusaka / Osaka',
    summary:
      'Enforces a protocol-level maximum of <b>16,777,216 (2<sup>24</sup>) gas</b> for any single transaction, bounding worst-case per-tx execution, improving DoS resilience, and keeping block scaling predictable.',
    url: eip(7825),
  },
  {
    id: 7934,
    title: 'RLP Execution Block Size Limit',
    status: 'Final',
    group: 'final',
    meta: 'co-authored with Ben Adams & Storm Slivkoff · shipped in Fusaka / Osaka',
    summary:
      'Caps the RLP-encoded size of an execution block to <b>10 MiB</b> (including a 2 MiB margin for beacon block size), protecting the p2p layer from pathologically large blocks and keeping propagation predictable.',
    url: eip(7934),
  },
  {
    id: 7939,
    title: 'Count Leading Zeros (CLZ) opcode',
    status: 'Final',
    group: 'final',
    meta: 'co-authored · shipped in Fusaka / Osaka · also implemented in go-ethereum',
    summary:
      'Adds a <code>CLZ</code> opcode to the EVM — counting leading zero bits of a 256-bit word (256 for zero) — a cheap primitive that speeds up bit-twiddling, math, and ZK-friendly contracts.',
    url: eip(7939),
  },
  {
    id: 7935,
    title: 'Set default gas limit to 60M',
    status: 'Final',
    group: 'final',
    meta: 'co-authored · Informational · Fusaka / Osaka default',
    summary:
      'Ecosystem scaling guidance raising execution-layer clients\' default mainnet block gas limit target from 36M to <b>60M</b> for the Fusaka upgrade.',
    url: eip(7935),
  },

  // ── Scheduled for Inclusion — Glamsterdam ─────────────────────────────────
  {
    id: 7954,
    title: 'Increase Maximum Contract Size',
    status: 'Last Call',
    group: 'glamsterdam',
    meta: 'co-authored with Ben Adams · Scheduled for Inclusion in Glamsterdam (EIP-7773)',
    summary:
      'Raises the maximum deployed contract code size from <b>24 KiB to 64 KiB</b> and the initcode size limit from <b>48 KiB to 128 KiB</b>, letting developers build richer contracts without artificial splitting gymnastics.',
    url: eip(7954),
  },
  {
    id: 7975,
    title: 'eth/70 - Partial Block Receipt Lists',
    status: 'Last Call',
    group: 'glamsterdam',
    meta: 'co-authored with Felix Lange & Jochem Brouwer · Scheduled for Inclusion in Glamsterdam (EIP-7773)',
    summary:
      'Adds receipt-list pagination to the <code>eth/70</code> devp2p wire protocol so clients can reliably sync receipts for large blocks without tripping p2p message-size caps.',
    url: eip(7975),
  },

  // ── Active drafts & proposals ─────────────────────────────────────────────
  {
    id: 8487,
    title: 'Separate execution credits and billing credits',
    status: 'Proposal',
    group: 'active',
    meta: 'authored · Nov 2026 · EIPs PR #12637 · Glamsterdam repricing compatibility',
    summary:
      'Decouples EVM-visible <b>execution credits</b> (legacy gas schedule) from <b>billing credits</b> (updated resource schedule), both initialized from <code>tx.gasLimit</code> — allowing Ethereum to reprice state/storage safely without breaking immutable legacy contracts that introspect or forward gas.',
    url: 'https://ethereum-magicians.org/t/eip-8487-separate-execution-credits-and-billing-credits/30320',
    linkLabel: 'Read EIP-8487 discussion →',
  },
  {
    id: 8202,
    title: 'Scheme-Agile Transactions',
    status: 'Draft',
    group: 'active',
    meta: 'co-authored with Ben Adams · Core',
    summary:
      'Introduces <code>SchemedTransaction</code> (EIP-2718 type <code>0x05</code>) with a common EIP-1559 fee header, scheme-agile sender authorization, and flat typed extensions — groundwork for migrating Ethereum cleanly to post-quantum and alternative signature schemes.',
    url: eip(8202),
  },
  {
    id: 8178,
    title: 'Binary SSZ Transport for the Engine API',
    status: 'Draft',
    group: 'active',
    meta: 'authored · Core · benchmarked on Kurtosis & merged into Erigon',
    summary:
      'Replaces JSON-RPC with resource-oriented REST endpoints and raw <b>SSZ</b> binary encoding for Engine API communication between consensus and execution clients, cutting serialization overhead and payload latency.',
    url: eip(8178),
  },
  {
    id: 7801,
    title: 'etha - Sharded Blocks Subprotocol',
    status: 'Draft',
    group: 'active',
    meta: 'co-authored with Ahmad Bitar & Gary Schulte · Networking',
    summary:
      'A devp2p networking subprotocol letting nodes advertise stored historical block spans via a repeating bitmask (each bit = a 106,496-block span within a 1,064,960-block range), making <b>EIP-4444</b> history expiry practical without breaking sync.',
    url: eip(7801),
  },
  {
    id: 8175,
    title: 'Composable Transaction — Falcon-512 PQ extension',
    status: 'Research',
    group: 'active',
    meta: 'PR #11431 extending Dragan Rakita\'s EIP-8175 · implemented in Erigon devnet',
    summary:
      'Post-quantum <b>Falcon-512</b> signature scheme extension (PR #11431) for composable EIP-2718 transactions, implemented and verified end-to-end on an experimental Erigon + Kurtosis devnet — see <a href="#/research">/research</a>.',
    url: 'https://github.com/ethereum/EIPs/pull/11431',
    linkLabel: 'View PR #11431 →',
  },

  // ── Earlier informational proposals ───────────────────────────────────────
  {
    id: 7783,
    title: 'Add Controlled Gas Limit Increase Strategy',
    status: 'Stagnant',
    group: 'historical',
    meta: 'authored · Oct 2024 · Informational',
    summary:
      'Proposed a default client mechanism for gradually ramping the block gas limit over time at a fixed rate, scaling L1 throughput predictably without waiting for manual coordination on every bump.',
    url: eip(7783),
  },
  {
    id: 7790,
    title: 'Controlled Gas Limit Increase Guidelines',
    status: 'Stagnant',
    group: 'historical',
    meta: 'co-authored with Ben Adams · Oct 2024 · Informational',
    summary:
      'Companion parameter specification for EIP-7783 defining starting block, initial gas limit, ramp rate, and safety cap.',
    url: eip(7790),
  },
]

/** maps an EIP status to a `.pill` modifier class */
export function statusPill(status: EipStatus): string {
  switch (status) {
    case 'Final':
      return 'pill live'
    case 'Last Call':
      return 'pill warn'
    case 'Proposal':
    case 'Research':
      return 'pill pink'
    case 'Stagnant':
      return 'pill dim'
    default:
      return 'pill'
  }
}
