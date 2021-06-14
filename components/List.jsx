import { Children } from "react";
import classNames from "classnames";

import * as style from "./List.module.scss";

/**
 * List, a collection of related items.
 *
 * @param {Object} props
 * @param {string} [props.as="ul"] The element of the List: "ol" or "ul".
 * @param {React.ReactNode} [props.children] The content for the List.
 * @returns {React.Element} The List element.
 */
export const List = (props) => {
  const { as: Component = "ul", children, className, ...rest } = props;

  return (
    <Component className={classNames(style.list, className)} {...rest}>
      {Children.map(children, (child) => (
        <li className={style.item}>{child}</li>
      ))}
    </Component>
  );
};
