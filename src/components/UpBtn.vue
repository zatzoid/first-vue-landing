<template>
    <a href="https://github.com/zatzoid/first-vue-landing" target="_blank"><button class="upBtn upBtn_gh"></button></a>

   <button  v-if="isScrolledDown" @click="scrollToTop()" class="upBtn upBtn_top"></button>
</template>

<script>
export default {
    name: 'UpBtn',
    data() {
        return {
            isScrolledDown: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }, methods: {
        handleScroll() {
            this.isScrolledDown = window.scrollY > 400;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>

<style scoped>
.upBtn {
    z-index: 10;
    position: fixed;
    bottom: 80px;
    right: 50px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    opacity: 0.5;
    cursor: pointer;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: rgb(221, 221, 221);
}

.upBtn_gh {

    background-image: url(@/assets/github.svg);

}

.upBtn_top {
    background-image: url(@/assets/arrow.svg);
    bottom: 150px;
    transform: rotate(-90deg);
    transition: all .5s;
}

.upBtn_top:hover {
    transform: translateY(-10px) rotate(-90deg);
}

.upBtn:hover {
    opacity: 1;
}

.upBtn:active {
    opacity: 0.7;
}
</style>