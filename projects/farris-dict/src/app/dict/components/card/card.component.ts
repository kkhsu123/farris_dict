import { Component, OnInit, HostBinding } from '@angular/core';

import { FARRIS_DEVKIT_FRAME_PROVIDERS } from '@farris/devkit';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    providers: [FARRIS_DEVKIT_FRAME_PROVIDERS],
})
export class CardComponent implements OnInit {
    @HostBinding('class.f-struct-wrapper')
    cls = true;
    data = {
        id: '001',
        code: '1',
        name: 'A',
    };
    constructor() {}
    ngOnInit() {}
}
