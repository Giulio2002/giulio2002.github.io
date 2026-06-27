<script setup lang="ts">
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <p class="section-title centered">
        <img src="@/assets/rey.gif" alt="" aria-hidden="true" class="inverted smol" />
        <span class="grad">Research</span>
        <img src="@/assets/rey.gif" alt="" aria-hidden="true" class="smol" />
      </p>
      <p class="section-sub">
        Protocol-level R&amp;D — the stuff that's still half-theory, half-code. Most of it lives as
        discussion out in the open on the Ethereum research forums, not in a paper.
      </p>

      <div class="card headline">
        <h3>Where my research lives</h3>
        <div class="meta">open protocol discussion, not PDFs</div>
        <p>
          I do my protocol research in public — proposals, design debates and rough ideas posted
          to the two forums where Ethereum's core R&amp;D actually happens:
          <b>Ethereum Magicians</b> (EIP design &amp; standards) and <b>ethresear.ch</b>
          (deeper protocol research). The topics below are threads and proposals I've worked on
          there.
        </p>
        <div class="cta-row">
          <a class="btn" href="https://ethereum-magicians.org/" target="_blank" style="border-bottom:none">Ethereum Magicians ↗</a>
          <a class="btn" href="https://ethresear.ch/" target="_blank" style="border-bottom:none">ethresear.ch ↗</a>
        </div>
      </div>

      <div class="card">
        <h3>Post-Quantum Ethereum <span class="pill pink">active</span></h3>
        <div class="meta">Falcon-512 · Dilithium · EIP-8175 · Go + Rust</div>
        <p>
          Exploring what Ethereum looks like once elliptic-curve signatures are no longer safe. I
          built an experimental Erigon fork with <b>Falcon-512</b> and <b>Dilithium</b>
          signature-verification precompiles, plus <b>EIP-8175</b> composable transactions that
          can be signed with a post-quantum scheme instead of secp256k1 — and proved the whole
          path end-to-end on a devnet (txpool → block inclusion → successful execution). Open
          questions I'm chasing: signature/witness size, gas accounting, and a clean migration
          story for existing accounts.
        </p>
        <div class="tags">
          <span class="tag">lattice crypto</span><span class="tag">precompiles</span>
          <span class="tag">account abstraction</span><span class="tag">NTT</span>
        </div>
      </div>

      <div class="card">
        <h3>Stateless Ethereum &amp; history expiry</h3>
        <div class="meta">EIP-4444 · EIP-7801 (etha) · EIP-7783</div>
        <p>
          How do you keep a blockchain verifiable without forcing every node to store everything
          forever? My EIP work targets exactly this: the <code>etha</code> subprotocol
          (EIP-7801) so nodes can advertise which slices of history they hold, plus controlled
          gas-limit growth (EIP-7783) to scale throughput responsibly. The goal is to make
          history expiry (EIP-4444) practical without breaking sync.
        </p>
        <a href="#/eips">See the EIPs →</a>
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
        <a href="https://github.com/Giulio2002/verkleipfs" target="_blank">verkleipfs →</a>
      </div>

      <div class="card">
        <h3>AI-assisted protocol implementation</h3>
        <div class="meta">agentic tooling · Python</div>
        <p>
          A research question disguised as a tool: can an LLM agent correctly implement an entire
          Ethereum consensus hard fork across the core state transition, block production, and
          archive-node subsystems — validated against the official spec test vectors in a
          closed fix loop? Turns out: increasingly, yes.
        </p>
      </div>

      <div class="card">
        <h3>Economic finality of proof-of-stake</h3>
        <div class="meta">consensus security</div>
        <p>
          Work on Ethereum's economic-finality story: the security assumptions behind
          proof-of-stake, finality behavior under adversarial conditions, and what those
          assumptions imply for how execution and consensus clients should actually behave.
        </p>
      </div>

      <div class="card">
        <h3>RL-based p2p peer selection</h3>
        <div class="meta">networking · production node behavior</div>
        <p>
          A reinforcement-learning-based peer-selection algorithm for Erigon — letting a node
          learn which peers are worth keeping under real production conditions instead of relying
          on static heuristics, improving peer choice and overall network behavior.
        </p>
      </div>

      <div class="card">
        <h3>Talks &amp; teaching</h3>
        <p>
          I gave a guest lecture at <b>ETH Zürich</b> (D-MTEC, Spring 2025) on Ethereum protocol
          engineering and consensus design.
        </p>
        <a href="https://video.ethz.ch/lectures/d-mtec/2025/spring/363-1153-00L/v/AHfV4Bsjf6m"
           target="_blank">Watch the ETH Zürich lecture →</a>
      </div>

    </div>
  </div>
</div>
</template>
