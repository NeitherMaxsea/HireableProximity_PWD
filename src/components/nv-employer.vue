<template>
  <header class="topbar">
    <div></div>

    <div class="datetime">
      {{ currentDate }} • {{ currentTime }}
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarAdmin",

  data(){
    return{
      currentTime:"",
      currentDate:""
    }
  },

  mounted(){
    this.updateTime()
    setInterval(this.updateTime,1000)
  },

  methods:{
    updateTime(){
      const now = new Date()
      this.currentTime = now.toLocaleTimeString()
      this.currentDate = now.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.topbar{
  height:55px;
  background:white;
  border-bottom:1px solid #e5e7eb;
  padding:0 25px;
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.datetime{
  font-size:14px;
  color:#374151;
}
</style>
