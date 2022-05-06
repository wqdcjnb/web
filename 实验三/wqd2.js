var list = document.getElementsByTagName("li");
var tdlist = document.querySelectorAll("li");
var myDate = new Date();
var y=myDate.getFullYear(); 
var m=myDate.getMonth();  
var d=myDate.getDate();  
list[0].onclick = function(){
        this.style.color = "red";
        alert(this.innerHTML);
    }
list[1].onclick = function(){
        var data = document.getElementsByTagName("h1");
            for(var i = 0; i < data.length; i++) {
                data[i].textContent = y+"-"+(m+1)+"-"+d;
        }
        alert(this.innerHTML);
    }
list[2].onclick = function(){
    document.getElementById("li").classList.add("fn-active");
    alert(this.innerHTML);
    }
list[3].onclick = function(){
        list[7].remove();
        alert(this.innerHTML);
}
list[4].onclick = function(){
        win = window.open("https://www.taobao.com/");
        alert(this.innerHTML);
    }
list[5].onclick = function(){
        var Ul = document.createElement("ul");
        document.body.appendChild(Ul);
        var li = document.createElement("li");
        Ul.appendChild(li);
        li.innerHTML = "p9";
        alert(this.innerHTML);
    }
list[6].onclick = function(){
    function setWidth() {
    var div = document.getElementById("m-box");
    div.style.width = screen.availWidth + "px";
}
     alert(this.innerHTML);
}