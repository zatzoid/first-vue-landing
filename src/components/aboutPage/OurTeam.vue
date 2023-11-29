<template>
    <section>
        <h2>Our Team</h2>
        <p>People are at the heart of Createx Construction Bureau </p>
        <ul>
            <li v-for="(item, index) in teamList" :key="index" class="section-el-shadow_hover team__item">
                <div class="team__item-img-wrapper">
                    <img class="team__item-img" :src="createImgLink(item.img)" :alt="item.name">
                    <div class="team__item-social">
                        <a class="team__item-social-link" href="#" target="_blank">@</a>
                        <a class="team__item-social-link" href="#" target="_blank">@</a>
                        <a class="team__item-social-link" href="#" target="_blank">@</a>
                    </div>
                </div>
                <p class="team__item-name">{{ item.name }}</p>
                <p>{{ item.job }}</p>
            </li>

        </ul>

    </section>
</template>

<script>
import { teamList } from '@/utils/constans/teamList';
export default {
    name: 'OurTeam',
    data() {
        return { teamList }
    },
    methods: {
        createImgLink(link) {
            return require(`@/assets/${link}`)
        }
    }
}
</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: auto;
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px 30px;
}

li {
    border-radius: 5px;
    transition: all .2s;
}

p {
    opacity: 0.5;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;

}

.team__item-img {
    max-width: 285px;
    height: 100%;
    object-fit: cover;

}

.team__item-img-wrapper {
    position: relative;
    height: 340px;
    overflow: hidden;
}

.team__item-social {
    background-color: #ff593070;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 21px;
    box-sizing: border-box;
    display: flex;
    transform: translateY(100%);
    transition: all .2s;
}
.team__item:hover .team__item-social{
    transform: translateY(0%);
}

.team__item-social-link {
    text-decoration: none;
    color: white;
    font-size: 30px;
    margin: auto;
    cursor: pointer;
}
.team__item-social-link:hover{
    opacity: 0.5;
}

.team__item-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin: 16px 0 4px;
    opacity: 1;
}

</style>