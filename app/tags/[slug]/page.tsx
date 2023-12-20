import { Card } from "../../../components/Card";

import patternsCollection from "../../../assets/patterns.json";
import type {Metadata} from "next";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const arr = patternsCollection.filter((obj) =>
    obj.tags.toLocaleLowerCase().includes(params.slug.toLocaleLowerCase().trim())
  );

  return {
    title: `${(params.slug.toLowerCase().charAt(0).toUpperCase() + params.slug.toLowerCase().slice(1).replace(/-/g, ' '))} | Regulark - Regular Expression Patterns`,
    description: `${arr.map((obj) => obj.fullDescription.length > 147 ? obj.fullDescription.substring(0, 147) + "..." : obj.fullDescription)[0]}`,
    keywords: `${arr.map((item) => item.tags)}, regular expressions, regex patterns, email validation, URL parsing, phone number validation, open-source project, programming tools, developer resources`,
    openGraph: {
      title: `${(params.slug.toLowerCase().charAt(0).toUpperCase() + params.slug.toLowerCase().slice(1).replace(/-/g, ' '))} | Regulark - Regular Expression Patterns`,
      description: `${arr.map((obj) => obj.fullDescription.length > 147 ? obj.fullDescription.substring(0, 147) + "..." : obj.fullDescription)[0]}`,
      images: [
        {
          url: "/image/cover.jpeg",
          width: 1280,
          height: 670,
          alt: "Regulark | Cover image",
        },
      ],
    },
    twitter: {
      title: `${(params.slug.toLowerCase().charAt(0).toUpperCase() + params.slug.toLowerCase().slice(1).replace(/-/g, ' '))} | Regulark - Regular Expression Patterns`,
      description: `${arr.map((obj) => obj.fullDescription.length > 147 ? obj.fullDescription.substring(0, 147) + "..." : obj.fullDescription)[0]}`,
    },
  };
};

export default function Tags({ params }: { params: { slug: string }}) {
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
