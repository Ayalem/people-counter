let count=0
countEl=document.getElementById("count-el")
saveEl=document.getElementById("save-el")
function increment(){
count++;
countEl.textContent=count;

}
function save(){
let enteries= count+"-";
saveEl.textContent+=enteries;
}