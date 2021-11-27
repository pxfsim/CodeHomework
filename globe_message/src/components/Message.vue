<template>
  <div class="mes-wrapper">
      <p>{{text}}</p>
      <div class="slot-container">
          <slot name="content"></slot>
      </div>    
  </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String,
            default:'default'
        }
    }
}
</script>

<style>
.mes-wrapper{
    position: fixed;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-content: center; */
    left:50%;
    transform:translateX(-50%);
    height: 100px;
    width: 200px;
    border-radius: 10px;
    background-color: rgba(0,0,0,.3);
    font-size: 25px;
    color: #fff;
}

.mes-wrapper p {
    margin: 10px 0;
    display: flex;
    justify-content: center;
}

.slot-container{
    margin: 5px;
    display: flex; 
    /* flex-direction: column; */
    justify-content: center;
    align-content: center;
}
</style>