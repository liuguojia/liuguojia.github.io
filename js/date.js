

// 日期插件

(function myDate(){

	var date = new Date();
	var dateToday = date.getDate();
	var dateDay = date.getDay();
	var dateMonth = date.getMonth();
	var dateYear = date.getFullYear();

	$(".date-today").text(dateToday)
	$(".date-day").text(dateDay)
	$(".date-month").text(dateMonth)
	$(".date-year").text(dateYear)

	// 声明日期数组
	var MonthNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	//遍历日期数组
	for(var i=0;i<MonthNum.length;i++){
		var dateList = "<li>" + MonthNum[i] + "</li>";

		$(".date-list .list-today").append(dateList);

		var dataLi = $(".date-list .list-today").find("li");
		for(var j=0;j<dataLi.lengt;j++){

			if(dateToday==MonthNum[i]){
				$(".date-list .list-today li").addClass("date-active");
			}
			console.log(index[10])

		}



		//添加日期节点

	}
















})()