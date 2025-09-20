<template>
    <button v-if="!href" :class="[`button`, type, (customClass || bg)]">
        <span :class="size" v-html="label"></span>
    </button>

    <a v-else :href="href" target="_blank" :class="[`button`, type, customClass]">
        <span :class="size" v-html="label"></span>
    </a>
</template>

<script>
export default {
    name: 'Button',

    props: {
        label: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            default: 'circle',
        },

        bg: {
            type: String,
            default: 'bg-blue-500 text-white',
        },

        href: {
            type: String,
            default: '',
        },

        customClass: {
            type: String,
            default: '',
        },
    },

    size: {
        type: String,
        default: 'text-lg',
    },
}
</script>

<style lang="scss">
.button {
    width: max-content;
    padding: 10px 15px;
    transition: all 0.3s ease;
    box-shadow: inset 1px 3px 10px 0px rgba(0, 0, 0, 0.144);

    &:hover {
        box-shadow: inset 1px 3px 10px 0px rgb(0, 0, 0);
    }

    &:active {
        transform: scale(0.92);
    }
}

.circle {
    border-radius: 100px;
}

.square {
    border-radius: 7px;
}
</style>
