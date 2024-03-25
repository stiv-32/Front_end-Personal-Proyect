<script setup>

</script>

<template>
    <section id="Footer_Main">
        <div class="Information_Global">
            <h2>GLOBAL SPORTS CONSULTANS</h2>
            <div class="Contact">
                <img src="../icons/whatsapp.png" alt="">
                <h3>Contacto:</h3>
            </div>
            <p>+1 141765881</p>
            <p>+64 5789870</p>
            <div class="box">
                <img src="../icons/icons8-correo-50.png" alt="">
                <h3>Global.Sports2@gmail.com</h3>
            </div>
        </div>

        <div class="Infor">
            <h3>Informacion</h3>
            <p>Representaciones</p>
            <p>Nuestra Vision</p>
            <p>Trayecto empresarial</p>
            <p>Testimonios</p>
        </div>

        <div class="Terminos">
            <h3>Legalidad</h3>
            <p>Politia de Privacidad</p>
            <p>Terminos y Condiciones </p>
            <p>Acuerdos de plan</p>
            <p>Cookies Settings</p>
        </div>
    </section>

    <section id="Footer">

        <div class="Logo_Footer">

            <div class="Social_Footer">
                <img src="../icons/square-facebook.svg" alt="">
                <img src="../icons/square-x-twitter.svg" alt="">
                <img src="../icons/linkedin.svg" alt="">
                <img src="../icons/square-instagram.svg" alt="">
                <img src="../icons/youtube.svg" alt="">
            </div>
        </div>
        <div id="Copry_Footer">
            <img src="../../assets/img/L.Global.png" alt="">
            <p>Copyright © 2../../assets/img/Captura_Globan-removebg-preview 1.png010-2024 Global Company S.L. Todos los derechos reservados.</p>
        </div>

    </section>

</template>

<style lang="scss" scoped>
#Footer_Main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10rem;
    background: linear-gradient(0deg, rgba(59, 83, 167, 1) 0%, rgba(0, 0, 0, 1) 100%);
    color: white;
    font-size: small;

    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    .Information_Global {
        .Contact {
            display: flex;
            gap: .5rem;
            align-items: center;
        }
    }

    .box {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
}

#Footer {
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(59, 83, 167, 1) 100%);
    color: white;

    .Logo_Footer {

        .Social_Footer {
            display: flex;
            justify-content: center;
            gap: 3rem;
            align-items: center;
            background-color: rgb(255, 196, 70);
        }

        .Social_Footer img {
            width: 3rem;
            height: 2.5rem;
        }
    }

    #Copry_Footer {
        display: flex;
        flex-direction: column;
        align-items: center;
       
        img {
            width: 8rem;
        }
    }
}
</style>