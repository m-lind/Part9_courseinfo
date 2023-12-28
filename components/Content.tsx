import Part from "./Part";
import { CoursePart } from "../types";

interface CourseParts {
  courseParts: CoursePart[];
}

const Content = (props: CourseParts) => {
  return (
    <div>
      <Part courseParts={props.courseParts} />
    </div>
  );
};

export default Content;
