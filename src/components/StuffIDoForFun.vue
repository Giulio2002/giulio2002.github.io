<script setup lang="ts">

</script>

<template>
<br>

<div class="container">
    <div class="flex-item big centered">
        <br>
        <p class="bigggy centered">
            <img src="@/assets/smol.gif" alt="idk" class="inverted smol" />
             Stuff I do for fun (Ranked in no particular order)
            <img src="@/assets/smol.gif" alt="idk" class="smol" />
        </p>
        <div class="text">
        <br>
        <h3>Whitebox fuzzing for EIP1962</h3>
        <br>
        In the early days of me interacting with Alexey Akhunov, he asked me if I could take a look at whitebox fuzzing for EIP1962,
        EIP1962 introduces a precompile, written in Rust, that allows for different variations of weistrass curves parameters so that you could do elliptic curves operations on any curve
        without having to introduce new precompiles all the time in Ethereum. this EIP got rejected because the more precompiles, the better. The original precompile code
        was written by MatterLabs. You can find the my fuzzer <a href="https://github.com/Giulio2002/eip1962-whitebox">here</a>
        <br>
        <br>
        <h3>P2Perinik</h3>
        P2Perinik is a frankenstein monster, It had no purpose other than me having an excuse to learn new skills during winter break. It is
        infrastructure to allow for anonymous payments over a limited named address-space on Ethereum. Why do I call it a frankenstein monster?
        well... Frontend is written in C compiled to web-assembly, Backend is written in Golang, Contracts are written in solidity and the glue that starts this bad boy up
        is written in Python. so yes, a frankenstein monster indeed. Relevant repositories: <a href="https://github.com/Giulio2002/p2perinik">P2Perinik</a>
        <br>
        <br>
        <h3>RaidenJS</h3>
        When I was 15, I developed, for fun, A Javascript library that interacts with Raiden-Network servers. The original library was written in python but I needed it in
        JavaScript so I did this. It works fine, likely does not work anymore as I stopped maintaining it 5 years ago. but hey, it worked, you can even install it through
        npm. Relevant repositories: <a href="https://github.com/Giulio2002/Raidenjs">RaidenJS</a>
        <br>
        <br>

        <h3>Making robotic arm move with speech recognition</h3>

        When I was 14 years old, I made a robotic arm move with speech recognition, this was actually a small research project with the
        University of Genoa, and what I did is I built the communication layer beetwen the ROS framework and the Robotic's arm firmware. I had to
        rewrite the pydobot library so that it was compatible with python 2.7 because ROS did not support python 3 at the time. then, I used google's speech
        recognition framework to actually translate my speech to commands. The arm moved right when I said "right", and it moves "left" when I say left, etc...

        Relevant repositories: <a href="https://github.com/Giulio2002/pydobot-2.7">Pydobot2.7</a>, <a href="https://github.com/Giulio2002/rosdobot">Rosdobot</a>, <a href="https://github.com/Giulio2002/Talking-Dobot">Talking Dobot (Speech recognition)</a>,
        <a href="https://github.com/Giulio2002/Dobot-Controller-Android">Mobile application that made me control the robotic arm from far away.</a>
        <br><br>
        Cringe video:

        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XTTXp1ja7Uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
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
        </ul>
        

    </div>

  </div>
</div>
</template>

