<template>
  <div>
      <label v-if="label">{{label}}</label>
      <slot></slot>
      <p v-if="errorMessage" style="color:red;">{{errorMessage}}</p>  
  </div>
</template>

<script>
  import Schema from 'async-validator'

  export default {
    inject: ['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    data() {
      return {
        errorMessage: ''
      }
    },
    mounted () {
      //监听子组件input事件 value修改触发
      this.$on('validate',this.validate);
    },
    methods: {
      validate() {
        const value = this.form.model[this.prop];
        const rules = this.form.rules[this.prop];

        console.log(this.prop);   //  username/password
        //校验
        const desc = {[this.prop]: rules};
        const schema = new Schema(desc);
        //这里返回的是一个promise对象
        return schema.validate({ [this.prop]:value }, errors => {
          if(errors){
            this.errorMessage = errors[0].message;
          }else{
            this.errorMessage = '';
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>