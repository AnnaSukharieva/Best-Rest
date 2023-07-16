export function select(phoneCodes) {
  $(".select__header").on("click", selectToggle);
  $(".select__item").on("click", selectChoose);

  function selectToggle() {
    $(this).parent().toggleClass("is-active");
    $(".select__icon").toggleClass("select__icon-opened");
  }

  document.addEventListener("click", function (event) {
    let targetElement = event.target;

    if (
      !targetElement.closest(".select") &&
      !targetElement.classList.contains("select__header")
    ) {
      $(".select").removeClass("is-active");
      $(".select__icon").removeClass("select__icon-opened");
    }
  });

  function selectChoose() {
    const text = $(this).text();
    const select = $(this).closest(".select");
    const currentText = select.find(".select__current");
    currentText.val(text);
    $("#phone").prop("readonly", false);
    select.removeClass("is-active");
    select.addClass("filled");
    $(".select__icon").removeClass("select__icon-opened");

    for (const country in phoneCodes) {
      if (country === text) {
        $("#phone").inputmask({
          mask: phoneCodes[country],
          placeholder: "",
        });
      }
    }
  }
}

