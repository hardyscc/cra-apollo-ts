

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStocksQuery
// ====================================================

export interface GetStocksQuery_stocks {
  __typename: "Stock";
  code: string;
  name: string;
  lotSize: number;
  status: Status;
}

export interface GetStocksQuery {
  stocks: GetStocksQuery_stocks[];
}

//==============================================================
// START Enums and Input Objects
// All enums and input objects are included in every output file
// for now, but this will be changed soon.
// TODO: Link to issue to fix this.
//==============================================================

export enum Status {
  Active = "Active",
  Deleted = "Deleted",
}

//==============================================================
// END Enums and Input Objects
//==============================================================