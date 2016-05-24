import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),

    create(title){
        return this.get('store').createRecord('slot', {title: title}).save();
    }
});
