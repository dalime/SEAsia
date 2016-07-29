$(() => {
  $('#contactLink').click(openModal);
});

function openModal() {
  $('.contactModal').modal({
    keyboard: false,
    backdrop: 'static'
  });
}
