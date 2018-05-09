/* tslint:disable */
//  This file was automatically generated and should not be edited.

export enum Status {
  Active = "Active",
  Deleted = "Deleted",
}


export interface GetStocksQuery {
  stocks:  Array< {
    __typename: "Stock",
    code: string,
    name: string,
    lotSize: number,
    status: Status,
  } >,
};
