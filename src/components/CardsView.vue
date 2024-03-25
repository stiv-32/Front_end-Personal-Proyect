<script setup>

</script>

<template>
    <div>
        <h1>NUESTROS DEPORTES VIP</h1>
    </div>
    <section id="Card_Sports">

        <div class="Gallery">
            <img src="../assets/img/Card-Futbol.jpg" alt="">
            <h3>FUTBOL</h3>
        </div>
        <div class="Gallery">
            <img src="../assets/img/Card-Basket.jpg" alt="">
            <h3>BASKETBALL</h3>
        </div>
        <div class="Gallery">
            <img src="../assets/img/Card_Tenis.jpg" alt="">
            <h3>TENIS</h3>
        </div>
        <div class="Gallery">
            <img src="../assets/img/Card-besibol.jpg" alt="">
            <h3>BEISBALL</h3>
        </div>
        <div class="Gallery">
            <img src="../assets/img/Card-Americano.jpg" alt="">
            <h3>FUTBOL AMERICANO</h3>
        </div>
        <div class="Gallery">
            <img src="../assets/img/Card-DT.jpg" alt="">
            <h3>TECNICOS DEPORTIVOS</h3>
        </div>

    </section>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
}

#Card_Sports {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(257px, 1fr));
    grid-auto-rows: 320px;
    gap: 60px;

    .Gallery {
        height: 340px;
        border: 1px solid rgb(226, 210, 171);
        border-radius: .9rem .9rem .9rem 0rem;
        background: linear-gradient(90deg, rgba(250, 250, 248, 1) 0%, rgba(241, 170, 2, 0.7289040616246498) 50%, rgba(247, 238, 218, 1) 100%, rgba(255, 255, 255, 1) 100%);

        img {
            width: 100%;
            height: 85%;
            object-fit: cover;
            border-radius: .9rem .9rem .9rem 0rem;
        }

        h3 {
            color: rgb(140, 94, 38);
            text-align: center;
        }
    }

    #Card_Sports .Gallery {
        height: 80%;
    }
}
</style>