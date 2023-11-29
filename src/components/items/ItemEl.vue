<template>
    <li class="itemEl">
        <img :src="image" :alt="item.name">
        <div>
            <p class="itemEl__heading">{{ item.name }}</p>
            <p class="itemEl__description">{{ item.description }}</p>
            <router-link :to="`/work/${item.name}`" class="btn-hover-white itemEl__link">VIEW PROJECT</router-link>
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
    margin-bottom: 25px;
    box-sizing: border-box;

 &:hover{
    box-shadow: 7px 10px 15px 0px rgba(0, 0, 0, 0.2);
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
    padding-bottom: 24px;
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
    margin: 0 0 24px;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;


}

.itemEl__link {
    font-size: 14px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0.5px;
    padding: 15px 30px;
    text-decoration: none;
    box-sizing: border-box;

}
</style>