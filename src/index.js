/*
 * External dependencies
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "animate.css";

/*
 * Internal dependencies
 */
import "./styles/style.scss";
import lightbox from "./components/lightbox";
import form from "./components/form";
import cardSwitch from "./components/cardSwitch";
import animCatalogItem from "./components/animCatalogItem";
import contentHeight from "./components/contentHeight";
import burger from "./components/burger";

document.addEventListener("DOMContentLoaded", () => {
    lightbox();
    form();
    cardSwitch();
    burger();
});

window.addEventListener("load", () => {
    animCatalogItem();
    contentHeight();
});
