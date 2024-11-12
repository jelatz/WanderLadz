<template>
    <div class="h-96 relative">
        <img :src="src" :alt="alt" class="w-full h-full object-fill" />
        <div class="absolute inset-y-40 inset-x-60">
            <h5 class="text-white text-4xl font-bold">
                {{ heroTitle }}
            </h5>
            <p class="text-white my-2">{{ heroSubtitle }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    heroTitle: {
        type: String,
        required: true,
    },
    heroSubtitle: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss" scoped></style>
