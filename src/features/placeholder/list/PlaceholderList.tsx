import { useGetPlaceholderTodos } from "../api";
import { match, P } from "ts-pattern";

export const PlaceholderList = () => {
  const data = useGetPlaceholderTodos();

  return (
    <>
      {match(data)
        .with({ isLoading: P.when((v) => v) }, () => "Loading...")
        .with({ todos: P.when(v => !!v?.length) }, ({ todos }) => todos!.map(it => <div
          key={it.id}>{`UserId: ${it.userId}, Title: ${it.title}`}</div>)).otherwise(() => <div
          style={{ color: "red" }}>Something went wrong</div>)}
    </>
  );
};
