import Ember from 'ember';

export default Ember.Component.extend({

    rows: Ember.computed('slots.{1,2,3,4}.[]', function () {

        let slots = this.get('slots');

        const nbRows = Math.max(
            slots[1].length,
            slots[2].length,
            slots[3].length,
            slots[4].length);

        let rows = '';

        for (let i = 0; i < nbRows; i++) {
            rows +=
                `<tr>
            <td>${slots[1][i] || ''}</td>
            <td>${slots[2][i] || ''}</td>
            <td>${slots[3][i] || ''}</td>
            <td>${slots[4][i] || ''}</td>
          </tr>`;
        }

        return rows;
    })
});
