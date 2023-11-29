<template>
    <section>
        <h2>Our Offices</h2>
        <p class="heading__txt">Give us a call, send us a note or visit our office. We can`t wait to hear from you!</p>
        <ul>
            <li>
                <h3>New York, USA</h3>
                <p>8502 Preston Rd. Inglewood, New York 98380</p>
                <p class="offices__link"><a href="#"> see on the map</a></p>
                <p><span>Call:</span> 123 456 7899</p>
                <p><span>Email:</span> example@email.com</p>
                <p><span>Schedule:</span>Mon - Fri 9:00 - 18:00</p>
            </li>
            <li>
                <h3>New York, USA</h3>
                <p>8502 Preston Rd. Inglewood, New York 98380</p>
                <p class="offices__link"><a href="#"> see on the map</a></p>
                <p><span>Call:</span> 123 456 7899</p>
                <p><span>Email:</span> example@email.com</p>
                <p><span>Schedule:</span>Mon - Fri 9:00 - 18:00</p>
            </li>
            <li>
                <h3>New York, USA</h3>
                <p>8502 Preston Rd. Inglewood, New York 98380</p>
                <p class="offices__link"><a href="#"> see on the map</a></p>
                <p><span>Call:</span> 123 456 7899</p>
                <p><span>Email:</span> example@email.com</p>
                <p><span>Schedule:</span>Mon - Fri 9:00 - 18:00</p>
            </li>

        </ul>

    </section>
</template>

<script >
export default {
    name: 'OurOffices'
}
</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: auto;
}

h2 {
    margin-top: 80px 0 24px;
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: center;

}

h3 {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    text-align: left;
    margin: 0 0 24px;

}

p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
}

.heading__txt {
    opacity: 0.5;
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
    margin: 60px 0 120px;
    display: flex;
    justify-content: space-between;
}

li {
    max-width: 250px;
}

span {
    opacity: 0.5;
}

.offices__link {

    margin: 4px 0 20px;
}

a {
    color: var(--col-main);
}
</style>