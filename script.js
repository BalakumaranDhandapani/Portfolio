const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
//adding on click background style
var header = document.getElementById("myid"); //getting the ul by id
var btns = header.getElementsByClassName("list"); //getting list bt class name
for (var i = 0; i < btns.length; i++) 
{
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}