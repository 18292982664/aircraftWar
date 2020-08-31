var mainDiv = document.getElementById("maindiv"); //获得主界面
var startDiv = document.getElementById('startdiv'); //获得开始界面
var scorediv = document.getElementById("scorediv"); //获得游戏中分数显示界面
var label = document.getElementById("label"); //获得分数界面
var suspenddiv = document.getElementById("suspenddiv"); //获得暂停界面
var enddiv = document.getElementById("enddiv"); //获得游戏结束后分数界面
var planscore = document.getElementById("planscore");
var scores = 0;
/**
 * 创建飞机
 */
function plan(hp, X, Y, sizeX, sizeY, score, dietime, sudu, boomimage, imagesrc) {
	this.planX = X;
	this.planY = Y;
	this.imagenode = null;
	this.planhp = hp;
	this.planscore = score;
	this.plansizeX = sizeX;
	this.plansizeY = sizeY;
	this.planboomimage = booimage;
	this.planisdie = false;
	this.plandietimes = 0;
	this.plandietime = dietme;
	this.plansudu = sude;
	/**
	 * 行为 - 移动行为
	 */
	this.planmove = function() {
		if (scores <= 50000) {
			this.imagenode.style.top = this.iamgenode.offsetTop + this.planssudu + "px";
		} else if (scores > 50000 && scores <= 100000) {
			this.imagenode.style.top = this.imagenode.offsetTop + this.plansudu + 1 + "px"
		} else if (scores > 100000 && scores <= 150000) {
			this.imagenode.style.top = this.imagenode.offsetTop.plansudu + 2 + "px";
		} else if (scores > 150000 && scores <= 200000) {
			this.imagenode.style.top = this.imagenode.offsetTop.plansudu + 3 + "px";
		} else if (scores > 200000 && scores <= 3000000) {
			this.imagenode.style.top = this.imagenode.offsetTop.plansudu + 4 + "px";
		} else {
			this.imagenode.style.top = this.imagenode.offsetTop.plansudu + 5 + "px";
		}
	}
	this.init = function() {
		this.imagenode = document.createElement("img");
		this.imagenode.style.left = this.planX + "px";
		this.imagenode.style.top = this.planY + "px"
		this.imagenode.src = imagesrc;
		mainDiv.appendChild(this.iamgenode);
	}
	this.init();
},
