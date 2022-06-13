let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebarUl = document.querySelector('.nav-main ul');
    let getSidebarLinks = document.querySelectorAll('.nav-main a');

    let grey = document.getElementById('colorGrey');
    let pink = document.getElementById('colorPink')
    let yellow = document.getElementById('colorYellow')
    let red = document.getElementById('colorRed');
    let orange = document.getElementById('colorOrange');
    let purple = document.getElementById('colorPurple');
    let green = document.getElementById('colorGreen');



    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";



    } else if (toggleNavStatus === true) {

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        getSidebarUl.style.visibility = "hidden";


        toggleNavStatus = false;
    }


    grey.addEventListener('click', function() {
        document.body.style.backgroundColor = "grey";
        getSidebarUl.style.visibility = "hidden";
    })

    pink.addEventListener('click', function() {
        document.body.style.backgroundColor = "pink";
        getSidebarUl.style.visibility = "hidden";
    })

    yellow.addEventListener('click', function() {
        document.body.style.backgroundColor = "yellow";
        getSidebarUl.style.visibility = "hidden";
    })

    red.addEventListener('click', function() {
        document.body.style.backgroundColor = "red";
        getSidebarUl.style.visibility = "hidden";

    })

    orange.addEventListener('click', function() {
        document.body.style.backgroundColor = "orange";
        getSidebarUl.style.visibility = "hidden";

    })

    purple.addEventListener('click', function() {
        //Change the background color
        document.body.style.backgroundColor = "purple";
        getSidebarUl.style.visibility = "hidden";

    })

    green.addEventListener('click', function() {
        //Change the background color
        document.body.style.backgroundColor = "green";
        getSidebarUl.style.visibility = "hidden";

    })

}