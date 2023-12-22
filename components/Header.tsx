interface CourseInfo {
  courseName: string;
}

const Header = (props: CourseInfo) => {
  return <h1>{props.courseName}</h1>;
};

export default Header;
