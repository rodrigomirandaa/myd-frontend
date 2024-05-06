import React from "react";
import ButtonPrimary from "../../components/Button/Button";
import logo from "../../../public/icons/logo.png";
import styles from "./InitialPage.module.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const InitialPage = () => {
  return (
    <React.Fragment>
      <div className={styles.InitialPage}>
        <Row>
          <Col span={24}>
            <img src={logo} alt="logo" />
          </Col>
        </Row>
        <Row className={styles.subTitle}>
          Vamos juntos em busca de uma jornada <br />
          diária cheia de descobertas e<br />
          conquistas!
        </Row>
        <Row
          style={{
            marginTop: "25px",
          }}
        >
          <ButtonPrimary name={"Entrar"} />
        </Row>
        <Row
         style={{
          marginTop: "15px",
        }}
        >
          <ButtonPrimary name={"Cadastrar"} />
        </Row>

        <Row
        style={{
          marginTop: "15px",
        }}
        >
          <Link to="/sobre">
          <ButtonPrimary name={"Sobre nós"} />
          </Link>
          
        </Row>

        
        
      </div>
    </React.Fragment>
  );
};

export default InitialPage;
