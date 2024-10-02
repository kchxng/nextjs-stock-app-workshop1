import React from "react";

type Props = {
  params: {
    slug: string[];
  };
};

export default function UserSlugPage({ params }: Readonly<Props>) {
  return (
    <div>
      <h2>User</h2>
      <ul>
        {params.slug.map((v) => (
          <li key={v}>User Id: {v},</li>
        ))}
      </ul>
    </div>
  );
}
