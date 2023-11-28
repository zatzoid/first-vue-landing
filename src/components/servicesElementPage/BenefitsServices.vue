<template>
    <section>
        <h2 class="section-heading">Our benefits</h2>
        <p class="section-subheading">Our mission is to set the highest standards for construction sphere..</p>
        <ul class="core-values__grid">
            <li class="core-values__grid-el">
                <img src="@/assets/quality.svg" alt="ok">
                <p class="core-values__grid-el-heading">Fixed Terms and Cost</p>
                <p class="core-values__grid-el-bottom">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
            </li>
            <li class="core-values__grid-el-line"></li>
            <li class="core-values__grid-el">
                <img src="@/assets/safety.svg" alt="ok">
                <p class="core-values__grid-el-heading">Qualified Workers</p>
                <p class="core-values__grid-el-bottom">Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>
            </li>
            <li class="core-values__grid-el-line"></li>
            <li class="core-values__grid-el">
                <img src="@/assets/comfort.svg" alt="ok">
                <p class="core-values__grid-el-heading">Supervision and Control</p>
                <p class="core-values__grid-el-bottom">Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'BenefitsServices'
}

</script>

<style scoped lang="scss">
section {
    color: white;
    padding: 80px 0 126px;
    background-color: #1E212C;
}


p {
    margin: 24px 0 60px;
}

.core-values__grid {
    max-width: var(--max-width);
    display: flex;
    list-style: none;
    padding: 0;
    margin: auto;
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
            background: rgb(255, 255, 255);
            background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(0, 212, 255, 0) 100%);
            opacity: 0.2;
            height: auto;
            width: 2px;


        }
    }
}
</style>