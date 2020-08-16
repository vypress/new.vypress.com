import React from 'react';
import res from '../resources';

export default props => {

    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    const releaseDate = new Intl.DateTimeFormat('en-US', options).format(new Date(props.Product.releaseDate))

    const platforms = props.Product.programOsSupport.map( p => 
        <dd>{p}</dd>
    );

    const netProtocols = props.Product.networkProtocols.map( p => {
        if(Array.isArray(p)) return <dd>{p[0]}</dd>
        return <dd>{p}</dd>;
    });

    return <div id="quickInfo">
	<div className="topShapka">
		<div>
			<div>
				<h3></h3>
			</div>
		</div>
	</div>
	<dl>

	<dt id="TitleVer">{res.QuickInfo_CurVer}</dt>
		<dd className="ver"><a id="downloadLink" href="/download/">{props.Product.ver}</a></dd>
		<dd className="date" id="ReleaseDate">{releaseDate}</dd>
	<dt id="TitlePlatforms">{res.QuickInfo_ClientPlatform}</dt>
		{platforms}
	<dt id="TitleNetProtocols">{res.QuickInfo_Protocols}</dt>
        {netProtocols}
	</dl>
<div className="pageFooter">
<div><div></div></div>
</div>
</div>
};