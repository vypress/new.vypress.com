import {Helmet} from 'react-helmet';
import React from 'react';
import {byLang} from '../../utils.js'
import res from '../../resources';
import screenshots from './data.js';

export default props =><>
<Helmet>
	<title>Vypress Chat Screenshots</title>
	<link rel="stylesheet" href="/css/thumbpage.css" />
</Helmet>

<h2>Vypress Chat Screenshots</h2>
<ul id='ThumbsList'>
{screenshots.map(s=><li>
			<a href={'/images/lan_chat/screenshots/'+s.image} target='_blank'>
				<img src={'/images/lan_chat/screenshots/'+s.thumbnail} alt={byLang(s.title)} />
				<br />{byLang(s.title)}
				<em>
				{res.ClickToEnlarge}
				</em>
			</a>
		</li>)}
</ul>
</>