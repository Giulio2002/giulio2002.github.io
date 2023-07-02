<script setup lang="ts">

</script>

<template>
<br>

<div class="container">
    <div class="flex-item big centered">
        <br>
        <p class="bigggy centered">
            <img src="@/assets/smol.gif" alt="idk" class="inverted smol" />
             Stuff I do for fun
            <img src="@/assets/smol.gif" alt="idk" class="smol" />
        </p>
        <div class="text">
        <br>
        <h3>BLS go library.</h3>
        <br>
        Now this is an interesting one to start off. This repository has 150 daily downloads, is used by major projects such as Polygon and Solana (at the time of writing) as a dependency and
        it has only 3 stars on Github and it is one of the simplest library I have ever created. In a nutshell, it is just a wrapper of another go library but it makes operations more user friendly,
        by taking account of public key caching. This is by far my most successful and underestimated repository. it is absolutely wild how this came to be. I can genuenly make a supply chain attack and nobody 
        would notice (THIS IS A JOKE). Relevant repositories: <a href="https://github.com/Giulio2002/bls">bls</a>
        <br>
        <img class="normal" src="@/assets/bls.png" alt="lol"/>
        <br>
        <br>
        <h3>BSOL</h3>
        <br>
        BSOL is a go program, that tests performance of user-defined smart contracts within go-ethereum. you can just add Benchmark prefix to the
        smart contract and the method provided will be benchmarked by giving an estimate on how much that method takes in terms of time. I did this, so I could test
        if the extcodesize exploit was viable in Erigon or not. I made it public and some people apparently use it in production.
        <br>
        <br>
        <h3>GPT-Ask</h3>
        <br>
        I do not like using my web browser, so in order to make questions to chatgpt for code refactoring, code reviews, best practices, general questions, etc...
        I made a Rust program that does all of that via CLI. so by querying chatgpt API, I can ask question to ChatGPT to do stuff from my own terminal. It is written in
        Rust for no reason. I just wanted a challenge as this was arguably an easy project.
        Relevant repositories: <a href="https://github.com/Giulio2002/gpt-ask">gpt-ask</a>
        
        <br>
        <br>
        <h3>Whitebox fuzzing for EIP1962</h3>
        <br>
        In the early days of me interacting with Alexey Akhunov, he asked me if I could take a look at whitebox fuzzing for EIP1962,
        EIP1962 introduces a precompile, written in Rust, that allows for different variations of weistrass curves parameters so that you could do elliptic curves operations on any curve
        without having to introduce new precompiles all the time in Ethereum. this EIP got rejected because the more precompiles, the better. The original precompile code
        was written by MatterLabs. You can find my fuzzer <a href="https://github.com/Giulio2002/eip1962-whitebox">here</a>
        <br>
        <br>
        <h3>P2Perinik</h3>
        P2Perinik is a frankenstein monster, It had no purpose other than me having an excuse to learn new skills during winter break. It is
        infrastructure to allow for anonymous payments over a limited named address-space on Ethereum. Why do I call it a frankenstein monster?
        well... Frontend is written in C compiled to web-assembly, Backend is written in Golang, Contracts are written in Solidity and the glue that boots this bad boy up
        is Written in Python. so yes, a frankenstein monster indeed. Relevant repositories: <a href="https://github.com/Giulio2002/p2perinik">P2Perinik</a>
        <br>
        <br>
        <h3>RaidenJS</h3>
        When I was 15, I developed, for fun, A Javascript library that interacts with Raiden-Network servers. The original library was written in python but I needed it in
        JavaScript so I did this. It works fine, likely does not work anymore as I stopped maintaining it 5 years ago. but hey, it worked, you can even install it through
        npm. Relevant repositories: <a href="https://github.com/Giulio2002/Raidenjs">RaidenJS</a>
        <br>
        <br>

        <h3>Making a robotic arm move with speech recognition</h3>

        When I was 14 years old, I made a robotic arm move with speech recognition, this was actually a small research project with the
        University of Genoa, and what I did is I built the communication layer beetwen the ROS framework and the Robotic's arm firmware. I had to
        rewrite the pydobot library so that it was compatible with python 2.7 because ROS did not support python 3 at the time. then, I used google's speech
        recognition library to actually translate my speech to commands. The arm moved right when I said "right", and it moves "left" when I say left, etc...

        Relevant repositories: <a href="https://github.com/Giulio2002/pydobot-2.7">Pydobot2.7</a>, <a href="https://github.com/Giulio2002/rosdobot">Rosdobot</a>, <a href="https://github.com/Giulio2002/Talking-Dobot">Talking Dobot (Speech recognition)</a>,
        <a href="https://github.com/Giulio2002/Dobot-Controller-Android">Mobile application that made me control the robotic arm from far away.</a>
        <br><br>
        Cringe video:

        <br>
        <iframe width="280" height="158" src="https://www.youtube.com/embed/XTTXp1ja7Uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <br>
        <br>
        <h3> Open Source Contributions </h3>
        <br>
        <ul>
            <li><a href="https://github.com/ledgerwatch/erigon/commits?author=Giulio2002">Erigon</a>: Author of the Caplin Project, implemented Ethereum PoS, and much more...</li>
            <li><a href="https://github.com/torquem-ch/silkworm/commits?author=Giulio2002">Silkworm</a>: Implemented many of the currently existing syncing component and took care of ETL framework integration.</li>
            <li><a href="https://github.com/akula-bft/akula/commits?author=Giulio2002">Akula</a>: Implemented Akula JSON-RPC.</li>
            <li><a href="https://github.com/sigp/lighthouse/commits?author=Giulio2002">Lighthouse</a>: Partial implementation LightClient server in Lighthouse.</li>
            <li><a href="https://github.com/UniLogin/UniLogin/commit/8314ceefaf79c8d667ec4c270b9f30cf3397e273">Universal Login</a>: Randomly fixed a major vulnerability in their backend.</li>
            <li><a href="https://github.com/raiden-network/raiden/commit/4431d0625383fead13069abd7186799911868014">Raiden Network</a>: They did not check if an account had enough money to make a transaction... good lord</li>
        </ul>

        <br>
        <br>
        <h3> Honorable mentions </h3>
        <br>
        <ul>
        <li><a href="https://github.com/Giulio2002/Contracts-Axios">Axios</a>: Axios is an option trading instrument that allows
        for decentralised options trading. it works, I have to say, it has no real use but it is a cool enough project. it has even its own User interface written in
        Angular. I built Axios to learn how to do engineering in the field of financial instruments.</li>
        <li><a href="https://github.com/Giulio2002/my-formal-verifications">Bunch of formal verification</a>: Practiced formal verification.</li>
        <li><a href="https://github.com/Giulio2002/Lock-Module">Vesting for UniversalLogin protocol</a>: Vesting hook for universal login.</li>
        <li><a href="https://github.com/Giulio2002/Ethereum-Taxable-Token">Ethereum Taxable token</a>: A token that every time is transfered takes account of a tax and take a percentage of the amount transferred.</li>
    </ul>
        

    </div>

  </div>
</div>
</template>

