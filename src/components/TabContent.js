import React, { useState } from 'react';

import ContactProfile from './ContactProfile';

function TabContent({ contacts }) {
  const [activeProfile, setActiveProfile] = useState(null);

  if (!(contacts && contacts.length)) return <div className="no__contact__info">No contacts to display here!</div>;

  const firstPane = activeProfile ? [] : contacts.slice(0, Math.round(contacts.length/2));
  const secondPane = activeProfile ? contacts : contacts.slice(Math.round(contacts.length/2));

  return (
    <div className="tab__content__container">
      <div className="container__row">
        <div className="container__column">
          {activeProfile && <ContactProfile profile={activeProfile} closeProfile={() => setActiveProfile(null)} />}
          <div className="container__card">
            {contacts && firstPane.map((contact) => {
              const fullname = `${contact.firstName}, ${contact.lastName.toUpperCase()}`;
              return (
                <p className="profile__name" key={contact.email}>
                  <span onClick={() => setActiveProfile(contact)}>{fullname}</span>
                </p>
              );
            })}
          </div>
        </div>

        <div className="container__column">
          <div className="container__card">
            {contacts && secondPane.map((contact) => {
              const fullname = `${contact.firstName}, ${contact.lastName.toUpperCase()}`;
              return (
                <p className="profile__name" key={contact.email}>
                  <span onClick={() => setActiveProfile(contact)}>{fullname}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContent;
