import React from 'react';

export default props => {
    const h1Style = props.HeaderImg ? {backgroundImage: 'url(' + props.HeaderImg + ')'} : null;
    return <div>
                <div className="topShapka">
                    <div>
                        <div>
                        <img id="imgTop" alt={props.TopAlt} src={props.TopImg}/>
                        </div>
                    </div>
                </div>
                <div className="bodyShapka">
                    <img id="imgLogo" alt={props.LogoAlt} src={props.LogoImg} />
                    <h1 id="h1Title" style={h1Style}>{props.children}</h1>
                </div>
            </div>
};