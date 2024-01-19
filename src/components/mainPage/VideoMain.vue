<template>
    <section>
        <h2 class="section-heading">We are Createx Construction Bureau </h2>
        <p class="section-subheading">We are rightfully considered to be the best construction company in the USA.</p>

        <div class="video__item">
            <picture class="video__item-img" v-if="!showVideo" @click=" this.showVideo = true">
                <source :srcset="`https://i.ytimg.com/vi_webp/P7sOz55Ey1E/maxresdefault.webp`" type="image/webp">
                <img :src="`https://i.ytimg.com/vi/P7sOz55Ey1E/maxresdefault.jpg`" alt="vidos">
                <button class="video__item-play-btn" aria-label="play video">
                    <svg version="1.1" width="100px" height="70px" viewBox="0 0 260 180" enable-background="new 0 0 260 180"
                        xml:space="preserve">
                        <path d="M220,2H40C19.01,2,2,19.01,2,40v100c0,20.99,17.01,38,38,38h180c20.99,0,38-17.01,38-38V40C258,19.01,240.99,2,220,2z
                M102,130V50l68,40L102,130z" />
                    </svg>

                </button>
            </picture>
            <iframe class="video__item-video" title="YouTube video player"
                :src="`https://www.youtube.com/embed/P7sOz55Ey1E?rel=0&autoplay=1&mute=1&showinfo=0`" frameborder="0"
                v-if="showVideo"></iframe>
        </div>

    </section>
</template>

<script>
export default {
    name: 'VideoMain',
    data() {
        return { showVideo: false }
    }
}

</script>

<style scoped lang="scss">
section {

    max-width: var(--max-width);

    margin: 120px auto 0;
}

h2 {
    margin: 0;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;

}

p {

    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    opacity: 0.7;
    margin: 24px 0 60px;
}

.video__item {
    margin-top: 32px;
    box-sizing: border-box;
    position: relative;
    max-height: 500px;
    height: 60vh;
    cursor: pointer;
    &-img{
        width: 100%;
        height: 100%;
        display: flex;
        img{
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    &:hover .video__item-play-btn {
        fill: #ff0000;
        fill-opacity: 1;
    }

    &-video {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    &-play-btn {
        fill: rgb(0, 0, 0);
        fill-opacity: 0.8;
        background-color: transparent;
        border: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;

        &:focus {
            fill: #ff0000;
            fill-opacity: 1;
            outline: none;
        }

    }
}
</style>