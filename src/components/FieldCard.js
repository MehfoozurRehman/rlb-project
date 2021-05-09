import React from "react";
import "./FieldCard.scss";

export default function FieldCard({ title, info, link }) {
  return (
    <div class="example-2 card">
      <div class="wrapper">
        <div class="data">
          <div class="content">
            <h1 class="title">{title}</h1>
            <p class="text">{info}</p>
            <a href={link} class="button">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
