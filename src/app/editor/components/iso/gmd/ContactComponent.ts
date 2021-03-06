
import { Component } from 'angular2/core';
import { Contact } from '../../../../model/iso/gmd/Contact';
import { AbstractComponent }  from '../../AbstractEditorComponent';
import { AddressComponent } from './AddressComponent';
import { PhoneComponent } from './PhoneComponent';
import { OnlineResourceComponent } from './OnlineResourceComponent';
import { CardHeaderComponent } from '../../CardHeaderComponent';

@Component({
  selector: 'iso-contact',
  template: require('./ContactComponent.html'),
  directives: [CardHeaderComponent, AddressComponent, PhoneComponent, OnlineResourceComponent]
})
export class ContactComponent extends AbstractComponent<Contact> {
  protected createModel(): Contact {
    return new Contact();
  }
}
