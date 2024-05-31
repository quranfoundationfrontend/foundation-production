"use client"
import React from 'react'

import {
  Box,
    Button,
    Container,
   
    Header,
    Pagination,
    SpaceBetween,
    Table,
    TextFilter,
  } from '@cloudscape-design/components';
import BeneficiariesChart from '../customComponents/components/Charts/BeneficiariesChart'; 
import DonorsCharts from '../customComponents/components/Charts/DonorsCharts'; 
import Link from 'next/link';
import Volunteer from '../customComponents/components/Charts/Volunteer ';
import BeneficiariesPieChart from '../customComponents/components/Charts/BeneficiariesPieChart';
import RaisedTypesCharts from '../customComponents/components/Charts/RaisedTypesCharts';



const page = () => {

  const accoundBalance = 1223;
  const cashINHand = 45666
  const donors = 223;
  const beneficiaries = 1243

  return (
   <>
    <div className=' w-[100%] '>
   
<div className='flex justify-between'>

<div className='w-[70%]'>
   <Container 
  
   
   header={
       <Header
         variant="h2"
         description="A summary of our valued donors and their contributions."
       >
        The Quran Foundation's Financial Overview
       </Header>
     }
   >

   
<div className='flex justify-between' >

   <div className='flex  p-3 flex-col gap-4'> 
     <span className='font-bold text-[1rem]'>Donors</span>
     <span className=' underline font-bold text-[#0972d3] text-[2rem]'>123</span>
   </div>
   
   <div className='flex p-3 flex-col gap-4'>
     <span className='font-bold text-[1rem]'>Beneficiaries</span>
     <span className=' underline  font-bold text-[#0972d3] text-[2rem]'>123</span>
   </div>
   <div className='flex p-3 flex-col gap-4'>
     <span className='font-bold text-[1rem] s'>Total Cash In Hand

</span>
     <span className=' underline font-bold text-[#0972d3] text-[2rem]'>{cashINHand} $</span>
   </div>
   
   <div className='flex p-3 flex-col gap-4'>
     <span className='font-bold text-[1rem]'>Account Balance

</span>
     <span className=' underline font-bold text-[#0972d3] text-[2rem]'>{accoundBalance} $ </span>
   </div>
      
 </div>  

   </Container>
   </div>

   <div className='w-[29%]'>
<Container 
fitHeight={true}
header={
  <Header
    variant="h2"
    description="ext evebut also the leap into electronic"

  >
   Live Programs and Events
  </Header>
}
>
<div className='flex p-3 flex-col gap-4'>
     <span className='font-bold text-[1rem]'>Total Revenue

</span>
     <span className=' underline font-bold text-[#0972d3] text-[2rem]'>{accoundBalance} $ </span>
   </div>
<div className='flex flex-col'>
 


</div>

</Container>
   </div>

   </div>
{/* <Container 
  header={
   <Header
     variant="h2"
     description="Quran Foundation Desc sooon"
   >
    The Quran Foundation Stats
   </Header>}
// > */}

{/* </Container> */}
 
</div>










{/* secon section starts */}

<div className='h-[420px] flex w-full flex-wrap justify-between mt-[1rem]'>

<div className='w-[60%] h-full'>
<Container fitHeight
header={
  <Header>
    Raised By Month
  </Header>
}
>
<BeneficiariesChart/>
</Container>
</div>

<div className='w-[38%] h-full'>
<Container fitHeight
header={
  <Header>
    Raised By Type
  </Header>
}
>
<RaisedTypesCharts/>
</Container>
</div>

</div>


{/* secon section Endz */}



<div className='flex  w-[100%] justify-between mt-[1rem]'>
  <div className='w-[32%]'>
  <Container 
  header={
    <Header>
      Donors By Type 
    </Header>
  }
  >
<DonorsCharts/>
  </Container>
  </div>


  <div className='w-[32%]'>
  <Container
    header={
      <Header>
         Beneficiaries by Type 
      </Header>
    }
  >
<BeneficiariesPieChart/>
  </Container>
  </div>

  <div className='w-[32%]'>
  <Container
    header={
      <Header>
         Volunteer by Type 
      </Header>
    }
  >
<Volunteer/>
  </Container>
  </div>

</div>


{/* last sec */}

<div className='flex justify-between mt-[1rem]'>

<div className='w-[49%]'>
  <Container>

<Table  
variant='borderless'
      columnDefinitions={[
        {
          id: "variable",
          header: "Variable nsame",
          cell: e => e.name,
          width: 170,
          minWidth: 165,
          sortingField: "name",
          isRowHeader: true
        
        },
        {
          id: "type",
          header: "Type",
          cell: e => e.type,
          width: 110,
          minWidth: 110,
          sortingField: "type"
        },
        {
          id: "size",
          header: "Size",
          cell: e => e.size,
          width: 110,
          minWidth: 90
        },
      ]}
      enableKeyboardNavigation
      items={[
        {
          name: "Item 1",
          alt: "First",
          type: "1A",
          size: "Small"
        },
        {
          name: "Item 2",
          alt: "Second",
          type: "1B",
          size: "Large"
        },
        {
          name: "Item 3",
          alt: "Third",
          type: "1A",
          size: "Large"
        },
        {
          name: "Item 4",
          alt: "Fourth",
          type: "2A",
          size: "Small"
        },
        {
          name: "Item 5",
          alt: "-",
          type: "2A",
          size: "Large"
        },
        {
          name: "Item 6",
          alt: "Sixth",
          type: "1A",
          size: "Small"
        }
      ]}
      loadingText="Loading resources"
      resizableColumns
      selectedItems={[{ name: "Item 2" }]}
    
      filter={
        <TextFilter
          filteringPlaceholder="Find resources"
          filteringText=""
        />
      }
      header={
        <Header>Table with resizable columns</Header>
      }
      pagination={
        <Pagination currentPageIndex={1} pagesCount={1} />
      }
    />
  </Container>
 
</div>

<div className='w-[49%]'>
<Container fitHeight={true}>
<Table
variant='borderless'
      columnDefinitions={[
        {
          id: "variable",
          header: "Variable name",
          cell: item => (
            <Link href="#">{item.name || "-"}</Link>
          ),
          sortingField: "name",
          isRowHeader: true
        },
        {
          id: "alt",
          header: "Text value",
          cell: item => item.alt || "-",
          sortingField: "alt"
        },
        {
          id: "description",
          header: "Description",
          cell: item => item.description || "-"
        }
      ]}
      enableKeyboardNavigation
      items={[
        {
          name: "Item 1",
          alt: "First",
          description: "This is the first item",
          type: "1A",
          size: "Small"
        },
        {
          name: "Item 2",
          alt: "Second",
          description: "This is the second item",
          type: "1B",
          size: "Large"
        },
        {
          name: "Item 3",
          alt: "Third",
          description: "-",
          type: "1A",
          size: "Large"
        },
        {
          name: "Item 4",
          alt: "Fourth",
          description: "This is the fourth item",
          type: "2A",
          size: "Small"
        },
        {
          name: "Item 5",
          alt: "-",
          description:
            "This is the fifth item with a longer description",
          type: "2A",
          size: "Large"
        },
        {
          name: "Item 6",
          alt: "Sixth",
          description: "This is the sixth item",
          type: "1A",
          size: "Small"
        }
      ]}
      loadingText="Loading resources"
      sortingDisabled
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      header={<Header> Simple table </Header>}
    />
</Container>
</div>

</div>
   </>
  )
}

export default page