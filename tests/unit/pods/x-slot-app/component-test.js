/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {
    describeComponent,
    it
} from 'ember-mocha';
import sinon from 'sinon';

const {Promise} = Ember.RSVP;

//Stub theme service
const themeStub = Ember.Service.extend({
    themes: [{
        title: 'Project Bootstrapping'
    }, {
        title: 'Les 4 fantastiques framework Front'
    }],

    getAll() {
        return Promise.resolve(this.get('themes'));
    }
});

describeComponent(
    'x-slot-app',
    'Unit: XSlotAppComponent',
    {
        unit: true
    },
    function () {
        it('themes property should have the correct values', function () {
            this.register('service:theme', themeStub);
            this.inject.service('theme', {as: 'themeService'});

            var component = this.subject();

            component.get('themes').then((themes) => {
                expect(themes.get('firstObject.title')).to.equal('Project Bootstrapping');
            });
        });

        it('should call the method getAll() once', function () {
            var themeService = Ember.Object.create({getAll(){}});
            var spy = sinon.spy(themeService, 'getAll');

            this.subject({themeService: themeService});

            expect(spy.calledOnce).to.equal(true);
            themeService.getAll.restore();
        });

        it('themes property should have the correct values - with sinon', function () {
            var themeService = Ember.Object.create({getAll(){}});
            var stub = sinon.stub(themeService, 'getAll');
            stub.returns(Promise.resolve([{title: 'Les 4 fantastiques framework Front'}]));

            var component = this.subject({themeService: themeService});

            component.get('themes').then((themes) => {
                expect(themes.get('firstObject.title')).to.equal('Les 4 fantastiques framework Front');
            });
        });
    }
);
