import { RootState } from "../../reducers/rootReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
