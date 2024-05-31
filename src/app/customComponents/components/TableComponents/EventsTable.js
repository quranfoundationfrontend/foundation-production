"use client"
import React, { useState } from 'react';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

const PettyCashTable = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <Table
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? "item" : "items"
          } selected`,
        itemSelectionLabel: ({ selectedItems }, item) =>
          item.description
      }}
      columnDefinitions={[
        {
          id: "date",
          header: "Date",
          cell: e => e.date,
          sortingField: "date",
          isRowHeader: true
        },
        {
          id: "amount",
          header: "Amount",
          cell: e => `$${e.amount.toFixed(2)}`,
          sortingField: "amount"
        },
        { 
          id: "description", 
          header: "Description", 
          cell: e => e.description 
        },
        { 
          id: "category", 
          header: "Category", 
          cell: e => e.category 
        }
      ]}
      columnDisplay={[
        { id: "date", visible: true },
        { id: "amount", visible: true },
        { id: "description", visible: true },
        { id: "category", visible: true }
      ]}
      enableKeyboardNavigation
      items={[
        {
          date: "2023-05-01",
          amount: 50.00,
          description: "Office supplies",
          category: "Office"
        },
        {
          date: "2023-05-02",
          amount: 30.75,
          description: "Team lunch",
          category: "Food"
        },
        {
          date: "2023-05-03",
          amount: 12.00,
          description: "Taxi fare",
          category: "Travel"
        },
        {
          date: "2023-05-04",
          amount: 25.00,
          description: "Client meeting refreshments",
          category: "Hospitality"
        },
        {
          date: "2023-05-05",
          amount: 60.00,
          description: "Office snacks",
          category: "Food"
        },
        {
          date: "2023-05-06",
          amount: 40.50,
          description: "Printer ink",
          category: "Office"
        }
      ]}
      loadingText="Loading petty cash records"
      selectionType="multi"
      trackBy="date"
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <b>No records found</b>
            <Button>Add Expenses</Button>
          </SpaceBetween>
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder="Find records"
          filteringText=""
        />
      }
      header={
        <Header
          counter={
            selectedItems.length
              ? "(" + selectedItems.length + "/6)"
              : "(6)"
          }
          actions={
            <SpaceBetween
              direction="horizontal"
              size="xs"
            >
              <ButtonDropdown
                items={[
                  {
                    text: "Export",
                    id: "export",
                    disabled: false
                  },
                  {
                    text: "Delete",
                    id: "delete",
                    disabled: false
                  }
                ]}
              >
                Actions
              </ButtonDropdown>
              <Button variant="primary">
                Add record
              </Button>
            </SpaceBetween>
          }
        >
          Petty Cash Records
        </Header>
      }
      pagination={
        <Pagination currentPageIndex={1} pagesCount={1} />
      }
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 10,
            contentDisplay: [
              { id: "date", visible: true },
              { id: "amount", visible: true },
              { id: "description", visible: true },
              { id: "category", visible: true }
            ]
          }}
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 10, label: "10 records" },
              { value: 20, label: "20 records" }
            ]
          }}
          wrapLinesPreference={{}}
          stripedRowsPreference={{}}
          contentDensityPreference={{}}
          contentDisplayPreference={{
            options: [
              {
                id: "date",
                label: "Date",
                alwaysVisible: true
              },
              { id: "amount", label: "Amount" },
              { id: "description", label: "Description" },
              { id: "category", label: "Category" }
            ]
          }}
          stickyColumnsPreference={{
            firstColumns: {
              title: "Stick first column(s)",
              description:
                "Keep the first column(s) visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "First column", value: 1 },
                { label: "First two columns", value: 2 }
              ]
            },
            lastColumns: {
              title: "Stick last column",
              description:
                "Keep the last column visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "Last column", value: 1 }
              ]
            }
          }}
        />
      }
    />
  );
};

export default PettyCashTable;
