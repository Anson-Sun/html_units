const text = `伟大抗日战争的一周年纪念，七月七日，快要到了。`;


const textarray = new Array(5);
textarray[0] = "伟大抗日战争的一周年纪念，七月七日，快要到了。";
textarray[1] = "全民族的力量团结起来，坚持抗战，坚持统一战线，同敌人作英勇的战争，快一年了。";
textarray[2] = "这个战争，在东方历史上是空前的，在世界历史上也将是伟大的，全世界人民都关心这个战争。";
textarray[3] = "身受战争灾难、为着自己民族的生存而奋斗的每一个中国人，无日不在渴望战争的胜利。";
textarray[4] = "然而战争的过程究竟会要怎么样？能胜利还是不能胜利？能速胜还是不能速胜？";

let index = -1;
let = text_i = 0;

const timer = setInterval(() => {
    if(index < textarray[text_i].length - 1){
        index++;
        document.querySelector("p").innerText += textarray[text_i].charAt(index);
    }
    else{
        if(text_i+1 < 5)
            text_i++;
        else
            text_i = 0;
        document.querySelector("p").innerText = ""
        index = -1;
    }
    updateCursor();
},100)

function getLastTextNode(node){
    if(node.nodeType === Node.TEXT_NODE){
        return node;
    }
    let children = node.childNodes;
    for(let i = children.length - 1; i >=0; i--){
        let res = getLastTextNode(children[i]);
        if(res)
            return res;
    }
    return null;
}

function updateCursor(){
    //找到最后一个文字节点
    const lasTextNode = getLastTextNode(textElem);
    console.log(lasTextNode)
    //加文字
    const tempText = document.createTextNode('a');
    if(lasTextNode){
        lasTextNode.parentNode.appendChild(tempText);
    }
    else{
        textElem.appendChild(tempText);
    }
    //根据文字位置设置光标位置
    const range = document.createRange();
    range.setStart(tempText, 0);
    range.setEnd(tempText, 0);
    const rect = range.getBoundingClientRect();
    tempText.getBoundingClientRect();
    console.log(rect);
    //删文字
}