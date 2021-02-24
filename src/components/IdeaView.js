import React, { Component } from "react";

class IdeaView extends Component {
  state = {
    ideas: this.props.user.ideas
  };

  static getDerivedStateFromProps(props, state) {
    if (props.user.ideas !== state.ideas) {
      return {
        ideas: props.user.ideas
      };
    }
    return null;
  }

  // We need to pass in multiple arguments here. The first is the object of the specific idea that's being changed.
  // The event object is the special event listener object that has information about the value and name.
  handleChange = (idea, event) => {
    const newIdeas = [...this.state.ideas]; // We use the spread operator here to clone the array.

    // Map through this cloned state and transform the specific idea that has been updated.
    const ideas = newIdeas.map((savedIdea) => {
      if (savedIdea._id === idea._id) {
        // We're using bracket syntax instead of dot notation to transform a specific property.
        // More info on bracket syntax here:
        // https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d
        savedIdea[event.target.name] = event.target.value;
      }
      return savedIdea;
    });
    this.setState({ ideas: ideas });
  };

  render() {
    return (
      <div>
        <div style={{ marginLeft: "15%", marginRight: "15%" }}>
          {this.state.ideas.map((idea) => (
            <div
              key={idea._id}
              style={{
                display: "inline-block",
                width: "20%",
                border: "1px solid black",
                padding: "1em",
                margin: "2em",
                backgroundColor: "#fffbde"
              }}
            >
              <div
                style={{
                  alignItems: "top",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <input
                  onChange={(e) => this.handleChange(idea, e)}
                  value={idea.title}
                  type="text"
                  name="title"
                  placeholder="Idea Title"
                  style={{
                    textDecoration: "none",
                    width: "90%",
                    backgroundColor: "#fffbde"
                  }}
                />

                <button onClick={() => this.props.deleteIdea(idea._id)}>
                  X
                </button>
              </div>

              <div>
                <textarea
                  onChange={(e) => this.handleChange(idea, e)}
                  value={idea.description}
                  placeholder="Idea Description"
                  name="description"
                  style={{
                    width: "100%",
                    resize: "none",
                    backgroundColor: "#fffbde",
                    border: "none",
                    height: "10em"
                  }}
                ></textarea>
              </div>
              <br />
              <button onClick={(e) => this.props.updateIdea(idea, e)}>
                Save
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default IdeaView;
