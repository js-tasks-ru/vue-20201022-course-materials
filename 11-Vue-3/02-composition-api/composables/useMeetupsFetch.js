import meetupsData from '../meetups-data.js';
import { computed, onMounted, ref, inject } from '../vue3.esm-browser.js';

function getDateOnlyString(date) {
  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  return `${YYYY}-${MM}-${DD}`;
}

function getMeetups() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meetupsData);
    }, 1000);
  });
}

export function useMeetupsFetch() {
  const rawMeetups = ref([]);

  const { API_URL } = inject('config');

  const meetups = computed(() => {
    return rawMeetups.value.map((meetup) => ({
      ...meetup,
      cover: meetup.imageId ? `${API_URL}/images/${meetup.imageId}` : undefined,
      date: new Date(meetup.date),
      localDate: new Date(meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      dateOnlyString: getDateOnlyString(new Date(meetup.date)),
    }));
  });

  const fetchMeetups = () => {
    return getMeetups();
  };

  onMounted(async () => {
    rawMeetups.value = await fetchMeetups();
  });

  return {
    meetups,
  };
}
