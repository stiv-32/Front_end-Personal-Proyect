<script>
export default {
}
</script>

<template>
    <header id="header">
        <div id="logo_container">
            <img src="../../assets/img/L.Global.png" alt="">
            <h1>GLOBAL SPORTS GROUP</h1>
            <router-link to="/login" class="button hideOnMobile login_button">Log In</router-link>
        </div>

        <div id="desktop-nav">
            <router-link to="/" class="button underline hideOnMobile">Home</router-link>
            <router-link to="/historia" class="button underline hideOnMobile">Proyectos</router-link>
            <router-link to="/experiencia" class="button underline hideOnMobile">Experiencia</router-link>
            <router-link to="/aliados" class="button underline hideOnMobile">Aliados</router-link>
            <router-link to="/admin" class="button underline hideOnMobile">Admin</router-link>
        </div>

    </header>
</template>

<style lang="scss" scoped>
#header {
    background: radial-gradient(circle, rgb(31, 49, 82) 95%, rgb(255, 222, 121) 100%);

    #logo_container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        img {
            width: 13vw;
            max-width: 200px;
        }

        h1 {
            color: rgb(255, 185, 44);
        }

        .login_button {
            border-radius: 0.5rem;
            padding: .6rem 1.5rem ;
            margin: 1rem 2rem 0 0;
            transition: 300ms ease-in-out;
            background-color: white;
        }

        .login_button:hover {
            background-color: rgb(208, 218, 247);
            color: black;
        }

    }

    .button {
        text-decoration: none;
        font-size: small;
        color: rgb(255, 185, 44);
    }

    #desktop-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12rem;
        padding: 1rem;
    }
}
</style>