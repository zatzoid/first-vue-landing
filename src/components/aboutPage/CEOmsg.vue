<template>
    <section>
        <img src="@/assets/man.png" alt="man">
        <div class="CEOmsg__quote-block section-el-shadow ">
            <p class="CEOmsg__quote">Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in
                egestas hac at proin sed
                quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi.
                Odio massa purus vel praesent arcu enim elit felis viverra.</p>
            <p class="CEOmsg__quote">Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet
                eleifend amet. Vet
                suspendisse faucibus tempor ipsum integer. </p>
            <div class="CEOmsg__author-block">
                <p class="CEOmsg__author">
                    <span>Courtney Alexander</span>
                    CEO - Createx Construction Bureau
                </p>
                <img class="CEOmsg__author-img" src="@/assets/like.svg" alt="ss">
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'CEOmsg'
}
</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: 0 auto 120px;
    position: relative;
}

img {
    margin-top: 120px;
    max-width: 525px;
}

.CEOmsg__quote-block {
    background-color: white;
    padding: 80px 105px;
    max-width: 735px;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
}

.CEOmsg__quote {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    position: relative;
}

.CEOmsg__quote:first-of-type {
    margin-bottom: 30px;
}

.CEOmsg__quote:first-of-type::before {
    position: absolute;
    left: -30px;
    top: 0;
    content: '"';
    color: var(--col-main);
    font-size: 40px;
}

.CEOmsg__author-block {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
}

.CEOmsg__author {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #787A80;
    display: flex;
    flex-direction: column;

}

span {
    color: black;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;

}
.CEOmsg__author-img{
    width: 97px;
    height: 67px;
    margin: 0;
}
</style>