<template>
    <div>{{ fullName }}</div>
</template>

<script>
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
// fullName属性依赖于firstName和lastName，这里有个缺点就是，无论firstName或lastName其中的任何一个发生改变时，
// 都要调用不同的监听函数来更新fullName属性。但是当我们使用计算属性时，代码就会变得更加简洁。
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    msg:665,
		ist:[{name:'John','age':12}]

  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
// 这时，我们只要监听fullName属性就行，至于firstName或lastName属性的任何改变，
// 我们都可以通过fullName的getter()方法得到最终的fullName值。
// 另外需要注意的是，计算属性可以同时设置getter()、setter()方法。例如：
computed: {
  fullName: {
    // getter
    // 这里不能用箭头函数
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// 总结：我们可以把computed理解成vue的动态属性，而data是静态属性，动态属性可以通过getter方法获取值也可以通过setter方法设置值

// watch函数适用于，当数据发生变化时，执行异步操作或较大开销操作的情况，监听用来监听静态属性
// 或许可以认为watch相当于computed的setter方法
// watch 可以执行一些副作用和设置中间状态
watch: {
				msg(newVal,oldVal) {
					console.log(this.msg);
					console.log(newVal); //返回msg未改变前的值
					console.log(oldVal); //返回msg改变后的值
				},
				list() { //在变异 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。所以这里完全不会被调用到，需要对对象或数组进行深度观察
					console.log(this.list[0].name);
					console.log(this.list[0].age);
				},
				//对数组进行深度观察
				list: {
					deep:true,
					handler:function() {
						console.log('深度监视成功!!!!');
						console.log(this.list);
						console.log(this.list[0].name);
						console.log(this.list[0].age);
					}
					
				}
			}
</script>

<style lang="less" scoped>
</style>

