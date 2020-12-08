import { transition, trigger, state, style, animate } from '@angular/animations';

export const mouseInOut = trigger('mouseInOut', [
    state('in', style({
        backgroundColor: 'rgba(200, 200, 200, 0.4)'
    })),
    state('out', style({
        backgroundColor: 'inherit'
    })),
    transition('in <=> out', [
        animate('0.2s')
    ]),
])