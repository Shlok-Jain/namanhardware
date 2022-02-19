var nav_status = false
function nav(){
    if(nav_status){
        document.getElementById('nav-list').style.animation = "navclose 0.3s ease-out forwards"
        nav_status = false
    }
    else{
        document.getElementById('nav-list').style.animation = "navopen 0.3s ease-out forwards"
        nav_status = true
    }
}