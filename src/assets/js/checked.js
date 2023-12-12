// JavaScript pour gérer la fonctionnalité Tout sélectionner
document.getElementById("selectAll").addEventListener("change", function () {
  var checkBoxes = document.getElementsByClassName("checkBox");
  for (var i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].checked = this.checked;
  }
});
