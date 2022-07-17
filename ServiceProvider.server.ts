import {ReactDOMServerUIEngine} from './data/classes/ReactDOMServerUIEngine';

export const UIServiceProvider: Micra.ServiceProvider = {
  register(application) {
    application.container.singleton('ui-engine', ReactDOMServerUIEngine);
  },
};
