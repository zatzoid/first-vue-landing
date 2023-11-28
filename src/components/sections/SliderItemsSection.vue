<template>
    <section>
        <div class="selected__topper">
            <h2 class="selected__topper-heading">{{heading}}</h2>
            <button class="selected__topper-btn selected__topper-btn_left" :disabled="translateValue === 0"
                @click="moveSlider(-1, 7)" />
            <button class="selected__topper-btn selected__topper-btn_right" :disabled="translateValue === 6"
                @click="moveSlider(1, 7)" />
        </div>
        <div class="selected__grid-wrapper">
            <ul class="selected__grid" :style="{ transform: `translateX(-${33 * translateValue}%)` }">
                <ItemEl v-for="(item, index) in massive" :key="index" :item="item" />
            </ul>
        </div>
       <SectionFooter :text="'Explore all our works'" :btnText="'View portfolio'" :route="'work'"/>
    </section>
</template>

<script>
import { itemList } from '@/utils/constans/itemList';
import { useSlider } from '@/utils/customHooks/useSlider';
import ItemEl from '../items/ItemEl.vue';
import SectionFooter from '../items/SetionFooter.vue';

export default {
    name: "SliderItemsSection",
    setup() {
        const { translateValue, moveSlider, } = useSlider()
        const massive = itemList
        return {
            massive, translateValue, moveSlider
        };
    },
    props:['heading'],
    components: { ItemEl, SectionFooter }
}
</script>

<style scoped lang="scss">
section {
    max-width: var(--max-width);
    margin:0 auto 120px;
}

.selected__topper {
    display: flex;
    margin: 120px 0 60px;

    &-heading {
        max-width: 705px;
        font-size: 46px;
        font-weight: 700;
        line-height: 60px;
        margin: 0;

    }

    &-btn {
        background-color: var(--col-main);
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        background-image: url(@/assets/arrow.svg);
        background-position: center;
        background-size: 24px;
        background-repeat: no-repeat;
        margin-top: auto;
        transition: all .5s;
        cursor: pointer;

        &_right {
            &:active {
                transform: translateX(20px);
            }
        }


        &:disabled {
            opacity: 0.5;
            background-color: white;
        }

        &_left {
            transform: rotate(180deg);
            margin-left: auto;
            margin-right: 10px;

            &:active {
                transform:rotate(180deg) translateX(20px);
            }
        }
    }
}




.selected__grid {
    display: flex;
    width: 100%;
    padding: 0 10px 30px;
    margin: 0;
    list-style: none;
    gap: 30px;
    transition: all 0.5s;

    &-wrapper {
        margin: auto;
        overflow: hidden;
        max-width: var(--max-width);

    }
}
</style>