app.directive('favEntry', function(){
    return {
        scope:{
            pic:"<",
            onClick:"<",
        },
        restrict:"E",
        bindToController:true,
        controllerAs :"ctrl",
        controller: function(){

        },
        templateUrl: "../src/Templates/favEntry.html"
    }
})