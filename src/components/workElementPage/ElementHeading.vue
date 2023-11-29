<template>
    <section>
        <nav>
            <router-link v-for="(item, index) in currentPath" :key="index" class="heading__nav-link link-style"
                :to="`/${item}`">{{ item !== '' ? item : 'homepage' }}</router-link>
        </nav>
        <h2>{{ el.name }}</h2>
        <div>
            <div class="el__showed-img-container">
                <div class="el__showed-img-wrapper" :style="{ transform: `translateX(-${translateValue}00%)` }">
                    <div v-for="(item, index) in imgaesList" :key="index" class="el__showed-img-block">
                        <img class="el__showed-img" :src="item" :alt="item">
                    </div>
                </div>

                <button :disabled="translateValue === 0" class="el__showed-img-btn el__showed-img-btn_left"
                    @click="moveSlider(-1)" />
                <button :disabled="translateValue === 5" class="el__showed-img-btn el__showed-img-btn_right"
                    @click="moveSlider(1)" />
            </div>
            <div class="el__showed-img-showedEl">
                <button :disabled="index === translateValue" @click="this.translateValue = index"
                    class="el__showed-img-showedEl-btn" v-for="(item, index) in imgaesList" :key="index">
                    <img class="el__showed-img-showedEl-img" :src="item" :alt="item"></button>
            </div>
        </div>
    </section>
</template>

<script>


export default {

    name: 'ElementHeading',
    data() {
        return {
            currentPath: window.location.pathname.split('/'),
            mainImg: require(`@/assets/${this.el.name}.png`),
            imgaesList: null,
            translateValue: 0

        }
    },
    methods: {
        moveSlider(val) {
            if (this.translateValue + val < 5 && this.translateValue + val >= 0) {
                this.translateValue += val;
            } else {
                this.translateValue = 0;
            }
        },
        setImages() {
            const oldList = this.el.images;
            oldList.unshift(`${this.el.name}.png`);
            const newlist = oldList.map((el) => { return require(`@/assets/${el}`) });
            this.imgaesList = newlist;

        }

    },
    mounted() {
        this.setImages()
    },
    unmounted() {
        this.imgaesList = null
    },
    props: ['el'],
    watch: {
        el() {
            this.setImages();
            this.currentPath = window.location.pathname.split('/'),
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
        }
    }
}
</script>

<style scoped lang="scss">
section {
    max-width: var(--max-width);
    margin: auto;
    padding: 152px 0 100px;
}

h2 {
    margin: 40px 0 60px;
    font-size: 64px;
    font-weight: 700;
    line-height: 77px;
    letter-spacing: 1px;
}

.heading__nav-link::after {
    content: ' / ';
}

.heading__nav-link:last-of-type {
    opacity: 0.3;
}

.heading__nav-link:last-of-type::after {
    content: '';

}

.el__showed-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;


    &-block {
        width: var(--max-width);
        height: 500px;
        display: flex;
        justify-content: center;

    }

    &-wrapper {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr;
        transition: all .2s;
        height: 100%;

    }

    &-container {
        position: relative;
        width: 100%;
        height: 500px;
        overflow: hidden;
    }

    &-btn {
        z-index: 2;
        position: absolute;
        top: 50%;
        border-radius: 50%;
        padding: 10px;
        border: none;
        width: 48px;
        height: 48px;
        background-image: url(@/assets/arrow.svg);
        background-repeat: no-repeat;
        background-position: center;
        transition: all .5s;
        cursor: pointer;

        &:disabled {
            opacity: 0.5;
        }



        &_left {
            left: 40px;
            transform: rotate(180deg);

            &:active {
                left: 30px;
            }
        }

        &_right {
            right: 40px;

            &:active {
                right: 30px;
            }
        }
    }

}

.el__showed-img-showedEl {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, 100px);
    grid-template-rows: 100px;
    gap: 20px;

    &-btn {
        overflow: hidden;
        border-radius: 5px;
        border: none;
        padding: 0;
        background-color: var(--col-clear);
        opacity: 0.5;

        &:disabled {
            opacity: 1
        }
    }

    &-img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
    }
}
</style>