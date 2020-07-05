import { ViewModel, NgCommand } from '@farris/devkit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ListViewModel extends ViewModel {
    bindingPath = '/';
    @NgCommand({
        name: 'load',
    })
    load(): Observable<any> {
        return;
    }
}
