// window.addEventListener("load", function() {
//    function split () {
//        document.getElementById("")
//    }
// });

window.addEventListener('click', (e) => {
    console.log(e.target);
    let idname = e.target.getAttribute('id'); 
    console.log(idname);

    // document.getElementById(idname).style.opacity = 0;
        document.getElementById(idname).classList.add("fall");

});
