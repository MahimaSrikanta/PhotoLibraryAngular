
app.directive ("imageList",function(){
    return {
        scope:{
            images: '<',
            onClick:'<',
            imagess: '<',
        },
        restrict:"E",
        bindToController:true,
        controllerAs:"ctrl",
        controller:function(){
            console.log(this.imagess)
        },
        templateUrl: "../src/Templates/imageList.html"
    }
});
