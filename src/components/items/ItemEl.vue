<template>
    <li class="itemEl">
        <img :src="image" :alt="item.name">
        <div>
            <p class="itemEl__heading">{{ item.name }}</p>
            <p class="itemEl__description">{{ item.description }}</p>
            <button class="btn-hover-white">VIEW PROJECT</button>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ItemEl',
    data() {
        return {
            image: require(`@/assets/${this.item.name}.png`)
        }
    },
    props: ['item']
}
</script>

<style scoped lang="scss">
.itemEl {
    position: relative;
    overflow: hidden;
    min-width: 380px;
    height: 440px;
    box-shadow: 4px 6px 8px 0px rgba(0, 0, 0, 0.2);
    transition: all .3s;

 &:hover{
    box-shadow: 7px 16px 21px 0px rgba(0, 0, 0, 0.2);
 }
}

img {
    width: 100%;
    height: 100%;
}

div {
    background-color: white;
    position: absolute;
    bottom: -80px;
    width: 100%;
    text-align: center;
    transition: all .3s;
}
.itemEl:hover > div{
transform: translateY(-80px);
}

.itemEl__heading {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin: 16px 0 4px;
}

.itemEl__description {
    margin: 0;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;


}

button {
    padding: 0 32px;
    font-size: 14px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0.5px;
    margin: 24px 0;

}
</style>