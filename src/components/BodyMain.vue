<script setup>

</script>

<template>

    <article id="Images_Main">
        <div class="Img_sports">
            <img src="../assets/img/Futbol preview.png" alt="">
            <img src="../assets/img/Futbol_am preview.png" alt="">
            <img src="../assets/img/basketball preview.png" alt="">
            <img src="../assets/img/beisball preview.png" alt="">
        </div>

        <div class="Proyect">
            <hr>
            <h1>SPORTS PROJECTS</h1>
        </div>
    </article>

</template>

<style lang="scss" scoped>
#Images_Main {
    padding: 4rem;

    .Img_sports {
        display: flex;
        justify-content: center;
        flex-direction: row;

        img {
            width: 12vw;
            height: 13vh;
        }
    }

    .Proyect {
        padding: 2rem;

        hr {
            height: .5rem;
            border-radius: .5rem;
            background: linear-gradient(90deg, rgba(250, 250, 248, 1) 0%, rgba(255, 255, 255, 1) 0%, rgb(253, 193, 66) 56%, rgba(255, 201, 72, 0) 100%, rgba(255, 179, 0, 0.7289040616246498) 100%, rgba(247, 238, 218, 1) 100%);
            border: none;
        }

        h1 {
            text-align: center;
            color: rgb(140, 94, 38);
        }
    }

}
</style>