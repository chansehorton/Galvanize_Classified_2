(function() {
  'use strict';

  angular.module('app')
    .component('adForm', {
      controller: AdFormCtrlr,
      templateUrl: "/js/adForm/adForm.template.html",
      bindings: {
        advert: '<',
        editFlag: '<',
        formVisible: '='
      }
    });

    AdFormCtrlr.$inject = ['advertSvc']


  function AdFormCtrlr(advertSvc) {
    const vm = this;

    vm.$onInit = function() {

      vm.newPost = {};

      if (vm.editFlag) {
          vm.newPost.id = vm.advert.id
          vm.newPost.title = vm.advert.title
          vm.newPost.price = vm.advert.price
          vm.newPost.description = vm.advert.description
          vm.newPost.item_image = vm.advert.item_image
        }
    }

    vm.createNewPost = function() {

      if (vm.editFlag) {
        advertSvc.updateAdvert(vm.newPost)
      } else {
        delete vm.newPost.id
        advertSvc.postAdvert(vm.newPost)
      }

      delete vm.newPost
      vm.toggleFormVis();
    }

    vm.toggleFormVis = function() {
      if (vm.formVisible === true) {
        vm.formVisible = false
      } else {
        vm.formVisible = true
      }
    }

  }

}());
