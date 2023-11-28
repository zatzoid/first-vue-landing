<template>
    <section>
        <div class="clients-wrapper">
            <h2>What our clients are saying</h2>
            <div class="clients__content">
                <img class="clients__content-avatar" src="@/assets/man.png" alt="man">
                <p class="clients__content-comment">Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod
                    enim. Consectetur magna cillum
                    consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco. </p>
                <p class="clients__content-comment-name">Shawn Edwards</p>
                <p class="clients__content-comment-job">Position, Company name</p>
                <img class="clients__content-background" src="@/assets/man2.jpg" alt="man2">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ClientsSayngSection'
}
</script>

<style scoped lang="scss">
h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    margin: 0 0 60px;
}
section{
    background-color: var(--col-grey);
}
 .clients {
    &-wrapper{
        max-width: var(--max-width);
        margin: auto;
    }
    &__content {
        position: relative;
        padding-bottom: 121px;

        &-background {
            position: absolute;
            bottom: -60px;
            right: 0;
        }

        &-avatar {
            height: 72px;
            width: 72px;
            border-radius: 50%;
        }

        &-comment {
            margin: 24px 0;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            width: 600px;

            &-job {
                font-size: 14px;
                font-weight: 400;
                line-height: 21px;
                margin: 0;
            }

            &-name {

                margin: 0 0 4px;
                font-size: 16px;
                font-weight: 700;
                line-height: 26px;
            }

        }
    }

}
</style>