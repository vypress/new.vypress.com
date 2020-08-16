import {Helmet} from 'react-helmet';
import React from 'react';
import {byLang} from '../../utils.js'
import res from '../../resources';
import screenshots from './data.js';

export default props =><>
<Helmet>
	<title>Auvis Screenshots - customizable interface, disabled Options and Close</title>
	<link rel="stylesheet" href="/css/thumbpage.css" />
</Helmet>

<h2>Vypress Auvis Screenshots</h2>
<ul id='ThumbsList'>
{screenshots.map(s=><li>
			<a href={'/images/one_way_messenger/screenshots/'+s.image} target='_blank'>
				<img src={'/images/one_way_messenger/screenshots/'+s.thumbnail} alt={byLang(s.title)} />
				<br />{byLang(s.title)}
				<em>
				{res.ClickToEnlarge}
				</em>
			</a>
		</li>)}
</ul>
</>
