/**
 * Created by christopherfricke on 9/14/14.
 */

angular.module('pgroutingApp')
    .factory('routeModel', function($window) {
    var url = 'http://routingservice-bmoregeoweb.rhcloud.com/api/v1/route';

    return {
        url: url
    };
});