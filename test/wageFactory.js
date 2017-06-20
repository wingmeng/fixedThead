var year = 2016;
var months = 4;
var workerArr = [
	{name:"丁聪华", sex:"男"},
	{name:"夏潇琦", sex:"女"},
	{name:"曾帛员", sex:"男"},
	{name:"韩 松", sex:"男"},
	{name:"孙蝶妃", sex:"女"},
	{name:"江浩华", sex:"男"},
	{name:"田宇旺", sex:"男"},
	{name:"孔良超", sex:"男"},
	{name:"许娇翔", sex:"女"},
	{name:"庞 妍", sex:"女"},
	{name:"陈莲眉", sex:"女"},
	{name:"冉迪振", sex:"男"},
	{name:"崔子希", sex:"男"},
	{name:"曹娅娴", sex:"女"},
	{name:"张 红", sex:"女"},
	{name:"陈寿渊", sex:"男"},
	{name:"樊瑶芳", sex:"女"},
	{name:"唐亚升", sex:"男"},
	{name:"马桂蓓", sex:"女"},
	{name:"徐经岚", sex:"男"},
	{name:"阮恭琴", sex:"女"},
	{name:"任 希", sex:"男"},
	{name:"孙 花", sex:"女"},
	{name:"赵美珍", sex:"女"},
	{name:"姚道益", sex:"男"},
	{name:"汪冰蕴", sex:"女"},
	{name:"何 彦", sex:"女"},
	{name:"米泽升", sex:"男"},
	{name:"朱咏娴", sex:"女"},
	{name:"陆银兴", sex:"男"},
	{name:"宋牡馨", sex:"女"},
	{name:"邓材民", sex:"男"},
	{name:"郭秀晶", sex:"女"},
	{name:"康天鹏", sex:"男"},
	{name:"钱亚凤", sex:"女"},
	{name:"龚蓝莹", sex:"女"},
	{name:"古 璐", sex:"女"},
	{name:"严秋伶", sex:"女"},
	{name:"范 坤", sex:"男"},
	{name:"阮 龙", sex:"男"},
	{name:"袁庆轩", sex:"女"},
	{name:"曹欣丹", sex:"女"},
	{name:"田婕灵", sex:"女"},
	{name:"程杏倚", sex:"女"},
	{name:"戴 敏", sex:"男"},
	{name:"顾良龙", sex:"男"},
	{name:"熊月辰", sex:"女"},
	{name:"许永岚", sex:"男"},
	{name:"邹 雁", sex:"女"},
	{name:"程双民", sex:"男"},
	{name:"陆道根", sex:"男"},
	{name:"寇瑞生", sex:"男"},
	{name:"马庆炳", sex:"男"},
	{name:"龚元才", sex:"男"},
	{name:"黄敬甫", sex:"男"},
	{name:"魏怡玉", sex:"女"},
	{name:"孔睫薇", sex:"女"},
	{name:"崔喻晶", sex:"女"},
	{name:"阮菊斐", sex:"女"},
	{name:"康 晓", sex:"女"},
	{name:"江 斌", sex:"男"},
	{name:"曾 勇", sex:"男"},
	{name:"孔 苇", sex:"女"},
	{name:"冯添桂", sex:"女"},
	{name:"伍兆斌", sex:"男"},
	{name:"方艾健", sex:"男"},
	{name:"米希雨", sex:"女"},
	{name:"王瑶伶", sex:"女"},
	{name:"成萍娴", sex:"女"},
	{name:"余卓超", sex:"男"},
	{name:"严登武", sex:"男"},
	{name:"宋安璨", sex:"男"},
	{name:"江美婕", sex:"女"},
	{name:"谢晓香", sex:"女"},
	{name:"杨甚璨", sex:"男"},
	{name:"郑前岚", sex:"男"},
	{name:"樊革民", sex:"男"},
	{name:"伍一雨", sex:"女"},
	{name:"吴潇凤", sex:"女"},
	{name:"周 益", sex:"男"},
	{name:"寇 荔", sex:"女"},
	{name:"毛倚娴", sex:"女"},
	{name:"樊 颖", sex:"女"},
	{name:"沈天根", sex:"男"},
	{name:"吴均武", sex:"男"},
	{name:"冉欣彦", sex:"女"},
	{name:"罗 娟", sex:"女"},
	{name:"孟家鹏", sex:"男"},
	{name:"叶致玉", sex:"女"},
	{name:"陆 琴", sex:"女"},
	{name:"米 昆", sex:"男"},
	{name:"蒋瑜馨", sex:"女"},
	{name:"钱富武", sex:"男"},
	{name:"钟苇娇", sex:"女"},
	{name:"唐远先", sex:"男"},
	{name:"钱嘉澜", sex:"女"},
	{name:"赵 竣", sex:"男"},
	{name:"孔静香", sex:"女"},
	{name:"井 剑", sex:"男"},
	{name:"蒋天振", sex:"男"},
	{name:"夏楠蓓", sex:"女"},
	{name:"彭雪薇", sex:"女"},
	{name:"何星振", sex:"男"},
	{name:"陈 茵", sex:"女"},
	{name:"余少庆", sex:"男"},
	{name:"韩 娅", sex:"女"},
	{name:"石 穗", sex:"女"},
	{name:"韩则龙", sex:"男"},
	{name:"鲁艾弈", sex:"男"},
	{name:"钟蝶辰", sex:"女"},
	{name:"成 彤", sex:"男"},
	{name:"樊 霜", sex:"女"},
	{name:"陈 刚", sex:"男"},
	{name:"庞 燕", sex:"女"},
	{name:"毛安聚", sex:"男"},
	{name:"韩惠宜", sex:"女"},
	{name:"孙冰韵", sex:"女"},
	{name:"邓飘雨", sex:"女"},
	{name:"方富玄", sex:"男"},
	{name:"朱 千", sex:"男"},
	{name:"井焱丹", sex:"男"},
	{name:"邓天贵", sex:"男"},
	{name:"罗 娅", sex:"女"},
	{name:"井 辰", sex:"女"},
	{name:"邹 爽", sex:"男"},
	{name:"刘 志", sex:"男"},
	{name:"刘荣时", sex:"男"},
	{name:"贾 蓉", sex:"女"},
	{name:"张小瑜", sex:"女"},
	{name:"李蝶红", sex:"女"},
	{name:"高 莹", sex:"女"},
	{name:"阮艾杰", sex:"男"},
	{name:"蒋言柔", sex:"女"},
	{name:"吕 超", sex:"男"},
	{name:"马 瑗", sex:"女"},
	{name:"张尉蓉", sex:"女"},
	{name:"杨元雄", sex:"男"},
	{name:"林进棉", sex:"男"},
	{name:"唐亚奇", sex:"男"},
	{name:"吕彦花", sex:"女"},
	{name:"张滕龙", sex:"男"},
	{name:"封 勇", sex:"男"},
	{name:"汪牡蝶", sex:"女"},
	{name:"顾锐萧", sex:"女"},
	{name:"龚景萧", sex:"女"},
	{name:"罗建卿", sex:"男"},
	{name:"孙 晶", sex:"女"},
	{name:"孔娅萱", sex:"女"},
	{name:"万平洪", sex:"男"},
	{name:"黄杏玉", sex:"女"},
	{name:"范继聚", sex:"男"},
	{name:"顾天姿", sex:"女"},
	{name:"赵 翠", sex:"女"},
	{name:"宋香柔", sex:"女"},
	{name:"吴久坤", sex:"男"},
	{name:"简蓝芸", sex:"女"},
	{name:"姚静薇", sex:"女"},
	{name:"陈 刚", sex:"男"},
	{name:"庞 燕", sex:"女"},
	{name:"毛安聚", sex:"男"},
	{name:"韩惠宜", sex:"女"},
	{name:"孙冰韵", sex:"女"},
	{name:"邓飘雨", sex:"女"},
	{name:"方富玄", sex:"男"},
	{name:"朱 千", sex:"男"},
	{name:"张小瑜", sex:"女"},
	{name:"李蝶红", sex:"女"},
	{name:"高 莹", sex:"女"}
];
var ageRange = [18, 45];
var departmentArr = [
	{name:"行政部", jobs:["行政经理", "行政助理", "档案管理员", "内勤", "前台"]},
	{name:"财务部", jobs:["财务经理", "会计", "出纳", "税务"]}, 
	{name:"市场部", jobs:["市场经理", "策划", "公关", "广告", "调研"]}, 
	{name:"研发部", jobs:["产品经理", "研发工程师", "测试工程师", "研发助理"]}, 
	{name:"生产部", jobs:["生产部经理", "车间主任", "拉长", "品管", "操作员"]}, 
	{name:"采购部", jobs:["采购经理", "采购员", "仓管员", "收货专员"]}, 
	{name:"人力资源部", jobs:["人资部经理", "招聘专员", "考勤专员", "培训专员"]}, 
	{name:"销售部", jobs:["销售经理", "业务员"]}
];
var salaryArr = ["绩效等级", "出勤天数", "缺勤天数", "基本工资", "绩效工资", "绩效奖金", "保密费", "加班费", "全勤奖", "其他补贴", "缺勤扣款", "应发工资", "社保", "住房公积金", "个人所得税", "食宿扣款", "实发工资", "发放方式"];
var wagesArr = {
	level: [
		{name:"高", value:1000, scale: 0.5},
		{name:"中", value:500, scale: 0.3},
		{name:"低", value:200, scale: 0.1}
	],
	base: 1900,
	secrecyRange: [0, 300],
	overtimeRange: [200, 2000],
	social: 0.11,
	housingFund: 0.05,
	tax: {point: 4800, value: 0.06},
	foodRange: [0, 400],
	roomOverRange: [20, 100],
	payment: "发卡"
};

