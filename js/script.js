$("img").each(function() {
  var randomNum = Math.floor(Math.random() * 16) + 1;
  var imgUrl = `chrome-extension://hdgpfchecehacahicpiogjgihkffamdk/img/Cooper${randomNum}.jpg`;
  $(this).attr("src", imgUrl);
});
