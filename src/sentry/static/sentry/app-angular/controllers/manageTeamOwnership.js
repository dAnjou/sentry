(function(){
  'use strict';

  SentryApp.classy.controller({
    name: 'ManageTeamOwnershipCtrl',

    inject: ['$scope', '$http', 'selectedTeam'],

    init: function() {
      this.$scope.newOwner = null;
    },

    isUnchanged: function(value) {
      return value === null;
    },

    saveForm: function() {
      this.$http.put('/api/0/teams/' + this.selectedTeam.id + '/', {
        'owner': this.$scope.newOwner
      }).success(function(data){
        window.location.href = '/';
      });
    }
  });
}());