import { Component, OnInit } from '@angular/core';
import { ResponseToolbarClickEvent } from '@farris/ui-response-toolbar';

import { FARRIS_DEVKIT_FRAME_PROVIDERS } from '@farris/devkit';
@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css'],
    providers: [FARRIS_DEVKIT_FRAME_PROVIDERS],
})
export class RootComponent implements OnInit {
    toolbarData = [
        {
            id: 'toolbar-add',
            text: '新增',
            class: 'btn-primary',
            disabled: false,
        },
        {
            id: 'toolbar-edit',
            text: '编辑',
            disabled: false,
        },
        {
            id: 'toolbar-save',
            text: '保存',
            disabled: false,
        },
        {
            id: 'toolbar-delete',
            text: '删除',
            disabled: false,
        },
        {
            id: 'toolbar-close',
            text: '关闭',
            disabled: false,
        },
    ];
    constructor() {}
    ngOnInit() {}
    toolbarClickHandler(event: ResponseToolbarClickEvent) {
        alert('you click ' + event.id + '!');
    }
}
