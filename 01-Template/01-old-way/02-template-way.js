// (!) Это псевдо-код (!)

(async () => {
  const meetups = await fetch('/api/meetups').then(res => res.json());

  const template = `
    <ul>
      {% for meetup of meetups %}
      <li>
        <img src="{{ meetup.img }}" />
        <a href="/meetups/{{ meetup.id }}">{{ meetup.title }}</a>
      </li>
      {% endfor %}
    </ul>`

  TemplateEngine.render('#meetups-list', template, { meetups });
})();
