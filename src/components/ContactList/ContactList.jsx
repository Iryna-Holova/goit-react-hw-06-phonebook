import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts-reducer";
import { ContactListContainer } from "./ContactList.styled";
import { ContactListItem } from "components/ContactListItem/ContactListItem";

export const ContactList = () => {
    const { items, filter } = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = items.filter(item => item.name.toLowerCase().includes(normalizedFilter));

    const handleContactDelete = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <ContactListContainer>
            {filteredContacts.map(({ id, name, number }) => 
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={handleContactDelete}
                />
            )}
        </ContactListContainer>
    )
};