// import MyCounterApp from "@/projects/CounterLogic";
// import MyAccordion2 from "@/projects/multiOpenAccordionLogic";
// import MyCounterApp2 from "@/projects/MyCounterApp2";
// import Counter from "@/projects/test";
import Link from "next/link";
export default function Home(){
  return (
    <>
      <h1>Mini Projects</h1>
      <div>
        <ol>
          <li>
            <Link href={"/mini-projects/counter"}>Counter Project</Link>
          </li>
          <li>
            <Link href={"/mini-projects/background-color-changer"}>
              Background Color Changing button
            </Link>
          </li>
          <li>
            <Link href={"/mini-projects/accordion"}>My Accordion Project</Link>
          </li>
          <li>
            <Link href={"/mini-projects/bg-color-changer"}>
              Background color changer Project
            </Link>
          </li>
          <li>
            <Link href={"/mini-projects/todo-app"}>My Todo App</Link>
          </li>
          <li>
            <Link href={"/mini-projects/dropdown"}>Simple DropDown App</Link>
          </li>
        </ol>
      </div>
    </>
  );
};