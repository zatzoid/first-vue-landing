<template>
    <section>
        <ul class="history__slider-btn-grid">
            <li>
                <h2>Our history</h2>
            </li>
            <li><button @click="this.translateValue = 0" :disabled="translateValue === 0"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 0 }"></span>
                    Present</button></li>
            <li><button @click="this.translateValue = 1" :disabled="translateValue === 1"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 1 }"></span>
                    March 2019</button></li>
            <li><button @click="this.translateValue = 2" :disabled="translateValue === 2"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 2 }"></span>
                    November 2018</button></li>
            <li><button @click="this.translateValue = 3" :disabled="translateValue === 3"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 3 }"></span>
                    July 2015</button></li>
            <li><button @click="this.translateValue = 4" :disabled="translateValue === 4"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 4 }"></span>
                    August 2010</button></li>
            <li><button @click="this.translateValue = 5" :disabled="translateValue === 5"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 5 }"></span>
                    Febrary 2007</button></li>
            <li><button @click="this.translateValue = 6" :disabled="translateValue === 6"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 6 }"></span>
                    May 2004</button></li>
            <li><button @click="this.translateValue = 7" :disabled="translateValue === 7"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 7 }"></span>
                    October 2001</button></li>
            <li><button @click="this.translateValue = 8" :disabled="translateValue === 8"
                    class="history__slider-el-btn"><span
                        :class="{ 'history__slider-el-btn-circle': true, 'history__slider-el-btn-circle_active': translateValue === 8 }"></span>
                    June 2000</button></li>

        </ul>
        <div class="history__slider-section">
            <div class="history__slider-heading">
                <button @click="moveSlider(-1, 7)" :disabled="translateValue < 1"
                    class="history__slider-btn history__slider-btn_left" />
                <button @click="moveSlider(1, 9)" :disabled="translateValue > 7"
                    class="history__slider-btn history__slider-btn_right" />
            </div>
            <ul class="history__slider-el-grid " :style="{ transform: `translateX(-${translateValue}00%)` }">
                <li v-for="(item, index) in historyList" :key="index" class="history__slider-el ">
                    <img class="history__slider-el-img" :src="createImgLink(item.img)" alt="aaa">
                    <p class="history__slider-el-desc">{{item.text}}</p>
                </li>

            </ul>
        </div>


    </section>
</template>

<script>
import { useSlider } from '@/utils/customHooks/useSlider';
import { historyList } from '@/utils/constans/historyList'
export default {
    name: 'OurHistory',
    setup() {
        const { translateValue, moveSlider } = useSlider()

        function createImgLink(link) {
            return require(`@/assets/${link}`)
        }


        return { translateValue, moveSlider, createImgLink, historyList }
    }

}
</script>

<style scoped lang="scss">
section {
    max-width: var(--max-width);
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 170px;
    padding-bottom: 100px;
}

.history__slider-section {
    margin-top: 100px;
    overflow: hidden;
}

.history__slider-btn-grid {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
}

.history__slider-btn-grid::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 80%;
    left: 8.5px;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
}

h2 {
    margin-top: 0;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 40px;
}

.history__slider-el-btn {
    z-index: 2;
    color: #9A9CA5;
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    padding: 0;
    border: none;
    background-color: var(--col-clear);
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all .2s;

    &:disabled {

        color: var(--col-main);
    }

    &::after {
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: var(--col-grey);
        content: '';
        left: -32px;
        top: 50%;
    }

    &-circle {

        margin-right: 32px;
        border-radius: 50%;
        height: 9px;
        width: 9px;
        border: 5px solid var(--col-grey);
        text-align: center;
        background-color: #9A9CA5;
        transition: all .2s;

        &_active {
            background-color: var(--col-main);
        }
    }

}


.history__slider-heading {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 48px;
    gap: 10px;
}

.history__slider-btn {
    border-radius: 50%;
    padding: 10px;
    border: none;
    width: 48px;
    height: 48px;
    background-image: url(@/assets/arrow.svg);
    background-repeat: no-repeat;
    background-position: center;
    transition: all .2s;
    background-color: var(--col-main);
    cursor: pointer;

    &_left {
        transform: rotate(180deg);

        &:active {
            transform: translateX(-10px) rotate(180deg);
        }
    }

    &_right {

        &:active {
            transform: translateX(-10px);
        }
    }

    &:disabled {
        opacity: 0.5;
        background-color: var(--col-clear);
    }

}

.history__slider-el {
    width: 795px;
    position: relative;

    &-grid {
        transition: all .2s;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        list-style: none;
        padding: 0;
    }

    &-img {
        width: 100%;
        height: 450px;
        object-fit: cover;
        object-position: center;
    }

    &-desc {
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 36px 10px 5px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        background-color: var(--col-grey);
    }
}
</style>