<script>
import progressCon from '@/components/progress/ProgressCon.vue'
import menuDiv from '@/components/menu.vue'

export default {
  components: {
    'menuDiv': menuDiv,
    'progressCon': progressCon
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<template>
  <div class="content">
    <div class="cont_top"></div>
    <div class="cont_bottom">
      <div class="cont_menu">
        <menuDiv></menuDiv>
      </div>
      <div class="cont_cont">
        <progressCon></progressCon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 100%;
  width: 100%;
}

.cont_top {
  height: 8%;
  width: 100%;
  background-color: #2b2f3a;
}

.cont_bottom {
  height: 92%;
  width: 100%;
}

.cont_menu {
  width: 15%;
  height: 100%;
  float: left;
}

.cont_cont {
  width: 85%;
  height: 100%;
  float: left;
  background-color: blueviolet;
}
</style>