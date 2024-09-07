import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function EditStockPage({ params }: Props) {
  return <div>EditStockPage {params.id}</div>;
}
