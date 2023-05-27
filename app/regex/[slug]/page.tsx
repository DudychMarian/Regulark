import { FullCard } from "@/components/FullCard";

import patternsCollection from "../../../assets/patterns.json";

export default function Regex({ params }: { params: { slug: string } }) {
  const arr = patternsCollection.filter((obj) =>
    obj.id.toLocaleLowerCase() === (params.slug.toLocaleLowerCase().trim())
  );

  return (
    <div className="wrapper">
      {arr && arr.length > 0 ? (
        arr.map((obj: any) => (
          <FullCard
            id={obj.id}
            key={obj.title}
            title={obj.title}
            description={obj.description}
            tags={obj.tags}
            fullDescription={obj.fullDescription}
            placeholder={obj.placeholder}
            pattern={obj.pattern}
          />
        ))
      ) : (
        <h2>Regex not found!</h2>
      )}
    </div>
  );
}
