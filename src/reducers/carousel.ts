type initialState = {
  image: number;
};

export const initialState: initialState = {
  image: 0,
};

export const carousel = (state = initialState, action: any) => {
  switch (action.type) {
    case "CAROUSEL_SLIDE_RIGHT":
      return {
        ...state,
        image: state.image > 2 ? 0 : state.image + 1,
      };
    case "CAROUSEL_SLIDE_LEFT":
      return {
        ...state,
        image: state.image < 1 ? 3 : state.image - 1,
      };
    default:
      return state;
  }
};
