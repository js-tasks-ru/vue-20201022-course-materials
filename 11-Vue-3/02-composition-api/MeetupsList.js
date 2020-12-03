import { MeetupListItem } from './MeetupsListItem.js';

const template = `
<div class="meetups-list">
   <meetup-list-item v-for="meetup in meetups" :meetup="meetup" :key="meetup.id"></meetup-list-item>
</div>
`;

export const MeetupsList = {
  name: 'MeetupsList',

  template,

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  components: {
    MeetupListItem,
  },
};
