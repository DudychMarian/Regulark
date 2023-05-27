"use client";

import { useSearchContext } from "@/context/search";
import { Card } from "../components/Card";

import patternsCollection from "../assets/patterns.json";

export default function Home() {
  const [value, _] = useSearchContext();

  const result = value
    ? patternsCollection.filter((obj) => obj.title.toLocaleLowerCase().includes(value.toLocaleLowerCase().trim()))
    : patternsCollection;

  return (
    <div className="wrapper">
      {result.map((obj: any) => (
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
