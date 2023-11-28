<template>
    <section>
        <h2>Pricing</h2>
        <p class="pricing__subheading">We offer you three categories of construction.</p>
        <ul class="section-el-shadow">
            <li class="items">
                <span></span>
                <h3 class="txt-left">Items</h3>
                <span class="back-col-grey">
                    <p class="txt-left">Installation plan</p>
                </span>
                <span class="">
                    <p class="txt-left">Planning solutions (2-3 options)</p>
                </span>
                <span class="back-col-grey">
                    <p class=" txt-left">Lighting plan</p>
                </span>
                <span class="">
                    <p class="txt-left">Flooring plan</p>
                </span>
                <span class="back-col-grey">
                    <p class=" txt-left">Heating floor laying scheme</p>
                </span>
                <span class="">
                    <p class="txt-left">Air conditioner zones layout</p>
                </span>
                <span class="back-col-grey">
                    <p class=" txt-left">3D visualization of all rooms</p>
                </span>
                <span class="">
                    <p class="txt-left">Visualization of each room (3-4 angles)</p>
                </span>
                <span class="back-col-grey">
                    <p class=" txt-left">Terms</p>
                </span>
            </li>
            <li>
                <h3>Bassic</h3>
                <h4>20$ per m2</h4>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey span__center-content">
                    <p class="mrg-auto">simplified</p>
                </span>
                <span></span>
                <span class="back-col-grey span__center-content">
                    <p class="mrg-auto">10days</p>
                </span>
                <button class="btn-hover-white">SEND REQUEST</button>
            </li>
            <li>
                <h3>Standard</h3>
                <h4>30$ per m2</h4>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey grid__cell"></span>
                <span></span>
                <span class="back-col-grey span__center-content">
                    <p class="mrg-auto">20days</p>
                </span>
                <button class="btn-hover-white">SEND REQUEST</button>
            </li>
            <li>
                <h3>BUSINESS</h3>
                <h4>40$ per m2</h4>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey grid__cell"></span>
                <span class="grid__cell"></span>
                <span class="back-col-grey span__center-content">
                    <p class="mrg-auto">30days</p>
                </span>
                <button class="btn-hover-white">SEND REQUEST</button>
            </li>
        </ul>
        <div>


        </div>
    </section>
</template>

<script>
export default {
    name: "PricingServices"
}
</script>

<style scoped>
section {
    background-color: var(--col-grey);
    text-align: center;
    padding: 80px 0 120px;
}

ul {
    max-width: var(--max-width);
    background-color: white;
    margin: auto;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;

}

li {
    display: grid;
    grid-template-rows: repeat(11, 58px) auto;

}

h2 {
    margin: 0;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
}

h3 {
    margin: auto 0 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
}

h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    opacity: 0.5;
    margin: 0;
}

span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

button {
    margin: 32px auto;
    padding: 0px 20px;
    font-size: 12px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.5px;


}

p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;

}

.pricing__subheading {
    margin: 24px 0 60px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    opacity: 0.7;

}

.txt-left {
    text-align: left;
    padding-left: 24px;

}

.mrg-auto {
    margin: auto;
}

.grid__cell {
    background-image: url(@/assets/check.svg);
    background-position: center;
    background-repeat: no-repeat;

}

.back-col-grey {
    background-color: var(--col-grey);
}
</style>