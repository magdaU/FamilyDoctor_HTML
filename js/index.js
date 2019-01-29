$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    //scroll wbudowany w boostrapa
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})


//toogle button use jquery
$(document).ready(function () {
    $("#showOrHide").click(function () {
        $("#nazwa").toggle();
    });
});

$(".clear").click(function () {
    $(this).closest('form').find("input[type=text], textarea").val("");
});
// // Get the modal
// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

///Patient JS- use Object Prototype
function Patient(nickName, firstName) {
    this.nickName = nickName;
    this.firstName = firstName;
}

var father = new Patient("Alburnus", "Krzysztof");
var mother = new Patient("Alium", "Magda");
var daughter = new Patient("Elsa", "Sandra");

//Father
document.getElementById("fatherFirstName").innerHTML = father.firstName;
document.getElementById("fatherNickName").innerHTML = father.nickName;

//Mother
document.getElementById("motherFirstName").innerHTML = mother.firstName;
document.getElementById("motherNickName").innerHTML = mother.nickName;

//Daughter
document.getElementById("daughterFirstName").innerHTML = daughter.firstName;
document.getElementById("daughterNickName").innerHTML = daughter.nickName;

