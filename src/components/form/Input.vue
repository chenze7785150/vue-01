<template>
  <!-- v-model是绑定input值的语法糖 1.v-bind:value绑定值 2.@input绑定事件 -->
  <div> 
    <input type="text" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,  //取消父组件显示的属性
    props: {
      value: {
        type: String,
        default: ''
      },
    },
    methods: {
      onInput(e) {
        this.$emit('input',e.target.value)
        this.$parent.$emit('validate')    //向父级派发 校验事件
      }
    },
  }
</script>

<style scoped>
input {
  width: 200px;
  height: 30px;
  font-size: 18px;
}
</style>