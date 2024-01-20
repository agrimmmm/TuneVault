const nav = document.getElementsByTagName("nav");
const ul = document.getElementsByTagName("ul");
const navLinks = ul[0].getElementsByTagName("a");

  for (let i = 0; i < navLinks.length; i++) {
    const colors = navLinks[i].style.color;
    navLinks[i].addEventListener("mouseover", () => {
        navLinks[i].style.color = "black";
        navLinks[i].style.backgroundColor = "white";
    });

    navLinks[i].addEventListener("mouseout", () => {
      if(colors != "chartreuse")
        navLinks[i].style.color = "white";
      else
        navLinks[i].style.color = "chartreuse";
      navLinks[i].style.backgroundColor = "black";
    })
  }