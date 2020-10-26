import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import meetupsData from './meetups-data.js';

function fetchMeetups() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meetupsData);
    }, 1000);
  });
}

function getDateOnlyString(date) {
  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  return `${YYYY}-${MM}-${DD}`;
}

const app = new Vue({
  el: '#app',

  data() {
    return {
      hello: 'world',
      rawMeetups: [],
      filter: {
        date: 'all',
        participation: 'all',
        search: '',
      },
      view: 'list',
    };
  },

  mounted() {
    this.getMeetups();
  },

  computed: {
    meetups() {
      return this.rawMeetups.map((meetup) => ({
        ...meetup,
        cover: meetup.imageId
          ? `https://course-vue.javascript.ru/api/images/${meetup.imageId}`
          : undefined,
        date: new Date(meetup.date),
        localDate: new Date(meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: getDateOnlyString(new Date(meetup.date)),
      }));
    },

    filteredMeetups() {
      const dateFilter = (meetup) =>
        this.filter.date === 'all' ||
        (this.filter.date === 'past' && new Date(meetup.date) <= new Date()) ||
        (this.filter.date === 'future' && new Date(meetup.date) > new Date());

      const participationFilter = (meetup) =>
        this.filter.participation === 'all' ||
        (this.filter.participation === 'organizing' && meetup.organizing) ||
        (this.filter.participation === 'attending' && meetup.attending);

      const searchFilter = (meetup) =>
        [meetup.title, meetup.description, meetup.place, meetup.organizer]
          .join(' ')
          .toLowerCase()
          .includes(this.filter.search.toLowerCase());

      return this.meetups.filter(
        (meetup) =>
          dateFilter(meetup) &&
          participationFilter(meetup) &&
          searchFilter(meetup),
      );
    },
  },

  methods: {
    async getMeetups() {
      this.rawMeetups = await fetchMeetups();
    },
  },
});

window.app = app;
