"use client"
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";

const LOCALE = 'en';

// importing components from cloud scape ui lib
import {
  AppLayout,
  BreadcrumbGroup,
  Button,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
  SpaceBetween,
  SplitPanel,
} from '@cloudscape-design/components';

import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';


// importing css file from cloud scape
import "@cloudscape-design/global-styles/index.css"
import { FaHamburger } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


// import custom compomemts from Commons
import SideBar from "./commons/SideBar";
import TQFHeader from "./commons/TQFHeader";

// import NotificationBar from "@/components/NotificationBar";
const inter = Inter({ subsets: ["latin"] });

 const metadata = {
  title: "The Quran Foundation",
  description: "NGO's management Tools",
};



export default function RootLayout({ children }) {
  const currentRoute = usePathname();
  const [modifiedRoute, setModifiedRoute] = useState('');

  useEffect(() => {
    let newRoute = currentRoute;
  
    // Replace hyphens and slashes with spaces
    newRoute = newRoute.replace(/[-\/]/g, ' ');
  
    if (newRoute.length >= 2) {
      newRoute = newRoute.slice(1); // Remove the first letter
      newRoute = newRoute.charAt(0).toUpperCase() + newRoute.slice(1).toLowerCase(); // Capitalize the second letter and make the rest lowercase
    } else {
      newRoute = newRoute.toUpperCase(); // If the string is less than 2 characters, just return it in uppercase
    }
  
    setModifiedRoute(newRoute);
  }, [currentRoute]);

  return (
    <html lang="en">
      <body className="" >
      <I18nProvider  locale={LOCALE} messages={[messages]}>
        <TQFHeader /> 
      <AppLayout   
         
        breadcrumbs={
          <BreadcrumbGroup 
          items={[
            { text: 'Home', href: '#' },
            { text: modifiedRoute, href: '#' },
          ]}
          />
        }   
        // navigationOpen={}
        navigation={
        <SideBar/>
        }
        
        // toolsOpen={!true}
        tools={<HelpPanel header={<h2>Notifications</h2>}>
<SideBar/>          
          </HelpPanel>}

        content={
          <ContentLayout
            header={
              <Header variant="h1" info={<Link variant="info">Info</Link>}>
               {modifiedRoute} 
               {/* Overview */}
              </Header>
            }
          >
          {children}
          </ContentLayout>
        }
      />
    </I18nProvider>
        </body>
    </html>
  );
}
