window.onload=function (){
    var lists=document.querySelectorAll(".a li")
    for (var i=0;i<lists.length;i++){
        lists[i].index=i;
        lists[i].onmousedown=function (){
            for (var j=0;j<lists.length;j++){
                if (this.index!=j)
                    lists[j].style.backgroundColor="white"
                else
                    this.style.backgroundColor="#c0c0c0"
            }
            document.querySelector(".b").innerHTML=this.index+1
        }
    }

}