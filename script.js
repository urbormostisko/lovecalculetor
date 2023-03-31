var partnerNameInput = document.getElementById("partner-name");
partnerNameInput.addEventListener("input", function() {
  var partnerName = partnerNameInput.value;
  var starredName = partnerName.charAt(0);
  for (var i = 1; i < partnerName.length - 1; i++) {
    starredName += ".";
  }
  if (partnerName.length > 1) {
    starredName += partnerName.charAt(partnerName.length - 1);
  }
  partnerNameInput.value = starredName;
});

function calculateLove() {
  var yourName = document.getElementById("your-name").value;
  var partnerName = partnerNameInput.value.replace(/\./g, "★");
  var loveScore = Math.floor(Math.random() * 101);
  var result = yourName + " and " + partnerName + "'s love score is " + loveScore + "%!";
  document.getElementById("result").innerHTML = result;
}
