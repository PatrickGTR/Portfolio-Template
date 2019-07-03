import React from "react";
import { PageTemplate } from "../components/Layout";

export default class AboutPage extends React.Component {
    content = () => {
        return (
            <>
                <p>
                    Ipsum do irure sit eu eiusmod eu elit. Aliquip ipsum esse ad
                    adipisicing in. Excepteur proident ad ut qui ipsum eiusmod
                    nostrud sit fugiat exercitation consequat amet sunt aliquip.
                </p>
                <p>
                    Ad nulla irure fugiat id voluptate incididunt. Do
                    consectetur ad proident mollit non consequat ad id mollit
                    ipsum. Eiusmod ipsum aute reprehenderit eu laboris laboris
                    culpa adipisicing. Occaecat et esse nulla fugiat pariatur ex
                    commodo laboris fugiat anim laboris nisi exercitation sunt.
                </p>
            </>
        );
    };
    render = () => <PageTemplate title="About">{this.content()}</PageTemplate>;
}
