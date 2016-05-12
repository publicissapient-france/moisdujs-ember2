/* jshint expr:true */
import { expect } from 'chai';
import {
    describeComponent,
    it
} from 'ember-mocha';

describeComponent(
    'x-slot-app',
    'Unit: XSlotAppComponent',
    {
        unit: true
    },
    function () {
        it('should equal unit-test when the unit-test talk is added', function () {
            var component = this.subject();

            component.actions.addSlot.call(component, {number:1, name:'unit-test'});

            expect(component.get('slots')[1][0]).to.equal('unit-test');
        });
    }
);
