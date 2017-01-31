(function() {
  'use strict';

  angular.module('app')
    .component('main', {
      controller: MainCtrlr,
      templateUrl: '/js/main/main.template.html'
    });

    MainCtrlr.$inject = ['advertSvc']

    function MainCtrlr(advertSvc){
      const vm = this;


      vm.$onInit = function() {

        vm.sortVal='title';
        vm.formVisible = false;

        advertSvc.getAllAdverts()
          .then(() => {
            return vm.currentAdverts = advertSvc.advertArray;
          })
          .catch(err => {
            console.log(err);
          });
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
