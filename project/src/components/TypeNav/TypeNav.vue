<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="ShowNav" @mouseleave="hideNav">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="fade">
        <div class="sort" v-show="isShowNav">
          <div class="all-sort-list2" @click="toSearch($event)" @mouseenter="ShowNav" @mouseleave="hideNav">
            <div class="item bo" v-for="(category1,index) in categoryList" :key="category1.categoryId" @mouseenter="changeIndex(index)" :class="{cur:currentIndex === index}" @mouseleave="leaveIndex">
              <h3>
                <a :cid1="category1.categoryId" href="javascript:;">{{category1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem" v-for="category2 in category1.categoryChild" :key="category2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :cid2="category1.categoryId" href="javascript:;">{{category2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="category3 in category2.categoryChild" :key="category3.categoryId">
                        <a :cid3="category3.categoryId" href="javascript:;">{{category3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "TypeNav",
  data(){
    return{
      currentIndex: -1,
      isShowNav: true
    }
  },
  computed:{
    ...mapState({
      categoryList(state){
        return state.home.categoryList
      }
    })
  },
  mounted(){
    if(this.$route.path.includes('/search')||this.$route.path.includes('/detail')){
      this.isShowNav = false
    }
  },
  methods:{
    changeIndex(index){
      this.currentIndex = index
    },
    leaveIndex(){
      this.currentIndex = -1
    },
    ShowNav(){
      if(this.$route.path.includes('/search')||this.$route.path.includes('/detail')){
      this.isShowNav = true
      }
    },
    hideNav(){
      if(this.$route.path.includes('/search')||this.$route.path.includes('/detail')){
      this.isShowNav = false
      }
    },
    toSearch(e){
      let cid1 = e.target.getAttribute('cid1')
      let cid2 = e.target.getAttribute('cid2')
      let cid3 = e.target.getAttribute('cid3')
      if(cid1){
        // this.$router.push(`/search?categoryName=${e.target.innerText}&category1Id=${cid1}`)
        this.$router.push({name:'search',query:{categoryName:e.target.innerText,category1Id:cid1},params:this.$route.params}).catch(()=>{})
        // this.$store.dispatch('getSearchList',{category1Id:cid1,categoryName:e.target.innerText,keyword:this.$route.params.keyword})
      }else if(cid2){
        // this.$router.push(`/search?categoryName=${e.target.innerText}&category2Id=${cid2}`)
        this.$router.push({name:'search',query:{categoryName:e.target.innerText,category2Id:cid2},params:this.$route.params}).catch(()=>{})
        // this.$store.dispatch('getSearchList',{category2Id:cid2,categoryName:e.target.innerText,keyword:this.$route.params.keyword})
      }else if(cid3){
        // this.$router.push(`/search?categoryName=${e.target.innerText}&category3Id=${cid3}`)
        this.$router.push({name:'search',query:{categoryName:e.target.innerText,category3Id:cid3},params:this.$route.params}).catch(()=>{})
        // this.$store.dispatch('getSearchList',{category3Id:cid3,categoryName:e.target.innerText,keyword:this.$route.params.keyword})
      }
    },
  }
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 27px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .cur{
          background-color: skyblue;
        }
      }
    }
    .fade-enter,.fade-leave-to{
      opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
      transition: .5s;
    }
  }
}
</style>