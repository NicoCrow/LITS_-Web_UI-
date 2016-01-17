
		//		Calculator		//

var win_num = document.getElementById('win_num');				//Тип вікна
win_num.addEventListener('change', changeWin, false);

var calculate = document.getElementById('calculate');
calculate.addEventListener('click', calcWinCost, false);

var formReset = document.getElementById('formReset');
formReset.addEventListener('click', function(){
	resetForm();
	changeWin();
	calcWinCost();
}, false);

var win_calc = document.getElementById('win_calc');
function resetForm(){
	win_calc.reset();
};

function changeWin(){
	var img = document.getElementById('winImage');
	var imgSvg = document.getElementById('winImageSvg');
	var src;
	var srcData;
	switch(win_num.value){
		case "Single":
			src = "images/doors_and_windows/png/win1.png";
			srcData = "images/doors_and_windows/svg/win1.svg";
			break;
		case "Double":
			src = "images/doors_and_windows/png/win2.png";
			srcData = "images/doors_and_windows/svg/win2.svg";
			break;
		case "Triple":
			src = "images/doors_and_windows/png/win3.png";
			srcData = "images/doors_and_windows/svg/win3.svg";
			break;
		case "door":
			src = "images/doors_and_windows/png/win4.png";
			srcData = "images/doors_and_windows/svg/win4.svg";
			break;
		default:
			src = "images/doors_and_windows/png/win1.png";
			srcData = "images/doors_and_windows/svg/win1.svg";
	}
	if(win_calc.lang != "ua"){
		img.src = '../' + src;
		imgSvg.data = '../' + srcData;
	} else {
		img.src = src;
		imgSvg.data = srcData;
	}
}

function calcWinCost(){																//Функція-калькулятор ціни вікон
	var one_dollar = 25;	//грн
	var win_weight	 = parseInt(document.getElementById('win_weight').value);		//Система
	var glass		 = parseInt(document.getElementById('glass').value);			//Склопакет
	var win_width	 = parseInt(document.getElementById('win_width').value)/1000;	//Ширина
	var win_height	 = parseInt(document.getElementById('win_height').value)/1000;	//Висота
	var material	 = parseInt(document.getElementById('material').value);			//Матеріал
	var win_quantity = parseInt(document.getElementById('win_quantity').value);		//Кількість одиниць
	var cost		 = document.getElementById('cost');								//Вартість замовлення
	// var winImage	 = document.getElementById('winImage');							//Зображення вікна

	var square = win_width*win_height;												//Площа вікна
	var pay = square*((win_weight+material)*one_dollar + glass)*win_quantity;		//Обрахунок ціни вікна

	if(pay < 10){																	//Кількість символів результату виводу
		cost.style.width="70px";
	} else if(pay >= 10 && pay < 100){
		cost.style.width="90px";
	} else if(pay >= 100 && pay < 1000){
		cost.style.width="110px";
	} else if(pay >= 1000 && pay < 10000){
		cost.style.width="130px";
	} else if(pay >= 10000 && pay < 100000){
		cost.style.width="150px";
	} else {
		cost.style.width="190px";
	};

	cost.value=pay.toFixed(2);
};