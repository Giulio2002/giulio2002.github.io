export type EipStatus = 'Final' | 'Informational' | 'Research' | 'Draft'

export interface Eip {
  id: number
  title: string
  status: EipStatus
  /** which section it renders under */
  group: 'final' | 'other'
  /** small mono line under the title */
  meta?: string
  /** short description — may contain inline <code>/<b> HTML */
  summary: string
  /** canonical eips.ethereum.org page (all of Giulio's resolve) */
  url: string
}

const eip = (id: number) => `https://eips.ethereum.org/EIPS/eip-${id}`

export const eips: Eip[] = [
  // ── Final & shipped — Fusaka / Osaka ──────────────────────────────────────
  {
    id: 7825,
    title: 'Transaction Gas Limit Cap',
    status: 'Final',
    group: 'final',
    meta: 'co-authored · included in Fusaka/Osaka',
    summary:
      'Enforces a protocol-level maximum of 30M gas for any single transaction, bounding the worst case for a single tx and keeping execution predictable across the network.',
    url: eip(7825),
  },
  {
    id: 7934,
    title: 'RLP Execution Block Size Limit',
    status: 'Final',
    group: 'final',
    meta: 'co-authored · included in Fusaka/Osaka',
    summary:
      'Caps the RLP-encoded size of an execution block, protecting the network from pathologically large blocks and keeping propagation predictable.',
    url: eip(7934),
  },
  {
    id: 7939,
    title: 'Count Leading Zeros (CLZ) opcode',
    status: 'Final',
    group: 'final',
    meta: 'co-authored · included in Fusaka/Osaka',
    summary:
      'Adds a <code>CLZ</code> opcode to the EVM — counting leading zero bits of a word — a cheap primitive that\'s surprisingly useful for bit-twiddling and math-heavy contracts.',
    url: eip(7939),
  },
  {
    id: 7935,
    title: 'Default gas limit to 60M',
    status: 'Informational',
    group: 'final',
    meta: 'co-authored · Osaka notice',
    summary:
      'Ecosystem scaling guidance: an informational EIP setting the default block gas limit to 60M, referenced as an Osaka notice.',
    url: eip(7935),
  },

  // ── Other authored EIPs & proposals ───────────────────────────────────────
  {
    id: 7801,
    title: 'etha: Sharded Blocks Subprotocol',
    status: 'Draft',
    group: 'other',
    summary:
      'A networking subprotocol that lets nodes advertise which block spans they hold via a bitmask (each bit = a 100,000-block span within a 1,000,000-block range). Designed to make data sync efficient and help make history expiry (<b>EIP-4444</b>) a reality.',
    url: eip(7801),
  },
  {
    id: 7975,
    title: 'eth/70 partial block receipt lists',
    status: 'Draft',
    group: 'other',
    summary:
      'A new <code>eth/70</code> wire-protocol feature for partial block receipt lists, making receipt sync leaner.',
    url: eip(7975),
  },
  {
    id: 7954,
    title: 'Increase Maximum Contract Size',
    status: 'Draft',
    group: 'other',
    summary: 'Raises the contract code-size limit to accommodate larger on-chain programs.',
    url: eip(7954),
  },
  {
    id: 8178,
    title: 'Binary SSZ Transport for the Engine API',
    status: 'Draft',
    group: 'other',
    summary:
      'Moves Engine API payloads to a compact binary SSZ transport — less JSON overhead between execution and consensus clients.',
    url: eip(8178),
  },
  {
    id: 8202,
    title: 'Scheme-Agile Transactions',
    status: 'Draft',
    group: 'other',
    summary:
      'A transaction format that isn\'t married to a single signature scheme — the groundwork for migrating Ethereum to new (including post-quantum) signatures over time.',
    url: eip(8202),
  },
  {
    id: 7783,
    title: 'Controlled Gas Limit Increase Strategy',
    status: 'Draft',
    group: 'other',
    meta: 'Published Oct 6, 2024',
    summary:
      'A mechanism for clients to gradually increase the block gas limit over time, scaling throughput responsibly without needing a hard fork for every bump.',
    url: eip(7783),
  },
  {
    id: 7790,
    title: 'Gas-limit strategy proposal',
    status: 'Draft',
    group: 'other',
    summary:
      'A companion controlled gas-limit strategy proposal, refining how clients ramp capacity.',
    url: eip(7790),
  },
  {
    id: 8175,
    title: 'Composable Transactions with Falcon-512',
    status: 'Research',
    group: 'other',
    summary:
      'A composable transaction type with pluggable signature schemes, including the post-quantum <b>Falcon-512</b> signature. Implemented end-to-end on an experimental Erigon build — see <a href="#/research">/research</a>.',
    url: eip(8175),
  },
]

/** maps an EIP status to a `.pill` modifier class */
export function statusPill(status: EipStatus): string {
  switch (status) {
    case 'Final':
      return 'pill live'
    case 'Informational':
      return 'pill warn'
    case 'Research':
      return 'pill pink'
    default:
      return 'pill'
  }
}
