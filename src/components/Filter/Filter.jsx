import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/contacts-reducer";
import { FilterContainer, FilterInput, FilterLabel } from "./Filter.styled";

export const Filter = () => {
    const {filter} = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    
    return (
        <FilterContainer>
            <FilterLabel>Find contacts by name
                <FilterInput
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={event => dispatch(setFilter(event.target.value))}
                />
            </FilterLabel>
        </FilterContainer>
    )
};