import Ember from 'ember';

export default Ember.Component.extend({

    themeSlots: Ember.computed.mapBy('themes', 'slots'),
    rows: Ember.computed('themeSlots', function () {
        let themeSlots = this.get('themeSlots'),
            rows = '';

        if (Ember.isEmpty(themeSlots)) {
            return rows;
        }

        const nbRows = Math.max(
            themeSlots[0].get('length'),
            themeSlots[1].get('length'),
            themeSlots[2].get('length'),
            themeSlots[3].get('length'));


        for (let i = 0; i < nbRows; i++) {
            rows +=
                `<tr>
            <td>${themeSlots[0].objectAt(i) ? themeSlots[0].objectAt(i).get('title') : ''}</td>
            <td>${themeSlots[1].objectAt(i) ? themeSlots[1].objectAt(i).get('title') : ''}</td>
            <td>${themeSlots[2].objectAt(i) ? themeSlots[2].objectAt(i).get('title') : ''}</td>
            <td>${themeSlots[3].objectAt(i) ? themeSlots[3].objectAt(i).get('title') : ''}</td>
          </tr>`;
        }

        return rows;
    })
});
