import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
