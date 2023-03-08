import React from "react";
import { useState } from "react";

import CustomersTable from "../components/customers/CustomersTable";
import CustomersToolbar from "../components/customers/CustomersToolbar";

export default function ClientsPage() {
  

  return (
    <>
      

      <CustomersToolbar></CustomersToolbar>

      <CustomersTable></CustomersTable>
    </>
  );
}
