<template>
    <div class="item-container"
    >
        <div class="item"
            v-for="(item, index) in items"
            :key="index"
            @click="openLinkNewTab(item.link)"
            @mouseenter="changeHovered(item, true)"
            @mouseleave="changeHovered(item, false)"
        >  
            <slot name="prepend-icon" v-if="item.prependIcon != undefined">
                <fb-icon :color="changeIconColor(item)" :name="item.prependIcon"></fb-icon>
            </slot>
            

            {{ item.name }}

            <slot name="append-icon" v-if="item.appendIcon">
                <fb-icon :color="changeIconColor(item)" :name="item.appendIcon"></fb-icon>
            </slot>
        </div>
    </div>
</template>
<script lang="ts">
import type { PropType } from 'vue';

export interface ListItem  {
    name: string,
    link: string,
    prependIcon?: string,
    appendIcon?: string,
    _hover: boolean,
}
export default {
    name: 'ListComponent',
    props: {
        items: {
            type: Array as PropType<ListItem[]>,
            required: true
        }
    },
    methods: {
        openLinkNewTab(link: string): Window | null {
            return window.open(link, '_blank');    
        },
        changeHovered(item: ListItem, status: boolean): void {
            item._hover = status;
        },
        changeIconColor(item: ListItem): "#fff" | "#000" {
            const black = "#000";
            const white = "#fff";

            if (item._hover == false) return black
            return white
        },
    },
}
</script>

<style lang="scss" scoped>

$transition-duration: 0.25s;
$transition-timing-function: cubic-bezier(0.08, 0.59, 0.29, 0.99);

@function transition($properties...) {
  $transition-list: ();
  @each $property in $properties {
    $transition-list: append($transition-list, $property $transition-duration $transition-timing-function, comma);
  }
  @return $transition-list;
}

.item {
    cursor: pointer;
    transition: transition(box-shadow, border-color, transform, background-color);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto 1rem;
    border-radius: 20;
    border-radius: 100px;
    background: #fff;
    color: #000;
    height: 4rem;
    max-width: 70vw;
}

.item:hover {
    background: #000;
    color: #fff;
    border: 0.15rem solid #fff;
}
</style>
