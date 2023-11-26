<template>
    <section>
        <form>
            <h2>A quick way to discuss details</h2>
            <label>
                Name*
                <input type="text" required placeholder="name">
            </label>
            <label>
                Phone*
                <input type="number" required placeholder="8 228 322 14 88">
            </label>
            <label>
                Email*
                <input type="email" required placeholder="example@mail.com">
            </label>
            <label>
                Message*
                <textarea rows="3" class="footerForm__input-message" type="text" required placeholder="some text" />
            </label>
            <label class="footerForm__chekbox-label">
                <input type="checkbox">
                I agree to receive communications from Createx Construction Bureau.
            </label>
            <button class="btn-hover-orange">SEND REQUEST</button>
        </form>
    </section>
</template>


<script>
export default {
    name: "FooterForm"
}
</script>

<style scoped lang="scss">
section {
    background-image: url(@/assets/backgroundFooter.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 826px;
    position: relative;
}

form {
    position: absolute;
    top: 80px;
    right: 18%;
    display: flex;
    flex-direction: column;
    padding: 48px 40px;
    background-color: white;
    gap: 20px;
    box-sizing: border-box;
    max-width: 495px;

}

h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    margin: 0 0 0;
}

label {
    display: flex;
    flex-direction: column;
    width: 100%;
}



input {
    margin-top: 8px;
    border: 1px solid #D7DADD;
    background-color: #F4F5F6;
    height: 44px;

    &:focus {
        outline: none;
        border: 1px solid var(--col-main);
    }
}

.footerForm__chekbox-label {
    flex-direction: row;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    gap: 12px;
    align-items: center;

    input {
        margin: 0;
    }

}

textarea {
    resize: none;
    margin-top: 8px;
    border: 1px solid #D7DADD;
    background-color: #F4F5F6;
    height: 44px;

    &:focus {
        outline: none;
        border: 1px solid var(--col-main);
    }
}

button {
    padding: 10px 30px;
    margin: auto;
}
</style>