import {Component, OnInit, Input, DynamicComponentLoader, ViewContainerRef} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {AbstractProcess, SimpleProcess, ContactList} from '../model/sml';
import {ResponsibleParty, Contact, Role} from '../model/iso/gmd';
import {DescriptionRepository} from '../services/DescriptionRepository';
import {ResponsiblePartyComponent} from './components/iso/gmd/ResponsiblePartyComponent';
import {AddressListComponent} from './components/iso/gmd/AddressListComponent';
import {ContactsComponent} from './components/sml/ContactsComponent';
import {SensorMLPipe} from './pipes/SensorMLPipe';
import {StackedItemComponent} from './components/StackedItemComponent'

@Component({
    selector: 'editor',
    template: require('./editor.html'),
    styles: [require('./editor.scss')],
    directives: [ResponsiblePartyComponent, ContactsComponent, AddressListComponent, StackedItemComponent],
    pipes: [SensorMLPipe]
})
export class Editor implements OnInit {

    @Input()
    public description:AbstractProcess;
    private id:string;

    constructor(private service:DescriptionRepository,
                routeParams:RouteParams) {
        this.id = routeParams.get('id');
    }

    ngOnInit():void {
        if (this.id === 'new') {
            this.description = new SimpleProcess();
        } else {
            this.service.getDescription(this.id)
                .then(description => this.description = description);
        }
        //    let contactList = new ContactList();
        //    let respParty = new ResponsibleParty();
        //    let contact = new Contact();
        //
        //    contact.hoursOfService = "test";
        //
        //    respParty.individualName = "individualName_test";
        //    respParty.organisationName = "organisationName_test";
        //    respParty.role= "originator";
        //    respParty.contactInfo = contact;
        //
        //    contactList.contacts.push(respParty);
        //    this.description.contacts.push(contactList);
    }

    saveDescription():void {
        this.service.saveDescription(this.description);
    }

}
