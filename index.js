const navigation = document.querySelector(".nav-tabs");
const skills = document.getElementById("skills");
const menu = document.querySelector(".menu-content");
const questLink = document.getElementById("quests");
const questContent = document.getElementById("menu-content-quests");
const skillsLink = document.getElementById("skills");
const skillsContent = document.getElementById("menu-content-skills");

const optionClick = ({ target }) => {
  if (target.id != "") {
    console.log(target);

    if (target.id === questLink.id) {
      if (questLink.className === "link-active") return;
      else {
        if (questLink.className === "link") {
          questLink.className = "link-active";
          questContent.className = "menu-content-quests";
          skillsLink.className = "link";
          skillsContent.className = "hidden";
        } else {
          questLink.className = "link";
          questContent.className = "hidden";
        }
      }
    }

    if (target.id === skillsLink.id) {
      if (skillsLink.className === "link-active") return;
      if (skillsLink.className === "link") {
        skillsLink.className = "link-active";
        skillsContent.className = "menu-content-skills";
        questLink.className = "link";
        questContent.className = "hidden";
      } else {
        skillsLink.className = "link";
        skillsContent.className = "hidden";
      }
    }
  }
};

navigation.addEventListener("click", optionClick);
