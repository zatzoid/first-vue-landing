<template>
    <footer>
        <div class="footer">
            <div class="footer__el">
                <h5>CREATE<span>X</span></h5>
                <div class="footer__el-logos">
                    <img src="@/assets/whatsapp-logo.svg" alt="wa">
                    <img src="@/assets/whatsapp-logo.svg" alt="wa">
                    <img src="@/assets/whatsapp-logo.svg" alt="wa">
                    <img src="@/assets/whatsapp-logo.svg" alt="wa">
                    <img src="@/assets/whatsapp-logo.svg" alt="wa">
                </div>
                <p class="grid-span1-2">Createx Construction Bureau has been successfully operating inthe USA construction
                    market since 2000. We
                    are proud to offer you quality construction and exemplary service. Our mission is to set the highest
                    standards for construction sphere.</p>
            </div>
            <form class="footer__el footer__el_two">
                <h5 class="grid-span1-2">Let’s stay in touch</h5>
                <input type="email" name="email">
                <button type="submit" class="btn-hover-orange">SUBSCRIBE</button>
                <p class="grid-span1-2">*Subscribe to our newsletter to receive communications and early updates from
                    Createx Construction
                    Bureau.</p>
            </form>
            <div class="footer__el">
                <div>
                    <h5>HEAD OFFICE</h5>
                    <p><span>Address:</span>8502 Preston Rd. Inglewood, New York</p>
                    <p><span>Call:</span>(405) 555-0128</p>
                    <p><span>Email:</span>hello@createx.com</p>
                </div>
                <div class="footer__el-contacts">
                    <h5>WHO WE ARE</h5>
                    <p>About Us</p>
                    <p>Available Positions</p>
                    <p>Contacts</p>
                </div>
            </div>
            <div class="footer__el">
                <div>
                    <h5>OUR EXPERIENCE</h5>
                    <p>Services</p>
                    <p>Work</p>
                    <p>News</p>
                </div>
            </div>
            <p>made by <a href="https://github.com/zatzoid">zatzoid</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSection'
}
</script>

<style scoped lang="scss">
footer {
    background-color: #1E212C;
}
a{
    color: white;
    
}
h5 {
    font-size: 30px;
    font-weight: 700;
    color: white;
    margin: 0 0 24px;

    span {
        color: var(--col-main);
    }
}

p {
    margin: 0;
    color: #9d9fa5;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;


    span {
        color: white;
    }
}

.grid-span1-2 {
    grid-column: 1 / span 2;
}

.footer {
    max-width: var(--max-width);
    margin: auto;
    padding: 80px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: white;
    gap: 49px 124px;

    &__el {
        display: grid;
        grid-template-columns: 1fr 1fr;

        &-logos {
            display: flex;
            gap: 16px;
            margin-bottom: 24px;
        }

        &_two {
            grid-template-columns: 3fr 1fr;

            button {
                border-radius: 0;


            }

            input {
                color: white;
                height: 44px;
                background-color: #727ea83f;
                border: 1px solid black;

            }
        }
        &-contacts{
            margin-left: auto;
        }
    }


}
</style>