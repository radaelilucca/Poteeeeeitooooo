import React, { useState, useEffect } from "react";
import { FiLogIn } from "react-icons/fi";
import UIfx from "uifx";
import Modal from "react-modal";

import song from "../../assets/song.mp3";
import cash from "../../assets/cash.mp3";

import { Container, SectionForm, Form, Button, Image } from "./styles";

import umaru from "../../assets/umaru.png";
import umarulogo from "../../assets/umarulogo.png";
import wpp from "../../assets/wpp.jpg";

const potato = new UIfx(song);
const cashsound = new UIfx(cash);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");

export default function Umaru() {
  const [money, setMoney] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    console.log(money);
  }, [money]);

  function handleSubmit(e) {
    e.preventDefault();
    cashsound.play();
    setTimeout(() => {
      potato.play();
    }, 200);
    setMoney("");
    setTimeout(() => {
      setIsOpen(true);
    }, 900);

    setTimeout(() => {
      setIsOpen(false);
    }, 30000);
  }

  function afterOpenModal() {

    console.log("OPENED");
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Image src={wpp} alt="aaa" />
      </Modal>

      <SectionForm>

        <img src={umarulogo} alt="Be The Hero" />

        <Form>
          <h1>Gimme Money! I need more Poteito Chipsu</h1>
         
          <input
            placeholder="AMOUNT"
            value={money}
            onChange={event => setMoney(event.target.value)}
          />

          <Button type="submit" onClick={handleSubmit}>
            SEND MONEY
          </Button>

          <a href="/register">

            
            <FiLogIn size={16} color="#f00d7d" />I dont have money
          </a>
        </Form>
      </SectionForm>
      <img src={umaru} alt="heroes" />
    </Container>
  );
}
