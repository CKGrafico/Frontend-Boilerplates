<template>
    <section class="p-wizard">
        <avatar class="p-wizard-avatar" :eyes="selectedEyes" :nose="selectedNose" :mouth="selectedMouth" :color="selectedColor" />

        <div class="p-wizard-controls">
            <choicer :items="faceParts.eyes" v-model="selectedEyes" />
            <choicer :items="faceParts.nose" v-model="selectedNose" />
            <choicer :items="faceParts.mouth" v-model="selectedMouth" />
        </div>
    </section>
</template>