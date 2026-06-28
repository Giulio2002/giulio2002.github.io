<script setup lang="ts">
</script>

<template>
<div class="page">
  <div class="container">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">CTO &amp; AI Lead @ Erigon · Ethereum Protocol Leader</span>
        <h1>Hi, I'm <span class="grad">Giulio Rebuffo</span>.</h1>
        <p class="hero-role">
          I build the plumbing that keeps <b>Ethereum</b> running. <b>CTO &amp; Project Lead</b>
          of Erigon, creator of <b>Caplin</b> (its consensus client), the person who shipped
          <b>The Merge</b> in Erigon, and co-author of multiple <b>Final Core EIPs</b> in the
          Fusaka/Osaka upgrade. As <b>AI Lead</b> I design the agentic coding workflows and
          self-fixing CI harnesses that build our consensus nodes. Full-time
          memory-management enjoyer.
        </p>
        <div class="cta-row">
          <a class="btn primary" href="#/feats">See my work →</a>
          <a class="btn" href="https://github.com/Giulio2002">GitHub</a>
          <a class="btn" href="#/eips">EIPs</a>
        </div>
      </div>
      <img src="/logo.png" alt="Giulio" class="hero-avatar" />
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="stat"><div class="num">18TB→1.6TB</div><div class="lbl">archive node shrink</div></div>
      <div class="stat"><div class="num">1</div><div class="lbl">consensus client, solo-built</div></div>
      <div class="stat"><div class="num">10+</div><div class="lbl">EIPs authored / co-authored</div></div>
      <div class="stat"><div class="num">13</div><div class="lbl">age I started coding</div></div>
    </section>

    <!-- ABOUT -->
    <div class="card headline">
      <div class="text">
        <p>
          My name is Giulio, surprisingly. I code and sleep. My main interests are
          <b>Blockchain</b>, <b>memory management</b>, <b>deployments</b>, and
          <b>scalability solutions</b>.
        </p>
        <p>
          I started my coding journey at <b>13</b> with C — originally so I could mod games
          and write hacks to avoid paying for stuff. The motivation has matured; the
          willingness to dig into things that shouldn't be touched has not.
        </p>
        <p>
          Short version of my path: robotics research at the University of Genoa at <b>14</b>
          (mostly C++), a smart-contract firm in Switzerland at <b>15</b> (first contact with
          Ethereum), an L0 firm at <b>16</b>, and an <b>Ethereum Core Developer at 17</b>,
          during Covid. I've been at it ever since.
        </p>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="card">
      <h3>Tech I work with at a senior level</h3>
      <div class="chips">
        <span class="chip">Go</span>
        <span class="chip">Rust</span>
        <span class="chip">C</span>
        <span class="chip">C++</span>
        <span class="chip">Python</span>
        <span class="chip">Solidity</span>
        <span class="chip">TypeScript</span>
        <span class="chip">JavaScript</span>
      </div>
      <h3 style="margin-top:20px">Also comfortable with</h3>
      <div class="chips">
        <span class="chip dim">Kubernetes</span>
        <span class="chip dim">Docker</span>
        <span class="chip dim">Java</span>
        <span class="chip dim">Scala</span>
        <span class="chip dim">C#</span>
        <span class="chip dim">MDBX / LMDB</span>
        <span class="chip dim">PostgreSQL</span>
        <span class="chip dim">libp2p / devp2p</span>
        <span class="chip dim">gRPC</span>
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
          <div class="tl-when">2021 – present · Zug, Switzerland</div>
          <h4>CTO / Project Lead — Erigon Technologies AG</h4>
          <p>Lead technical direction for Erigon. Implemented the PoS transition (The Merge) and
             built the foundation of its consensus engine. Bootstrapped and lead <b>Caplin</b>,
             Erigon's embedded consensus client. Co-authored Final Core EIPs in Fusaka/Osaka,
             built an RL-based p2p peer-selection algorithm, and contributed to Silkworm (C++)
             and the first Rust Ethereum JSON-RPC in Akula.</p>
        </div>
        <div class="tl-item">
          <div class="tl-when">present · alongside the CTO role</div>
          <h4>AI Lead — Erigon / Ethereum Foundation</h4>
          <p>Designed the agentic coding workflow for building new consensus nodes, and built
             agent harnesses that automatically diagnose and fix CI/test failures. LLM-driven
             tooling (on Claude and other APIs) that implements entire Ethereum hard forks across
             the consensus client and validates them against the official spec test vectors in a
             closed fix loop.</p>
        </div>
      </div>
    </div>

    <p class="centered" style="color:var(--text-faint);font-family:var(--mono);margin-top:30px">
      Now that you've found me, go poke around → <a href="#/feats">/work</a> · <a href="#/eips">/eips</a> · <a href="#/stuffidoforfun">/fun</a>
    </p>

  </div>
</div>
</template>
