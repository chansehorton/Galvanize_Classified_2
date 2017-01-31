(function() {
  'use strict';

  angular.module('app')
    .component('advert', {
      controller: AdvertCtrlr,
      templateUrl: '/js/advert/advert.template.html',
      bindings: {
        ad: '<'
      }
    });

    AdvertCtrlr.$inject = ['advertSvc']

    function AdvertCtrlr(advertSvc){
      const vm = this;

      vm.$onInit = function() {
        vm.formVisible = false;
      }

      vm.deleteThisPost = function() {
        console.log('Delete command issued from advert component');
        advertSvc.deleteAdvert(vm.ad.id);
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
