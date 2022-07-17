/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {createRoot} from 'react-dom/client';
import {renderToString} from 'react-dom/server';

export class ReactDOMServerUIEngine
  implements Micra.UIEngine<React.ComponentType>
{
  root!: React.ComponentType<any>;

  setRoot(root: React.ComponentType) {
    this.root = root;
    return this;
  }

  mount<
    Element extends globalThis.Element | DocumentFragment,
    Props extends Record<string, any>,
  >(
    element: Element,
    component: React.ComponentType<Props> = this.root,
    props?: Props | undefined,
  ): void {
    const root = createRoot(element);
    root.render(React.createElement(component, props));
  }

  toString<Props extends Record<string, any>>(
    component: React.ComponentType<Props> = this.root,
    props?: Props | undefined,
  ): string {
    return renderToString(React.createElement(component, props));
  }
}
