var total = 0;
onEvent("btn_breakfast", "click", function(event) {
  setScreen("Breakfast");
});
onEvent("btn_juice", "click", function( ) {
  setScreen("Juice");
});
onEvent("btn_checkout", "click", function( ) {
  setScreen("Thankyou");
});
onEvent("btn_back", "click", function(event) {
  setScreen("Welcome");
});
onEvent("btn_back1", "click", function(event) {
  setScreen("Welcome");
});
onEvent("org_plus", "click", function(event) {
  total = total + 60;
  setText("orange", getNumber("orange") + 1);
});
onEvent("org_minus", "click", function(event) {
  total = total - 60;
  setText("orange", getNumber("orange") - 1);
});
onEvent("pst_plus", "click", function(event) {
  total = total + 80;
  setText("pasta", getNumber("pasta") + 1);
});
onEvent("pst_minus", "click", function(event) {
  total = total - 80;
  setText("pasta", getNumber("pasta") - 1);
});
onEvent("snd_plus", "click", function(event) {
  total = total + 45;
  setText("sandwich", getNumber("sandwich") + 1);
});
onEvent("snd_minus", "click", function(event) {
  total = total - 45;
  setText("sandwich", getNumber("sandwich") - 1);
});
onEvent("apl_plus", "click", function(event) {
  total = total + 110;
  setText("apple", getNumber("apple") + 1);
});
onEvent("apl_minus", "click", function(event) {
  total = total - 110;
  setText("apple", getNumber("apple") - 1);
});
onEvent("btn_checkout", "click", function(event) {
  setText("total_Amt", total + "/-");
});
