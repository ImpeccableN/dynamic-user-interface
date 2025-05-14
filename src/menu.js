const menuButtons = Array.from(document.getElementsByClassName("burgerIcon"));
console.log(menuButtons);

const hideMenu = function (sibling) {
  const menuNodes = sibling.nextElementSibling;
  console.log(menuNodes);
  menuNodes.setAttribute("style", "display: none");
};

const showMenu = function (sibling) {
  const menuNodes = sibling.nextElementSibling;
  console.log(menuNodes);
  menuNodes.setAttribute("style", "display: block");
};

const buttonFunction = function (button) {
  let menuHidden = true;
  button.addEventListener("click", (event) => {
    if (button !== event.target) return;
    if (menuHidden) {
      showMenu(button);
      menuHidden = false;
    } else {
      hideMenu(button);
      menuHidden = true;
    }
  });
};

export const init = function () {
  menuButtons.forEach(hideMenu);
  menuButtons.forEach(buttonFunction);
};
