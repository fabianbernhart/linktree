<script setup lang="ts"></script>

<template>
    <header>Beta Version</header>
    <main>
        <section id="profile-section">
            <figure>
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            </figure>
            <figcaption class="caption-title">Fabian</figcaption>
            <figcaption class="caption-subtitle">Software Developer 🧑‍💻</figcaption>
        </section>
        <section id="list-actions">
            <list-component :items="listItems" />
        </section>
        <section id="application-icons"></section>
    </main>
</template>

<script lang="ts">
import ListComponent from './components/list/ListComponent.vue'
export default {
    components: { ListComponent },
    name: 'App',
    data: () => ({
        listItems: ['LinkedIn', 'XING', 'THIS IS JUST A BETA'] as string[]
    })
}
</script>

<style scoped>
.logo {
    display: block;
    margin: 0 auto 0.5rem;
    border-radius: 20;
    border-color: red;
    border-radius: 100px;
    background: #73ad21;
}

section {
    margin-top: 0.5rem;
}

figcaption {
    display: block;
    text-align: center;
}

.caption-title {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
}

.caption-subtitle {
    font-size: 1rem;
    color: #fff;
    font-weight: bolder;
}

.app-header {
    position: sticky;
    font-size: 1rem;
}
</style>
