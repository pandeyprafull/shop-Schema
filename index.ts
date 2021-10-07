import * as Entities from './entities';
// import * as Views from './views';

const getEntities = () => Object.values(Entities);
// const getViews = () => Object.values(Views);

export { getEntities };
export * from './entities';
// export * from './views';
export * from './enums';