(function() {
 'use strict';

 angular.module('app')
   .service('advertSvc', function($http) {

    this.advertArray = [];
    const adSvc = this;

    this.getAllAdverts = function() {
      return $http.get('/classifieds')
        .then(response => {
          return Promise.resolve(this.advertArray = response.data);
        })
    }

    this.findById = function(id) {
      return $http.get(`/classifieds/${id}`)
        .then((response) => {
          return response
        })
    }

    this.postAdvert = function(postInfo) {
      return $http.post('/classifieds', postInfo)
        .then((response) => {
          return this.advertArray.push(response.data);
        });
    }

    this.updateAdvert = function(updateInfo) {
      const thisId = updateInfo.id;
      delete updateInfo.id;

      return $http.patch(`/classifieds/${thisId}`, updateInfo)
      .then((response) => {
        for (let i=0; i < adSvc.advertArray.length; i++) {
          if (adSvc.advertArray[i].id === response.data.id) {
            adSvc.advertArray.splice(i, 1);
            return adSvc.advertArray.push(response.data);
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
    }

    this.deleteAdvert = function(id) {
      return  $http({
        method:'DELETE',
        url: `/classifieds/${id}`
      })
      .then((response) => {
        for (let i=0; i < adSvc.advertArray.length; i++) {
          if (adSvc.advertArray[i].id === response.data.id) {
            return adSvc.advertArray.splice(i, 1);
          }
        }
      })
    }

  });

}());
