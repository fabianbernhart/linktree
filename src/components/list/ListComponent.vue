<template>
    <div class="item-container">
        <div class="item" v-for="(item, index) in items" :key="index">
            {{ item }}
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'ListComponent',
    props: {
        items: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.checkItems()
    },
    methods: {
        checkItems() {}
    }
}
</script>

<style scoped>
.item {
    transition:
        box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99),
        border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99),
        transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99),
        background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1rem;
    border-radius: 20;
    border-radius: 100px;
    background: #fff;
    color: #000;
    text-align: center;
    height: 4rem;
    max-width: 70vw;
}

.item:hover {
    background: #000;
    color: #fff;
    border: 0.15rem solid #fff;
}
</style>
