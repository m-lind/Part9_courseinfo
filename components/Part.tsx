import { CoursePart } from "../types";

interface PartProps {
  courseParts: CoursePart[];
}

const Part = (props: PartProps) => {
  const courseParts = props.courseParts;
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const PartInfo = (part: CoursePart) => {
    switch (part.kind) {
      case "basic":
        return (
          <div>
            <i>{part.description}</i>
          </div>
        );
      case "group":
        return <div>project exercises {part.groupProjectCount}</div>;
      case "background":
        return (
          <div>
            <div>
              <i>{part.description}</i>
            </div>
            <div>{part.backgroundMaterial}</div>
          </div>
        );
      case "special":
        return <div>required skills: {part.requirements.join(", ")}</div>;
      default:
        return assertNever(part);
    }
  };

  return (
    <div>
      {courseParts.map(part => {
        return (
          <div key={part.name}>
            <div>
              <b>
                {part.name} {part.exerciseCount}
              </b>
              {PartInfo(part)}
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Part;
