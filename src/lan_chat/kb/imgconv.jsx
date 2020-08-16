import React from 'react';

export default props => <>
    <h2>How to customize emoticons in the Vypress Chat</h2>

    <p>Since version 2.1.7 it is possible to replace existing or add new emoticons to the Vypress Chat.</p>
    <p>To customize emoticons you have to create in the home directory of Vypress Chat a well-formed XML document <b>"emoticons.xml"</b>.
The document has to have following structure:</p>
    <p className="xml_code"><code>&lt;?xml version=&quot;1.0&quot; ?&gt;<br />
&lt;emoticons xmlns:dt=&quot;urn:schemas-microsoft-com:datatypes&quot; display_count=&quot;N&quot; help=&quot;C:\\help\\chat.chm::/emoticons.html&quot;&gt;<br />
&lt;emoticon&gt;<br />
&lt;icons&gt;<br />
&lt;icon&gt;<br />
&lt;/icon&gt;<br />
&lt;/icons&gt;<br />
&lt;meaning&gt;<br />
&lt;/meaning&gt;<br />
&lt;menu_item&gt;<br />
&lt;/menu_item&gt;<br />
&lt;img dt:dt=&quot;bin.hex&quot; dt:dt=&quot;bin.base64&quot; src=&quot;file://&quot;&gt;<br />
&lt;/img&gt;<br />
&lt;/emoticon&gt;<br />
&lt;/emoticons&gt;</code></p>

    <p>The document may contain an unlimited number of nested <span className="highlighted">emoticon</span> and <span className="highlighted">icon</span> elements.</p>
    <h4>Attributes description:</h4>
    <ul>
        <li><span className="highlighted">display_count</span> - maximum emoticons count that can be simultaneously displayed in an edit control.</li>
        <li><span className="highlighted">help</span> - specifies the file path to either a compiled help (.chm) file, or a topic file within a specified help file. See HTML Help API documentation for detailed information.</li>
    </ul>
    <h4>Elements description:</h4>
    <ul>
        <li><span className="highlighted">icon</span> - short string that is replaced with a corresponding image.</li>
        <li><span className="highlighted">meaning</span> - the meaning of the emoticon.</li>
        <li><span className="highlighted">menu_item</span> - position starting from one of the image in the emoticons menu of the Vypress Chat.</li>
        <li><span className="highlighted">img</span> - the picture that replaces the text emoticon.</li>
    </ul>
    <p>Images can be placed to the XML file as a URL of an existing file (by using the <span className="highlighted">src</span> attribute) or as a text representation of binary data in <b>BASE64</b> or <b>HexString</b> encoding.</p>
    <p><b>ImageToText</b> utility (It requires dot NET 2.0 Framework installed) can be used for encoding any image files into a base 64 or a HexString representation.</p>
    <a href="http://www.vypress.com/ftp/ImageToTextExe.zip">Download ImageToText.exe</a><br />
    <a href="http://www.vypress.com/ftp/ImageToTextSrc.zip">Download the source code of the ImageToText utility.</a>
    <h3>Example:</h3>
    <p>Following file contains five emoticons: {1}, *1*, {2}, *2*, {3}, *3*, {4}, *4*, {5}, *6* for Vypress Chat.<br />
You can download and extract the archive to the home directory of Vypress Chat. After restarting the application you will have five extra emoticons.</p>
    <a href="http://www.vypress.com/ftp/emoticons.zip">Dowload Emoticons.zip</a>
</>