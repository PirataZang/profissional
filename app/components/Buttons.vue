<template>
    <button :class="[`button`, customClass]">
        <span :class="size" v-html="label"></span>
    </button>
</template>

<script>
export default {
    name: 'Buttons',

    props: {
        label: {
            type: String,
            required: true
        },
    },

    customClass: {
        type: String,
        default: ''
    },

    size: {
        type: String,
        default: 'text-lg'
    }
}
</script>



<style lang="scss"> 
    .button{
       border: 2px solid white; 
       border-radius: 50px;
       width: max-content;
       padding: 10px 15px;
       transition: all 0.3s ease;
    }

</style>