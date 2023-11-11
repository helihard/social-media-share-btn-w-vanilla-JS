const shareBtn = document.querySelector("#share-img-container");
const shareBtnDark = document.querySelector("#share-img-container-dark");
const bylineContainer = document.querySelector("#byline-container");
const socialMediaContainer = document.querySelector("#social-media-container");
const textContainer = document.querySelector("#text-container");

shareBtn.addEventListener("click", () => {
  textContainer.style.marginBottom = "8px";
  bylineContainer.style.display = "none";
  socialMediaContainer.style.display = "flex";
});

shareBtnDark.addEventListener("click", () => {
  socialMediaContainer.style.display = "none";
  bylineContainer.style.display = "flex";
});