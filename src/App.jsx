import React, { Component } from "react";

export default class index extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Bulma</h1>

                <p className="subtitle">
                    Modern CSS framework based on{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
                        Flexbox
                    </a>
                </p>

                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Input" />
                    </div>
                </div>

                <div className="field">
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                <span>Nice Dropdown</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down has-text-primary" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    Overview
                                </a>
                                <a href="#" class="dropdown-item">
                                    Modifiers
                                </a>
                                <a href="#" class="dropdown-item">
                                    Grid
                                </a>
                                <a href="#" class="dropdown-item">
                                    Form
                                </a>
                                <a href="#" class="dropdown-item">
                                    Elements
                                </a>
                                <a href="#" class="dropdown-item">
                                    Components
                                </a>
                                <a href="#" class="dropdown-item">
                                    Layout
                                </a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <a className="button is-primary">Primary</a>
                    <a className="button is-link">Link</a>
                </div>
            </div>
        );
    }
}
