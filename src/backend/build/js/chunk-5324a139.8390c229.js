(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5324a139"],{"0c5c":function(e){e.exports=JSON.parse('[{"id":1,"name":"Cola-Cola 0,5 литра","image":"/public/img/cola.svg","price":56},{"id":2,"name":"Острый соус","image":"/public/img/sauce.svg","price":10},{"id":3,"name":"Картошка из печи","image":"/public/img/potato.svg","price":170}]')},"1b83":function(e,i,t){"use strict";t.d(i,"a",(function(){return v})),t.d(i,"d",(function(){return h})),t.d(i,"b",(function(){return x})),t.d(i,"c",(function(){return y})),t.d(i,"e",(function(){return O}));var n=t("5530");function r(e){if(Array.isArray(e))return e}t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0");function a(e,i){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,r,a=[],s=!0,c=!1;try{for(t=t.call(e);!(s=(n=t.next()).done);s=!0)if(a.push(n.value),i&&a.length===i)break}catch(d){c=!0,r=d}finally{try{s||null==t["return"]||t["return"]()}finally{if(c)throw r}}return a}}var s=t("06c5");t("d9e2");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,i){return r(e)||a(e,i)||Object(s["a"])(e,i)||c()}t("159b"),t("4fadc"),t("d81d");var u=t("2ef0"),o=t("4360"),m=t("1ce3"),l=t("2f62"),p=t("d920"),g=t("9fb0"),f=(t("fc24"),t("0c5c"),t("2b62")),b=(t("a2cc"),function(){return{notifications:[]}}),v=function(e){var i=Object(u["cloneDeep"])(m["a"]);return e&&Object.entries(e).forEach((function(e){var t=d(e,2),r=t[0],a=t[1];i[r]=Object(n["a"])(Object(n["a"])({},i[r]),{},{actions:a})})),new l["a"].Store({state:b(),mutations:o["b"],modules:i,plugins:[p["a"]]})},h=function(e){e.commit(g["i"],{module:"Cart",entity:"pizzaItems",value:[{id:"1",name:"Pizza name",doughId:1,sauceId:1,sizeId:1,ingredients:[{ingredientId:1,quantity:1},{ingredientId:2,quantity:1}],price:545,quantity:1}]})},x=function(e){e.commit(g["i"],{module:"Addresses",entity:"addresses",value:[{id:1,name:"Домик",userId:"1",street:"Зеленая",building:"1",flat:"1",comment:"Не звоните"}]})},y=function(e){e.commit(g["i"],{module:"Orders",entity:"orders",value:[{id:1,userId:"1",phone:"+777 777 777",addressId:1,orderAddress:{id:1,name:"Домик",userId:"1",street:"Зеленая",building:"1",flat:"1",comment:""},orderMisc:[{id:1,miscId:1,orderId:1,quantity:0}],orderPizzas:[{id:1,name:"Pizza name",doughId:1,sauceId:1,sizeId:1,ingredients:[{id:1,ingredientId:1,pizzaId:1,quantity:1},{id:2,ingredientId:2,pizzaId:1,quantity:1}],quantity:1,orderId:1}]}]})},O=function(e){e.commit(g["i"],{module:"Auth",entity:"user",value:f})}},"2b62":function(e){e.exports=JSON.parse('{"id":"uuid","name":"Вася Пупкин","email":"user@example.com","password":"user@example.com","avatar":"/public/img/users/user.jpg","phone":"+777 777 777"}')},"4c62":function(e,i,t){"use strict";t.r(i);var n=t("1da1"),r=(t("96cf"),t("7db0"),t("d3b7"),t("d3f5")),a=t("1b83"),s=t("cf1c"),c=t("2f62"),d=t("b789"),u=Object(r["createLocalVue"])();u.use(c["a"]);var o={id:null,street:"",building:"",flat:"",comment:""},m={id:null,street:"Зеленая",building:"1",flat:"1",comment:"Не звоните"};describe("CartView",(function(){var e,i,t,c={$router:{push:jest.fn()},$route:{params:{addressId:null}},$validator:s["a"]},l=function(e){t=Object(r["shallowMount"])(d["default"],e)};beforeEach((function(){e={Orders:{createOrder:jest.fn()}},i=Object(a["a"])(e)})),afterEach((function(){t.destroy()})),it("displays message if cart is empty",(function(){l({localVue:u,store:i,mocks:c});var e=t.find('[data-test="cart-empty"]'),n=t.find('[data-test="cart-items"]');expect(e.exists()).toBeTruthy(),expect(n.exists()).toBeFalsy()})),it("displays cart items and cart footer if cart isn't empty",(function(){Object(a["d"])(i),l({localVue:u,store:i,mocks:c});var e=t.find('[data-test="cart-items"]'),n=t.find('[data-test="cart-footer"]');expect(e.exists()).toBeTruthy(),expect(n.exists()).toBeTruthy()})),it("validation mixin has been called on form submit, invalid form isn't submitted",Object(n["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(a["d"])(i),l({localVue:u,store:i,mocks:c}),r=jest.spyOn(t.vm,"$validateFields"),s=t.find('[data-test="address-form"]'),s.vm.$emit("setAddress",{phone:"",address:o}),n.next=7,t.vm.$nextTick();case 7:return n.next=9,t.find('[data-test="order-form"]').trigger("submit");case 9:expect(r).toHaveBeenCalled(),expect(e.Orders.createOrder).not.toHaveBeenCalled();case 11:case"end":return n.stop()}}),n)})))),it("makes new order when valid form is submitted and displays success popup",Object(n["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Object(a["d"])(i),l({localVue:u,store:i,mocks:c}),r=t.find('[data-test="address-form"]'),r.vm.$emit("setAddress",{phone:"",address:m}),n.next=6,t.vm.$nextTick();case 6:return n.next=8,t.find('[data-test="order-form"]').trigger("submit");case 8:return expect(e.Orders.createOrder).toHaveBeenCalled(),n.next=11,t.vm.$nextTick();case 11:expect(t.find('[data-test="success-popup"]').exists()).toBeTruthy();case 12:case"end":return n.stop()}}),n)})))),it("success popup isn't displayed after it has been closed",Object(n["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(a["d"])(i),l({localVue:u,store:i,mocks:c}),n=t.find('[data-test="address-form"]'),n.vm.$emit("setAddress",{phone:"",address:m}),e.next=6,t.vm.$nextTick();case 6:return e.next=8,t.find('[data-test="order-form"]').trigger("submit");case 8:return e.next=10,t.vm.$nextTick();case 10:return r=t.find('[data-test="success-popup"]'),r.vm.$emit("close"),e.next=14,t.vm.$nextTick();case 14:expect(r.exists()).toBeFalsy();case 15:case"end":return e.stop()}}),e)}))))}))},"4fadc":function(e,i,t){var n=t("23e7"),r=t("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"6f53":function(e,i,t){var n=t("83ab"),r=t("e330"),a=t("df75"),s=t("fc6a"),c=t("d1e7").f,d=r(c),u=r([].push),o=function(e){return function(i){var t,r=s(i),c=a(r),o=c.length,m=0,l=[];while(o>m)t=c[m++],n&&!d(r,t)||u(l,e?[t,r[t]]:r[t]);return l}};e.exports={entries:o(!0),values:o(!1)}},fc24:function(e){e.exports=JSON.parse('{"dough":[{"id":1,"name":"Тонкое","image":"/public/img/dough-light.svg","description":"Из твердых сортов пшеницы","price":300},{"id":2,"name":"Толстое","image":"/public/img/dough-large.svg","description":"Из твердых сортов пшеницы","price":300}],"ingredients":[{"id":1,"name":"Грибы","image":"/public/img/filling/mushrooms.svg","price":33},{"id":2,"name":"Чеддер","image":"/public/img/filling/cheddar.svg","price":42},{"id":3,"name":"Салями","image":"/public/img/filling/salami.svg","price":42},{"id":4,"name":"Ветчина","image":"/public/img/filling/ham.svg","price":42},{"id":5,"name":"Ананас","image":"/public/img/filling/ananas.svg","price":25},{"id":6,"name":"Бекон","image":"/public/img/filling/bacon.svg","price":42},{"id":7,"name":"Лук","image":"/public/img/filling/onion.svg","price":21},{"id":8,"name":"Чили","image":"/public/img/filling/chile.svg","price":21},{"id":9,"name":"Халапеньо","image":"/public/img/filling/jalapeno.svg","price":25},{"id":10,"name":"Маслины","image":"/public/img/filling/olives.svg","price":25},{"id":11,"name":"Томаты","image":"/public/img/filling/tomatoes.svg","price":35},{"id":12,"name":"Лосось","image":"/public/img/filling/salmon.svg","price":50},{"id":13,"name":"Моцарелла","image":"/public/img/filling/mozzarella.svg","price":35},{"id":14,"name":"Пармезан","image":"/public/img/filling/parmesan.svg","price":35},{"id":15,"name":"Блю чиз","image":"/public/img/filling/blue_cheese.svg","price":50}],"sauces":[{"id":1,"name":"Томатный","price":50},{"id":2,"name":"Сливочный","price":50}],"sizes":[{"id":1,"name":"23 см","image":"/public/img/diameter.svg","multiplier":1},{"id":2,"name":"32 см","image":"/public/img/diameter.svg","multiplier":2},{"id":3,"name":"45 см","image":"/public/img/diameter.svg","multiplier":3}]}')}}]);
//# sourceMappingURL=chunk-5324a139.8390c229.js.map