<script setup lang="ts">
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <p class="section-title centered"><span class="grad">Stuff I've done</span></p>
      <p class="section-sub">
        Highlights of the serious work, roughly ordered by how suicidal they made me.
      </p>

      <!-- Caplin -->
      <div class="card headline">
        <h3>Caplin — a full Ethereum consensus client, mostly solo
          <span class="pill live">project lead</span></h3>
        <div class="meta">Go · Erigon · 2022 – present</div>
        <p>
          I built an entire Consensus Layer for Erigon because I didn't like how the existing
          ones operated. It started as a consensus light client, but there weren't enough
          light-client servers on mainnet, so I gave up on half-measures and went for the full
          thing. The first prototype took ~9 months. Most of it was me — because needing 10
          developers for a consensus layer is, if you ask me, a <b>skill issue</b> (this is irony).
          I'm now Project Lead (not fired yet :D) and brought in another company's manpower, so
          apparently I have enough social skills to land real partnerships too.
        </p>
        <ul>
          <li>Learned the inner workings of Ethereum 2.0 consensus end-to-end.</li>
          <li>Memory management & caching for distributed systems.</li>
          <li>CPU/heap profiling and optimization.</li>
          <li>DevOps fundamentals — most notably Kubernetes.</li>
        </ul>
        <div class="tags">
          <span class="tag">Go</span><span class="tag">consensus</span>
          <span class="tag">libp2p</span><span class="tag">SSZ</span>
          <span class="tag">profiling</span><span class="tag">Kubernetes</span>
        </div>
      </div>

      <!-- Archive node data model -->
      <div class="card">
        <h3>Compact data model for archive nodes <span class="pill">18TB → 1.6TB</span></h3>
        <div class="meta">Storage engineering · Erigon / Caplin</div>
        <p>
          I redesigned the data model for Ethereum archive nodes, cutting storage from
          <b>18 TB to 1.6 TB</b> — an ~11× reduction — while keeping historical state fully
          queryable. Better scalability, cheaper to run, faster to query.
        </p>
        <ul>
          <li>Data-model optimization: compact, efficient on-disk structures.</li>
          <li>Scalability: dramatically lower storage footprint for archive nodes.</li>
          <li>Performance: improved query efficiency and lower operational cost.</li>
        </ul>
        <div class="tags">
          <span class="tag">data modeling</span><span class="tag">MDBX</span>
          <span class="tag">snapshots</span><span class="tag">ETL</span>
        </div>
      </div>

      <!-- The Merge -->
      <div class="card">
        <h3>The Merge — Ethereum PoS in Erigon's execution layer</h3>
        <div class="meta">Go · Erigon · as a junior</div>
        <p>
          As a junior on the Erigon team I was handed "The Merge" — the PoS implementation for
          the execution layer. Nominally a team effort with one senior and another junior, but I
          ended up doing most of it. Mostly a test of stress, patience and responsibility
          management. It shipped.
        </p>
        <ul>
          <li>Resurrected Erigon's transaction pool (it didn't work before) — learned how the
              tx pool really works.</li>
          <li>Engine API implementation — learned how consensus-driven distributed systems are
              architected.</li>
          <li>State management across EL states — copy-on-write Ethereum state handling.</li>
          <li>Worked across client teams with very different backgrounds (ex-Googlers, ex-Ivy,
              and more) — and <b>not incompetent ones</b>.</li>
        </ul>
        <div class="tags">
          <span class="tag">Engine API</span><span class="tag">txpool</span>
          <span class="tag">state</span><span class="tag">PoS</span>
        </div>
      </div>

      <!-- Post-Quantum Ethereum -->
      <div class="card">
        <h3>Post-Quantum Ethereum — experimental Erigon fork
          <span class="pill pink">research</span></h3>
        <div class="meta">Go + Rust · Falcon-512 / Dilithium · 2026</div>
        <p>
          An experimental Erigon build exploring what a post-quantum Ethereum could look like. I
          added <b>Falcon-512</b> and <b>Dilithium</b> signature-verification precompiles and
          implemented <b>EIP-8175</b> composable transactions (a new tx type) that can be signed
          with Falcon-512 instead of secp256k1. Proven end-to-end on a Kurtosis devnet: PQ
          transactions accepted by the txpool, included in blocks, executed successfully.
        </p>
        <ul>
          <li>FALCON_VERIFY and DILITHIUM_VERIFY EVM precompiles, working on-chain.</li>
          <li>New composable transaction type (0x06) with pluggable signature schemes.</li>
          <li>Full RLP encode/decode, signer integration, txpool & receipt support.</li>
          <li>Falcon-512 ↔ NTT-domain bridge between the EIP format and the precompile.</li>
        </ul>
        <div class="tags">
          <span class="tag">Falcon-512</span><span class="tag">Dilithium</span>
          <span class="tag">EIP-8175</span><span class="tag">precompiles</span>
          <span class="tag">Rust</span><span class="tag">Kurtosis</span>
        </div>
      </div>

      <!-- AI fork implementer -->
      <div class="card">
        <h3>AI-driven hard-fork implementer for Erigon
          <span class="pill warn">tooling</span></h3>
        <div class="meta">Python · agentic tooling · as Erigon's AI Lead</div>
        <p>
          A tool that drives an LLM agent to implement Ethereum consensus hard forks across
          Caplin's three subsystems — core state transition, block production, and the archive
          node — then runs the spec + antiquary test suites and feeds failures back into a fix
          loop until everything is green. Because writing fork boilerplate by hand is a job for
          a machine.
        </p>
        <div class="tags">
          <span class="tag">Python</span><span class="tag">LLM agents</span>
          <span class="tag">spec tests</span><span class="tag">automation</span>
        </div>
      </div>

      <!-- Robotics -->
      <div class="card">
        <h3>Robotics research — University of Genoa</h3>
        <div class="meta">C++ / C# / Python · age 14</div>
        <p>
          At 14 I became an unpaid slave (their word, probably mine) at the University of Genoa,
          working on robotics. I controlled a robotic arm with speech recognition, built a
          path-finding algorithm for drones, and worked with ROS. I simulated drone movement in
          Unity. I decided academia wasn't my vocation — it underpays you.
        </p>
        <ul>
          <li>Unity + C# simulations.</li>
          <li>Inner workings of embedded systems.</li>
          <li>How academic research actually works.</li>
        </ul>
        <div class="tags">
          <span class="tag">ROS</span><span class="tag">Unity</span>
          <span class="tag">C++</span><span class="tag">embedded</span>
        </div>
      </div>

      <!-- L0 bridge -->
      <div class="card">
        <h3>Bridge development — unnamed L0 firm, Switzerland</h3>
        <div class="meta">Rust + Solidity</div>
        <p>
          I worked at an asset-bridging (L0) firm, building part of the new Rust backend,
          refactoring their code, implementing calldata passing into their Solidity contracts,
          and reviewing/auditing some of those contracts.
        </p>
        <ul>
          <li>Rust — my first serious use of it.</li>
          <li>Refactoring code with more duplication than the wildlife near Nagasaki.</li>
          <li>Handling large amounts of customer money responsibly.</li>
        </ul>
        <div class="tags">
          <span class="tag">Rust</span><span class="tag">Solidity</span>
          <span class="tag">audits</span><span class="tag">bridges</span>
        </div>
      </div>

      <!-- Akula JSON-RPC -->
      <div class="card">
        <h3>JSON-RPC in Akula (Rust Ethereum client)</h3>
        <div class="meta">Rust</div>
        <p>
          I implemented the JSON-RPC interface in Akula before the project shut down — to spec,
          with an easy way to add new methods. The first Rust implementation of the Ethereum
          JSON-RPC.
        </p>
        <ul>
          <li>Deep familiarity with Ethereum's JSON-RPC API surface.</li>
          <li>More proficiency in Rust.</li>
        </ul>
        <div class="tags"><span class="tag">Rust</span><span class="tag">JSON-RPC</span></div>
      </div>

      <!-- Presort framework -->
      <div class="card">
        <h3>Pre-sort-before-insert framework (Go, Rust, C++)</h3>
        <div class="meta">Databases · external merge sort</div>
        <p>
          A system that takes randomly-ordered data and inserts it sequentially for efficient
          writes into B-Tree-based databases — external merge sort with a heap. Simple, but it
          cut our database write overhead meaningfully.
        </p>
        <ul>
          <li>Designing a reusable framework from scratch.</li>
          <li>Practical database/storage design.</li>
        </ul>
        <div class="tags">
          <span class="tag">B-Tree</span><span class="tag">merge sort</span>
          <span class="tag">Go</span><span class="tag">Rust</span><span class="tag">C++</span>
        </div>
      </div>

    </div>
  </div>
</div>
</template>
