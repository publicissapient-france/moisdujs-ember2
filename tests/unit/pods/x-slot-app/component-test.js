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
        it('should call the method getAll() once', function () {
            let themeService = Ember.Object.create({getAll(){}});
            sinon.spy(themeService, 'getAll');
            this.subject({themeService: themeService});

            expect(themeService.getAll.calledOnce).to.equal(true);
        });

        it('themes property should have the correct values - with sinon', function () {
            let themeService = Ember.Object.create({getAll(){}});
            let stub = sinon.stub(themeService, 'getAll');
            stub.returns(Promise.resolve([{title: 'Les 4 fantastiques framework Front'}]));

            let component = this.subject({themeService: themeService});

            component.get('themes').then((themes) => {
                expect(themes.get('firstObject.title')).to.equal('Les 4 fantastiques framework Front');
            });
        });

        it('themes property should have the correct values', function () {
            this.register('service:theme', themeStub);
            this.inject.service('theme', {as: 'themeService'});

            let component = this.subject();

            component.get('themes').then((themes) => {
                expect(themes.get('firstObject.title')).to.equal('Project Bootstrapping');
            });
        });
    }
);
