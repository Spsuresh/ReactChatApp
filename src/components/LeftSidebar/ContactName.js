import React from "react";

function ContactName({ name }) {
  return (
    <div>
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}
const styles = {
  contactText: {
    fontSize: "16px",
    color: "darkblack",
    marginBottom: "4px",
  },
};
export default ContactName;
