import AddTask from "@/components/AddTask";
import CheckDate from "@/components/CheckDate";
import ReadTasks from "@/components/ReadTasks";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col w-[500px] p-6 rounded-md drop-shadow-md bg-neutral shadow-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-4xl font-bold">Todo</h1>
          <CheckDate />
        </div>
        <div className="flex flex-col gap-6 py-4 border-y border-base-100">
          <AddTask />
          <ReadTasks />
        </div>
      </div>
    </div>
  )
}
