<template>
  <div id="wrapper">
    <div id="dice" @click="roll">
      <div class="row">
        <div v-bind:class="{black : randomNumber === 4 || randomNumber === 5 || randomNumber === 6}" class="circle"></div>     
        <div class="circle"></div>     
        <div v-bind:class="{black : randomNumber === 4 || randomNumber === 5 || randomNumber === 6 || randomNumber === 3}" class="circle"></div>    
      </div>
      <div class="row">
        <div v-bind:class="{black : randomNumber === 2 || randomNumber === 6}" class="circle"></div>    
        <div v-bind:class="{black : randomNumber === 1 || randomNumber === 3 || randomNumber === 5}" class="circle"></div>    
        <div v-bind:class="{black : randomNumber === 2 || randomNumber === 6}" class="circle"></div>    
      </div>
      <div class="row">
        <div v-bind:class="{black : randomNumber === 4 || randomNumber === 5 || randomNumber === 6 || randomNumber === 3}" class="circle"></div>     
        <div class="circle"></div>     
        <div v-bind:class="{black : randomNumber === 4 || randomNumber === 5 || randomNumber === 6}" class="circle"></div> 
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dice',
    data(){
      return{
        randomNumber: 1,
      }
    },
    methods: {
      roll(){
        for(let i = 0; i < 5; i++){
          setTimeout(()=>{
            this.randomNumber = Math.round(Math.random() * 5) + 1;
          }, (75*i)+10)
        }
      },
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 8%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    width: 100vw;
    padding-top: 17.5vh;
  }
  #dice{
    width: 65vh;
    height: 65vh;
    padding: 2vh;
    margin: auto;
    border: 2px solid black;
    border-radius: 10%;
  }
  #dice:hover{
    border: teal 2px solid; 
  }
  .row{
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }
  .circle{
    width: 20vh;
    height: 20vh;
    background-color: transparent;
    border-radius: 50%;
  }
  .black{
    background-color: black;
  }
</style>
