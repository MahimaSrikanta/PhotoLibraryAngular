app.service("photoLib",function($http){
    //post request
    this.postPhoto = function(link,title,callback) {
        //  $.ajax({
        //     url: '/photoUpload',
        //     method: 'POST',
        //     contentType: 'application/json',
        //     data :{link: link, title : title},
        //     success : function (data) {      
        //         console.log('get request for history sent!');
        //     },
        //     error : function (err) {
        //         console.error('error occured at get request')
        //     }
        // })

        var req = {
        method: 'POST',
        url: '/photoUpload',
        headers: {
            'Content-Type': 'application/json'
        },
        data :{link: link, title : title},
        }

        $http(req).then(function(response) {
          callback( response.data);
        }, function(err) {
          console.log(err);
        });
    };
    this.getPhoto = function(callback) {
        var req = {
         method: 'GET',
         url: '/getPhotos',
         headers: {
            'Content-Type': 'application/json'
         },
        }
        $http(req).then(function(response) {
          callback( response);
        }, function(err) {
          console.log(err);
        });

    }

    


});