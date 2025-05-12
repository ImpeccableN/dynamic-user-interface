const menuButtons = Array.from(document.getElementsByClassName("menuButton"));

const hideMenu = function (parent) {
  const menuNodes = Array.from(parent.children);
  menuNodes.forEach((element) => {
    element.setAttribute("style", "display: none");
  });
};

const showMenu = function (parent) {
  const menuNodes = Array.from(parent.children);
  menuNodes.forEach((element) => {
    element.setAttribute("style", "display: block");
  });
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
  // buttonFunction();
};
