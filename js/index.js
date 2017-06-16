var dazsff={
	RandomNum:function (Max){
		var Range = Max;
		var Rand = Math.random();  
		var num =Math.round(Rand * Range);
		return num;
	},
}
var dazszl=dazs.zh.length-1
dazszl=dazsff.RandomNum(dazszl-1);