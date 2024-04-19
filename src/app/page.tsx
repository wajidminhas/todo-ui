import Image from "next/image";
import{ Modal} from "@/todo-components/Modal"
import TodoTable from "@/todo-components/TodoTable";

export default function Home() {
  return (
    <main className="">

      {/* Add task section  */}
      <section>
        <Modal />
      </section>


      {/* create table section  */}
      <section className="mt-4">
      <TodoTable />
      </section>
    </main>
  );
}
