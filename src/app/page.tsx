import Image from "next/image";
import{ Modal} from "@/todo-components/Modal"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">

      {/* Add task section  */}
      <section>
        <Modal />
      </section>


      {/* create table section  */}
      <section>

      </section>
    </main>
  );
}
