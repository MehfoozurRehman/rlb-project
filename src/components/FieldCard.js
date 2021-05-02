import React from "react";
import { Card } from "react-bootstrap";
import fieldCardBg from "../assets/fieldCardBg.png";

export default function FieldCard() {
  return (
    <Card className="field__card">
      <Card.Img src={fieldCardBg} alt="Card image" />
      <Card.ImgOverlay className="field__card__text__overlay">
        <Card.Text className="field__card__text">
          Manager Field Service
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
