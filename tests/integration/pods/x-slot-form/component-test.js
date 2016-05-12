/* jshint expr:true */
import { expect } from 'chai';
import {
    describeComponent,
    it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
    'x-slot-form',
    'Integration: XSlotFormComponent',
    {
        integration: true
    },
    function () {
        it('should send the expected talk object', function () {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.on('myAction', function(val) { ... });
            // Template block usage:
            // this.render(hbs`
            //   {{#x-slot-form}}
            //     template content
            //   {{/x-slot-form}}
            // `);
            let expected = {number: 2, name: 'integration-test'};

            this.set('externalAction', (talk) => {
                expect(talk.number, 'talk[number]').to.equal(expected.number);
                expect(talk.name, 'talk[name]').to.equal(expected.name);
            });

            this.render(hbs`{{x-slot-form addSlot=(action externalAction)}}`);

            this.$('#slot-column').val(expected.number);
            this.$('#slot-name').val(expected.name);
            this.$('button').click();
        });
    }
);
