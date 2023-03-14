const cardSwitch = () => {
    [].forEach.call(document.querySelectorAll("form.my-card"), function (form) {
        form.addEventListener("change", function () {
            try {
                const switchText = form.querySelectorAll(".settings__text");
                const switchInput = form.querySelectorAll("input[name=switch]");

                let switchInputChecked = switchInput[0].checked ? 0 : 1;
                switchText[switchInputChecked].classList.add(
                    "settings__text-checked"
                );
                switchText[1 - switchInputChecked].classList.remove(
                    "settings__text-checked"
                );

                const checkedSetting = form.querySelector(
                    "input[data-price]:checked"
                );
                let calcInput =
                    +checkedSetting.getAttribute("data-price") +
                    +switchInput[switchInputChecked].getAttribute("data-price");
                const priceCurrent = form.querySelector(".price-current");
                const priceOld = form.querySelector(".price-old");
                let numberFrom = Number(
                    typeof priceCurrent.dataset.from === "undefined"
                        ? 0
                        : priceCurrent.dataset.from
                );
                let numberTo = Number(calcInput);
                const time = {
                    start: performance.now(),
                    duration: 1000,
                };
                const tick = function (now) {
                    const progress = Math.min(
                        (now - time.start) / time.duration,
                        1
                    );
                    const easing = Math.pow(progress - 1, 5) + 1;
                    const value = numberFrom + (numberTo - numberFrom) * easing;
                    priceCurrent.textContent = value.toFixed();
                    priceOld.textContent = (
                        value * 1.428571428571429
                    ).toFixed();
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        priceCurrent.dataset.from = numberTo.toFixed();
                        priceOld.textContent = Number(
                            numberTo * 1.428571428571429
                        ).toFixed();
                    }
                };
                requestAnimationFrame(tick);
            } catch (e) {
                console.error(e);
            }
        });
        form.dispatchEvent(new Event("change"));
    });
};

export default cardSwitch;
