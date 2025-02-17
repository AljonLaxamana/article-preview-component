const btnShareEl = document.querySelector(".btn-share");
const profileEl = document.querySelector(".preview-card-profile");
const progileImgNameEl = document.querySelector(
  ".preview-card-profile-img-name-container"
);
const profileSocialIconsEl = document.querySelector(
  ".preview-card-share-social-container"
);

btnShareEl.addEventListener("click", function () {
  const width = window.innerWidth;
  if (width < 800) {
    profileEl.classList.toggle("bg-change");
    progileImgNameEl.classList.toggle("hide");
    profileSocialIconsEl.classList.toggle("hide");
  } else {
    profileSocialIconsEl.classList.toggle("hide");
  }
});
