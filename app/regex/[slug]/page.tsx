import { FullCard } from "@/components/FullCard";

import patternsCollection from "../../../assets/patterns.json";
import type {Metadata} from "next";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const arr = patternsCollection.filter((obj) =>
    obj.id.toLocaleLowerCase().includes(params.slug.toLocaleLowerCase().trim() + '123')
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
