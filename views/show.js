var interval = setInterval(refresh, 500);

function change1(){
	$("#mode1").css({
		"color":"#1E9FFF",
		"background":"#00FF00"
	});
	$("#mode2").css({
		"color":"#FFFFFF",
		"background":"#1E9FFF"
	});
}
function change2(){
	$("#mode1").css({
		"color":"#FFFFFF",
		"background":"#1E9FFF"
	});
	$("#mode2").css({
		"color":"#1E9FFF",
		"background":"#00FF00"
	});
}

function switch1() {
	var check=$("#select").prop("checked");
	var a = $("#light1").text();
	if(a >= 200){
		if(check == true){
			alert("光强度≧200Lux,已自动关闭路灯");
			$("input[name='open']").prop("checked", false);
			$("#title").html('开关状态&ensp;CLOSE');
		}
	}
	else if(a <= 50){
		if(check == false){
			alert("光强度≦50Lux,已自动打开路灯");
			$("input[name='open']").prop("checked", true);
			$("#title").html('开关状态&ensp;OPEN');
		}
	}
}

function switch2(){
	var check=$("#select").prop("checked");
	var a = $("#light1").text();//光强度
	var b = $("#order").text();//指令
		if(b == "打开"){
			$("input[name='open']").prop("checked", true);
			$("#title").html('开关状态&ensp;OPEN');
		}else{
			$("input[name='open']").prop("checked", false);
			$("#title").html('开关状态&ensp;CLOSE');
		}
}

function refresh() {
	$("#light").load(location.href + " #light");
	// remind(1);
	var bgcolor = $("#mode1").css('color');
	if(bgcolor == "rgb(255, 255, 255)"){
		switch1();
	}else{
		switch2();
	}
}