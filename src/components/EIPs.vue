<script setup lang="ts">

</script>

<template>
<br>

<div class="container">
    <div class="flex-item big centered">
        <br>
        <p class="bigggy centered">
            <img src="@/assets/rey.gif" alt="idk" class="inverted smol" />
            Giulio Rebuffo's EIPs
            <img src="@/assets/rey.gif" alt="idk" class="smol" />
        </p>
        <div class="text">
        <br>
        Below are the Ethereum Improvement Proposals (EIPs) authored by Giulio Rebuffo:
        <br>
        <br>

        <h3>EIP-7783: Add Controlled Gas Limit Increase Strategy</h3>
        <p>
            <b>Published:</b> October 6, 2024<br>
            <b>Summary:</b> Proposes a mechanism for clients to gradually increase the block gas limit over time. The rationale is to responsibly handle increases in gas limit without destabilizing the network. This strategy allows for systematic adjustments without requiring a hard fork.
            <a href="https://eips.ethereum.org/EIPS/eip-7783" target="_blank">Read more</a>
        </p>

        <br>

        <h3>EIP-7801: etha - Sharded Blocks Subprotocol</h3>
        <p>
            <b>Published:</b> November 2024<br>
            <b>Summary:</b> Introduces a new subprotocol, 'etha', enabling Ethereum nodes to communicate available block spans via a bitmask. Each bit represents a 100,000-block span within each 1,000,000 block range of chain history. The rationale is to facilitate more efficient data synchronization among nodes and make EIP-4444s a reality. This EIP is slated for inclusion in future updates.
            <a href="https://eips.ethereum.org/EIPS/eip-7801" target="_blank">Read more</a>
        </p>

        <br>

        <h3>EIP-7825: Transaction Gas Limit Cap</h3>
        <p>
            <b>Published:</b> November 2024<br>
            <b>Summary:</b> Proposes enforcing a protocol-level maximum of 30 million gas for any single transaction. The rationale is to limit the worst-case scenario for a transaction, ensuring consistency and preventing excessively large transactions that could impact network performance.
            <a href="https://eips.ethereum.org/EIPS/eip-7825" target="_blank">Read more</a>
        </p>

        </div>
    </div>
</div>
</template>
