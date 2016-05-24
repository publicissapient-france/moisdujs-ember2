/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {
    describeComponent,
    it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
    'x-slot-grid',
    'Integration: XSlotGridComponent',
    {
        integration: true
    },
    function () {
        it('should render no rows', function () {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.on('myAction', function(val) { ... });
            // Template block usage:
            // this.render(hbs`
            //   {{#x-slot-grid}}
            //     template content
            //   {{/x-slot-grid}}
            // `);
            this.set('externalSlots', {1: [], 2: [], 3: [], 4: []});

            this.render(hbs`{{x-slot-grid slots=externalSlots}}`);

            expect(this.$('#rows').children()).to.have.length(0);
        });
        it('should render the expected rows', function () {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.on('myAction', function(val) { ... });
            // Template block usage:
            // this.render(hbs`
            //   {{#x-slot-grid}}
            //     template content
            //   {{/x-slot-grid}}
            // `);
            this.set('externalThemes', [{slots: [Ember.Object.create({title: 'unit-test'})]}, {slots: []}, {slots: []}, {slots: []}]);

            this.render(hbs`{{x-slot-grid themes=externalThemes}}`);

            expect(this.$('#rows').children(), 'children.length').to.have.length(1);
            expect(this.$('#rows>tr').children()[0].innerHTML, '1rst column talk name').to.equal('unit-test');
        });
    }
);
