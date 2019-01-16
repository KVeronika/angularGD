import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LogoSize } from '@common/enums/logoSize';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

    @Input()
    public size: number;

    constructor(private router: Router) {}

    get logoClass(): string {
        return this.size === LogoSize.large ? 'logo-large' : 'logo-small';
    }

    public toHome(): void {
        this.router.navigate(['/']);
    }

}
