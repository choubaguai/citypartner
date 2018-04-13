<template>
  <div class="mine">
        <div class="main">
            <img src="../../static/images/icon_logo.png" alt="">
        </div>

     
  </div>
</template>

<script>
export default {
    created(){
        setTimeout(()=> {
             this.$router.push('/login');
             console.log(111);
        }, 3000);    

    }
}
</script>

<style scoped>
.mine,.main{
    height: 100%;
    width: 100%;
    background-color: #fff;
}

.main img{
    width: 40%;
    position: fixed;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);

}

</style>
