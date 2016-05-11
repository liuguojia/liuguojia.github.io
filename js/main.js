// 下拉菜单事件

var x = 0;
var y = 0;

$("nav .user img").click(function(){
	if(y==0){
		$(".menu").show(500);
		y=1;
	}else{
		$(".menu").hide(500);
		y=0;
		console.log("1212")
	}
});


$(".menu-down").click(function(){
	if(x==0){
		$(".menu-down").css("color","#fff");
		$(".drop-down").show(500);
		$(".menu-down .fa-angle-left").addClass("fa-angle-down");
		x=1;
	}else{
		$(".drop-down").hide(500);
		$(".menu-down .fa-angle-left").removeClass("fa-angle-down").addClass("fa-angle-left");
		x=0;
	}

});

