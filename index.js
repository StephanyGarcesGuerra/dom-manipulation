// import "./styles.css";

//* Part 1- Background
const mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1> DOM Manipulatioin</h1>";
mainEl.classList.add("flex-ctr");

// //* Part two- Menu Bar
const topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
mainEl.classList.add("flex-ctr");

// //* Part three
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
for (let i = 0; i < menuLinks.length; i++) {
  topMenuEl.innerHTML += `<a href=${menuLinks[i].href}>${menuLinks[i].text}</a>`;
}
