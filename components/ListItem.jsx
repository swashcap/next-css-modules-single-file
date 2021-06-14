import classNames from "classnames";

import * as style from "./ListItem.module.scss";

/**
 * List Item, the item for List.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children] The content for the List Item.
 * @param {React.ReactNode} [props.title] The title of the List Item.
 * @returns {React.Element} The List Item element.
 */
export const ListItem = (props) => {
  const { children, className, title, ...rest } = props;

  return (
    <div className={classNames(style.listItem, className)} {...rest}>
      <span className={style.title}>{title}</span>
      <span className={style.content}>{children}</span>
    </div>
  );
};
