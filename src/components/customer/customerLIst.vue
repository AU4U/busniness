<template>
    <div class="content">
      <div class="cont_top"></div>
      <div class="cont_bottom">
        <div class="cont_menu">
            <menuDiv></menuDiv>
        </div>
        <div class="cont_cont">
          <customerlistCon></customerlistCon>
        </div>
      </div>
     </div>
  </template>
<script>
import menuDiv from '../menu.vue'
import customerlistCon from '../customer/customerlistCon.vue'
export default {
  data () {
    return {}
  },
  components: {
    'menuDiv': menuDiv,
    'customerlistCon': customerlistCon
  },
  methods: {}
}
</script>
  <style scoped>
  .content{
    height: 100%;
    width: 100%;
  }
  .cont_top{
    height:8%;
    width: 100%;
    background-color: #2b2f3a;
  }
  .cont_bottom{
    height:92%;
    width: 100%;
  }
  .cont_menu{
    width:15%;
    height:100%;
    float: left;
  }
  .cont_cont{
    width:85%;
    height:100%;
    float: left;
    background-color: blueviolet;
  }
  </style>