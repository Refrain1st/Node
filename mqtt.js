var mqtt = require('mqtt')
var express = require('express')
var app = express();
app.use(express.static('views'));
app.set("view engine", "ejs");
app.set("views", "./views")
var iconv = require('iconv-lite');
var client = mqtt.connect('mqtt:115.28.108.146',{
	port:1883,
	clientId:'1509234c13acd1068331466e6771145e'
});

client.on('connect', function() {
	console.log("服务器连接成功");
	client.subscribe('sys/cloud/Refrain');
})

client.on('message', function(topic, message) {
	console.log("接收的数据：",iconv.decode(message,'GB2312').toString());
	temp = iconv.decode(message,'GB2312').toString();
});
	
app.get('/',(req, res) =>{
	if (!res){return;}
	var data = JSON.parse(temp);
	res.render('index',{data})
})
app.listen(8080, (err) =>{
	if(!err){
		console.log('服务器启动成功')
	} else{
		console.log('服务器启动失败')
	}
})