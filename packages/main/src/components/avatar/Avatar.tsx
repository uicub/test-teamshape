import React from 'react';
import { Avatar, Badge } from 'antd';
import classnames from 'classnames';
import styles from './Avatar.module.css';
import { ReactComponent as Anonymous } from '../../assets/anonymous.svg';
import { ReactComponent as Team } from '../../assets/team.svg';
import { User } from '../../types/Team';
import { Author } from '../../types/Notes';
import { getInitials, getUserColor } from '../../utils/HelperFunctions';
import "antd/lib/avatar/style/index.css";
import "antd/lib/badge/style/index.css";

type PropsType = {
  user?: User | Author;
  badge?: boolean;
  badgeStatus?: 'success' | 'error' | undefined;
  size?: 'large' | 'small' | 'default' | number;
  anonymous?: boolean;
  team?: boolean;
};

interface Data {
  icon?: React.ReactElement;
}

const UserAvatar: React.FC<PropsType> = ({
  user,
  badge,
  badgeStatus,
  size = 'default',
  anonymous = false,
  team = false,
}) => {
  const extraProps: Data = {};
  if (anonymous || team) {
    let iconSize = 0;
    switch (size) {
      case 'large':
        iconSize = 55;
        break;
      case 'small':
        iconSize = 40;
        break;
      case 'default':
        iconSize = 45;
        break;
      default:
        iconSize = size;
        break;
    }
    extraProps.icon = anonymous ? (
      <Anonymous height={iconSize} />
    ) : (
      <Team height={iconSize} />
    );
  }
  return (
    <Badge dot={badge} status={badgeStatus} offset={[-8, 50]}>
      <div className={styles.avatarContainer}>
        <Avatar
          size={size}
          className={classnames(
            styles[`avatar${getUserColor(user?.uid || '')}`],
            { [styles.anonymous]: anonymous }
          )}
          {...extraProps}
        >
          {getInitials(user?.first_name || '', user?.last_name || '')}
        </Avatar>
      </div>
    </Badge>
  );
};

export default UserAvatar;
