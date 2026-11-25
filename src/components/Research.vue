<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <PageHeader title="Research" gif="rey">
        Protocol-level R&amp;D and formal verification — half-theory, half-machine-checked code.
        Most of it lives out in the open on GitHub, Substack, and the Ethereum research forums.
      </PageHeader>

      <div class="card headline">
        <h3>Where my research lives</h3>
        <div class="meta">open protocol discussion, proofs &amp; benchmarks — not paywalled PDFs</div>
        <p>
          I publish my work in public — Lean 4 and Bend 2 proof repositories on <b>GitHub</b>,
          long-form write-ups on <b>Giulio's Swamp</b>, and protocol design threads on
          <b>Ethereum Magicians</b> and <b>ethresear.ch</b>.
        </p>
        <div class="cta-row">
          <a class="btn" href="https://ethereum-magicians.org/u/Giulio2002" target="_blank" rel="noopener">Ethereum Magicians ↗</a>
          <a class="btn" href="https://ethresear.ch/u/Giulio2002" target="_blank" rel="noopener">ethresear.ch ↗</a>
          <a class="btn" href="https://giulioswamp.substack.com" target="_blank" rel="noopener">Giulio's Swamp ↗</a>
        </div>
      </div>

      <div class="card headline">
        <h3>Formal verification of compiled client binaries &amp; mainnet bytecode <span class="pill live">active</span></h3>
        <div class="meta">Lean 4 · Janus · EthLib · fv-uint256 · fv-modexp · usdt-verify</div>
        <p>
          Source-level proofs still trust the compiler, linker, and hand-written assembly. With
          <b>Janus</b>, I verify the exact <b>arm64 and amd64 ELF machine code</b> emitted by the
          Go compiler directly in Lean 4 — already proving all <b>146 exported functions</b> of
          <code>holiman/uint256</code> and Geth v1.17.10's Osaka <b>MODEXP</b> precompile against
          <b>EthLib</b>. On the smart-contract side, <b>usdt-verify</b> proves invariants and
          security properties directly over the 11,075-byte <b>deployed USDT mainnet bytecode</b>
          across all 32 selectors and forks through Glamsterdam.
        </p>
        <div class="tags">
          <span class="tag">Lean 4</span><span class="tag">machine-code verification</span>
          <span class="tag">arm64 / amd64</span><span class="tag">EVM bytecode</span>
        </div>
        <div class="project-links">
          <a href="https://github.com/Giulio2002/Janus" target="_blank" rel="noopener">Janus →</a>
          <a href="https://github.com/Giulio2002/fv-uint256" target="_blank" rel="noopener">fv-uint256 →</a>
          <a href="https://github.com/Giulio2002/fv-modexp" target="_blank" rel="noopener">fv-modexp →</a>
          <a href="https://github.com/Giulio2002/usdt-verify" target="_blank" rel="noopener">usdt-verify →</a>
          <a href="https://github.com/ethereum/EthLib" target="_blank" rel="noopener">EthLib →</a>
        </div>
      </div>

      <div class="card headline">
        <h3>AI-built "formal programs" &amp; software factories <span class="pill live">active</span></h3>
        <div class="meta">formal-factory (ff) · Bend 2 · Lean 4 · LLM agents</div>
        <p>
          What happens when you pair coding agents with a proof checker so a machine both writes
          the code and proves it meets an independent specification for <i>every</i> input? I built
          <b>formal-factory</b> (<code>ff</code>) to test this thesis — shipping <b>bend-ssz</b>
          (all 240 Fulu + generic SSZ types proved), <b>bend-collections</b> (a proved crypto &amp;
          container standard library), and <b>bend-zcash-blake2b</b> (a proved C/Rust drop-in).
        </p>
        <div class="tags">
          <span class="tag">Bend 2</span><span class="tag">Lean 4</span>
          <span class="tag">agentic workflows</span><span class="tag">SSZ</span>
        </div>
        <div class="project-links">
          <a href="https://giulioswamp.substack.com/p/creating-a-formal-programs-factory" target="_blank" rel="noopener">Formal programs factory post →</a>
          <a href="https://ethereum-magicians.org/t/bend-ssz-formally-proving-ssz/29861" target="_blank" rel="noopener">Bend-SSZ on EthMag →</a>
          <a href="https://github.com/Giulio2002/ff" target="_blank" rel="noopener">ff →</a>
        </div>
      </div>

      <div class="card">
        <h3>Dual gas accounting for safe EVM repricing <span class="pill pink">active</span></h3>
        <div class="meta">EIP-8487 · Glamsterdam · Nov 2026</div>
        <p>
          Raising state-creation and storage gas costs (e.g., EIP-8037 / EIP-8038) risks breaking
          immutable legacy contracts that rely on fixed gas forwarding or introspection.
          <b>EIP-8487</b> splits accounting into legacy <b>execution credits</b> (what the EVM sees)
          and updated <b>billing credits</b> (what pays fees and aborts uncatchably if exhausted),
          preserving backwards compatibility while pricing network resources accurately.
        </p>
        <div class="project-links">
          <a href="https://ethereum-magicians.org/t/eip-8487-separate-execution-credits-and-billing-credits/30320" target="_blank" rel="noopener">EIP-8487 on Ethereum Magicians →</a>
          <a href="https://github.com/ethereum/EIPs/pull/12637" target="_blank" rel="noopener">EIPs PR #12637 →</a>
        </div>
      </div>

      <div class="card">
        <h3>Post-Quantum Ethereum <span class="pill pink">active</span></h3>
        <div class="meta">Falcon-512 · ML-DSA-44 · EIP-8202 · EIP-8175 · Go + Rust</div>
        <p>
          Exploring what Ethereum looks like once elliptic-curve signatures are no longer safe.
          Co-authored <b>EIP-8202</b> (Scheme-Agile Transactions), built <b>eth-ntt</b> (7 Rust
          Ring-LWE EVM precompiles achieving ~8.1 µs Falcon-512 verification), and proved
          post-quantum transactions end-to-end on a Kurtosis devnet in an experimental Erigon fork.
        </p>
        <div class="tags">
          <span class="tag">lattice crypto</span><span class="tag">precompiles</span>
          <span class="tag">account abstraction</span><span class="tag">NTT</span>
        </div>
        <div class="project-links">
          <a href="https://ethereum-magicians.org/t/frame-transactions-vs-schemedtransactions-for-post-quantum-ethereum/28056" target="_blank" rel="noopener">Frame vs. SchemedTransactions →</a>
          <a href="https://github.com/Giulio2002/pq-eth-precompiles" target="_blank" rel="noopener">pq-eth-precompiles →</a>
        </div>
      </div>

      <div class="card">
        <h3>Binary SSZ transport for the Engine API</h3>
        <div class="meta">EIP-8178 · Kurtosis benchmarks · Mar 2026</div>
        <p>
          Replacing JSON-RPC with raw binary SSZ over REST between consensus and execution clients.
          Authored <b>EIP-8178</b>, implemented it in Erigon, and published live-network Kurtosis
          benchmarks on <code>ethresear.ch</code>.
        </p>
        <div class="project-links">
          <a href="https://ethresear.ch/t/binary-ssz-transport-for-the-engine-api-an-initial-benchmark-on-a-live-network-with-kurtosis/24324" target="_blank" rel="noopener">Kurtosis benchmark post →</a>
          <a href="https://eips.ethereum.org/EIPS/eip-8178" target="_blank" rel="noopener">EIP-8178 →</a>
        </div>
      </div>

      <div class="card">
        <h3>Stateless Ethereum, L1 scaling &amp; history expiry</h3>
        <div class="meta">EIP-4444 · EIP-7801 (etha) · EIP-7954 · EIP-7975 · Delayed stateRoot</div>
        <p>
          How do you scale L1 execution without forcing every node to store everything forever? My
          EIP and forum work targets this directly: the <code>etha</code> subprotocol (EIP-7801),
          partial receipt pagination (EIP-7975), 64 KiB contract size (EIP-7954), delayed
          <code>stateRoot</code> references, and controlled gas-limit growth.
        </p>
        <div class="project-links">
          <a href="#/eips">See the EIPs →</a>
          <a href="https://ethresear.ch/t/proposal-delay-stateroot-reference-to-increase-throughput-and-reduce-latency/20490" target="_blank" rel="noopener">Delayed stateRoot proposal →</a>
        </div>
      </div>

      <div class="card">
        <h3>Compact archive-node state model</h3>
        <div class="meta">storage research · 18 TB → 1.6 TB</div>
        <p>
          A from-scratch redesign of how Ethereum archive nodes store historical state, achieving
          an ~11× reduction (18 TB → 1.6 TB) while keeping all historical state queryable. The
          interesting part isn't compression — it's choosing a data layout where the access
          patterns of an archive node fall out cheaply.
        </p>
      </div>

      <div class="card">
        <h3>Verkle Tree transition by precomputation</h3>
        <div class="meta">hackathon-born, then taken seriously</div>
        <p>
          Migrating Ethereum's state to Verkle Trees naively took ~7 days to generate the tree.
          By precomputing the structure I cut that to ~6 hours — the kind of result that's
          embarrassingly simple in hindsight. Born at the Lisbon hackathon (which it won) and
          since refined.
        </p>
        <a href="https://github.com/Giulio2002/verkleipfs" target="_blank" rel="noopener">verkleipfs →</a>
      </div>

      <div class="card">
        <h3>Economic finality, Orbit SSF &amp; RL-based p2p peer selection</h3>
        <div class="meta">consensus security · networking</div>
        <p>
          Work on Ethereum's economic-finality story, practical <b>Orbit SSF</b> analysis on
          <code>ethresear.ch</code>, reduced attestation gossip formats, and a
          reinforcement-learning-based p2p peer-selection algorithm for Erigon under production
          network conditions.
        </p>
        <div class="project-links">
          <a href="https://ethresear.ch/t/orbit-ssf-in-practice/20943" target="_blank" rel="noopener">Orbit SSF in Practice →</a>
          <a href="https://ethresear.ch/t/reduced-attestation-format-for-gossiping-attestations/19157" target="_blank" rel="noopener">Reduced Attestation Format →</a>
        </div>
      </div>

      <div class="card">
        <h3>Talks, writing &amp; podcasts</h3>
        <ul>
          <li><b>ETH Zürich guest lecture</b> (D-MTEC, Spring 2025) — Ethereum protocol engineering and consensus design.
            <a href="https://video.ethz.ch/lectures/d-mtec/2025/spring/363-1153-00L/v/AHfV4Bsjf6m" target="_blank" rel="noopener">Watch →</a>
          </li>
          <li><b>PEEPanEIP #151</b> (Ethereum Cat Herders, Aug 2025) — EIP-7825 Transaction Gas Limit Cap &amp; EIP-7934 RLP Block Size Limit.
            <a href="https://www.youtube.com/watch?v=qg4FX4aCsRc" target="_blank" rel="noopener">Watch →</a>
          </li>
          <li><b>Infinite Jungle Podcast Ep. 82</b> (Feb 2025) — <i>Meet Giulio, CTO of Erigon</i>: starting core dev at 17, The Merge, Fusaka, and gas limits.
            <a href="https://podcasts.apple.com/us/podcast/meet-giulio-cto-of-erigon/id1731698244?i=1000695123010" target="_blank" rel="noopener">Listen →</a>
          </li>
          <li><b>Giulio's Swamp (Substack)</b> —
            <a href="https://giulioswamp.substack.com/p/creating-a-formal-programs-factory" target="_blank" rel="noopener">Formal programs factory &amp; Bend-SSZ</a> ·
            <a href="https://giulioswamp.substack.com/p/the-mostly-agent-built-evm-as-fast" target="_blank" rel="noopener">The mostly agent-built EVM (GEVM)</a> ·
            <a href="https://giulioswamp.substack.com/p/making-ethereum-a-rollup-of-itself" target="_blank" rel="noopener">Making Ethereum a Rollup of Itself</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</div>
</template>
