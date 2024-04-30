function getSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

function getBurgerMenu() {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menu-btn");

  menuBtn.addEventListener("click", () => {
    header.classList.toggle("open");
  })
}

function getSearchForm() {
  const modal = document.getElementById("modal");
  const searchBtn = document.getElementById("search-btn");
  const closeBtn = document.getElementById("btn-close");

  searchBtn.addEventListener("click", () => {
    modal.classList.add("open");
  })

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  })

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("open");
    }
  })

}

function getTabs() {
  const tabItems = document.querySelectorAll(".work__text");

  tabItems.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      const content = document.getElementById(tabId);

      document.querySelector(".work__text.work__text--active").classList.remove("work__text--active");
      document.querySelector(".consult.consult--active").classList.remove("consult--active");

      this.classList.add("work__text--active");
      content.classList.add("consult--active");
    });
  });
}

function getAccordeon() {
  const accName = document.querySelectorAll(".questions__name");
  const accBtns = document.querySelectorAll(".questions__btn");

  accName.forEach(name => {
    name.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("open");
    })
  })

  accBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const accIcons = this.children;

      btn.classList.toggle("open");

      for (let i = 0; i < accIcons.length - 1; i++) {
        accIcons[1].classList.toggle("open");
      }
    })
  })
}

getSmoothScrolling();
getBurgerMenu();
getSearchForm();
getTabs();
getAccordeon();

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  effect: "fade"
});