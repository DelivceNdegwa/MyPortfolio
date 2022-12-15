// alert("Welcome to my portfolio");

// let cardAndroid = document.getElementById("card-android");

// // cardAndroid.innerHTML = "<h1>I am changed</h1>";
// cardAndroid.addEventListener("click", function(){
//     cardAndroid.innerHTML = "<h1>I am changed!!!!!</h1>"
// });

/*
TODO: Add a mouseover and mouseout event to our 
 my cv button, change the text inside the button to a text
 of your choice for the mouseover event, then when the mouse is
 out you can return the default message
 */

 $(document).ready(function(){
    let modalApplicationForm = $('#application-modal');

    modalApplicationForm.show();

    let modalBtnClosed = $(".btn-close");
    modalBtnClosed.on('click', (e)=>{
        modalApplicationForm.hide();
    });

    let forms = $('form');
    forms.on("submit", function(e){
        e.preventDefault();
        // alert("Form has been submitted");
        let nameInput = $('#input-name').val();
        let emailInput = $('#input-email').val();
        let phoneInput = $('#input-phone').val();
        let durationInput = $('#input-duration').val();
        let descriptionInput = $('#input-description').val();
        // alert(nameInput);

        let isValid = validateInputs(nameInput, emailInput, phoneInput, durationInput, descriptionInput);

        alert(isValid)
        
    });

    let myImage = $('#elon-image');
    let myImageSrc = myImage.attr("src");

    myImage.on("mouseover", function(){
        $(this).attr("src", "elon.jpg");
    });

    myImage.on("mouseout", function(){
        $(this).attr("src", myImageSrc);
    })

    function validateInputs(nameInput, emailInput, phoneInput, durationInput, descriptionInput){
        if(nameInput.length === 0){
            $("#name-error").addClass('d-block');
            $('#input-name').addClass('is-invalid');
            $("#name-error").removeClass('d-none');

            return false;
        }
        else{
             $("#name-error").addClass('d-none').removeClass('d-block');
             $('#input-name').removeClass('is-invalid').addClass('is-valid');
             // $("#name-error").removeClass('d-block');
        }

        if(emailInput.length === 0){
            $("#email-error").addClass('d-block');
            $('#input-email').addClass('is-invalid')
            $("#email-error").removeClass('d-none');

            return false;
        }
        else{
            $("#email-error").addClass('d-none').removeClass('d-block');
            $('#input-email').removeClass('is-invalid').addClass('is-valid');
        }

        if(phoneInput.length === 0){
            $("#phone-error").addClass('d-block');
            $('#input-phone').addClass('is-invalid')
            $("#phone-error").removeClass('d-none');

            return false;
        }
        else{
            $("#phone-error").addClass('d-none').removeClass('d-block');
            $('#input-phone').removeClass('is-invalid').addClass('is-valid');
        }

        if(durationInput.length === 0){
            $("#duration-error").addClass('d-block');
            $('#input-duration').addClass('is-invalid')
            $("#duration-error").removeClass('d-none');

            return false;
        }
        else{
            $("#duration-error").addClass('d-none').removeClass('d-block');
            $('#input-duration').removeClass('is-invalid').addClass('is-valid');
        }

        if(descriptionInput.length === 0){
            $("#description-error").addClass('d-block');
            $('#input-description').addClass('is-invalid')
            $("#description-error").removeClass('d-none');

            return false;
        }
        else{
            $("#description-error").addClass('d-none').removeClass('d-block');
            $('#input-description').removeClass('is-invalid').addClass('is-valid');
        }

        return true;
    }


    
 });

 /*
 delay()
 addClass()
 removeClass()
 toggleClass()
 */