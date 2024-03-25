<script setup>

</script>

<template>
    <div class="container">
        <div class="Img_Log">
            <img src="../assets/img/deportes1.jpg" alt="">
        </div>

        <form @submit.prevent="login(username, password)">
            <h2>LOGIN</h2>
            <div id="inputs">
                <div>
                    <label for="username">Username</label>
                    <input type="text" name="username" placeholder="username" v-model="username">
                </div>

                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="password" v-model="password">
                </div>
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>

        <div class="Img_Log">
            <img src="../assets/img/deportes2.jpg" alt="">
            <p>SPORT</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;

    img {
        width: 23vw;
        height: 85vh;
        border-radius: .2em .9em .9em .2em;
        mix-blend-mode: multiply;
        filter: saturate(.2) opacity(.3) sepia(.9);
    }

    form {
        width: 40vw;
        background-color: rgba(255, 255, 255, 0.371);
        border-radius: 20px;
        backdrop-filter: blur(20px);
        color: rgb(254, 199, 57);
        box-shadow: 0 8px 10px 7px rgb(254, 199, 57);
        background: rgb(26, 81, 132);
        background: radial-gradient(circle, rgba(26, 81, 132, 0.7933298319327731) 0%, rgba(9, 26, 56, 1) 52%, rgba(0, 6, 12, 1) 100%);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 2.5em;
        font-weight: 500;
    }

    #inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        height: 40%;
        width: 65%;
        justify-content: space-between;

        >div {
            display: flex;
            flex-direction: column;
            gap: 1.5em;

            label {
                font-size: 1.8em;
                margin-left: 10px;
            }

            input {
                border: 0.1em solid#1b4b62;
                border-radius: 10px;
                height: 30px;
                padding: 10px;
                font-size: 1em;
            }
        }
    }

    button {
        width: 22%;
        padding: 1rem;
        margin: 12% 0px;
        border-radius: 8px;
        border: none;
        font-size: 1.5em;
        background-color: #90acbd;
        color: rgb(254, 199, 57);
    }
}
</style>