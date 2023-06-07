/*export default async function Home() {
  const response = await fetch('https://lordson-matel-eddi-refactored-spoon-6pp7qv4pr64f4rw6-3000.preview.app.github.dev//api/todo', {
    cache: 'no-cache',
  });

  const todos = await response.json();

  return <pre>{JSON.stringify(todos, null, 2)}</pre>
}*/

import { createClient } from "@supabase/supabase-js";
import NewTodo from "./new-todo";

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_URL!
  );

  const revalidate = 0;

  const todos = await supabase.from("todos").select();

  return (
    <>
      <NewTodo />
      <pre>{JSON.stringify(todos, null, 2)}</pre>;
    </>
  );
}
