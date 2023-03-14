const burger = () => {
    const navContainer = document.querySelector(".nav__container");
    const burger = navContainer.querySelector(".nav__burger");
    const links = navContainer.querySelector(".nav__links");
    const backdrop = document.querySelector(".backdrop");
    const body = document.querySelector("body");

    burger.onclick = function () {
        [burger, backdrop, links, navContainer, body].forEach((item) => {
            item.classList.toggle("__opened");
        });
    };

    backdrop.onclick = closeAll;
    links.onclick = closeAll;

    function closeAll() {
        [burger, backdrop, links, navContainer, body].forEach((item) => {
            item.classList.remove("__opened");
        });
    }
};

export default burger;
