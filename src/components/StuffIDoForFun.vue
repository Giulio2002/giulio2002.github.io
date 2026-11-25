<script setup lang="ts">
import smol from '@/assets/smol.gif'
</script>

<template>
  <div>
    <h1 class="page-title">
      <span>Stuff I do for fun</span>
      <img :src="smol" alt="" aria-hidden="true" class="tiny-gif" />
    </h1>
    <p class="lead">Side projects, smaller tools, and older experiments.</p>

    <article class="entry">
      <div class="entry-head">
        <h3>ETH Zürich</h3>
        <span class="entry-meta">student &amp; guest lecturer</span>
      </div>
      <p>
        I'm a student at ETH Zürich (distributed LLM training on the CSCS Alps GH200 supercomputer,
        probabilistic AI, applied security). I also gave a guest lecture there in D-MTEC (Spring
        2025) on Ethereum protocol engineering and consensus design. Slightly surreal to lecture in
        the same building where you sit exams.
      </p>
      <div class="entry-links">
        <a href="https://video.ethz.ch/lectures/d-mtec/2025/spring/363-1153-00L/v/AHfV4Bsjf6m" target="_blank" rel="noopener">
          Watch the lecture
        </a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>claude-rotate</h3>
        <span class="entry-meta">Python · 2026</span>
      </div>
      <p>
        When you run formal-verification agent factories all day, you hit usage limits quickly.
        Wrote a small Python CLI and daemon that watches Claude Code usage windows and switches
        between subscriptions before one caps out.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/claude-rotate" target="_blank" rel="noopener">claude-rotate</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>Bend 2 tooling (bend-vscode &amp; bend-build)</h3>
        <span class="entry-meta">JavaScript · 2026</span>
      </div>
      <p>
        When Bend 2 came out I needed editor diagnostics and a single-file guide for AI agents
        writing Bend, so I made <code>bend-vscode</code> (syntax highlighting, autocomplete,
        compiler diagnostics, icons) and <code>bend-build</code>.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/bend-vscode" target="_blank" rel="noopener">bend-vscode</a>
        <a href="https://github.com/Giulio2002/bend-build" target="_blank" rel="noopener">bend-build</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>BSOL</h3>
        <span class="entry-meta">Go</span>
      </div>
      <p>
        A Go tool that benchmarks Solidity contract methods inside go-ethereum: prefix a method with
        <code>Benchmark</code> and it estimates runtime. I originally wrote it to test whether the
        <code>extcodesize</code> exploit was viable in Erigon, made it public, and apparently people
        use it in production.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/bsol" target="_blank" rel="noopener">bsol</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>gpt-ask</h3>
        <span class="entry-meta">Rust</span>
      </div>
      <p>
        I don't like leaving my terminal, so I wrote a Rust CLI to query the ChatGPT API for code
        reviews, refactoring, and quick questions from the shell. Written in Rust mostly for the
        sake of making an easy project harder.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/gpt-ask" target="_blank" rel="noopener">gpt-ask</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>Whitebox fuzzing for EIP-1962</h3>
        <span class="entry-meta">Rust</span>
      </div>
      <p>
        Early on while working with Alexey Akhunov, he asked me to look at whitebox fuzzing for
        EIP-1962 (Matter Labs' precompile for arbitrary Weierstrass curves). The EIP got rejected,
        but the fuzzer was fun to build.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/eip1962-whitebox" target="_blank" rel="noopener">eip1962-whitebox</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>RaidenJS</h3>
        <span class="entry-meta">JavaScript · age 15</span>
      </div>
      <p>
        At 15 I wrote a JavaScript library to talk to Raiden-Network servers because the official
        one was Python and I needed JS. Unmaintained for years and almost certainly broken now, but
        it worked and is still on npm.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/Raidenjs" target="_blank" rel="noopener">RaidenJS</a>
      </div>
    </article>

    <article class="entry">
      <div class="entry-head">
        <h3>Voice-controlled robotic arm</h3>
        <span class="entry-meta">Python, ROS · age 14</span>
      </div>
      <p>
        Small research project at the University of Genoa at 14: wrote the communication layer
        between ROS and a Dobot arm's firmware (porting <code>pydobot</code> to Python 2.7 because
        ROS did not support Python 3 yet), then hooked up Google speech recognition. Say "right", it
        goes right. Say "left", it goes left.
      </p>
      <div class="entry-links">
        <a href="https://github.com/Giulio2002/pydobot-2.7" target="_blank" rel="noopener">pydobot-2.7</a>
        <a href="https://github.com/Giulio2002/rosdobot" target="_blank" rel="noopener">rosdobot</a>
        <a href="https://github.com/Giulio2002/Talking-Dobot" target="_blank" rel="noopener">Talking-Dobot</a>
        <a href="https://github.com/Giulio2002/Dobot-Controller-Android" target="_blank" rel="noopener">Android controller</a>
      </div>
      <p class="note" style="margin:12px 0 4px">Cringe video, for the record:</p>
      <iframe
        width="280"
        height="158"
        src="https://www.youtube.com/embed/XTTXp1ja7Uw"
        title="Voice-controlled robotic arm demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </article>

    <h2>Open-source contributions</h2>
    <ul>
      <li>
        <a href="https://github.com/ethereum/EthLib/pulls?q=is%3Apr+author%3AGiulio2002" target="_blank" rel="noopener">EthLib</a>:
        287 merged PRs in Lean 4 (EVM program logic, EIP-7702, MODEXP, BLS12-381, alt_bn128, consensus).
      </li>
      <li>
        <a href="https://github.com/erigontech/erigon/commits?author=Giulio2002" target="_blank" rel="noopener">Erigon</a>:
        1,160+ commits; Caplin, Ethereum PoS (The Merge), SSZ Engine API, storage, networking.
      </li>
      <li>
        <a href="https://github.com/ethereum/go-ethereum/pulls?q=is%3Apr+author%3AGiulio2002" target="_blank" rel="noopener">go-ethereum</a>:
        EIP-7939 (CLZ opcode) and Amsterdam tx gas-cap updates.
      </li>
      <li>
        <a href="https://github.com/bendlang/bend/pulls?q=is%3Apr+author%3AGiulio2002" target="_blank" rel="noopener">Bend 2</a>:
        compiler and codegen bug fixes.
      </li>
      <li>
        <a href="https://github.com/erigontech/silkworm/commits?author=Giulio2002" target="_blank" rel="noopener">Silkworm</a>:
        syncing components and ETL framework integration.
      </li>
      <li>
        <a href="https://github.com/akula-bft/akula/commits?author=Giulio2002" target="_blank" rel="noopener">Akula</a>:
        first Rust Ethereum JSON-RPC layer.
      </li>
      <li>
        <a href="https://github.com/sigp/lighthouse/commits?author=Giulio2002" target="_blank" rel="noopener">Lighthouse</a>:
        partial light-client server implementation.
      </li>
      <li>
        <a href="https://github.com/UniLogin/UniLogin/commit/8314ceefaf79c8d667ec4c270b9f30cf3397e273" target="_blank" rel="noopener">Universal Login</a>:
        fixed a major backend vulnerability.
      </li>
      <li>
        <a href="https://github.com/raiden-network/raiden/commit/4431d0625383fead13069abd7186799911868014" target="_blank" rel="noopener">Raiden Network</a>:
        they were not checking if an account had enough money to make a transaction... good lord.
      </li>
    </ul>

    <h2>Honorable mentions</h2>
    <ul>
      <li>
        <a href="https://github.com/Giulio2002/Contracts-Axios" target="_blank" rel="noopener">Axios</a>:
        decentralized options-trading instrument with an Angular UI; no real use, built to learn financial instrument engineering.
      </li>
      <li>
        <a href="https://github.com/Giulio2002/my-formal-verifications" target="_blank" rel="noopener">my-formal-verifications</a>:
        early EVM formal verification experiments from 2019.
      </li>
      <li>
        <a href="https://github.com/Giulio2002/Lock-Module" target="_blank" rel="noopener">Lock-Module</a>:
        vesting hook for Universal Login.
      </li>
      <li>
        <a href="https://github.com/Giulio2002/Ethereum-Taxable-Token" target="_blank" rel="noopener">Ethereum-Taxable-Token</a>:
        ERC-20 that takes a tax on every transfer.
      </li>
    </ul>
  </div>
</template>
