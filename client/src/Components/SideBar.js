import React from "react";
import { Col } from "mdbreact";
import '../Styles/Components/SideBar.css';

const SideBar = () => (
  <div>
    <Col md="1">
      <div class="icon-bar">
        <a href="https://web.facebook.com/profile.php?id=1820458221587826&ref=br_rs" class="facebook"><i class="fa fa-facebook"></i></a> 
        <a href="https://www.instagram.com/bloom_tailors/" class="instagram"><i class="fa fa-instagram"></i></a> 
      </div>
    </Col>
  </div>
);

export default SideBar;