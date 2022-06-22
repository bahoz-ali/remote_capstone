const menuButton = document.querySelector('.main_menu .bi-list ');
const closeButton = document.querySelector('.bi-x-lg');
const menuList = document.querySelector('.main_menu_list');
const speakerList = document.querySelector('.speaker_list');

function openMenu() {
  menuList.classList.add('open--menu');
}

function closeMenu() {
  menuList.classList.remove('open--menu');
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

const speakers = [
  {
    name: 'Prashanth Chandrasekar',
    organize:
      "Prashanth is CEO of Stack Overflow, the world's largest and most-trusted software.",
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing.',
    image: '../images/speaker/speaker1.PNG',
  },
  {
    name: 'Stewart Butterfield',
    organize: 'Stewart is the CEO of Slack Technologies.',
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing.',
    image: '../images/speaker/speaker2.PNG',
  },
  {
    name: 'Sid Sijbrandij',
    organize:
      'Sid is the co-founder and CEO of GitLab, a single application for the DevOps lifecycle',
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing.',
    image: '../images/speaker/speaker3.PNG',
  },
  {
    name: 'Eric Yuan',
    organize:
      'Eric founded Zoom in 2011 to bring teams together in a video environment.',
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing.',
    image: '../images/speaker/speaker4.PNG',
  },
  {
    name: 'Bret Taylor',
    organize:
      "As president and COO of Salesforce, Bret leads the software company's global product vision.",
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing.',
    image: '../images/speaker/speaker5.PNG',
  },
  {
    name: 'Matt Biilmann',
    organize:
      "As president and COO of Salesforce, Bret leads the software company's global product vision.",
    description:
      'Matt is CEO and co-founder of Netlify, a platform designed to build, deploy and scale modern web applications.',
    image: '../images/speaker/speaker6.PNG',
  },
];

function speakerTemplate({ name, image, description, organize }) {
  const div = document.createElement('div');
  div.classList.add('speaker', 'clearfix');

  const template = `<div class="speaker__image">
            <img src=${image} alt="Yochai Benkler" />
          </div>

          <div class="speaker__name">
            <h3><a href="#">${name}</a></h3>
          </div>

          <div class="organize">
            <p>${organize}</p>
          </div>

          <p class="dots">............</p>

          <div class="speaker__description">
          <p>${description}</p>
          </div>
        `;

  div.innerHTML = template;

  return div;
}

function displaySpeaker() {
  speakers.forEach((speaker) => {
    speakerList.append(speakerTemplate(speaker));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displaySpeaker();
});
