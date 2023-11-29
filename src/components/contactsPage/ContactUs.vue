<template>
    <section>
        <h2>Contact us</h2>
        <p>Please complete the form. Detailed information will help us to make a tuned offer.</p>
        <div class="contact__grid">
            <img src="@/assets/man2.jpg" alt="man2">
            <form>
                <label>Name <input type="text" placeholder="name"></label>
                <label>I am intrested in <input type="text" placeholder="interior"></label>
                <label>Phone <input type="text" placeholder="228 148 88"></label>
                <label>Location<input type="text" placeholder="new york"></label>
                <label>email <input type="text" placeholder="name"></label>
                <label class="contact__el-message">message <textarea type="text" placeholder="message"> </textarea></label>
                <button class="btn-hover-orange">SEND REQUEST</button>

            </form>
        </div>

    </section>
</template>

<script >
export default {
    name: 'ContactUs'
}
</script>

<style scoped>
section {
    max-width: var(--max-width);
    margin: auto;
    margin-bottom: 120px;
}

h2 {
    font-size: 46px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
}

p {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: center;
    opacity: 0.5;
    margin: 24px 0 60px;
}

.contact__grid {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    gap: 135px;


}

form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    gap: 24px 30px;

}

label {
    display: flex;
    flex-direction: column;
}

input {
    border: 1px solid #d1d1d1;
    background-color: var(--col-grey);
    height: 52px;
    margin-top: 8px;
    border-radius: 5px;

}

.contact__el-message {
    grid-column: 1 / span 2;

    width: 100%;
    height: 128px;
}

textarea {
    resize: none;
    width: 100%;
    height: 100%;
    margin-top: 8px;
    border: 1px solid #d1d1d1;
    background-color: var(--col-grey);
}
button{
    grid-column: 2;
}
</style>