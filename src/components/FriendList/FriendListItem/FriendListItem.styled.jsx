import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: transform 250ms linear;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  :hover {
    transform: scale(1.1);
  }
`;

const Status = styled.span`
width: 16px;
height: 16px;
margin-right: 15px;
background-color: ${({ status }) => (status ? 'green' : 'red')};
border-radius: 50%;
`;

const Avatar = styled.img`
margin-right: 30px;
border: 1px solid
${({ status }) => (status ? 'green' : 'red')};
border-radius: 12px;
padding: 2px;
width: 60px;
box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
`;

const Name = styled.p`
margin: 0;
font-size: 24px;
color: ${({ status }) => (status ? 'green' : 'red')};
`;

export { ListItem, Status, Avatar, Name };