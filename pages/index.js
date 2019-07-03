import React from "react";
import { PageTemplate } from "../components/Layout";

export default class Homepage extends React.Component {
    content = () => {
        return (
            <>
                <p>
                    Do dolore occaecat laborum pariatur est veniam irure
                    deserunt. Aute deserunt nostrud laboris incididunt irure
                    officia cillum quis cupidatat non Lorem cupidatat
                    consectetur irure. Nostrud sit Lorem ex eu reprehenderit.
                    Deserunt ullamco occaecat aliquip et cillum est aliqua ut
                    velit eiusmod eu labore sit labore. Ex magna non culpa
                    proident adipisicing id qui nisi non pariatur eu mollit. Ad
                    ea non tempor ut nulla culpa eu in duis aliquip.
                </p>
                <p>
                    Eu culpa pariatur consequat dolore laborum commodo minim.
                    Cillum fugiat nostrud irure nostrud adipisicing eiusmod aute
                    velit ullamco nostrud voluptate magna occaecat amet.
                    Consectetur qui mollit consectetur duis irure aliqua minim
                    nostrud consequat incididunt ad. Exercitation nulla occaecat
                    duis nisi nulla velit deserunt elit. Tempor aliqua eiusmod
                    pariatur incididunt exercitation magna. Laborum officia
                    tempor id in excepteur officia reprehenderit.
                </p>
                <p>
                    Enim aliqua nisi velit ad commodo minim occaecat ex minim.
                    Nostrud eu eiusmod deserunt ea deserunt quis eiusmod. Esse
                    aliqua officia sit tempor reprehenderit Lorem irure in sunt
                    amet consectetur ad esse. Culpa eu amet ut id cillum Lorem.
                    Adipisicing ipsum voluptate proident labore quis labore anim
                    est incididunt duis Lorem magna cillum incididunt. Ut
                    eiusmod consequat culpa ea.
                </p>
                <p>
                    Ad consequat officia cupidatat duis labore commodo consequat
                    dolore exercitation irure. Fugiat commodo minim in dolor.
                    Officia laborum reprehenderit ex labore laborum id officia
                    sunt proident laborum laboris cillum. Officia nulla non
                    ullamco fugiat exercitation anim et ut eiusmod mollit qui
                    qui duis dolor.
                </p>
                <p>
                    Ipsum reprehenderit sint adipisicing magna ipsum non anim
                    officia ullamco eiusmod. Duis fugiat velit eu velit tempor
                    duis nulla nulla labore. Et officia anim ex aliquip nostrud
                    esse pariatur veniam ipsum minim commodo commodo amet Lorem.
                    Deserunt aliqua tempor eiusmod elit deserunt cupidatat sint
                    aliqua. Est fugiat qui nulla deserunt laborum labore labore
                    pariatur. Officia veniam consectetur ullamco minim enim quis
                    et id velit do consequat.
                </p>
                <p>
                    Dolor aliqua cillum cupidatat elit. Commodo reprehenderit
                    dolor ullamco elit est aliqua aliqua eu velit. Est eiusmod
                    est ullamco fugiat commodo occaecat in mollit labore commodo
                    dolor dolore velit laboris. Aute pariatur qui sint excepteur
                    reprehenderit nisi.
                </p>
            </>
        );
    };
    render = () => (
        <PageTemplate title="Homepage">{this.content()}</PageTemplate>
    );
}
