<template>
    <section>
        <h2 class="section-heading">Some facts and figures</h2>
        <ul>
            <li>
                <img src="@/assets/facts/clients.png" alt="clients">
                <p>Totally satisfied clients</p>
            </li>
            <li>
                <img src="@/assets/facts/exp.png" alt="exp">
                <p>Years of experience</p>
            </li>
            <li>
                <img src="@/assets/facts/progress.png" alt="progre">
                <p>Working hours spent</p>
            </li>
            <li>
                <img src="@/assets/facts/projects.png" alt="projec">
                <p>Succeeded projects</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'FactsMain'
}
</script>
<style scoped>
section{
    max-width: var(--max-width);
    margin: auto;
    margin-top: 180px;
}
ul{
    list-style: none;
    padding: 0;
    margin:60px 0 180px ;
    display: flex;
    gap: 48px;
    justify-content: center;
}
li{
    max-width: 148px;
}
p{

font-size: 14px;
font-weight: 400;
line-height: 21px;
text-align: center;

}

</style>