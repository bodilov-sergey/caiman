const animCatalogItem = () => {
    let animItems = document.querySelectorAll(".catalog__item"),
        headerHeight = document.querySelector("header").offsetHeight,
        bottomMargin,
        observer,
        topMargin,
        init = 0;

    function resizePadding() {
        const CatalogPadding = animItems[0].offsetHeight * 0.0555 + "px";
        animItems[0].style.paddingTop = CatalogPadding;
        animItems[0].parentElement.style.paddingBottom = CatalogPadding;
    }
    resizePadding();

    function resizeInnerHeight() {
        bottomMargin = (window.innerHeight - headerHeight - 1) / 2;
        topMargin = bottomMargin + headerHeight;
    }
    resizeInnerHeight();

    window.addEventListener("resize", function () {
        resizePadding();
        resizeInnerHeight();
        observeSubscriber();
    });
    animItems[0].classList.add("__active");

    function observeSubscriber() {
        if (init) {
            animItems.forEach((node) => {
                observer.unobserve(node);
            });
        }
        observer = new IntersectionObserver(observerCallback, {
            threshold: 0,
            rootMargin: `-${topMargin}px 0px -${bottomMargin}px`,
        });

        animItems.forEach((node) => {
            observer.observe(node);
        });
        init = 1;
    }
    observeSubscriber();

    function observerCallback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animItems.forEach((item) => {
                    item.classList.remove("__active");
                });
                entry.target.classList.add("__active");
            }
        });
    }
};
export default animCatalogItem;
