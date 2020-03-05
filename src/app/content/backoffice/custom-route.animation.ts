import { animate, AnimationMetadata, AnimationTriggerMetadata, group, query, style, transition, trigger } from '@angular/animations';

export const rightAnimation: AnimationMetadata[] = [
  query(':enter, :leave', style({width: '100%'}), {optional: true}),
  group([
    query(
      ':enter',
      [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style(({transform: 'translateX(0%)'}))),
      ],
      {optional: true}
    ),
    query(
      ':leave',
      [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style(({transform: 'translateX(-100%)'}))),
      ],
      {optional: true}
    ),
  ])
];
export const leftAnimation: AnimationMetadata[] = [
  query(':enter, :leave', style({width: '100%'}), {optional: true}),
  group([
    query(
      ':enter',
      [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s ease-in-out', style(({transform: 'translateX(0%)'}))),
      ],
      {optional: true}
    ),
    query(
      ':leave',
      [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style(({transform: 'translateX(100%)'}))),
      ],
      {optional: true}
    ),
  ])
];


export const customRouteAnimation: AnimationTriggerMetadata = trigger(
  'routerTransition',
  [
    transition('products => cart', rightAnimation),
    transition('cart => products', leftAnimation),
  ]
);
