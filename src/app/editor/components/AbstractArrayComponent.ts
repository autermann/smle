import {EditorComponent} from './EditorComponent';
import {Input, ViewContainerRef, ComponentResolver} from '@angular/core';

export abstract class AbstractArrayComponent<T> extends EditorComponent {

    @Input()
    public model:T[];

    constructor(componentResolver:ComponentResolver, viewContainerRef:ViewContainerRef) {
        super(componentResolver, viewContainerRef);
    }

    public onReset():void {
        this.model.length = 0;
        this.extendModel();
    }

    public onAdd() {
        this.model.push(this.createEntry());
    }

    public onRemove(index:number) {
        if (this.model[index] === this.getActiveChildModel()) {
            this.closeChild();
        }
        this.model.splice(index, 1);
    }

    protected abstract createModel():T[];

    protected abstract createEntry():T;

}
