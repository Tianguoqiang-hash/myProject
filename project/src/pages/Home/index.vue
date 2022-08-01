<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="item in floors" :key="item.id" :floors="item"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav/TypeNav.vue";
import ListContainer from "@/components/ListContainer/ListContainer";
import Recommend from "@/components/Recommend/Recommend.vue";
import Rank from "@/components/Rank/Rank.vue";
import Like from "@/components/Like/Like.vue";
import Floor from "@/components/Floor/Floor.vue";
import Brand from "@/components/Brand/Brand.vue";
import {mapState} from 'vuex'
export default {
  name: "Home",
  components: { TypeNav, ListContainer, Recommend, Rank, Like, Floor, Brand},
  computed:{
    ...mapState({floors:(state)=>state.home.floors})
  },
  mounted(){
      this.$store.dispatch('getFloors')
    },
};
</script>

<style scoped lang="less">
</style>