$('#year').html(year);
function buildDemoTable(tableObj) {
	var thead = tableObj.children('thead').children('tr:eq(0)'),
		tbody = tableObj.children('tbody'),
		cols = salaryArr.length;

	var htmlStr = '<tr>';
		
	// 首行表头	
	for (var i = 0; i < months; i++) {
		thead.append(
			'<th colspan="' + cols + '">' +
				(i + 1) + '月份工资' +
			'</th>'
		);

		// 薪资表头
		for (var j = 0; j < cols; j++) {
			htmlStr +=	'<th>' + salaryArr[j] + '</th>'
		}
	}
	htmlStr += 	'</tr>';
	thead.after(htmlStr);

	// 表体
	for (var i = 0; i < workerArr.length; i++) {
		var idx = i + 1;
		htmlStr =
			'<tr>' +
				'<td>' + idx + '</td>' +  // 序号
				'<td>' + workerArr[i].name + '</td>' +  // 姓名
				'<td>' + getIdCode(idx) + '</td>' +  // 工号
				'<td>' + workerArr[i].sex + '</td>' +  // 性别
				'<td>' + getRandomNum(ageRange) + '</td>';  // 年龄

		var department = departmentArr[getRandomNum(0, departmentArr.length - 1)],
			jobIdx = getRandomNum(0, department.jobs.length - 1);
		htmlStr += 
				'<td>' + department.name + '</td>' +  // 部门
				'<td>' + department.jobs[jobIdx] + '</td>' +  // 职位
				getWages(jobIdx + 1) +
			'</tr>';
		tbody.append(htmlStr);
	}

	// 释放内存
	workerArr.length = 0;
	departmentArr.length = 0;
	salaryArr.length = 0;
	wagesArr.length = 0;
}

