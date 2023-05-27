import { Card } from "../../../components/Card";

import patternsCollection from "../../../assets/patterns.json";

export default function Tags({ params }: { params: { slug: string } }) {
  const arr = patternsCollection.filter((obj) =>
    obj.tags.toLocaleLowerCase().includes(params.slug.toLocaleLowerCase().trim())
  );

  return (
    <div className="wrapper">
      {arr.map((obj: any) => (
        <Card
          id={obj.id}
          key={obj.title}
          title={obj.title}
          description={obj.description}
          tags={obj.tags}
          placeholder={obj.placeholder}
          pattern={obj.pattern}
        />
      ))}
    </div>
  );
}
