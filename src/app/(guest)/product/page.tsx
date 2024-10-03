"use client";

type Props = {
  searchParams: {
    id?: string;
    name?: string;
  };
};

export default function ProductPage({ searchParams }: Readonly<Props>) {
  return (
    <div>
      <h2>Product Query</h2>
      <br />
      <span>
        Id: {searchParams.id}, Name: {searchParams.name}
      </span>
    </div>
  );
}
