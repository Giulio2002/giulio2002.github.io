<script setup lang="ts">
</script>

<template>
  <div>
    <section class="intro">
      <div>
        <h1>Giulio Rebuffo</h1>
        <p class="intro-role">
          Applied AI &amp; Client Dev at the Ethereum Foundation. Previously CTO &amp; AI Lead at Erigon.
        </p>
        <p class="inline-links">
          <a href="https://github.com/Giulio2002" target="_blank" rel="noopener">GitHub</a>
          <a href="https://x.com/GiulioRebuffo" target="_blank" rel="noopener">Twitter</a>
          <a href="https://giulioswamp.substack.com" target="_blank" rel="noopener">Substack</a>
          <a href="/cv.pdf" target="_blank" rel="noopener">CV (PDF)</a>
          <a href="mailto:giulio.rebuffo@gmail.com">Email</a>
        </p>
      </div>
      <img src="/logo.png" alt="Giulio" class="avatar" />
    </section>

    <p>
      Hi, I'm Giulio. I code and sleep. Mostly Ethereum protocol engineering, formal verification,
      memory management, and using coding agents to write and prove systems code.
    </p>

    <p>
      I started coding at 13 in C so I could mod games and write hacks to avoid paying for things.
      Short version after that: robotics at the University of Genoa at 14, a smart contract firm in
      Switzerland at 15 (first contact with Ethereum), an L0 bridge firm at 16, and Ethereum core
      dev at 17 during Covid. I ended up as CTO of Erigon, where I shipped The Merge for the
      execution layer, wrote Caplin (its consensus client) mostly by myself, and cut archive node
      storage from 18 TB down to 1.6 TB. In November 2026 I joined the Ethereum Foundation. I'm also
      a student at ETH Zürich.
    </p>

    <h2>Current focus</h2>
    <ul>
      <li>
        <a href="https://github.com/Giulio2002/Janus" target="_blank" rel="noopener">Janus</a>:
        Lean 4 verification of compiled arm64/amd64 Go machine code (the Go compiler is not trusted).
        Used to verify all 146 exported functions of <code>holiman/uint256</code>
        (<a href="https://github.com/Giulio2002/fv-uint256" target="_blank" rel="noopener">fv-uint256</a>)
        and Geth v1.17.10's Osaka MODEXP precompile
        (<a href="https://github.com/Giulio2002/fv-modexp" target="_blank" rel="noopener">fv-modexp</a>).
      </li>
      <li>
        <a href="https://github.com/Giulio2002/usdt-verify" target="_blank" rel="noopener">usdt-verify</a>:
        Lean 4 proofs directly over the 11,075-byte USDT bytecode deployed on Ethereum mainnet since 2017.
      </li>
      <li>
        <a href="https://github.com/ethereum/EthLib" target="_blank" rel="noopener">EthLib</a>:
        shared Lean 4 library of formally verified Ethereum specs and proofs (287 merged PRs so far).
      </li>
      <li>
        <a href="https://github.com/Giulio2002/ff" target="_blank" rel="noopener">formal-factory</a>
        &amp; Bend 2 libraries:
        <a href="https://github.com/Giulio2002/bend-collections" target="_blank" rel="noopener">bend-collections</a>
        (containers + proved crypto suite),
        <a href="https://github.com/Giulio2002/bend-ssz" target="_blank" rel="noopener">bend-ssz</a>
        (all 240 Fulu + generic SSZ types proved), and
        <a href="https://github.com/Giulio2002/bend-zcash-blake2b" target="_blank" rel="noopener">bend-zcash-blake2b</a>.
      </li>
      <li>
        Protocol specs &amp; <router-link to="/eips">EIPs</router-link>: four Final EIPs in Fusaka/Osaka,
        two scheduled for Glamsterdam (EIP-7954 and EIP-7975), plus
        <a href="https://ethereum-magicians.org/t/eip-8487-separate-execution-credits-and-billing-credits/30320" target="_blank" rel="noopener">EIP-8487</a>
        on separating execution and billing gas credits.
      </li>
    </ul>

    <h2>Experience</h2>
    <ul class="rows">
      <li class="row">
        <div class="row-when">Nov 2026–now</div>
        <div>
          <p class="row-title">
            Applied AI &amp; Client Dev, Ethereum Foundation
            <span class="row-place">· Zürich / Remote</span>
          </p>
          <p class="row-desc">
            Working on applied AI and formal verification for Ethereum clients: compiled-Go verification
            with Janus, mainnet bytecode proofs, EthLib, and agentic proof-generation tooling.
          </p>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2021–2026</div>
        <div>
          <p class="row-title">
            CTO, Project Lead &amp; AI Lead, Erigon Technologies AG
            <span class="row-place">· Zug</span>
          </p>
          <p class="row-desc">
            Technical direction across Erigon (1,160+ commits). Shipped The Merge in the EL, created
            and led Caplin (embedded consensus client), shrank archive nodes from 18 TB to 1.6 TB,
            built GEVM and gdbx, led Erigon's agentic fork/CI tooling, prototyped Post-Quantum
            Ethereum, and worked on Silkworm (C++) and Akula (Rust JSON-RPC).
          </p>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2018–2020</div>
        <div>
          <p class="row-title">
            Backend Rust Intern, Asset-Bridging (L0) Firm
            <span class="row-place">· Switzerland</span>
          </p>
          <p class="row-desc">
            Refactored their backend in Rust, rewrote internal tooling, reviewed Solidity contracts,
            and learned what it feels like to touch code that moves a lot of other people's money.
          </p>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2017–2018</div>
        <div>
          <p class="row-title">
            Backend / Frontend / Blockchain Intern, Deepit AG
            <span class="row-place">· Genoa</span>
          </p>
          <p class="row-desc">
            Smart contracts (Universal Login hooks, POA bridge rewrite for Compound cTokens),
            ERC-20 deployer frontends, vesting contracts, and PostgreSQL indexers.
          </p>
        </div>
      </li>
      <li class="row">
        <div class="row-when">2016–2017</div>
        <div>
          <p class="row-title">
            Embedded / Robotics Research, University of Genoa
            <span class="row-place">· Genoa</span>
          </p>
          <p class="row-desc">
            Small robotics tasks at 14: ROS, C++, Python, drone path-finding simulations in Unity/C#,
            and a speech-controlled robotic arm.
          </p>
        </div>
      </li>
    </ul>

    <h2>Tools</h2>
    <p>
      <b>Daily / senior level:</b> Go, Rust, Lean 4, C, C++, Python, Solidity, Bend 2, TypeScript, JavaScript.
    </p>
    <p>
      <b>Also used in anger:</b> arm64 / amd64 assembly, MDBX / LMDB, libp2p / devp2p, SSZ, Engine API,
      Kubernetes, Docker, Kurtosis, PostgreSQL, gRPC, Java, Scala, C#.
    </p>
  </div>
</template>
