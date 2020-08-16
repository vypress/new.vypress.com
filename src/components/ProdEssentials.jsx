import React from 'react';
import res from '../resources';

export default props => <ul className="prodEssentials">
<li><a className='prodDL' href={`/downloads/?prod=${props.Product}`}>{res.PR_Download}</a></li>
{ !props.Free && <li><a className='prodBuy' href={`/buy/?prod=${props.Product}`}>{res.PR_Buy}</a></li> }
</ul>