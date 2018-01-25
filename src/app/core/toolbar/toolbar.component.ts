import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @Input('sidenav') sidenav: any;
    @Input('sidepanel') sidepanel: any;

    @Input('layoutRef') layoutRef: any;

    constructor(private router: Router) {
    }

    ngOnInit() {

    }
}
