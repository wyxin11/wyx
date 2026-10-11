const languageButton = document.querySelector(".language-button");
const languageCurrent = document.querySelector(".language-current");
const languageOther = document.querySelector(".language-other");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
const translatable = [...document.querySelectorAll("[data-zh][data-en]")];
let language = "zh";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? "王远欣｜山东大学｜对称密码分析" : "Yuanxin Wang | Shandong University | Symmetric Cryptanalysis";
  translatable.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageCurrent.textContent = language === "zh" ? "中" : "EN";
  languageOther.textContent = language === "zh" ? "EN" : "中";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为中文");
}

languageButton.addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

setLanguage("zh");
