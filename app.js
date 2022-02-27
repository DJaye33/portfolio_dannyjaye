const container = document.querySelectorAll("nav li a");

function showHideContent() {
  for (const link of container) {
    link.addEventListener("click", (event) => {
      // hide all containers
      container.forEach((element) => {
        document.querySelector(
          `.${element.getAttribute("href").substring(1)}`
        ).style.display = "none";
      });

      // remove active class
      container.forEach((element) => element.classList.remove("active"));

      // get clicked link, target that container
      document.querySelector(
        `.${event.currentTarget.getAttribute("href").substring(1)}`
      ).style.display = "flex";

      // add active class to node element
      link.classList.add("active");
    });
  }
}

showHideContent();
