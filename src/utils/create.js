import Vue from 'vue'

export default function create(Components,props){

  const vm = new Vue({
    render (h){
      // h就是createElement，返回虚拟dom（VNode）
      return h(Components,{props})
    }
  }).$mount()

  //手动挂载
  document.body.appendChild(vm.$el);

  //销毁方法
  const comp = vm.$children[0];     //获取vm的实例
  console.log(comp)
  comp.remove = function(){
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }

  return comp
}

