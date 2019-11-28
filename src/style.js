import styled from "@emotion/styled";

const DeleteIcon = styled.i`
  font-size: 1.5em !important;
  color: rgb(235, 68, 68);

  :hover {
    font-size: 1.6em !important;
    color: red;
  }
`;

const TaskList = styled.li`
  color: ${props => (props.completed ? "#cdcdcd" : "black")};
  transition: color 0.4s;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
  border-radius : 5px!important;

  :hover {
    background: rgb(238, 238, 238);
  }
`;

export {
    DeleteIcon,
    TaskList
};
