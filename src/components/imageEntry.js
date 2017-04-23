app.directive("imageEntry", function(){
    return{
        scope:{
            image:'<',
            onClick:'<',
        },
        restrict:'E',
        bindToController:true,
        controllerAs:"ctrl",
        controller:function(){
  
        },
        templateUrl: "../src/Templates/imageEntry.html"
    }

})