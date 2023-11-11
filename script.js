const shareBtn = document.querySelector("#share-img-container");
const shareBtnDark = document.querySelector("#share-img-container-dark");
const bylineContainer = document.querySelector("#byline-container");
const socialMediaContainer = document.querySelector("#social-media-container");
const textContainer = document.querySelector("#text-container");
const shareTooltip = document.querySelector("#share-tooltip");

const smallerScreen = window.matchMedia("(max-width: 849px)");


shareBtn.addEventListener("click", () => {
  if (smallerScreen.matches) {
  textContainer.style.marginBottom = "8px";
  bylineContainer.style.display = "none";
  shareTooltip.style.display = "none";
  socialMediaContainer.style.display = "flex";
  } else {
    shareTooltip.style.display = "flex";
  }
});

shareBtnDark.addEventListener("click", () => {
  if (smallerScreen.matches) {
  socialMediaContainer.style.display = "none";
  bylineContainer.style.display = "flex";
  }
});

shareTooltip.addEventListener("click", () => {
  shareTooltip.style.display = "none";
})

window.addEventListener("resize", () => {
  if (window.innerWidth < 850) {
  shareTooltip.style.display = "none";
  } else {
    socialMediaContainer.style.display = "none";
    bylineContainer.style.display = "flex";
  }
})