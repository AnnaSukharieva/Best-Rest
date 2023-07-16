$(document).on("click", "#submit", function () {
  const validateForm = $(document).find("#form");
  validateForm.validate({
    rules: {
      fname: {
        required: true,
        minlength: 3,
        lettersOnly: true,
      },
      sname: {
        required: true,
        minlength: 3,
        lettersOnly: true,
      },
      country: {
        required: true,
      },
      phone: {
        required: true,
      },
      password: {
        required: true,
        minlength: 6,
        passwordPattern: true,
      },
      confirmedpassword: {
        required: true,
        equalTo: "#password",
      },
      email: {
        required: true,
        email: true,
      },
      checkbox: {
        required: true,
      },
    },
    messages: {
      fname: {
        required: "Fill in the field",
        minlength: "The first last name must be more than 2 characters",
      },
      sname: {
        required: "Fill in the field",
        minlength: "The last name must be more than 2 characters",
      },
      country: {
        required: "Fill in the field",
      },
      phone: {
        required: "Fill in the field",
      },
      password: {
        required: "Fill in the field",
        minlength: "Password must be at least 6 characters long",
      },
      confirmedpassword: {
        required: "Fill in the field",
        equalTo: "Password does not match",
      },
      email: {
        required: "Fill in the field",
        email: "Email is not correct",
      },
      checkbox: {
        required: "Fill in the field",
      },
    },

    submitHandler: function (form) {
      form.submit();
    },

    success: function (label) {
      const inputContainer = $(label).closest(".form-item");
      const errorLabel = inputContainer.find(".error-label");
      errorLabel.text("");
      errorLabel.addClass("hidden");
    },

    errorPlacement: function (error, element) {
      if (element.is(":checkbox")) {
        element.addClass("error");
      } else {
        const inputContainer = $(element).closest(".form-item");
        const errorLabel = inputContainer.find(".error-label");
        errorLabel.text(error.text());
        errorLabel.removeClass("hidden");
      }
    },
  });

  $.validator.addMethod(
    "lettersOnly",
    function (value) {
      return /^[a-z\s-]+$/i.test(value);
    },
    "This field must contain only letters"
  );

  $.validator.addMethod(
    "passwordPattern",
    function (value) {
      return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).+$/.test(value);
    },
    "Password must have 1 letter, 1 number and one symbol"
  );

  validateForm.submit();
});
