function loadAndResizeImage()
{
    if (window.File && window.FileReader && window.FileList && window.Blob) 
    {
        //get image from form
        var inputFile = document.getElementById("imageId");
        var fileToUpload = inputFile.files[0];
        
        //open and resize the image thx to File API
        var fileReader = new FileReader();
        fileReader.onloadend = function(){
            //image loaded by reader into Image object
            var image = new Image();
            image = fileReader.result;
            
            //create new image through canvas
            image.onload = function(){
                //todo: put these elsewhere
                var MAX_WIDTH   = 50;
                var MAX_HEIGHT  = 50;
                
                var imageWidth = image.width;
                var imageHeight = image.heihgt;
                
                if (imageWidth > imageHeight) {
                    if (imageWidth > MAX_WIDTH) {
                        imageHeight *= MAX_WIDTH / imageWidth;
                        imageWidth = MAX_WIDTH;
                    }
                }
                else {
                    if (imageHeight > MAX_HEIGHT) {
                        imageWidth *= MAX_HEIGHT / imageHeight;
                        imageHeight = MAX_HEIGHT;
                    }
                }
            }
        }
            
            
        fileReader.readAsDataURL(fileToUpload);
        
        
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}

function resizeImage(  )
{
    
    
}