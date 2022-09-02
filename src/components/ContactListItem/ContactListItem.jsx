import PropTypes from "prop-types";
import { ImUser, ImPhone, ImBin } from "react-icons/im";
import { ContactItem, ContactWrapper, DeleteButton } from "./ContactListItem.styled";

export const ContactListItem = ({ id, name, number, onDeleteContact }) => (
    <ContactItem>
        <ContactWrapper><ImUser /> {name}</ContactWrapper>
        <ContactWrapper><ImPhone /> {number}</ContactWrapper>
        <DeleteButton onClick={() => onDeleteContact(id)}><ImBin /></DeleteButton>
    </ContactItem>
);

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};