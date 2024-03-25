<script setup>
import FooterView from '@/components/general/FooterView.vue';
</script>

<template>
  <article id="article">
    <div id="Page_Experience">
      <h1>DEPORTISTAS GLOBAL</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet aut. Asperiores obcaecati delectus iste,
        id totam voluptas blanditiis molestiae minus quod enim expedita velit qui! Consequuntur hic omnis
        inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet aut. Asperiores obcaecati
        delectus iste,
        id totam voluptas blanditiis molestiae minus quod enim expedita velit qui! Consequuntur hic omnis inventore!</p>
      <img src="../assets/img/Present 1.PNG" alt="">
    </div>
    <div id="Page_Experience">
      <h1>DEPORTES FUTAMERICAN</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet aut. Asperiores obcaecati delectus iste,
        id totam voluptas blanditiis molestiae minus quod enim expedita velit qui! Consequuntur hic omnis
        inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet aut. Asperiores obcaecati
        delectus iste,
        id totam voluptas blanditiis molestiae minus quod enim expedita velit qui! Consequuntur hic omnis inventore!</p>
      <img src="../assets/img/Present 2.PNG" alt="">
    </div>
    <div id="Page_Experience">
      <h1>EXITOS GLOBAL BASKFEM</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet aut. Asperiores obcaecati delectus iste,
        id totam voluptas blanditiis molestiae minus quod enim expedita velit qui! Consequuntur hic omnis
        inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet aut. Asperiores obcaecati
        delectus iste,
        id totam voluptas blanditiis molestiae minus quod enim expedita velit qui! Consequuntur hic omnis inventore!</p>
      <img src="../assets/img/Present 3.PNG" alt="">
    </div>
    <div id="Page_Experience">
      <h1>EXITOS GLOBAL FUTFEM</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet aut. Asperiores obcaecati delectus iste,
        id totam voluptas blanditiis molestiae minus quod enim expedita velit qui! Consequuntur hic omnis
        inventore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, amet aut. Asperiores obcaecati
        delectus iste,
        id totam voluptas blanditiis molestiae minus quod enim expedita velit qui! Consequuntur hic omnis inventore!</p>
      <img src="../assets/img/Present 4.PNG" alt="">
    </div>
  </article>
  <FooterView />
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  
  #Page_Experience {
    padding: 1rem;

    img {
      width: 35vw;
      padding: 0 14rem 2rem 14rem;
    }

    p {
      padding: 0 14rem 2rem 14rem;
      font-size: medium;
    }

  }

}
</style>