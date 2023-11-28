<template>
    <section>
        <div class="supported-wrapper">
            <h2 class="section-heading">Supported by 12+ partners</h2>
            <div class="supported__list">
                <img src="@/assets/support-logo.png" alt="sus">
                <img src="@/assets/support-logo.png" alt="sus">
                <img src="@/assets/support-logo.png" alt="sus">
                <img src="@/assets/support-logo.png" alt="sus">
                <img src="@/assets/support-logo.png" alt="sus">
                <img src="@/assets/support-logo.png" alt="sus">
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: 'SupportedSection'
}
</script>
<style scoped lang="scss">
section {
   background-color: var(--col-grey);
    padding: 80px 0 110px;
}

h2 {
    margin: 0;
}



.supported {
    &-wrapper {
        max-width: var(--max-width);
        margin: auto;
    }

    &__list {
        display: flex;
        justify-content: space-between;
       

        img {
            filter: grayscale(100);

            &:hover {
                filter: grayscale(0);
            }
        }
    }

    
}
</style>