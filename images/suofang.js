//等比例缩放图片
 var flag=false;
 /**
   * ImgD：原图
   * maxWidth：允许的最大宽度
   * maxHeight：允许的最大高度
   */
 function DrawImage(ImgD, maxWidth, maxHeight){
  var image=new Image();
  var iwidth = maxWidth; //定义允许图片宽度
  var iheight = maxHeight; //定义允许图片高度
  image.src=ImgD.src;
  if(image.width>0 && image.height>0){
   flag=true;
   if(image.width/image.height>= iwidth/iheight){
    if(image.width>iwidth){ 
     ImgD.width=iwidth;
     ImgD.height=(image.height*iwidth)/image.width;
    }else{
     ImgD.width=image.width; 
     ImgD.height=image.height;
    }
    //ImgD.alt=image.width+"×"+image.height;
   } else{
    if(image.height>iheight){ 
     ImgD.height=iheight;
     ImgD.width=(image.width*iheight)/image.height; 
    }else{
     ImgD.width=image.width; 
     ImgD.height=image.height;
    }
    //ImgD.alt=image.width+"×"+image.height;
   }
  }
 }
/** 让图片垂直居中。使用前提：当前图片必须被包含在div中
      * ImgD：原图
      * maxWidth：允许的最大宽度(即包含本图片的div的父节点对象的宽度，一般是li)
      * maxHeight：允许的最大高度
      */
    function centerImage(imgD, maxWidth, maxHeight){
        var div = imgD.parentNode;//获取包含本图片的div
        if(imgD.height < maxHeight){
            var top = (maxHeight - imgD.height) / 2;
            div.style.marginTop = top + "px";
        }
        if(imgD.width < maxWidth){
            var left = (maxWidth - imgD.width) / 2;
            div.style.marginLeft = left + "px";
        }
    }