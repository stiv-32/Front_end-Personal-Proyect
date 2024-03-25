<script setup>
import FooterView from '@/components/general/FooterView.vue';
</script>

<template>
  <article>
    <h1>NUESTRAS PROYECCIONES</h1>
    <div id="Proyect_History">
      <div class="art_box">
        <h2>VISION</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate magnam assumenda
          rerum neque quos id consequatur. Architecto, quia. Perferendis eos exercitationem dolores odit similique a
          labore nihil? ModiLorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate
          magnam assumenda
          rerum neque quos id consequatur. Architecto, quia. Perferendis eos exercitationem dolores odit similique a
          labore nihil? Modi.</p>
        <img src="../assets/img/Talentos.jpg" alt="">
      </div>
      <div class="art_box">
        <h2>UNIMOS AL MUNDO</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate magnam assumenda
          rerum neque quos id consequatur. Architecto, quia. Perferendis eos exercitationem dolores odit similique a
          labore nihil? ModiLorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate
          magnam assumenda
          rerum neque quos id consequatur. Architecto, quia. Perferendis eos exercitationem dolores odit similique a
          labore nihil? Modi.</p>
        <img src="../assets/img/Proyect.jpg" alt="">
      </div>
      <div class="art_box">
        <h2>MISION</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate magnam assumenda
          rerum neque quos id consequatur. Architecto, quia. Perferendis eos exercitationem dolores odit similique a
          labore nihil? Modi Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate
          magnam assumenda
          rerum neque quos id consequatur. Architecto, quia. Perferendis eos exercitationem dolores odit similique a
          labore nihil? Modi.</p>
        <img src="../assets/img/Grupo de trabajo.jpg" alt="">
      </div>
    </div>
  </article>
  <FooterView />
</template>

<style lang="scss" scope>
h1 {
  text-align: center;
  padding: 2rem;
  font-size: 2.5rem;
}

#Proyect_History {

  .art_box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: medium;
    text-align: justify;
    padding: 2rem;

    p {
      padding: 0 14rem 2rem 14rem;
    }
  }

  img {
    width: 24vw;
    height: 42vh;
    border-radius: .9rem;
    box-shadow: 1px 1px 8px 2px rgb(22, 50, 135);
  }

}
</style>
