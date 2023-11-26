<template>
    <section>
        <div class="section-el-shadow">
            <h2>Want to know more? Ask us a question:</h2>
            <form @submit.prevent="submitForm()">
                <label>Name <input name="name" v-model="nameData" required type="text" placeholder="name"></label>
                <label>Phone <input name="phone" v-model="phoneValue" required type="number" placeholder="phone"></label>
                <label>Message <input name="message" v-model="messageValue" required type="text"
                        placeholder="message"></label>
                <button type="submit" class="btn-hover-orange">send</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AskQuestionMain',
    data() {
        return {
            nameData: '',
            phoneValue: '',
            messageValue: ''

        }
    },
    methods: {
        submitForm() {
            alert(`name:: ${this.nameData}, phone:: ${this.phoneValue}, message:: ${this.messageValue}`)
            this.nameData = '',
                this.phoneValue = '',
                this.messageValue = ''
        }
    }
}
</script>

<style scoped lang="scss">
section {

    position: relative;


    div {
        position: absolute;
        max-width: var(--max-width);
        height: 243px;
        padding: 48px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        bottom: -92px;
        box-sizing: border-box;
    }
}

h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;

}

form {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 0.5fr;
    gap: 24px;

    label {
        display: flex;
        flex-direction: column;

        input {
            height: 44px;
            background-color: #eeeff0;
            border: 1px solid rgb(95, 95, 95);
            border-radius: 5px;
            margin-top: 5px;

            &:focus {
                outline: 1px solid var(--col-main);
                border: 1px solid var(--col-main);
            }
        }
    }

    button {
        margin-top: 22px;
        font-size: 14px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 0.5px;
    }
}
</style>