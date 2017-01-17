$(function() {
  var shareDialog = document.querySelector('dialog.dialogShare');
  var shareButton = document.querySelector('#shareButton');
  if (! shareDialog.showModal) {
    dialogPolyfill.registerDialog(shareDialog);
  }
  shareButton.addEventListener('click', function() {
     shareDialog.showModal();
   });
  shareDialog.querySelector('.doneButton').addEventListener('click', function() {
    shareDialog.close();
  });
});
