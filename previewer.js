class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        // Initializing the state with a default markdown text
        this.state = {
            markdown: `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
        };
    }

    handleChange = (e) => {
        this.setState({
            markdown: e.target.value,
        });
    };

    render() {
        return (
            <div id="container">
                <div className="editorWrap">
                    <div className="toolbar">
                        <i className="fa fa-free-code-camp"></i>Editor<i className="fa fa-arrows-alt"></i>
                    </div>
                    <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}></textarea>
                </div>
                <div className="converter"></div>
                <div className="previewWrap">
                    <div className="toolbar">
                        <i className="fa fa-free-code-camp"></i>Previewer<i className="fa fa-arrows-alt"></i>
                    </div>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown, { breaks: true }) }}></div>
                </div>
            </div>
        );
    }
}

// This will render the MarkdownPreviewer component into the "app" div in your HTML
ReactDOM.render(<MarkdownPreviewer />, document.getElementById("app"));
