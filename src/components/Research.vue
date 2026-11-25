<script setup lang="ts">
</script>

<template>
  <div>
    <h1>Research &amp; writing</h1>
    <p class="lead">
      Protocol R&amp;D, formal verification, and notes posted in the open on
      <a href="https://github.com/Giulio2002" target="_blank" rel="noopener">GitHub</a>,
      <a href="https://giulioswamp.substack.com" target="_blank" rel="noopener">Giulio's Swamp</a>,
      <a href="https://ethresear.ch/u/Giulio2002" target="_blank" rel="noopener">ethresear.ch</a>, and
      <a href="https://ethereum-magicians.org/u/Giulio2002" target="_blank" rel="noopener">Ethereum Magicians</a>.
    </p>

    <article class="entry">
      <div class="entry-head">
        <h3>Compiled machine-code &amp; mainnet bytecode verification</h3>
        <span class="entry-meta">Lean 4 · active</span>
      </div>
      <p>
        Source-level proofs still trust the compiler, linker, and hand-written assembly. With Janus
        I verify the actual arm64 and amd64 ELF bytes emitted by Go directly in Lean 4 (so far all
        146 functions of <code>holiman/uint256</code> and Geth v1.17.10's Osaka MODEXP precompile
        against EthLib). For smart contracts, <code>usdt-verify</code> proves invariants and
        security properties directly over the 11,075-byte deployed USDT mainnet bytecode.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/Janus" target="_blank" rel="noopener">Janus</a>
        <a href="https://github.com/Giulio2002/fv-uint256" target="_blank" rel="noopener">fv-uint256</a>
        <a href="https://github.com/Giulio2002/fv-modexp" target="_blank" rel="noopener">fv-modexp</a>
        <a href="https://github.com/Giulio2002/usdt-verify" target="_blank" rel="noopener">usdt-verify</a>
        <a href="https://github.com/ethereum/EthLib" target="_blank" rel="noopener">EthLib</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>AI-built "formal programs"</h3>
        <span class="entry-meta">Bend 2, Lean 4 · active</span>
      </div>
      <p>
        Using coding agents together with a kernel proof checker so the agent writes both the code
        and the proof against an independent spec. Built <code>formal-factory</code> (<code>ff</code>)
        and ran it on <code>bend-ssz</code> (all 240 Fulu + generic SSZ types),
        <code>bend-collections</code> (containers and crypto primitives), and
        <code>bend-zcash-blake2b</code>.
      </p>
      <div class="entry-links">
        <a href="https://giulioswamp.substack.com/p/creating-a-formal-programs-factory" target="_blank" rel="noopener">Formal programs factory (Substack)</a>
        <a href="https://ethereum-magicians.org/t/bend-ssz-formally-proving-ssz/29861" target="_blank" rel="noopener">Bend-SSZ (EthMag)</a>
        <a href="https://github.com/Giulio2002/ff" target="_blank" rel="noopener">ff</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>Dual gas accounting for backwards-compatible repricing</h3>
        <span class="entry-meta">EIP-8487 · Nov 2026</span>
      </div>
      <p>
        Gas repricing proposals like EIP-8037 and EIP-8038 can break immutable legacy contracts that
        hardcode gas forwarding or inspect remaining gas. EIP-8487 splits accounting into legacy
        execution credits (what the EVM sees) and updated billing credits (what actually pays fees
        and aborts uncatchably if exhausted).
      </p>
      <div class="entry-links">
        <a href="https://ethereum-magicians.org/t/eip-8487-separate-execution-credits-and-billing-credits/30320" target="_blank" rel="noopener">Ethereum Magicians thread</a>
        <a href="https://github.com/ethereum/EIPs/pull/12637" target="_blank" rel="noopener">EIPs PR #12637</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>Post-Quantum Ethereum</h3>
        <span class="entry-meta">Falcon-512, ML-DSA-44 · EIP-8202</span>
      </div>
      <p>
        Co-authored EIP-8202 (Scheme-Agile Transactions), built seven Rust Ring-LWE precompiles
        (<code>eth-ntt</code>, ~8.1 µs Falcon-512 verification on M4), and tested post-quantum
        transactions end-to-end on a Kurtosis devnet in an experimental Erigon fork.
      </p>
      <div class="entry-links">
        <a href="https://ethereum-magicians.org/t/frame-transactions-vs-schemedtransactions-for-post-quantum-ethereum/28056" target="_blank" rel="noopener">Frame vs. SchemedTransactions</a>
        <a href="https://github.com/Giulio2002/pq-eth-precompiles" target="_blank" rel="noopener">pq-eth-precompiles</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>Binary SSZ transport, L1 scaling, history expiry &amp; consensus</h3>
        <span class="entry-meta">2022–2026</span>
      </div>
      <p>
        Earlier and ongoing protocol topics: replacing JSON-RPC with binary SSZ on the Engine API
        (EIP-8178, benchmarked on a live Kurtosis network), sharded history sync (EIP-7801),
        delayed <code>stateRoot</code> proposals, archive storage compression (18 TB to 1.6 TB),
        Verkle Tree transition precomputation (7 days to 6 hours), Orbit SSF, economic finality,
        and RL-based p2p peer selection in Erigon.
      </p>
      <div class="entry-links">
        <a href="https://ethresear.ch/t/binary-ssz-transport-for-the-engine-api-an-initial-benchmark-on-a-live-network-with-kurtosis/24324" target="_blank" rel="noopener">SSZ Engine API benchmark</a>
        <a href="https://ethresear.ch/t/orbit-ssf-in-practice/20943" target="_blank" rel="noopener">Orbit SSF in Practice</a>
        <a href="https://ethresear.ch/t/proposal-delay-stateroot-reference-to-increase-throughput-and-reduce-latency/20490" target="_blank" rel="noopener">Delayed stateRoot</a>
        <a href="https://github.com/Giulio2002/verkleipfs" target="_blank" rel="noopener">verkleipfs</a>
      </div>
    </article>

    <h2>Selected talks, podcasts &amp; posts</h2>
    <ul class="rows">
      <li class="row">
        <div class="row-when">2026-10</div>
        <div>
          <a href="https://giulioswamp.substack.com/p/creating-a-formal-programs-factory" target="_blank" rel="noopener">
            Creating a "formal programs" factory and making a formal program of SSZ with it
          </a>
          <span class="row-place"> · Substack</span>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2026-03</div>
        <div>
          <a href="https://ethresear.ch/t/binary-ssz-transport-for-the-engine-api-an-initial-benchmark-on-a-live-network-with-kurtosis/24324" target="_blank" rel="noopener">
            Binary SSZ Transport for the Engine API: initial Kurtosis benchmark
          </a>
          <span class="row-place"> · ethresear.ch</span>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2026-02</div>
        <div>
          <a href="https://giulioswamp.substack.com/p/the-mostly-agent-built-evm-as-fast" target="_blank" rel="noopener">
            The mostly agent-built EVM: As Fast (and Sometimes Faster) Than REVM, Written in Go
          </a>
          <span class="row-place"> · Substack</span>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2025-08</div>
        <div>
          <a href="https://www.youtube.com/watch?v=qg4FX4aCsRc" target="_blank" rel="noopener">
            PEEPanEIP #151: EIP-7825 &amp; EIP-7934
          </a>
          <span class="row-place"> · Ethereum Cat Herders</span>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2025-05</div>
        <div>
          <a href="https://video.ethz.ch/lectures/d-mtec/2025/spring/363-1153-00L/v/AHfV4Bsjf6m" target="_blank" rel="noopener">
            Guest lecture on Ethereum protocol engineering &amp; consensus design
          </a>
          <span class="row-place"> · ETH Zürich (D-MTEC)</span>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2025-02</div>
        <div>
          <a href="https://podcasts.apple.com/us/podcast/meet-giulio-cto-of-erigon/id1731698244?i=1000695123010" target="_blank" rel="noopener">
            Meet Giulio, CTO of Erigon (Ep. 82)
          </a>
          <span class="row-place"> · Infinite Jungle Podcast</span>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2025-02</div>
        <div>
          <a href="https://giulioswamp.substack.com/p/making-ethereum-a-rollup-of-itself" target="_blank" rel="noopener">
            Making Ethereum a Rollup of Itself
          </a>
          <span class="row-place"> · Substack</span>
        </div>
      </li>
    </ul>
  </div>
</template>
