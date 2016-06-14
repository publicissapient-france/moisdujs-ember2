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
            let expected = {themeId: '2', title: 'integration-test'};

            this.set('externalAction', (talk) => {
                expect(talk.themeId, 'talk[themeId]').to.equal(expected.themeId);
                expect(talk.title, 'talk[title]').to.equal(expected.title);
            });

            this.set('themes',[{
                id: '1', title: 'Project Bootstrapping'
            }, {
                id: '2', title: 'Les 4 fantastiques framework Front'
            }]);

            this.render(hbs`{{x-slot-form themes=themes addSlot=(action externalAction)}}`);

            this.$('#slot-theme').val(expected.themeId);
            this.$('#slot-theme').change();
            this.$('#slot-title').val(expected.title);
            this.$('#slot-title').change();

            this.$('#add-slot').click();
        });
    }
);
