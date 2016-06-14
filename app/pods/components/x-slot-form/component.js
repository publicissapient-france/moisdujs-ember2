import Ember from 'ember';

export default Ember.Component.extend({
    selectedThemeId: 1,
    slotTitle: '',
    actions: {
        addSlot(){

            if(Ember.isEmpty(this.get('slotTitle'))) {
                return;
            }

            this.get('addSlot')({
                themeId: this.get('selectedThemeId'),
                title: this.get('slotTitle')
            });

            this.setProperties({
                selectedThemeId: 1,
                slotTitle: ''
            });
        },
        setSelectedThemeId(value){
            this.set('selectedThemeId', value);
        }
    }
});
