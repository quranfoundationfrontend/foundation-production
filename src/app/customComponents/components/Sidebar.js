import { SideNavigation } from '@cloudscape-design/components';
import React from 'react';
import Link from 'next/link';
// Custom Link component to handle Next.js routing
const CustomLink = ({ href, children }) => (
  <Link href={href} passHref>
  {children}
  </Link>
);

const Sidebar = () => {
  const items = [
    { type: 'link', text: 'Dashboard', href: '/dashboard'  },
    { type: 'link', text: 'Search', href: '/search' },
    { type: 'link', text: 'Admin Actions', href: '/admin-actions' },
    { type: 'link', text: 'Add Event', href: '/add-events' },

    {
      type: 'section',
      text: 'Expenses',
      items: [
        { type: 'link', text: 'Add Petty Cash', href: '/Expenses/petty-cash' },
        { type: 'link', text: 'Add Expenses', href: '/Expenses/add-expenses' },
      ],
    },
    {
      type: 'section',
      text: 'Configurations',
      items: [
        { type: 'link', text: 'Programs', href: '/Programs' },
        { type: 'link', text: 'Bank', href: '/Bank' },
        { type: 'link', text: 'Industries', href: '/page9' },
        { type: 'link', text: 'Occupations', href: '/page9' },
        { type: 'link', text: 'Beneficiary Types', href: '/page9' },
        { type: 'link', text: 'Beneficiary Occupations', href: '/page9' },
      ],
    },
    {
      type: 'section',
      text: 'Applications',
      items: [
        { type: 'link', text: 'ESP Applications', href: '/Programs' },
        { type: 'link', text: 'HSP Applications', href: '/Programs' },
        { type: 'link', text: 'WSP Applications', href: '/Programs' },
        { type: 'link', text: 'EDP Applications', href: '/Programs' },
      ],
    },
    { type: 'link', text: 'NGO\'s', href: '/page1' },
    { type: 'link', text: 'Volunteers', href: '/page1' },
    { type: 'link', text: 'Beneficiary', href: '/page1' },
    { type: 'link', text: 'Donations', href: '/page1' },
    { type: 'link', text: 'Historic Applications', href: '/page1' },
  ];

  const renderItems = (items) => {
    return items.map((item) => {
      if (item.type === 'link') {
        return {
          ...item,
          text: <CustomLink href={item.href}>{item.text}</CustomLink>,
        };
      }
      if (item.type === 'section') {
        return {
          ...item,
          items: renderItems(item.items),
        };
      }
      return item;
    });
  };

  return (
    <SideNavigation 
    
      header={{
        
        // href: '#',
        text: 'Quran Foundation',
        
      }}
      items={renderItems(items)}
    />
  );
};

export default Sidebar;
