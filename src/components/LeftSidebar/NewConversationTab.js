import React from "react";
import ContactTab from "./ContactTab";

function NewConversationTab({ contacts, showNewConvoTab }) {
  let handleClose = () => {
    showNewConvoTab(false);
  };
  return (
    <>
      <div className="new-convo-tab">
        <div className="nct-header">
          <p>Select Contact</p>
          <span onClick={handleClose}>
            <i className="fa fa-times-circle-o"></i>
          </span>
        </div>
        <div className="nct-list" onClick={handleClose}>
          {contacts.map((contact, index) => (
            <ContactTab contact={contact} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewConversationTab;
