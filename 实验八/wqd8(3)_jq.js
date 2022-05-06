var addBox=document.getElementsByClassName("a3")[0];
var thBox=document.getElementsByClassName("box")[0];
addBox.onclick=function(){
	var fa=this.parentElement;
	var num=fa.childElementCount>1?parseInt(fa.children[fa.childElementCount-2].children[0].innerText)+1:1;
	var addHtml="<div class=\"a\"><div class=\"a1\"><p>1</p></div><div class=\"a2\"><p>Delete</p></div></div>";
	this.insertAdjacentHTML("beforeBegin",addHtml);
	fa.children[fa.childElementCount-2].children[0].innerText=num;
	fa.children[fa.childElementCount-2].children[1].addEventListener("click",function(){
		this.parentElement.remove();
	});
}
for(let i=0;i<thBox.childElementCount-1;++i){
	thBox.children[i].children[1].addEventListener("click",function(){
		this.parentElement.remove();
	});
}