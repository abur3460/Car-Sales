import { ADD_FEATURE, REMOVE_FEATURE, UPDATE_TOTAL } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 369998.00,
      name: '2019 Porsche GT2RS',
      image:
        'https://vehicle-photos-published.vauto.com/8e/d9/fd/e5-348a-47cd-acdb-a0e591e61e65/image-1.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'Straight Pipe', price: 3500 },
      { id: 2, name: 'Exposed Carbon Body Kit', price: 5500 },
      { id: 3, name: 'Carbon-Ceramic Brakes', price: 2500 },
      { id: 4, name: 'Rear spoiler', price: 550 }
    ]
  };

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                car: {
                  ...state.car,
                  features: state.car.features.includes(action.payload) ? [...state.car.features] : [
                    ...state.car.features, action.payload
                  ]
                }
            }
        case REMOVE_FEATURE:
            return {
              ...state,
                car: {
                  ...state.car,
                  features: state.car.features.filter(c => c.id != action.payload.id)
                }
            };
        case UPDATE_TOTAL:
            return {
              ...state,
              additionalPrice: state.additionalPrice + action.payload
            };
        default:
            return state;
    }
}