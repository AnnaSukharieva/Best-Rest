export function selectInner(phoneCodes) {
  const selectBody = $(".select__body");
  selectBody.empty();

  for (const country in phoneCodes) {
    const value = phoneCodes[country];
    const item = $('<div class="select__item"></div>')
      .text(country)
      .attr("value", value);
    selectBody.append(item);
  }
}
