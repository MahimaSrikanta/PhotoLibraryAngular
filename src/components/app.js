
app.directive("app",function(){
    return {
      scope:{

      },
       restirct: "E",
        bindToController: true,
        controllerAs:"ctrl",
        controller : function(){
           this.imageData = imageObj;
           this.currentImage=imageObj[0];
           this.favList= [];
           this.onClick=(image)=>{
           this.currentImage = image;
           }
           //To get the rating updated 
            this.selectfunc=(selectedRating, selectedImage)=>{ 
              selectedImage.rating = selectedRating;
              //If rating is greater than 4 add to fav list
              if (Number.parseInt(selectedRating.split(" ")[0]) >= 4){
                this.favList.push(selectedImage);
                this.favList=_.uniq(this.favList);
              } else {
                var index = this.favList.indexOf(selectedImage);
                this.favList.splice(index,1);
              }
              console.log(this.favList);
     
            this.currentImage.rating=selectedRating;
          }
          this.upload =(link,title)=>{
            //Push the objects to database
            imageObj.push({"Image":link, "des":title,"rating":"0 star"});
            //clear the input boxes
            this.imageLink="";
            this.imageTitle="";

          }
        },
       templateUrl: "../src/Templates/app.html"

    }
});



