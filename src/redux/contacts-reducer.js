import { createAction, createReducer } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const setFilter = createAction("contacts/setFilter");

const initialContacts = (JSON.parse(localStorage.getItem('items')) || []);

export const contacts = createReducer(
    {
        items: initialContacts,
        filter: ''        
    },
    {
        [addContact]: (state, { payload: newContact }) => {
            state.items = [...state.items, newContact];
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        [deleteContact]: (state, { payload: contactID }) => {
            state.items = state.items.filter(contact => contact.id !== contactID);
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        [setFilter]: (state, { payload: value }) => {
            state.filter = value;
        },
    }
);