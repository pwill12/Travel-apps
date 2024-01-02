import '../styles/button.css'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

type buttonprops = {
  value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined
  class: string
}

export default function Button(props: buttonprops) {
    return <button className={props.class}>{props.value}</button>;
  }