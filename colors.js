
/*코딩을 잘하는 방법 : 중복 제거*/

var Body = {
    setColor : function (color){
    //document.querySelector('body').style.color=color;
    $('body').css('color',color);
    },

    setBackgroungColor : function(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
        }
    }


var Links = {
    setColor : function (color){
       /* var alist = document.querySelectorAll('a');
        var i = 0;
        while(i<alist.length){
            console.log(alist[i]);
            alist[i].style.color = color;
            i++;
        }*/

        //jquery에서 a태그를 제어하겠다
        $('a').css('color',color);
    }
}

function nightDayHandler(self){
    //var target=document.querySelector('body');

    if(self.value ==='night'){
      Body.setBackgroungColor('black');
      Body.setColor('white');
      self.value ='day';
        
    Links.setColor('yellow');

    } else{
        Body.setBackgroungColor('white');
        Body.setColor('black');
        self.value ='night';
        Links.setColor('blue');

        
    } 
}
        