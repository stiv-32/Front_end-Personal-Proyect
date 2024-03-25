<script setup>
import FooterView from '@/components/general/FooterView.vue';
</script>

<template>
  <main>
    <div id="Container">
      <h1>ESCUELAS ALIADAS</h1>
      <div class="Container_Cards">
        <div class="Container_Futbol">
          <h2>ALIADA FUTB</h2>
          <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa accusamus voluptatibus laboriosam
            similique
            saepe sint nulla neque doloribus, totam distinctio. Velit voluptatibus facere quia asperiores quaerat
            officia voluptate id officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore sit
            praesentium quia quasi, alias perspiciatis aperiam excepturi ipsum minus esse. Asperiores, odio. Fugit
            vero
            quo doloribus nam cupiditate ipsam.</P>
          <img src="./../assets/img/escuela futbol 1.webp" alt="">
          <img src="../assets/img/escuela de futbol 2.jpg" alt="">
        </div>

        <div class="Container_FutAmerican">
          <h2>ALIADA FUT AMERICAN</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa accusamus voluptatibus laboriosam
            similique
            saepe sint nulla neque doloribus, totam distinctio. Velit voluptatibus facere quia asperiores quaerat
            officia voluptate id officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore sit
            praesentium quia quasi, alias perspiciatis aperiam excepturi ipsum minus esse. Asperiores, odio. Fugit
            vero
            quo doloribus nam cupiditate ipsam.</P>
          <img src="../assets/img/escuela amer 1.jpg" alt="">
          <img src="../assets/img/escuela amer 2.jpg" alt="">
        </div>

        <div class="Container_Basket">
          <h2>ALIADA BASKET</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa accusamus voluptatibus laboriosam
            similique
            saepe sint nulla neque doloribus, totam distinctio. Velit voluptatibus facere quia asperiores quaerat
            officia voluptate id officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore sit
            praesentium quia quasi, alias perspiciatis aperiam excepturi ipsum minus esse. Asperiores, odio. Fugit
            vero
            quo doloribus nam cupiditate ipsam.</P>
          <img src="./../assets/img/escuela basket fem.jpg" alt="">
          <img src="../assets/img/escuela basket fem.jpg" alt="">
        </div>
      </div>
    </div>

  </main>
  <FooterView />
</template>

<style lang="scss" scope>
#Container {
  display: flex;
  flex-direction: column;

  .Container_Cards {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;

    h2 {
      padding: 0 14rem 1rem 14rem;
    }

    p {
      padding: 0 2rem 2rem 2rem;
      font-size: medium;
      text-align: justify;
    }

    img {
      width: 25vw;
      height: 35vh;
      padding: 5rem;
      filter: drop-shadow(0 6px 5px rgba(219, 161, 14, 0.783));
    }
  }
}
</style>