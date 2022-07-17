/// <reference types="@micra/core/service-provider" />
/// <reference types="@micra/core/ui-engine" />
import type React from 'react';

declare global {
  namespace Application {
    interface Services {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'ui-engine': Micra.UIEngine<React.ComponentType<any>>;
    }
  }

  namespace Micra {
    type ComponentType<P> = React.ComponentType<P>;
    type ComponentElement<P> = React.ReactElement<P>;
  }
}

export {};
