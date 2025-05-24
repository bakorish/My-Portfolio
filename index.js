document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for contacting me! I will get back to you soon.");
    this.reset();
  });
