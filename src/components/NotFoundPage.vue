<template>
    <section>
        <h2>404</h2>
        <router-link class="link-style" to="/">вернуться на главную</router-link>
    </section>
</template>

<script>
export default{
    name: 'NotFoundPage'
}
</script>

<style scoped>
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
}
h2{
    font-size: 70px;
    margin: 50px 0;
}

</style>