
app.directive ("imageList",function(){
    return {
        scope:{
            images: '<',
            onClick:'<',
        },
        restrict:"E",
        bindToController:true,
        controllerAs:"ctrl",
        controller:function(){
        },
        templateUrl: "../src/Templates/imageList.html"
    }
});
