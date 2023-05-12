export default {
    install(Vue) {
        Vue.filter('myslice', function (val) {
           return 'myfilter'
        }),
        Vue.mixin(
            {
                data() {
                    return {

                    }
                },

                methods: {

                },
            }
        );

        Vue.directive('mydirectives', {
            bind(el, binding, vnode) {

             }
            ,
            inserted(el, binding, vnode) {

             },
            update(el, binding, vnode, oldVnode) { 

            },
            componentUpdated(el, binding, vnode) {

             },
            unbind(el, binding, vnode) {

             },
        });


        Vue.prototype.hello= function () {
         alert("hello")
        };
    }
}