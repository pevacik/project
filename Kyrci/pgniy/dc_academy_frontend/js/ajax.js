let xhr = new XMLHttpRequest();
const button = document.querySelector(".button");
button.addEventListener("click", function () {
  console.log("clic");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this.responseText);
    }
    function myFynction(data) {
      a = data;
      console.log(data);
    }
  };

  xhr.open("POST", "https://60376bfd5435040017722533.mockapi.io/form", true);
  xhr.setRequestHeader("Content-type", "aplication/x-www-form-urlencoded");
  xhr.send();
});
