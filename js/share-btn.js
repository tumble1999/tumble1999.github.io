var shareDialog = document.querySelector('dialog.dialogShare');
var showModalButton = document.querySelector('.show-modal');
if (! dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}


shareDdialog.querySelector('.doneButton').addEventListener('click', function() {
  shareDialog.close();
});
