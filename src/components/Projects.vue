<script setup lang="ts">

</script>

<template>
<br>

<div class="container">
    <div class="flex-item big centered">
        <br>
        <p class="bigggy centered">
            <img src="@/assets/sus.webp" alt="idk" class="inverted smol" />
            My Feats
            <img src="@/assets/sus.webp" alt="idk" class="smol" />
        </p>
        <div class="text">
        <br>
        Oke so these are my feats (highlights of the work stuff I have done) in order on how suicidal they made me.
        <br>
        <br>
        <h3>Developed the "PoS" implementantion in the Erigon Client</h3>
        <br>
        <br>
        When I was still a Junior in the Erigon team, I was tasked with developing "The Merge", which is pretty much
        the Ethereum PoS implementation for the Execution Layer. It was mostly a solo work, I worked with a Senior and another Junior
        but I ended up doing most of the work. So, the skills I learnt were pretty much management of high levels of stress, responsability management.
        It was mostly a test of stress and patience. 
        <br><br>
        These are the things I have done from a technical standpoint, and what I learnt from this experience:
        <br>
        <ul>
            <li>Resurrected Erigon transaction pool (it did not work before): Learnt how Ethereum transaction pool works.</li>
            <li>Engine API Implementation: I learnt how consensus-based distributed systems works from an archittectural standpoint.</li>
            <li>Implemented Management system for different EL states: Learnt how execution of transactions works and how to CoW(copy on write) ethereum states</li>
            <li>Learnt how to work with people with different backgrounds(<b>but not incompetent</b>): I worked with different client teams so I worked with people with very diverse worldviews than mine(ex-Googlers, ex-Ivy students, and more)</li> 
        </ul>
    
    <br>
    <br>
    <h3>Developed an entire Consensus Client by myself because why not? </h3>
    <br>
    <br>
    I decided to create an entire Consensus Layer for the Erigon project because I did not like how other Consensus Layers operates,
    at the beggining it was just a Consensus LightClient but there were not enough LightClient servers running on Ethereum mainnet so I gave up and went for the full thing.
    Most of the work was done by myself, because needing 10 developers for a Consensus Layer (like most consensus layers do) is a <b>Skill issue if you ask me</b> (this is irony). the Consensus Layer, (at least the first prototype) was completed over the course of 9 months (including the time it took me for the lightclient).
    At the time of the writting, I am the Project Lead (I have not been fired yet :D) and I brought another Company's man-power to help so I also have sufficient social skills to
    bring meaningful partnerships, whether you like it or not.
    <br><br>
    These are the things I have done from a technical standpoint, and what I learnt from this experience:
    <br>
    <ul>
        <li>Learnt inner working of Ethereum 2.0 consensus: Learnt how Ethereum Consensus works.</li>
        <li>Memory management for distributed systems: Learnt how to manage and cache data efficiently in distributed systems.</li>
        <li>Profiling: Learnt how to optimize CPU and Heap memory using profilers.</li>
        <li>DevOps Skills: I learnt basic devops skills from a colleague which wants to stay anon. most notably: Kubernetes.</li> 
    </ul>

    <br>
    <br>
    <h3>Robotics oriented research at University of Genoa. </h3>
    <br>
    <br>
    When I was 14 years old, I became an unpaid slave at the University of Genoa, which is in Italy. I did various works in the fields of robotic.
    I was able to use speech recognition to control a robotic arm. I also was able to generate a path finding algorithm for drone path recognition.
    I also worked with a framework called ROS, so I have some experience with math concepts from that world. I also contributed to embedded system research.
    I also used the Unity engine for simulating the drones movement (although I am not that proficient using it). I decided that Academia was not my vocation
    because it underpays you.
    <br><br>
    These are the things I have done from a technical standpoint, and what I learnt from this experience:
    <br>
    <ul>
        <li>Unity framework and C#: I built similutations in C#.</li>
        <li>Inner workings of how embedded systems work.</li>
        <li>How academic research works: It was with an university.</li>
    </ul>

    <br>
    <br>
    <h3>Bridge Development at unnamed L0 firm in Switzerland. </h3>
    <br>
    <br>
    I worked at an Asset-Bridging firm in Switzerland(L0). I built part of their new version for the Backend (in Rust), refactored their code
    and Implemented calldata passing to their solidity smart contracts. Lastly, I reviewed/audited some of their Solidity
    smart contracts and built extensively in Rust on their Backend.
    <br><br>
    These are the things I have done from a technical standpoint, and what I learnt from this experience:
    <br>
    <ul>
        <li>Rust: First time I used Rust.</li>
        <li>Code refactoring: That thing had more duplications than there are in the genetic code of wildlife near Nagasaki.</li>
        <li>Money Management: They had a lot of money from customers.</li>
    </ul>


    <br>
    <br>
    <h3> Implemented JSON-RPC in Akula (Rust Ethereum Client) </h3>
    <br>
    <br>
        I implemented the JSON-RPC interface in Akula before it got closed. I implemented the jsonrpc interface according to the Ethereum specs
        and introduced an easy way to implement new methods in it. This means I have experience with Ethereum underlying json APIs.

        <ul>
            <li>I know how Ethereum jsonrpc API works: I built them in Rust.</li>
            <li>More proficiency in Rust: I am more proficient in Rust.</li>
        </ul>
    <br>
    <br>


    <h3>Protyped and Implemented Pre-sorting of data before database insertion framework in Go, Rust and C++ </h3>
    <br>
    <br>
    I implemented a system that inserts data in sequential order given data in random order of efficient insertion in B-Tree
    based Databases. Simple implementation of External merge sorting with an heap, not much to stay but it improved writting overhead in our databases.
    <br><br>
    These are the things I have done from a technical standpoint, and what I learnt from this experience:
    <br>
    <ul>
        <li>How to design a framewok: I literally design it</li>
        <li>Databases design: Learnt about Database designs</li>
    </ul>
    </div>

  </div>  
</div>
</template>

