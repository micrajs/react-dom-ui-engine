/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Error} from '@micra/error';

export class ReactDOMUIEngine
  implements Micra.UIEngine<React.ComponentType<any>>
{
  root!: React.ComponentType<any>;

  setRoot(root: React.ComponentType<any>): this {
    this.root = root;
    return this;
  }

  mount<
    Element extends globalThis.Element | DocumentFragment,
    Props extends Record<string, any>,
  >(
    element: Element,
    component: Micra.ComponentType<Props> = this.root,
    props?: Props | undefined,
  ): void {
    const root = createRoot(element);
    root.render(React.createElement(component, props));
  }

  toString(): string {
    throw new Error({
      status: 500,
      title:
        '[ReactDOMUIEngine]: `toString` method not implemented due to bundle size constraints. If this method is needed, please use ReactDOMServerUIEngine instead.',
    });
  }
}
