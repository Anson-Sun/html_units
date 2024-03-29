const text = `伟大抗日战争的一周年纪念，七月七日，快要到了。`;

//使用数组来存储文字
const textarray = new Array(5);
textarray[0] = "伟大抗日战争的一周年纪念，七月七日，快要到了。";
textarray[1] = "全民族的力量团结起来，坚持抗战，坚持统一战线，同敌人作英勇的战争，快一年了。";
textarray[2] = "这个战争，在东方历史上是空前的，在世界历史上也将是伟大的，全世界人民都关心这个战争。";
textarray[3] = "身受战争灾难、为着自己民族的生存而奋斗的每一个中国人，无日不在渴望战争的胜利。";
textarray[4] = "然而战争的过程究竟会要怎么样？能胜利还是不能胜利？能速胜还是不能速胜？";

let index = -1;             //用来取当前这个textarray[text_i]里面的内容
let = text_i = 0;           //textarry[]的下标

const timer = setInterval(() => {
    if(index < textarray[text_i].length - 1){
        index++;
        //取出当前字符，并追加到当前地字符串后面
        document.querySelector("p").innerText += textarray[text_i].charAt(index)
    }
    else{
        //循环地取每一段文字
        if(text_i+1 < 5)
            text_i++;
        else
            text_i = 0;

        //清空文字区域
        document.querySelector("p").innerText = ""
        //重新从当前textarry[text_i]里面取文字
        index = -1;
    }
},100)  //时钟频率为100ms