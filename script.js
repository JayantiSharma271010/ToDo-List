let myNodeList = document.getElementsByTagName("li");
for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// --------add check

let ul = document.querySelector("ul");
ul.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

function addBtn ()  {
    let li = document.createElement('li')
    let inputValue = document.getElementById("myInput").value
    let t = document.createTextNode(inputValue)
    li.appendChild(t)


    if(inputValue === ''){
        alert("You must text a word")
    }else{
        document.getElementById("ulList").appendChild(li)
    }
    document.getElementById("myInput").value = ''

let span = document.createElement("span")
span.className = 'close'
let txt = document.createTextNode('\u00D7')
span.appendChild(txt)
li.appendChild(span)

for(i = 0; i<close.length; i++){
    close[i].onclick = function(){
        div = this.parentElement
        div.style.display = 'none'
    }
}
};
