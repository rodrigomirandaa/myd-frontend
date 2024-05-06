import React from "react";
import ButtonPrimary from "../../components/Button/Button";
import styles from "./SobrePage.module.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";


const SobrePage = () => {
  return (
    <React.Fragment>
      <div className={styles.SobrePage}>
        <Row>
          <Col span={24}>
            <h1>Sobre a MYD, Make Your Day</h1>
          </Col>
        </Row>
        <Row className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit laudantium at impedit! Magni, nobis natus voluptate officia a perspiciatis quidem distinctio saepe, ipsa nisi quam nemo veniam nostrum ad?
        </Row>
        <Row>
            <Link to="/">
            <ButtonPrimary name={"Voltar"} />
            </Link>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default SobrePage;
