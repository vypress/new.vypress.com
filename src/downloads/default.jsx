import React from 'react';
import products from '../products.js';
import { useLocation } from "react-router-dom";

function handleSubmit()
{
    /*
    1) Get values from array of form elements by index

    handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    }
    2) Using name attribute in html

    handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.username.value) // from elements property
    console.log(event.target.username.value)          // or directly
    }

    <input type="text" name="username"/>
    3) Using refs

    handleSubmit = (event) => {
    console.log(this.inputNode.value)
    }

    <input type="text" name="username" ref={node => (this.inputNode = node)}/>
    */
}

export default _=>{

    let defProduct = new URLSearchParams(useLocation().search).get('prod');

    if(!products.some(p=>p.id==defProduct)) {
        defProduct = "messenger";
    }

    return <>

<p>Want to try our products before you buy? You&rsquo;ve come to the right place. This 
page allows you to download trial software, as well as free updated versions! 
By using our products, we know you&rsquo;ll be more productive, and your network will 
be more useful and unitive than ever.</p>
<p>
Licensed users can download and install the trial edition over their existing 
licensed installation to update.
</p>

<form action="/downloads/go" onSubmit={handleSubmit}>
<fieldset>
<legend><img src="/images/pix/green-1.gif" width="30" height="30" alt="1" />First, choose what you would like to download:</legend>
<ul>
{products.map(p=><li key={p.id}>
<input id={p.id} checked={defProduct==p.id} type="radio" name="prod" value={p.id} /><label for={p.id}><img src={p.icon} alt="" />{p.name} <span>(Ver: {p.ver}, Size: {p.fileSize})</span></label>
</li>
)}
<li key="other"><input id="other" type="radio" name="prod" value="other"/><label for="other"><img src="/images/download/programs.gif" alt="" width="16" height="16" />Supplemental files and utilities</label></li>
</ul>
</fieldset>


<fieldset>
<legend><img src="/images/pix/green-2.gif" width="30" height="30" alt="2" />Second, accept the license agreement:</legend>

<iframe src="/license.html" frameborder="0"></iframe>

</fieldset>

<button id="AcceptButton" type="submit"><span>Accept &amp; Download</span></button>
<button id="CancelButton" type="button"><span>Do not accept</span></button>

<input type="hidden" name="accept" value="yes" />
</form>
{/* pageContent */}
</>
}