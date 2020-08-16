import React from 'react';

export default props => {
    const last = props.topics.pop();
    const filtered = props.topics.filter(t=>t.label);
    const SiteTree = filtered.map( t => {
        return <li><a href={t.link}>{t.label}</a></li>
    });
    return <ul>{SiteTree}<li>{last.label}</li></ul>
};