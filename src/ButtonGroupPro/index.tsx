import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Menu, Badge, ButtonProps } from 'antd';
import { ButtonGroupProps, ButtonType } from 'antd/lib/button';
import { DownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import './index.css';
import { MenuInfo } from 'rc-menu/lib/interface';

const ButtonGroup = Button.Group;

export interface ButtonGroupProProps {
  button: Array<any>;
  className?: string;
}
export interface MenusProps extends Omit<MenuInfo, 'item'> {
  /** 禁用 */
  disabled?: boolean;
  label?: string | React.ReactNode;
  item: any;
  [k: string]: any;
}
export interface MenusOptionProps
  extends Omit<ButtonProps, 'type'>,
    ButtonGroupProps {
  label?: string | React.ReactNode;
  option?: Array<MenusOptionProps>;
  menu?: Array<MenusProps>;
  key?: number;
  ButtonandDropdown?: string | number;
  type?: ButtonType;
  render?: (...arg: any) => React.ReactNode;
  badge?: number | string;
}

const ButtonGroupPro = (props: ButtonGroupProProps) => {
  const { button, className } = props;
  const [menuDropdownLabel, setmenuDropdownLabel] = useState<{
    label: string | React.ReactNode;
    key?: number | undefined;
  }>({ label: '', key: undefined });
  const [ButtonandDropdown, setButtonandDropdown] = useState(false);

  useEffect(() => {
    button &&
      button.length > 0 &&
      button.map(item => {
        if (item.ButtonandDropdown) {
          setButtonandDropdown(true);
        }
      });
  }, []);

  const handleMenuClick = (
    menus: any,
    idx: number | undefined,
    e: MenusProps,
  ) => {
    menus.forEach((menu: any, index: number | undefined) => {
      if (index === Number(e?.key) && menu.onClick) {
        setmenuDropdownLabel({ label: menu.label, key: idx });
        menu.onClick();
      }
    });
  };

  const renderMenu = (
    menus: Array<MenusProps> | undefined,
    idx: number | undefined,
  ) => {
    return (
      <Menu onClick={(e: MenuInfo) => handleMenuClick(menus, idx, e)}>
        {menus &&
          menus.length > 0 &&
          menus.map((items: MenusProps, keys: number) => {
            return (
              <Menu.Item key={keys} disabled={items.disabled}>
                {items.label}
              </Menu.Item>
            );
          })}
      </Menu>
    );
  };

  return (
    <div className={classNames('antdp-ButtonGroup', className)}>
      {button &&
        button.length > 0 &&
        button.map((item: MenusOptionProps, idx) => {
          const props = {
            key: idx,
            size: 'middle',
            type: item.type || 'default',
            onClick: item.onClick,
            disabled: item.disabled,
            ...item,
          } as ButtonProps;
          const buttondom = <Button {...props}>{item.label}</Button>;
          const badgeaParams =
            item.badge && item.badge === 'dot'
              ? { dot: true }
              : { count: item.badge };
          // Menu多选菜单
          if (item.menu && item.menu.length > 0) {
            const DropdownButtonDom = (
              <Button
                size="middle"
                type={props.type || 'default'}
                style={{
                  margin: ButtonandDropdown ? '0 0 0 -3px' : '12px 0 12px 12px',
                }}
              >
                {menuDropdownLabel.key === idx
                  ? menuDropdownLabel.label
                  : item.label}{' '}
                <DownOutlined />
              </Button>
            );
            return (
              <Dropdown overlay={() => renderMenu(item.menu, idx)} key={idx}>
                {DropdownButtonDom}
              </Dropdown>
            );
          }
          // 自定义render
          if (item.render) {
            return <span key={idx}>{item.render(item.label)}</span>;
          }
          return item.badge ? (
            <span key={idx}>
              <Badge {...badgeaParams} style={{ marginTop: '15px' }}>
                {buttondom}
              </Badge>
            </span>
          ) : (
            <Button {...props}>{item.label}</Button>
          );
        })}
    </div>
  );
};
export default ButtonGroupPro;
