
app.directive("app",function(){
    return {
      scope:{

      },

  
        restirct: "E",
        bindToController: true,
        controllerAs:"ctrl",
        controller : function(){
           this.imageData = imageObj;
           this.currentImage=imageObj[0]
           this.onClick=(image)=>{
            this.currentImage = image;
           }
           //To get the rating updated 
            this.selectfunc=(rat)=>{
              imageObj.map =(item)=>{
                if(item.Name === this.currentImage.Name){
                  item.rating= rat;
                }
              }
            this.currentImage.rating=rat;
          }
          this.uploadImage =(link,title)=>{
            console.log("hi");
          }
        },
       templateUrl: "../src/Templates/app.html"

    }
});


