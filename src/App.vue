<template>
    <header>Beta Version (Focus on Mobile)</header>
    <main>
        <section id="profile-section">
            <figure>
                <img alt="Vue logo" class="logo" :src="profilePictureUrl" width="125" height="125" />
            </figure>
            <figcaption class="caption-title">Fabian</figcaption>
            <figcaption class="caption-subtitle">Software Developer 🧑‍💻</figcaption>
        </section>
        <section id="list-actions">
            <fb-list :items="listItems" />
        </section>
    </main>
</template>

<script lang="ts">

import {type ListItem} from "@/components/list/vue-list.vue";


export default {
    name: 'App',
    data: () => ({
        listItems: [
            {
                name: "Portfolio (under Construction)",
                link: "https://www.github.com/fabianbernhart",
                prependIcon: "mdi-web",
            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/fabianbernhart/",
                prependIcon: "mdi-linkedin"
            },
            {
                name: "Github",
                link: "https://www.github.com/profile/fabianbernhart",
                prependIcon: "mdi-github"
            },
            {
                name: "Xing",
                link: "https://www.xing.com/profile/Fabian_Bernhart",
                prependIcon: "mdi-account",
            },
            {
                name: "Gitlab (inactive)",
                link: "https://www.github.com/profile/fabianbernhart",
                prependIcon: "mdi-gitlab",
            },
        ] as ListItem[],
        profilePictureUrl: "https://profile-images.xing.com/images/3d533a455b8a5533cb8e76a60f906061-1/fabian-bernhart.1024x1024.jpg",
    })
}
</script>

<style scoped>
.logo {
    display: block;
    margin: 0 auto 0.5rem;
    border-radius: 20;
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
