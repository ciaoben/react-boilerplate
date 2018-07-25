import React, { Component } from "react";
import s from "./button.scss";

export default class Button extends Component {
    render() {
        const { children } = this.props;

        return <button className={s.btn}>{children}</button>;
    }
}
