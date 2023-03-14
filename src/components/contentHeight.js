const contentHeight = () => {
    const content = document.querySelectorAll(".carousel-item-height");
    function equalizeHeight() {
        const contentHeight = [];
        content.forEach((element) => {
            element.style.height = "";
            element.style.display = "block";
            contentHeight.push(element.offsetHeight);
            element.style.display = "";
        });
        const contentHeightMax = Math.max.apply(null, contentHeight);
        content.forEach(
            (element) => (element.style.height = contentHeightMax + "px")
        );
    }
    equalizeHeight();
    window.addEventListener("resize", function () {
        equalizeHeight();
    });
};

export default contentHeight;
