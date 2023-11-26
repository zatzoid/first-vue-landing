<template>
    <section class="slider">
        <button class="slider__btn slider__btn_left" @click="moveSlider(-1, 4), clearSliderAutoMove();"
            :disabled="translateValue === 0"></button>
        <button class="slider__btn slider__btn_right" @click="moveSlider(1, 4), clearSliderAutoMove();"
            :disabled="translateValue === 3"> </button>
        <div class="slider__btn-count">
            <button :class="{ 'slider__btn-count-el': true, 'slider__btn-count-el_active': translateValue === 0 }"
                @click="this.translateValue = 0, clearSliderAutoMove()"> 01</button>
            <button :class="{ 'slider__btn-count-el': true, 'slider__btn-count-el_active': translateValue === 1 }"
                @click="this.translateValue = 1, clearSliderAutoMove()"> 02</button>
            <button :class="{ 'slider__btn-count-el': true, 'slider__btn-count-el_active': translateValue === 2 }"
                @click="this.translateValue = 2, clearSliderAutoMove()"> 03</button>
            <button :class="{ 'slider__btn-count-el': true, 'slider__btn-count-el_active': translateValue === 3 }"
                @click="this.translateValue = 3, clearSliderAutoMove()"> 04</button>
        </div>
        <ul class="slider-wrapper" :style="{ transform: `translateX(-${translateValue}00%)` }">
            <li class="slider__el ">
                <div class="slider__el-content">
                    <h1>CREATE<span>X</span> CONSTRUCTION</h1>
                    <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin
                        ipsum
                        sed.
                        Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
                    <bitton class="slider__el-content-btn">Learn more about us</bitton>
                    <bitton class="slider__el-content-btn ">submit request</bitton>
                </div>
                <div class="slider__el-background slider__el-background_first">
                </div>
            </li>
            <li class="slider__el ">
                <div class="slider__el-content">

                    <p> <span>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sint. Maiores
                        pariatur, eius
                        dignissimos dolor voluptate consequuntur ipsum architecto maxime, harum excepturi magni dicta quae
                        vel esse soluta odit? Iusto? </p>
                    <p> <span>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sint. Maiores
                        pariatur, eius
                        dignissimos dolor voluptate consequuntur ipsum architecto maxime, harum excepturi magni dicta quae
                        vel esse soluta odit? Iusto? </p>

                </div>
                <div class="slider__el-background slider__el-background_second">
                </div>
            </li>
            <li class="slider__el ">
                <div class="slider__el-content">

                    <p> <span>L</span>orem Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta non
                        corrupti maxime quia, a distinctio consectetur quas alias amet, ipsa, delectus blanditiis. Neque
                        labore possimus similique. Alias quis consequuntur corrupti laudantium impedit aspernatur minima
                        corporis, natus recusandae optio cum similique velit amet facere, voluptatum debitis? Provident,
                        minima sed iure obcaecati, voluptatibus earum eaque nostrum a corrupti explicabo nihil officiis
                        facere? Pariatur porro in numquam repellat asperiores nemo, adipisci deserunt. Reprehenderit
                        aspernatur quod itaque animi harum natus. Alias labore reiciendis possimus tempore est tempora et
                        sunt, animi, nemo rerum voluptatum quos harum sed minima, vero blanditiis aliquam. Necessitatibus,
                        vitae cum. </p>


                </div>
                <div class="slider__el-background slider__el-background_three">
                </div>
            </li>
            <li class="slider__el ">
                <div class="slider__el-content">
                    <p> <span>L</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta magnam dignissimos
                        quisquam quas molestias ipsum nam voluptate, minima praesentium inventore nemo obcaecati voluptatem
                        aperiam ea amet unde dolorum culpa maiores corrupti voluptates non aliquam? Voluptatum placeat,
                        maiores officia aliquam, dolorum earum quis, nesciunt possimus rem explicabo tenetur illo modi.
                        Aperiam. </p>
                </div>
                <div class="slider__el-background slider__el-background_four">
                </div>
            </li>

        </ul>
    </section>
</template>

<script>
import { useSlider } from '@/utils/customHooks/useSlider';
import { onBeforeMount, onMounted } from 'vue';
export default {
    name: 'SliderMain',
    setup() {
        const { translateValue, moveSlider } = useSlider();
        let autoSliderInterval = null;
        function autoSliderMove() {
            autoSliderInterval = setInterval(() => {
                moveSlider(1, 4);
            }, 3000);
        }
        function clearSliderAutoMove() {
            if (autoSliderInterval) {
                clearInterval(autoSliderInterval);
            }
        }
        onMounted(() => {
            autoSliderMove()
        });
        onBeforeMount(() => {
            clearSliderAutoMove()
        });
        return {
            translateValue, moveSlider,autoSliderMove,clearSliderAutoMove
        }
    }
}
</script>

<style scoped lang="scss">
.slider {
    position: relative;
    height: 950px;
    overflow: hidden;

    &-wrapper {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4, 100%);
        grid-template-rows: 1fr;
        transition: all 0.5s;
        padding: 0;
        list-style: none;
        margin-top: 0;

    }

    &__el {
        color: white;
        width: 100vw;
        height: 100%;
        position: relative;

        &-content {
            position: absolute;
            z-index: 2;
            left: 345px;
            top: 220px;
            max-width: 577px;

            h1 {

                font-size: 72px;
                font-weight: 700;
                line-height: 94px;
                letter-spacing: 1px;

                span {
                    color: var(--col-main);
                }

            }

            p {

                font-size: 20px;
                font-weight: 400;
                line-height: 30px;
                letter-spacing: 0em;
                text-align: left;
                margin-bottom: 61px;

                span {
                    color: var(--col-main);
                }
            }

            &-btn {
                padding: 20px 40px;
                font-size: 16px;
                font-weight: 700;
                line-height: 52px;
                letter-spacing: 0.5px;
                text-align: center;
                background-color: var(--col-main);
                border: 2px solid var(--col-main);
                margin-left: 24px;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.5s;
                text-transform: uppercase;


                &:hover {
                    background-color: white;
                    border: 2px solid white;
                    color: var(--col-main);

                }

                &:first-of-type {
                    background-color: var(--col-clear);
                    border: 2px solid white;
                    margin-left: 0;

                    &:hover {

                        border: 2px solid var(--col-main);
                        color: var(--col-main);

                    }
                }
            }
        }

        &-background {
            z-index: 1;
            width: 100%;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            &::after {
                z-index: 0;
                content: '';
                width: 100%;
                position: absolute;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                top: 0;
            }

            &_first {
                background-image: url(@/assets/slider1.jpg);
            }

            &_second {
                background-image: url(@/assets/slider2.jpg);
            }

            &_three {
                background-image: url(@/assets/slider3.jpg);
            }

            &_four {
                background-image: url(@/assets/slider4.jpg);
            }

        }




    }

    &__btn {
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

        &-count {
            z-index: 2;
            position: absolute;
            bottom: 120px;
            left: 345px;

            &-el {
                cursor: pointer;
                color: white;
                width: 178px;
                height: 54px;
                text-align: left;
                font-size: 28px;
                font-weight: 700;
                line-height: 42px;
                background-color: var(--col-clear);
                border: none;
                border-bottom: 2px solid white;
                margin-right: 4px;
                padding: 0;
                opacity: 0.5;
                transition: all 0.5s;

                &_active {
                    opacity: 1;
                }

                &:disabled {
                    opacity: 0.5;
                }
            }
        }
    }
}
</style>