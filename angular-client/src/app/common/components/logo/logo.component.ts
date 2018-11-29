import { Component, Input } from '@angular/core';

import { LogoSize } from '@common/enums/logoSize';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

    @Input()
    public size: number;

    get logoClass(): string {
        return this.size === LogoSize.large ? 'logo-large' : 'logo-small';
    }

}
