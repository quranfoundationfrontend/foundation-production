import React from 'react'

import TopNavigation from "@cloudscape-design/components/top-navigation";
// import image from "../Assets/"
const TQFHeader = () => {
  return (
    <TopNavigation
    identity={{
      // href: "#",
      title: "The Quran Foundation",
      logo: {
        src: "https://thequranfoundation.org/wp-content/uploads/2024/02/The_Quran_Foundation_TQF_Organization_Charity_Donation_Logo.png",
        alt: "Quran Foundation Logo"
      }
    }}
    utilities={[
      {
        type: "menu-dropdown",
        iconName: "add-plus",
        ariaLabel: "New Application",
        title: "New Application",
        items: [
          {
            
            id: "esp",
            text: "ESP Application"
          },
          {
            id: "hsp",
            text: "HSP Application"
          },
          {
            id: "wsp",
            text: "WSP Application"
          },
          {
            id: "edp",
            text: "EDP Application"
          }
        ]
      },
     
      {
        type: "menu-dropdown",
        iconName: "settings",
        ariaLabel: "Settings",
        title: "Settings",
        items: [
          {
            id: "settings-org",
            text: "Organizational settings"
          },
          {
            id: "settings-project",
            text: "Project settings"
          }
        ]
      },
      {
        type: "menu-dropdown",
        text: "John Doe",
        description: "email@example.com",
        iconName: "user-profile",
        items: [
          { id: "profile", text: "Profile" },
          { id: "preferences", text: "Preferences" },
          { id: "security", text: "Security" },
          {
            id: "support-group",
            text: "Support",
            items: [
              {
                id: "documentation",
                text: "Documentation",
                href: "#",
                external: true,
                externalIconAriaLabel:
                  " (opens in new tab)"
              },
              { id: "support", text: "Support" },
              {
                id: "feedback",
                text: "Feedback",
                href: "#",
                external: true,
                externalIconAriaLabel:
                  " (opens in new tab)"
              }
            ]
          },
          { id: "signout", text: "Sign out" }
        ]
      }
    ]}
  />

  )
}

export default TQFHeader