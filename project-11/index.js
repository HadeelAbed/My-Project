let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
console.log(saveEl)

function increment(){
     count +=1
     countEl.innerText= count
}
//function save()

function save(){
    let countstr=count + " - "
    saveEl.textContent +=countstr
    countEl.textContent=0
    count=0
}


