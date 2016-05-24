import Ember from 'ember';
const {service} = Ember.inject;

export default Ember.Component.extend({
    slotService: service('slot'),
    themeService: service('theme'),

    didInitAttrs(){
        this.set('themes', this.get('themeService').getAll());
    },

    actions: {
        addSlot(newSlot){
            let promiseSlot = this.get('slotService').create(newSlot.title);
            promiseSlot.then((slot) => this.get('themeService').addSlot(newSlot.themeId, slot));
        }
    }
});
