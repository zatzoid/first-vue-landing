<template>
    <section>
        <h2>thats how we do it</h2>
        <ul>
            <li>
                <p class="howWeDo__number">01</p>
                <p class="howWeDo__heading">work estimate</p>
                <p class="howWeDo__descript">Culpa nostrud commodo ea consequat aliquip reprehenderit.</p>
            </li>
            <li>
                <p class="howWeDo__number">02</p>
                <p class="howWeDo__heading">Contract</p>
                <p class="howWeDo__descript">Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet
                    auctor et tempor.</p>
            </li>
            <li>
                <p class="howWeDo__number">03</p>
                <p class="howWeDo__heading">Mobilization </p>
                <p class="howWeDo__descript">Odio massa scelerisque purus arcu sed velit eleifend cursus leo.</p>
            </li>
            <li>
                <p class="howWeDo__number">04</p>
                <p class="howWeDo__heading">Construction Work</p>
                <p class="howWeDo__descript">Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et
                    veniam ad deserunt.</p>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: 'HowWeDo'
}
</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: 0 auto 120px;
}

h2 {
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
}

ul {
    display: flex;
    gap: 30px;
    padding: 0;
    list-style: none;
}

li {
    width: 285px;
    position: relative;
}

li::after {
    position: absolute;
    content: '';
    width: 80%;
    top: 0;
    right: 0;
    height: 30px;
    border-bottom: 3px dashed #D7DADD;
}


.howWeDo__number {
    width: 60px;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    color: #D7DADD;
    position: relative;
    transition: all .2;

}

.howWeDo__number::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-57%, -50%);
    width: 110%;
    height: 110%;
    background-color: var(--col-main);
    z-index: -1;
    border-radius: 50%;
    border: 10px solid #ffa28b;
    opacity: 0.16;
    scale: 0;
    
}

li:hover>.howWeDo__number {
    color: var(--col-main);
}
li:hover>.howWeDo__number::after {
   scale: 1;
   
}
.howWeDo__heading {
    margin: 16px 0 8px;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;


}
</style>