// 获取工号
function getIdCode(idx) {
	var idx = idx + '',
		idCodeLen = 5,
		prefix = '',
		prefixNum = idCodeLen - idx.length;
	for (var i = 0; i < prefixNum; i++) {
		prefix += '0';
	}		
	prefix += idx;
	return prefix;
}

// 获取薪资
function getWages(jobIdx) {
	var html = '';
	for (var i = 0; i < months; i++) {
		var wagesLevel = wagesArr.level[getRandomNum(0, wagesArr.level.length - 1)],
			attendance = getAttendance(i + 1),  // 传入月份

			baseWage = wagesArr.base + parseInt(1 / jobIdx * wagesArr.base, 10),
			achievWage = baseWage * wagesLevel.scale,
			achievBonus = wagesLevel.value,
			overtimeWage = getRandomNum(wagesArr.overtimeRange),
			secrecyBonus = getRandomNum(wagesArr.secrecyRange),
			fullTimeBonus = (attendance.absences == 0 ? 50 : 0),  // 50元全勤奖
			otherBonus = getRandomNum(wagesArr.overtimeRange),
			absenceDebit = attendance.absences * (baseWage / attendance.workDays * 2).toFixed(2),
			totalWage = baseWage + achievWage + achievBonus +
						overtimeWage + secrecyBonus + fullTimeBonus +
						otherBonus - absenceDebit,

			social = (totalWage * wagesArr.social).toFixed(2),
			housingFund = (totalWage * wagesArr.housingFund).toFixed(2),
			tax = (totalWage <= wagesArr.tax.point ? 0 : 
					(totalWage - wagesArr.tax.point) *  wagesArr.tax.value),
			tax = tax.toFixed(2),
			foodDebit = getRandomNum(wagesArr.foodRange),
			finalWage = totalWage - social - housingFund - tax - foodDebit;

		html += 
			'<td>' + wagesLevel.name + '</td>' +  // 绩效等级
			'<td>' + attendance.workDays + '</td>' +  // 出勤天数
			'<td>' + attendance.absences + '</td>' +  // 缺勤天数
			'<td>' + baseWage.toFixed(2) + '</td>' +  // 基本工资
			'<td>' + achievWage.toFixed(2) + '</td>' +  // 绩效工资
			'<td>' + achievBonus + '</td>' +  // 绩效奖金
			'<td>' + secrecyBonus + '</td>' +  // 保密费
			'<td>' + overtimeWage + '</td>' +  // 加班费
			'<td>' + fullTimeBonus + '</td>' +  // 全勤奖
			'<td>' + otherBonus + '</td>' +  // 补贴
			'<td>' + absenceDebit + '</td>' +  // 缺勤扣款
			'<td>' + totalWage + '</td>' +  // 应发工资
			'<td>' + social + '</td>' +  // 社保
			'<td>' + housingFund + '</td>' +  // 住房公积金
			'<td>' + tax + '</td>' +  // 个税
			'<td>' + foodDebit + '</td>' +  // 食宿
			'<td>' + finalWage.toFixed(2) + '</td>' +  // 实发工资
			'<td>' + wagesArr.payment + '</td>';  // 发放方式
	}
	return html;
}

// 获取出勤/缺勤天数
function getAttendance(month) {
	var curMonthDays = (new Date(year, month, 0)).getDate(),  // 当月总天数
		absences = [0, 0, 0, 0, 0, 1, 2][getRandomNum(0, 6)],  // 缺勤天数
		saturdays = [],
		sundays = [];
	for (var i = 1; i < curMonthDays + 1; i++) {
		var date = new Date(year, month - 1, i),
			today = date.getDay();
		if (today === 6) {  // 周六
			saturdays.push(i);
		} else if (today === 0) {
			sundays.push(i);
		}
	}
	return {
		absences: absences,
		workDays: curMonthDays - (saturdays.length + sundays.length)
	}
}

// 获取随机数
function getRandomNum(min, max) {		
	if (min instanceof Array) {  // 传入了数组
		max = min[1];
		min = min[0];
	}
	var range = max - min;
	return Math.round(Math.random() * range + min);
}