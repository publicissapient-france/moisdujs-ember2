import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),

    getAll(){
        return this.get('store').findAll('theme');
    },

    addSlot(themeId, slot) {
        this.get('store').findRecord('theme', themeId).then((theme) => {
            theme.get('slots').pushObject(slot);
        });
    }
});
