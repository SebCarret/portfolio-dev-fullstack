export default function (menu = {}, action) {
  if (action.type === 'onDropdownLinkClick') {
    var menuCopy = {...menu};
    menuCopy.onMenuClick = action.menuClick;
    return menuCopy;
  } else {
    return menu;
  };
}
