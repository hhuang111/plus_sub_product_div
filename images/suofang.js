//�ȱ�������ͼƬ
 var flag=false;
 /**
   * ImgD��ԭͼ
   * maxWidth������������
   * maxHeight����������߶�
   */
 function DrawImage(ImgD, maxWidth, maxHeight){
  var image=new Image();
  var iwidth = maxWidth; //��������ͼƬ���
  var iheight = maxHeight; //��������ͼƬ�߶�
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
    //ImgD.alt=image.width+"��"+image.height;
   } else{
    if(image.height>iheight){ 
     ImgD.height=iheight;
     ImgD.width=(image.width*iheight)/image.height; 
    }else{
     ImgD.width=image.width; 
     ImgD.height=image.height;
    }
    //ImgD.alt=image.width+"��"+image.height;
   }
  }
 }
/** ��ͼƬ��ֱ���С�ʹ��ǰ�᣺��ǰͼƬ���뱻������div��
      * ImgD��ԭͼ
      * maxWidth������������(��������ͼƬ��div�ĸ��ڵ����Ŀ�ȣ�һ����li)
      * maxHeight����������߶�
      */
    function centerImage(imgD, maxWidth, maxHeight){
        var div = imgD.parentNode;//��ȡ������ͼƬ��div
        if(imgD.height < maxHeight){
            var top = (maxHeight - imgD.height) / 2;
            div.style.marginTop = top + "px";
        }
        if(imgD.width < maxWidth){
            var left = (maxWidth - imgD.width) / 2;
            div.style.marginLeft = left + "px";
        }
    }