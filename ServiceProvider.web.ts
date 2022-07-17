import {ReactDOMUIEngine} from './data/classes/ReactDOMUIEngine';

export const UIServiceProvider: Micra.ServiceProvider = {
  register(application) {
    application.container.singleton('ui-engine', ReactDOMUIEngine);
  },
};
