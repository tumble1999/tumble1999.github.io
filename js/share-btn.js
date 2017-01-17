var shareDialog = document.querySelector('dialog.dialogShare');
var shareButton = document.querySelector('.shareButton');
 shareButton.addEventListener('click', function() {
    shareDialog.showModal();
  });
if (! shareDialog.showModal) {
  dialogPolyfill.registerDialog(shareDialog);
}


shareDialog.querySelector('.doneButton').addEventListener('click', function() {
  shareDialog.close();
});
