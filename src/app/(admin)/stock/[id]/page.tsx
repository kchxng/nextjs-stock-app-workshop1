import React from "react";

type Props = {
  params: { id: string };
};

export default function EditStockPage({ params }: Readonly<Props>) {
  return <div>Edit Product Id: {params.id}</div>;
}
