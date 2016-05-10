import Ember from 'ember';

export default Ember.Component.extend({
    selectedColumnNumber: 1,
    slotName: '',
    actions: {
        addSlot(){

            if(Ember.isEmpty(this.get('slotName'))) {
                return;
            }

            this.attrs.addSlot({
                number: this.get('selectedColumnNumber'),
                name: this.get('slotName')
            });
            this.setProperties({
                selectedSlot: 1,
                slotName: ''
            });
        },
        setSelectedColumnNumber(value){
            this.set('selectedColumnNumber', value);
        }
    }
});
