//Globally registered components
Vue.component('component-a', {
  template: '<h2>Component a</h2>',
})

Vue.component('component-b', {
    template: '<h2>Component b</h2>',
})

//Locally registered components
var ComponentC = { template: '<h2>Component c</h2>' }
var ComponentD = { template: '<h2>Component d</h2>' }

new Vue({
    el: '#app',
    components: {
        'component-c': ComponentC,
        'component-d': ComponentD,
    },
    data: function() {
        return {
            
        }
    }
})