<template>
    <Head title="| Home" />
    <div>
        <Hero
            :src="apo"
            alt="hero"
            heroTitle="This is the title"
            heroSubtitle="This is the subtitle"
        />
        <main>
            <div class="container my-2">
                <div class="grid grid-cols-3 gap-4">
                    <div class="bg-red-500">1</div>
                    <div class="bg-blue-500">2</div>
                    <div class="bg-green-500">3</div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import Hero from "@/js/Components/Hero.vue";
import apo from "@/assets/images/apo.jpg";
</script>

<style lang="scss" scoped></style>
