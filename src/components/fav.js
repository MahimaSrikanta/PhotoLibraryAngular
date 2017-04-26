app.directive ("favList",function(){
    return {
        scope:{
            imagess :"<",
            onClick :"<",
           
        },
        restrict:"E",
        bindToController:true,
        controllerAs:"ctrl",
        controller:function(){
        },
        templateUrl: "../src/Templates/fav.html"
    }
});