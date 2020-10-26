// (!) Это псевдо-код (!)

(async () => {
  const meetups = await fetch('/api/meetups').then(res => res.json());

  const meetupsList = document.createElement('ul');
  for (const meetup of meetups) {
    const meetupCard = document.createElement('li');

    const meetupCover = document.createElement('img');
    meetupCover.src = meetup.img;

    const meetupLink = document.createElement('a');
    meetupLink.href = `/meetups/${meetup.id}`;
    meetup.textContent = meetup.title;

    meetupCard.append(meetupCover, meetupLink);

    meetupsList.appendChild(meetupCard);
  }
})();
