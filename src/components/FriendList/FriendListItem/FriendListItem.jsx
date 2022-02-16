import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ userUvatar, username, userStatus }) => {
  return (
    <ListItem>
      <Status status={userStatus}></Status>
      <Avatar status={userStatus} src={userUvatar} alt={username} width="48" />
      <Name status={userStatus}>{username}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  userUvatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userStatus: PropTypes.bool.isRequired,
};

export default FriendListItem;