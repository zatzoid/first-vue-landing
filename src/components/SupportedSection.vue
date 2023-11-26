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
            <h3>What our clients are saying</h3>
            <div class="supported__content">
                <img class="supported__content-avatar" src="@/assets/man.png" alt="man">
                <p class="supported__content-comment">Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod
                    enim. Consectetur magna cillum
                    consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco. </p>
                <p class="supported__content-comment-name">Shawn Edwards</p>
                <p class="supported__content-comment-job">Position, Company name</p>
                <img class="supported__content-background" src="@/assets/man2.jpg" alt="man2">
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
    background-image: url(@/assets/background.jpg);
    padding: 80px 0 0;
}

h2 {
    margin: 0;
}

h3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    margin: 0 0 60px;
}

.supported {
    &-wrapper {
        max-width: var(--max-width);
        margin: auto;
    }

    &__list {
        display: flex;
        justify-content: space-between;
        margin: 60px 0 170px;

        img {
            filter: grayscale(100);

            &:hover {
                filter: grayscale(0);
            }
        }
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