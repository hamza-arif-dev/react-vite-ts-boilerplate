import { match } from "ts-pattern";

import { Example, useGetExamples } from "./api";

export type ExamplesOverviewProps = {
  id: string;
};

export const ExamplesOverview = (props: ExamplesOverviewProps) => {
  const { id } = props;

  const { examples, isLoading, invalidateExampleQueries } = useGetExamples({ id });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {match(examples)
        .when(
          () => isLoading,
          () => <div>Loading...</div>
        )
        .when(
          (exs) => exs === undefined || exs.length === 0,
          () => <div>No examples found</div>
        )
        .when(
          (exs) => !!exs?.length,
          (exs: Example[]) =>
            exs.map((ex) => (
              <div
                key={ex.id}
                onClick={invalidateExampleQueries}
                style={{
                  border: "0.025rem solid #928272",
                  cursor: "pointer",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                }}
              >
                {`Exmaple: ${ex.id}. Click to invalidate queries`}
              </div>
            ))
        )
        .otherwise((exs) => (
          <div>{JSON.stringify(exs)}</div>
        ))}
    </div>
  );
};
