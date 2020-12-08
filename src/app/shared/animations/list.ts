import { trigger, transition, query, style, stagger, animate } from "@angular/animations";

export const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
        query(':enter',
            [style({ opacity: 0 }), stagger('100ms', animate('600ms ease-out', style({ opacity: 1 })))],
            { optional: true }
        ),
        query(':leave',
            animate('200ms', style({ opacity: 0 })),
            { optional: true }
        )
    ])
]);