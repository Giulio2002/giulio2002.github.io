<script setup lang="ts">
</script>

<template>
<div class="page">
  <div class="container">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Applied AI × Client Dev @ Ethereum Foundation</span>
        <h1>Hi, I'm <span class="grad">Giulio Rebuffo</span>.</h1>
        <p class="hero-role">
          I build and formally verify the plumbing that keeps <b>Ethereum</b> running. Now at the
          <b>Ethereum Foundation</b> working on <b>Applied AI × Client Dev</b> — using coding agents
          and <b>Lean 4 / Bend 2</b> to machine-verify compiled Go client code, Ethereum primitives
          (<b>EthLib</b>), and deployed mainnet bytecode. Previously <b>CTO &amp; AI Lead</b> of
          <b>Erigon</b>, creator of <b>Caplin</b> (its consensus client), shipped <b>The Merge</b>
          in Erigon, and co-author of <b>Final Core EIPs</b> in Fusaka/Osaka and Glamsterdam.
          Full-time memory-management enjoyer.
        </p>
        <div class="cta-row">
          <a class="btn primary" href="#/feats">See my work →</a>
          <a class="btn" href="https://github.com/Giulio2002" target="_blank" rel="noopener">GitHub</a>
          <a class="btn" href="#/research">Research</a>
          <a class="btn" href="#/eips">EIPs</a>
        </div>
      </div>
      <img src="/logo.png" alt="Giulio" class="hero-avatar" />
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="stat"><div class="num">18TB→1.6TB</div><div class="lbl">archive node shrink</div></div>
      <div class="stat"><div class="num">287</div><div class="lbl">EthLib Lean 4 PRs merged</div></div>
      <div class="stat"><div class="num">12+</div><div class="lbl">EIPs authored / co-authored</div></div>
      <div class="stat"><div class="num">13</div><div class="lbl">age I started coding</div></div>
    </section>

    <!-- ABOUT -->
    <div class="card headline">
      <div class="text">
        <p>
          My name is Giulio, surprisingly. I code and sleep. My main interests are
          <b>Ethereum protocol engineering</b>, <b>formal verification</b>, <b>applied AI for systems code</b>,
          <b>memory management</b>, and <b>scalability</b>.
        </p>
        <p>
          I started my coding journey at <b>13</b> with C — originally so I could mod games
          and write hacks to avoid paying for stuff. The motivation has matured; the
          willingness to dig into things that shouldn't be touched has not.
        </p>
        <p>
          Short version of my path: robotics research at the University of Genoa at <b>14</b>
          (mostly C++), a smart-contract firm in Switzerland at <b>15</b> (first contact with
          Ethereum), an L0 firm at <b>16</b>, an <b>Ethereum Core Developer at 17</b> during
          Covid, <b>CTO of Erigon</b> by <b>22</b>, and now at the <b>Ethereum Foundation</b>
          pushing AI-assisted formal verification of real machine code and deployed Ethereum
          contracts.
        </p>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="card">
      <h3>Tech I work with at a senior level</h3>
      <div class="chips">
        <span class="chip">Go</span>
        <span class="chip">Rust</span>
        <span class="chip">Lean 4</span>
        <span class="chip">C</span>
        <span class="chip">C++</span>
        <span class="chip">Python</span>
        <span class="chip">Solidity</span>
        <span class="chip">Bend 2</span>
        <span class="chip">TypeScript</span>
        <span class="chip">JavaScript</span>
      </div>
      <h3 style="margin-top:20px">Systems, verification &amp; infrastructure</h3>
      <div class="chips">
        <span class="chip dim">Formal Verification</span>
        <span class="chip dim">AI / LLM Agents</span>
        <span class="chip dim">arm64 / amd64 ISA</span>
        <span class="chip dim">EVM / SSZ / Engine API</span>
        <span class="chip dim">MDBX / LMDB</span>
        <span class="chip dim">libp2p / devp2p</span>
        <span class="chip dim">Kubernetes</span>
        <span class="chip dim">Docker</span>
        <span class="chip dim">PostgreSQL</span>
        <span class="chip dim">gRPC</span>
        <span class="chip dim">Java / Scala / C#</span>
      </div>
    </div>

    <!-- TIMELINE -->
    <div class="card">
      <h3>The path so far</h3>
      <div class="timeline">
        <div class="tl-item">
          <div class="tl-when">2016 – 2017 · Genoa, Italy</div>
          <h4>Hobbyist Embedded / Robotics Dev — University of Genoa</h4>
          <p>Research tasks for the robotics team at 14: ROS, C++, Python, drone path-finding
             sims in Unity/C#, and a robotic arm I controlled with speech recognition.</p>
        </div>
        <div class="tl-item">
          <div class="tl-when">2017 – 2018 · Genoa, Italy</div>
          <h4>Backend / Frontend / Blockchain Intern — Deepit AG</h4>
          <p>Smart contracts (Universal Login hooks, a POA bridge rewrite for Compound
             cTokens), ERC-20 deployer frontends, vesting hub, and PostgreSQL indexing.</p>
        </div>
        <div class="tl-item">
          <div class="tl-when">2018 – 2020 · Switzerland</div>
          <h4>Backend Rust Intern — Asset-Bridging (L0) Firm</h4>
          <p>Refactored their entire backend in Rust, rewrote tooling, reviewed Solidity,
             and learned what it's like to handle a lot of other people's money.</p>
        </div>
        <div class="tl-item">
          <div class="tl-when">2021 – 2026 · Zug, Switzerland</div>
          <h4>CTO, Project Lead &amp; AI Lead — Erigon Technologies AG</h4>
          <p>Led technical direction for Erigon (1,160+ commits) and served as AI Lead building
             agentic hard-fork implementers and self-fixing CI harnesses. Shipped <b>The Merge</b>
             in Erigon's execution layer, bootstrapped and led <b>Caplin</b> (its embedded consensus
             client), shrank archive nodes from <b>18 TB → 1.6 TB</b>, built <b>GEVM</b> and
             <b>gdbx</b>, co-authored Final Core EIPs in Fusaka/Osaka and Glamsterdam-scheduled EIPs,
             prototyped Post-Quantum Ethereum, and contributed to Silkworm (C++) and Akula (Rust).</p>
        </div>
        <div class="tl-item">
          <div class="tl-when">Nov 2026 – present · Zürich / Remote</div>
          <h4>Applied AI × Client Dev — Ethereum Foundation</h4>
          <p>Joined the Ethereum Foundation to lead applied AI and formal verification efforts for
             Ethereum client engineering. Core contributor to <b>EthLib</b> (#2 contributor, 287 merged
             Lean 4 PRs), creator of <b>Janus</b> (Lean 4 verification of compiled arm64/amd64 Go
             machine code — proving all 146 functions of <code>holiman/uint256</code> and Geth's
             Osaka <code>MODEXP</code> precompile), <b>usdt-verify</b> (formal verification of the
             deployed USDT mainnet bytecode), and <b>formal-factory</b> / Bend 2 verified crypto and
             SSZ libraries.</p>
        </div>
      </div>
    </div>

    <p class="centered" style="color:var(--text-faint);font-family:var(--mono);margin-top:30px">
      Now that you've found me, go poke around → <a href="#/feats">/work</a> · <a href="#/research">/research</a> · <a href="#/eips">/eips</a> · <a href="#/stuffidoforfun">/fun</a>
    </p>

  </div>
</div>
</template>
