<template>
    <section>
        <div class="post__heading-block">
            <div class="post__heading-info">
                <p class="post__heading-txt">{{ item.type }}</p>
                <p class="post__heading-txt">{{ item.date }}</p>
            </div>
            <img class="post__heading-img" :src="image" :alt="item.heading">
        </div>
        <p class="post__content-txt">{{item.content}}</p>
    </section>
</template>

<script>
export default {
    name: 'NewsPost',
    data() {
        return {
            image: require(`@/assets/${this.item.image}.jpg`)
        }
    },
    props: ['item']
}
</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: auto;
    position: relative;
    padding-top: 500px;
    box-sizing: border-box;
    min-height: 900px;
}

.post__heading-block {
    top: -120px;
    position: absolute;
    width: 100%;
}

.post__heading-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

.post__heading-info {
    display: flex;
    gap: 12px;
    margin-bottom: 30px;
}

.post__heading-txt {
    border-right: 2px solid #787A80;
    padding-right: 12px;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    opacity: 0.5;

}

.post__heading-txt:first-of-type {
    opacity: 1;
    color: var(--col-main);
}
.post__content-txt{
    
}
</style>