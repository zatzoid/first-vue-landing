<template>
    <section>
        <h2 class="section-heading">Our core values</h2>
        <p class="section-subheading">Our mission is to set the highest standards for construction sphere.</p>
        <ul class="core-values__grid">
            <li class="core-values__grid-el">
                <img src="@/assets/quality.svg" alt="ok">
                <p class="core-values__grid-el-heading">Quality</p>
                <p class="core-values__grid-el-bottom">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                    velit nostrud aliquip sunt.</p>
            </li>
            <li class="core-values__grid-el-line"></li>
            <li class="core-values__grid-el">
                <img src="@/assets/safety.svg" alt="ok">
                <p class="core-values__grid-el-heading">Safety</p>
                <p class="core-values__grid-el-bottom">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                    velit nostrud aliquip sunt.</p>
            </li>
            <li class="core-values__grid-el-line"></li>
            <li class="core-values__grid-el">
                <img src="@/assets/comfort.svg" alt="ok">
                <p class="core-values__grid-el-heading">Comfort</p>
                <p class="core-values__grid-el-bottom">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                    velit nostrud aliquip sunt.</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'CoreValuesMain'
}
</script>

<style scoped lang="scss">
section {
    max-width: var(--max-width);
    margin:  auto ;
    padding: 180px 0 270px;
}


p {
    margin: 24px 0 60px;
}

.core-values__grid {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-between;

    &-el {

        max-width: 285px;
        position: relative;

        img {
            display: flex;
            margin: auto;
        }

        &-heading {
            margin: 24px 0 8px;

            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            text-align: center;

        }

        &-bottom {
            margin: 0;
            opacity: 1;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            text-align: center;

        }

        &-line {
            background: rgb(2, 0, 36);
            background: linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 212, 255, 0) 100%);
            opacity: 0.2;
            height: auto;
            width: 2px;


        }
    }
}
</style>