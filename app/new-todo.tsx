import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default async function NewTodo() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = Object.fromEntries(new FormData(e.currentTarget));

    await fetch(
      "https://lordson-matel-eddi-refactored-spoon-6pp7qv4pr64f4rw6-3000.preview.app.github.dev/api/todo",
      {
        method: "POST",
        body: JSON.stringify({ title }),
      }
    );
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
    </form>
  );
}
