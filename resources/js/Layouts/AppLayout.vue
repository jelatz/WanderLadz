<template>
    <Nav />
    <div>
        <slot />
    </div>
    <Footer />
</template>

<script setup>
import Nav from "@/js/Layouts/Nav.vue";
import Footer from "@/js/Layouts/Footer.vue";
</script>

<style lang="scss" scoped></style>
