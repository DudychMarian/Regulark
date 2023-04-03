import { Card } from "../components/Card";


export const Home = ({result}: any) => {
  return (
    <>
      {result.map((obj: any) => (
        <Card
          key={obj.title}
          title={obj.title}
          description={obj.description}
          tags={obj.tags}
          placeholder={obj.placeholder}
          pattern={obj.pattern}
        />
      ))}
    </>
  );
};
