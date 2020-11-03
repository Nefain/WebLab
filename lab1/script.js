function showEducationPlace() {
    let img = document.getElementById("eduPlace");
    if (img.style.visibility === "hidden")
        img.style.visibility = "visible";
    else img.style.visibility = "hidden";
}

/*window.onload = function(){
    var image = document.getElementById('someimg');
    image.onclick = function(){
       this.style.height = '500px';
       this.style.width= '500px';
    }
 };*/
 
var bigsize = '300px'; //Размер большой картинки
var smallsize = '150px'; //Размер маленькой картинки
window.onload = function(){
    var image = document.getElementById('someimg');
    image.onclick = function(){
    if(this.style.height == bigsize) 
    {
        this.style.width = smallsize;
        this.style.height = smallsize;
    }
    else 
    {
        this.style.width = bigsize;
        this.style.height = bigsize;
    }
    let line1 = document.getElementById("Stankin");
    let line2 = document.getElementById("Work");
    if (line1.style.visibility == "hidden")
        line1.style.visibility = "visible";
    else line1.style.visibility = "hidden";
    if (line2.style.visibility == "hidden")
    line2.style.visibility = "visible";
    else line2.style.visibility = "hidden";
}
};