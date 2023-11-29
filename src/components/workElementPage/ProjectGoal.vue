<template>
    <section>
        <div>
            <h2>
                Project goal
            </h2>
            <p class="projectGoal__text">Build a private house 840 sq. feet with a large living room, three bedrooms, two
                bathrooms, a terrace, a pool
                and a garage for two cars.</p>
            <p>Modern design and care for each family member to feel as comfortable as possible in the new home.</p>
        </div>
        <div class="projectGoal__info section-el-shadow ">
            <span>LOCATION</span>
            <p class="projectGoal__info-text">2464 Royal Ln. Mesa, New Jersey</p>
            <span>CLIENT</span>
            <p class="projectGoal__info-text">Darlene Robertson</p>
            <span>ARCHITECT</span>
            <p class="projectGoal__info-text">HIK Architecture</p>
            <span>SIZE</span>
            <p class="projectGoal__info-text">840 sq. feet</p>
            <span>VALUE</span>
            <p class="projectGoal__info-text">$2 million</p>
            <span>COMPLETED</span>
            <p class="projectGoal__info-text">May 2020</p>

        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectGoal'
}
</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 135px;
}

h2 {
    margin: 0;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
}

.projectGoal__text {
    margin: 40px 0 20px;
}

.projectGoal__info {
    padding: 40px 60px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
}

.projectGoal__info-text {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;

}

.projectGoal__info-text:last-of-type {
    margin-bottom: 0;
}

span {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;


}</style>