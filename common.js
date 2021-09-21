function nav(uri) {
window.location.href = uri; 
}
function forward(current , next) {
document.getElementsByClassName("con")[next].style.display = "block"  ;
document.getElementsByClassName("con")[current].style.display = "none"  ;
}
