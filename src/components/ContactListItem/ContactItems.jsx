import PropTypes from "prop-types";
import { ImUser, ImPhone, ImBin } from "react-icons/im";
import { ContactListItem, ContactWrapper, DeleteButton } from "./ContactItems.styled";

const ContactItems = ({ contacts, deleteContact }) => {
    return (
        <>
            {contacts.map(({ id, name, number }) => 
                <ContactListItem key={id}>
                    <ContactWrapper><ImUser /> {name}</ContactWrapper>
                    <ContactWrapper><ImPhone /> {number}</ContactWrapper>
                    <DeleteButton onClick={() => deleteContact(id)}><ImBin/></DeleteButton>
                </ContactListItem>
            )}
        </>
    );
};

export default ContactItems;

ContactItems.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
};