

//  $(function() {
//     // 在非嚴格模式下, growUp() 函式把 this 定義為全域物件
//     // (因為那是 growUp()執行的所在)，
//     // 與 Person() 建構式所定義的 this 有所不同
    
// alert("hi im'2");
// setScroll();
//   });


window.onscroll = setScroll;
// $(function(){
// 	setScroll(); 
// });


function setScroll(){
	console.log('123');
	var win = $(window);
	var hWin = win.height();
	var wWin = win.width();
	var scroll = win.scrollTop();
	console.log(win);
	var move = $(".arti-ac, #button-b, .left, .right, #button-c, #button-d, #button-e, #button-f, #button-g ");

	move.each(function(){
		console.log("345");
		var tCont = $(this).offset().top;

		if(scroll > tCont - hWin*0.8){
			$(this).addClass("show");
		}
	})
  
}
