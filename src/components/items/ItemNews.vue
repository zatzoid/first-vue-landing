<template>
    <li :class="{ 'itemNews': true, 'itemNews_shorted': shorted }">
        <img :src="image" alt="asd">
        <div :class="{ 'itemNews__content': true, 'itemNews__content_shorted': shorted }">
            <h4 class="itemNews__heading">{{ item.heading }}</h4>
            <div class="itemNews__info">
                <p class="itemNews__info-data">{{ item.type }}</p>
                <p class="itemNews__info-data">{{ item.date }}</p>
            </div>
            <p class="itemNews__description">{{ item.description }}</p>
        </div>
    </li>
</template>


<script>
export default {
    name: 'ItemNews',
    data() {
        return {
            image: require(`@/assets/${this.item.image}.jpg`)
        }
    },
    props: ['item', 'shorted'],

}
</script>

<style scoped lang="scss">
.itemNews {
    width: 100%;
    height: 100%;
    box-shadow: 4px 6px 8px 0px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;


    &_shorted {

        &:first-of-type {
            grid-row: 1 / span 2;
        }
       

    }

    &__heading {
        margin: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

    }

    img {
        width: 100%;
        height: 100%;
    }

    &__info {
        display: flex;
        margin: 12px 0 16px;

        &-data {
            opacity: 0.5;
            padding: 0 20px;
            border-right: 2px solid black;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;

            &:first-of-type {
                padding-left: 0;
            }
        }
    }

    &__content {
        position: absolute;
        bottom: 0;
        background-color: white;
        padding: 24px;
        box-sizing: border-box;
        width: 100%;
        &_shorted{
            transition: all .5s;
           transform: translateY(50%);
        }
    }
}
.itemNews:hover > .itemNews__content_shorted{
    transform: translateY(0);
}
</style>