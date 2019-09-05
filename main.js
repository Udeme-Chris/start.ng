(function cv() {


    var backDrop = document.querySelector(".backdrop");
    var emailForm = document.querySelector(".modal");
    var contactLink = document.querySelector("#show-contact-form");
    var closeModal = document.querySelector("#close-modal");
    var submit = document.querySelector("#submit");
    var name = document.getElementById("name");
    var email = document.querySelector("#email");
    var title = document.querySelector("#title");
    var message = document.querySelector("#message");
    var errorShow = document.querySelector("#show-errors");

    //to get the cost of each item when you click the oder button

    contactLink.addEventListener("click", (foo) => {
        // var mainCost = foo.target.value;
        backDrop.style.display = "block";
        emailForm.style.display = "block";

    });

    closeModal.addEventListener("click", () => {
        closeModalNow();

    });
    function closeModalNow() {
        backDrop.style.display = "none";
        emailForm.style.display = "none";
    }

    submit.addEventListener("click", (foo) => {
        var errors = [];
        //This is a filter to ensure that the email address is valid
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (name.value.length < 4) {
            errors.push(`${errors.length + 1}. Full name cannot be less than 4 characters.`);
        }
        if (!filter.test(email.value)) {
            errors.push(`${errors.length + 1}. Email address is invalid`);
        }
        if (message.value.length < 20) {
            errors.push(`${errors.length + 1}. Message too short. Must be at least 20 characters long`);
        }
        if (errors.length > 0) {

            errorShow.innerHTML = errors.join("<br/>") + "<hr/>";
        } else {
            errorShow.innerHTML = "";

            alert("Message Sent");
            closeModalNow();

        }


    });
})();