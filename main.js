menu_list_array = ["Veg Margherita Pizza",
"Golden Corn Pizza",
"The Black Olive Gourmet Pizzeria",
 "Veg supreme pizza",
"panner tikka pizza",
"chiken tandoori pizza",
"Double Cheese Margherita Pizza"];

function getmenu(){
var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
    }
    htmldata=htmldata+'</ol>'
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='card'>"

for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'+ '<img src="images/pizzaImg.png"/>'+menu_list_array[i]+'</div>'
}
htmldata=htmldata+'</selection>'
document.getElementById("display_addedmenu").innerHTML=htmldata;

}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}