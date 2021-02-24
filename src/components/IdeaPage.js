import React, { Component } from "react";
import IdeaView from "./IdeaView";

const backendUrl = "https://8ylx7.sse.codesandbox.io";

class IdeaPage extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    fetch(`${backendUrl}/api/users/${this.props.match.params.userId}`, {
      method: "get"
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ user: json.data });
      })
      .catch((err) => {
        console.log("error getting user", err);
      });
  };

  deleteIdea = (ideaId) => {
    fetch(
      `${backendUrl}/api/users/${this.props.match.params.userId}/ideas/${ideaId}`,
      {
        method: "delete"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ user: json.data });
      })
      .catch((err) => {
        console.log("error getting user", err);
      });
  };

  createIdea = () => {
    fetch(`${backendUrl}/api/users/${this.state.user._id}/ideas`, {
      method: "post"
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ user: json.data });
      })
      .catch((err) => {
        console.log("error creating idea", err);
      });
  };

  updateIdea = (idea, e) => {
    // PATCH is case sensetive
    fetch(`${backendUrl}/api/users/${this.state.user._id}/ideas/${idea._id}`, {
      method: "PATCH",
      body: JSON.stringify(idea),
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ user: json.data });
      })
      .catch((err) => {
        console.log("error getting user", err);
      });
  };

  render() {
    return (
      <div>
        <div style={{ margin: "auto", padding: "15px" }}>
          {this.state.user && <h1>{this.state.user.userName}'s Idea Board</h1>}
          <button
            onClick={this.createIdea}
            style={{ fontSize: "20px", margin: "5px" }}
          >
            New Idea
          </button>
        </div>
        {this.state.user && (
          <IdeaView
            user={this.state.user}
            deleteIdea={this.deleteIdea}
            updateIdea={this.updateIdea}
          />
        )}
      </div>
    );
  }
}

export default IdeaPage;
