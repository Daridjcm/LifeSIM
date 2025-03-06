import { Tabs, Tab } from "@heroui/react";
import React, { useState } from "react";
import {
  CalendarDateRangeIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const Index = React.memo(( ) => {
  // State Management

  return (
    <Tabs
      aria-label="Options"
      variant="solid"
      color="primary"
      size="lg"
      fullWidth
    >
      <Tab
        key="products"
        title={
          <div className="flex items-center space-x-2">
            <CalendarDateRangeIcon className="size-6" />
            <span>Schedule appointments</span>
          </div>
        }
      >

      </Tab>

      <Tab
        key="shoppinglist"
        title={
          <div className="flex items-center space-x-2">
            <ListBulletIcon className="size-6" />
            <span>Shopping List</span>
          </div>
        }
      >

      </Tab>

      <Tab
        key="atm"
        title={
          <div className="flex items-center space-x-2">
            <CreditCardIcon className="size-" />
            <span>Get Pills</span>
          </div>
        }
      >

      </Tab>
    </Tabs>
  );
})

export default Index;