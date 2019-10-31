Vue.component("twitter-friends", {
  props: ["data"],
  data() {
    return {
      friends: []
    };
  },
  created() {
    fetch(this.data)
      .then(response => {
        return response.json();
      })
      .then(friends => {
        this.friends = friends;
      })
      .catch(err => console.error(err));
  },
  template: `
  <ul>
    <li v-for="friend in friends"><a :href="'https://www.twitter.com/' + friend.id">{{ friend.name }}</a></li>
  </ul>
  `
});
