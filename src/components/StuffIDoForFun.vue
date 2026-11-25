<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
<div class="page">
  <div class="container">
    <div class="flex-item big">
      <PageHeader title="Stuff I do for fun" gif="smol">Side quests, toys, and things I built because I felt like it.</PageHeader>

      <div class="card headline">
        <h3>ETH Zürich <span class="pill live">student + guest lecturer</span></h3>
        <p>
          I'm a student at <b>ETH Zürich</b> (working on things like distributed LLM training on the
          CSCS Alps GH200 supercomputer, probabilistic AI, and applied security). I also got to flip
          the lecture hall around: I gave a guest lecture there (D-MTEC, Spring 2025) on Ethereum
          protocol engineering and consensus design. Slightly surreal to teach in a room you also
          sit exams in.
        </p>
        <a href="https://video.ethz.ch/lectures/d-mtec/2025/spring/363-1153-00L/v/AHfV4Bsjf6m"
           target="_blank" rel="noopener">Watch my ETH Zürich lecture →</a>
      </div>

      <div class="card">
        <h3>claude-rotate</h3>
        <p>
          When you run formal-verification agent factories all day, you burn through usage windows
          fast. So I wrote a Python CLI &amp; daemon that watches Claude Code usage windows and
          automatically rotates between subscriptions before one hits its limit.
        </p>
        <a href="https://github.com/Giulio2002/claude-rotate" target="_blank" rel="noopener">claude-rotate →</a>
      </div>

      <div class="card">
        <h3>Bend 2 DX — bend-vscode &amp; bend-build</h3>
        <p>
          When Bend 2 dropped I jumped straight in — and immediately missed editor tooling and
          agent guidelines. So I built <code>bend-vscode</code> (syntax highlighting, autocomplete,
          compiler diagnostics, icons) and <code>bend-build</code> (a single-file playbook for AI
          models writing efficient, proved Bend software).
        </p>
        <div class="project-links">
          <a href="https://github.com/Giulio2002/bend-vscode" target="_blank" rel="noopener">bend-vscode →</a>
          <a href="https://github.com/Giulio2002/bend-build" target="_blank" rel="noopener">bend-build →</a>
        </div>
      </div>

      <div class="card">
        <h3>BSOL</h3>
        <p>
          A Go program that benchmarks user-defined smart contracts inside go-ethereum: prefix a
          contract method with <code>Benchmark</code> and it estimates how long that method
          takes. I built it to check whether the <code>extcodesize</code> exploit was viable in
          Erigon. Made it public — apparently some people now use it in production.
        </p>
        <a href="https://github.com/Giulio2002/bsol" target="_blank" rel="noopener">bsol →</a>
      </div>

      <div class="card">
        <h3>gpt-ask</h3>
        <p>
          I don't like leaving my terminal, so I wrote a Rust CLI that queries the ChatGPT API
          for code refactoring, reviews, best practices, and general questions — all from the
          shell. Written in Rust for no reason other than wanting a challenge on an otherwise
          easy project.
        </p>
        <a href="https://github.com/Giulio2002/gpt-ask" target="_blank" rel="noopener">gpt-ask →</a>
      </div>

      <div class="card">
        <h3>Whitebox fuzzing for EIP-1962</h3>
        <p>
          Early in my time working with Alexey Akhunov, he asked me to look at whitebox fuzzing
          for EIP-1962 — a precompile (originally by Matter Labs) for elliptic-curve operations
          over arbitrary Weierstrass curve parameters, so you wouldn't need a new precompile
          every time. The EIP was ultimately rejected, but the fuzzer was fun.
        </p>
        <a href="https://github.com/Giulio2002/eip1962-whitebox" target="_blank" rel="noopener">
          eip1962-whitebox →</a>
      </div>

      <div class="card">
        <h3>RaidenJS</h3>
        <p>
          At 15 I wrote a JavaScript library to talk to Raiden-Network servers. The original was
          in Python; I needed JS, so I made it. Hasn't been maintained in years and probably
          doesn't work anymore — but it worked, and you can still install it from npm.
        </p>
        <a href="https://github.com/Giulio2002/Raidenjs" target="_blank" rel="noopener">RaidenJS →</a>
      </div>

      <div class="card">
        <h3>Moving a robotic arm with my voice</h3>
        <p>
          At 14, as part of a small research project at the University of Genoa, I made a robotic
          arm move on voice command. I built the communication layer between ROS and the arm's
          firmware — which meant rewriting the <code>pydobot</code> library for Python 2.7
          (ROS didn't support Python 3 yet) — then wired in Google's speech recognition. Say
          "right", it goes right. Say "left", it goes left.
        </p>
        <div class="tags">
          <a class="tag" href="https://github.com/Giulio2002/pydobot-2.7" target="_blank" rel="noopener">pydobot-2.7</a>
          <a class="tag" href="https://github.com/Giulio2002/rosdobot" target="_blank" rel="noopener">rosdobot</a>
          <a class="tag" href="https://github.com/Giulio2002/Talking-Dobot" target="_blank" rel="noopener">Talking-Dobot</a>
          <a class="tag" href="https://github.com/Giulio2002/Dobot-Controller-Android" target="_blank" rel="noopener">Android controller</a>
        </div>
        <p style="margin-top:14px">Cringe video, for the historical record:</p>
        <iframe width="280" height="158"
          src="https://www.youtube.com/embed/XTTXp1ja7Uw"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>

      <div class="card">
        <h3>Open-source contributions</h3>
        <ul>
          <li><a href="https://github.com/ethereum/EthLib/pulls?q=is%3Apr+author%3AGiulio2002" target="_blank" rel="noopener">EthLib</a>
            — #2 contributor (287 merged PRs): Lean 4 proofs for EVM program logic, EIP-7702, MODEXP, BLS12-381, alt_bn128, and consensus.</li>
          <li><a href="https://github.com/erigontech/erigon/commits?author=Giulio2002" target="_blank" rel="noopener">Erigon</a>
            — 1,160+ commits; creator of Caplin, implemented Ethereum PoS (The Merge), SSZ Engine API, and much more.</li>
          <li><a href="https://github.com/ethereum/go-ethereum/pulls?q=is%3Apr+author%3AGiulio2002" target="_blank" rel="noopener">go-ethereum</a>
            — implemented EIP-7939 (CLZ opcode) and Amsterdam tx gas-cap updates.</li>
          <li><a href="https://github.com/bendlang/bend/pulls?q=is%3Apr+author%3AGiulio2002" target="_blank" rel="noopener">Bend 2</a>
            — compiler correctness &amp; codegen bug fixes.</li>
          <li><a href="https://github.com/erigontech/silkworm/commits?author=Giulio2002" target="_blank" rel="noopener">Silkworm</a>
            — implemented several still-existing syncing components and ETL framework integration.</li>
          <li><a href="https://github.com/akula-bft/akula/commits?author=Giulio2002" target="_blank" rel="noopener">Akula</a>
            — implemented the first Rust Ethereum JSON-RPC layer.</li>
          <li><a href="https://github.com/sigp/lighthouse/commits?author=Giulio2002" target="_blank" rel="noopener">Lighthouse</a>
            — partial light-client server implementation.</li>
          <li><a href="https://github.com/UniLogin/UniLogin/commit/8314ceefaf79c8d667ec4c270b9f30cf3397e273" target="_blank" rel="noopener">Universal Login</a>
            — fixed a major backend vulnerability.</li>
          <li><a href="https://github.com/raiden-network/raiden/commit/4431d0625383fead13069abd7186799911868014" target="_blank" rel="noopener">Raiden Network</a>
            — they weren't checking whether an account had enough money to make a transaction… good lord.</li>
        </ul>
      </div>

      <div class="card">
        <h3>Honorable mentions</h3>
        <ul>
          <li><a href="https://github.com/Giulio2002/Contracts-Axios" target="_blank" rel="noopener">Axios</a>
            — a decentralized options-trading instrument with its own Angular UI. No real use, but
            a cool project; I built it to learn engineering for financial instruments.</li>
          <li><a href="https://github.com/Giulio2002/my-formal-verifications" target="_blank" rel="noopener">Formal verifications (2019)</a>
            — where the formal-verification itch originally started, back in high school.</li>
          <li><a href="https://github.com/Giulio2002/Lock-Module" target="_blank" rel="noopener">Vesting for Universal Login</a>
            — a vesting hook for the Universal Login protocol.</li>
          <li><a href="https://github.com/Giulio2002/Ethereum-Taxable-Token" target="_blank" rel="noopener">Taxable token</a>
            — an ERC-20 that skims a tax on every transfer.</li>
        </ul>
      </div>

    </div>
  </div>
</div>
</template>
