interface CourseInfo {
  totalExercises: number;
}

const Total = (props: CourseInfo) => {
  return <p>Number of exercises {props.totalExercises}</p>;
};

export default Total;
