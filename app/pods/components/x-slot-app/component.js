import Ember from 'ember';

export default Ember.Component.extend({
    slots: {1: [], 2: [], 3: [], 4: []},

    actions: {
        addSlot(slot){
            this.get('slots')[slot.number].pushObject(slot.name);
        }
    }
});
