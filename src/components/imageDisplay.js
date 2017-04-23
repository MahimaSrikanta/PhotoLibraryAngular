app.directive("imageDisplay",function(){
    return{
        scope:{
            display:'<',
            selectRating:'<',
        },
        restrict:'E',
        bindToController:true,
        controllerAs:"ctrl",
        controller:function(){
           this.selections = [ "1 star", "2 star","3 star","4 star","5 star"];
    

        },
        templateUrl: "../src/Templates/imageDisplay.html"
    }
});