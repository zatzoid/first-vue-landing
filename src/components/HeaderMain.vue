<template>
    <header>
        <div class="header">
            <p class="header__logo">CREATE<span>X</span></p>
            <nav class="header__navbar">
                <router-link custom to="/about">
                    About us
                </router-link>
                <router-link custom to="/services">
                    setvices
                </router-link>
                <router-link custom to="/work">
                    Work
                </router-link>
                <router-link custom to="/news">
                    News
                </router-link>
                <router-link custom to="/contacts">
                    Contacts
                </router-link>
            </nav>
            <div class="header-social">
                <img src="@/assets/phone.svg" />
                <p class="header-social__heading">Call Us</p>
                <p class="header-social__info">(228) 322-14-88</p>
            </div>
            <div class="header-social">
                <img src="@/assets/Chat.svg" />
                <p class="header-social__heading">Talk to us</p>
                <p class="header-social__info">example@mail.com</p>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderMain'
}
</script>

<style scoped lang="scss">
.header {
    max-width: 1230px;
    margin: 20px auto;
    display: flex;
    padding: 13px 0 0;

    &__logo {
        margin: 0;
        font-size: 30px;
        font-weight: 700;

        span {
            margin-left: 2px;
            color: var(--col-main);
            font-size: 700;
        }
    }

    &__navbar {
        margin-left: 60px;
        gap: 40px;
        display: flex;
        align-items: center;

        router-link {
            cursor: pointer;
            transition: all .2s;

            &:hover {
                color: var(--col-main);
            }
        }
    }
}

.header-social {
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: min-content min-content;

    &:first-of-type {
        margin-left: auto;
        margin-right: 36px;
    }

    img {
        grid-row: 1 /span 2;
        margin-right: 20px;
    }

    &__heading {
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0em;
    }

    &__info {

        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0em;


    }

}
</style>