<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="toglePage(pageNo--)">上一页</button>
    <button v-if="statrAndEnd.start>1" @click="toglePage(1)">1</button>
    <button v-if="statrAndEnd.start>2">···</button>
    <template v-for="(item,index) in totalPage" >
        <button v-if="item>=statrAndEnd.start && item<=statrAndEnd.end" :key="index" @click="toglePage(item)" :class="{active:pageNo === item}">{{item}}</button>
    </template>
    <button v-if="statrAndEnd.end<totalPage-1">···</button>
    <button v-if="statrAndEnd.end<totalPage" @click="toglePage(totalPage)">{{totalPage}}</button>
    <button :disabled="pageNo === totalPage" @click="toglePage(pageNo++)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
    name: 'Pagination',
    data(){
        return{
            continues: 5,
        }
    },
    props: {
        totalPage: Number,
        pageNo: Number,
        pageSize: Number,
        total: Number,
    },
    computed:{
        statrAndEnd(){
            let start = 0
            let end = 0
            if(this.continues>=this.totalPage){
                start = 1
                end = this.totalPage
            }else{
                if(this.pageNo<this.continues){
                    start = 1
                    end = this.continues
                }else if(this.pageNo>=(this.totalPage-parseInt(this.continues/2))){
                    start = this.totalPage - this.continues + 1
                    end = this.totalPage
                }else{
                    start = this.pageNo - parseInt(this.continues/2)
                    end = this.pageNo + parseInt(this.continues/2)
                }
            }
            return {start,end}
        }
    },
    methods:{
        toglePage(page){
            this.$emit('changePage',page)
        }
    }
};
</script>

<style scoped lang="less">
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>