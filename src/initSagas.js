import * as sagas from './sagas';

export function initSagas(sagaMiddleware) {
  return Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
}
