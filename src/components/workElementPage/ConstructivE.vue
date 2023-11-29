<template>
    <section>
        <div class="constructive__wrapper">
            <div>
                <h2>Constructive decisions</h2>
                <ul>
                    <li>Vitae ultrices ornare eu sed in est quisque duis id.</li>
                    <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                    <li>Mauris odio pellentesque commodo, diam.</li>
                    <li>Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.</li>
                    <li>At pharetra libero blandit risus, fringilla sed commodo diam.</li>
                    <li>Integer ultricies viverra ut enim viverra ut.</li>
                </ul>
            </div>
            <img src="@/assets/man2.jpg" alt="man2">
        </div>
    </section>
</template>
<script>
export default {
    name: 'ConstructuvE'
}
</script>

<style scoped>
section {
    margin-top: 120px;
    background-color: var(--col-grey);
}

h2 {
    margin: 0;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
}

ul {
    margin-top: 60px;
    list-style: url(@/assets/check.svg);
    display: grid;
    gap: 20px;
    padding-left: 30px;
}

.constructive__wrapper {
    padding: 80px 0 114px;
    max-width: var(--max-width);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
}
img{
    position: absolute;
    left: 0;
    bottom: -60px;
}
</style>