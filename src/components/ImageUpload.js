app.directive("imageUpload",function(){
    return{
        scope:{
          uploadImage:"<" 
        },
        restrict:"E",
        bindTocontroller:true,
        controllerAs:"ctrl",
        controller:function(){

        },
        templateUrl:"../src/Templates/imageUpload.html"
    }
})